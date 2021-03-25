const express = require("express");
const app = express();

//config env using the dotenv library
const cors = require("cors");
const dotenv = require("dotenv");
require("dotenv").config();
const mongoose = require("mongoose");
const dblocal = process.env.DB_LOCAL;
const dbcloud = process.env.DB_CLOUD;


const userRoutes = require("./routes/users");
const clientRoutes = require("./routes/client");
const transactionRoutes = require("./routes/transaction");
const rolesRoutes = require("./routes/roles");
const userRoleRoutes = require("./routes/userRole");
const stationRoutes = require('./routes/station');
const paymentRoutes = require('./routes/payment');
const depositRoutes = require('./routes/deposit');

// const corsOption = {
//   origin: ["http://localhost:3000"],
//   optionSuccessStatus: 200,
// };

const connect = async () => {
  return await mongoose.connect("mongodb://localhost/bfpr8", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

const host = "0.0.0.0";
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/users", userRoutes);
app.use("/api/clients",  clientRoutes);
app.use("/api/txn",  transactionRoutes);
app.use("/api/roles",  rolesRoutes);
app.use("/api/user-role", userRoleRoutes);
app.use("/api/station", stationRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/deposit", depositRoutes);

connect()
  .then(async (connection) => {
    app.listen(port, host, () => {
      console.log(`Sever is up at port ${port}`);
    });
  })
  .catch((e) => console.error(e));
