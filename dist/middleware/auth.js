"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authenticateToken = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var authenticateToken = exports.authenticateToken = function authenticateToken(req, res, next) {
  var authHeader = req.headers['authorization'];
  var token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({
      message: 'Authentication required'
    });
  }
  _jsonwebtoken["default"].verify(token, process.env.JWT_SECRET, function (err, user) {
    if (err) {
      return res.status(403).json({
        message: 'Invalid token'
      });
    }
    req.user = user;
    next();
  });
};