import { Button, Form, Row, Col, Modal, Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import styles from "./roles.module.css";

export default function AssignRoles() {
  //declaration of list of users and roles
  const [roles, setRoles] = useState([]);
  const [users, setUsers] = useState([]);
  const [role, setRole] = useState("");
  const [userRoleId, setUserRoleId] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [userId, setUserId] = useState("");
  const [selectedName, setSelectedName] = useState("");
  const [name, setName] = useState("");
  const [assignedRoles, setAssignedRoles] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const handleOpen = (role) => {
    setShowEditModal(true);
  };
  const handleClose = () => {
    setShowEditModal(false);
    setShowCreateModal(false);
    setSelectedRole("Choose Role");
    setSelectedName(" ");
  };

  //User Roles
  useEffect(() => {
    fetch("http://localhost:4000/api/user-role/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAssignedRoles(data);
      });
    getRoles();
  }, [showEditModal, showCreateModal]);

  async function getUser(userId) {
    await fetch(`http://localhost:4000/api/users/single/${userId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {});
  }

  //get all roles
  async function getRoles() {
    await fetch("http://localhost:4000/api/roles", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setRoles(data);
      });
  }

  //get users
  async function getUsers() {
    await fetch("http://localhost:4000/api/users/get-all-users", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }

  async function updateRole() {
    const res = await fetch("http://localhost:4000/api/user-role/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        userRoleId: userRoleId,
        role: selectedRole,
      }),
    });
    const result = await res.json();

    handleClose();
  }

  async function deleteRole() {
    const res = await fetch("http://localhost:4000/api/user-role/", {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        userRoleId: userRoleId,
      }),
    });
    const result = await res.json();
    handleClose();
  }

  async function createRole() {
    const res = await fetch("http://localhost:4000/api/user-role/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        userId: userId,
        name: selectedName,
        role: selectedRole,
      }),
    });
    const result = await res.json();

    handleClose();
  }

  const columns = [
    {
      dataField: "firstname",
      text: "First Name",
      sort: true,
    },
    {
      dataField: "lastname",
      text: "Last Name",
    },
    {
      dataField: "mobileNo",
      text: "Mobile Number",
    },
    {
      dataField: "rank",
      text: "Rank",
    },
    {
      dataField: "station",
      text: "Station",
    },
  ];

  const { SearchBar } = Search;
  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      setSelectedName(row.firstname + " " + row.lastname);
      setUserId(row._id);
    },
  };

  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing {from} to {to} of {size} Results
    </span>
  );

  const options = {
    paginationSize: 4,
    pageStartIndex: 1,
    firstPageText: "First",
    prePageText: "Back",
    nextPageText: "Next",
    lastPageText: "Last",
    nextPageTitle: "First page",
    prePageTitle: "Pre page",
    firstPageTitle: "Next page",
    lastPageTitle: "Last page",
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
    sizePerPageList: [
      {
        text: "5",
        value: 5,
      },
      {
        text: "10",
        value: 10,
      },
      {
        text: "20",
        value: 20,
      },
      {
        text: "50",
        value: 50,
      },
      {
        text: "All",
        value: users.length,
      },
    ], // A numeric array is also available. the purpose of above example is custom the text
  };

  const showTable = assignedRoles.map((role) => {
    return (
      <tr key={role._id}>
        <td>{role.name}</td>
        <td>{role.role}</td>
        <td>
          <Button
            variant="info"
            onClick={() => {
              handleOpen(role);
              setRole(role.role);
              setName(role.name);
              setUserRoleId(role._id);
            }}
          >
            Edit Role
          </Button>
        </td>
      </tr>
    );
  });

  const rolesOption = roles.map((role) => {
    return <option key={role._id}>{role.role}</option>;
  });

  return (
    <>
      <h1 className="text-center">Assigned Roles</h1>

      <Row className="justify-content-center">
        <Col md="8" lg="8">
          <Button
            onClick={() => {
              setShowCreateModal(true);
              getUsers();
            }}
          >
            Assign New Role
          </Button>
          <Table striped hover responsive="sm" className={styles.tablehover}>
            <thead>
              <tr>
                <th>User</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{showTable}</tbody>
          </Table>
        </Col>
      </Row>

      <Modal show={showEditModal} onHide={handleClose} size="md">
        <Modal.Header closeButton>
          <Modal.Title>Edit Role</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Current Role:</strong> {role}
          </p>
          <Form.Control
            as="select"
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
          >
            <option>Choose Role</option>
            {rolesOption}
          </Form.Control>
          <Row className="justify-content-end">
            <Button className="m-1" onClick={() => updateRole()}>
              Update Role
            </Button>

            <Button
              className="m-1"
              variant="danger"
              onClick={() => deleteRole()}
            >
              Delete Role
            </Button>
          </Row>
        </Modal.Body>
      </Modal>

      <Modal
        show={showCreateModal}
        onHide={handleClose}
        scrollable
        size="xl"
        className="p-5"
      >
        <Modal.Header closeButton>
          <Modal.Title>Assign New Role</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <strong>Search user:</strong>
          <div>
            <ToolkitProvider
              keyField="_id"
              data={users}
              columns={columns}
              search
            >
              {(props) => (
                <div>
                  <SearchBar {...props.searchProps} />
                  <BootstrapTable
                    {...props.baseProps}
                    rowEvents={rowEvents}
                    bootstrap4
                    pagination={paginationFactory(options)}
                  />
                </div>
              )}
            </ToolkitProvider>
          </div>

          <div>
            <p>
              <strong>Selected User:</strong> {selectedName}
            </p>
            <strong className="ml-1">Select Role</strong>
            <Form.Control
              className={styles.roles}
              as="select"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              <option>Choose Role</option>
              {rolesOption}
            </Form.Control>
          </div>

          <Row className="justify-content-center">
            <Button onClick={() => createRole()}>Assign Role</Button>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}
