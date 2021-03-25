import { useState, useEffect, useContext } from "react";
import { Form } from "react-bootstrap";

const CertTrueCopy = () => {
  const [checkTrueCopy, setCheckTrueCopy] = useState(false);
  const [truecopy, setTrueCopy] = useState(0);
  return (
    <Form.Group>
      <Form.Check
        type="checkbox"
        label="Certified True Copy FSIC and others"
        value={checkTrueCopy}
        onClick={(e) => {
          setTrueCopy(350);
          setCheckTrueCopy(e.target.checked);
        }}
      />
      {checkTrueCopy ? <p>True Copy Fee: {truecopy}</p> : null}
    </Form.Group>
  );
};

export default CertTrueCopy;
