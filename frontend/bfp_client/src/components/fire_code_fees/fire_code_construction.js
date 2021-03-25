import { Row, Col, Form } from "react-bootstrap";
import { useState, useEffect } from "react";

const FireCodeConstruction = (params) => {
  //Construction Tax
  const [fcct, setFcct] = useState(false);
  const [constructionTax, setConstructionTax] = useState(0);

  useEffect(() => {
    let temp = constructionTax * 0.001;
    if (temp > 50000) {
      params.setConstructionTax(50000);
      params.setFireCodeConstructionTax("628-BFP-01");
    } else if (temp > 0 && temp <= 50000) {
      params.setConstructionTax(constructionTax * 0.001);
      params.setFireCodeConstructionTax("628-BFP-01");
    } else {
      params.setConstructionTax(0);
      params.setFireCodeConstructionTax("628-BFP-01");
    }

    return () => {
      params.setConstructionTax(0);
      params.setFireCodeConstructionTax("");
    };
  }, [constructionTax]);

  useEffect(() => {
    if (!fcct) {
      setConstructionTax(0);
    }

    return () => {
      setConstructionTax(0);
    };
  }, [fcct]);

  return (
    <Form.Group>
      <Form.Check
        type="checkbox"
        label="Fire Code Construction Tax"
        value={fcct}
        onClick={(e) => setFcct(e.target.checked)}
      />
      {fcct ? (
        <>
          <Row>
            <Col md={6}>
              <p>
                0.10% of the verified estimated value of buildings or structures
                to be erected, from the owner thereof, but not to exceed fifty
                thousand (PhP 50,000.00) pesos, at least fifty per centum (50%)
                to be paid prior to the issuance of the building permit, and the
                balance, after final inspection and prior to the issuance of
                Certificate of Occupancy;{" "}
              </p>
            </Col>
            <Col md={6}>
              <Form.Label>Estimated Value of Building or Structure:</Form.Label>
              <Form.Control
                type="Number"
                placeholder="Estimated Value of Building or Strucutre"
                value={constructionTax}
                onChange={(e) => setConstructionTax(e.target.value)}
              />
            </Col>
          </Row>
        </>
      ) : null}
    </Form.Group>
  );
};

export default FireCodeConstruction;
