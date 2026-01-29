const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");

const registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty) {
    return res.status(400).json({ errors: errors.array() });
  }

  let { fullname, email, password } = req.body;

  let isUserAlready = await userModel.findOne({ email: email });
  if (isUserAlready) {
    return res.status(401).json({
      message: "This Email is Already Exists",
    });
  }

  const hashedPassword = await userModel.hashPassword(password);
  const user = await userService.createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
  });

  const token = user.generateAuthToken();
  res.cookie("token", token);
  res.status(201).json({ token, user });
};

const longinUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  let { email, password } = req.body;
  let user = await userModel.findOne({ email: email }).select("+password");

  if (!user) {
    return res.status(401).json({ message: "Invalid Email or password" });
  }

  let isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid Email or password" });
  }

  let token = user.generateAuthToken();
  res.cookie("token", token);
  res.status(201).json({
    token,
    user,
  });
};

const getUserProfile = (req, res, next) => {
    res.status(200).json(req.user);
};

const logoutUser = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "logged out" });
};

module.exports = { registerUser, longinUser, getUserProfile, logoutUser };
