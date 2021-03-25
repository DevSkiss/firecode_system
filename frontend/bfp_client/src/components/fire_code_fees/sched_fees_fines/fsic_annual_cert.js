import { Row, Col, Form } from "react-bootstrap";
import { useState, useEffect } from "react";

const FsicAnnualCert = (params) => {
  const [annualCert, setAnnualCert] = useState(0);
  const [resultAnnualCert, setResultAnnualCert] = useState(0);
  const [checkAnnualCert, setCheckAnnualCert] = useState(false);

  useEffect(() => {
    if (annualCert * 0.15 <= 500 && annualCert != 0) {
      setResultAnnualCert(500);
      params.setAnnualCert({
        amount: 500,
        firecode: "628-BFP-11",
      });
    } else if (annualCert > 500) {
      setResultAnnualCert(annualCert * 0.15);
      params.setAnnualCert({
        amount: annualCert * 0.15,
        firecode: "628-BFP-11",
      });
    } else {
      setResultAnnualCert(0);
      params.setAnnualCert({
        amount: 0,
        firecode: "",
      });
    }

    return () => {
      setResultAnnualCert(0);
      params.setAnnualCert({
        amount: 0,
        firecode: "",
      });
    };
  }, [annualCert]);

  return (
    <>
      <Form.Check
        type="checkbox"
        label="FSIC for annual inspection certificate"
        value={checkAnnualCert}
        onClick={(e) => setCheckAnnualCert(e.target.checked)}
      />
      {checkAnnualCert ? (
        <>
          <Row>
            <Col md={6}>
              <p>
                Fifteen percent (15%) of all fees charged by the PEZA, but in no
                case shall be lower than Five Hundred Pesos (PhP500.00).{" "}
              </p>
            </Col>
            <Col md={6}>
              <Form.Label>Amount Charged by PEZA:</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter amount charged by the PEZA"
                value={annualCert}
                onChange={(e) => setAnnualCert(e.target.value)}
              />
              <p>15% of all charged: {Math.round(resultAnnualCert)}</p>
            </Col>
          </Row>
        </>
      ) : null}
    </>
  );
};

export default FsicAnnualCert;
