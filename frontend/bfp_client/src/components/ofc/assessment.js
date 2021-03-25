import { useState, useEffect, useContext, Fragment } from "react";
import { Row, Col, Button, Table, Modal } from "react-bootstrap";
import UserContext from "../../../context/UserContext";
import OtherContext, { OtherProvider } from "../../../context/OtherContext";
import swal from "sweetalert";
import Hotworks from "./ofc_modals/hotworks/index";
import FireDrill from "./ofc_modals/fire_drill";
import CFCFsicFsec from "./ofc_modals/cfc_fsic_fsec";
import ConveyanceHmcc from "./ofc_modals/conveyance_hmcc";
import FireClearance from "./ofc_modals/fire_clearance";
import FireworksDisplay from "./ofc_modals/firework_display";
import FumigationFogginng from "./ofc_modals/fumigation_fogging";
import InstallAfss from "./ofc_modals/install_afss";
import InstallBse from "./ofc_modals/install_bse";
import InstallClst from "./ofc_modals/install_clst";
import InstallElectric from "./ofc_modals/install_electric";
import InstallKfss from "./ofc_modals/install_kfss";
import InstallLpgas from "./ofc_modals/install_lpgas";
import OperationDpm from "./ofc_modals/operation_dpm";
import StorageFcl from "./ofc_modals/storage_fcl";
import Protest from './ofc_modals/protest_fee';
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import AdminFines from "../../components/ofc/ofc_modals/admin_fines/admin_fines";


