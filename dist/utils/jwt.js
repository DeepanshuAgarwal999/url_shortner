"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = exports.generateToken = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var generateToken = exports.generateToken = function generateToken(userId) {
  return _jsonwebtoken["default"].sign({
    id: userId
  }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  });
};
var verifyToken = exports.verifyToken = function verifyToken(token) {
  try {
    return _jsonwebtoken["default"].verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
};