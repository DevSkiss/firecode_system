import { useState, useEffect, useContext } from "react";
import { Form } from "react-bootstrap";

const Hotworks = (params) => {
  //Weilding and Hotworks
  const [ofwh, setOfwh] = useState(false);
  const [amountHotworks, setAmountHotworks] = useState(0);

  useEffect(() => {
    params.setHotworks(amountHotworks);
    params.setFireCodeOtherFees("628-BFP-11"); 

    return () => {
      params.setHotworks(0);
    };
  }, [amountHotworks]);

  useEffect(() => {
    if (ofwh === false) setAmountHotworks(0);
  }, [ofwh]);
  return (
    <Form.Group>
      <Form.Check
        type="checkbox"
        label="Other Fee: Weilding and other Hotworks"
        value={ofwh}
        onClick={(e) => setOfwh(e.target.checked)}
      />
      {ofwh ? (
        <div className="ml-5">
          <Form.Check
            type="radio"
            label="1-5 welding/oxy-acytylene"
            name="hotworks"
            id="oxyId"
            onClick={() => setAmountHotworks(500)}
          />
          <Form.Check
            type="radio"
            label="6-10 weilding/cutting machine"
            name="hotworks"
            id="tenCuttingId"
            onClick={() => setAmountHotworks(1000)}
          />
          <Form.Check
            type="radio"
            label="More than 10 welding/cutting machine"
            name="hotworks"
            id="moreTenCuttingId"
            onClick={() => setAmountHotworks(1500)}
          />
          <p>Amount Hotworks: {amountHotworks}</p>
        </div>
      ) : null}
    </Form.Group>
  );
};

export default Hotworks;
