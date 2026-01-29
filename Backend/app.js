const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectToDb = require("./db/db");
const cookiesParser = require("cookie-parser");
connectToDb();
const path = require("path");
const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes")


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true               
}));
app.use(cookiesParser());


app.use("/user", userRoutes);
app.use("/captain", captainRoutes)

module.exports = app;
