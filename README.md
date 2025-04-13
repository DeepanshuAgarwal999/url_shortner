# URL Shortener API

A robust URL shortening service built with Node.js, Express, and MongoDB.

## Features

- URL Shortening with custom alias support
- QR Code generation for shortened URLs
- Analytics tracking (clicks, user agent, referrer)
- User authentication and authorization
- Rate limiting for API endpoints
- Email notifications for password reset
- Pagination for URLs and analytics

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Gmail account (for email notifications)

## Environment Variables

Create a `.env` file in the root directory:

```env
PORT=4000
NODE_ENV=development
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=30d
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
SMTP_SECURE=true
BASE_URL=http://localhost:3000
FRONTEND_URL=http://localhost:3000
RATE_LIMIT_WINDOW=2
RATE_LIMIT_MAX_REQUESTS=100
