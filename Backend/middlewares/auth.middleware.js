const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const blackListTokenModel = require("../models/blacklistToken.model")
const captainModel = require("../models/captain.model")

const authUser = async (req, res, next) => {
  let token = req.cookies.token || req.header.authorization?.split(" ")[1];
  if (!token) {
    return res.status(400).json({ message: "Unauthorized" });
  }

  const isBlackListed = await blackListTokenModel.findOne({ token: token });
  if (!isBlackListed) {
    return res.status(400).json({ message: "Unauthorized" });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = userModel.findById(decoded.id);
    req.user = user;
    return next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

const authCaptain = async (req, res, next) => {
  let token = req.cookies.token || req.header.authorization?.split(" ")[1];
  if (!token) {
    return res.status(400).json({ message: "Unauthorized" });
  }

  const isBlackListed = await blackListTokenModel.findOne({ token: token });
  if (!isBlackListed) {
    return res.status(400).json({ message: "Unauthorized" });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const captain = captainModel.findById(decoded.id);
    req.captain = captain;
    return next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = { authUser, authCaptain };
