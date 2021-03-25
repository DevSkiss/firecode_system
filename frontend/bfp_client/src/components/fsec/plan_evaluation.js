import {
  Row,
  Col,
  Table,
  Button,
  Modal,
  Form,
  FormControl,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import Router from "next/router";

export default function PlanEvaluation() {
  const [isBusy, setBusy] = useState(false);
  const [cId, setCid] = useState("");
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
  const [noOfStorey, setNoOfStorey] = useState("");
  const [natureOfBusiness, setNatureOfBusiness] = useState("");
  const [bin, setBin] = useState("");
  const [occupancyType, setOccupancyType] = useState("");
  const [hazardType, setHazardType] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [remarks, setRemarks] = useState("");
  const [showModalAction, setShowModalAction] = useState(false);
  const [showModalClient, setShowModalClient] = useState(false);
  const handleClose = () => {
    setRemarks("");
    setOccupancyType("-");
    setBusinessType("-");
    setHazardType("-");
    setShowModalClient(false);
    setShowModalAction(false);
  };
  const [planEval, setPlanEval] = useState([]);
  const [selectedTxnId, setSelectedTxnId] = useState("");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    refresh();
  }, [showModalAction, showModalClient]);

  function refresh() {
    fetch("http://localhost:4000/api/txn", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPlanEval(data);
      });
  }

  function actionButton(decision) {
    if (decision === "Approve") {
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
      setShowModalAction(false);
      refresh();
    } else {
      fetch("http://localhost:4000/api/txn/pe", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          txnId: selectedTxnId,
          pe: "Disapproved",
          remarks: remarks,
          status: "Paid",
        }),
      }).then((res) => res.json());
      setShowModalAction(false);
      refresh();
    }
  }
  const viewDetailsButton = (cid) => {
    setCid(cid);
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
        setNoOfStorey(data.noOfStorey);
        setNatureOfBusiness(data.natureOfBusiness);
        setFloorAreaOccupied(data.floorAreaOccupied);
        setNameOfEstablishment(data.nameOfEstablishment);
        setLocationOfEstablishment(data.locationOfEstablishment);
        setOccupancyType(data.occupancyType);
        setHazardType(data.hazardType);
        setBusinessType(data.businessType);
        setBin(data.bin);
      });
    setShowModalClient(true);
  };

  const updateDetails = async () => {
    setBusy(true);
    const res = await fetch(`http://localhost:4000/api/clients/update-info`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        clientId: cId,
        occupancyType: occupancyType,
        hazardType: hazardType,
        businessType: businessType,
        floorArea: floorArea,
        floorAreaOccupied: floorAreaOccupied,
        noOfStorey: noOfStorey,
      }),
    });
    const result = await res.json();

    setBusy(false);
    handleClose();
  };

  let filteredPlan = planEval.filter((plan) => {
    if (searchText === "") {
      if (plan.pe === "Pending" && plan.status === "Paid") return plan;
    } else {
      if (plan.pe === "Pending" && plan.status === "Paid")
        return (
          plan.clientName.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
        );
    }
  });

  let showTable = filteredPlan.map((filter) => {
    return (
      <tr key={filter._id}>
        <td>{filter.clientName}</td>
        <td>{filter.status}</td>
        <td>{filter.totalAmount}</td>
        <td>{filter.txnName}</td>
        <td>{filter.pe}</td>
        <td>
          <Button
            variant="primary"
            onClick={(e) => {
              viewDetailsButton(filter.clientId);
            }}
          >
            View More Details
          </Button>
        </td>
        <td>
          <Button
            variant="primary"
            onClick={(e) => {
              setShowModalAction(true);
              setSelectedTxnId(filter._id);
            }}
          >
            View
          </Button>
        </td>
        <td>{filter.remarks}</td>
      </tr>
    );
  });

  return (
    <>
      <Form>
        <Col md={6}>
          <Form.Group controlId="searchId">
            <Form.Control
              type="text"
              placeholder="Search By Client Name"
              onChange={(e) => setSearchText(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Form>
      <Table striped bordered hover responsive="sm" bg="dark" variant="dark">
        <thead>
          <tr>
            <th>Owner</th>
            <th>Payment</th>
            <th>Amount </th>
            <th>Transaction Type</th>
            <th>Status Plan Evaluator</th>
            <th>Details</th>
            <th>Actions</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>{showTable}</tbody>
      </Table>

      <Modal
        show={showModalAction}
        onHide={handleClose}
        centered
        aria-labelledby="collectionId"
      >
        <Modal.Header closeButton>
          <Modal.Title>Plan Evaluator</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>Instruction:</strong> As Plan Evaluator Do you Approve or
            Disapprove
          </p>
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
              disabled={remarks == "" ? true : false}
              onClick={() => {
                actionButton("Approve");
              }}
            >
              Approve
            </Button>
            <Button
              type="submit"
              variant="danger"
              disabled={remarks == "" ? true : false}
              onClick={() => {
                actionButton("Disapprove");
              }}
            >
              Disapprove
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
              <p>
                <strong>Name of Establishment:</strong> {nameOfEstablishment}
              </p>
              <p>
                <strong>Location of Establishment:</strong>{" "}
                {locationOfEstablishment}
              </p>
            </Col>
            <Col>
              <Form>
                <Form.Group>
                  <Form.Label>
                    <strong>Business Type:</strong>
                  </Form.Label>
                  <Form.Control
                    as="select"
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                  >
                    <option>-</option>
                    <option>Small and Medium</option>
                    <option>Big</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    <strong>Hazard Type:</strong>
                  </Form.Label>
                  <Form.Control
                    as="select"
                    value={hazardType}
                    onChange={(e) => setHazardType(e.target.value)}
                  >
                    <option>-</option>
                    <option>Low and Medium</option>
                    <option>High</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    <strong>Occupancy Type:</strong>
                  </Form.Label>
                  <Form.Control
                    as="select"
                    value={occupancyType}
                    onChange={(e) => setOccupancyType(e.target.value)}
                  >
                    <option>-</option>
                    <option>Assembly</option>
                    <option>Educational</option>
                    <option>Day Care</option>
                    <option>Health Care</option>
                    <option>Residential Board and Care</option>
                    <option>Detention and Correctional</option>
                    <option>Residential</option>
                    <option>Mercantile</option>
                    <option>Business</option>
                    <option>Industrial</option>
                    <option>Storage</option>
                    <option>Mixed Occupancies</option>
                    <option>Special Structure</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    <strong>Floor Area:</strong>
                  </Form.Label>
                  <Form.Control
                    placeholder="Floor Area"
                    value={floorArea || ""}
                    onChange={(e) => setFloorArea(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    <strong>Occupied Floor Area:</strong>
                  </Form.Label>
                  <Form.Control
                    placeholder="Floor Area Occupied"
                    value={floorAreaOccupied || ""}
                    onChange={(e) => setFloorAreaOccupied(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    <strong>Number of Storey:</strong>
                  </Form.Label>
                  <Form.Control
                    placeholder="No of Storey"
                    value={noOfStorey || ""}
                    onChange={(e) => setNoOfStorey(e.target.value)}
                  />
                </Form.Group>
                <Button variant="success" onClick={() => updateDetails()}>
                  Update Details
                </Button>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
      {isBusy ? (
        <Loader
          type="Circles"
          color="rgb(255,252,0)"
          height={50}
          width={50}
          className="loading"
        />
      ) : (
        <div></div>
      )}
    </>
  );
}
