const express = require("express");
const auth = require("../auth");
const ClientController = require("../controller/clientController");
const router = express.Router();

//get all active
router.get("/active", (req, res) => {
  ClientController.getAllActive().then((result) => res.send(result));
});

//get all client weather active or not
router.get("/", (req, res) => {
  ClientController.getAll().then((result) => res.send(result));
});

//get a single client
router.get("/:clientId", auth.verify, (req, res) => {
  let clientId = req.params.clientId;
  ClientController.getClient({ clientId }).then((result) => res.send(result));
});

//create a new client
router.post("/", auth.verify, (req, res) => {
  ClientController.add(req.body).then((result) => res.send(result));
});

//update a client
router.put("/", auth.verify, (req, res) => {
  ClientController.update(req.body).then((result) => res.send(result));
});

//archive a client
router.delete("/", auth.verify, (req, res) => {
  ClientController.archive(req.body).then((result) => res.send(result));
});

//active a client
router.put("/activate", auth.verify, (req, res) => {
  ClientController.activate(req.body).then((result) => res.send(result));
});

router.put("/update-info", auth.verify, async (req, res) => {
  let params = {
    clientId: req.body.clientId,
    businessType: req.body.businessType,
    hazardType: req.body.hazardType,
    occupancyType: req.body.occupancyType,
    floorArea: req.body.floorArea,
    floorAreaOccupied: req.body.floorAreaOccupied,
    noOfStorey: req.body.noOfStorey,
  };

  let result = await ClientController.updateClientAddtl(params);
  res.send(result);
});

module.exports = router;
