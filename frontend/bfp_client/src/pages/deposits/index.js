import { Button, Modal, Row, Col, Form, Table, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import swal from "sweetalert";
import DepositService from "../../service/deposit_service";
import UserService from "../../../services/user_service";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import moment from "moment";
import PaymentService from "../../service/payment_service";
import CommaSeparated from "../../../helper/comma_separated";

export default function Index() {
  const paymentService = new PaymentService();
  const depositService = new DepositService();
  const userService = new UserService();
  const [data, setData] = useState([]);
  const [deposits, setDeposit] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
    setShowAddModal(false);
    setDepositId('');
    setLcno('');
    setUndeposited(0);
    setRemarks('');
  };
  const [isBusy, setBusy] = useState(false);
  const [depositId, setDepositId] = useState("");
  const [lcno, setLcno] = useState("");
  const [undeposited, setUndeposited] = useState(0);
  const [remarks, setRemarks] = useState("");
  const [toDate, setToDate] = useState(new Date());
  let tempTotal = 0;
  let tempPayment = [];

  useEffect(() => {
    getDeposit();
    getData();
  }, [showAddModal, showModal]);

  const getData = async () => {
    setBusy(true);
    var paymentz = await paymentService.getAllPayment();
    setData(paymentz);
    setBusy(false);
  };

  const getDeposit = async () => {
    setDeposit(await depositService.getAllDeposit());
  };

  const updateDeposit = async () => {
    setBusy(true);
    let params = {
      depositId: depositId,
      lcno: lcno,
      remarks: remarks,
      deposited: true,
    };
    const res = await depositService.updateDeposit(params);
    setBusy(false);
    if (res) {
      swal("Updated", "Successfully Updated Deposit", "info");
      handleClose();
    } else {
      swal("Fail", "Something went wrong", "danger");
      handleClose();
    }
  }

  async function addDeposit() {
    setBusy(true);
    const res = await depositService.createDeposit(tempTotal, tempPayment);
    setBusy(false);
    if (res) {
      console.log("save");
      handleClose();
      swal("Added", "Successfully Added a Deposit", "success");
    } else {
      swal("Fail", "Something went wrong", "error");
    }
  }

  async function getFullName(userId) {
    return await userService.getFullName(userId);
  } 

  const showTableData = data.map((payment, index) => {
   
    let temp = moment(new Date(payment.createdAt), "YYYY-MM-DD, h:mm:ss a");
    let temp2 = moment(new Date(toDate), "YYYY-MM-DD, h:mm:ss a");
    if (moment(temp).isBefore(temp2) && payment.deposited === false) {
      console.log(payment);
      tempTotal = tempTotal + payment.amount;
      tempPayment.push({paymentId: payment._id, firecode: payment.firecode, amount: payment.amount});
      return (
        <tr key={payment._id}>
          <td>{payment._id}</td>
          <td>{payment.payor}</td>
          <td>{payment.firecode}</td>
          <td>₱ {CommaSeparated(Math.round(payment.amount * 100) / 100)}</td>
          <td>{moment(payment.createdAt).format("YYYY-MM-DD, h:mm:ss a")}</td>
        </tr>
      );
    }
  });

  const showDeposit = deposits.map((deposit) => {
    return (
      <tr key={deposit._id}>
        <td>{deposit.lcno}</td>
        <td>₱ {CommaSeparated(Math.round(deposit.totalAmount * 100) / 100)}</td>
        <td>{deposit.deposited ? "true" : "false"}</td>
        <td>{deposit.remarks}</td>
        <td>{moment(deposit.createdAt).format("YYYY-MM-DD, h:mm:ss a")}</td>
        <td>
          <Button
            onClick={() => {
              setShowModal(true);
              setDepositId(deposit._id);
            }}
          >
            Update
          </Button>
        </td>
      </tr>
    );
  });

  if (isBusy)
    return (
      <Row>
        <Col className="d-flex justify-content-center align-items-center">
          <Spinner animation="border" variant="primary" />
        </Col>
      </Row>
    );

  return (
    <>
      <h1>Deposit</h1>
      <Button onClick={() => setShowAddModal(true)}>Add New Deposit</Button>
      <Table striped bordered hover responsive="sm">
        <thead>
          <tr>
            <th>LC No.</th>
            <th>Total amount</th>
            <th>Deposit Status</th>
            <th>Remarks</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{showDeposit}</tbody>
      </Table>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton className="headerColor">
          <Modal.Title>Update Deposit Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>
              <strong>LC</strong>
            </Form.Label>
            <Form.Control
              type="text"
              value={lcno}
              placeholder="LC No."
              onChange={(e) => setLcno(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>
              <strong>Remarks</strong>
              <small className="required-text-style">* Required</small>
            </Form.Label>
            <Form.Control
              as="textarea"
              value={remarks}
              rows={5}
              placeholder="Remarks"
              onChange={(e) => setRemarks(e.target.value)}
            />
          </Form.Group>
          <Row className="d-flex justify-content-center">
            <Button variant="success" onClick={() => updateDeposit()}>
              Update Deposit Details
            </Button>
          </Row>
        </Modal.Body>
      </Modal>
      <Modal show={showAddModal} onHide={handleClose} centered size="xl">
        <Modal.Header closeButton className="headerColor">
          <Modal.Title>Request for New Deposit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please make sure all details are correct</p>
          <Row className="d-flex justify-content-between ml-1 mr-1">
            <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
              <DatePicker
                autoOk
                label="Select Date"
                clearable
                format="MMMM DD, yyyy"
                disableFuture
                showTodayButton
                value={toDate}
                onChange={setToDate}
              />
            </MuiPickersUtilsProvider>
            <div className="d-flex">
              <p>Total Amount:</p>
              <h5>₱ {CommaSeparated(Math.round(tempTotal * 100) / 100)}</h5>
            </div>
          </Row>
          <Table striped bordered hover responsive="md">
            <thead>
              <tr>
                <th>Payment Id</th>
                <th>Payor</th>
                <th>Transaction Code</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>{showTableData}</tbody>
          </Table>
          <Row className="d-flex justify-content-end">
            <p>Total Amount:</p>
            <h5>₱ {CommaSeparated(Math.round(tempTotal * 100) / 100)}</h5>
          </Row>
          <Row className="d-flex justify-content-end">
            <Button onClick={() => addDeposit()}>Request Deposit</Button>
            <Button
              onClick={() => handleClose()}
              className="ml-3"
              variant="danger"
            >
              Cancel
            </Button>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}
