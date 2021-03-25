import { useState, useEffect, useContext } from "react";
import { Form } from "react-bootstrap";

const ElectricalInstallation = () => {
  const [checkElecIns, setCheckElecIns] = useState(false);
  const [elecIns, setElecIns] = useState(0);
  const [resultElecIns, setResultElecIns] = useState(0);

  useEffect(() => {
    if (elecIns > 5 && elecIns <= 50) {
      setResultElecIns(100 + (elecIns - 5) * 10);
    } else if (elecIns > 50 && elecIns <= 300) {
      setResultElecIns(550 + (elecIns - 5) * 5);
    } else if (elecIns > 300 && elecIns <= 1500) {
      setResultElecIns(1800 + (elecIns - 5) * 5);
    } else if (elecIns > 1500 && elecIns <= 6000) {
      setResultElecIns(4800 + (elecIns - 5) * 2.5);
    } else if (elecIns > 6000) {
      setResultElecIns(8425 + (elecIns - 5) * 1.25);
    } else if (elecIns <= 5 && elecIns != 0) {
      setResultElecIns(100);
    } else {
      setResultElecIns(0);
    }
  }, [elecIns]);

  return (
    <Form.Group>
      <Form.Check
        type="checkbox"
        label="Electrical Installation"
        value={checkElecIns}
        onClick={(e) => setCheckElecIns(e.target.checked)}
      />
      {checkElecIns ? (
        <div className="ml-5">
          <Form.Control
            type="number"
            placeholder="Enter Number of KVA"
            onChange={(e) => setElecIns(e.target.value)}
          />
          <p>Electrical Amount Fee: {resultElecIns}</p>
        </div>
      ) : null}
    </Form.Group>
  );
};

export default ElectricalInstallation;
