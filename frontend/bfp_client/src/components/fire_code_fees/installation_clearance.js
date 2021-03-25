import { Row, Col, Form } from "react-bootstrap";
import { useState, useEffect } from "react";

const InstallationClerance = (params) => {
  //Insallation Clearance Fee
  const [icf, setIcf] = useState(false);
  const [checkFaclia, setCheckFaclia] = useState(false);
  const [faclia, setFaclia] = useState(0);
  const [fireCodeFaclia, setFireCodeFaclia] = useState("");
  useEffect(() => {
    checkFaclia ? setFaclia(1049) : setFaclia(0);
  }, [checkFaclia]);

  const [checkEvote, setCheckEvote] = useState(false);
  const [evote, setEvote] = useState(0);
  const [resultEvote, setResultEvote] = useState(0);
  useEffect(() => {
    setResultEvote(evote * 0.001);
  }, [evote]);

  const [gases, setGases] = useState(0);
  const [checkGases, setCheckGases] = useState(false);
  const [resultGases, setResultGases] = useState(0);
  useEffect(() => {
    if (gases <= 454 && gases != 0) {
      setResultGases(280);
    } else if (gases > 454) {
      //setResultGases(Math.ceil(((gases - 454) % 100) / 100) * 100);
      setResultGases(280 + ((Math.ceil((gases - 454) / 100) * 100) / 100) * 70);
    } else {
      setResultGases(0);
    }
  }, [gases]);

  useEffect(() => {
    if (resultEvote + resultGases + faclia <= 0) {
      params.setInstall({
        amount: 0,
        firecode: "628-BFP-09",
      });
    } else {
      params.setInstall({
        amount: resultEvote + resultGases + faclia,
        firecode: "628-BFP-09",
      });
    }
    return () => {
      params.setInstall({
        amount: 0,
        firecode: "",
      });
    };
  }, [resultEvote, resultGases, faclia]);

  useEffect(() => {
    setCheckEvote(false);
    setCheckFaclia(false);
    setCheckGases(false);
    setEvote(0);
    setGases(0);
    setFaclia(0);
  }, [icf]);

  useEffect(() => {
    if (!checkFaclia) setFaclia(0);
    if (!checkEvote) setEvote(0);
    if (!checkGases) setGases(0);
  }, [checkFaclia, checkEvote, checkGases]);
  return (
    <>
      <Form.Check
        type="checkbox"
        label="Installation Clearance Fee"
        value={icf}
        onClick={(e) => setIcf(e.target.checked)}
      />
      {icf ? (
        <>
          <Row>
            <Col md={6}>
              <p>
                Installation of fire protection and warning systems, an
                Installation Clearance shall be issued upon payment of the
                amount
              </p>
            </Col>
            <Col md={6}>
              <Form.Check
                type="checkbox"
                label="Gases (LPG, CNG and other compressed Gases) in liters"
                value={checkGases}
                onClick={(e) => setCheckGases(e.target.checked)}
              />
              {checkGases ? (
                <>
                  <Form.Control
                    type="number"
                    placeholder="Amount Installation Clearance Fee"
                    value={gases}
                    onChange={(e) => setGases(e.target.value)}
                  />
                </>
              ) : null}
              <Form.Check
                type="checkbox"
                label="Flammable and combustible liquids in aboveground and underground tanks"
                value={checkFaclia}
                onClick={(e) => setCheckFaclia(e.target.checked)}
              />
              {checkFaclia ? (
                <>
                  <Form.Control type="number" value={faclia} disabled />
                </>
              ) : null}

              <Form.Check
                type="checkbox"
                label="Estimated value of the equipment, utilities, facilities to be installed in PhP"
                value={checkEvote}
                onClick={(e) => setCheckEvote(e.target.checked)}
              />
              {checkEvote ? (
                <>
                  <Form.Control
                    type="number"
                    placeholder="Estimated value to be installed"
                    value={evote}
                    onChange={(e) => setEvote(e.target.value)}
                  />
                </>
              ) : null}
            </Col>
          </Row>
        </>
      ) : null}
    </>
  );
};

export default InstallationClerance;
