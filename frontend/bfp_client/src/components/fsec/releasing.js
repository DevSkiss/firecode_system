import { Row, Col, Table, Button, Modal, Form } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function Releasing() {
  const [owner, setOwner] = useState("");
  const [nameOfEstablishment, setNameOfEstablishment] = useState("");
  const [locationOfEstablishment, setLocationOfEstablishment] = useState("");
  const [ownerAddress, setOwnerAddress] = useState("");
  const [nameContractor, setNameContractor] = useState("");
  const [authorizeRep, setAuthorizeRep] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [floorArea, setFloorArea] = useState("");
  const [floorAreaOccupied, setFloorAreaOccupied] = useState("");
  const [noStorey, setNoStorey] = useState("");
  const [natureOfBusiness, setNatureOfBusiness] = useState("");
  const [bin, setBin] = useState("");
  const [occupancyType, setOccupancyType] = useState("");
  const [hazardType, setHazardType] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [showModalRelease, setShowModalRelease] = useState(false);
  const [showModalDetails, setShowModalDetails] = useState(false);
  const [releasedId, setReleasedId] = useState("");
  const [remarks, setRemarks] = useState("");
  const handleClose = () => {
    setShowModalRelease(false);
    setShowModalDetails(false);
  };

  const handleOpen = (txnId) => {
    setShowModalRelease(true);
    setReleasedId(txnId);
  };

  const [searchText, setSearchText] = useState("");

  const [listTxn, setListTxn] = useState([]);

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
  }, [showModalDetails, showModalRelease]);

  const viewDetailsButton = (cid) => {
    setShowModalDetails(true);
    fetch(`http://localhost:4000/api/clients/${cid}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOwner(data.ownerName);
        setOwnerAddress(data.ownerAddress);
        setNameContractor(data.nameOfContractor);
        setAuthorizeRep(data.authorizedRepresentative);
        setMobileNo(data.mobileNo);
        setEmail(data.email);
        setFloorArea(data.floorArea);
        setNoStorey(data.noOfStorey);
        setNatureOfBusiness(data.natureOfBusiness);
        setFloorAreaOccupied(data.floorAreaOccupied);
        setNameOfEstablishment(data.nameOfEstablishment);
        setLocationOfEstablishment(data.locationOfEstablishment);
        setOccupancyType(data.occupancyType);
        setHazardType(data.hazardType);
        setBusinessType(data.businessType);
        setBin(data.bin);
      });
  };

  let releasingTxn = listTxn.filter((txn) => {
    if (searchText === "") {
      if (
        txn.pe === "Approved" &&
        txn.txnName === "FSEC Application" &&
        txn.status === "Paid"
      )
        return txn;
    } else {
      if (
        txn.pe === "Approved" &&
        txn.txnName === "FSEC Application" &&
        txn.status === "Paid"
      )
        return (
          txn.clientName.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
        );
    }
  });

  let showRelease = releasingTxn.map((txn) => {
    return (
      <tr key={txn._id}>
        <td>{txn.clientName}</td>
        <td>{txn.status}</td>
        <td>{txn.pe}</td>
        <td>
          <Button
            variant="primary"
            onClick={(e) => viewDetailsButton(txn.clientId)}
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

  return (
    <>
      <h1>Releasing</h1>

      <Form>
        <Row>
          <Col md={6}>
            <Form.Group controlId="searchId">
              <Form.Control
                type="text"
                placeholder="Search Assessment"
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
            <th>Payment</th>
            <th>Status Plan Evaluator</th>
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
              disabled={remarks === "" ? true : false}
              onClick={() => released()}
            >
              Release FSEC
            </Button>
            <Button
              className="mx-2"
              variant="danger"
              disabled={remarks === "" ? true : false}
              onClick={() => notReleased()}
            >
              FSEC Denied
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={showModalDetails}
        onHide={handleClose}
        centered
        size="xl"
        aria-labelledby="collectionId"
      >
        <Modal.Header closeButton>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>Business Number: {bin} </h3>
          <Row>
            <Col>
              <p>
                <strong>Owners Name:</strong> {owner}
              </p>
              <p>
                <strong>Owner Address:</strong> {ownerAddress}
              </p>
              <p>
                <strong>Mobile Number:</strong> {mobileNo}
              </p>
              <p>
                <strong>Email:</strong> {email}
              </p>
              <p>
                <strong>Authorized Representative:</strong> {authorizeRep}
              </p>
              <p>
                <strong>Occupancy Type:</strong> {occupancyType}
              </p>
              <p>
                <strong>Nature of Business: </strong>
                {natureOfBusiness}
              </p>
            </Col>
            <Col>
              <p>
                <strong>Name of Establishment:</strong> {nameOfEstablishment}
              </p>
              <p>
                <strong>Location of Establishment:</strong>{" "}
                {locationOfEstablishment}
              </p>
              <p>
                <strong>Business Type:</strong> {businessType}
              </p>
              <p>
                <strong>Hazard Type:</strong> {hazardType}
              </p>
              <p>
                <strong>Floor Area:</strong> {floorArea}
              </p>
              <p>
                <strong>Occupied Floor Area:</strong> {floorAreaOccupied}
              </p>
              <p>
                <strong>Number of Storey:</strong> {noStorey}
              </p>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}
