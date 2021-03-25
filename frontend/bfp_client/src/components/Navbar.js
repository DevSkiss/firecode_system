import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import styles from "./navbar-style.module.css";

export default function NavBar() {
  const { user } = useContext(UserContext);
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      {user.username ? (
        <Navbar bg="dark" variant="dark" expand="lg" className={styles.navbar}>
          <Navbar.Brand href="/">Bureau of Fire Protection R8</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto ">
              <Link href="/dashboard">
                <a className="nav-link">Dashboard</a>
              </Link>
              <NavDropdown
                title="Clearances"
                id="collasible-nav-dropdown"
                className={styles.dropdown}
              >
                <Link href="/fsec">
                  <NavDropdown.Item href="/fsec">FSEC</NavDropdown.Item>
                </Link>
                <Link href="/fsic">
                  <NavDropdown.Item href="/fsic">FSIC</NavDropdown.Item>
                </Link>
                <Link href="/ofc">
                  <NavDropdown.Item href="/ofc">
                    Other Clearances
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>

              <NavDropdown
                title="Admin"
                id="collasible-nav-dropdown"
                className={styles.dropdown}
              >
                <Link href="/roles/assign_roles">
                  <NavDropdown.Item href="/roles/assign_roles">
                    Assign Roles
                  </NavDropdown.Item>
                </Link>
                <Link href="/officers">
                  <NavDropdown.Item href="/officers">
                    Manage Officers
                  </NavDropdown.Item>
                </Link>
                <Link href="/stations">
                  <NavDropdown.Item href="/stations">
                    Manage Stations
                  </NavDropdown.Item>
                </Link>
                <Link href="/transactions">
                  <NavDropdown.Item href="/transactions">
                    Manage Transactions
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
              <Link href="/reports">
                <a className="nav-link">Reports</a>
              </Link>
              <Link href="/deposits">
                <a className="nav-link">Deposit</a>
              </Link>
              <Link href="/export">
                <a className="nav-link">Export</a>
              </Link>
              <NavDropdown
                title="User"
                id="collasible-nav-dropdown"
                className={styles.dropdown}
              >
                <Link href="/profile">
                  <NavDropdown.Item href="/profile">
                    View Profile
                  </NavDropdown.Item>
                </Link>
                <Link href="/profile/change_password">
                  <NavDropdown.Item href="/profile/change_password">
                    Change Password
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
              <Link href="/logout">
                <a className="nav-link" role="button">
                  Logout
                </a>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      ) : null}
    </>
  );
}
