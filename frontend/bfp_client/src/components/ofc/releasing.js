import { Row, Col, Table, Button, Modal, Form } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function Releasing() {
  const [client, setClient] = useState({
    id: "",
    owner: "",
    nameOfEstablishment: "",
    locationOfEstablishment: "",
    ownerAddress: "",
    nameContractor: "",
    authorizeRep: "",
    mobileNo: "",
    email: "",
    floorArea: "",
    floorAreaOccupied: "",
    noStorey: "",
    natureOfBusiness: "",
    bin: "",
    occupancyType: "",
    hazardType: "",
    businessType: "",
  });
  const [showModalRelease, setShowModalRelease] = useState(false);
  const [showModalClient, setShowModalClient] = useState(false);
  const [listTxn, setListTxn] = useState([]);
  const [remarks, setRemarks] = useState("");
  const [selectedTxnId, setSelectedTxnId] = useState("");
  const handleClose = () => {
    setShowModalClient(false);
    setShowModalRelease(false);
  };
  const [releasedId, setReleasedId] = useState("");

  const handleOpen = (txnId) => {
    setShowModalRelease(true);
    setReleasedId(txnId);
  };
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api/txn", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setListTxn(data);
      });
  }, [showModalClient, showModalRelease]);

  let filterListTxn = listTxn.filter((txn) => {
    if (searchText === "") {
      return txn;
    } else {
      return (
        txn.clientName.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
      );
    }
  });

  async function released() {
    await fetch("http://localhost:4000/api/txn/status", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        status: "Released",
        txnId: releasedId,
        remarks: remarks,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setShowModalRelease(false);
      });
  }

    async function notReleased() {
      await fetch("http://localhost:4000/api/txn/status", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          status: "Not Released",
          txnId: releasedId,
          remarks: remarks,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setShowModalRelease(false);
        });
    }
  
  const releaseTxn = filterListTxn.filter((txn) => {
    if (
      txn.pe === "Approved" &&
      txn.txnName === "Other Fee/Clearances" &&
      txn.status === "Paid"
    ) {
      return txn.pe.toLowerCase().indexOf(txn.pe.toLowerCase()) !== -1;
    }
  });

  const showRelease = releaseTxn.map((txn) => {
    return (
      <tr key={txn._id}>
        <td>{txn.clientName}</td>
        <td>{txn.status}</td>
        <td>{txn.pe}</td>
        <td>
          <Button
            variant="primary"
            onClick={(e) => viewDetailsButton(txn.clientId, txn.remarks)}
          >
            View More Details
          </Button>
        </td>
        <td>
          <Button variant="primary" onClick={(e) => handleOpen(txn._id)}>
            Actions
          </Button>
        </td>
        <td>{txn.remarks}</td>
      </tr>
    );
  });

  const viewDetailsButton = (cid, remark) => {
    fetch(`http://localhost:4000/api/clients/${cid}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setClient({
          id: data._id,
          owner: data.ownerName,
          ownerAddress: data.ownerAddress,
          nameContractor: data.nameOfContractor,
          authorizeRep: data.authorizedRepresentative,
          mobileNo: data.mobileNo,
          email: data.email,
          floorArea: data.floorArea,
          noOfStorey: data.noOfStorey,
          natureOfBusiness: data.natureOfBusiness,
          floorAreaOccupied: data.floorAreaOccupied,
          nameOfEstablishment: data.nameOfEstablishment,
          locationOfEstablishment: data.locationOfEstablishment,
          occupancyType: data.occupancyType,
          hazardType: data.hazardType,
          businessType: data.businessType,
          bin: data.bin,
        });
      });
    setRemarks(remark);
    setShowModalClient(true);
  };

  return (
    <>
      <h1>Releasing</h1>

      <Form>
        <Row>
          <Col md={6}>
            <Form.Group controlId="searchId">
              <Form.Control
                type="text"
                placeholder="Search Released Other Clearances"
                onChange={(e) => setSearchText(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <Table striped bordered hover responsive="sm" bg="dark" variant="dark">
        <thead>
          <tr>
            <th>Owner</th>
            <th>Payment Status</th>
            <th>Plan Evaluator Status</th>
            <th>View Details</th>
            <th>Action</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>{showRelease}</tbody>
      </Table>

      <Modal
        show={showModalRelease}
        onHide={handleClose}
        centered
        aria-labelledby="collectionId"
      >
        <Modal.Header closeButton>
          <Modal.Title>Releasing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
          <div className="text-center">
            <Button
              className="mx-2"
              variant="success"
              disabled={remarks != "" ? false : true}
              onClick={(e) => released()}
            >
              Release Certificate
            </Button>
            <Button
              type="submit"
              variant="danger"
              disabled={remarks != "" ? false : true}
              onClick={() => notReleased()}
            >
              Denied Certificate
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={showModalClient}
        onHide={handleClose}
        centered
        scrollable
        size="xl"
        aria-labelledby="collectionId"
      >
        <Modal.Header closeButton className="headercolor">
          <Col>
            <Modal.Title className="mb-10">Client Details</Modal.Title>
          </Col>
        </Modal.Header>
        <Modal.Body>
          <h3>Business Number: {client.bin} </h3>
          <Row>
            <Col>
              <p>
                <strong>Owners Name:</strong> {client.owner}
              </p>
              <p>
                <strong>Owner Address:</strong> {client.ownerAddress}
              </p>
              <p>
                <strong>Mobile Number:</strong> {client.mobileNo}
              </p>
              <p>
                <strong>Email:</strong> {client.email}
              </p>
              <p>
                <strong>Authorized Representative:</strong>{" "}
                {client.authorizeRep}
              </p>
              <p>
                <strong>Occupancy Type:</strong> {client.occupancyType}
              </p>
              <p>
                <strong>Nature of Business: </strong>
                {client.natureOfBusiness}
              </p>
              <p>
                <strong>Name of Establishment:</strong>{" "}
                {client.nameOfEstablishment}
              </p>
              <p>
                <strong>Location of Establishment:</strong>{" "}
                {client.locationOfEstablishment}
              </p>
            </Col>
            <Col>
              <p>
                <strong>Business Type:</strong>
                {client.businessType}
              </p>
              <p>
                <strong>Hazard Type:</strong>
                {client.hazardType}
              </p>
              <p>
                <strong>Occupancy Type:</strong>
                {client.occupancyType}
              </p>
              <p>
                <strong>Floor Area:</strong>
                {client.floorArea}
              </p>
              <p>
                <strong>Occupied Floor Area:</strong>
                {client.floorAreaOccupied}
              </p>
              <p>
                {" "}
                <strong>Number of Storey:</strong>
                {client.noOfStorey}
              </p>
              <hr></hr>
              <h5>Transactions Remarks:</h5>
              <p>{remarks}</p>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}
