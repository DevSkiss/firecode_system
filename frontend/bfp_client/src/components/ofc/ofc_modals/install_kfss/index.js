import { useState, useEffect, useContext } from "react";
import { Row, Col, Form, Modal, Button } from "react-bootstrap";
import styles from "./index.module.css";
import OtherContext from "../../../../../context/OtherContext";

const InstallKfss = (props) => {
  const [kfss, setKfss] = useState(0);
  const [resultKfss, setResultKfss] = useState(0);
  const handleClose = props.onHide;
  const { setPayments, handleClose2 } = useContext(OtherContext);

  useEffect(() => {
    setResultKfss(kfss * 0.001);
  }, [kfss]);

  const submitKfss = () => {
    if (resultKfss != 0) {
      setPayments((payments) => [
        ...payments,
        {
          paymentName: "Installation of Kitchen Food Supression Systems",
          firecode: "628-BFP-09",
          amount: Math.round(resultKfss),
        },
      ]);
      handleClose2();
      swal("Success!", "Added Successfully", "success");
    } else {
      swal("Error Submitting", "No value found", "warning");
    }
  };

  useEffect(() => {
    setKfss(0);
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
                value={kfss}
                className={styles.textStyle}
                placeholder="Enter Estimated Value"
                onChange={(e) => setKfss(e.target.value)}
              />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <div className={styles.footer}>
            <p className={styles.textFooter}>P {Math.round(resultKfss)}</p>
            <Button
              bsPrefix
              className={styles.button}
              onClick={(e) => submitKfss()}
            >
              Confirm and Submit for Collection
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default InstallKfss;
