import { Button, Modal, Form, Table, Row, Col} from 'react-bootstrap';
import Link from "next/link";
import { useState, useRef, useEffect } from 'react';
import StationService from '../../service/station_service';
import style from './style.module.css';
import Loader from "react-loader-spinner";
import Router from "next/router";

const StationsView = () => {
    const station = new StationService();
    const [data, setData] = useState([]);
    const [isBusy, setBusy] = useState(false);
    const [showModal, setShowModal] = useState(false)
    const [id, setId] = useState("");
    const [name, setName] = useState("")
    const [mun, setMun] = useState("")
    const [prov, setProv] = useState("")
    const handleClose = () => {
        setShowModal(false);
    }

    useEffect(() => {
        getAllStations();
    }, [showModal]);
    
    const getSingleStation = async (stationId) => {
        setBusy(true);
        const res = await station.getSingleStation(stationId);
        setId(res._id);
        setName(res.name);
        setMun(res.municipality);
        setProv(res.province);
        setBusy(false);
        setShowModal(true);
    }

    const getAllStations = async () => {
        const res = await station.getAllStations();
        setData(res);
        setBusy(false);
    }
    
    const deleteStation = async(stationId) => {
        const res = await station.deleteSingleStation(stationId);
        getAllStations();
    }
  
    const _stations = data.sort((a, b) =>
      a.name.localeCompare(b.name)
    );  

    const showTable = _stations.map((station) => {
      return (
        <tr key={station._id}>
          <td>{station.name}</td>
          <td>{station.municipality}</td>
          <td>{station.province}</td>
          <td>
            <Button
              variant="success"
              onClick={() => getSingleStation(station._id)}
            >
              View
            </Button>
            <Button variant="danger" onClick={() => deleteStation(station._id)}>Delete</Button>
          </td>
        </tr>
      );
    });
    
    async function updateStation(e) {
            
        e.preventDefault();
        const res = await station.updateSingleStation(id, name, mun, prov);
        handleClose();
      
    }

    return (
      <>
        <Row >
          <Col className="d-flex justify-content-between">
            <h1>Station View</h1>
            <Link href="/stations/add_station">
              <Button variant="info" bsPrefix className="addButton mr-2">Add New Station</Button>
            </Link>
          </Col>
        </Row>

        <Modal
          show={showModal}
          onHide={handleClose}
          centered
          className={style.modal}
          size="lg"
          aria-labelledby="collectionId"
        >
          <Modal.Header className="headercolor" closeButton>
            <Modal.Title>Fire Station</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => updateStation(e)}>
              <Form.Label>Fire Station</Form.Label>
              <Form.Control
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Label>Municipality</Form.Label>
              <Form.Control
                value={mun}
                onChange={(e) => setMun(e.target.value)}
              />
              <Form.Label>Province</Form.Label>
              <Form.Control
                value={prov}
                onChange={(e) => setProv(e.target.value)}
              />
              <Button variant="info" type="submit">
                Update
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
        <Table striped bordered hover responsive="sm" variant="dark">
          <thead>
            <tr>
              <th>Fire Station</th>
              <th>Municipality</th>
              <th>Province</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{showTable}</tbody>
        </Table>
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
          <></>
        )}
      </>
    );
};

export default StationsView;