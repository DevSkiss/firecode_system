import { Form, Button, Card, Row, Col, Image } from "react-bootstrap";
import { useState, useContext, useRef } from "react";
import Router from "next/router";
import UserContext from "../../context/UserContext";
import swal from "sweetalert";
import styles from "./login.module.css";
import Banner from "./Banner";
import Loader from "react-loader-spinner";

export default function Login() {

  const [isBusy, setIsBusy] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const passwordRef = useRef();
 

  async function authenticate (e) {
    e.preventDefault();
    setIsBusy(true);
    await fetch("http://localhost:4000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIsBusy(false);
        if (data.access) {
          localStorage.setItem("token", data.access);
          fetch("http://localhost:4000/api/users/details", {
            headers: {
              Authorization: `Bearer ${data.access}`,
            },
          })
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              setUser({
                id: data._id,
                rank: data.rank,
                username: data.username,
                fullName: data.firstname + " " + data.lastname,
                station: data.station,
                province: data.province,
                municipality: data.municipality,
                token: `Bearer ${localStorage.getItem("token")}`,
              });
              Router.push("/dashboard");
            });
        } else {
          swal("Login Failed", "Incorrect Username and Password", "error");
          setPassword("");
          passwordRef.current.focus();
        }
      });
    
  }

  if(isBusy) return (
    <div className="loading">
      <div className="innerLoading">
        <Loader type="Circles" color="rgb(255,252,0)" height={50} width={50} />
        <p>Please Wait . . .</p>
      </div>
    </div>
  );

  return (
    <>
      <Row className={styles.customrow}>
        <Card className={styles.customcard}>
          <Col>
            <div className={styles.image}>
              <Image src="bfp.png" className={styles.bfplogo} roundedCircle />
            </div>

            <Form
              onSubmit={(e) => authenticate(e)}
              className={styles.formFormatter}
            >
              <Form.Group controlId="usernameId" className={styles.formGroup}>
                <Form.Label className={styles.username}>Username</Form.Label>
                <Form.Control
                  className={styles.formControl}
                  type="text"
                  value={username}
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="passwordId" className={styles.formGroup}>
                <Form.Label className={styles.password}>Password</Form.Label>
                <Form.Control
                  className={styles.formControl}
                  ref={passwordRef}
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <div className={styles.buttonformatter}>
                <Button bsPrefix type="submit" className={styles.custombutton}>
                  Login
                </Button>
              </div>
            </Form>
          </Col>
        </Card>
      </Row>
    </>
  );
}
