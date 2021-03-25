import { Row, Col, Form } from "react-bootstrap";
import { useEffect, useState } from "react";

const FireCodePremiumTax = (params) => {
  //Fire Code Premium Tax
  const [checkfcpt, setCheckFcpt] = useState(false);
  const [fcpt, setFcpt] = useState(0);
  const [resultFcpt, setResultFcpt] = useState(0);
  useEffect(() => {
    setResultFcpt(fcpt * 0.02);
    params.setPremTax({
      amount: fcpt * 0.02,
      firecode: "628-BFP-03",
    });
    return () => {
      setResultFcpt(0);
      params.setPremTax({
        amount: 0,
        firecode: "",
      });
    };
  }, [fcpt]);

  useEffect(() => {
    if (checkfcpt === false) {
      setFcpt(0);
    }
  }, [checkfcpt]);

  return (
    <>
      <Form.Check
        type="checkbox"
        label="Fire Code Premium Tax"
        value={checkfcpt}
        onClick={(e) => setCheckFcpt(e.target.checked)}
      />
      {checkfcpt ? (
        <Row>
          <Col md={6}>
            <p>
              Two per centum (2%) of all premiums, excluding re-insurance
              premiums for the sale of fire, earthquake and explosion hazard
              insurance collected by companies, persons or agents licensed to
              sell such insurances in the Philippines
            </p>
          </Col>
          <Col md={6}>
            <Form.Label>Sale of Insurance</Form.Label>
            <Form.Control
              type="number"
              placeholder="Sale of Insurance"
              value={fcpt}
              onChange={(e) => setFcpt(e.target.value)}
            />
            <p>2% of all premiums: {Math.round(resultFcpt)}.00</p>
          </Col>
        </Row>
      ) : null}
    </>
  );
};

export default FireCodePremiumTax;
