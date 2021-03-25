import Link from "next/link"
import { Button, Form, Row, Col} from 'react-bootstrap';
import { useState } from 'react';
import StationService from '../../service/station_service';
import Loader from "react-loader-spinner";
import swal from "sweetalert";
import Router from "next/router";

const AddStation = () => {
  const station = new StationService();
  const [name, setName] = useState("-")
  const [isBusy, setBusy] = useState(false);
  const [municipality, setMunicipality] = useState("-");
  const [province, setProvince] = useState("-");

  async function submitStation(e) {
    e.preventDefault();
    setBusy(true);
    const result = await station.createStation(name, municipality, province);
    setBusy(false);
    result
      ? swal("Created", "Successfully Added a Station", "success")
      : swal("Fail", "Something went wrong", "error");
    Router.push("/stations");
   } 

    return (
      <>
        <h1>Add Station</h1>
        <Row>
          <Col md={6}>
            <Form onSubmit={(e) => submitStation(e)}>
              <Form.Label>Fire Station Name: </Form.Label>
              <Form.Control
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Form.Label>Municipality: </Form.Label>
              <Form.Control
                onChange={(e) => setMunicipality(e.target.value)}
                required
              />
              <Form.Label>Province: </Form.Label>
              <Form.Control
                value={province}
                as="select"
                onChange={(e) => setProvince(e.target.value)}
                required
              >
                <option>-</option>
                <option>Northern Leyte</option>
                <option>Southern Leyte</option>
                <option>Biliran</option>
                <option>Eastern Samar</option>
                <option>Western Samar</option>
                <option>Northern Samar</option>
              </Form.Control>
              <div></div>
              <Button type="submit" variant="success">
                Add Station
              </Button>
              <Link href="/stations/">
                <Button variant="info">Cancel</Button>
              </Link>
            </Form>
          </Col>
        </Row>
        {isBusy ? (
          <div className="loading">
            <div className="innerLoading">
              <Loader
                type="Circles"
                color="rgb(255,252,0)"
                height={50}
                width={50}
              />
              <p>Please Wait . . .</p>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </>
    );
}

export default AddStation;