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
app.use(cors());
app.use(cookiesParser());

app.use("/api/auth", userRoutes);
app.use("/api/captain", captainRoutes)

module.exports = app;
