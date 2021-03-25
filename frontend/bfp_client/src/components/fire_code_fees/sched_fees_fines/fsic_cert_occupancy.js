import { Row, Col, Form } from "react-bootstrap";
import { useState, useEffect } from "react";

const FsicCertOccupancy = (params) => {
  const [certOccu, setCertOccu] = useState(0);
  const [resultOccu, setResultOccu] = useState(0);
  const [checkCert, setCheckCert] = useState(false);

  useEffect(() => {
    if (certOccu * 0.15 <= 500 && certOccu != 0) {
      setResultOccu(500);
      params.setOccupancyCert({
        amount: 500,
        firecode: "628-BFP-11",
      });
    } else if (certOccu > 500) {
      setResultOccu(certOccu * 0.15);
      params.setOccupancyCert({
        amount: certOccu * 0.15,
        firecode: "628-BFP-11",
      });
    } else {
      setResultOccu(0);
      params.setOccupancyCert({
        amount: 0,
        firecode: "",
      });
    }

    return () => {
      setResultOccu(0);
      params.setOccupancyCert({
        amount: 0,
        firecode: "",
      });
    };
  }, [certOccu]);

  return (
    <Form.Group>
      <Form.Check
        type="checkbox"
        label="FSIC for Certificate of Occupancy"
        value={checkCert}
        onClick={(e) => setCheckCert(e.target.checked)}
      />
      {checkCert ? (
        <>
          <Row>
            <Col md={6}>
              <p>
                Fifteen percent (15%) of all fees charged by the Office of the
                Building Official of the Local Government Unit (LGU) or
                Philippine Economic Zone Authority (PEZA), but in no case shall
                be lower than Five Hundred Pesos (PhP500.00). b. FSIC for
                Business Permit{" "}
              </p>
            </Col>
            <Col md={6}>
              <Form.Label>Amount Charged by LGU:</Form.Label>
              <Form.Control
                type="Number"
                placeholder="Enter amount charged by the LGU"
                value={certOccu}
                onChange={(e) => setCertOccu(e.target.value)}
              />
              <p>15% of all charged: {Math.round(resultOccu)}</p>
            </Col>
          </Row>
        </>
      ) : null}
    </Form.Group>
  );
};

export default FsicCertOccupancy;
