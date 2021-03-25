const express = require("express");
const auth = require("../auth");
const UserController = require("../controller/userController");
const router = express.Router();

//check email
router.post("/emailExists", (req, res) => {
  UserController.emailExists(req.body).then((result) => res.send(result));
});

//check mobile number
router.post("/mobileExists", (req, res) => {
  UserController.numberExists(req.body).then((result) => res.send(result));
});

//check username
router.post("/usernameExists", (req, res) => {
  UserController.usernameExists(req.body).then((result) => {
    res.send(result);
  });
});

//registration
router.post("/", (req, res) => {
  UserController.register(req.body).then((result) => res.send(result));
});

//login
router.post("/login", (req, res) => {
  UserController.login(req.body).then((result) => {
    res.send(result);
  });
});

//details
router.get("/details", auth.verify, (req, res) => {
  const user = auth.decode(req.headers.authorization);
  UserController.details({ userId: user.id }).then((user) => res.send(user));
});

router.put("/update-user", auth.verify, async (req, res) => {
  let params = {
    userId: auth.decode(req.headers.authorization).id,
    rank: req.body.rank,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    mobileNo: req.body.mobileNo,
    station: req.body.station,
    address: req.body.address,
    province: req.body.province,
    municipality: req.body.municipality,
  };
  const result = await UserController.updateUser(params);
  res.send(result);

});

router.get("/single/:userId", auth.verify, (req, res) => {
  let userId = req.params.userId;
  UserController.singleDetail({ userId }).then((user) => res.send(user));
});

router.get("/get-all-users", auth.verify, (req, res) => {
  UserController.getAllUser().then((result) => res.send(result));
});

router.put("/change-password", auth.verify, async(req, res) => {
  let params = {
    userId: auth.decode(req.headers.authorization).id,
    username: req.body.username,
    password: req.body.password,
    newPassword: req.body.newPassword,
  };
  const result = await UserController.changePassword(params);
  res.send(result);
});

module.exports = router;
