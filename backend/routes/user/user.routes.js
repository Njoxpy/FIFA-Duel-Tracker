const express = require("express");
const router = express.Router();

router.post("/signup", (req, res) => {
  res.json({ message: "Register new user" });
});

router.post("/login", (req, res) => {
  res.json({ message: "Login a user" });
});

router.get("/profile", (req, res) => {
  res.json({ message: "retrieve user profile" });
});

router.put("/profile", (req, res) => {
  res.json({ nessage: "allow user to update their profile" });
});

module.exports = router;
