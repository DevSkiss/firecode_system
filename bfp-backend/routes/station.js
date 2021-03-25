const express = require("express");
const auth = require("../auth");
const StationController = require("../controller/stationController");
const UserRole = require("../model/UserRole");
const router = express.Router();


//create station
router.post("/", auth.verify, async (req, res) => {
    const result = await StationController.create(req.body);
    res.send(result);
})
//get all station
router.get("/", auth.verify, async (req, res) => {
    const result = await StationController.getAll();
    res.send(result);
})
//get a station
router.get("/:stationId", auth.verify, async (req, res) => {
    const result = await StationController.get(req.params);
    res.send(result);
})
//update a station
router.put("/", auth.verify, async (req, res) => {
    const result = await StationController.update(req.body);
    res.send(result);
})
//delete a station
router.delete("/", auth.verify, async (req, res) => {
    const result = await StationController.delete(req.body);
    res.send(result);
})

module.exports = router;