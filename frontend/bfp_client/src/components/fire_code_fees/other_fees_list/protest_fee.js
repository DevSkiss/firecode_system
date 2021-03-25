import { useState, useEffect, useContext } from "react";
import { Form } from "react-bootstrap";

const ProtestFee = () => {
  //protest
  const [checkPf, setCheckPf] = useState(false);
  const [pf, setPf] = useState(0);
  return (
    <Form.Group>
      <Form.Check
        type="checkbox"
        label="Protest Fee mentioned under Rule 14 of this RIRR"
        value={checkPf}
        onClick={(e) => {
          setPf(500);
          setCheckPf(e.target.checked);
        }}
      />
      {checkPf ? <p>Protest Fee: {pf}</p> : null}
    </Form.Group>
  );
};

export default ProtestFee;
