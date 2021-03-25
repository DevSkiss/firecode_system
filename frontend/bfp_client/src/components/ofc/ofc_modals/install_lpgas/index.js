import { useState, useEffect, useContext } from "react";
import { Row, Col, Form, Modal, Button } from "react-bootstrap";
import OtherContext from "../../../../../context/OtherContext";
import styles from "./index.module.css";

const InstallLpgas = (props) => {
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

  const [totalFee, setTotalFee] = useState(0);

  useEffect(() => {
    if (resultEvote + resultGases + faclia <= 0) {
      setTotalFee(0);
    } else {
      setTotalFee(resultEvote + resultGases + faclia);
    }
    return () => {
      setTotalFee(0);
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

  const handleClose = props.onHide;
  useEffect(() => {
    setTotalFee(0);
    setEvote(0);
    setGases(0);
    setFaclia(0);
    setCheckEvote(false);
    setCheckGases(false);
    setCheckFaclia(false);
  }, [handleClose]);

  const { setPayments, handleClose2 } = useContext(OtherContext);

  const submitLpg = () => {
    if (totalFee != 0) {
      setPayments((payments) => [
        ...payments,
        {
          paymentName: "Installation of LPGGAS System",
          firecode: "628-BFP-09",
          amount: Math.round(totalFee),
        },
      ]);
      handleClose2();
      swal("Success!", "Added Successfully", "success");
    } else {
      swal("Error Submitting", "No value found", "warning");
    }
  };

  return (
    <>
      <Modal
        show={props.show}
        onHide={handleClose}
        centered
        scrollable
        size="xl"
      >
        <Modal.Header closeButton className={styles.headerColor}>
          <Modal.Title className={styles.headertitle}>
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
          <p className={styles.space}>Total Fee: {Math.round(totalFee)}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            bsPrefix
            className={styles.button}
            onClick={(e) => submitLpg()}
          >
            Confirm and Submit for Collection
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default InstallLpgas;
