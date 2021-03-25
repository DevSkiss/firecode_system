import { Row, Col, Table, Button, Modal, Form } from "react-bootstrap";
import { useState, useEffect, Fragment } from "react";
import swal from "sweetalert";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { Receipt } from "../reports/receipt/receipt";

export default function Collection() {
  const [txnId, setTxnId] = useState("");
  const [clientId, setClientId] = useState("");
  const [clientOwner, setClientOwner] = useState("");
  const [txnType, setTxnType] = useState("");
  const [amount, setAmount] = useState(0);
  const [status, setStatus] = useState("");
  const [payments, setPayments] = useState([]);
  const [collectModalShow, setCollectModalShow] = useState(false);
  const [oRNumber, setORNumber] = useState("");
  const collectHandleClose = () => {
    setCollectModalShow(false);
    setTxnId("");
    setClientId("");
    setClientOwner("");
    setTxnType("");
    setStatus("");
    setAmount("");
  };
  const [searchText, setSearchText] = useState("");
  const [collectables, setCollectables] = useState([]);

  function paymentModal(txn) {
    setTxnId(txn._id);
    setClientId(txn.clientId);
    setClientOwner(txn.clientName);
    setAmount(txn.totalAmount);
    setStatus(txn.status);
    setTxnType(txn.txnName);
    setPayments(txn.payments);
    setCollectModalShow(true);
  }

  //update payment
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
      .then((data) => {});

    refresh();
  }

  //get all transactions
  useEffect(() => {
    fetch("http://localhost:4000/api/txn/unpaid", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCollectables(data);
      });
  }, [collectModalShow]);

  function refresh() {
    fetch("http://localhost:4000/api/txn/unpaid", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCollectables(data);
      });
  }

  let transactions = [];
  let filteredTransactions = [];

  filteredTransactions = collectables.filter((entry) => {
    if (searchText === "") {
      return entry;
    } else {
      return (
        entry.clientName.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
      );
    }
  });

  transactions = filteredTransactions.map((txn) => {
    if (txn.txnName === "FSEC Application") {
      return (
        <tr key={txn._id}>
          <td>{txn.clientName}</td>
          <td>{txn.txnName}</td>
          <td>{txn.totalAmount}</td>
          <td>{txn.status}</td>
          <td>
            <Button
              variant="success"
              onClick={() => {
                paymentModal(txn);
                refresh();
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

  return (
    <>
      <Form>
        <Row>
          <Col md={6}>
            <Form.Group controlId="searchId">
              <Form.Control
                type="text"
                placeholder="Search By Client Name"
                onChange={(e) => setSearchText(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <Table striped bordered hover responsive="sm" bg="dark" variant="dark">
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
        show={collectModalShow}
        onHide={collectHandleClose}
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
                }).then((success) => {
                  if (success) {
                    swal("Payment Success!", {
                      icon: "success",
                    });
                    paidFunction();
                    refresh();
                    collectHandleClose();
                  } else {
                    swal("Payment Cancel", { icon: "info" });
                    refresh();
                    collectHandleClose();
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
}
