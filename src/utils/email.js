import nodemailer from "nodemailer";
import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true, // upgrade later with STARTTLS
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: true, // Accept self-signed certificates
  },
});

export const sendEmail = async (options) => {
  try {
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: options.email,
      subject: options.subject,
      html: options.message,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", info.messageId);
    return info;
  } catch (error) {
    console.error("Email sending error:", error);
    throw error;
  }
};

// Generate reset token
export const generateResetToken = () => {
  const resetToken = crypto.randomBytes(32).toString("hex");
  const hashedToken = crypto.createHash("sha256").update(resetToken).digest("hex");

  return {
    resetToken, // Send to user via email
    hashedToken, // Save in database
    expiresIn: Date.now() + 3600000, // 1 hour
  };
};

// Verify reset token
export const verifyResetToken = (userToken, hashedTokenFromDB) => {
  const hashedToken = crypto.createHash("sha256").update(userToken).digest("hex");

  return hashedToken === hashedTokenFromDB;
};

export const sendResetPasswordEmail = async (email, resetToken) => {
  const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

  try {
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to take our messages");
      }
    });
    await transporter.sendMail(
      {
        to: email,
        subject: "Password Reset Request",
        html: `
      <p>You requested a password reset</p>
      <p>Click this link to reset your password:</p>
      <p>This link is valid for 1 hour.</p>
      <a href="${resetUrl}">${resetUrl}</a>
    `,
      },
      (error, info) => {
        if (error) {
          console.log("Error while sending email:", error);
        } else {
          console.log("Email sent:", info);
        }
      }
    );
  } catch (error) {
    console.log("Error while sending email:", error);
    throw new Error("Error while sending email");
  }
};