export default function Assessment({ dataAll }) {
  const [showModal, setShowModal] = useState(false);
  const [isBusy, setBusy] = useState(false);
  const [selectedModal, setShowSelected] = useState({
    modal1: false,
    title1: "",
    modal2: false,
    title2: "",
    modal3: false,
    title3: "",
    modal4: false,
    title4: "",
    modal5: false,
    title5: "",
    modal6: false,
    title6: "",
    modal7: false,
    title7: "",
    modal8: false,
    title8: "",
    modal9: false,
    title9: "",
    modal10: false,
    title10: "",
    modal11: false,
    title11: "",
    modal12: false,
    title12: "",
    modal13: false,
    title13: "",
    modal14: false,
    title14: "",
    modal15: false,
    title15: "",
    modal16: false,
    title16: "",
    modal17: false,
    title17: ""
  });

  const handleClose = () => {
    setShowModal(false);
    setConfirm(false);
    setPayments([]);
  };

  const handleClose2 = () => {
    setShowSelected({
      modal1: false,
      modal2: false,
      modal3: false,
      modal4: false,
      modal5: false,
      modal6: false,
      modal7: false,
      modal8: false,
      modal9: false,
      modal10: false,
      modal11: false,
      modal12: false,
      modal13: false,
      modal14: false,
      modal15: false,
      modal16: false,
      modal17: false,
    });
  };

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

  const handleModalShow2 = () => {
    setShowModal2(true);
  };

  const handleModalShow = async (clientId) => {
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

  // const clientActive = dataAll.map((client) => {
  //   return (
  //     <tr key={client._id}>
  //       <td>
  //         <Button
  //           variant="outline-info"
  //           onClick={() => {
  //             handleModalShow(client._id);
  //           }}
  //         >
  //           Assess
  //         </Button>
  //       </td>
  //       <td>{client.ownerName}</td>
  //       <td>{client.ownerAddress}</td>
  //       <td>{client.nameOfEstablishment}</td>
  //       <td>{client.locationOfEstablishment}</td>
  //       <td>{client.occupancyType}</td>
  //     </tr>
  //   );
  // });

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
      handleModalShow(row._id);
    },
  };

  const listOfOc = [
    "Hotworks",
    "Firework Display",
    "Installation of AFSS",
    "Electrical Installation",
    "Fire Drill",
    "Installation of LPGAS System",
    "Installation of Combustible Liquid Storage Tanks",
    "Installation of Building Service Equipment",
    "Installation of Kitchen Food Supression Systems",
    "Fire Clearance",
    "Storage of Flammable and Combustible Liquid",
    "Conveyance of Hazardous Materials and Chemicals in Cargo Vehicle",
    "Operation in Dust Producing Machines",
    "Fumigation and Thermal Insecticidal Fogging",
    "Certified True Copy of FSEC or FSIC",
    "Protest Fee mentioned under Rule 14 of this RIRR",
    "Fire Code Administrative Fines",
  ];

  const [payments, setPayments] = useState([]);

  const showButtons = listOfOc.map((ofs) => {
    return (
      <Fragment key={ofs}>
        <Button
          bsPrefix
          className="custom-button"
          onClick={(e) => {
            if (ofs === "Hotworks") {
              setShowSelected({ modal7: true, title7: ofs });
            } else if (ofs === "Certified True Copy of FSEC or FSIC") {
              setShowSelected({ modal1: true, title1: ofs });
            } else if (
              ofs ===
              "Conveyance of Hazardous Materials and Chemicals in Cargo Vehicle"
            ) {
              setShowSelected({ modal2: true, title2: ofs });
            } else if (ofs === "Fire Clearance") {
              setShowSelected({ modal3: true, title3: ofs });
            } else if (ofs === "Fire Drill") {
              setShowSelected({ modal4: true, title4: ofs });
            } else if (ofs === "Firework Display") {
              setShowSelected({ modal5: true, title5: ofs });
            } else if (ofs === "Fumigation and Thermal Insecticidal Fogging") {
              setShowSelected({ modal6: true, title6: ofs });
            } else if (ofs === "Installation of AFSS") {
              setShowSelected({ modal8: true, title8: ofs });
            } else if (ofs === "Installation of Building Service Equipment") {
              setShowSelected({ modal9: true, title9: ofs });
            } else if (
              ofs === "Installation of Combustible Liquid Storage Tanks"
            ) {
              setShowSelected({ modal10: true, title10: ofs });
            } else if (ofs === "Electrical Installation") {
              setShowSelected({ modal11: true, title11: ofs });
            } else if (
              ofs === "Installation of Kitchen Food Supression Systems"
            ) {
              setShowSelected({ modal12: true, title12: ofs });
            } else if (ofs === "Installation of LPGAS System") {
              setShowSelected({ modal13: true, title13: ofs });
            } else if (ofs === "Operation in Dust Producing Machines") {
              setShowSelected({ modal14: true, title14: ofs });
            } else if (ofs === "Storage of Flammable and Combustible Liquid") {
              setShowSelected({ modal15: true, title15: ofs });
            } else if (
              ofs === "Protest Fee mentioned under Rule 14 of this RIRR"
            ) {
              setShowSelected({ modal16: true, title16: ofs });
            } else if (ofs === "Fire Code Administrative Fines") {
              setShowSelected({ modal17: true, title17: ofs });
            }
          }}
        >
          {ofs}
        </Button>
      </Fragment>
    );
  });

  let totalAmount = 0;

  const listOfPayment = payments.map((payment) => {
    totalAmount = totalAmount + payment.amount;
    return (
      <tr key={payment.paymentName}>
        <td>{payment.paymentName}</td>
        <td>{payment.firecode}</td>
        <td>{payment.amount}</td>
      </tr>
    );
  });
  const { user } = useContext(UserContext);
  const [confirm, setConfirm] = useState(false);
  function isPaymentSubmitted() {
    setConfirm(true);
  }
  const submitCollection = async () => {
    if (confirm === true) {
      setBusy(true)
      await fetch("http://localhost:4000/api/txn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          clientId: client.id,
          clientName: client.owner,
          createdby: user.id,
          station: user.station,
          txnName: "Other Fee/Clearances",
          totalAmount: totalAmount,
          payments: payments,
        }),
      })
        .then((res) => {
          setBusy(false);
          handleClose2();
          handleClose();
          swal("Success", "Submitted Successfully to Collection", "success");
        })
        .then((data) => {});
    } else {
      swal(
        "Something Went Wrong",
        "Can't Add the current Transaction.",
        "warning"
      );
    }
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
      {/* <Table striped bordered hover responsive="md" size="lg">
        <thead>
          <tr>
            <th>Action</th>
            <th>Owner Name</th>
            <th>Owners Address</th>
            <th>Name of Establishment</th>
            <th>Location of Establishment</th>
            <th>Type of Occupancy</th>
          </tr>
        </thead>
        <tbody>{clientActive}</tbody>
      </Table> */}

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
        onHide={handleClose}
        centered
        size="xl"
        scrollable
      >
        <Modal.Header closeButton className="headercolor">
          <Modal.Title className="headertitle">
            Other Fees and Clearances
          </Modal.Title>{" "}
          {!confirm ? (
            <Button
              className="floating-button"
              onClick={() => {
                isPaymentSubmitted();
              }}
            >
              Confirm Total Amount: P {Math.round(totalAmount)}.00
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
          <div className="custom-container">{showButtons}</div>
          {payments.length != 0 ? (
            <>
              <hr></hr>
              <h1 className="text-center">Payments</h1>
              <Table striped bordered hover responsive="md">
                <thead>
                  <tr>
                    <th>Payment Name</th>
                    <th>Fire Code</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>{listOfPayment}</tbody>
              </Table>
              <div className="spacer"></div>
            </>
          ) : null}
        </Modal.Body>
      </Modal>
      <OtherProvider value={{ payments, setPayments, handleClose2 }}>
        <CFCFsicFsec
          show={selectedModal.modal1}
          onHide={handleClose2}
          title={selectedModal.title1}
        />
        <Hotworks
          show={selectedModal.modal7}
          onHide={handleClose2}
          title={selectedModal.title7}
        />
        <ConveyanceHmcc
          show={selectedModal.modal2}
          onHide={handleClose2}
          title={selectedModal.title2}
        />
        <FireClearance
          show={selectedModal.modal3}
          onHide={handleClose2}
          title={selectedModal.title3}
        />
        <FireDrill
          show={selectedModal.modal4}
          onHide={handleClose2}
          title={selectedModal.title4}
        />
        <FireworksDisplay
          show={selectedModal.modal5}
          onHide={handleClose2}
          title={selectedModal.title5}
        />
        <FumigationFogginng
          show={selectedModal.modal6}
          onHide={handleClose2}
          title={selectedModal.title6}
        />
        <InstallAfss
          show={selectedModal.modal8}
          onHide={handleClose2}
          title={selectedModal.title8}
        />
        <InstallBse
          show={selectedModal.modal9}
          onHide={handleClose2}
          title={selectedModal.title9}
        />
        <InstallClst
          show={selectedModal.modal10}
          onHide={handleClose2}
          title={selectedModal.title10}
        />
        <InstallElectric
          show={selectedModal.modal11}
          onHide={handleClose2}
          title={selectedModal.title11}
        />
        <InstallKfss
          show={selectedModal.modal12}
          onHide={handleClose2}
          title={selectedModal.title12}
        />
        <InstallLpgas
          show={selectedModal.modal13}
          onHide={handleClose2}
          title={selectedModal.title13}
        />
        <OperationDpm
          show={selectedModal.modal14}
          onHide={handleClose2}
          title={selectedModal.title14}
        />
        <StorageFcl
          show={selectedModal.modal15}
          onHide={handleClose2}
          title={selectedModal.title15}
        />
        <Protest
          show={selectedModal.modal16}
          onHide={handleClose2}
          title={selectedModal.title16}
        />
        <AdminFines
          show={selectedModal.modal17}
          onHide={handleClose2}
          title={selectedModal.title17}
        />
      </OtherProvider>
    </>
  );
}
