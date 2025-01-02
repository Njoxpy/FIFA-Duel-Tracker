const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Get all players" });
});

router.get("/:id", (req, res) => {
  res.json({ message: "Get player by id" });
});

router.post("/", (req, res) => {
  res.json({ message: "add new player" });
});

router.put("/:id", (req, res) => {
  res.json({ message: "Update player" });
});

module.exports = router;
