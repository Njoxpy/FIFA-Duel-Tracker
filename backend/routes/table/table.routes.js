const express = require("express");
const router = express.Router();

// GET /league
// Retrieve the league table with rankings, points, and goal difference.

router.get("/", (req, res) => {
  res.json({ message: "Get league table" });
});

module.exports = router;
