import { useState, useEffect, useContext } from "react";
import { Form } from "react-bootstrap";

const FireIncidentClearance = () => {
  //Fire Incident Clearance
  const [checkFic, setCheckFic] = useState(false);
  const [fic, setFic] = useState(0);

  return (
    <Form.Group>
      <Form.Check
        type="checkbox"
        label="Fire Incident Clearance"
        value={checkFic}
        onClick={(e) => {
          setFic(350);
          setCheckFic(e.target.checked);
        }}
      />
      {checkFic ? <p>Fire Incident Clearance: {fic}</p> : null}
    </Form.Group>
  );
};

export default FireIncidentClearance;
