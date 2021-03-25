const Deposit = require("../model/Deposit");
const Payment = require("../model/Payment");
const PaymentController = require("../controller/paymentController");

//create a deposit transaction
module.exports.addDeposit = async (params) => {
  let newDeposit = new Deposit({
    totalAmount: params.totalAmount,
    createdBy: params.userId,
    listOfPayment: params.listOfPayment,
  });
  return (await newDeposit.save()) ? true : false;
};

//get all deposit transaction
module.exports.getAll = async () => {
  return await Deposit.find({});
};

module.exports.getAllDeposited = async () => {
  return await Deposit.find({ deposited: true });
}

//get a specific deposit transaction
module.exports.getOne = async (params) => {
  const result = await Deposit.findById(params.depositId);
  return result;
};

//change remarks or update remarks
module.exports.updateRemarks = async (params) => {
  let update = {
    lcno: params.lcno,
    remarks: params.remarks,
    deposited: params.deposited,
    modifiedAt: new Date(),
  };
  const result = await Deposit.findById(params.depositId);
  result.listOfPayment.map((paymentId) => {
    PaymentController.updatePayment(paymentId);
  });

  return (await Deposit.findByIdAndUpdate(params.depositId, update, {
    useFindAndModify: true,
  }))
    ? true
    : false;
};
