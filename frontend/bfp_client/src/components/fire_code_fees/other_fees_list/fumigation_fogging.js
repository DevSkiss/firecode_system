import { useState, useEffect, useContext } from "react";
import { Form } from "react-bootstrap";

const FumigationAndFogging = () => {
  //Fumigation and Fogging
  const [checkFumi, setCheckFumi] = useState(false);
  const [fumi, setFumi] = useState(0);

  return (
    <Form.Group>
      <Form.Check
        type="checkbox"
        label="Fumigation and Fogging"
        value={checkFumi}
        onClick={(e) => {
          setFumi(350);
          setCheckFumi(e.target.checked);
        }}
      />

      {checkFumi ? <p>Fogging and Fumigation: {fumi}</p> : null}
    </Form.Group>
  );
};

export default FumigationAndFogging;
