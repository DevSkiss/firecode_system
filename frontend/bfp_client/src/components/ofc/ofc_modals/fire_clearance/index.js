import { useState, useEffect, useContext } from "react";
import { Row, Col, Form, Modal, Button } from "react-bootstrap";
import OtherContext from "../../../../../context/OtherContext";
import styles from "./index.module.css";

const FireClearance = (props) => {
  const [fic, setFic] = useState(350);
  const { setPayments, handleClose2 } = useContext(OtherContext);

  const submitFireClearance = () => {
    if (fic != 0) {
      setPayments((payments) => [
        ...payments,
        {
          paymentName: "Fire Incident Clearance",
          firecode: "628-BFP-11",
          amount: fic,
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
        size="md"
      >
        <Modal.Header closeButton className={styles.headerColor}>
          <Modal.Title className={styles.headertitle}>
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className={styles.textStyle}>Fire Incident Clearance</p>
          <p className={styles.textStyle}>Total Fire Clearance Fee: {fic}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            bsPrefix
            className={styles.button}
            onClick={(e) => submitFireClearance()}
          >
            Confirm and Submit for Collection
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FireClearance;
