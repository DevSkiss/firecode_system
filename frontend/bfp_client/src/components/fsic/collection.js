import { useState, useEffect, useContext, Fragment } from "react";
import { Row, Col, Table, Button, Modal, Form } from "react-bootstrap";
import UserContext from "../../../context/UserContext";
import moment from "moment";

const Collection = () => {
  const [txnId, setTxnId] = useState("");
  const [clientId, setClientId] = useState("");
  const [clientOwner, setClientOwner] = useState("");
  const [txnType, setTxnType] = useState("");
  const [amount, setAmount] = useState(0);
  const [status, setStatus] = useState("");
  const [payments, setPayments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [oRNumber, setORNumber] = useState("");
  const [searchText, setSearchText] = useState("");
  const handleClose = () => {
    cleanUp;
    setShowModal(false);
  };
  const [txnData, setTxnData] = useState([]);

  //get all transactions
  useEffect(() => {
    refresh();
  }, [showModal]);

  function refresh() {
    fetch("http://localhost:4000/api/txn/")
      .then((res) => res.json())
      .then((data) => {
        setTxnData(data);
      });
  }
  const cleanUp = () => {
    setTxnId("");
    setClientId("");
    setClientOwner("");
    setAmount("");
    setStatus("");
    setTxnType("");
    setPayments([]);
    setShowModal(false);
  };

  function paymentModal(txn) {
    setTxnId(txn._id);
    setClientId(txn.clientId);
    setClientOwner(txn.clientName);
    setAmount(txn.totalAmount);
    setStatus(txn.status);
    setTxnType(txn.txnName);
    setPayments(txn.payments);
    setShowModal(true);
  }

  let filteredTransactions = txnData.filter((txn) => {
    if (searchText === "") {
      return txn;
    } else {
      return (
        txn.clientName.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
      );
    }
  });

  let transactions = filteredTransactions.map((txn) => {
    if (
      (txn.status === "Unpaid" &&
        txn.txnName === "FSIC Application for Business") ||
      (txn.status === "Unpaid" &&
        txn.txnName === "FSIC Application for Occupancy")
    ) {
      return (
        <tr key={txn._id}>
          <td>{txn.clientName}</td>
          <td>{txn.txnName}</td>
          <td>{txn.totalAmount}</td>
          <td>{txn.status}</td>
          <td>
            <Button
              variant="success"
              onClick={(e) => {
                paymentModal(txn);
              }}
            >
              Pay
            </Button>
          </td>
        </tr>
      );
    }
  });

  const listofpayment = payments.map((payment) => {
    return (
      <Fragment key={payment._id}>
        <p>
          {payment.paymentName}: {Math.round(payment.amount)}.00
        </p>
      </Fragment>
    );
  });

  function paidFunction() {
    fetch("http://localhost:4000/api/txn", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        txnId: txnId,
        oRNumber: oRNumber,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        swal("Payment Success!", {
          icon: "success",
        });
        refresh();
        setShowModal(false);
      });
  }

  return (
    <>
      <h1>List of Assessed Clients</h1>
      <Form>
        <Row>
          <Col md={6}>
            <Form.Group controlId="searchId">
              <Form.Control
                type="text"
                placeholder="Search"
                onChange={(e) => setSearchText(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <Table striped bordered hover responsive="sm">
        <thead>
          <tr>
            <th>Client Name</th>
            <th>Transaction Type</th>
            <th>Total Amount</th>
            <th>Payment Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{transactions}</tbody>
      </Table>

      <Modal
        show={showModal}
        onHide={handleClose}
        centered
        size="xl"
        aria-labelledby="collectionId"
      >
        <Modal.Header closeButton className="headercolor">
          <Modal.Title>
            Collectables - <strong>FSEC Application</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Instruction: Verify all information and data are correct.</p>
          <Row>
            <Col>
              <p>
                <strong>Transaction Type: </strong> {txnType}
              </p>
              <p>
                <strong>Client ID: </strong> {clientId}
              </p>
              <p>
                <strong>Client Name: </strong> {clientOwner}
              </p>
            </Col>
            <Col>
              <Form>
                <Form.Group>
                  <Form.Label>Enter OR Number</Form.Label>
                  <Form.Control
                    placeholder="OR Number"
                    type="text"
                    onChange={(e) => setORNumber(e.target.value)}
                    required
                  />
                </Form.Group>
              </Form>
              <strong>Payments Breakdown:</strong>
              {listofpayment}
            </Col>
          </Row>

          <p>
            <strong>
              Total Amount Of:{" "}
              <small className="text-style">₱ {amount}.00</small>
            </strong>
          </p>
          <Button
            className="floating-button"
            variant="success"
            onClick={() => {
              if (oRNumber === "") {
                swal(
                  "Opss! Something went wrong",
                  "OR Number must not be empty",
                  "error"
                );
              } else {
                swal({
                  title: "Payment Checkout",
                  text: "Are you sure you want to continue?",
                  icon: "warning",
                  buttons: {
                    cancel: true,
                    confirm: "Yes",
                  },
                }).then((willDelete) => {
                  if (willDelete) {
                    paidFunction();
                    handleClose();
                  } else {
                    swal("Payment Cancel", { icon: "info" });

                    handleClose();
                  }
                });
              }
            }}
          >
            Pay
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Collection;
