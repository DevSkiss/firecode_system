import { useState, useEffect, useContext } from "react";
import { Row, Col, Form, Modal, Button } from "react-bootstrap";
import OtherContext from "../../../../../context/OtherContext";
import styles from "./index.module.css";

const InstallElectric = (props) => {
  const [checkElecIns, setCheckElecIns] = useState(false);
  const [elecIns, setElecIns] = useState(0);
  const [resultElecIns, setResultElecIns] = useState(0);
  const { setPayments, handleClose2 } = useContext(OtherContext);

  useEffect(() => {
    if (elecIns > 5 && elecIns <= 50) {
      setResultElecIns(100 + (elecIns - 5) * 10);
    } else if (elecIns > 50 && elecIns <= 300) {
      setResultElecIns(550 + (elecIns - 50) * 5);
    } else if (elecIns > 300 && elecIns <= 1500) {
      setResultElecIns(1800 + (elecIns - 1800) * 5);
    } else if (elecIns > 1500 && elecIns <= 6000) {
      setResultElecIns(4800 + (elecIns - 4800) * 2.5);
    } else if (elecIns > 6000) {
      setResultElecIns(8425 + (elecIns - 8425) * 1.25);
    } else if (elecIns <= 5 && elecIns != 0) {
      setResultElecIns(100);
    } else {
      setResultElecIns(0);
    }
  }, [elecIns]);

  const handleClose = props.onHide;

  useEffect(() => {
    setResultElecIns(0);
  }, [handleClose]);

  const submitElectric = () => {
    if (resultElecIns != 0) {
      setPayments((payments) => [
        ...payments,
        {
          paymentName: "Installation of Electrical",
          firecode: "628-BFP-11",
          amount: resultElecIns,
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
        onHide={props.onHide}
        centered
        scrollable
        size="lg"
      >
        <Modal.Header closeButton className={styles.headerColor}>
          <Modal.Title className={styles.headertitle}>
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <p className={styles.textStyle}>Electrical Installation</p>
            <div className="ml-5">
              <Form.Control
                type="number"
                placeholder="Enter Number of KVA"
                onChange={(e) => setElecIns(e.target.value)}
              />
              <p>Electrical Amount Fee: {resultElecIns}</p>
            </div>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            bsPrefix
            className={styles.button}
            onClick={(e) => submitElectric()}
          >
            Confirm and Submit for Collection
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default InstallElectric;
