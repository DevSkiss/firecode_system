import { useState, useEffect, useContext } from "react";
import { Row, Col, Form, Modal, Button } from "react-bootstrap";
import OtherContext from "../../../../../context/OtherContext"
import styles from "./index.module.css";

const CFCFsicFsec = (props) => {
  const [truecopy, setTrueCopy] = useState(350);
  const { setPayments, handleClose2 } = useContext(OtherContext);
  const submitFsicFsec = () => {
    if (truecopy != 0) {
      setPayments((payments) => [
        ...payments,
        {
          paymentName: props.title,
          firecode: "628-BFP-11",
          amount: truecopy,
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
        <Modal.Header closeButton className={styles.headercolor}>
          <Modal.Title className={styles.headertitle}>
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className={styles.textStyle}>
            Certified True Copy FSIC and others
          </p>
          <p className={styles.textStyle}>True Copy Fee: {truecopy}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            bsPrefix
            className={styles.button}
            onClick={(e) => submitFsicFsec()}
          >
            Confirm and Submit for Collection
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CFCFsicFsec;
