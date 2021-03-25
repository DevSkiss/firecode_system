import { useState, useEffect, useContext } from "react";
import { Form } from "react-bootstrap";

const FireDrill = () => {
  //Fire Drill
  const [checkFireDrill, setCheckFireDrill] = useState(false);
  const [fireDrill, setFireDrill] = useState(0);
  return (
    <Form.Group>
      <Form.Check
        type="checkbox"
        label="Fire Drill"
        value={checkFireDrill}
        onClick={(e) => {
          setFireDrill(1000);
          setCheckFireDrill(e.target.checked);
        }}
      />
      {checkFireDrill ? <p>Fire Drill: {fireDrill}</p> : null}
    </Form.Group>
  );
};

export default FireDrill;
