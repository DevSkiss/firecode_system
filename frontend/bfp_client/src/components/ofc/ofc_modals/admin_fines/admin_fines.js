import { Row, Col, Form, Modal, Button } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import OtherContext from "../../../../../context/OtherContext";
import styles from "./index.module.css";

const AdminFines = (props) => {
  const [checkA1, setCheckA1] = useState(false);
  const [checkA2, setCheckA2] = useState(false);
  const [checkA3, setCheckA3] = useState(false);
  const [checkA4, setCheckA4] = useState(false);
  const [checkA5, setCheckA5] = useState(false);
  const [checkA6, setCheckA6] = useState(false);
  const [checkA7, setCheckA7] = useState(false);
  const [checkA8, setCheckA8] = useState(false);
  const [checkA8v2, setCheckA8v2] = useState(false);
  const [checkA9, setCheckA9] = useState(false);
  const [checkA10, setCheckA10] = useState(false);
  const [checkA11, setCheckA11] = useState(false);
  const [checkA12, setCheckA12] = useState(false);
  const handleClose = () => {
    props.onHide;
  };
  const [defaultFines, setDefaultFines] = useState(0);
  const [checkCnp, setCheckCnp] = useState(false);
  const [cnp, setCnp] = useState(0);
  const [resultCnp, setResultCnp] = useState(0);
  const { setPayments, handleClose2 } = useContext(OtherContext);
  const [total, setTotal] = useState(0);


  //second set
  const [wcah, setWcah] = useState(0);
  const [ibad, setIbad] = useState(0);
  const [wd, setWd] = useState(0);
  const [pfbe, setPfbe] = useState(0);
  const [saf, setSaf] = useState(0);
  const [mppu, setMppu] = useState(0);
  const [rdse, setRdse] = useState(0);
  const [smho, setSmho] = useState(0);
  const [a4, setA4] = useState(0);
  const [b4, setB4] = useState(0);
  const [c4, setC4] = useState(0);
  const [d4, setD4] = useState(0);
  const [e4, setE4] = useState(0);
  const [f4, setF4] = useState(0);
  const [g4, setG4] = useState(0);
  const [h4, setH4] = useState(0);
  const [i4, setI4] = useState(0);
  const [j4, setJ4] = useState(0);
  const [k4, setK4] = useState(0);
  const [a5, setA5] = useState(0);
  const [b5, setB5] = useState(0);
  const [c5, setC5] = useState(0);
  const [d5, setD5] = useState(0);
  const [e5, setE5] = useState(0);
  const [f5, setF5] = useState(0);
  const [g5, setG5] = useState(0);
  const [h5, setH5] = useState(0);
  const [i5, setI5] = useState(0);
  const [j5, setJ5] = useState(0);
  const [k5, setK5] = useState(0);
  const [l5, setL5] = useState(0);
  const [m5, setM5] = useState(0);
  const [fpe, setFpe] = useState(0);
  const [fme, setFme] = useState(0);
  const [a8, setA8] = useState(0);
  const [ab8, setAb8] = useState(0);
  const [resultAb8, setResultAb8] = useState(0);
  useEffect(() => {
    setResultAb8(ab8 * 0.5);

    return () => {
      setResultAb8(0);
    };
  }, [ab8]);
  const [bb8, setBb8] = useState(0);
  const [resultBb8, setResultBb8] = useState(0);
  useEffect(() => {
    setResultBb8(bb8 * 1);

    return () => {
      setResultBb8(0);
    };
  }, [bb8]);
  const [c8, setC8] = useState(0);
  const [d8, setD8] = useState(0);
  const [a9, setA9] = useState(0);
  const [a10, setA10] = useState(0);
  const [a11, setA11] = useState(0);
  const [a12, setA12] = useState(0);



  useEffect(() => {
    if (cnp > 3.125) {
      setResultCnp(8885);
    } else {
      setResultCnp(cnp * 2843.2);
    }

    return () => {
      setResultCnp(0);
    };
  }, [cnp]);

  const [cf, setCf] = useState(0);
  const [resultCf, setResultCf] = useState(0);
  const [checkCf, setCheckCf] = useState(false);
  useEffect(() => {
    if (cf > 10) {
      setResultCf(28432);
    } else {
      setResultCf(cf * 2843.2);
    }

    return () => {
      setResultCf;
    };
  }, [cf]);

  const [cm, setCm] = useState(0);
  const [resultCm, setResultCm] = useState(0);
  useEffect(() => {
    if (cm > 10) {
      setResultCm(28432);
    } else {
      setResultCm(cm * 2843.2);
    }

    return () => {
      setResultCm;
    };
  }, [cm]);

  const [facl, setFacl] = useState(0);
  const [resultFacl, setResultFacl] = useState(0);
  useEffect(() => {
    if (facl > 17.5858) {
      setResultFacl(50000);
    } else {
      setResultFacl(facl * 2843.2);
    }

    return () => {
      setResultFacl(0);
    };
  }, [facl]);

  const [fpvs, setFpvs] = useState(0);
  const [resultFpvs, setResultFpvs] = useState(0);
  useEffect(() => {
    if (fpvs > 6.25) {
      setResultFpvs(17770);
    } else {
      setResultFpvs(fpvs * 2843.2);
    }

    return () => {
      setResultFpvs(0);
    };
  }, [fpvs]);

  const [hpow, setHpow] = useState(0);
  const [resultHpow, setResultHpow] = useState(0);
  useEffect(() => {
    if (hpow > 87.93) {
      setResultHpow(50000);
    } else {
      setResultHpow(hpow * 568.64);
    }

    return () => {
      setResultHpow(0);
    };
  }, [hpow]);

  const [mmia, setMmia] = useState(0);
  const [resultMmia, setResultMmia] = useState(0);
  useEffect(() => {
    if (mmia > 17.5858) {
      setResultMmia(50000);
    } else {
      setResultMmia(mmia * 2843.2);
    }

    return () => {
      setResultMmia(0);
    };
  }, [mmia]);

  const [clom, setClom] = useState(0);
  const [resultClom, setResultClom] = useState(0);
  useEffect(() => {
    if (clom > 17.5858) {
      setResultClom(50000);
    } else {
      setResultClom(clom * 2843.2);
    }

    return () => {
      setResultClom(0);
    };
  }, [clom]);

  const [baea, setBaea] = useState(0);
  const [resultBaea, setResultBaea] = useState(0);
  useEffect(() => {
    if (baea > 3.5171) {
      setResultBaea(50000);
    } else {
      setResultBaea(baea * 14216.0);
    }

    return () => {
      setResultBaea(0);
    };
  }, [baea]);

  const [lnga, setLnga] = useState(0);
  const [resultLnga, setResultLnga] = useState(0);
  useEffect(() => {
    if (lnga > 1.7585) {
      setResultLnga(50000);
    } else {
      setResultLnga(lnga * 28432);
    }

    return () => {
      setResultLnga(0);
    };
  }, [lnga]);

  const [fmoa, setFmoa] = useState(0);
  const [resultFmoa, setResultFmoa] = useState(0);
  useEffect(() => {
    if (fmoa > 3.5171) {
      setResultFmoa(50000);
    } else {
      setResultFmoa(fmoa * 14216);
    }
    return () => {
      setResultFmoa(0);
    };
  }, [fmoa]);

  const [micq, setMicq] = useState(0);
  const [resultMicq, setResultMicq] = useState(0);
  useEffect(() => {
    if (micq > 17.5858) {
      setResultMicq(50000);
    } else {
      setResultMicq(micq * 2843.2);
    }

    return () => {
      setResultMicq(0);
    };
  }, [micq]);

  const [halc, setHalc] = useState(0);
  const [resultHalc, setResultHalc] = useState(0);
  useEffect(() => {
    if (halc > 20) {
      setResultHalc(28432);
    } else {
      setResultHalc(halc * 1421.6);
    }

    return () => {
      setResultHalc(0);
    };
  }, [halc]);

  const [oodp, setOodp] = useState(0);
  const [resultOodp, setResultOodp] = useState(0);
  useEffect(() => {
    if (oodp > 25) {
      if (oodp * 284.3 > 28432) {
        setResultOodp(28432);
      }
    } else {
      setResultOodp(oodp * 284.3);
    }

    return () => {
      setResultOodp(0);
    };
  }, [oodp]);

  const [rrrc, setRrrc] = useState(0);
  const [resultRrrc, setResultRrrc] = useState(0);
  useEffect(() => {
    if (rrrc > 100) {
      setResultRrrc(28432);
    } else {
      setResultRrrc(rrrc * 284.3);
    }

    return () => {
      setResultRrrc(0);
    };
  }, [rrrc]);

  const [edav, setEdav] = useState(0);
  const [vioEdav, setVioEdav] = useState(0);

  const [afmm, setAfmm] = useState(0);
  const [resultAfmm, setResultAfmm] = useState(0);
  useEffect(() => {
    if (afmm > 10) {
      setResultAfmm(28432);
    } else {
      setResultAfmm(afmm * 2843.2);
    }

    return () => {
      setResultAfmm(0);
    };
  }, [afmm]);

  useEffect(() => {
    setTotal(
        resultCf +
        resultAb8 +
        resultAfmm +
        resultBaea +
        resultBb8 +
        resultClom +
        resultCm +
        resultCnp +
        resultFacl +
        resultFacl +
        resultFmoa +
        resultFpvs +
        resultHalc +
        resultHpow +
        resultLnga +
        resultMicq +
        resultMmia +
        resultOodp +
        resultRrrc +
        parseInt(wcah) +
        parseInt(ibad) +
        parseInt(wd) +
        parseInt(pfbe) +
        parseInt(saf) +
        parseInt(mppu) +
        parseInt(rdse) +
        parseInt(smho) +
        parseInt(a4) +
        parseInt(b4) +
        parseInt(c4) +
        parseInt(d4) +
        parseInt(e4) +
        parseInt(f4) +
        parseInt(g4) +
        parseInt(h4) +
        parseInt(i4) +
        parseInt(j4) +
        parseInt(k4) +
        parseInt(a5) +
        parseInt(b5) +
        parseInt(c5) +
        parseInt(d5) +
        parseInt(e5) +
        parseInt(f5) +
        parseInt(g5) +
        parseInt(h5) +
        parseInt(i5) +
        parseInt(j5) +
        parseInt(k5) +
        parseInt(l5) +
        parseInt(m5) +
        parseInt(fpe) +
        parseInt(fme) +
        parseInt(a8) +
        parseInt(resultAb8) +
        parseInt(c8) +
        parseInt(d8) +
        parseInt(a9) +
        parseInt(a10) +
        parseInt(a11) +
        parseInt(a12)
    );
  }, [
    resultCf,
    resultAb8,
    resultAfmm,
    resultBaea,
    resultBb8,
    resultClom,
    resultCm,
    resultCnp,
    resultFacl,
    resultFacl,
    resultFmoa,
    resultFpvs,
    resultHalc,
    resultHpow,
    resultLnga,
    resultMicq,
    resultMmia,
    resultOodp,
    resultRrrc,
    wcah,
    ibad,
    wd,
    pfbe,
    saf,
    mppu,
    rdse,
    smho,
    a4,
    b4,
    c4,
    d4,
    e4,
    f4,
    g4,
    h4,
    i4,
    j4,
    k4,
    a5,
    b5,
    c5,
    d5,
    e5,
    f5,
    g5,
    h5,
    i5,
    j5,
    k5,
    l5,
    m5,
    fpe,
    fme,
    a8,
    resultAb8,
    c8,
    d8,
    a9,
    a10,
    a11,
    a12,
  ]);

  const submitAdminFines = () => {
    if (total != 0) {
      setPayments((payments) => [
        ...payments,
        {
          paymentName: props.title,
          firecode: "628-BFP-10",
          amount: total,
        },
      ]);
      handleClose2();
      swal("Success!", "Added Successfully", "success");
      setTotal(0);
    } else {
      swal("Error Submitting", "No value found", "warning");
    }
  };


  useEffect(() => {
    reset();
  }, [props.onHide]);

  function reset() {
    setTotal(0);
    setCheckA1(false);
    setCheckA2(false);
    setCheckA3(false);
    setCheckA4(false);
    setCheckA5(false);
    setCheckA6(false);
    setCheckA7(false);
    setCheckA8(false);
    setCheckA8v2(false);
    setCheckA9(false);
    setCheckA10(false);
    setCheckA11(false);
    setCheckA12(false);
    setCnp(0);
    setCf(0);
    setCm(0);
    setFacl(0);
    setFpvs(0);
    setHpow(0);
    setMmia(0);
    setClom(0);
    setBaea(0);
    setLnga(0);
    setFmoa(0);
    setMicq(0);
    setHalc(0);
    setOodp(0);
    setRrrc(0);
    setEdav(0);
    setAfmm(0);
    setWcah(0);
    setIbad(0);
    setWd(0);
    setPfbe(0);
    setSaf(0);
    setMppu(0);
    setRdse(0);
    setSmho(0);
    setA4(0);
    setB4(0);
    setC4(0);
    setD4(0);
    setE4(0);
    setF4(0);
    setG4(0);
    setH4(0);
    setI4(0);
    setJ4(0);
    setK4(0);
    setA5(0);
    setB5(0);
    setC5(0);
    setD5(0);
    setE5(0);
    setF5(0);
    setG5(0);
    setH5(0);
    setI5(0);
    setJ5(0);
    setK5(0);
    setL5(0);
    setM5(0);
    setFpe(0);
    setFme(0);
    setA8(0);
    setAb8(0);
    setBb8(0);
    setC8(0);
    setD8(0);
    setA9(0);
    setA10(0);
    setA11(0);
    setA12(0);
  }

  return (
    <>
      <Modal
        show={props.show}
        onHide={props.onHide}
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
            <Form.Label>Administrative Fines</Form.Label>
            <Row>
              <Col md={4}>
                <p>
                  The following is the schedule of
                  <strong>Fire Code Administrative Fines:</strong>
                </p>
              </Col>
              <Col md={4}>
                <Form.Check
                  type="checkbox"
                  label="Failure to provide safety measures for the manufacture, storage, handling, display and/or use of the following hazardous materials required in Section 7, paragraph (b) of Republic Act No. 9514."
                  onClick={(e) => setCheckA1(e.target.checked)}
                />
              </Col>
              {checkA1 ? (
                <Col md={4}>
                  <>
                    <Form.Label>
                      Cellulose nitrate plastic of any kind
                    </Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Kgs."
                      onChange={(e) => setCnp(e.target.value)}
                    />
                    <p>CNP: {Math.round(resultCnp)}</p>

                    <Form.Label>Cmbustible fibers</Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Cubic Meters (m³)"
                      onChange={(e) => setCf(e.target.value)}
                    />
                    <p>Cubic Meter Amount: {Math.round(resultCf)}</p>

                    <Form.Label>
                      Cellular materials such as foam rubber, sponge rubber and
                      plastic foam
                    </Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Cubic Meters (m³)"
                      onChange={(e) => setCm(e.target.value)}
                    />
                    <p>Cellular materials: {Math.round(resultCm)}</p>

                    <Form.Label>
                      Flammable and combustible liquids or gases of any
                      classification
                    </Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Number of Liters"
                      onChange={(e) => setFacl(e.target.value)}
                    />
                    <p>Result Flammable: {Math.round(resultFacl)}</p>

                    <Form.Label>
                      Flammable paints, varnishes, stains and organic coatings
                    </Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Number of liters"
                      onChange={(e) => setFpvs(e.target.value)}
                    />
                    <p>Result FPVS: {Math.round(resultFpvs)}</p>
                    <Form.Label>
                      High piled or widely spread combustible stock
                    </Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Cubic Meters (m³)"
                      onChange={(e) => setHpow(e.target.value)}
                    />
                    <p>Result HPOW: {Math.round(resultHpow)}</p>
                    <Form.Label>Metallic magnesium in any form</Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Number of Kgs"
                      onChange={(e) => setMmia(e.target.value)}
                    />
                    <p>Result MMIA: {Math.round(resultMmia)}</p>
                    <Form.Label>
                      Corrosive liquids, oxidizing materials, organic peroxide,
                      nitromethane, ammonium nitrate or any amount of highly
                      toxic pyrophoric, hypergolic or cryogenic materials or
                      poisonous gases as well as material compounds which when
                      exposed to heat or flame become a fire conductor or
                      generate excessive smoke or toxic gases
                    </Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Kgs/Liter"
                      onChange={(e) => setClom(e.target.value)}
                    />
                    <p>Result CLOM: {resultClom}</p>

                    <Form.Label>
                      Blasting agents, explosives and special industrial
                      explosive materials, blasting caps, black powder, liquid
                      nitro-glycerin, dynamite, nitro-cellulose, fulminates of
                      any kind and plastic explosives containing ammonium salt
                      or chlorate
                    </Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Kgs/Liter"
                      onChange={(e) => setBaea(e.target.value)}
                    />
                    <p>Result BAEA: {Math.round(resultBaea)}</p>
                    <Form.Label>
                      Liquid nitro-glycerine and liquid trinitrotoluene
                    </Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Liters"
                      onChange={(e) => setLnga(e.target.value)}
                    />
                    <p>Result LNGA: {resultLnga}</p>
                    <Form.Label>
                      Firework materials of any kind or form
                    </Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Kgs"
                      onChange={(e) => setFmoa(e.target.value)}
                    />
                    <p>Result FMOA: {resultFmoa}</p>

                    <Form.Label>Matches in commercial quantities</Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Matchman Gross"
                      onChange={(e) => setMicq(e.target.value)}
                    />
                    <p>Result MICQ: {resultMicq}</p>
                    <Form.Label>Hot ashes, live coals and embers</Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Cubic Meters (m³)"
                      onChange={(e) => setHalc(e.target.value)}
                    />
                    <p>Result HALC: {resultHalc}</p>
                    <Form.Label>
                      Mineral, vegetable or animal oils and other
                      derivative/by-products
                    </Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Number of Liters"
                      onChange={(e) => setOodp(e.target.value)}
                    />
                    <p>Result OODP: {resultOodp}</p>
                    <Form.Label>
                      Recycling, reuse and resale of combustible and flammable
                      liquids and other combustible waste materials for
                      recycling or resale
                    </Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Cubic Meters (m³)"
                      onChange={(e) => setRrrc(e.target.value)}
                    />
                    <p>Result RRRC: {resultRrrc}</p>
                    <Form.Label>Explosive dusts and vapors</Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Number of Violation?"
                      onChange={(e) => setVioEdav(e.target.value)}
                    />
                    <Form.Control
                      type="Number"
                      placeholder="Enter Violation Amount?"
                      onChange={(e) => setEdav(e.target.value)}
                    />
                    <p>Total Violation Amount: {edav * vioEdav}</p>
                    <Form.Label>
                      Agriculture, forest, marine or mineral products which may
                      undergo spontaneous combustion
                    </Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Cubic Meters (m³)"
                      onChange={(e) => setAfmm(e.target.value)}
                    />
                    <p>Result AFMM: {resultAfmm}</p>
                  </>
                </Col>
              ) : null}

              <Col md={{ span: 4, offset: 4 }}>
                <Form.Check
                  type="checkbox"
                  label="Failure to provide safety measures for the following hazardous operations or processes as required in Section 7, para “C” of RA 9514."
                  onClick={(e) => setCheckA2(e.target.checked)}
                />
              </Col>
              {checkA2 ? (
                <Col md={4}>
                  <>
                    <Form.Label>Welding, cutting and other hotworks</Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Fine Amount(PhP 2,843.20 to PhP 28,432.00)"
                      onChange={(e) => setWcah(e.target.value)}
                    />
                    <p>Fine Amount WCAH: {wcah}</p>
                    <Form.Label>Industrial baking and drying</Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Fine Amount (PhP 28,432.00 to PhP 50,000.00)"
                      onChange={(e) => setIbad(e.target.value)}
                    />
                    <p>Fine Amount IBAD: {ibad}</p>
                    <Form.Label>Waste Disposal</Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Fine Amount (PhP 28,432.00 to PhP 50,000.00)"
                      onChange={(e) => setWd(e.target.value)}
                    />
                    <p>Fine Amount Waste Disposal: {wd}</p>
                    <Form.Label>
                      Pressurized/forced-draft burning equipment
                    </Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Fine Amount (PhP 28,432.00 to PhP 50,000.00)"
                      onChange={(e) => setPfbe(e.target.value)}
                    />
                    <p>Fine Amount PFBE: {pfbe}</p>

                    <Form.Label>Smelting and forging</Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Fine Amount (PhP 28,432.00 to PhP 50,000.00)"
                      onChange={(e) => setSaf(e.target.value)}
                    />
                    <p>Fine Amount SAF: {saf}</p>
                    <Form.Label>
                      Motion picture projection using electrical arc lamp
                    </Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Fine Amount (PhP 37,500.00 to PhP 50,000.00)"
                      onChange={(e) => setMppu(e.target.value)}
                    />
                    <p>Fine Amount MPPU: {mppu}</p>
                    <Form.Label>
                      Refining, distillation and solvent extraction
                    </Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Fine Amount (PhP 37,500.00 to PhP 50,000.00)"
                      onChange={(e) => setRdse(e.target.value)}
                    />
                    <p>Fine Amount RDSE: {rdse}</p>
                  </>
                </Col>
              ) : null}

              <Col md={{ span: 4, offset: 4 }}>
                <Form.Check
                  type="checkbox"
                  label="Failure to provide safety measures for other hazardous operations or processes not included in the preceding enumeration but mentioned in Chapter 4 of Rule 10 of this RIRR"
                  onClick={(e) => setCheckA3(e.target.checked)}
                />
              </Col>
              {checkA3 ? (
                <Col md={4}>
                  <Form.Control
                    type="Number"
                    placeholder="Enter Fine Amount (PhP 37,500.00 to PhP 50,000.00)"
                    onChange={(e) => setSmho(e.target.value)}
                  />
                  <p>Fine Amount SMHO: {smho}</p>
                </Col>
              ) : null}

              <Col md={{ span: 4, offset: 4 }}>
                <Form.Check
                  type="checkbox"
                  label="Failure to provide the following safety construction, and protective and warning systems as required in Section 7, paragraph (d) of Republic Act No. 9514."
                  onClick={(e) => setCheckA4(e.target.checked)}
                />
              </Col>
              {checkA4 ? (
                <Col md={4}>
                  <>
                    <Form.Label>
                      Fire protection features such as sprinkler alarms, hose
                      boxes, hose reels, standpipe alarms and other firefighting
                      equipment
                    </Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Fine Amount"
                      onChange={(e) => setA4(e.target.value)}
                    />
                    <p>4-A Fine Amount: {a4}</p>
                    <Form.Label>Fire alarm systems</Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Fine Amount"
                      onChange={(e) => setB4(e.target.value)}
                    />
                    <p>4-B Fine Amount: {b4}</p>
                    <Form.Label>
                      Fire walls to separate adjoining property and storage
                      areas from other occupancies in the same building
                    </Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Fine Amount"
                      onChange={(e) => setC4(e.target.value)}
                    />
                    <p>4-C Fine Amount: {c4}</p>

                    <Form.Label>
                      Provisions for confining the fire at its source such as
                      fire resistive floors and walls extending up to the next
                      floor slab or roof, curtain boards and other fire
                      containing or stopping components
                    </Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Fine Amount"
                      onChange={(e) => setD4(e.target.value)}
                    />
                    <p>4-D Fine Amount: {d4}</p>
                    <Form.Label>
                      Termination of all exits in an area affording safe passage
                      to a public way or safe dispersal area
                    </Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Fine Amount"
                      onChange={(e) => setE4(e.target.value)}
                    />
                    <p>4-E Fine Amount: {e4}</p>
                    <Form.Label>
                      Stairways, vertical shafts, horizontal exits and other
                      means of egress sealed from smoke and heat
                    </Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Fine Amount"
                      onChange={(e) => setF4(e.target.value)}
                    />
                    <p>4-F Fine Amount: {f4}</p>
                    <Form.Label>
                      A fire exit plan for each floor of the building, showing
                      the routes from each room to appropriate exits, displayed
                      prominently on the door of each room
                    </Form.Label>
                    <Form.Control
                     type="Number"
                      placeholder="Enter Fine Amount"
                      onChange={(e) => setG4(e.target.value)}
                    />
                    <p>4-G Fine Amount: {g4}</p>
                    <Form.Label>
                      Self-closing fire resistive doors leading to corridors
                    </Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Fine Amount"
                      onChange={(e) => setH4(e.target.value)}
                    />
                    <p>4-H Fine Amount: {h4}</p>
                    <Form.Label>
                      Fire dampers in centralized air- conditioning ducts
                    </Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Fine Amount"
                      onChange={(e) => setI4(e.target.value)}
                    />
                    <p>4-I Fine Amount: {i4}</p>
                    <Form.Label>Roof vents for use of firefighters</Form.Label>
                    <Form.Control
                     type="Number"
                      placeholder="Enter Fine Amount"
                      onChange={(e) => setJ4(e.target.value)}
                    />
                    <p>4-J Fine Amount: {j4}</p>
                    <Form.Label>
                      Properly marked and lighted exits with provision for
                      emergency lights to adequately illuminate exit ways in
                      case of power failure
                    </Form.Label>
                    <Form.Control
                     type="Number"
                      placeholder="Enter Fine Amount"
                      onChange={(e) => setK4(e.target.value)}
                    />
                    <p>4-K Fine Amount: {k4}</p>
                  </>
                </Col>
              ) : null}

              <Col md={{ span: 4, offset: 4 }}>
                <Form.Check
                  type="checkbox"
                  label="Failure to observe the following declared prohibited acts and omissions as required under Section 8 of Republic Act No. 9514."
                  onClick={(e) => setCheckA5(e.target.checked)}
                />
              </Col>
              {checkA5 ? (
                <Col md={4}>
                  <>
                    <Form.Label>
                      Obstructing or blocking the exit ways or across to
                      buildings clearly marked for fire safety purposes, such as
                      but not limited to aisles in interior rooms, any part of
                      the stairways, corridors, vestibules, balconies or bridges
                      leading to a stairway or exit of any kind or tolerating or
                      allowing said violations
                    </Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Fine Amount"
                      onChange={(e) => setA5(e.target.value)}
                    />
                    <p>5-A Amount Fine: {a5}</p>
                    <Form.Label>
                      Constructing gates, entrances and walkways to building
                      components and yards, and temporary or permanent
                      structures on public ways, which obstruct the orderly and
                      easy passage of firefighting vehicles and equipment
                    </Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Fine Amount"
                      onChange={(e) => setB5(e.target.value)}
                    />
                    <p>5-B Amount Fine: {b5}</p>
                    <Form.Label>
                      Prevention, interference and obstruction of any operation
                      of the BFP or of duly organized and authorized fire
                      brigades
                    </Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Fine Amount"
                      onChange={(e) => setC5(e.target.value)}
                    />
                    <p>5-C Amount Fine: {c5}</p>
                    <Form.Label>
                      Obstructing designated fire lanes or access to fire
                      hydrants
                    </Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Fine Amount"
                      onChange={(e) => setD5(e.target.value)}
                    />
                    <p>5-D Amount Fine: {d5}</p>
                    <Form.Label>
                      Overcrowding or admission of alarms beyond the authorized
                      capacity in movie houses, theaters, coliseum, auditorium
                      or other public assembly buildings, except in other
                      assembly areas on the ground floor with open sides or open
                      doors sufficient to provide safe exits
                    </Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Fine Amount"
                      onChange={(e) => setE5(e.target.value)}
                    />
                    <p>5-E Amount Fine: {e5}</p>
                    <Form.Label>
                      Locking fire exits during period when people are inside
                      the building
                    </Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Fine Amount"
                      onChange={(e) => setF5(e.target.value)}
                    />
                    <p>5-F Amount Fine: {f5}</p>
                    <Form.Label>
                      Prevention or obstruction of the automatic closure of fire
                      doors or smoke partition or dampers
                    </Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Fine Amount"
                      onChange={(e) => setG5(e.target.value)}
                    />
                    <p>5-G Amount Fine: {g5}</p>
                    <Form.Label>
                      Use of fire protective or firefighting equipment of the
                      BFP other than for firefighting except in other
                      emergencies where their use are justified
                    </Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Fine Amount"
                      onChange={(e) => setH5(e.target.value)}
                    />
                    <p>5-H Amount Fine: {h5}</p>
                    <Form.Label>
                      Giving false or malicious fire alarms
                    </Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Fine Amount"
                      onChange={(e) => setI5(e.target.value)}
                    />
                    <p>5-I Amount Fine: {i5}</p>
                    <Form.Label>
                      Smoking in prohibited areas as may be determined by the
                      BFP, or throwing of cigars, cigarettes, burning objects in
                      places which may start or cause fire
                    </Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Fine Amount"
                      onChange={(e) => setJ5(e.target.value)}
                    />
                    <p>5-J Amount Fine: {j5}</p>
                    <Form.Label>
                      Properly marked and lighted exits with provision for
                      emergency lights to adequately illuminate exit ways in
                      case of power failure
                    </Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Fine Amount"
                      onChange={(e) => setK5(e.target.value)}
                    />
                    <p>5-K Amount Fine: {k5}</p>
                    <Form.Label>
                      Removing, destroying, tampering or obliterating any
                      authorized mark, seal, sign or tag posted or required by
                      the BFP for fire safety in any building, structure or
                      processing equipment
                    </Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Fine Amount"
                      onChange={(e) => setL5(e.target.value)}
                    />
                    <p>5-L Amount Fine: {l5}</p>
                    <Form.Label>
                      Use of jumpers or tampering with electrical wiring or
                      overloading the electrical system beyond its designed
                      capacity or such other practices that would tend to
                      undermine the fire safety features of the electrical
                      system
                    </Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Fine Amount"
                      onChange={(e) => setM5(e.target.value)}
                    />
                    <p>5-M Amount Fine: {m5}</p>
                  </>
                </Col>
              ) : null}

              <Col md={{ span: 4, offset: 4 }}>
                <Form.Check
                  type="checkbox"
                  label="Failure to post or inadequate posting of required signages"
                  onClick={(e) => setCheckA6(e.target.checked)}
                />
              </Col>
              {checkA6 ? (
                <Col md={4}>
                  <>
                    <Form.Control
                      type="Number"
                      placeholder="Failure to post required signages"
                      onChange={(e) => setFpe(e.target.value)}
                    />
                    <p>FPE Amount Fine: {fpe}</p>
                  </>
                </Col>
              ) : null}

              <Col md={{ span: 4, offset: 4 }}>
                <Form.Check
                  type="checkbox"
                  label="Failure to provide or inadequate means of egress "
                  onClick={(e) => setCheckA7(e.target.checked)}
                />
              </Col>
              {checkA7 ? (
                <Col md={4}>
                  <>
                    <Form.Control
                      type="Number"
                      placeholder="Failed Egress Amount Fine"
                      onChange={(e) => setFme(e.target.value)}
                    />
                    <p>FME Amount Fine: {fme}</p>
                  </>
                </Col>
              ) : null}

              <Col md={{ span: 4, offset: 4 }}>
                <Form.Check
                  type="checkbox"
                  label="Failure to secure and submit documentary requirements such as, but not limited to:"
                  onClick={(e) => setCheckA8(e.target.checked)}
                />
              </Col>
              {checkA8 ? (
                <Col md={4}>
                  <>
                    <Form.Label>
                      A copy of fire insurance policy submitted within the
                      prescribed time limit
                    </Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Fine Amount"
                      onChange={(e) => setA8(e.target.value)}
                    />
                    <p>A-8 Fine Amount: {a8}</p>
                    <Form.Check
                      type="checkbox"
                      label="FSIC for the year of default;"
                      onClick={(e) => setCheckA8v2(e.target.checked)}
                    />
                    {checkA8v2 ? (
                      <div className="ml-5">
                        <Form.Label>
                          Failure to renew FSIC for less than a year
                        </Form.Label>
                        <Form.Control
                          type="Number"
                          placeholder="Enter Total Amount to be Paid"
                          onChange={(e) => setAb8(e.target.value)}
                        />
                        <p>1-B-8 Fine Amount: {resultAb8}</p>
                        <Form.Label>
                          Failure to renew FSIC for a year or more
                        </Form.Label>
                        <Form.Control
                          type="Number"
                          placeholder="Enter Total Amount to be Paid"
                          onChange={(e) => setBb8(e.target.value)}
                        />
                        <p>2-B-8 Fine Amount: {resultBb8}</p>
                      </div>
                    ) : null}

                    <Form.Label>
                      FSEC not secured prior to the construction of the building
                    </Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Fine Amount"
                      onChange={(e) => setC8(e.target.value)}
                    />
                    <p>C-8 Fine Amount: {c8}</p>
                    <Form.Label>
                      Storage, Conveyance, Installation and other clearances
                      (e.g., fireworks display, fumigation/fogging, fire drill,
                      welding, cutting and other hotworks)
                    </Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Fine Amount"
                      onChange={(e) => setD8(e.target.value)}
                    />
                    <p>D-8 Fine Amount: {d8}</p>
                  </>
                </Col>
              ) : null}

              <Col md={{ span: 4, offset: 4 }}>
                <Form.Check
                  type="checkbox"
                  label="Failure to comply within the period specified in the affidavit of undertaking "
                  onClick={(e) => setCheckA9(e.target.checked)}
                />
              </Col>
              {checkA9 ? (
                <Col md={4}>
                  <>
                    <Form.Control
                      type="Number"
                      placeholder="Failed to comply within period"
                      onChange={(e) => setA9(e.target.value)}
                    />
                    <p> A-9 Fine Amount: {a9}</p>
                  </>
                </Col>
              ) : null}

              <Col md={{ span: 4, offset: 4 }}>
                <Form.Check
                  type="checkbox"
                  label="Use of open flame lighting devices in places of assembly except those enumerated as exceptions in para “B” of Section 10.2.21.2 of this RIRR"
                  onClick={(e) => setCheckA10(e.target.checked)}
                />
              </Col>
              {checkA10 ? (
                <Col md={4}>
                  <>
                    <Form.Control
                      type="Number"
                      placeholder="Use of open Flame lightning devices"
                      onChange={(e) => setA10(e.target.value)}
                    />
                    <p> A-10 Fine Amount: {a10}</p>
                  </>
                </Col>
              ) : null}

              <Col md={{ span: 4, offset: 4 }}>
                <Form.Check
                  type="checkbox"
                  label=". Obstruction in the conduct of fire safety inspection, fire arson investigation and fire operations. "
                  onClick={(e) => setCheckA11(e.target.checked)}
                />
              </Col>
              {checkA11 ? (
                <Col md={4}>
                  <>
                    <Form.Control
                      type="Number"
                      placeholder="Obstruction in the conduct of safety inspection"
                      onChange={(e) => setA11(e.target.value)}
                    />
                    <p> A-11 Fine Amount: {a11}</p>
                  </>
                </Col>
              ) : null}

              <Col md={{ span: 4, offset: 4 }}>
                <Form.Check
                  type="checkbox"
                  label="Other violations similar to or of the same nature as any of the above, but notincluded in this listing, shall likewise be fined with the same amount."
                  onClick={(e) => setCheckA12(e.target.checked)}
                />
              </Col>
              {checkA12 ? (
                <Col md={4}>
                  <>
                    <Form.Control
                      type="Number"
                      placeholder="Other Violations"
                      onChange={(e) => setA12(e.target.value)}
                    />
                    <p> A-12 Fine Amount: {a12}</p>
                  </>
                </Col>
              ) : null}
            </Row>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <div className={styles.customFooter}>
            <p className={styles.textStyleFooter}>
              Total Admin Fines: P {Math.round(total)}
            </p>
            <Button
              bsPrefix
              className={styles.button}
              onClick={(e) => submitAdminFines()}
            >
              Confirm and Submit for Collection
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AdminFines;
