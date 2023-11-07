const mongoose = require("mongoose");
require("dotenv").config();

const connection = async () => {
  const path = process.env.DB_URL;
  await mongoose.connect(path);
  console.log("Databse is Connected");
};

module.exports = { connection };
