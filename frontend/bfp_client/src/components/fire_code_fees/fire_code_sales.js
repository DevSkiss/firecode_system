import { Row, Col, Form } from "react-bootstrap";
import { useState, useEffect } from "react";

const FireCodeSalesTax = (params) => {
  const [fcst, setFcst] = useState(false);
  const [amountSales, setAmountSales] = useState(0);
  const [resultSales, setResultSales] = useState(0);

  useEffect(() => {
    if (amountSales <= 0) {
      setResultSales(0);
      params.setSalesTax({
        amount: 0,
        firecode: "628-BFP-04",
      });
    } else {
      setResultSales(amountSales * 0.02);
      params.setSalesTax({
        amount: amountSales * 0.02,
        firecode: "628-BFP-04",
      });
    }

    return () => {
      setResultSales(0);
    };
  }, [amountSales]);

  useEffect(() => {
    if (!fcst) setAmountSales(0);

    return () => {
      setAmountSales(0);
    };
  }, [fcst]);

  return (
    <>
      <Form.Check
        type="checkbox"
        label="Fire Code Sales Tax"
        value={fcst}
        onClick={(e) => setFcst(e.target.checked)}
      />
      <Row>
        {fcst ? (
          <>
            <Col>
              <p>
                Two per centum (2%) of gross sales of companies, persons or
                agents selling firefighting equipment, appliances or devices,
                including hazard detection and warning systems
              </p>
            </Col>

            <Col>
              <Form.Control
                type="number"
                placeholder="Amount Sales Tax"
                value={amountSales}
                onChange={(e) => setAmountSales(e.target.value)}
              />
              <p>2% of gross sales: {Math.round(resultSales)}.00</p>
            </Col>
          </>
        ) : null}
      </Row>
    </>
  );
};

export default FireCodeSalesTax;
