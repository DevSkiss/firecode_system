const mongoose = require("mongoose");

const rolesSchema = new mongoose.Schema({
  role: {
    type: String,
    required: "role is required",
  },
  createdOn: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("Roles", rolesSchema);
