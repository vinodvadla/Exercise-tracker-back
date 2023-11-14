const jwt = require("jsonwebtoken");
let User = require("../Models/userModel");

const auth = async (req, res, next) => {
  let { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json("autherisation token required");
  }
  const token = authorization.split(" ")[1];
  try {
    let { id } = jwt.verify(token, process.env.SECRET);
    req.user = await User.findOne({ _id: id }).select("_id");
    next();
  } catch (error) {
    res.status(404).json({ error: "user not found" });
  }
};

module.exports = auth;
