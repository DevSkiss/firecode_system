import { useState, useEffect, useContext } from "react";
import { Form } from "react-bootstrap";

const FsecFilingFee = (params) => {
  const [checkFiling, setCheckFiling] = useState(false);
  const [filingFee, setFilingFee] = useState(0);

  useEffect(() => {
    params.setFilingFee(filingFee);
    params.setFireCodeOtherFees("628-BFP-11"); 

    return () => {
      params.setFilingFee(0);
    };
  }, [filingFee]);

  useEffect(() => {
    if (checkFiling === false) setFilingFee(0);
  }, [checkFiling]);
  return (
    <Form.Group>
      <Form.Check
        type="checkbox"
        label="Filing Fee for Fire Safety Evaluation Clearance"
        value={checkFiling}
        onClick={(e) => {
          setFilingFee(200);
          setCheckFiling(e.target.checked);
        }}
      />
      {checkFiling ? <p>Filing Fee: {filingFee}</p> : null}
    </Form.Group>
  );
};

export default FsecFilingFee;
