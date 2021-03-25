const mongoose = require("mongoose");

const depositSchema = new mongoose.Schema({
  lcno: {
    type: String,
    default: "",
  },
  totalAmount: {
    type: Number,
    require: [true, "Total Amount is required"],
  },
  deposited: {
    type: Boolean,
    default: false,
  },
  listOfPayment: [
    {
      paymentId: {
        type: String,
      },
      firecode: {
        type: String,
      },
      amount: {
        type: Number,
      }
    },
  ],
  remarks: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  modifiedAt: {
    type: Date,
    default: new Date(),
  },
  createdBy: {
    type: String,
  },
});

module.exports = mongoose.model("Deposit", depositSchema);
