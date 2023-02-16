const config = require("../config");
const mongoose = require("mongoose");

const mongoUri = config.MONGO_URI;

async function initDatabase() {
  mongoose.set("strictQuery", false);
  await mongoose.connect(mongoUri);
  console.log("Database is initialized");
}

module.exports = initDatabase;
