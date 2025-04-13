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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9uZ29vc2UiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImUiLCJfX2VzTW9kdWxlIiwidXJsU2NoZW1hIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJ1c2VySWQiLCJ0eXBlIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsInJlcXVpcmVkIiwib3JpZ2luYWxVcmwiLCJTdHJpbmciLCJzaG9ydENvZGUiLCJ1bmlxdWUiLCJjdXN0b21BbGlhcyIsInNwYXJzZSIsInFyQ29kZSIsImVuYWJsZWQiLCJCb29sZWFuIiwiaW1hZ2VVcmwiLCJzdHlsZSIsImZvcmVncm91bmQiLCJiYWNrZ3JvdW5kIiwic2l6ZSIsIk51bWJlciIsImxvZ28iLCJleHBpcmF0aW9uRGF0ZSIsIkRhdGUiLCJjbGlja3MiLCJpc0FjdGl2ZSIsImFuYWx5dGljcyIsInRpbWVzdGFtcCIsImlwQWRkcmVzcyIsInVzZXJBZ2VudCIsInJlZmVycmVyIiwidGltZXN0YW1wcyIsIlVybCIsImV4cG9ydHMiLCJtb2RlbCJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvVXJsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCB1cmxTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICB1c2VySWQ6IHtcclxuICAgIHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCxcclxuICAgIHJlZjogJ1VzZXInLFxyXG4gICAgcmVxdWlyZWQ6IHRydWVcclxuICB9LFxyXG4gIG9yaWdpbmFsVXJsOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZVxyXG4gIH0sXHJcbiAgc2hvcnRDb2RlOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIHVuaXF1ZTogdHJ1ZVxyXG4gIH0sXHJcbiAgY3VzdG9tQWxpYXM6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHVuaXF1ZTogdHJ1ZSxcclxuICAgIHNwYXJzZTogdHJ1ZVxyXG4gIH0sXHJcbiAgcXJDb2RlOiB7XHJcbiAgICBlbmFibGVkOiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgaW1hZ2VVcmw6IFN0cmluZyxcclxuICAgIHN0eWxlOiB7XHJcbiAgICAgIGZvcmVncm91bmQ6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgZGVmYXVsdDogJyMwMDAwMDAnXHJcbiAgICAgIH0sXHJcbiAgICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgZGVmYXVsdDogJyNGRkZGRkYnXHJcbiAgICAgIH0sXHJcbiAgICAgIHNpemU6IHtcclxuICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgZGVmYXVsdDogMjAwXHJcbiAgICAgIH0sXHJcbiAgICAgIGxvZ286IFN0cmluZ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZXhwaXJhdGlvbkRhdGU6IHtcclxuICAgIHR5cGU6IERhdGVcclxuICB9LFxyXG4gIGNsaWNrczoge1xyXG4gICAgdHlwZTogTnVtYmVyLFxyXG4gICAgZGVmYXVsdDogMFxyXG4gIH0sXHJcbiAgaXNBY3RpdmU6IHtcclxuICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICBkZWZhdWx0OiB0cnVlXHJcbiAgfSxcclxuICBhbmFseXRpY3M6IFt7XHJcbiAgICB0aW1lc3RhbXA6IERhdGUsXHJcbiAgICBpcEFkZHJlc3M6IFN0cmluZyxcclxuICAgIHVzZXJBZ2VudDogU3RyaW5nLFxyXG4gICAgcmVmZXJyZXI6IFN0cmluZ1xyXG4gIH1dXHJcbn0sIHsgdGltZXN0YW1wczogdHJ1ZSB9KTtcclxuXHJcbmV4cG9ydCBjb25zdCBVcmwgPSBtb25nb29zZS5tb2RlbCgnVXJsJywgdXJsU2NoZW1hKTsiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQUFBLFNBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUFnQyxTQUFBRCx1QkFBQUUsQ0FBQSxXQUFBQSxDQUFBLElBQUFBLENBQUEsQ0FBQUMsVUFBQSxHQUFBRCxDQUFBLGdCQUFBQSxDQUFBO0FBRWhDLElBQU1FLFNBQVMsR0FBRyxJQUFJQyxvQkFBUSxDQUFDQyxNQUFNLENBQUM7RUFDcENDLE1BQU0sRUFBRTtJQUNOQyxJQUFJLEVBQUVILG9CQUFRLENBQUNDLE1BQU0sQ0FBQ0csS0FBSyxDQUFDQyxRQUFRO0lBQ3BDQyxHQUFHLEVBQUUsTUFBTTtJQUNYQyxRQUFRLEVBQUU7RUFDWixDQUFDO0VBQ0RDLFdBQVcsRUFBRTtJQUNYTCxJQUFJLEVBQUVNLE1BQU07SUFDWkYsUUFBUSxFQUFFO0VBQ1osQ0FBQztFQUNERyxTQUFTLEVBQUU7SUFDVFAsSUFBSSxFQUFFTSxNQUFNO0lBQ1pGLFFBQVEsRUFBRSxJQUFJO0lBQ2RJLE1BQU0sRUFBRTtFQUNWLENBQUM7RUFDREMsV0FBVyxFQUFFO0lBQ1hULElBQUksRUFBRU0sTUFBTTtJQUNaRSxNQUFNLEVBQUUsSUFBSTtJQUNaRSxNQUFNLEVBQUU7RUFDVixDQUFDO0VBQ0RDLE1BQU0sRUFBRTtJQUNOQyxPQUFPLEVBQUU7TUFDUFosSUFBSSxFQUFFYSxPQUFPO01BQ2IsV0FBUztJQUNYLENBQUM7SUFDREMsUUFBUSxFQUFFUixNQUFNO0lBQ2hCUyxLQUFLLEVBQUU7TUFDTEMsVUFBVSxFQUFFO1FBQ1ZoQixJQUFJLEVBQUVNLE1BQU07UUFDWixXQUFTO01BQ1gsQ0FBQztNQUNEVyxVQUFVLEVBQUU7UUFDVmpCLElBQUksRUFBRU0sTUFBTTtRQUNaLFdBQVM7TUFDWCxDQUFDO01BQ0RZLElBQUksRUFBRTtRQUNKbEIsSUFBSSxFQUFFbUIsTUFBTTtRQUNaLFdBQVM7TUFDWCxDQUFDO01BQ0RDLElBQUksRUFBRWQ7SUFDUjtFQUNGLENBQUM7RUFDRGUsY0FBYyxFQUFFO0lBQ2RyQixJQUFJLEVBQUVzQjtFQUNSLENBQUM7RUFDREMsTUFBTSxFQUFFO0lBQ052QixJQUFJLEVBQUVtQixNQUFNO0lBQ1osV0FBUztFQUNYLENBQUM7RUFDREssUUFBUSxFQUFFO0lBQ1J4QixJQUFJLEVBQUVhLE9BQU87SUFDYixXQUFTO0VBQ1gsQ0FBQztFQUNEWSxTQUFTLEVBQUUsQ0FBQztJQUNWQyxTQUFTLEVBQUVKLElBQUk7SUFDZkssU0FBUyxFQUFFckIsTUFBTTtJQUNqQnNCLFNBQVMsRUFBRXRCLE1BQU07SUFDakJ1QixRQUFRLEVBQUV2QjtFQUNaLENBQUM7QUFDSCxDQUFDLEVBQUU7RUFBRXdCLFVBQVUsRUFBRTtBQUFLLENBQUMsQ0FBQztBQUVqQixJQUFNQyxHQUFHLEdBQUFDLE9BQUEsQ0FBQUQsR0FBQSxHQUFHbEMsb0JBQVEsQ0FBQ29DLEtBQUssQ0FBQyxLQUFLLEVBQUVyQyxTQUFTLENBQUMiLCJpZ25vcmVMaXN0IjpbXX0=