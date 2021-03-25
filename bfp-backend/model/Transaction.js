const Schema = require("mongoose");
const model = require("mongoose");
const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  clientId: {
    type: String,
    required: "Client Id is required",
  },
  clientName: {
    type: String,
  },
  txnName: {
    type: String,
    required: [true, "Name of payment is required"],
  },
  createdBy: {
    type: String,
  },
  createdOn: {
    type: Date,
    default: new Date(),
  },
  payments: [
    {
      paymentName: {
        type: String,
      },
      firecode: {
        type: String,
      },
      amount: {
        type: Number,
      },
      
    },
  ],
  totalAmount: {
    type: Number,
  },
  collectorId: {
    type: String,
  },
  oRNumber: {
    type: String,
    default: '',
  },
  datePaid: {
    type: Date,
  },
  status: {
    type: String,
  },
  pe: {
    type: String,
    default: "Pending",
  },
  station: {
    type: String,
    required: [true, "Station is required"],
  },
  remarks: {
    type: String,
    default: ""
  }
});

module.exports = mongoose.model("Transaction", transactionSchema);
