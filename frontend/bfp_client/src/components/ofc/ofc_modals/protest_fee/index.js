import { useState, useEffect, useContext } from "react";
import { Row, Col, Form, Modal, Button } from "react-bootstrap";
import OtherContext from "../../../../../context/OtherContext";
import styles from "./index.module.css";

const Protest = (props) => {
  const [protestFee, setProtestFee] = useState(500);
  const { setPayments, handleClose2 } = useContext(OtherContext);

  const submitProtestFee = () => {
    if (protestFee != 0) {
      setPayments((payments) => [
        ...payments,
        {
          paymentName: "Protest Fee mentioned under Rule 14 of this RIRR",
          firecode: "628-BFP-11",
          amount: protestFee,
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
            <p className={styles.textStyle}>Protest</p>
            <p className={styles.textStyle}>
              Total Protest Fee: {protestFee}
            </p>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            bsPrefix
            className={styles.button}
            onClick={() => submitProtestFee()}
          >
            Confirm and Submit for Collection
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Protest;
