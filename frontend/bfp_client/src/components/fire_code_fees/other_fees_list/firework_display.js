import { useState, useEffect, useContext } from "react";
import { Form } from "react-bootstrap";

const FireworkDisplay = () => {
  //Fireworkdisplay
  const [checkfd, setCheckFd] = useState(false);
  const [fd, setFD] = useState(0);
  return (
    <Form.Group>
      <Form.Check
        type="checkbox"
        label="Fireworks Display"
        value={checkfd}
        onClick={(e) => {
          setFD(1049);
          setCheckFd(e.target.checked);
        }}
      />
      {checkfd ? <p>Fireworks Display Fee: {fd}</p> : null}
    </Form.Group>
  );
};

export default FireworkDisplay;
