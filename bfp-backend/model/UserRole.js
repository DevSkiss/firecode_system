const mongoose = require("mongoose");
const Schema = require("mongoose");
const model = require("mongoose");

const userRoleSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: "User Id is required",
  },
  name: {
    type: String,
    required: "Name is required",
  },
  role: {
    type: String,
    required: "Role is required",
  },
  createdOn: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("UserRoles", userRoleSchema);
