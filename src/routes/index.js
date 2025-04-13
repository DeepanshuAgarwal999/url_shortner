import { Router } from 'express';
import { Url } from '../models/Url.js';
import { userRouter } from './user.route.js';
import { urlRouter } from './url.route.js';

const router = Router();

// Mount routes
router.use('/auth', userRouter);
router.use('/urls', urlRouter);

// Redirect route with analytics logging
router.get('/:shortCode', async (req, res) => {
  try {
    const url = await Url.findOne({ shortCode: req.params.shortCode });
    
    if (!url || !url.isActive || (url.expirationDate && url.expirationDate < new Date())) {
      return res.status(404).json({ message: 'URL not found or expired' });
    }

    // Update analytics
    url.clicks += 1;
    url.analytics.push({
      timestamp: new Date(),
      ipAddress: req.ip,
      userAgent: req.headers['user-agent'],
      referrer: req.headers.referer || ''
    });
    await url.save();

    res.redirect(url.originalUrl);
  } catch (error) {
    res.status(500).json({ message: 'Error redirecting to URL' });
  }
});

// Health check route
router.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

export { router };