const express = require("express");
const dbConnect = require("../DB/DBconnect");
let userRouter = require("../Routes/UserRouter");
let workoutRouter = require("../Routes/workoutRoute");
let auth = require("./Auth");
const app = express();
const cors = require("cors");
require("dotenv").config();

dbConnect();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", userRouter);
app.use("/workouts", auth, workoutRouter);

module.exports = app;
