"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRouter = void 0;
var _express = require("express");
var _zod = require("zod");
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
var _User = require("../models/User.js");
var _jwt = require("../utils/jwt.js");
var _email = require("../utils/email.js");
var _auth = require("../middleware/auth.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var router = exports.userRouter = (0, _express.Router)();
var loginSchema = _zod.z.object({
  email: _zod.z.string().email(),
  password: _zod.z.string().min(6)
});
var registerSchema = _zod.z.object({
  email: _zod.z.string().email(),
  password: _zod.z.string().min(6),
  name: _zod.z.string().min(2)
});
var forgotPasswordSchema = _zod.z.object({
  email: _zod.z.string().email()
});
var resetPasswordSchema = _zod.z.object({
  token: _zod.z.string(),
  password: _zod.z.string().min(6)
});
var verifyResetTokenSchema = _zod.z.object({
  token: _zod.z.string()
});

// Register
router.post('/register', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var validatedData, userExists, hashedPassword, user, token;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          validatedData = registerSchema.parse(req.body);
          _context.next = 4;
          return _User.User.findOne({
            email: validatedData.email
          });
        case 4:
          userExists = _context.sent;
          if (!userExists) {
            _context.next = 7;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            message: 'User already exists'
          }));
        case 7:
          _context.next = 9;
          return _bcryptjs["default"].hash(validatedData.password, 10);
        case 9:
          hashedPassword = _context.sent;
          _context.next = 12;
          return _User.User.create(_objectSpread(_objectSpread({}, validatedData), {}, {
            password: hashedPassword
          }));
        case 12:
          user = _context.sent;
          token = (0, _jwt.generateToken)(user._id);
          res.status(201).json({
            token: token,
            user: {
              id: user._id,
              email: user.email,
              name: user.name
            }
          });
          _context.next = 20;
          break;
        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](0);
          res.status(400).json({
            errors: _context.t0.errors
          });
        case 20:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 17]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

// Login
router.post('/login', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var validatedData, user, token;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          validatedData = loginSchema.parse(req.body);
          _context2.next = 4;
          return _User.User.findOne({
            email: validatedData.email
          });
        case 4:
          user = _context2.sent;
          _context2.t0 = !user;
          if (_context2.t0) {
            _context2.next = 10;
            break;
          }
          _context2.next = 9;
          return _bcryptjs["default"].compare(validatedData.password, user.password);
        case 9:
          _context2.t0 = !_context2.sent;
        case 10:
          if (!_context2.t0) {
            _context2.next = 12;
            break;
          }
          return _context2.abrupt("return", res.status(401).json({
            message: 'Invalid credentials'
          }));
        case 12:
          token = (0, _jwt.generateToken)(user._id);
          res.json({
            token: token,
            user: {
              id: user._id,
              email: user.email,
              name: user.name
            }
          });
          _context2.next = 19;
          break;
        case 16:
          _context2.prev = 16;
          _context2.t1 = _context2["catch"](0);
          res.status(400).json({
            errors: _context2.t1.errors
          });
        case 19:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 16]]);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

// Forgot Password route
router.post('/forgot-password', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _forgotPasswordSchema, email, user, _generateResetToken, resetToken, hashedToken, expiresIn;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _forgotPasswordSchema = forgotPasswordSchema.parse(req.body), email = _forgotPasswordSchema.email;
          _context3.next = 4;
          return _User.User.findOne({
            email: email
          });
        case 4:
          user = _context3.sent;
          if (user) {
            _context3.next = 7;
            break;
          }
          return _context3.abrupt("return", res.status(404).json({
            message: 'User not found'
          }));
        case 7:
          _generateResetToken = (0, _email.generateResetToken)(), resetToken = _generateResetToken.resetToken, hashedToken = _generateResetToken.hashedToken, expiresIn = _generateResetToken.expiresIn;
          user.resetPasswordToken = hashedToken;
          user.resetPasswordExpires = expiresIn;
          _context3.next = 12;
          return user.save();
        case 12:
          _context3.next = 14;
          return (0, _email.sendResetPasswordEmail)(email, resetToken);
        case 14:
          res.json({
            message: 'Password reset email sent'
          });
          _context3.next = 20;
          break;
        case 17:
          _context3.prev = 17;
          _context3.t0 = _context3["catch"](0);
          res.status(400).json({
            errors: _context3.t0.errors
          });
        case 20:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 17]]);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());

