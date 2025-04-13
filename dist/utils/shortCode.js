"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _crypto = _interopRequireDefault(require("crypto"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var generateShortCode = function generateShortCode() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
  var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var randomBytes = _crypto["default"].randomBytes(length);
  var result = '';
  for (var i = 0; i < length; i++) {
    var randomIndex = randomBytes[i] % characters.length;
    result += characters[randomIndex];
  }
  return result;
};
var _default = exports["default"] = generateShortCode;