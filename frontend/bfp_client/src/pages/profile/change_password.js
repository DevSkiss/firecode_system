import { Form, Row, Table, Modal, Col, Button } from "react-bootstrap";
import styles from "./style.module.css";
import Link from 'next/link';
import { useState, useEffect } from 'react'
import UserService from '../../../services/user_service'
import swal from "sweetalert";
import Loader from "react-loader-spinner";
import Router from 'next/router'

const ChangePassword = () => {

  const user = new UserService();
  const [isBusy, setBusy] = useState(false);
  const [username, setUsername] = useState("")
  const [currPass, setCurrPass] = useState("")
  const [newPass, setNewPass] = useState("")
  const [confirmPass, setConfirmPass] = useState("")
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    getUserDetail();
  },[newPass, confirmPass])

  const getUserDetail = async () => {
    const data = await user.getUserDetails();
    setUsername(data.username);
  }



  async function changePassword(e){
    e.preventDefault();

    if (newPass === confirmPass) {
      setShowError(false);
      setBusy(true)
      const result = await user.changePassword(username, currPass, newPass);
      setBusy(false);
      if (result) {
        swal("Success", "You have change password successfully", "success")
        Router.push('/profile')
      } else {
        swal("Wrong Password", "Please check your password", "warning");
      }
      
    } else {
      setShowError(true);
      swal("Fail", "New Password is not matched", "error");
    }
  }

  const IncorrectPassword = () => {
    return <p className={styles.notMatched}>Password is not match</p>;
  }

  return (
    <>
      <h1>Change Password</h1>
      <Form onSubmit={(e) => changePassword(e)}>
        <Row>
          <Col md={4}>
            <Form.Label className={styles.textlabel}>
              Previous Password
            </Form.Label>
            <Form.Control
              placeholder="Previous Password"
              className={styles.textfield}
              onChange={(e) => setCurrPass(e.target.value)}
              required
            />
            <Form.Label className={styles.textlabel}>New Password</Form.Label>
            <Form.Control
              placeholder="New Password"
              className={styles.textfield}
              onChange={(e) => setNewPass(e.target.value)}
              required
            />
            <Form.Label className={styles.textlabel}>
              Confirm New Password
            </Form.Label>
            <Form.Control
              placeholder="Confirm New Password"
              className={styles.textfield}
              onChange={(e) => setConfirmPass(e.target.value)}
              required
            />
            {showError ? <IncorrectPassword /> : <div></div>}
          </Col>
        </Row>
        <Button variant="success" type="submit">
          Update Password
        </Button>

        <Link href="/profile">
          <Button variant="danger">Cancel</Button>
        </Link>
      </Form>
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

export default ChangePassword;
