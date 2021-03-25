const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  paymentName: {
    type: String,
  },
  firecode: {
    type: String,
  },
  amount: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  payor: {
    type: String,
    require: [true, "Payor is required"],
  },
  deposited: {
    type: Boolean,
    default: false,
  },
  createdBy: {
    type: String,
    require: [true, "CreatedBy is required"],
  },
  municipality: {
    type: String,
    require: [true, "Municipality is required"],
  },
  province: {
    type: String,
    require: [true, "Province is required"],
  },
  station: {
    type: String,
    require: [true, "Fire Station is required"],
  },
  transactionId: {
    type: String,
  },
});

module.exports = mongoose.model("Payment", paymentSchema);