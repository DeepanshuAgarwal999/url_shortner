import { Router } from 'express';
import { Url } from '../models/Url.js';
import { userRouter } from './user.route.js';
import { urlRouter } from './url.route.js';

const router = Router();

// Mount routes
router.use('/auth', userRouter);
router.use('/urls', urlRouter);

// Redirect route with analytics logging


// Health check route
router.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

export { router };