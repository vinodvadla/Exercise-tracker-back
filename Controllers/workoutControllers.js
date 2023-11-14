const Workout = require("../Models/WorkoutModel");

const getAllWorkouts = async (req, res) => {
  try {
    let id = req.user;
    let data = await Workout.find({ user: id });
    res.status(200).json({ workouts: data });
  } catch (error) {
    return res.ststus(404).json({ error: error.message });
  }
};

let addWorkout = async (req, res) => {
  let { title, duration, description } = req.body;
  if (!title || !duration || !description) {
    return res.status(404).json({ error: "All fields must be filled" });
  }
  try {
    let id = req.user;
    let workout = new Workout({
      user: id,
      title,
      duration: +duration,
      description,
    });
    await workout.save();
    res.status(200).json({ success: "workout saved successfully" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

let deleteWorkout = async (req, res) => {
  let id = req.params.id;
  try {
    await Workout.deleteOne({ _id: id });
    res.status(200).json({ message: "delete successfull" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { addWorkout, getAllWorkouts, deleteWorkout };
