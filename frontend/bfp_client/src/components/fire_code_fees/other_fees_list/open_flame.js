import { useState, useEffect, useContext } from "react";
import { Form } from "react-bootstrap";

const OpenFlame = () => {
  //Open Flame
  const [checkOf, setCheckOf] = useState(false);
  const [openFlame, setOpenFlamse] = useState(0);

  return (
    <Form.Group>
      <Form.Check
        type="checkbox"
        label="Open Flame"
        value={checkOf}
        onClick={(e) => {
          setOpenFlamse(525);
          setCheckOf(e.target.checked);
        }}
      />
      {checkOf ? <p>Open Flame: {openFlame}</p> : null}
    </Form.Group>
  );
};

export default OpemFlame;