// Reset Password route
router.post('/reset-password', /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var _resetPasswordSchema$, token, password, user;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _resetPasswordSchema$ = resetPasswordSchema.parse(req.body), token = _resetPasswordSchema$.token, password = _resetPasswordSchema$.password;
          _context4.next = 4;
          return _User.User.findOne({
            resetPasswordExpires: {
              $gt: Date.now()
            }
          });
        case 4:
          user = _context4.sent;
          if (!(!user || !(0, _email.verifyResetToken)(token, user.resetPasswordToken))) {
            _context4.next = 7;
            break;
          }
          return _context4.abrupt("return", res.status(400).json({
            message: 'Invalid or expired reset token'
          }));
        case 7:
          _context4.next = 9;
          return _bcryptjs["default"].hash(password, 10);
        case 9:
          user.password = _context4.sent;
          user.resetPasswordToken = undefined;
          user.resetPasswordExpires = undefined;
          _context4.next = 14;
          return user.save();
        case 14:
          res.json({
            message: 'Password reset successful'
          });
          _context4.next = 20;
          break;
        case 17:
          _context4.prev = 17;
          _context4.t0 = _context4["catch"](0);
          res.status(400).json({
            errors: _context4.t0.errors
          });
        case 20:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 17]]);
  }));
  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());

// Verify reset token when user clicks email link
router.get('/verify-reset-token/:token', /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var _verifyResetTokenSche, token, user;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _verifyResetTokenSche = verifyResetTokenSchema.parse({
            token: req.params.token
          }), token = _verifyResetTokenSche.token;
          _context5.next = 4;
          return _User.User.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: {
              $gt: Date.now()
            }
          });
        case 4:
          user = _context5.sent;
          if (user) {
            _context5.next = 7;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            message: 'Password reset link is invalid or has expired',
            isValid: false
          }));
        case 7:
          res.json({
            message: 'Token is valid',
            isValid: true,
            email: user.email
          });
          _context5.next = 13;
          break;
        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](0);
          res.status(400).json({
            message: 'Invalid reset token',
            isValid: false
          });
        case 13:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 10]]);
  }));
  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());

// Add this new schema
var verifyForgotPasswordSchema = _zod.z.object({
  email: _zod.z.string().email(),
  token: _zod.z.string()
});

// Add this new route after forgot-password route
router.get('/verify-forgot-password/:email/:token', /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var _verifyForgotPassword, email, token, user;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _verifyForgotPassword = verifyForgotPasswordSchema.parse({
            email: req.params.email,
            token: req.params.token
          }), email = _verifyForgotPassword.email, token = _verifyForgotPassword.token;
          _context6.next = 4;
          return _User.User.findOne({
            email: email,
            resetPasswordToken: token,
            resetPasswordExpires: {
              $gt: Date.now()
            }
          });
        case 4:
          user = _context6.sent;
          if (user) {
            _context6.next = 7;
            break;
          }
          return _context6.abrupt("return", res.status(400).json({
            message: 'Password reset link is invalid or has expired',
            isValid: false
          }));
        case 7:
          res.json({
            message: 'Reset link is valid',
            isValid: true,
            email: user.email
          });
          _context6.next = 13;
          break;
        case 10:
          _context6.prev = 10;
          _context6.t0 = _context6["catch"](0);
          res.status(400).json({
            message: 'Invalid reset link',
            isValid: false
          });
        case 13:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 10]]);
  }));
  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}());
