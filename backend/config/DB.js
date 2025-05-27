const mongoose = require("mongoose");

const MONGO_URI =
  process.env.MONGO_URI || "mongodb://localhost:27017/FifaDuelTracker";

const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_URI);

    console.log(`Conected sucessfully!`);
  } catch (error) {
    console.error(`Failed to connect to Database: ${error.message}`);
    process.exit(-1);
  }
};

module.exports = connectDb;
