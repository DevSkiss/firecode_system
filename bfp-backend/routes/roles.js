const express = require("express");
const auth = require("../auth");
const RolesController = require("../controller/rolesController");
const Roles = require("../model/Roles");
const Transaction = require("../model/Transaction");
const router = express.Router();

//get roles
router.get("/", auth.verify, (req, res) => {
  RolesController.getAll().then((result) => res.send(result));
});

//create roles
router.post("/", auth.verify, (req, res) => {
  RolesController.createRoles(req.body).then((result) => res.send(result));
});

//update roles
router.put("/", auth.verify, (req, res) => {
  RolesController.updateRole(req.body).then((result) => res.send(result));
});

//delete roles
router.delete("/", auth.verify, (req, res) => {
  RolesController.deleteRole(req.body).then((result) => res.send(result));
});

module.exports = router;
