import { useState, useEffect, useContext } from "react";
import { Row, Col, Form, Modal, Button } from "react-bootstrap";
import OtherContext from "../../../../../context/OtherContext";
import styles from "./index.module.css";

const StorageFcl = (props) => {
  const [sba1, setSba1] = useState(0);
  const [resultSba1, setResultSba1] = useState(0);
  useEffect(() => {
    if (sba1 >= 20 && sba1 <= 100) {
      setResultSba1(35);
    } else if (sba1 > 100 && sba1 <= 200) {
      setResultSba1(42);
    } else if (sba1 > 200 && sba1 <= 400) {
      setResultSba1(83);
    } else if (sba1 > 400 && sba1 <= 2000) {
      setResultSba1(168);
    } else if (sba1 > 2000 && sba1 <= 4000) {
      setResultSba1(252);
    } else if (sba1 > 4000 && sba1 <= 6000) {
      setResultSba1(350);
    } else if (sba1 > 6000 && sba1 <= 8000) {
      setResultSba1(420);
    } else if (sba1 > 8000 && sba1 <= 10000) {
      setResultSba1(504);
    } else if (sba1 > 10000 && sba1 <= 12000) {
      setResultSba1(672);
    } else if (sba1 > 12000 && sba1 <= 14000) {
      setResultSba1(839);
    } else if (sba1 > 14000 && sba1 <= 16000) {
      setResultSba1(1007);
    } else if (sba1 > 16000 && sba1 <= 32000) {
      setResultSba1(1259);
    } else if (sba1 > 32000 && sba1 <= 40000) {
      setResultSba1(1678);
    } else if (sba1 > 40000 && sba1 <= 200000) {
      setResultSba1(2517);
    } else if (sba1 > 200000 && sba1 <= 800000) {
      setResultSba1(3775);
    } else if (sba1 > 800000 && sba1 <= 2000000) {
      setResultSba1(5033);
    } else if (sba1 > 2000000 && sba1 <= 6000000) {
      setResultSba1(6711);
    } else if (sba1 > 6000000 && sba1 <= 8000000) {
      setResultSba1(8388);
    } else if (sba1 > 8000000) {
      setResultSba1(20000 + Math.ceil((sba1 - 8000000) / 400) * 4);
    } else {
      setResultSba1(0);
    }

    return () => {
      setResultSba1(0);
    };
  }, [sba1]);

  const [sba2, setSba2] = useState(0);
  const [resultSba2, setResultSba2] = useState(0);
  useEffect(() => {
    if (sba2 >= 20 && sba2 <= 100) {
      setResultSba2(32);
    } else if (sba2 > 100 && sba2 <= 200) {
      setResultSba2(42);
    } else if (sba2 > 200 && sba2 <= 400) {
      setResultSba2(63);
    } else if (sba2 > 400 && sba2 <= 2000) {
      setResultSba2(105);
    } else if (sba2 > 2000 && sba2 <= 4000) {
      setResultSba2(168);
    } else if (sba2 > 4000 && sba2 <= 20000) {
      setResultSba2(350);
    } else if (sba2 > 20000 && sba2 <= 100000) {
      setResultSba2(839);
    } else if (sba2 > 100000 && sba2 <= 200000) {
      setResultSba2(1678);
    } else if (sba2 > 200000) {
      setResultSba2(2097);
    } else {
      setResultSba2(0);
    }

    return () => {
      setResultSba2(0);
    };
  }, [sba2]);

  const [sba3, setSba3] = useState(0);
  const [resultSba3, setResultSba3] = useState(0);
  useEffect(() => {
    if (sba3 >= 20 && sba3 <= 100) {
      setResultSba3(18);
    } else if (sba3 > 100 && sba3 <= 200) {
      setResultSba3(28);
    } else if (sba3 > 200 && sba3 <= 400) {
      setResultSba3(42);
    } else if (sba3 > 400 && sba3 <= 4000) {
      setResultSba3(105);
    } else if (sba3 > 4000 && sba3 <= 20000) {
      setResultSba3(315);
    } else if (sba3 > 20000 && sba3 <= 40000) {
      setResultSba3(420);
    } else if (sba3 > 40000 && sba3 <= 200000) {
      setResultSba3(630);
    } else if (sba3 > 200000 && sba3 <= 400000) {
      setResultSba3(1049);
    } else if (sba3 > 400000 && sba3 <= 2000000) {
      setResultSba3(1678);
    } else if (sba3 > 2000000 && sba3 <= 3600000) {
      setResultSba3(1748);
    } else if (sba3 > 3600000) {
      setResultSba3(2098);
    } else {
      setResultSba3(0);
    }

    return () => {
      setResultSba3(0);
    };
  }, [sba3]);

  const [sba4, setSba4] = useState(0);
  const [resultSba4, setResultSba4] = useState(0);
  useEffect(() => {
    if (sba4 >= 20 && sba4 <= 100) {
      setResultSba4(18);
    } else if (sba4 > 100 && sba4 <= 200) {
      setResultSba4(28);
    } else if (sba4 > 200 && sba4 <= 400) {
      setResultSba4(42);
    } else if (sba4 > 400 && sba4 <= 2000) {
      setResultSba4(84);
    } else if (sba4 > 2000 && sba4 <= 4000) {
      setResultSba4(105);
    } else if (sba4 > 4000 && sba4 <= 80000) {
      setResultSba4(315);
    } else if (sba4 > 80000) {
      setResultSba4(630);
    } else {
      setResultSba4(0);
    }

    return () => {
      setResultSba4(0);
    };
  }, [sba4]);

  const [totalFee, setTotalFee] = useState(0);
  useEffect(() => {
    setTotalFee(resultSba1 + resultSba2 + resultSba3 + resultSba4);
  }, [resultSba1, resultSba2, resultSba3, resultSba4]);

  const { setPayments, handleClose2 } = useContext(OtherContext);
  const submitStorage = () => {
    if (totalFee != 0) {
      setPayments((payments) => [
        ...payments,
        {
          paymentName: props.title,
          firecode: "628-BFP-07",
          amount: totalFee,
        },
      ]);
      handleClose2();
      swal("Success!", "Added Successfully", "success");
    } else {
      swal("Error Submitting", "No value found", "warning");
    }
  };

  const handleClose = props.onHide;
  useEffect(() => {
    setResultSba1(0);
    setResultSba2(0);
    setResultSba3(0);
    setResultSba4(0);
    setTotalFee(0);
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
          <Row>
            <Col>
              <strong>
                For flammable liquids having flashpoint of -6.67 C or below,
                such as gasoline, ether, carbon bisolphide, naptha, benzol
                (benzene), collodion, aflodin and acetone.
              </strong>
            </Col>
            <Col>
              <Form.Control
                type="number"
                placeholder="Enter value in liters"
                onChange={(e) => setSba1(e.target.value)}
              />
              <p>Storage Fee Amount: {Math.round(resultSba1)}.00</p>
            </Col>
          </Row>
          <hr></hr>
          <Row>
            <Col>
              <strong>
                For flammable liquids having flashpoint of above -6.67 C and
                below 22.8 C such as alcohol, amyl, toluol, ethyl, acetate and
                like.
              </strong>
            </Col>
            <Col>
              <Form.Control
                type="number"
                placeholder="Enter value in liters"
                onChange={(e) => setSba2(e.target.value)}
              />
              <p>Storage Fee Amount: {Math.round(resultSba2)}.00</p>
            </Col>
          </Row>
          <hr></hr>
          <Row>
            <Col>
              <strong>
                For liquids having flashpoint of 22.8 oC to 93.3 oC, such as
                kerosene, turpentine, thinner, prepared paints, varnish, diesel
                oil, fuel oil, kerosene, cleansing solvent, polishing liquids
                and similar
              </strong>
            </Col>
            <Col>
              <Form.Control
                type="number"
                placeholder="Enter value in liters"
                onChange={(e) => setSba3(e.target.value)}
              />
              <p>Storage Fee Amount: {Math.round(resultSba3)}.00</p>
            </Col>
          </Row>
          <hr></hr>
          <Row>
            <Col>
              <strong>
                For combustible liquids having flash point greater than 93.3 oC
                that is subject to spontaneous ignition or is artificially
                heated to a temperature equal to or higher than its flash point,
                such as crude oil, petroleum oil and others.
              </strong>
            </Col>
            <Col>
              <Form.Control
                type="number"
                placeholder="Enter value in kgs"
                onChange={(e) => setSba4(e.target.value)}
              />

              <p>Storage Fee Amount: {Math.round(resultSba4)}.00</p>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <div className={styles.customfooter}>
            <p className={styles.textStyleFooter}>
              Total Storage Fee: P {totalFee}.00
            </p>
            <Button
              bsPrefix
              className={styles.button}
              onClick={(e) => submitStorage()}
            >
              Confirm and Submit for Collection
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default StorageFcl;
