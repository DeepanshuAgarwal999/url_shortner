"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Url = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var urlSchema = new _mongoose["default"].Schema({
  userId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  originalUrl: {
    type: String,
    required: true
  },
  shortCode: {
    type: String,
    required: true,
    unique: true
  },
  customAlias: {
    type: String,
    unique: true,
    sparse: true
  },
  qrCode: {
    enabled: {
      type: Boolean,
      "default": false
    },
    imageUrl: String,
    style: {
      foreground: {
        type: String,
        "default": '#000000'
      },
      background: {
        type: String,
        "default": '#FFFFFF'
      },
      size: {
        type: Number,
        "default": 200
      },
      logo: String
    }
  },
  expirationDate: {
    type: Date
  },
  clicks: {
    type: Number,
    "default": 0
  },
  isActive: {
    type: Boolean,
    "default": true
  },
  analytics: [{
    timestamp: Date,
    ipAddress: String,
    userAgent: String,
    referrer: String
  }]
}, {
  timestamps: true
});
var Url = exports.Url = _mongoose["default"].model('Url', urlSchema);