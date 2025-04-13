"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var userSchema = new _mongoose["default"].Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date
}, {
  timestamps: true
});
var User = exports.User = _mongoose["default"].model('User', userSchema);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9uZ29vc2UiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImUiLCJfX2VzTW9kdWxlIiwidXNlclNjaGVtYSIsIm1vbmdvb3NlIiwiU2NoZW1hIiwiZW1haWwiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ1bmlxdWUiLCJwYXNzd29yZCIsIm5hbWUiLCJyZXNldFBhc3N3b3JkVG9rZW4iLCJyZXNldFBhc3N3b3JkRXhwaXJlcyIsIkRhdGUiLCJ0aW1lc3RhbXBzIiwiVXNlciIsImV4cG9ydHMiLCJtb2RlbCJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvVXNlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gIGVtYWlsOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIHVuaXF1ZTogdHJ1ZSxcclxuICB9LFxyXG4gIHBhc3N3b3JkOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICB9LFxyXG4gIG5hbWU6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gIH0sXHJcbiAgcmVzZXRQYXNzd29yZFRva2VuOiBTdHJpbmcsXHJcbiAgcmVzZXRQYXNzd29yZEV4cGlyZXM6IERhdGUsXHJcbn0sIHsgdGltZXN0YW1wczogdHJ1ZSB9KTtcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWwoJ1VzZXInLCB1c2VyU2NoZW1hKTsiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQUFBLFNBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUFnQyxTQUFBRCx1QkFBQUUsQ0FBQSxXQUFBQSxDQUFBLElBQUFBLENBQUEsQ0FBQUMsVUFBQSxHQUFBRCxDQUFBLGdCQUFBQSxDQUFBO0FBRWhDLElBQU1FLFVBQVUsR0FBRyxJQUFJQyxvQkFBUSxDQUFDQyxNQUFNLENBQUM7RUFDckNDLEtBQUssRUFBRTtJQUNMQyxJQUFJLEVBQUVDLE1BQU07SUFDWkMsUUFBUSxFQUFFLElBQUk7SUFDZEMsTUFBTSxFQUFFO0VBQ1YsQ0FBQztFQUNEQyxRQUFRLEVBQUU7SUFDUkosSUFBSSxFQUFFQyxNQUFNO0lBQ1pDLFFBQVEsRUFBRTtFQUNaLENBQUM7RUFDREcsSUFBSSxFQUFFO0lBQ0pMLElBQUksRUFBRUMsTUFBTTtJQUNaQyxRQUFRLEVBQUU7RUFDWixDQUFDO0VBQ0RJLGtCQUFrQixFQUFFTCxNQUFNO0VBQzFCTSxvQkFBb0IsRUFBRUM7QUFDeEIsQ0FBQyxFQUFFO0VBQUVDLFVBQVUsRUFBRTtBQUFLLENBQUMsQ0FBQztBQUVqQixJQUFNQyxJQUFJLEdBQUFDLE9BQUEsQ0FBQUQsSUFBQSxHQUFHYixvQkFBUSxDQUFDZSxLQUFLLENBQUMsTUFBTSxFQUFFaEIsVUFBVSxDQUFDIiwiaWdub3JlTGlzdCI6W119