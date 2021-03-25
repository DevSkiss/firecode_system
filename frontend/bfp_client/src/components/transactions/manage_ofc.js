import { useEffect, useState } from "react";
import { Row, Col, Table, Form, Button, Modal } from "react-bootstrap";

const ManageOFC = () => {
  const [txnData, setTxnData] = useState([]);
  const [approvedSearchText, setApprovedSearchText] = useState("");
  const [disApprovedSearchText, setDisApprovedSearchText] = useState("");
  const [showModalOption, setShowModalOption] = useState(false);
  const [remarks, setRemarks] = useState("");
  const [selectedTxnId, setSelectedTxnId] = useState("");

  const handleClose = () => {
    setShowModalOption(false);
    setRemarks("");
  };
  //get all transactions
  useEffect(() => {
    fetch("http://localhost:4000/api/txn/")
      .then((res) => res.json())
      .then((data) => {
        setTxnData(data);
      });
  }, [showModalOption]);


  let filteredApprovedTransactions = txnData.filter((txn) => {
    if (approvedSearchText === "") {
      return txn;
    } else {
      return (
        txn.clientName
          .toLowerCase()
          .indexOf(approvedSearchText.toLowerCase()) !== -1
      );
    }
  });

    let approvedTransactions = filteredApprovedTransactions.map((txn) => {
      if (txn.pe === "Approved" && txn.txnName === "Other Fee/Clearances") {
        
      return (
        <tr key={txn._id}>
          <td>{txn.clientName}</td>
          <td>{txn.txnName}</td>
          <td>{txn.pe}</td>
          <td>{txn.totalAmount}</td>
          <td>{txn.status}</td>
          <td>
            <Button variant="success" onClick={() => {
                 setSelectedTxnId(txn._id);
                 setShowModalOption(true);
            }}>
              Options
            </Button>
          </td>
          <td>{txn.remarks}</td>
        </tr>
      );
    }
  });

  let filteredDisapprovedTransactions = txnData.filter((txn) => {
    if (disApprovedSearchText === "") {
      return txn;
    } else {
      return (
        txn.clientName
          .toLowerCase()
          .indexOf(disApprovedSearchText.toLowerCase()) !== -1
      );
    }
  });

  let disapprovedTransactions = filteredDisapprovedTransactions.map((txn) => {
    if (txn.pe === "Disapproved" && txn.txnName === "Other Fee/Clearances") {
      return (
        <tr key={txn._id}>
          <td>{txn.clientName}</td>
          <td>{txn.txnName}</td>
          <td>{txn.pe}</td>
          <td>{txn.totalAmount}</td>
          <td>{txn.status}</td>
          <td>
            <Button variant="success" onClick={() => {
                 setSelectedTxnId(txn._id);
                 setShowModalOption(true);
            }}>
              Options
            </Button>
          </td>
          <td>{txn.remarks}</td>
        </tr>
      );
    }
  });

  function returnToPE(selectedTxnId) {
    fetch("http://localhost:4000/api/txn/pe", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        txnId: selectedTxnId,
        pe: "Pending",
        remarks: remarks,
        status: "Paid",
      }),
    }).then((res) => res.json());
    setShowModalOption(false);
  }

  function returnToReleasing(selectedTxnId) {
    fetch("http://localhost:4000/api/txn/pe", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        txnId: selectedTxnId,
        pe: "Approved",
        remarks: remarks,
        status: "Paid",
      }),
    }).then((res) => res.json());
    setShowModalOption(false);
  }

  return (
    <>
      <h1 className="text-center">Manage OFC</h1>
      <h2>Approved</h2>
      <Row md={4}>
        <Col>
          <Form.Control placeholder="Search Approved FSEC" />
        </Col>
      </Row>
      <Table striped bordered hover responsive="sm">
        <thead>
          <tr>
            <th>Client Name</th>
            <th>Transaction Type</th>
            <th>Marshall</th>
            <th>Total Amount</th>
            <th>Status</th>
            <th>Actions</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>{approvedTransactions}</tbody>
      </Table>
      <h2>Disapproved</h2>
      <Row md={4}>
        <Col>
          <Form.Control placeholder="Search Disapproved FSEC" />
        </Col>
      </Row>
      <Table striped bordered hover responsive="sm" bg="dark" variant="dark">
        <thead>
          <tr>
            <th>Client Name</th>
            <th>Transaction Type</th>
            <th>Marshall</th>
            <th>Total Amount</th>
            <th>Status</th>
            <th>Actions</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>{disapprovedTransactions}</tbody>
      </Table>

      <Modal
        show={showModalOption}
        onHide={handleClose}
        centered
        aria-labelledby="collectionId"
      >
        <Modal.Header closeButton>
          <Modal.Title>Override</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please input remarks why this transaction will be returned.</p>
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
          <Row>
            <Col className="d-flex justify-content-center">
              <Button
                className="mx-2"
                variant="info"
                disabled={remarks === "" ? true : false}
                onClick={() => returnToPE(selectedTxnId)}
              >
                Return to Evaluator
              </Button>
              <Button
                className="mx-2"
                variant="warning"
                disabled={remarks === "" ? true : false}
                onClick={() => returnToReleasing(selectedTxnId)}
              >
                Return to Releasing
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ManageOFC;
