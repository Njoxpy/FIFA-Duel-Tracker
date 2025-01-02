const express = require("express");
const router = express.Router();

// GET
router.get("/", (req, res) => {
  res.json({ message: "Get all matches" });
});

router.get("/:id", (req, res) => {
  res.json({
    message: "Get match by id",
    params: req.params,
  });
});

router.get("/search", (req, res) => {
  const query = req.query;
  res.json(query);
});

// POST
router.post("/", (req, res) => {
  res.json({ message: "Add new match results" });
});

// DELETE
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.json({ message: `Delete match stat: ${id}` });
});

// UPDATE
router.put("/:id", (req, res) => {
  res.json({ message: "Update match stats" });
});

module.exports = router;
