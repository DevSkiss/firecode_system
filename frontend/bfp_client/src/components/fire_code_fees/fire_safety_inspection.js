import { useState, useEffect, useContext } from "react";
import { Row, Col, Form } from "react-bootstrap";
import FsicContext from "../../context/FsicContext";

const FireSafetyInspection = (params) => {
  const { user, setUser, totalAmount, setTotalAmount } = useContext(
    FsicContext
  );
  //Occupancy - 15% Fire Safety Inspection Fee
  const [checkfsif, setCheckFsif] = useState(false);
  const [fsif, setFsif] = useState(0);
  const [resultFsif, setResultFsif] = useState(0);
  useEffect(() => {
    if (fsif * 0.15 < 499 && fsif * 0.15 > 0) {
      setResultFsif(500);
      setTotalAmount(totalAmount + 500);
    } else if (fsif * 0.15 > 500) {
      setResultFsif(fsif * 0.15);
      setTotalAmount(totalAmount + resultFsif);
    } else {
      setTotalAmount(0);
    }

    return () => {
      setResultFsif(0);
      setTotalAmount(0);
    };
  }, [fsif]);

  return (
    <Form.Group>
      <Form.Check
        type="checkbox"
        label="Fire Safety Inspection Fee"
        value={checkfsif}
        onClick={(e) => setCheckFsif(e.target.checked)}
      />
      {checkfsif ? (
        <Row>
          <Col md={6}>
            <p>
              Fee charged for the conduct of Fire Safety Inspection equivalent
              to fifteen percent (15%) of all fees charged by the Local
              Government Unit or Philippine Economic Zone Authority (PEZA), but
              in no case shall be lower than Five Hundred Pesos (PhP500.00)
            </p>
          </Col>
          <Col md={6}>
            <Form.Label>Fee Charge by the LGU</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Fee Charge by the LGU"
              value={fsif}
              onChange={(e) => setFsif(e.target.value)}
            />
            <p>15% from total: {resultFsif}</p>
          </Col>
        </Row>
      ) : null}
    </Form.Group>
  );
};

export default FireSafetyInspection;
