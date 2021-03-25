import { useState, useEffect, useContext } from "react";
import { Row, Col, Button, Table, Form, Modal } from "react-bootstrap";
import { FireCodeConvert } from "../../../helper/firecode_convert";
import FireCodePremiumTax from "../fire_code_fees/fire_code_prem_tax";
import FireCodeRealtyTax from "../fire_code_fees/fire_code_realty";
import FireCodeSalesTax from "../fire_code_fees/fire_code_sales";
import InstallationClerance from "../fire_code_fees/installation_clearance";
import FsicAnnualCert from "../fire_code_fees/sched_fees_fines/fsic_annual_cert";
import FsicBusinessPermit from "../fire_code_fees/sched_fees_fines/fsic_business_permit";
import FsicCertOccupancy from "../fire_code_fees/sched_fees_fines/fsic_cert_occupancy";
import StorageClearanceFee from "../fire_code_fees/storage_clearance_fee";
import UserContext from "../../../context/UserContext";
import swal from "sweetalert";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import Loader from "react-loader-spinner";

export default function Assessment({ dataAll }) {
  const { user } = useContext(UserContext);
  const [isBusy, setBusy] = useState(false);
  const [occuSelected, setOccuSelected] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [payment, setPayment] = useState([]);
  const [confirm, setConfirm] = useState(false);
  const [client, setClient] = useState({
    id: "",
    owner: "",
    nameOfEstablishment: "",
    locationOfEstablishment: "",
    ownerAddress: "",
    nameContractor: "",
    authorizeRep: "",
    mobileNo: "",
    email: "",
    floorArea: "",
    floorAreaOccupied: "",
    noStorey: "",
    natureOfBusiness: "",
    bin: "",
    occupancyType: "",
    hazardType: "",
    businessType: "",
  });

  const [realtyTax, setRealtyTax] = useState({
    amount: 0,
    firecode: "",
  });
  const [premTax, setPremTax] = useState({
    amount: 0,
    firecode: "",
  });
  const [salesTax, setSalesTax] = useState({
    amount: 0,
    firecode: "",
  });
  const [storage, setStorage] = useState({
    amount: 0,
    firecode: "",
  });
  const [install, setInstall] = useState({
    amount: 0,
    firecode: "",
  });
  const [businessPermit, setBusinessPermit] = useState({
    amount: 0,
    firecode: "",
  });
  const [annualCert, setAnnualCert] = useState({
    amount: 0,
    firecode: "",
  });
  const [occupancyCert, setOccupancyCert] = useState({
    amount: 0,
    firecode: "",
  });

  //adding all
  useEffect(() => {
    setTotalAmount(
      annualCert.amount +
        businessPermit.amount +
        install.amount +
        storage.amount +
        realtyTax.amount +
        premTax.amount +
        salesTax.amount +
        occupancyCert.amount
    );
  }, [
    occupancyCert,
    annualCert,
    businessPermit,
    install,
    storage,
    realtyTax,
    premTax,
    salesTax,
  ]);

  const checkListPayment = [
    realtyTax,
    premTax,
    salesTax,
    storage,
    install,
    businessPermit,
    annualCert,
    occupancyCert,
  ];

  //show modal
  const handleShowModal = async (clientId) => {
    await fetch(`http://localhost:4000/api/clients/${clientId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setClient({
          id: data._id,
          owner: data.ownerName,
          ownerAddress: data.ownerAddress,
          nameContractor: data.nameOfContractor,
          authorizeRep: data.authorizedRepresentative,
          mobileNo: data.mobileNo,
          email: data.email,
          floorArea: data.floorArea,
          noOfStorey: data.noOfStorey,
          natureOfBusiness: data.natureOfBusiness,
          floorAreaOccupied: data.floorAreaOccupied,
          nameOfEstablishment: data.nameOfEstablishment,
          setLocationOfEstablishment: data.locationOfEstablishment,
          occupancyType: data.occupancyType,
          hazardType: data.hazardType,
          businessType: data.businessType,
          bin: data.bin,
        });
      });
    setShowModal(true);
  };

  //save to payment array
  function isPaymentSubmitted() {
    checkListPayment.filter((firecode) => {
      if (firecode.amount != 0) {
        setPayment((payment) => [
          ...payment,
          {
            paymentName: FireCodeConvert(firecode.firecode),
            firecode: firecode.firecode,
            amount: firecode.amount,
          },
        ]);
      }
    });
    setConfirm(true);
  }

  //submit collection
  const submitCollection = async () => {
    setBusy(true);
    if (occupancyCert.amount != 0) {
      await fetch("http://localhost:4000/api/txn/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: user.token,
        },
        body: JSON.stringify({
          clientId: client.id,
          clientName: client.owner,
          createdBy: user.id,
          station: user.station,
          province: user.province,
          municipality: user.municipality,
          txnName: "FSIC Application for Occupancy",
          totalAmount: Math.round(totalAmount),
          payments: payment,
        }),
      })
        .then((res) => {
          setBusy(false);
          handleModalClose();
          swal("Success", "Submitted Successfully to Collection", "success");
        });
      
    } else {
      
      await fetch("http://localhost:4000/api/txn/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          clientId: client.id,
          clientName: client.owner,
          createdBy: user.id,
          station: user.station,
          province: user.province,
          municipality: user.municipality,
          txnName: "FSIC Application for Business",
          totalAmount: Math.round(totalAmount),
          payments: payment,
        }),
      })
        .then((res) => {
          setBusy(false);
          handleModalClose();
          swal("Success", "Submitted Successfully to Collection", "success");
        });
    }
  };

  

  const handleModalClose = () => {
    setShowModal(false);
    setPayment([]);
    setConfirm(false);
    setClient({
      id: null,
      owner: null,
      ownerAddress: null,
      nameContractor: null,
      authorizeRep: null,
      mobileNo: null,
      email: null,
      floorArea: null,
      noOfStorey: null,
      natureOfBusiness: null,
      floorAreaOccupied: null,
      nameOfEstablishment: null,
      setLocationOfEstablishment: null,
      occupancyType: null,
      hazardType: null,
      businessType: null,
      bin: null,
    });
  };

  const columns = [
    {
      dataField: "ownerName",
      text: "Owner Name",
      sort: true,
    },
    {
      dataField: "ownerAddress",
      text: "Owner Address",
    },
    {
      dataField: "nameOfEstablishment",
      text: "Name Of Establishment",
    },
    {
      dataField: "locationOfEstablishment",
      text: "Location Of Establishment",
    },
    {
      dataField: "occupancyType",
      text: "Type Of Occupancy",
    },
  ];

  const { SearchBar } = Search;
  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      handleShowModal(row._id);
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
    // alwaysShowAllBtns: true, // Always show next and previous button
    // withFirstAndLast: false, // Hide the going to First and Last page button
    // hideSizePerPage: true, // Hide the sizePerPage dropdown always
    // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
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
        value: dataAll.length,
      },
    ], // A numeric array is also available. the purpose of above example is custom the text
  };

  return (
    <>
      <ToolkitProvider keyField="_id" data={dataAll} columns={columns} search>
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

      <Modal
        show={showModal}
        onHide={handleModalClose}
        centered
        size="xl"
        aria-labelledby="evalCatId"
        scrollable
      >
        <Modal.Header closeButton className="headercolor">
          <Col>
            {occuSelected ? (
              <Modal.Title className="headertitle">
                Fire Code Inspection Clearance for Occupancy
              </Modal.Title>
            ) : (
              <Modal.Title className="headertitle">
                Fire Code Inspection Clearance for Business
              </Modal.Title>
            )}
          </Col>

          {!confirm ? (
            <Button
              className="floating-button"
              onClick={() => {
                isPaymentSubmitted();
              }}
            >
              Confirm: P {Math.round(totalAmount)}.00
            </Button>
          ) : (
            <Button
              className="floating-button"
              onClick={() => {
                submitCollection();
              }}
            >
              Submit for Collection: P {Math.round(totalAmount)}.00
            </Button>
          )}
        </Modal.Header>
        <Modal.Body>
          <h3>Business Number: {client.bin} </h3>
          <Row>
            <Col>
              <p>
                <strong>Owners Name:</strong> {client.owner}
              </p>
              <p>
                <strong>Owner Address:</strong> {client.ownerAddress}
              </p>
              <p>
                <strong>Mobile Number:</strong> {client.mobileNo}
              </p>
              <p>
                <strong>Email:</strong> {client.email}
              </p>
              <p>
                <strong>Authorized Representative:</strong>{" "}
                {client.authorizeRep}
              </p>
              <p>
                <strong>Occupancy Type:</strong> {client.occupancyType}
              </p>
              <p>
                <strong>Nature of Business: </strong>
                {client.natureOfBusiness}
              </p>
            </Col>
            <Col>
              <p>
                <strong>Name of Establishment:</strong>{" "}
                {client.nameOfEstablishment}
              </p>
              <p>
                <strong>Location of Establishment:</strong>{" "}
                {client.locationOfEstablishment}
              </p>
              <p>
                <strong>Business Type:</strong> {client.businessType}
              </p>
              <p>
                <strong>Hazard Type:</strong> {client.hazardType}
              </p>
              <p>
                <strong>Floor Area:</strong> {client.floorArea}
              </p>
              <p>
                <strong>Occupied Floor Area:</strong> {client.floorAreaOccupied}
              </p>
              <p>
                <strong>Number of Storey:</strong> {client.noStorey}
              </p>
            </Col>
          </Row>
          <hr></hr>
          <Form onSubmit={(e) => submitAssessment(e)}>
            <Row className="mb-3">
              <Button
                variant="info"
                className="configBtn"
                onClick={() => {
                  setOccuSelected(true);
                  setTotalAmount(0);
                  setPayment([]);
                }}
              >
                Occupancy
              </Button>
              <Button
                variant="danger"
                className="configBtn"
                onClick={() => {
                  setOccuSelected(false);
                  setTotalAmount(0);
                  setPayment([]);
                }}
              >
                Business
              </Button>
            </Row>
            <Row className="justify-content-center">
              {occuSelected ? (
                <h5>FSIC for Occupancy Payments</h5>
              ) : (
                <h5>FSIC for Businness Payments</h5>
              )}
            </Row>

            {occuSelected ? (
              <>
                <FsicCertOccupancy setOccupancyCert={setOccupancyCert} />
              </>
            ) : (
              <>
                <FireCodeRealtyTax setRealtyTax={setRealtyTax} />
                <FireCodePremiumTax setPremTax={setPremTax} />
                <FireCodeSalesTax setSalesTax={setSalesTax} />
                <StorageClearanceFee setStorage={setStorage} />
                <InstallationClerance setInstall={setInstall} />
                <FsicBusinessPermit setBusinessPermit={setBusinessPermit} />
                <FsicAnnualCert setAnnualCert={setAnnualCert} />
              </>
            )}
          </Form>
        </Modal.Body>
      </Modal>
      {isBusy ? (
        <div className="loading">
          <div className="innerLoading">
            <Loader
              type="Circles"
              color="rgb(255,252,0)"
              height={50}
              width={50}
            />
            <p>Fetching Data . . .</p>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
