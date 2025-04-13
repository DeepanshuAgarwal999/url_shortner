import rateLimit from 'express-rate-limit';

export const limiter = rateLimit({
    windowMs: process.env.RATE_LIMIT_WINDOW * 60 * 1000, // Convert minutes to milliseconds
    max: process.env.RATE_LIMIT_MAX_REQUESTS,
    message: {
        status: 429,
        message: 'Too many requests, please try again later.'
    }
});

// Specific limiter for URL shortening
export const urlCreationLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 10, // max 10 URLs per hour
    message: {
        status: 429,
        message: 'URL creation limit reached, please try again later.'
    }
});