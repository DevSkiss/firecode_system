import { useState, useEffect, useContext } from "react";
import { Row, Col, Form, Modal, Button } from "react-bootstrap";
import styles from "./index.module.css";
import OtherContext from "../../../../../context/OtherContext";

const InstallAfss = (props) => {
  const [afss, setAfss] = useState(0);
  const [resultAfss, setResultAfss] = useState(0);
  const handleClose = props.onHide;
  const { setPayments, handleClose2 } = useContext(OtherContext);

  useEffect(() => {
    setResultAfss(afss * 0.001);
  }, [afss]);

  const submitAfss = () => {
    if (resultAfss != 0) {
      setPayments((payments) => [
        ...payments,
        {
          paymentName: "Install AFSS",
          firecode: "628-BFP-09",
          amount: Math.round(resultAfss),
        },
      ]);
      handleClose2();
      swal("Success!", "Added Successfully", "success");
    } else {
      swal("Error Submitting", "No value found", "warning");
    }
  };

  useEffect(() => {
    setAfss(0);
  }, [handleClose]);
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
          <p className={styles.textStyle}>
            Equipment, utilities and facilities mentioned in Section 10.2.7.1 to
            Section 10.2.7.5 of this RIRR, and fire protection and warning
            system – One-tenth of one per centum (0.10%) of the verified
            estimated value of the equipment, utilities, facilities to be
            installed.
          </p>

          <Row className="justify-content-center">
            <Col md={6}>
              <Form.Control
                type="number"
                value={afss}
                className={styles.textStyle}
                placeholder="Enter Estimated Value"
                onChange={(e) => setAfss(e.target.value)}
              />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <div className={styles.footer}>
            <p className={styles.textFooter}>P {Math.round(resultAfss)}</p>
            <Button
              bsPrefix
              className={styles.button}
              onClick={(e) => submitAfss()}
            >
              Confirm and Submit for Collection
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default InstallAfss;
