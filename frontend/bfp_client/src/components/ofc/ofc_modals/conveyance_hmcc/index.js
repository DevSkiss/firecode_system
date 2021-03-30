import { useState, useEffect, useContext } from "react";
import { Row, Col, Form, Modal, Button } from "react-bootstrap";
import OtherContext from "../../../../../context/OtherContext";
import styles from "./index.module.css";

const ConveyanceHmcc = (props) => {
  const [checkCcf, setCheckCcf] = useState(false);
  const [checkA1, setCheckA1] = useState(false);
  const [checkA2, setCheckA2] = useState(false);
  const [checkA3, setCheckA3] = useState(false);
  const [checkA4, setCheckA4] = useState(false);
  const [checkA5, setCheckA5] = useState(false);

  //flammable or combustible liquids
  const [carryFcl, setCarryFcl] = useState(0);
  const [resultCarryFcl, setResultCarryFcl] = useState(0);
  useEffect(() => {
    if (carryFcl <= 2000 && carryFcl != 0) {
      setResultCarryFcl(1748);
    } else if (carryFcl > 2000) {
      setResultCarryFcl(
        1748 + Math.ceil((Math.ceil((carryFcl - 2000) / 400) * 100) / 100) * 78
      );
    } else {
      setResultCarryFcl(0);
    }

    return () => {
      setResultCarryFcl(0);
    };
  }, [carryFcl]);

  //Hazardoes Chemicals Gases
  const [carryHCG, setCarryHCG] = useState(0);
  const [resultCarryHCG, setResultCarryHCG] = useState(0);
  useEffect(() => {
    if (carryHCG <= 500 && carryHCG > 0) {
      setResultCarryHCG(1049);
    } else if (carryHCG > 500) {
      setResultCarryHCG(
        1049 + Math.ceil((Math.ceil((carryHCG - 500) / 100) * 100) / 100) * 70
      );
    } else {
      setResultCarryHCG(0);
    }

    return () => {
      setResultCarryHCG(0);
    };
  }, [carryHCG]);

  //unloadinng Hazardous Chemical Gases
  const [ulLiquidHCG, setUlLiquidHCG] = useState(0);
  const [ulKgsHCG, setUlKgsHCG] = useState(0);
  const [resultUlLiquidHCG, setResultUlLiquidHCG] = useState(0);
  const [resultUlKgsHCG, setResultUlKgsHCH] = useState(0);
  const [checkLiters, setCheckLiters] = useState(true);
  const [checkKgs, setCheckKgs] = useState(false);

  useEffect(() => {
    if (ulLiquidHCG <= 2000 && ulLiquidHCG > 0) {
      setResultUlLiquidHCG(700);
    } else if (ulLiquidHCG > 2000 && ulLiquidHCG <= 40000) {
      setResultUlLiquidHCG(
        700 +
          Math.ceil((Math.ceil((ulLiquidHCG - 2000) / 400) * 100) / 100) * 350
      );
    } else if (ulLiquidHCG > 40000) {
      setResultUlLiquidHCG(
       33950 +  Math.ceil((Math.ceil((ulLiquidHCG - 40000) / 4000) * 100) / 100) * 35
      );
            
      
    } else {
      setResultUlLiquidHCG(0);
    }
  }, [ulLiquidHCG]);

  useEffect(() => {
    if (ulKgsHCG <= 2000 && ulKgsHCG > 0) {
      setResultUlKgsHCH(700);
    } else if (ulKgsHCG > 2000 && ulKgsHCG <= 10000) {
      setResultUlKgsHCH(
        700 + Math.ceil((Math.ceil((ulKgsHCG - 2000) / 100) * 100) / 100) * 350
      );
    } else if (ulKgsHCG > 10000) {
      setResultUlKgsHCH(
          28700 + Math.ceil((Math.ceil((ulKgsHCG - 10000) / 100) * 100) / 1000) * 35
      );
    } else {
      setResultUlKgsHCH(0);
    }
  }, [ulKgsHCG]);

  const [fcl, setFcl] = useState(0);
  const [resultFcl, setResultFct] = useState(0);
  useEffect(() => {
    if (fcl <= 2000 && fcl > 0) {
      setResultFct(700);
    } else if (fcl > 2000 && fcl <= 400000) {
      setResultFct(
        700 + Math.ceil((Math.ceil((fcl - 2000) / 400) * 100) / 100) * 175
      );
    } else if (fcl > 400000) {
      setResultFct(
        700 +
          Math.ceil((Math.ceil((fcl - 2000) / 400) * 100) / 100) * 175 +
          Math.ceil((Math.ceil((fcl - 400000) / 400) * 100) / 1000) * 70
      );
    } else {
      setResultFct(0);
    }
  }, [fcl]);

  const [cfcl, setCfcl] = useState(0);
  const [resultCfcl, setResultCfcl] = useState(0);

  useEffect(() => {
    if (cfcl <= 2000 && cfcl > 0) {
      setResultCfcl(700);
    } else if (cfcl > 2000) {
      setResultCfcl(
        700 + Math.ceil((Math.ceil((cfcl - 2000) / 400) * 100) / 100) * 70
      );
    } else {
      setResultCfcl(0);
    }
  }, [cfcl]);

  const handleClose = props.onHide;
  useEffect(() => {
    setResultUlKgsHCH(0);
    setResultUlLiquidHCG(0);
    setResultCarryFcl(0);
    setResultCfcl(0);
    setResultFct(0);
    setResultCarryHCG(0);
    setCheckA1(false);
    setCheckA2(false);
    setCheckA3(false);
    setCheckA4(false);
    setCheckA5(false);
  }, [handleClose]);

  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(
      resultUlKgsHCG +
        resultUlLiquidHCG +
        resultCarryFcl +
        resultCfcl +
        resultFcl +
        resultCarryHCG
    );
  }, [
    resultUlKgsHCG,
    resultUlLiquidHCG,
    resultCarryHCG,
    resultCarryFcl,
    resultCfcl,
    resultFcl,
  ]);

  const { setPayments, handleClose2 } = useContext(OtherContext);
  const submitConveyance = () => {
    if (total != 0) {
      setPayments((payments) => [
        ...payments,
        {
          paymentName: props.title,
          firecode: "628-BFP-08",
          amount: total,
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
        <Modal.Body>
          <Form.Group>
            <Row>
              <Col md={4}>
                <p>
                  <strong>Conveyance Clearance</strong> shall be issued to
                  vehicles transporting any explosives, flammable liquids and
                  combustible materials over streets, water, or through
                  pipelines, to load and unload such explosives, flammable
                  liquids or combustible materials in or from any vessel, boat,
                  craft, or railway upon payment of fee based on their capacity
                  by the owner of vehicles transporting flammable or combustible
                  materials during his/her application for FSIC for business
                  operation at his/her principal place of business, on the rate
                  prescribed beside:
                </p>
              </Col>
              <Col md={4}>
                <Form.Check
                  onClick={(e) => setCheckA1(e.target.checked)}
                  label="For each cargo truck, motor vehicle, tank truck, tank trailer, and tank semi-trailer carrying flammable or combustible liquids:"
                  type="checkbox"
                />
              </Col>
              {checkA1 ? (
                <>
                  <Col md={4}>
                    <Form.Control
                      type="text"
                      placeholder="Enter No of liters"
                      onChange={(e) => setCarryFcl(e.target.value)}
                    />
                    <p>Carrying FCL: {resultCarryFcl}</p>
                  </Col>
                </>
              ) : null}

              <Col md={{ span: 4, offset: 4 }}>
                <Form.Check
                  onClick={(e) => setCheckA2(e.target.checked)}
                  label="For each cargo truck, or motor vehicle, tank truck, tank trailer, and tank semi-trailer carrying explosives and/or combustible materials, including hazardous chemicals and gases:"
                  type="checkbox"
                />
              </Col>
              {checkA2 ? (
                <>
                  <Col md={4}>
                    <Form.Control
                      type="text"
                      placeholder="Enter No of Kgs."
                      onChange={(e) => setCarryHCG(e.target.value)}
                    />
                    <p>Carry HCG: {resultCarryHCG}</p>
                  </Col>
                </>
              ) : null}

              <Col md={{ span: 4, offset: 4 }}>
                <Form.Check
                  onClick={(e) => setCheckA3(e.target.checked)}
                  label="For loading and unloading to or from a boat, vessel, craft, or railway tank cars and the transfer of packages of containers of explosives, flammable liquids or combustible materials, including hazardous chemicals and gases at terminals or piers: "
                  type="checkbox"
                />
              </Col>
              {checkA3 ? (
                <>
                  <Col md={4}>
                    <Form.Check
                      type="radio"
                      label="Liters"
                      value={checkLiters}
                      onClick={(e) => {
                        setCheckLiters(e.target.checked);
                        setCheckKgs(false);
                      }}
                      name="unloadingradio"
                    />

                    {checkLiters ? (
                      <Form.Control
                        type="text"
                        placeholder="Enter No of Liters"
                        onChange={(e) => setUlLiquidHCG(e.target.value)}
                      />
                    ) : null}

                    <Form.Check
                      type="radio"
                      label="Kilograms"
                      value={checkKgs}
                      onClick={(e) => {
                        setCheckKgs(e.target.checked);
                        setCheckLiters(false);
                      }}
                      name="unloadingradio"
                    />
                    {checkKgs ? (
                      <>
                        <Form.Control
                          type="text"
                          placeholder="Enter No of Kgs."
                          onChange={(e) => setUlKgsHCG(e.target.value)}
                        />
                      </>
                    ) : null}

                    <p>
                      Unloading HCG Fee:
                      <span>
                        {resultUlKgsHCG != 0
                          ? resultUlKgsHCG
                          : resultUlLiquidHCG}
                      </span>
                    </p>
                  </Col>
                </>
              ) : null}

              <Col md={{ span: 4, offset: 4 }}>
                <Form.Check
                  onClick={(e) => setCheckA4(e.target.checked)}
                  label="For transfer of flammable or combustible liquids to shore tanks at terminal, including the discharge of flammable or combustible cargo to bulk lighters undertaken at bay, and its subsequent transportation by water to petroleum wharves, or transfer by bulk lighters from said terminals to vessel at bay:"
                  type="checkbox"
                />
              </Col>
              {checkA4 ? (
                <>
                  <Col md={4}>
                    <Form.Control
                      type="text"
                      placeholder="Enter No of liters."
                      onChange={(e) => setFcl(e.target.value)}
                    />
                    <p>Total Transfer FCL: {resultFcl}</p>
                  </Col>
                </>
              ) : null}

              <Col md={{ span: 4, offset: 4 }}>
                <Form.Check
                  onClick={(e) => setCheckA5(e.target.checked)}
                  label="For transfer or conveyance of flammable or combustible liquids or gas in bulk done by lighters or through pipelines: "
                  type="checkbox"
                />
              </Col>
              {checkA5 ? (
                <>
                  <Col md={4}>
                    <Form.Control
                      type="text"
                      placeholder="Enter No of liters."
                      onChange={(e) => setCfcl(e.target.value)}
                    />
                    <p>Transfer or Conveyance Fee: {resultCfcl}</p>
                  </Col>
                </>
              ) : null}
            </Row>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <div className={styles.customFooter}>
            <p className={styles.textStyleFooter}>
              Total Conveyance Fee: P {Math.round(total)}
            </p>
            <Button
              bsPrefix
              className={styles.button}
              onClick={(e) => submitConveyance()}
            >
              Confirm and Submit for Collection
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConveyanceHmcc;
