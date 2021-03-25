const mongoose = require("mongoose");
const Schema = require("mongoose");
const model = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "First name is required"],
  },
  lastname: {
    type: String,
    require: [true, "Last name is required"],
  },
  email: {
    type: String,
    default: "",
  },
  rank: {
    type: String,
    require: [true, "Position is Required"],
  },
  station: {
    type: String,
    require: [true, "Station is required"],
  },
  address: {
    type: String,
    require: [true, "Address Required"],
  },
  municipality: {
    type: String,
    require: [true, "Municipality is required"],
  },
  province: {
    type: String,
    require: [true, "Province is required"]
  },
  mobileNo: {
    type: String,
    require: [true, "Mobile Number is required"],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  roles: [
    {
      role: {
        type: String,
      },
    },
  ],
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

module.exports = mongoose.model('User', userSchema);