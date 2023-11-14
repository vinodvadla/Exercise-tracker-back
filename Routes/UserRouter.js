const express = require("express");
const { signupUser, loginUser } = require("../Controllers/UserControllers");

let router = express.Router();

router.post("/signup", signupUser).post("/login", loginUser);

module.exports = router;
