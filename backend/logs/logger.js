const fs = require("fs");

const log = (req, res, next) => {
  const logEntry = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;

  fs.appendFile("logs/accessNormal.log", logEntry, (err) => {
    if (err) {
      console.error("Error writing to log file:", err);
    }
  });

  next();
};

module.exports = log;
