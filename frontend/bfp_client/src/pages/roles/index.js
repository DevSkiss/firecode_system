import { Button, Table, Modal, Row, Col, Form } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function Roles() {
  const [roles, setRoles] = useState([]);
  const [role, setRole] = useState("");
  const [roleId, setRoleId] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const handleOpen = (roleId) => {
    setShowEditModal(true);
   
  };
  const handleClose = () => {
    setShowEditModal(false);
    setShowCreateModal(false);
  };
  //get all roles
  useEffect(() => {
    fetch("http://localhost:4000/api/roles", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setRoles(data);
      });
  }, [showEditModal, showCreateModal]);

  const showTable = roles.map((role) => {
    return (
      <tr key={role._id}>
        <td>{role.role}</td>
        <td>
          <Button
            variant="primary"
            onClick={(e) => {
              handleOpen(role._id);
              setRole(role.role);
              setRoleId(role._id);
            }}
          >
            Edit Role
          </Button>
        </td>
      </tr>
    );
  });

  async function updateRole() {
    const res = await fetch("http://localhost:4000/api/roles/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        roleId: roleId,
        role: role,
      }),
    });
    const result = await res.json();
    handleClose();
  }

  async function createRole() {
    const res = await fetch("http://localhost:4000/api/roles/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        role: role,
      }),
    });
    const result = await res.json();
    handleClose();
  }

  async function deleteRole() {
    const res = await fetch("http://localhost:4000/api/roles/", {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        roleId: roleId,
      }),
    });
    const result = await res.json();
    
    handleClose();
  }

  return (
    <>
      <h1>Manage Roles </h1>
      <Button onClick={() => setShowCreateModal(true)}>Add Role</Button>
      <Table striped bordered hover responsive="sm" bg="dark" variant="dark">
        <thead>
          <tr>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{showTable}</tbody>
      </Table>
      <Modal show={showEditModal} onHide={handleClose} size="md">
        <Modal.Header closeButton>
          <Modal.Title>Edit Role</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
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

      <Modal show={showCreateModal} onHide={handleClose} size="md">
        <Modal.Header closeButton>
          <Modal.Title>Create Role</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            placeholder="Type here"
            onChange={(e) => setRole(e.target.value)}
          />
          <Button onClick={() => createRole()}>Create Role</Button>
        </Modal.Body>
      </Modal>
    </>
  );
}
