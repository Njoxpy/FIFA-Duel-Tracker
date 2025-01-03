require("dotenv").config();

const express = require("express");
const path = require("path");
const fs = require("fs");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const app = express();

console.log(`NODE ENV: ${process.env.NODE_ENV}`);

const matchRoutes = require("./routes/match/match.routes");
const playerRoutes = require("./routes/player/player.routes");
const tableRoutes = require("./routes/table/table.routes");
const userRoutes = require("./routes/user/user.routes");
const log = require("./logs/logger");

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "logs/accessMorgan.log"),
  { flags: "a" }
);

app.use(express.json());
app.use(cors());
app.use(helmet());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
} else {
  app.use(morgan("combined", { stream: accessLogStream }));
}

app.use("/api/v1/matches", matchRoutes);
app.use("/api/v1/players", playerRoutes);
app.use("/api/v1/table", tableRoutes);
app.use("/api/v1/user/auth", userRoutes);

app.get("/api/v1", (req, res) => {
  res.json({ message: "Hello from FIFA faceoff" });
});

app.use(log);

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  if (process.env.NODE_ENV !== "development") {
    console.error(`Error Occurred: ${error.message}`);
  } else {
    console.error(error);
  }

  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
    },
  });
});

app.listen(PORT, () => {
  console.log(
    `Server running in ${
      process.env.NODE_ENV || "development"
    } mode on port ${PORT}`
  );
});
