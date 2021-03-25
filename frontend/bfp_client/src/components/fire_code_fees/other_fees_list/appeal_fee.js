import { useState, useEffect, useContext } from "react";
import { Form } from "react-bootstrap";

const AppealFee = () => {
  //appeal Fees
  const [checkAppealFees, setCheckAppealFees] = useState(false);
  const [appealFee, setAppealFee] = useState(0);

  return (
    <Form.Group>
      <Form.Check
        type="checkbox"
        label="Appeal Fee mentioned under Rule 14 of this RIRR"
        value={checkAppealFees}
        onClick={(e) => {
          setAppealFee(1000);
          setCheckAppealFees(e.target.checked);
        }}
      />
      {checkAppealFees ? <p>Appeal Fee: {appealFee}</p> : null}
    </Form.Group>
  );
};

export default AppealFee;
