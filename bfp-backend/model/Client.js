const mongoose = require("mongoose");
const Schema = require("mongoose");
const model = require("mongoose");

const clientSchema = new mongoose.Schema({
  ownerName: {
    type: String,
    required: [true, "Name of owner is required"],
  },
  ownerAddress: {
    type: String,
    required: [true, "Owner Address is required"],
  },
  nameOfEstablishment: {
    type: String,
  },
  locationOfEstablishment: {
    type: String,
  },
  bin: {
    type: String,
  },
  nameOfContractor: {
    type: String,
  },
  authorizedRepresentative: {
    type: String,
  },
  mobileNo: {
    type: String,
  },
  email: {
    type: String,
  },
  occupancyType: {
    type: String,
  },
  businessType: {
    type: String,
  },
  natureOfBusiness: {
    type: String,
  },
  hazardType: {
    type: String,
  },
  floorArea: {
    type: String,
  },
  floorAreaOccupied: {
    type: String,
  },
  noOfStorey: {
    type: Number,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  transactions: [
    {
      txnId: {
        type: String,
      },
      name: {
        type: String,
      },
      amount: {
        type: Number,
      },
      createdOn: {
        type: Date,
        default: new Date()
      }
    },
  ],
  createOn: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("Client", clientSchema);
