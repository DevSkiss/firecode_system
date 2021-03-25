const express = require("express");
const auth = require("../auth");
const TransactionController = require("../controller/transactionController");
const router = express.Router();

//post payment
router.post("/", auth.verify, (req, res) => {
  console.log(req.body);
  TransactionController.createTransaction(req.body).then((result) =>
    res.send(result)
  );
});

//get all transactions
router.get("/", (req, res) => {
  TransactionController.getAll().then((result) => res.send(result));
});

//get all unpaid transactions
router.get("/unpaid", (req, res) => {
  TransactionController.getUnpaid().then((result) => res.send(result));
});

//get all paid transactions
router.get("/paid", (req, res) => {
  TransactionController.getPaid().then((result) => res.send(result));
});

//get pe
router.get("/pe", auth.verify, (req, res) => {
  TransactionController.getPe().then((result) => res.send(result));
});

//get single transanctions
router.get("/:txnId", auth.verify, (req, res) => {
  let txnId = req.params.txnId;
  TransactionController.getTransaction({ txnId }).then((result) =>
    res.send(result)
  );
});

//update a transaction to paid
router.put("/", auth.verify, (req, res) => {
  TransactionController.updateTransaction(req.body).then((result) =>
    res.send(result)
  );
});

//update plan evaluator
router.put("/pe", auth.verify, (req, res) => {
  TransactionController.updatePe(req.body).then((result) => res.send(result));
});

//update status
router.put("/status", auth.verify, (req, res) => {
  TransactionController.released(req.body).then((result) => res.send(result));
});


module.exports = router;
