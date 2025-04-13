"use strict";

var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _index = require("./routes/index.js");
var _database = _interopRequireDefault(require("./config/database.js"));
var _rateLimit = require("./middleware/rateLimit.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
_dotenv["default"].config();
var app = (0, _express["default"])();
var PORT = process.env.PORT || 3000;

// Middleware
app.use((0, _cors["default"])({
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
  allowedHeaders: ["Content-Type", "Authorization"],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  credentials: true
}));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));

// Routes
app.use("/api", _index.router);

// Connect to Database
(0, _database["default"])();

// Error handling middleware
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({
    message: "Something went wrong!"
  });
});

// Apply rate limiting to all routes
app.use(_rateLimit.limiter);
app.listen(PORT, function () {
  console.log("Server is running on port ".concat(PORT));
});