import { useState, useContext, useEffect } from "react";
import { Row, Col, Table, Button, Modal, Form } from "react-bootstrap";

const PlanEvaluation = () => {
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
  const [showModalAction, setShowModalAction] = useState(false);
  const [showModalClient, setShowModalClient] = useState(false);
  const [planEval, setPlanEval] = useState([]);
  const [selectedTxnId, setSelectedTxnId] = useState("");
  const [searchText, setSearchText] = useState("");
  const [remarks, setRemarks] = useState("");

  const handleClose = () => {
    setShowModalAction(false);
    setShowModalClient(false);
  };
  //getting all transactions
  useEffect(() => {
    let isSubscribe = true;
    fetch("http://localhost:4000/api/txn", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (isSubscribe) {
          setPlanEval(data);
        }
      });

    return () => (isSubscribe = false);
  }, [showModalAction, showModalClient, handleClose]);

  const refresh = async () => {
    
  };

  const viewDetailsButton = (cid) => {
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
    setShowModalClient(true);
  };

  let filterPlan = planEval.filter((plan) => {
    if (searchText === "") {
      return plan;
    } else {
      return (
        plan.clientName.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
      );
    }
  });

  const showTable = filterPlan.map((plan) => {
    if (
      plan.pe === "Pending" &&
      plan.txnName === "Other Fee/Clearances" &&
      plan.status === "Paid"
    ) {
      return (
        <tr key={plan._id}>
          <td>{plan.clientName}</td>
          <td>{plan.totalAmount}</td>
          <td>{plan.txnName}</td>
          <td>{plan.status}</td>
          <td>{plan.pe}</td>
          <td>
            <Button
              variant="primary"
              onClick={(e) => {
                viewDetailsButton(plan.clientId);
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
                setSelectedTxnId(plan._id);
              }}
            >
              View
            </Button>
          </td>
          <td>{plan.remarks}</td>
        </tr>
      );
    }
  });

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
      })
        .then((res) => res.json())
        .then((data) => {
          swal("Approved Successfully!", { icon: "success" });
          setShowModalAction(false);
        });
      
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
          status: "Paid"
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          swal("Disapproved!", { icon: "warning" });
          setShowModalAction(false);
        });
      
    }
  }

  return (
    <>
      <h1>Marshall</h1>
      <Form>
        <Col md={6}>
          <Form.Group controlId="searchId">
            <Form.Control
              type="text"
              placeholder="Search"
              onChange={(e) => setSearchText(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Form>
      <Table striped bordered hover responsive="sm" bg="dark" variant="dark">
        <thead>
          <tr>
            <th>Owner</th>
            <th>Amount </th>
            <th>Transaction Type</th>
            <th>Payment Status</th>
            <th>Plan Evaluator Status</th>
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
          <Modal.Title>Marshal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <strong>Instruction:</strong>
          <p> As Marshal Do you Approve or Disapprove</p>
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
              onClick={() => {
                actionButton("Approve");
              }}
            >
              Approve
            </Button>
            <Button
              type="submit"
              variant="danger"
              disabled={remarks != "" ? false : true}
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
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PlanEvaluation;
