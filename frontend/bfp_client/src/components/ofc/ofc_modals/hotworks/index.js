import { useState, useEffect, useContext } from "react";
import { Row, Col, Form, Modal, Button } from "react-bootstrap";
import styles from "./index.module.css";
import OtherContext from "../../../../../context/OtherContext";
import swal from "sweetalert";

const Hotworks = (props) => {
  //Weilding and Hotworks
  const [amountHotworks, setAmountHotworks] = useState(0);
  const handleClose = props.onHide;

  const { setPayments, handleClose2 } = useContext(OtherContext);

  useEffect(() => {
    setAmountHotworks(0);
  }, [handleClose]);

  const submitHotworks = () => {
    if (amountHotworks != 0) {
      setPayments((payments) => [
        ...payments,
        {
          paymentName: "Weilding and Hotworks",
          firecode: "628-BFP-11",
          amount: amountHotworks,
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
        <Modal.Body className="custom-form">
          <Form>
            <Form.Group>
              <p className={styles.textStyle}>
                Other Fee: Weilding and other Hotworks
              </p>
              <div className="ml-5">
                <Form.Check
                  type="radio"
                  label="1-5 welding/oxy-acytylene"
                  name="hotworks"
                  id="oxyId"
                  className={styles.textStyle}
                  onClick={() => setAmountHotworks(500)}
                />
                <Form.Check
                  type="radio"
                  label="6-10 weilding/cutting machine"
                  name="hotworks"
                  id="tenCuttingId"
                  className={styles.textStyle}
                  onClick={() => setAmountHotworks(1000)}
                />
                <Form.Check
                  type="radio"
                  label="More than 10 welding/cutting machine"
                  name="hotworks"
                  id="moreTenCuttingId"
                  className={styles.textStyle}
                  onClick={() => setAmountHotworks(1500)}
                />
                <p className={styles.space}>
                  Amount Hotworks: Php {amountHotworks}.00
                </p>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            bsPrefix
            className={styles.button}
            onClick={(e) => submitHotworks()}
          >
            Confirm and Submit for Collection
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Hotworks;
