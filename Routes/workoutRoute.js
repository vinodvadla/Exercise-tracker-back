const express = require("express");
const {
  getAllWorkouts,
  addWorkout,
  deleteWorkout,
} = require("../Controllers/workoutControllers");

let router = express.Router();
router.get("/", getAllWorkouts);
router.post("/add", addWorkout);
router.delete("/:id", deleteWorkout);

module.exports = router;
