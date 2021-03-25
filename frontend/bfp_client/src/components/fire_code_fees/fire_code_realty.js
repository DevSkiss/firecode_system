import { Row, Col, Form } from "react-bootstrap";
import { useState, useEffect } from "react";

const FireCodeRealtyTax = (params) => {
  const [checkRealty, setCheckRealty] = useState(false);
  const [amountRealty, setAmountRealty] = useState(0);
  const [resultRealty, setResultRealty] = useState(0);

  useEffect(() => {
    setResultRealty(amountRealty * 0.0001);
    params.setRealtyTax({
      amount: amountRealty * 0.0001,
      firecode: "628-BFP-02",
    });

    return () => {
      setResultRealty(0);
      params.setRealtyTax({
        amount: 0,
        firecode: "",
      });
    };
  }, [amountRealty]);

  useEffect(() => {
    if (checkRealty === false) {
      setAmountRealty(0);
    }
  }, [checkRealty]);
  return (
    <>
      <Form.Check
        type="checkbox"
        label="Fire Code Realty Tax"
        value={checkRealty}
        onClick={(e) => setCheckRealty(e.target.checked)}
      />

      {checkRealty ? (
        <>
          <Row>
            <Col>
              <p>
                One-hundredth of one per centum (0.01%) of the assessed value of
                buildings or structures annually payable upon payment of the
                real estate tax, except on structures used as single family
                dwellings
              </p>
            </Col>
            <Col>
              <Form.Control
                type="number"
                placeholder="Amount Realty Tax"
                onChange={(e) => setAmountRealty(e.target.value)}
              />
              <p>0.0001% of assed value: {Math.round(resultRealty)}.00</p>
            </Col>
          </Row>
        </>
      ) : null}
    </>
  );
};

export default FireCodeRealtyTax;
