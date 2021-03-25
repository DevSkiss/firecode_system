import { useState, useEffect, useContext } from "react";
import { Row, Col, Form, Modal, Button } from "react-bootstrap";
import OtherContext from "../../../../../context/OtherContext";
import styles from "./index.module.css";

const FireDrill = (props) => {
  const [fireDrill, setFireDrill] = useState(1000);
  const { setPayments, handleClose2 } = useContext(OtherContext);

  const submitFireDrill = () => {
    if (fireDrill != 0) {
      setPayments((payments) => [
        ...payments,
        {
          paymentName: "Fire Drill",
          firecode: "628-BFP-11",
          amount: fireDrill,
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
          <Form.Group>
            <p className={styles.textStyle}>Fire Drill</p>
            <p className={styles.textStyle}>
              Total Fire Drill Fee: {fireDrill}
            </p>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            bsPrefix
            className={styles.button}
            onClick={(e) => submitFireDrill()}
          >
            Confirm and Submit for Collection
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FireDrill;
