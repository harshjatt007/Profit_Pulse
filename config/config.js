const mongoose = require("mongoose");
require("colors");

//connecDB Function

const connectDb = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://BWgMJvm6hNgcKlXC:BWgMJvm6hNgcKlXC@cluster0.dyhisgx.mongodb.net/profitPulse");
    console.log(`MongoDB Connected ${conn.connection.host}`.bgYellow);
  } catch (error) {
    console.log(`Error : ${error.message}`.bgRed);
    process.exit(1);
  }
};

//export
module.exports = connectDb;
