const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator");

const captainRegister = async (req, res) => {
  const errors = validationResult(req);
  if (!errors) {
    return res.status(400).json({ errors: errors.array() });
  }

  let { fullname, email, password, vehicle, location } = req.body;

  const isCaptainAlreadyExist = await captainModel.findOne({ email: email });

  if (isCaptainAlreadyExist) {
    return res.status(401).json({
      message: "This Email is Already Exists",
    });
  }

  const hashedPassword = await captainModel.hashPassword(password);

  console.log(fullname.firstname, fullname.firstName);

  const captain = await captainService.createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });

  let token = captain.generateAuthToken();
  res.cookie("token", token);

  res.status(200).json({
    message: "Register Successfully",
    captain,
  });
};

const captainLogin = async (req, res) => {
  const erorrs = validationResult(req);
  if (!erorrs) {
    return res.status(401).json({ erorrs: erorrs.array() });
  }
  let { email, password } = req.body;
  let captain = await captainModel
    .findOne({ email: email })
    .select("+password");
  if (!captain) {
    return res.status(401).json({
      message: "Invalid Email or Password",
    });
  }

  let conparePassword = await captain.comparePassword(password);
  if (!conparePassword) {
    return res.status(401).json({
      message: "Invalid Email or Password",
    });
  }

  let token = captain.generateAuthToken();
  res.cookie("token", token);
  res.status(200).json({
    token,
    captain,
  });
};

const getCaptainProfile = async (req, res, next) => {
    res.status(200).json({ captain: req.captain });
}

const logoutCaptain = async (req, res) =>{
res.clearCookie("token")

let token = req.cookies.token;
  res.status(200).json({ message: "logged out" });
}

module.exports = { captainRegister, captainLogin, getCaptainProfile, logoutCaptain };
