import { Row, Col, Table, Modal, Button, Form } from "react-bootstrap";
import { useState, useEffect, Fragment } from 'react';
import styles from "./style.module.css";
import Link from 'next/link'
import AuthenticationService from '../../../services/authentication';
import Loader from "react-loader-spinner";
import swal from 'sweetalert'
import Router from 'next/router'
import StationService from '../../service/station_service';

const AddNewOfficer = () => {
  const auth = new AuthenticationService();
  const stat = new StationService();
  const [isBusy, setBusy] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("bfpr8");
  const [rank, setRank] = useState("-");
  const [station, setStation] = useState("");
    const [province, setProvince] = useState("-");
    const [municipality, setMunicipality] = useState("-");
  const [address, setAddress] = useState("");
  const [mobileNo, setMobileNo] = useState("")

  const [stations, setStations] = useState([]);


  useEffect(() => {
    getStations();
  },[])

  const getStations = async() => {
    const result = await stat.getAllStations();
    
    setStations(result);
  }

  
  const _muni = stations.sort((a, b) =>
    a.municipality.localeCompare(b.municipality)
  );  
  const municipalityList = _muni.map((muni) => {
    return <option key={muni._id}>{muni.municipality}</option>;
  });
  
 const _stations = stations.sort((a, b) =>
   a.municipality.localeCompare(b.municipality)
 );  
  const stationList = _stations.map((fs) => {
    return <option key={fs._id}>{fs.name}</option>;
  });

  async function addNewUser(e) {
    e.preventDefault();
    setBusy(true);
    let result = await auth.createUser(firstname, lastname, username, password, rank, station, municipality, province, address, mobileNo);
    setBusy(false);
    result ? swal("Created", "Successfully Added a Officer", "success") : swal("Fail", "Something went wrong", "error");
    Router.push('/officers');
  };


  if (isBusy)
    return (
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
    );
  
    return (
      <>
        <Form onSubmit={(e) => addNewUser(e)}>
          <Form.Group>
            <Row>
              <Col md={4}>
                <Form.Label className={styles.textlabel}>First name</Form.Label>
                <Form.Control
                  id="firstname"
                  type="text"
                  placeholder="Firstname"
                  className={styles.textfield}
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                />
                <Form.Label className={styles.textlabel}>Last name</Form.Label>
                <Form.Control
                  id="lastname"
                  placeholder="Lastname"
                  type="text"
                  className={styles.textfield}
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />
                <Form.Label className={styles.textlabel}>Username</Form.Label>
                <Form.Control
                  id="username"
                  placeholder="Username"
                  type="text"
                  className={styles.textfield}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <Form.Label className={styles.textlabel}>Rank</Form.Label>
                <Form.Control
                  id="rank"
                  as="select"
                  id="rank"
                  onChange={(e) => setRank(e.target.value)}
                  required
                >
                  <option>-</option>
                  <option>Fire Officer I</option>
                  <option>Fire Officer II</option>
                  <option>Fire Officer III</option>
                  <option>Senior Fire Officer I</option>
                  <option>Senior Fire Officer II</option>
                  <option>Senior Fire Officer IIII</option>
                </Form.Control>
                <Form.Label className={styles.textlabel}>Province</Form.Label>
                <Form.Control
                  className="mr-12"
                  as="select"
                  id="station"
                  onChange={(e) => setProvince(e.target.value)}
                  required
                >
                  <option>-</option>
                  <option>Tacloban City</option>
                  <option>Ormoc City</option>
                  <option>Biliran</option>
                  <option>Northern Leyte</option>
                  <option>Southern Leyte</option>
                  <option>Eastern Samar</option>
                  <option>Western Samar</option>
                  <option>Northern Samar</option>
                </Form.Control>
                <Form.Label className={styles.textlabel}>
                  Municipality
                </Form.Label>
                <Form.Control
                  className="mr-12"
                  as="select"
                  disabled={province === "-" ? true : false}
                  id="station"
                  onChange={(e) => setMunicipality(e.target.value)}
                  required
                >
                  <option>-</option>
                  {municipalityList}
                </Form.Control>
                <Form.Label className={styles.textlabel}>Station</Form.Label>
                <Form.Control
                  className="mr-12"
                  as="select"
                  id="station"
                  disabled={municipality === "-" ? true : false}
                  onChange={(e) => setStation(e.target.value)}
                  required
                >
                  <option>-</option>
                  {stationList}
                </Form.Control>
                <Form.Label className={styles.textlabel}>
                  Home Address
                </Form.Label>
                <Form.Control
                  id="address"
                  placeholder="Home Address"
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  className={styles.textfield}
                  required
                />
                <Form.Label className={styles.textlabel}>
                  Contact Number
                </Form.Label>
                <Form.Control
                  id="mobileno"
                  type="number"
                  onChange={(e) => setMobileNo(e.target.value)}
                  placeholder="Contact Number "
                  className={styles.textfield}
                  required
                />
              </Col>
            </Row>
          </Form.Group>
          <Button variant="success" type="submit">
            Add New Officer
          </Button>
          <Link href="/officers">
            <Button variant="danger">Cancel</Button>
          </Link>
        </Form>
      </>
    );
}

export default AddNewOfficer;