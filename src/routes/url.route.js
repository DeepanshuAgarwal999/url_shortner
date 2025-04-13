import { Router } from "express";
import { z } from "zod";
import { Url } from "../models/Url.js";
import { authenticateToken } from "../middleware/auth.js";
import { urlCreationLimiter } from "../middleware/rateLimit.js";
import { generateQRCode } from "../utils/qrcode.js";
import generateShortCode from "../utils/shortCode.js";


const router = Router();

// Update the URL schema to include QR code options
const urlSchema = z.object({
  longUrl: z.string().url(),
  customAlias: z.string().min(3).optional(),
  expirationDate: z.string().datetime().optional(),
  qrCode: z
    .object({
      enabled: z.boolean().optional(),
      style: z
        .object({
          foreground: z.string().optional(),
          background: z.string().optional(),
          size: z.number().optional(),
        })
        .optional(),
    })
    .optional(),
});

// Update the post route
router.post("/", authenticateToken, urlCreationLimiter, async (req, res) => {
  try {
    const validatedData = urlSchema.parse(req.body);
    // Generate and verify unique short code
    let shortCode = validatedData.customAlias || generateShortCode();
    const existingUrl = await Url.findOne({ shortCode });

    if (existingUrl && validatedData.customAlias) {
      return res.status(409).json({
        success: false,
        message: "Alias already in use. Please try again.",
      });
    }
    if (existingUrl) {
      shortCode = generateShortCode(8);
    }

    const shortUrl = `${process.env.BASE_URL}/${shortCode}`;

    // Generate QR code if enabled
    let qrCodeData = null;
    if (validatedData.qrCode?.enabled) {
      qrCodeData = await generateQRCode(shortUrl, validatedData.qrCode.style);
    }

    const url = new Url({
      userId: req.user.id,
      originalUrl: validatedData.longUrl,
      shortCode,
      customAlias: validatedData.customAlias,
      expirationDate: validatedData.expirationDate,
      qrCode: {
        enabled: validatedData.qrCode?.enabled || false,
        imageUrl: qrCodeData,
        style: validatedData.qrCode?.style || {},
      },
    });

    await url.save();

    res.status(201).json({
      success: true,
      data: {
        originalUrl: url.originalUrl,
        shortUrl,
        shortCode,
        customAlias: url.customAlias,
        expirationDate: url.expirationDate,
        qrCode: url.qrCode.enabled ? url.qrCode : null,
        createdAt: url.createdAt,
      },
    });
  } catch (error) {
    if (error.name === "ZodError") {
      return res.status(400).json({
        success: false,
        errors: error.errors,
      });
    }
    res.status(500).json({
      success: false,
      message: "Error creating shortened URL",
    });
  }
});

// Add a route to generate/update QR code for existing URL
router.post("/:id/qrcode", authenticateToken, async (req, res) => {
  try {
    const url = await Url.findOne({
      _id: req.params.id,
      userId: req.user.id,
    });

    if (!url) {
      return res.status(404).json({ message: "URL not found" });
    }

    const shortUrl = `${process.env.BASE_URL}/${url.shortCode}`;
    const qrCodeData = await generateQRCode(shortUrl, req.body.style);

    url.qrCode = {
      enabled: true,
      imageUrl: qrCodeData,
      style: {
        ...req.body.style,
      },
    };

    await url.save();
    res.json({ qrCode: url.qrCode });
  } catch (error) {
    res.status(500).json({ message: "Error generating QR code" });
  }
});

router.get("/", authenticateToken, async (req, res) => {
  try {
    const urls = await Url.find({ userId: req.user.id }).select("-analytics").sort({ createdAt: -1 });
    res.json({ urls });
  } catch (error) {
    res.status(500).json({ message: "Error fetching URLs" });
  }
});

router.get("/analytics", authenticateToken, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const userId = req.user.id;

    // Fetch all user's URLs (no pagination) to compute totals
    const allUrls = await Url.find({ userId }).lean();

    const totalUrls = allUrls.length;
    const totalActiveLinks = allUrls.filter((url) => url.isActive).length;
    const totalClicks = allUrls.reduce((sum, url) => sum + (url.clicks || 0), 0);

    // Paginate
    const urls = allUrls.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(skip, skip + limit);

    res.json({
      success: true,
      data: urls.map((url) => ({
        urlId: url._id,
        originalUrl: url.originalUrl,
        shortUrl: `${process.env.BASE_URL}/${url.shortCode}`,
        totalClicks: url.clicks,
        lastClicked: url.analytics[url.analytics.length - 1]?.timestamp || null,
        createdAt: url.createdAt,
        isActive: url.isActive,
        expirationDate: url.expirationDate,
      })),
      stats: {
        totalUrls,
        totalActiveLinks,
        totalClicks,
      },
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(totalUrls / limit),
        totalItems: totalUrls,
        itemsPerPage: limit,
        hasNextPage: page < Math.ceil(totalUrls / limit),
        hasPrevPage: page > 1,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching analytics",
    });
  }
});

export { router as urlRouter };
