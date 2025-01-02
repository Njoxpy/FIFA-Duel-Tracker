/* eslint-disable no-undef */
const express = require("express");
const PORT = process.env.PORT || 5000;

// create instance
const app = express();

// resgister routes
const matchRoutes = require("./routes/match/match.routes");
const playerRoutes = require("./routes/player/player.routes");
const tableRoutes = require("./routes/table/table.routes");
const userRoutes = require("./routes/user/user.routes");

app.use("/api/v1/matches", matchRoutes);
app.use("/api/v1/players", playerRoutes);
app.use("/api/v1/table", tableRoutes);
app.use("/api/v1/user/auth", userRoutes);

app.get("/api/v1", (req, res) => {
  res.json({ message: "Hello from FIFA faceoff" });
});

// Handle undefined routes
app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

// listen for requests
app.listen(PORT, () => {
  console.log(`Listening at: http://localhost:${PORT}`);
});
