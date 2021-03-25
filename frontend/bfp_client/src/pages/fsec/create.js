import { useState, useEffect } from "react";
import { Table, Row, Col, Form, Button, Container } from "react-bootstrap";
import swal from "sweetalert";
import Router from "next/router";

export default function Create() {
  const [owner, setOwner] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [location, setLocation] = useState("");
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
  const [occupancyType, setOccupancyType] = useState("-");
  const [hazardType, setHazardType] = useState("-");
  const [businessType, setBusinessType] = useState("-");

  function clearData() {
    setOwner("");
    setProjectTitle("");
    setLocation("");
    setOwnerAddress("");
    setNameContractor("");
    setAuthorizeRep("");
    setMobileNo("");
    setEmail("");
    setFloorArea("");
    setFloorAreaOccupied("");
    setNoStorey("");
    setNatureOfBusiness("");
    setBin("");
    setOccupancyType("-");
    setHazardType("-");
    setBusinessType("-");
  }

  function createClient(e) {
    e.preventDefault();
    fetch("http://localhost:4000/api/clients/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        ownerName: owner,
        nameOfEstablishment: projectTitle,
        locationOfEstablishment: location,
        natureOfBusiness: natureOfBusiness,
        ownerAddress: ownerAddress,
        bin: bin,
        nameOfContractor: nameContractor,
        authorizedRepresentative: authorizeRep,
        mobileNo: mobileNo,
        email: email,
        occupancyType: occupancyType,
        businessType: businessType,
        hazardType: hazardType,
        floorArea: floorArea,
        floorAreaOccupied: floorAreaOccupied,
        noOfStorey: noStorey,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          swal(
            "Client Created",
            "You have successfully added a new client",
            "success"
          );
          clearData();
          Router.push("/fsec");
        } else {
          swal("Failed", "Error while adding client", "error");
        }
      });
  }

  return (
    <>
      <Button
        variant="secondary"
        onClick={() => Router.push("/fsec")}
        className="my-3 ml-3"
      >
        Go Back
      </Button>
      <Container>
        <Button
          variant="primary"
          className="ml-5 floating-button2"
          onClick={(e) => createClient(e)}
        >
          Add New Client
        </Button>
        <h1>New Assessment</h1>
        <p>
          Instruction: Accomplish the data needed. Type Legibly. Incomplete
          details will not be processed.
        </p>
        <Form onSubmit={(e) => submitAssessment(e)}>
          <Form.Group controlId="assessmentId">
            <Row>
              <Col>
                <Form.Label>
                  Owner Name
                  <small className="required-text-style">* Required</small>{" "}
                </Form.Label>
                <Form.Control
                  required
                  value={owner}
                  placeholder="Owner name"
                  onChange={(e) => setOwner(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Label>
                  Owner Address
                  <small className="required-text-style">* Required</small>
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={ownerAddress}
                  placeholder="Owner's Address"
                  onChange={(e) => setOwnerAddress(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>
                  Project Name
                  <small className="required-text-style">* Required</small>
                </Form.Label>
                <Form.Control
                  required
                  value={projectTitle}
                  placeholder="Project Name"
                  onChange={(e) => setProjectTitle(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Label>
                  Project Location
                  <small className="required-text-style">* Required</small>
                </Form.Label>
                <Form.Control
                  required
                  value={location}
                  placeholder="Project Location"
                  onChange={(e) => setLocation(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Label>
                  Name of Contractor
                  <small className="required-text-style">* Required</small>
                </Form.Label>
                <Form.Control
                  required
                  value={nameContractor}
                  placeholder="Contractor"
                  onChange={(e) => setNameContractor(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Nature Of Businness</Form.Label>
                <Form.Control
                  type="text"
                  value={natureOfBusiness}
                  placeholder="Nature of Business"
                  onChange={(e) => setNatureOfBusiness(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Label>Business Number</Form.Label>
                <Form.Control
                  type="text"
                  value={bin}
                  placeholder="Business Number"
                  onChange={(e) => setBin(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>
                  Authorized Representative
                  <small> (if applicannt is not the owner)</small>
                </Form.Label>
                <Form.Control
                  value={authorizeRep}
                  placeholder="Full Name"
                  onChange={(e) => setAuthorizeRep(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Label>
                  Mobile Number
                  <small className="required-text-style">* Required</small>
                </Form.Label>
                <Form.Control
                  required
                  type="number"
                  value={mobileNo}
                  placeholder="Mobile Number"
                  onChange={(e) => setMobileNo(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Total Floor Area</Form.Label>
                <Form.Control
                  type="number"
                  value={floorArea}
                  placeholder="Total Floor Area"
                  onChange={(e) => setFloorArea(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Label>Total Floor Area Occupied</Form.Label>
                <Form.Control
                  type="number"
                  value={floorAreaOccupied}
                  placeholder="Total Floor Area Occupied"
                  onChange={(e) => setFloorAreaOccupied(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Label>No. Of Storey</Form.Label>
                <Form.Control
                  type="number"
                  value={noStorey}
                  placeholder="Number of Storey"
                  onChange={(e) => setNoStorey(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Type of Business</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                >
                  <option>-</option>
                  <option>Small and Medium</option>
                  <option>Big</option>
                </Form.Control>
              </Col>
              <Col>
                <Form.Label>
                  Type of Occupancy
                  <small className="required-text-style">* Required</small>
                </Form.Label>
                <Form.Control
                  required
                  as="select"
                  defaultValue={occupancyType}
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
              </Col>
              <Col>
                <Form.Label>Hazard Type</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue={hazardType}
                  onChange={(e) => setHazardType(e.target.value)}
                >
                  <option>-</option>
                  <option>Low and Medium</option>
                  <option>High</option>
                </Form.Control>
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
}
