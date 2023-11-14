const User = require("../Models/userModel");
const bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");

const signupUser = async (req, res) => {
  let { name, email, password } = req.body;
  try {
    let exist = await User.findOne({ email: email });
    if (exist) {
      return res.status(404).json({ error: "User already exists" });
    }
    let hash = await bcrypt.hash(password, 10);
    let user = new User({ name, email, password: hash });
    await user.save();
    return res.status(200).json({ success: "user created successfully" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ error: "User not exists" });
    }
    let compare = await bcrypt.compare(password, user.password);
    if (!compare) {
      return res.status(404).json({ error: "Password Incorrect" });
    }

    let id = user._id;
    let token = await jwt.sign({ id }, process.env.SECRET);
    res.status(200).json({ user, token});
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { signupUser, loginUser };
