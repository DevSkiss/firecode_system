const express = require('express');
const auth = require('../auth');
const DepositController = require('../controller/depositController');
const router = express.Router();

//create deposit route
router.post("/", auth.verify, (req, res) => {
    let params = {
      userId: auth.decode(req.headers.authorization).id,
      totalAmount: req.body.totalAmount,
      listOfPayment: req.body.listOfPayment,
    };
    DepositController.addDeposit(params).then((result) => res.send(result));
});

//get all deposit route
router.get("/", auth.verify, (req, res) => {
    DepositController.getAll().then((result) => res.send(result));
});

router.get('/deposited', auth.verify, (req, res) => {
  DepositController.getAllDeposited().then((result) => res.send(result));
})

//get a single depsoit route
router.get("/:depositId", auth.verify, (req, res) => {
  let depositId = req.params.depositId;
  DepositController.getOne({ depositId }).then((result) => res.send(result));
});



//update deposit remarks route
router.put('/', auth.verify, (req, res) => {
  let params = {
    depositId: req.body.depositId,
    lcno: req.body.lcno,
    remarks: req.body.remarks,
    undeposited: req.body.undeposited,
    deposited: req.body.deposited,
  };
  return DepositController.updateRemarks(params).then((result) => res.send(result));
})

module.exports = router;