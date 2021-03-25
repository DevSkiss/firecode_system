const Payment = require("../model/Payment");

module.exports.getAll = async () => {
  return await Payment.find({});
}

module.exports.getAllDeposited = async () => {
    const result = await Payment.find({ deposited: true });
  return result;
}

module.exports.getAllUndeposited = () => {
  return Payment.find({ deposited: false }).then((result) => result);
};

module.exports.getPaymentByStation = async (params) => {
  return await Payment.find({ station: params.station });
}

module.exports.updatePayment = async (params) => {
  let update = {
    deposited: true,
  };
  return (await Payment.findByIdAndUpdate(params.paymentId, update)) ? true : false;
}


//TODO
//get all data by fire station
//get all data by province