import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
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
      default: false
    },
    imageUrl: String,
    style: {
      foreground: {
        type: String,
        default: '#000000'
      },
      background: {
        type: String,
        default: '#FFFFFF'
      },
      size: {
        type: Number,
        default: 200
      },
      logo: String
    }
  },
  expirationDate: {
    type: Date
  },
  clicks: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  },
  analytics: [{
    timestamp: Date,
    ipAddress: String,
    userAgent: String,
    referrer: String
  }]
}, { timestamps: true });

export const Url = mongoose.model('Url', urlSchema);