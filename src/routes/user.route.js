import { Router } from 'express';
import { z } from 'zod';
import bcrypt from 'bcryptjs';
import { User } from '../models/User.js';
import { generateToken } from '../utils/jwt.js';
import { sendResetPasswordEmail } from '../utils/email.js';
import { generateResetToken, verifyResetToken } from '../utils/email.js';
import { authenticateToken } from '../middleware/auth.js';

const router = Router();

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(2),
});

const forgotPasswordSchema = z.object({
  email: z.string().email(),
});

const resetPasswordSchema = z.object({
  token: z.string(),
  password: z.string().min(6),
});

const verifyResetTokenSchema = z.object({
  token: z.string(),
});

// Register
router.post('/register', async (req, res) => {
  try {
    const validatedData = registerSchema.parse(req.body);
    
    const userExists = await User.findOne({ email: validatedData.email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(validatedData.password, 10);
    const user = await User.create({
      ...validatedData,
      password: hashedPassword,
    });

    const token = generateToken(user._id);
    res.status(201).json({
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (error) {
    res.status(400).json({ errors: error.errors });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const validatedData = loginSchema.parse(req.body);
    
    const user = await User.findOne({ email: validatedData.email });
    if (!user || !(await bcrypt.compare(validatedData.password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user._id);
    res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (error) {
    res.status(400).json({ errors: error.errors });
  }
});

// Forgot Password route
router.post('/forgot-password', async (req, res) => {
  try {
    const { email } = forgotPasswordSchema.parse(req.body);
    
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const { resetToken, hashedToken, expiresIn } = generateResetToken();
    
    user.resetPasswordToken = hashedToken;
    user.resetPasswordExpires = expiresIn;
    await user.save();

    await sendResetPasswordEmail(email, resetToken);
    res.json({ message: 'Password reset email sent' });
  } catch (error) {
    res.status(400).json({ errors: error.errors });
  }
});

// Reset Password route
router.post('/reset-password', async (req, res) => {
  try {
    const { token, password } = resetPasswordSchema.parse(req.body);
    
    const user = await User.findOne({
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user || !verifyResetToken(token, user.resetPasswordToken)) {
      return res.status(400).json({ message: 'Invalid or expired reset token' });
    }

    user.password = await bcrypt.hash(password, 10);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.json({ message: 'Password reset successful' });
  } catch (error) {
    res.status(400).json({ errors: error.errors });
  }
});

// Verify reset token when user clicks email link
router.get('/verify-reset-token/:token', async (req, res) => {
  try {
    const { token } = verifyResetTokenSchema.parse({ token: req.params.token });
    
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({ 
        message: 'Password reset link is invalid or has expired',
        isValid: false 
      });
    }

    res.json({ 
      message: 'Token is valid',
      isValid: true,
      email: user.email 
    });
  } catch (error) {
    res.status(400).json({ 
      message: 'Invalid reset token',
      isValid: false 
    });
  }
});

// Add this new schema
const verifyForgotPasswordSchema = z.object({
  email: z.string().email(),
  token: z.string(),
});

// Add this new route after forgot-password route
router.get('/verify-forgot-password/:email/:token', async (req, res) => {
  try {
    const { email, token } = verifyForgotPasswordSchema.parse({
      email: req.params.email,
      token: req.params.token
    });
    
    const user = await User.findOne({
      email,
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({ 
        message: 'Password reset link is invalid or has expired',
        isValid: false 
      });
    }

    res.json({ 
      message: 'Reset link is valid',
      isValid: true,
      email: user.email 
    });
  } catch (error) {
    res.status(400).json({ 
      message: 'Invalid reset link',
      isValid: false 
    });
  }
});

router.get('/me', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password -resetPasswordToken -resetPasswordExpires');
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user information' });
  }
});

export { router as userRouter };