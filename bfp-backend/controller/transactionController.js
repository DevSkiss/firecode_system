const Transaction = require("../model/Transaction");
const Payment = require("../model/Payment");
const Client = require('../model/Client');

//get all trannsactions
module.exports.getAll = () => {
  return Transaction.find({}).then((result) => result);
};

//get a single payment transaction
module.exports.getTransaction = (params) => {
  return Transaction.findById(params.txnId).then((result) => result);
};

//get all unpaid transactions
module.exports.getUnpaid = () => {
  return Transaction.find({ status: "Unpaid" }).then((result) => result);
};

//get all paid transactions
module.exports.getPaid = () => {
  return Transaction.find({ status: "Paid" }).then((result) => result);
};

//get all plan evaluator pending
module.exports.getPe = () => {
  return Transaction.find({}).then((result) => result);
};


module.exports.createTransaction = async (params) => {
  //Create transaction
  let newTransaction = new Transaction({
    clientId: params.clientId,
    clientName: params.clientName,
    createdBy: params.createdBy,
    txnName: params.txnName,
    station: params.station,
    totalAmount: params.totalAmount,
    payments: params.payments,
    status: "Unpaid",
  });
  const result = await newTransaction.save();
  // result = result from transaction
  //map payments with txnId from result
  await params.payments.map(async (payment) => {
    let newPayment = new Payment({
      paymentName: payment.paymentName,
      firecode: payment.firecode,
      payor: params.clientName,
      amount: payment.amount,
      createdBy: params.createdBy,
      municipality: params.municipality,
      province: params.province,
      station: params.station,
      transactionId: result.id,
    });
    const result2 = await newPayment.save();
  });

  const userTxn = await Client.findById(params.clientId);
  userTxn.transactions.push({
    txnId: result.id,
    name: params.txnName,
    amount: params.totalAmount,
  });
  const finalRes = await userTxn.save();
  return finalRes ? true : false;
};

//post transaction
// module.exports.createTransaction = async(params) => {
//   let refPayment = [];
//   await params.payments.map(async (payment) => {
//     let newPayment = new Payment({
//       paymentName: payment.paymentName,
//       firecode: payment.firecode,
//       payor: params.clientName,
//       amount: payment.amount,
//       createdBy: params.createdBy,
//       municipality: params.municipality,
//       province: params.province,
//       station: params.station,
//     });
//     const result = await newPayment.save();
//     refPayment.push({ paymentId: result._id, paymentName: result.paymentName, firecode: result.firecode, amount: result.amount, });
//     if (refPayment.length === params.payments.length) {
//       let tempParams = {
//         clientId: params.clientId,
//         clientName: params.clientName,
//         createdBy: params.createdBy,
//         txnName: params.txnName,
//         station: params.station,
//         totalAmount: params.totalAmount,
//         payments: refPayment,
//         status: "Unpaid",
//       };
//       return await createNewTransaction(tempParams);
//     }
//   });
// };

const createNewTransaction = async (params) => {
  let newTransaction = new Transaction({
    clientId: params.clientId,
    clientName: params.clientName,
    createdBy: params.createdBy,
    txnName: params.txnName,
    station: params.station,
    totalAmount: params.totalAmount,
    payments: params.payments,
    status: "Unpaid",
  });
  return await newTransaction.save().then((payment, err) => (err ? false : true));
};

//update payment transaction
module.exports.updateTransaction = (params) => {
  let updatedTransaction = {
    status: "Paid",
    oRNumber: params.oRNumber,
  };
  return Transaction.findByIdAndUpdate(
    params.txnId,
    updatedTransaction
  ).then((transaction, err) => (err ? false : true));
};

//update transaction plan eval
module.exports.updatePe = async (params) => {
  let updatedTransaction = {
    pe: params.pe,
    remarks: params.remarks,
    status: params.status,
  };
  const transaction = await Transaction.findByIdAndUpdate(
    params.txnId,
    updatedTransaction
  );
  return transaction ? true : false;
};

//update status to released
module.exports.released = (params) => {
  let updateStatus = {
    remarks: params.remarks,
    status: params.status,
  };
  return Transaction.findByIdAndUpdate(
    params.txnId,
    updateStatus
  ).then((transaction, err) => (err ? false : true));
};
