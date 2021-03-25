import { Row, Col, Form } from "react-bootstrap";
import { useState, useEffect } from "react";

const FsicBusinessPermit = (params) => {
  const [businessPermit, setBusinessPermit] = useState(0);
  const [resultBusinessPermit, setResultBusinessPermit] = useState(0);
  const [checkBusinessPermit, setCheckBusinessPermit] = useState(false);

  useEffect(() => {
    if (businessPermit * 0.15 <= 500 && businessPermit != 0) {
      setResultBusinessPermit(500);
      params.setBusinessPermit({
        amount: 500,
        firecode: "628-BFP-11",
      });
    } else if (businessPermit > 500) {
      setResultBusinessPermit(businessPermit * 0.15);
      params.setBusinessPermit({
        amount: businessPermit * 0.15,
        firecode: "628-BFP-11",
      });
    } else {
      setResultBusinessPermit(0);
      params.setBusinessPermit({
        amount: 0,
        firecode: "",
      });
    }

    return () => {
      setResultBusinessPermit(0);
      params.setBusinessPermit({
        amount: 0,
        firecode: "",
      });
    };
  }, [businessPermit]);

  return (
    <>
      <Form.Check
        type="checkbox"
        label="FSIC for Business Permit"
        value={checkBusinessPermit}
        onClick={(e) => setCheckBusinessPermit(e.target.checked)}
      />
      {checkBusinessPermit ? (
        <>
          <Row>
            <Col md={6}>
              <p>
                Fifteen percent (15%) of all fees charged by the Local
                Government Unit, but in no case shall be lower than Five Hundred
                Pesos (PhP500.00).{" "}
              </p>
            </Col>
            <Col md={6}>
              <Form.Label>Amount Charged by LGU:</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter amount charged by the LGU"
                value={businessPermit}
                onChange={(e) => setBusinessPermit(e.target.value)}
              />
              <p>15% of all charged: {Math.round(resultBusinessPermit)}</p>
            </Col>
          </Row>
        </>
      ) : null}
    </>
  );
};

export default FsicBusinessPermit;
