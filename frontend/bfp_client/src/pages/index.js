import Banner from "../components/Banner";
import { Row, Col, Container, Button } from "react-bootstrap";
import Login from "../components/Login";
import Head from "next/head";
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import Router from "next/router";
import Dashboard from "./dashboard";

export default function Index() {
  const { user } = useContext(UserContext);

  return (
    <>
      {user.username ? (
        <Dashboard />
      ) : (
        <>
          <Container>
            <Head>
              <title>BFP-R8</title>
            </Head>

            <Login />
          </Container>
        </>
      )}
    </>
  );
}
