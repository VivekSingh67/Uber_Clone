const mongoose = require("mongoose");
const jwt = require('jsonwebtoken')
const bcrypt = require("bcryptjs")

const captainSchema = mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "First name must be at least 3 characters"],
    },
    lastname: {
      type: String,
      minlength: [3, "Last name must be at least 3 characters"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketId: {
    type: String,
  },
  status: {
    type: String,
    enum: ["active", "incative"],
    default: 'active'
  },
  vehicle: {
    color: {
      type: String,
      required: true,
      minlength: [3, "Color must be at least 3 characters long"],
      trim: true,
    },
    plate: {
      type: String,
      required: true,
      minlength: [3, "Plate must be at least 3 characters long"],
      trim: true,
      uppercase: true,
    },
    capacity: {
      type: Number,
      required: true,
      min: [1, "Capacity must be at least 1"],
    },
    vehicleType: {
      type: String,
      required: true,
      enum: ["car", "bike", "auto"],
    },
  },
  location:{
    lat:{
        type: Number
    },
    lng:{
        type: Number
    }
  }
});

captainSchema.methods.generateAuthToken = function(){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET)
}

captainSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10)
}

captainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password)
}

const captainModel = mongoose.model('captain', captainSchema)
module.exports = captainModel