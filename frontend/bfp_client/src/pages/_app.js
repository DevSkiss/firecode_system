import "../../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-sidebar-ui/dist/index.css";
import Navbar from "../../src/components/Navbar";
import { Container } from "react-bootstrap";
import UserContext, { UserProvider } from "../../context/UserContext";
import { RoleProvider } from "../../context/RoleContext";
import { useState, useEffect } from "react";
import Head from "next/head";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import RoleService from "../../services/role_service";
import AuthenticationService from "../../services/authentication";

export default function Bfpr8({ Component, pageProps }) {
  const roleService = new RoleService();
  const authService = new AuthenticationService();

  const [roles, setRoles] = useState([]);
  const [user, setUser] = useState({
    username: null,
    fullName: null,
    token: null,
    id: null,
    rank: null,
    station: null,
    municipality: null,
    province: null,
    isAdmin: null,
  });

  useEffect(() => {
    checkUser("superadmin");
    const result = fetch("http://localhost:4000/api/users/details", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data._id) {
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
          getUserRoles(data._id);
        } else {
          setUser({
            id: null,
          });
        }
      });
  }, [setUser]);

  async function checkUser(user) {
    const result = await authService.checkUsername(user);
    if (result) {
      console.log(await result);
    } else {
      const createResult = await authService.createUser(
        user,
        user,
        user,
        "secret",
        "Rank",
        "Station",
        "Municipality",
        "Province",
        "Address",
        "09123456789"
      );
      if (createResult) console.log(`account created for ${await user}`);
    }
  }

  const unsetUser = () => {
    localStorage.clear();
    setUser({ username: null });
  };

  async function getUserRoles(userId) {
    setRoles(await roleService.getRolesByUserId(userId));
  }

  return (
    <>
      <UserProvider value={{ user, setUser, unsetUser }}>
        <RoleProvider value={{ roles }}>
          <Head>
            <title>BFP VIII</title>
          </Head>
          <Container fluid bsPrefix>
            <Navbar />
            <Component {...pageProps} />
          </Container>
        </RoleProvider>
      </UserProvider>
    </>
  );
}
