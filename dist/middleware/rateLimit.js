"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.urlCreationLimiter = exports.limiter = void 0;
var _expressRateLimit = _interopRequireDefault(require("express-rate-limit"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var limiter = exports.limiter = (0, _expressRateLimit["default"])({
  windowMs: process.env.RATE_LIMIT_WINDOW * 60 * 1000,
  // Convert minutes to milliseconds
  max: process.env.RATE_LIMIT_MAX_REQUESTS,
  message: {
    status: 429,
    message: 'Too many requests, please try again later.'
  }
});

// Specific limiter for URL shortening
var urlCreationLimiter = exports.urlCreationLimiter = (0, _expressRateLimit["default"])({
  windowMs: 60 * 60 * 1000,
  // 1 hour
  max: 10,
  // max 10 URLs per hour
  message: {
    status: 429,
    message: 'URL creation limit reached, please try again later.'
  }
});