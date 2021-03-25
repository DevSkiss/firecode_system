import { useState, useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";

const StorageClearanceFee = (params) => {
  const [checkStf, setCheckStf] = useState(false);
  const [checkFcs, setCheckFcs] = useState(false);
  const [checkFcl, setCheckFcl] = useState(false);
  const [checkFG, setCheckFG] = useState(false);
  const [checkLPG, setCheckLPG] = useState(false);
  const [sca1, setSca1] = useState(0);
  const [resultSca1, setResultSca1] = useState(0);
  const [totalStorageFee, setTotalStorageFee] = useState(0);
  //Calcium Carbide
  useEffect(() => {
    if (sca1 >= 40 && sca1 <= 80) {
      setResultSca1(49);
    } else if (sca1 > 40 && sca1 <= 200) {
      setResultSca1(63);
    } else if (sca1 > 200 && sca1 <= 2000) {
      setResultSca1(126);
    } else if (sca1 > 2000 && sca1 <= 4000) {
      setResultSca1(189);
    } else if (sca1 > 4000 && sca1 <= 20000) {
      setResultSca1(252);
    } else if (sca1 > 20000 && sca1 <= 40000) {
      setResultSca1(315);
    } else if (sca1 > 40000 && sca1 <= 200000) {
      setResultSca1(472);
    } else if (sca1 > 200000) {
      setResultSca1(630);
    } else {
      setResultSca1(0);
    }

    return () => {
      setResultSca1(0);
    };
  }, [sca1]);

  const [sca2, setSca2] = useState(0);
  const [resultSca2, setResultSca2] = useState(0);
  useEffect(() => {
    if (sca2 >= 40 && sca2 <= 200) {
      setResultSca2(42);
    } else if (sca2 > 200 && sca2 <= 800) {
      setResultSca2(84);
    } else if (sca2 > 800 && sca2 <= 2000) {
      setResultSca2(168);
    } else if (sca2 > 2000 && sca2 <= 4000) {
      setResultSca2(315);
    } else if (sca2 > 4000 && sca2 <= 12000) {
      setResultSca2(630);
    } else if (sca2 > 12000 && sca2 <= 40000) {
      setResultSca2(1049);
    } else if (sca2 > 40000) {
      setResultSca2(42);
    } else {
      setResultSca2(0);
    }

    return () => {
      setResultSca2(0);
    };
  }, [sca2]);

  const [sca3, setSca3] = useState(0);
  const [resultSca3, setResultSca3] = useState(0);
  useEffect(() => {
    if (sca3 >= 100 && sca3 <= 400) {
      setResultSca3(42);
    } else if (sca3 > 400 && sca3 <= 2000) {
      setResultSca3(210);
    } else if (sca3 > 2000 && sca3 <= 4000) {
      setResultSca3(420);
    } else if (sca3 > 4000 && sca3 <= 20000) {
      setResultSca3(839);
    } else if (sca3 > 20000) {
      setResultSca3(1678);
    } else {
      setResultSca3(0);
    }

    return () => {
      setResultSca3(0);
    };
  }, [sca3]);

  const [sca4, setSca4] = useState(0);
  const [resultSca4, setResultSca4] = useState(0);
  useEffect(() => {
    if (sca4 >= 20 && sca4 <= 40) {
      setResultSca4(42);
    } else if (sca4 > 100 && sca4 <= 400) {
      setResultSca4(63);
    } else if (sca4 > 400 && sca4 <= 2000) {
      setResultSca4(158);
    } else if (sca4 > 2000 && sca4 <= 4000) {
      setResultSca4(315);
    } else if (sca4 > 4000 && sca4 <= 20000) {
      setResultSca4(460);
    } else if (sca4 > 20000) {
      setResultSca4(630);
    } else {
      setResultSca4(0);
    }

    return () => {
      setResultSca4(0);
    };
  }, [sca4]);
  const [sca5, setSca5] = useState(0);
  const [resultSca5, setResultSca5] = useState(0);
  useEffect(() => {
    if (sca5 >= 0.25 && sca5 <= 3) {
      setResultSca5(42);
    } else if (sca5 > 3 && sca5 <= 14) {
      setResultSca5(112);
    } else if (sca5 > 14 && sca5 <= 28) {
      setResultSca5(189);
    } else if (sca5 > 28 && sca5 <= 70) {
      setResultSca5(315);
    } else if (sca5 > 70) {
      setResultSca5(486);
    } else {
      setResultSca5(0);
    }

    return () => {
      setResultSca5(0);
    };
  }, [sca5]);

  const [sca6, setSca6] = useState(0);
  const [resultSca6, setResultSca6] = useState(0);
  useEffect(() => {
    if (sca6 >= 200 && sca6 <= 400) {
      setResultSca6(49);
    } else if (sca6 > 400 && sca6 <= 4000) {
      setResultSca6(98);
    } else if (sca6 > 4000 && sca6 <= 20000) {
      setResultSca6(189);
    } else if (sca6 > 20000) {
      setResultSca6(315);
    } else {
      setResultSca6(0);
    }

    return () => {
      setResultSca6(0);
    };
  }, [sca6]);

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
      //TODO FIX
      setResultSba1( 8388 + Math.ceil((sba1 - 8000000) / 400) * 4);
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

  const [scca1, setScca1] = useState(0);
  const [resultScca1, setResultScca1] = useState(0);
  useEffect(() => {
    if (scca1 <= 200 && scca1 > 0) {
      setResultScca1(70);
    } else if (scca1 > 200 && scca1 <= 2000) {
      setResultScca1(140);
    } else if (scca1 > 2000 && scca1 <= 8000) {
      setResultScca1(280);
    } else if (scca1 > 8000 && scca1 <= 20000) {
      setResultScca1(699);
    } else if (scca1 > 20000 && scca1 <= 200000) {
      setResultScca1(1398);
    } else if (scca1 > 200000 && scca1 <= 400000) {
      setResultScca1(5592);
    } else if (scca1 > 400000) {
      setResultScca1(5592 + Math.ceil((scca1 - 400000) / 4000) * 35);
    } else {
      setResultScca1(0);
    }

    return () => {
      setResultScca1(0);
    };
  }, [scca1]);

  const [sccb1, setSccb1] = useState(0);
  const [resultSccb1, setResultSccb1] = useState(0);
  useEffect(() => {
    if (sccb1 <= 60 && sccb1 > 0) {
      setResultSccb1(6);
    } else if (sccb1 > 60 && sccb1 <= 100) {
      setResultSccb1(7);
    } else if (sccb1 > 100 && sccb1 <= 200) {
      setResultSccb1(11);
    } else if (sccb1 > 200 && sccb1 <= 400) {
      setResultSccb1(14);
    } else if (sccb1 > 400 && sccb1 <= 800) {
      setResultSccb1(28);
    } else if (sccb1 > 800 && sccb1 <= 1200) {
      setResultSccb1(42);
    } else if (sccb1 > 1200 && sccb1 <= 2000) {
      setResultSccb1(56);
    } else if (sccb1 > 2000) {
      setResultSccb1(56 + Math.ceil((sccb1 - 2000) / 400) * 4);
    } else {
      setResultSccb1(0);
    }

    return () => {
      setResultSccb1(0);
    };
  }, [sccb1]);

  const [lpg, setLpg] = useState(0);
  useEffect(() => {
    setLpg(resultScca1 + resultSccb1);
  }, [resultScca1, resultSccb1]);

  const [scc2, setScc2] = useState(0);
  const [resultScc2, setResultScc2] = useState(0);
  useEffect(() => {
    if (scc2 >= 20 && scc2 <= 100) {
      setResultScc2(21);
    } else if (scc2 > 100 && scc2 <= 400) {
      setResultScc2(42);
    } else if (scc2 > 400 && scc2 <= 2000) {
      setResultScc2(126);
    } else if (scc2 > 2000 && scc2 <= 8000) {
      setResultScc2(252);
    } else if (scc2 > 8000 && scc2 <= 40000) {
      setResultScc2(630);
    } else if (scc2 > 40000 && scc2 <= 200000) {
      setResultScc2(1259);
    } else if (scc2 > 200000 && scc2 <= 400000) {
      setResultScc2(1888);
    } else if (scc2 > 400000) {
      setResultScc2(3146);
    } else if (scc2 < 20) {
      setResultScc2(0);
    } else {
      setResultScc2(0);
    }

    return () => {
      setResultScc2(0);
    };
  }, [scc2]);

  const [fcs, setFcs] = useState(0);
  useEffect(() => {
    setFcs(
      resultSca1 +
        resultSca2 +
        resultSca3 +
        resultSca4 +
        resultSca5 +
        resultSca6
    );
  }, [sca1, sca2, sca3, sca4, sca5, sca5, sca6]);

  useEffect(() => {
    if (checkFcs === false) {
      setResultSca1(0);
      setResultSca2(0);
      setResultSca3(0);
      setResultSca4(0);
      setResultSca5(0);
      setResultSca6(0);
    }
  }, [checkFcs]);

  const [fcl, setFcl] = useState(0);
  useEffect(() => {
    setFcl(resultSba1 + resultSba2 + resultSba3 + resultSba4);
  }, [sba1, sba2, sba3, sba4]);

  useEffect(() => {
    if (checkFcl === false || checkStf === false) {
      setSba1(0);
      setSba2(0);
      setSba3(0);
      setSba4(0);
    }
  }, [checkFcl]);

  useEffect(() => {
    if (checkLPG === false || checkStf === false) {
      setScca1(0);
      setSccb1(0);
      setLpg(0);
    }
  }, [checkLPG]);

  useEffect(() => {
    if (checkFG === false || checkStf === false) {
      setCheckLPG(false);
      setScc2(0);
    }
  }, [checkFG]);

  useEffect(() => {
    setTotalStorageFee(lpg + resultScc2 + fcl + fcs);
    params.setStorage({
      amount: lpg + resultScc2 + fcl + fcs,
      firecode: "628-BFP-07",
    });

    return () => {
      setTotalStorageFee(0);
      params.setStorage({
        amount: 0,
        firecode: "",
      });
    };
  }, [lpg, resultScc2, fcl, fcs]);

  useEffect(() => {
    if (checkStf === false) {
      setCheckFG(false);
      setCheckFcl(false);
      setCheckFcs(false);
      setTotalStorageFee(0);
      params.setStorage({
        amount: 0,
        firecode: "",
      });
    }
  }, [checkStf]);

  return (
    <>
      <Form.Check
        type="checkbox"
        label="Storage Clearance Fee"
        id="storageFeeId"
        onClick={(e) => setCheckStf(e.target.checked)}
      />
      {checkStf ? (
        <>
          <Row>
            <Col md={4}>
              <p>
                Storage clearance shall be issued upon payment of a fee based on
                the storage capacity as indicated:
              </p>
            </Col>
            <Col md={4}>
              <Form.Check
                type="checkbox"
                label="Flammable/Combustible Solids"
                onClick={(e) => setCheckFcs(e.target.checked)}
              />
            </Col>
            {checkFcs ? (
              <>
                <Col md={4}>
                  <strong>Calcium Carbide</strong>
                  <Form.Control
                    type="number"
                    placeholder="Enter Value in Kgs."
                    onChange={(e) => setSca1(e.target.value)}
                  />
                  <p>CalCar Fee: {Math.round(resultSca1)}.00</p>
                  <strong>Pyroxylin</strong>
                  <Form.Control
                    type="number"
                    placeholder="Enter value in Kgs."
                    onChange={(e) => setSca2(e.target.value)}
                  />
                  <p>Pyroxylin Fee: {Math.round(resultSca2)}.00</p>
                  <strong>Matches</strong>
                  <Form.Control
                    type="number"
                    placeholder="Enter value in Kgs."
                    onChange={(e) => setSca3(e.target.value)}
                  />
                  <p>Matches Fee: {Math.round(resultSca3)}.00</p>

                  <strong>
                    Nitrate, phosphorous, bromine, sodium, picric acid and other
                    hazardous chemicals of similar flammable, explosive,
                    oxidizing or lacrymatory properties
                  </strong>
                  <Form.Control
                    type="number"
                    placeholder="Enter value in Kgs"
                    onChange={(e) => setSca4(e.target.value)}
                  />
                  <p>Npbs Fee: {Math.round(resultSca4)}</p>

                  <strong>
                    Shredded combustible materials, such as wood
                    shaving/excelsior (kusot), sawdust, kapok, straw and hay;
                    combustible loose fibers: cotton waste (estopa), sisal,
                    oakum; and other similar combustible shavings and fine
                    materials
                  </strong>
                  <Form.Control
                    type="number"
                    placeholder="Enter value in Kgs."
                    onChange={(e) => setSca5(e.target.value)}
                  />
                  <p>Shredded Combustible Fee: {Math.round(resultSca5)}.00</p>

                  <strong>
                    Tar, resin, waxes, copra, rubber, cork, bituminous coal and
                    similar combustible materials
                  </strong>
                  <Form.Control
                    type="number"
                    placeholder="Enter value in kgs."
                    onChange={(e) => setSca6(e.target.value)}
                  />
                  <p>Tar, Resin Fee: {resultSca6}.00</p>
                </Col>
              </>
            ) : null}

            <Col md={{ span: 4, offset: 4 }}>
              <Form.Check
                type="checkbox"
                label="Flammable/Combustible Liquids"
                onClick={(e) => setCheckFcl(e.target.checked)}
              />
            </Col>
            {checkFcl ? (
              <>
                <Col md={4}>
                  <strong>
                    For flammable liquids having flashpoint of -6.67 C or below,
                    such as gasoline, ether, carbon bisolphide, naptha, benzol
                    (benzene), collodion, aflodin and acetone.
                  </strong>
                  <Form.Control
                    type="number"
                    placeholder="Enter value in liters"
                    onChange={(e) => setSba1(e.target.value)}
                  />
                  <p>Storage Fee Amount: {Math.round(resultSba1)}.00</p>

                  <strong>
                    For flammable liquids having flashpoint of above -6.67 C and
                    below 22.8 C such as alcohol, amyl, toluol, ethyl, acetate
                    and like.
                  </strong>
                  <Form.Control
                    type="number"
                    placeholder="Enter value in liters"
                    onChange={(e) => setSba2(e.target.value)}
                  />
                  <p>Storage Fee Amount: {Math.round(resultSba2)}.00</p>

                  <strong>
                    For liquids having flashpoint of 22.8 oC to 93.3 oC, such as
                    kerosene, turpentine, thinner, prepared paints, varnish,
                    diesel oil, fuel oil, kerosene, cleansing solvent, polishing
                    liquids and similar
                  </strong>
                  <Form.Control
                    type="number"
                    placeholder="Enter value in liters"
                    onChange={(e) => setSba3(e.target.value)}
                  />
                  <p>Storage Fee Amount: {Math.round(resultSba3)}.00</p>

                  <strong>
                    For combustible liquids having flash point greater than 93.3
                    oC that is subject to spontaneous ignition or is
                    artificially heated to a temperature equal to or higher than
                    its flash point, such as crude oil, petroleum oil and
                    others.
                  </strong>
                  <Form.Control
                    type="number"
                    placeholder="Enter value in kgs"
                    onChange={(e) => setSba4(e.target.value)}
                  />
                  <p>Storage Fee Amount: {Math.round(resultSba4)}.00</p>
                </Col>
              </>
            ) : null}

            <Col md={{ span: 4, offset: 4 }}>
              <Form.Check
                type="checkbox"
                label="Flammable Gases"
                onClick={(e) => setCheckFG(e.target.checked)}
              />
            </Col>
            {checkFG ? (
              <>
                <Col md={4}>
                  <Form.Check
                    type="checkbox"
                    label="Liquefied Petroleum Gas (LPG) in liter water capacity"
                    onClick={(e) => setCheckLPG(e.target.checked)}
                  />
                  {checkLPG ? (
                    <>
                      <Form.Label>For Bulk Storage</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="For Bulk Storage (in liters)"
                        value={scca1}
                        onChange={(e) => setScca1(e.target.value)}
                      />
                      <p>Storage Fee Amount: {resultScca1}</p>
                      <Form.Label>For Other than Bulk Storage</Form.Label>
                      <Form.Control
                        value={sccb1}
                        type="number"
                        placeholder="For non Storage (in liters)"
                        onChange={(e) => setSccb1(e.target.value)}
                      />
                      <p>Storage Fee Amount: {resultSccb1}</p>
                    </>
                  ) : null}

                  <strong>Other flammable gases in liter water capacity</strong>
                  <Form.Control
                    type="number"
                    placeholder="Enter value in liters"
                    value={scc2}
                    onChange={(e) => setScc2(e.target.value)}
                  />
                  <p>Storage Fee Amount: {Math.round(resultScc2)}.00</p>
                </Col>
              </>
            ) : null}
          </Row>
        </>
      ) : null}
    </>
  );
};

export default StorageClearanceFee;
