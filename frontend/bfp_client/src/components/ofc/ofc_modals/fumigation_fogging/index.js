import { useState, useContext } from "react";
import { Row, Col, Form, Modal, Button } from "react-bootstrap";
import OtherContext from "../../../../../context/OtherContext";
import styles from "./index.module.css";

const FumigationFogginng = (props) => {
  const [fumi, setFumi] = useState(350);
  const { setPayments, handleClose2 } = useContext(OtherContext);
  const submitFumigation = () => {
    if (fumi != 0) {
      setPayments((payments) => [
        ...payments,
        {
          paymentName: props.title,
          firecode: "628-BFP-11",
          amount: fumi,
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
          <p className={styles.textStyle}>Fumigation and Fogging</p>
          <p className={styles.textStyle}>Total Fee: {fumi}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            bsPrefix
            className={styles.button}
            onClick={(e) => submitFumigation()}
          >
            Confirm and Submit for Collection
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FumigationFogginng;
