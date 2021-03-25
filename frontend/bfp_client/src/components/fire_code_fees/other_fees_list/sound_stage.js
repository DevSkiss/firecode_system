import { useState, useEffect, useContext } from "react";
import { Form } from "react-bootstrap";

const SoundStage = () => {
  //soundsStage
  const [checkSs, setCheckSs] = useState(false);
  const [ss, setSs] = useState(0);
  return (
    <Form.Group>
      <Form.Check
        type="checkbox"
        label=". Soundstage and Approved Production Facilities and Locations (mentioned in para “B” of Section 10.2.19.6 and para “C” of Section 10.2.19.6 of this RIRR)"
        value={checkSs}
        onClick={(e) => {
          setSs(2000);
          setCheckSs(e.target.checked);
        }}
      />
      {checkSs ? <p>SoundStage And Approved Facilities: {ss}</p> : null}
    </Form.Group>
  );
};
export default SoundStage;
