import Link from "next/link";
import Router from 'next/router';
import { Form, Row, Table, Modal, Col, Button } from "react-bootstrap";
import styles from "./style.module.css";
import UserService from '../../../services/user_service'
import { useState, useEffect } from 'react';
import swal from "sweetalert";

const UpdateProfile = () => {
  const user = new UserService();
  const [isBusy, setBusy] = useState(false);
  const [rank, setRank] = useState("");
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [mobileNo, setMobileNo] = useState("")
  const [station, setStation] = useState("")
  const [municipality, setMunicipality] = useState("")
  const [province, setProvince] = useState("")
  const [address, setAddress] = useState("")

  useEffect(() => {
    getUserDetail();
  },[])

  const getUserDetail = async () => {
    let res = await user.getUserDetails();
    setRank(res.rank);
    setFirstname(res.firstname);
    setLastname(res.lastname);
    setMobileNo(res.mobileNo);
    setStation(res.station);
    setMunicipality(res.municipality);
    setProvince(res.province);
    setAddress(res.address);
  }

  const updateUserDetail = async () => {
    let res = await user.updateUserDetail(rank, firstname, lastname, mobileNo, station, municipality, province, address);
    Router.push('/profile');
  }

  return (
    <>
      <h1>Update Profile</h1>
      <Form className={styles.form}>
        <Form.Group>
          <Row>
            <Col md={6}>
              <Form.Label className={styles.textlabel}>First name</Form.Label>
              <Form.Control
                placeholder="Firstname"
                className={styles.textfield}
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
              <Form.Label className={styles.textlabel}>Last name</Form.Label>
              <Form.Control
                placeholder="Lastname"
                className={styles.textfield}
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
              <Form.Label className={styles.textlabel}>Rank</Form.Label>
              <Form.Control
                placeholder="Rank"
                className={styles.textfield}
                value={rank}
                onChange={(e) => setRank(e.target.value)}
              />
              <Form.Label className={styles.textlabel}>
                Contact Number
              </Form.Label>
              <Form.Control
                placeholder="Contact Number "
                className={styles.textfield}
                disabled={true}
                value={mobileNo}
                onChange={(e) => setMobileNo(e.target.value)}
              />
              <Form.Label className={styles.textlabel}>Station</Form.Label>
              <Form.Control
                placeholder="Station"
                className={styles.textfield}
                value={station}
                onChange={(e) => setStation(e.target.value)}
              />
              <Form.Label className={styles.textlabel}>Municipality</Form.Label>
              <Form.Control
                placeholder="Municipality"
                className={styles.textfield}
                value={municipality}
                onChange={(e) => setMunicipality(e.target.value)}
              />
              <Form.Label className={styles.textlabel}>Province</Form.Label>
              <Form.Control
                placeholder="Province"
                className={styles.textfield}
                value={province}
                onChange={(e) => setProvince(e.target.value)}
              />
              <Form.Label className={styles.textlabel}>Home Address</Form.Label>
              <Form.Control
                placeholder="Home Address"
                className={styles.textfield}
                value={address}
                disabled={true}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Col>
          </Row>
        </Form.Group>
      </Form>
      <Button variant="success" onClick={() => updateUserDetail()}>
        Update Profile
      </Button>
      <Link href="/profile">
        <Button variant="danger">Cancel</Button>
      </Link>
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
};

export default UpdateProfile;
