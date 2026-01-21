const express = require("express");
const routes = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");
const authmiddleware = require("../middlewares/auth.middleware")

routes.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  userController.registerUser
);

routes.post('/login', [
  body("email").isEmail().withMessage("Invalid Email"),
  body("password").isLength({min: 6}).withMessage("Password must be at least 6 characters long")
], userController.longinUser)

routes.get('/profile', authmiddleware.authUser ,userController.getUserProfile)
routes.get('/logout', authmiddleware.authUser ,userController.logoutUser)

module.exports = routes;