router.get('/me', _auth.authenticateToken, /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var user;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return _User.User.findById(req.user.id).select('-password -resetPasswordToken -resetPasswordExpires');
        case 3:
          user = _context7.sent;
          if (user) {
            _context7.next = 6;
            break;
          }
          return _context7.abrupt("return", res.status(404).json({
            message: 'User not found'
          }));
        case 6:
          res.json({
            user: {
              id: user._id,
              email: user.email,
              name: user.name,
              createdAt: user.createdAt,
              updatedAt: user.updatedAt
            }
          });
          _context7.next = 12;
          break;
        case 9:
          _context7.prev = 9;
          _context7.t0 = _context7["catch"](0);
          res.status(500).json({
            message: 'Error fetching user information'
          });
        case 12:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 9]]);
  }));
  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZXhwcmVzcyIsInJlcXVpcmUiLCJfem9kIiwiX2JjcnlwdGpzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9Vc2VyIiwiX2p3dCIsIl9lbWFpbCIsIl9hdXRoIiwiZSIsIl9fZXNNb2R1bGUiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJvd25LZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiZmlsdGVyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwiYXJndW1lbnRzIiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJfdG9Qcm9wZXJ0eUtleSIsIl90b1ByaW1pdGl2ZSIsInRvUHJpbWl0aXZlIiwiU3RyaW5nIiwiTnVtYmVyIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfbmV4dCIsIl90aHJvdyIsInJvdXRlciIsImV4cG9ydHMiLCJ1c2VyUm91dGVyIiwiUm91dGVyIiwibG9naW5TY2hlbWEiLCJ6Iiwib2JqZWN0IiwiZW1haWwiLCJzdHJpbmciLCJwYXNzd29yZCIsIm1pbiIsInJlZ2lzdGVyU2NoZW1hIiwiZm9yZ290UGFzc3dvcmRTY2hlbWEiLCJyZXNldFBhc3N3b3JkU2NoZW1hIiwidG9rZW4iLCJ2ZXJpZnlSZXNldFRva2VuU2NoZW1hIiwicG9zdCIsIl9yZWYiLCJfY2FsbGVlIiwicmVxIiwicmVzIiwidmFsaWRhdGVkRGF0YSIsInVzZXJFeGlzdHMiLCJoYXNoZWRQYXNzd29yZCIsInVzZXIiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicGFyc2UiLCJib2R5IiwiVXNlciIsImZpbmRPbmUiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImJjcnlwdCIsImhhc2giLCJnZW5lcmF0ZVRva2VuIiwiX2lkIiwiaWQiLCJ0MCIsImVycm9ycyIsIl94IiwiX3gyIiwiX3JlZjIiLCJfY2FsbGVlMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImNvbXBhcmUiLCJ0MSIsIl94MyIsIl94NCIsIl9yZWYzIiwiX2NhbGxlZTMiLCJfZm9yZ290UGFzc3dvcmRTY2hlbWEiLCJfZ2VuZXJhdGVSZXNldFRva2VuIiwicmVzZXRUb2tlbiIsImhhc2hlZFRva2VuIiwiZXhwaXJlc0luIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiZ2VuZXJhdGVSZXNldFRva2VuIiwicmVzZXRQYXNzd29yZFRva2VuIiwicmVzZXRQYXNzd29yZEV4cGlyZXMiLCJzYXZlIiwic2VuZFJlc2V0UGFzc3dvcmRFbWFpbCIsIl94NSIsIl94NiIsIl9yZWY0IiwiX2NhbGxlZTQiLCJfcmVzZXRQYXNzd29yZFNjaGVtYSQiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCIkZ3QiLCJEYXRlIiwibm93IiwidmVyaWZ5UmVzZXRUb2tlbiIsInVuZGVmaW5lZCIsIl94NyIsIl94OCIsImdldCIsIl9yZWY1IiwiX2NhbGxlZTUiLCJfdmVyaWZ5UmVzZXRUb2tlblNjaGUiLCJfY2FsbGVlNSQiLCJfY29udGV4dDUiLCJwYXJhbXMiLCJpc1ZhbGlkIiwiX3g5IiwiX3gxMCIsInZlcmlmeUZvcmdvdFBhc3N3b3JkU2NoZW1hIiwiX3JlZjYiLCJfY2FsbGVlNiIsIl92ZXJpZnlGb3Jnb3RQYXNzd29yZCIsIl9jYWxsZWU2JCIsIl9jb250ZXh0NiIsIl94MTEiLCJfeDEyIiwiYXV0aGVudGljYXRlVG9rZW4iLCJfcmVmNyIsIl9jYWxsZWU3IiwiX2NhbGxlZTckIiwiX2NvbnRleHQ3IiwiZmluZEJ5SWQiLCJzZWxlY3QiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJfeDEzIiwiX3gxNCJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvdXNlci5yb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XHJcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0anMnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vbW9kZWxzL1VzZXIuanMnO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZVRva2VuIH0gZnJvbSAnLi4vdXRpbHMvand0LmpzJztcclxuaW1wb3J0IHsgc2VuZFJlc2V0UGFzc3dvcmRFbWFpbCB9IGZyb20gJy4uL3V0aWxzL2VtYWlsLmpzJztcclxuaW1wb3J0IHsgZ2VuZXJhdGVSZXNldFRva2VuLCB2ZXJpZnlSZXNldFRva2VuIH0gZnJvbSAnLi4vdXRpbHMvZW1haWwuanMnO1xyXG5pbXBvcnQgeyBhdXRoZW50aWNhdGVUb2tlbiB9IGZyb20gJy4uL21pZGRsZXdhcmUvYXV0aC5qcyc7XHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbmNvbnN0IGxvZ2luU2NoZW1hID0gei5vYmplY3Qoe1xyXG4gIGVtYWlsOiB6LnN0cmluZygpLmVtYWlsKCksXHJcbiAgcGFzc3dvcmQ6IHouc3RyaW5nKCkubWluKDYpLFxyXG59KTtcclxuXHJcbmNvbnN0IHJlZ2lzdGVyU2NoZW1hID0gei5vYmplY3Qoe1xyXG4gIGVtYWlsOiB6LnN0cmluZygpLmVtYWlsKCksXHJcbiAgcGFzc3dvcmQ6IHouc3RyaW5nKCkubWluKDYpLFxyXG4gIG5hbWU6IHouc3RyaW5nKCkubWluKDIpLFxyXG59KTtcclxuXHJcbmNvbnN0IGZvcmdvdFBhc3N3b3JkU2NoZW1hID0gei5vYmplY3Qoe1xyXG4gIGVtYWlsOiB6LnN0cmluZygpLmVtYWlsKCksXHJcbn0pO1xyXG5cclxuY29uc3QgcmVzZXRQYXNzd29yZFNjaGVtYSA9IHoub2JqZWN0KHtcclxuICB0b2tlbjogei5zdHJpbmcoKSxcclxuICBwYXNzd29yZDogei5zdHJpbmcoKS5taW4oNiksXHJcbn0pO1xyXG5cclxuY29uc3QgdmVyaWZ5UmVzZXRUb2tlblNjaGVtYSA9IHoub2JqZWN0KHtcclxuICB0b2tlbjogei5zdHJpbmcoKSxcclxufSk7XHJcblxyXG4vLyBSZWdpc3RlclxyXG5yb3V0ZXIucG9zdCgnL3JlZ2lzdGVyJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHZhbGlkYXRlZERhdGEgPSByZWdpc3RlclNjaGVtYS5wYXJzZShyZXEuYm9keSk7XHJcbiAgICBcclxuICAgIGNvbnN0IHVzZXJFeGlzdHMgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbDogdmFsaWRhdGVkRGF0YS5lbWFpbCB9KTtcclxuICAgIGlmICh1c2VyRXhpc3RzKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6ICdVc2VyIGFscmVhZHkgZXhpc3RzJyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHZhbGlkYXRlZERhdGEucGFzc3dvcmQsIDEwKTtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmNyZWF0ZSh7XHJcbiAgICAgIC4uLnZhbGlkYXRlZERhdGEsXHJcbiAgICAgIHBhc3N3b3JkOiBoYXNoZWRQYXNzd29yZCxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHRva2VuID0gZ2VuZXJhdGVUb2tlbih1c2VyLl9pZCk7XHJcbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7XHJcbiAgICAgIHRva2VuLFxyXG4gICAgICB1c2VyOiB7XHJcbiAgICAgICAgaWQ6IHVzZXIuX2lkLFxyXG4gICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgIG5hbWU6IHVzZXIubmFtZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yczogZXJyb3IuZXJyb3JzIH0pO1xyXG4gIH1cclxufSk7XHJcblxyXG4vLyBMb2dpblxyXG5yb3V0ZXIucG9zdCgnL2xvZ2luJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHZhbGlkYXRlZERhdGEgPSBsb2dpblNjaGVtYS5wYXJzZShyZXEuYm9keSk7XHJcbiAgICBcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbDogdmFsaWRhdGVkRGF0YS5lbWFpbCB9KTtcclxuICAgIGlmICghdXNlciB8fCAhKGF3YWl0IGJjcnlwdC5jb21wYXJlKHZhbGlkYXRlZERhdGEucGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpKSkge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBtZXNzYWdlOiAnSW52YWxpZCBjcmVkZW50aWFscycgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9rZW4gPSBnZW5lcmF0ZVRva2VuKHVzZXIuX2lkKTtcclxuICAgIHJlcy5qc29uKHtcclxuICAgICAgdG9rZW4sXHJcbiAgICAgIHVzZXI6IHtcclxuICAgICAgICBpZDogdXNlci5faWQsXHJcbiAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICAgICAgbmFtZTogdXNlci5uYW1lLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3JzOiBlcnJvci5lcnJvcnMgfSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIEZvcmdvdCBQYXNzd29yZCByb3V0ZVxyXG5yb3V0ZXIucG9zdCgnL2ZvcmdvdC1wYXNzd29yZCcsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGVtYWlsIH0gPSBmb3Jnb3RQYXNzd29yZFNjaGVtYS5wYXJzZShyZXEuYm9keSk7XHJcbiAgICBcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbCB9KTtcclxuICAgIGlmICghdXNlcikge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiAnVXNlciBub3QgZm91bmQnIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgcmVzZXRUb2tlbiwgaGFzaGVkVG9rZW4sIGV4cGlyZXNJbiB9ID0gZ2VuZXJhdGVSZXNldFRva2VuKCk7XHJcbiAgICBcclxuICAgIHVzZXIucmVzZXRQYXNzd29yZFRva2VuID0gaGFzaGVkVG9rZW47XHJcbiAgICB1c2VyLnJlc2V0UGFzc3dvcmRFeHBpcmVzID0gZXhwaXJlc0luO1xyXG4gICAgYXdhaXQgdXNlci5zYXZlKCk7XHJcblxyXG4gICAgYXdhaXQgc2VuZFJlc2V0UGFzc3dvcmRFbWFpbChlbWFpbCwgcmVzZXRUb2tlbik7XHJcbiAgICByZXMuanNvbih7IG1lc3NhZ2U6ICdQYXNzd29yZCByZXNldCBlbWFpbCBzZW50JyB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcnM6IGVycm9yLmVycm9ycyB9KTtcclxuICB9XHJcbn0pO1xyXG5cclxuLy8gUmVzZXQgUGFzc3dvcmQgcm91dGVcclxucm91dGVyLnBvc3QoJy9yZXNldC1wYXNzd29yZCcsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IHRva2VuLCBwYXNzd29yZCB9ID0gcmVzZXRQYXNzd29yZFNjaGVtYS5wYXJzZShyZXEuYm9keSk7XHJcbiAgICBcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoe1xyXG4gICAgICByZXNldFBhc3N3b3JkRXhwaXJlczogeyAkZ3Q6IERhdGUubm93KCkgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCF1c2VyIHx8ICF2ZXJpZnlSZXNldFRva2VuKHRva2VuLCB1c2VyLnJlc2V0UGFzc3dvcmRUb2tlbikpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogJ0ludmFsaWQgb3IgZXhwaXJlZCByZXNldCB0b2tlbicgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlci5wYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XHJcbiAgICB1c2VyLnJlc2V0UGFzc3dvcmRUb2tlbiA9IHVuZGVmaW5lZDtcclxuICAgIHVzZXIucmVzZXRQYXNzd29yZEV4cGlyZXMgPSB1bmRlZmluZWQ7XHJcbiAgICBhd2FpdCB1c2VyLnNhdmUoKTtcclxuXHJcbiAgICByZXMuanNvbih7IG1lc3NhZ2U6ICdQYXNzd29yZCByZXNldCBzdWNjZXNzZnVsJyB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcnM6IGVycm9yLmVycm9ycyB9KTtcclxuICB9XHJcbn0pO1xyXG5cclxuLy8gVmVyaWZ5IHJlc2V0IHRva2VuIHdoZW4gdXNlciBjbGlja3MgZW1haWwgbGlua1xyXG5yb3V0ZXIuZ2V0KCcvdmVyaWZ5LXJlc2V0LXRva2VuLzp0b2tlbicsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IHRva2VuIH0gPSB2ZXJpZnlSZXNldFRva2VuU2NoZW1hLnBhcnNlKHsgdG9rZW46IHJlcS5wYXJhbXMudG9rZW4gfSk7XHJcbiAgICBcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoe1xyXG4gICAgICByZXNldFBhc3N3b3JkVG9rZW46IHRva2VuLFxyXG4gICAgICByZXNldFBhc3N3b3JkRXhwaXJlczogeyAkZ3Q6IERhdGUubm93KCkgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IFxyXG4gICAgICAgIG1lc3NhZ2U6ICdQYXNzd29yZCByZXNldCBsaW5rIGlzIGludmFsaWQgb3IgaGFzIGV4cGlyZWQnLFxyXG4gICAgICAgIGlzVmFsaWQ6IGZhbHNlIFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXMuanNvbih7IFxyXG4gICAgICBtZXNzYWdlOiAnVG9rZW4gaXMgdmFsaWQnLFxyXG4gICAgICBpc1ZhbGlkOiB0cnVlLFxyXG4gICAgICBlbWFpbDogdXNlci5lbWFpbCBcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IFxyXG4gICAgICBtZXNzYWdlOiAnSW52YWxpZCByZXNldCB0b2tlbicsXHJcbiAgICAgIGlzVmFsaWQ6IGZhbHNlIFxyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIEFkZCB0aGlzIG5ldyBzY2hlbWFcclxuY29uc3QgdmVyaWZ5Rm9yZ290UGFzc3dvcmRTY2hlbWEgPSB6Lm9iamVjdCh7XHJcbiAgZW1haWw6IHouc3RyaW5nKCkuZW1haWwoKSxcclxuICB0b2tlbjogei5zdHJpbmcoKSxcclxufSk7XHJcblxyXG4vLyBBZGQgdGhpcyBuZXcgcm91dGUgYWZ0ZXIgZm9yZ290LXBhc3N3b3JkIHJvdXRlXHJcbnJvdXRlci5nZXQoJy92ZXJpZnktZm9yZ290LXBhc3N3b3JkLzplbWFpbC86dG9rZW4nLCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBlbWFpbCwgdG9rZW4gfSA9IHZlcmlmeUZvcmdvdFBhc3N3b3JkU2NoZW1hLnBhcnNlKHtcclxuICAgICAgZW1haWw6IHJlcS5wYXJhbXMuZW1haWwsXHJcbiAgICAgIHRva2VuOiByZXEucGFyYW1zLnRva2VuXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7XHJcbiAgICAgIGVtYWlsLFxyXG4gICAgICByZXNldFBhc3N3b3JkVG9rZW46IHRva2VuLFxyXG4gICAgICByZXNldFBhc3N3b3JkRXhwaXJlczogeyAkZ3Q6IERhdGUubm93KCkgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IFxyXG4gICAgICAgIG1lc3NhZ2U6ICdQYXNzd29yZCByZXNldCBsaW5rIGlzIGludmFsaWQgb3IgaGFzIGV4cGlyZWQnLFxyXG4gICAgICAgIGlzVmFsaWQ6IGZhbHNlIFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXMuanNvbih7IFxyXG4gICAgICBtZXNzYWdlOiAnUmVzZXQgbGluayBpcyB2YWxpZCcsXHJcbiAgICAgIGlzVmFsaWQ6IHRydWUsXHJcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsIFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgXHJcbiAgICAgIG1lc3NhZ2U6ICdJbnZhbGlkIHJlc2V0IGxpbmsnLFxyXG4gICAgICBpc1ZhbGlkOiBmYWxzZSBcclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcblxyXG5yb3V0ZXIuZ2V0KCcvbWUnLCBhdXRoZW50aWNhdGVUb2tlbiwgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRCeUlkKHJlcS51c2VyLmlkKS5zZWxlY3QoJy1wYXNzd29yZCAtcmVzZXRQYXNzd29yZFRva2VuIC1yZXNldFBhc3N3b3JkRXhwaXJlcycpO1xyXG4gICAgXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogJ1VzZXIgbm90IGZvdW5kJyB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXMuanNvbih7XHJcbiAgICAgIHVzZXI6IHtcclxuICAgICAgICBpZDogdXNlci5faWQsXHJcbiAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICAgICAgbmFtZTogdXNlci5uYW1lLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogdXNlci5jcmVhdGVkQXQsXHJcbiAgICAgICAgdXBkYXRlZEF0OiB1c2VyLnVwZGF0ZWRBdFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnRXJyb3IgZmV0Y2hpbmcgdXNlciBpbmZvcm1hdGlvbicgfSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCB7IHJvdXRlciBhcyB1c2VyUm91dGVyIH07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsSUFBQUEsUUFBQSxHQUFBQyxPQUFBO0FBQ0EsSUFBQUMsSUFBQSxHQUFBRCxPQUFBO0FBQ0EsSUFBQUUsU0FBQSxHQUFBQyxzQkFBQSxDQUFBSCxPQUFBO0FBQ0EsSUFBQUksS0FBQSxHQUFBSixPQUFBO0FBQ0EsSUFBQUssSUFBQSxHQUFBTCxPQUFBO0FBQ0EsSUFBQU0sTUFBQSxHQUFBTixPQUFBO0FBRUEsSUFBQU8sS0FBQSxHQUFBUCxPQUFBO0FBQTBELFNBQUFHLHVCQUFBSyxDQUFBLFdBQUFBLENBQUEsSUFBQUEsQ0FBQSxDQUFBQyxVQUFBLEdBQUFELENBQUEsZ0JBQUFBLENBQUE7QUFBQSxTQUFBRSxvQkFBQSxrQkFOMUQscUpBQUFBLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFGLENBQUEsU0FBQUcsQ0FBQSxFQUFBSCxDQUFBLE9BQUFJLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxTQUFBLEVBQUFDLENBQUEsR0FBQUgsQ0FBQSxDQUFBSSxjQUFBLEVBQUFDLENBQUEsR0FBQUosTUFBQSxDQUFBSyxjQUFBLGNBQUFQLENBQUEsRUFBQUgsQ0FBQSxFQUFBSSxDQUFBLElBQUFELENBQUEsQ0FBQUgsQ0FBQSxJQUFBSSxDQUFBLENBQUFPLEtBQUEsS0FBQUMsQ0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFBLE9BQUFDLENBQUEsR0FB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