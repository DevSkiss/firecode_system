import { useState, useEffect, useContext } from "react";
import { Modal, Button, Form, Row, Col, Table } from "react-bootstrap";
import Router from "next/router";
import UserContext from "../../../context/UserContext";
import { FireCodeConvert } from "../../../helper/firecode_convert";
import swal from "sweetalert";
import FireCodeConstruction from "../fire_code_fees/fire_code_construction";
import FsecFilingFee from "../fire_code_fees/other_fees_list/fsec_filing_fee";
import Hotworks from "../fire_code_fees/other_fees_list/hotworks";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import Loader from "react-loader-spinner";

export default function Assessment({ dataAll }) {
  const { user } = useContext(UserContext);
  const [clientId, setClientId] = useState("");
  const [owner, setOwner] = useState("");
  const [nameOfEstablishment, setNameOfEstablishment] = useState("");
  const [locationOfEstablishment, setLocationOfEstablishment] = useState("");
  const [ownerAddress, setOwnerAddress] = useState("");
  const [nameContractor, setNameContractor] = useState("");
  const [authorizeRep, setAuthorizeRep] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [floorArea, setFloorArea] = useState("");
  const [floorAreaOccupied, setFloorAreaOccupied] = useState("");
  const [noStorey, setNoStorey] = useState("");
  const [natureOfBusiness, setNatureOfBusiness] = useState("");
  const [bin, setBin] = useState("");
  const [occupancyType, setOccupancyType] = useState("");
  const [hazardType, setHazardType] = useState("");
  const [businessType, setBusinessType] = useState("");

  //checking out
  const [payment, setPayment] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  //filtering clients
  const [searchClient, setSearchClient] = useState("");
  //const [clientActiveRows, setClientActiveRows] = useState([]);

  let filteredClients = [];

  //firecodefees
  const [constructionTax, setConstructionTax] = useState(0);
  const [fireCodeConstructionTax, setFireCodeConstructionTax] = useState("");
  const [filingFee, setFilingFee] = useState(0);
  const [hotworks, setHotworks] = useState(0);
  const [fireCodeOtherFees, setFireCodeOtherFees] = useState("");

  const [confirm, setConfirm] = useState(false);

  const [isBusy, setBusy] = useState(false);

  //add all
  useEffect(() => {
    setTotalAmount(constructionTax + filingFee + hotworks);
  }, [constructionTax, filingFee, hotworks]);

  //Modal
  const [showModal, setShowModal] = useState(false);
  const handleModalShow = async (cid) => {
    setBusy(true);
    await fetch(`http://localhost:4000/api/clients/${cid}`, {
      headers: {
        Authorization: user.token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
       
        setClientId(data._id);
        setOwner(data.ownerName);
        setOwnerAddress(data.ownerAddress);
        setNameContractor(data.nameOfContractor);
        setAuthorizeRep(data.authorizedRepresentative);
        setMobileNo(data.mobileNo);
        setEmail(data.email);
        setFloorArea(data.floorArea);
        setNoStorey(data.noOfStorey);
        setNatureOfBusiness(data.natureOfBusiness);
        setFloorAreaOccupied(data.floorAreaOccupied);
        setNameOfEstablishment(data.nameOfEstablishment);
        setLocationOfEstablishment(data.locationOfEstablishment);
        setOccupancyType(data.occupancyType);
        setHazardType(data.hazardType);
        setBusinessType(data.businessType);
        setBin(data.bin);
      });
    setBusy(false)
    setShowModal(true);
  };
  const handleCloseModal = () => {
    clearData();
    setShowModal(false);
  };

  function clearData() {
    setOwner("");
    setOwnerAddress("");
    setNameContractor("");
    setAuthorizeRep("");
    setMobileNo("");
    setFloorArea("");
    setNoStorey("");
    setNatureOfBusiness("");
    setFloorAreaOccupied("");
    setNameOfEstablishment("");
    setLocationOfEstablishment("");
    setOccupancyType("");
    setHazardType("");
    setBusinessType("");
    setBin("");
    setPayment([]);
    setConfirm(false);
  }

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

  //payment array
  function isPaymentSubmitted() {
    if (constructionTax != 0) {
      setPayment((payment) => [
        ...payment,
        {
          paymentName: FireCodeConvert(fireCodeConstructionTax),
          firecode: fireCodeConstructionTax,
          amount: constructionTax,
        },
      ]);
    }

    if (filingFee != 0) {
      setPayment((payment) => [
        ...payment,
        {
          paymentName: "Filing Fee for Fire Safety Evaluation Clearance ",
          firecode: fireCodeOtherFees,
          amount: filingFee,
        },
      ]);
    }

    if (hotworks != 0) {
      setPayment((payment) => [
        ...payment,
        {
          paymentName: "Welding, Cutting and Other Hotworks",
          firecode: fireCodeOtherFees,
          amount: hotworks,
        },
      ]);
    }
  }
  const confirmData = () => {

    isPaymentSubmitted();
    setConfirm(true);
  };
  const submitCollection = async() => {
    setBusy(true);
    const res = await fetch("http://localhost:4000/api/txn/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        clientId: clientId,
        clientName: owner,
        createdBy: user.id,
        station: user.station,
        province: user.province,
        municipality: user.municipality,
        txnName: "FSEC Application",
        totalAmount: Math.round(totalAmount),
        payments: payment,
      }),
    });
    setBusy(false);
    if (res.json() != null) {
       swal("Success", "Submitted Successfully to Collection", "success");
    } else {
      swal("Failed", "Something went wrong", "error");
    }
     
  };

  const { SearchBar } = Search;

  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      handleModalShow(row._id);
    },
  };

  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing {from} to {to} of {size} Clients
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
      <ToolkitProvider
        keyField="_id"
        data={dataAll}
        columns={columns}
        search
      >
        {(props) => (
          <div>
            <Row>
              <Col className="d-flex justify-content-between">
                <SearchBar {...props.searchProps} />
                <Button
                  variant="success"
                  onClick={() => Router.push("/fsec/create")}
                  className="my-3 ml-2 addButton"
                >
                  Add New
                </Button>
              </Col>
            </Row>

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
        onHide={handleCloseModal}
        centered
        scrollable
        size="xl"
        aria-labelledby="collectionId"
      >
        <Modal.Header closeButton className="headercolor">
          <Col>
            <Modal.Title className="mb-10 headertitle">
              Fire Safety Evaluation Clearance - Assessment{" "}
            </Modal.Title>
          </Col>
          {!confirm ? (
            <Button
              className="floating-button"
              onClick={() => {
                confirmData();
              }}
            >
              Confirm: P {Math.round(totalAmount)}.00
            </Button>
          ) : (
            <Button
              className="floating-button"
              onClick={() => {
                submitCollection();
                handleCloseModal();
              }}
            >
              Submit for Collection: P {Math.round(totalAmount)}.00
            </Button>
          )}
        </Modal.Header>
        <Modal.Body>
          <h3>Business Number: {bin} </h3>
          <Row>
            <Col>
              <p>
                <strong>Owners Name:</strong> {owner}
              </p>
              <p>
                <strong>Owner Address:</strong> {ownerAddress}
              </p>
              <p>
                <strong>Mobile Number:</strong> {mobileNo}
              </p>
              <p>
                <strong>Email:</strong> {email}
              </p>
              <p>
                <strong>Authorized Representative:</strong> {authorizeRep}
              </p>
              <p>
                <strong>Occupancy Type:</strong> {occupancyType}
              </p>
              <p>
                <strong>Nature of Business: </strong>
                {natureOfBusiness}
              </p>
            </Col>
            <Col>
              <p>
                <strong>Name of Establishment:</strong> {nameOfEstablishment}
              </p>
              <p>
                <strong>Location of Establishment:</strong>{" "}
                {locationOfEstablishment}
              </p>
              <p>
                <strong>Business Type:</strong> {businessType}
              </p>
              <p>
                <strong>Hazard Type:</strong> {hazardType}
              </p>
              <p>
                <strong>Floor Area:</strong> {floorArea}
              </p>
              <p>
                <strong>Occupied Floor Area:</strong> {floorAreaOccupied}
              </p>
              <p>
                <strong>Number of Storey:</strong> {noStorey}
              </p>
            </Col>
          </Row>
          <hr></hr>
          <h3 className="text-center">FSEC Checklist</h3>
          <Form>
            <FireCodeConstruction
              setConstructionTax={setConstructionTax}
              setFireCodeConstructionTax={setFireCodeConstructionTax}
            />
            <FsecFilingFee
              setFilingFee={setFilingFee}
              setFireCodeOtherFees={setFireCodeOtherFees}
            />
            <Hotworks
              setHotworks={setHotworks}
              setFireCodeOtherFees={setFireCodeOtherFees}
            />
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
