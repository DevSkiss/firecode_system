import { useState, useEffect, useContext } from "react";
import { Row, Col, Form, Modal, Button } from "react-bootstrap";
import styles from "./index.module.css";
import OtherContext from "../../../../../context/OtherContext";

const FireworksDisplay = (props) => {
  //Fireworkdisplay
  const [checkfd, setCheckFd] = useState(false);
  const [fd, setFD] = useState(1049);
  const { setPayments, handleClose2 } = useContext(OtherContext);

  const submitFireworks = () => {
    if (fd != 0) {
      setPayments((payments) => [
        ...payments,
        {
          paymentName: "Fireworks Display",
          firecode: "628-BFP-11",
          amount: fd,
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
            <p className={styles.textStyle}>Fireworks Display</p>
            <p>
              <strong>Fireworks Display Fee:</strong>{" "}
              <span className={styles.space}>{fd}</span>
            </p>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            bsPrefix
            className={styles.button}
            onClick={(e) => {
              setFD(1049), submitFireworks();
            }}
          >
            Confirm and Submit for Collection
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FireworksDisplay;
