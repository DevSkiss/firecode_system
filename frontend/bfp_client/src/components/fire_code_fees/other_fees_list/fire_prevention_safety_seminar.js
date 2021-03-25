import { useState, useContext, useEffect } from "react";
import { Form } from "react-bootstrap";

const FirePreventionSafetySeminar = () => {
  //Fire Prevention and Safety Seminar
  const [checkFpss, setCheckFpss] = useState(false);
  const [fpss, setFpss] = useState(0);
  return (
    <Form.Group>
      <Form.Check
        type="checkbox"
        label="Fire Prevention and Safety Seminar"
        value={checkFpss}
        onClick={(e) => {
          setFpss(2000);
          setCheckFpss(e.target.checked);
        }}
      />
      {checkFpss ? <p>Fire Prevention: {fpss}</p> : null}
    </Form.Group>
  );
};

export default FirePreventionSafetySeminar;
