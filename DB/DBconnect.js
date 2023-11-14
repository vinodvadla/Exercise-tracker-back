const mongoose = require("mongoose");
const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "Workout-tracker",
    });
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnect;
