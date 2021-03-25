const express = require("express");
const auth = require('../auth');
const PaymentController = require("../controller/paymentController");
const Payment = require("../model/Payment");
const router = express.Router();

router.get("/", auth.verify, (req, res) => {
    PaymentController.getAll().then((result) => res.send(result));
});

router.get("/deposited", auth.verify, (req, res) => {
    PaymentController.getAllDeposited().then((result) => res.send(result));
});

router.get("/undeposited", auth.verify, (req, res) => {
    PaymentController.getAllUndeposited().then((result) => res.send(result));
});

router.get("/filter-by-date", auth.verify, (req, res) => {
    PaymentController.filterByDate(req.body).then((result) => res.send(result));
});

router.get('/filter-by-station', auth.verify, async (req, res) => {
    const result = await PaymentController.getPaymentByStation(req.body);
    return res.send(result);
})

//TODO
//get data by province
//get data by fire station

module.exports = router;