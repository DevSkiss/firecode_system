import { Row, Col, Form } from "react-bootstrap";
import { useState, useEffect } from "react";

const FireCodeProceedsTax = (params) => {
  const [checkProceeds, setCheckProceeds] = useState(false);
  const [amountProceeds, setAmountProceeds] = useState(0);
  const [resultAmountProceeds, setResultAmountProceeds] = useState(0);

  useEffect(() => {
    setResultAmountProceeds(amountProceeds * 0.02);

    return () => {
      setResultAmountProceeds(0);
    };
  }, [amountProceeds]);
  return (
    <>
      <Row>
        <Col>
          <Form.Check
            type="checkbox"
            label="Fire Code Proceeds Tax"
            value={checkProceeds}
            onClick={(e) => setCheckProceeds(e.target.checked)}
          />
        </Col>
        <Col>
          {checkProceeds ? (
            <>
              <Form.Control
                type="text"
                placeholder="Amount Proceeds Tax"
                onChange={(e) => setAmountProceeds(e.target.value)}
              />
              <p>
                Total Amount Proceeds: Php {Math.round(resultAmountProceeds)}.00
              </p>
            </>
          ) : null}
        </Col>
      </Row>
    </>
  );
};

export default FireCodeProceedsTax;
