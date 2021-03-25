const express = require("express");
const auth = require("../auth");
const UserRoleController = require("../controller/userRoleController");
const UserRole = require("../model/UserRole");
const router = express.Router();

//create user role
router.post("/", auth.verify, (req, res) => {
  UserRoleController.createUserRole(req.body).then((result) =>
    res.send(result)
  );
});

//get all user roles
router.get("/", auth.verify, (req, res) => {
  UserRoleController.get().then((result) => res.send(result));
});

//get 1 user
router.get("/:userId", auth.verify, (req, res) => {
  let userId = req.params.userId;
  UserRoleController.getUser({ userId }).then((result) => res.send(result));
});

//update 1 user role
router.put("/", auth.verify, (req, res) => {
  UserRoleController.updateUserRole(req.body).then((result) =>
    res.send(result)
  );
});

//delete 1 user role
router.delete("/", auth.verify, (req, res) => {
  UserRoleController.deleteUserRole(req.body).then((result) =>
    res.send(result)
  );
});

module.exports = router;
