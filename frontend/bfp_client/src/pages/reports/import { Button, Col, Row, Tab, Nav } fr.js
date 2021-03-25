import { Button, Col, Row, Tab, Nav } from "react-bootstrap";
import ReactToPrint from "react-to-print";
import DepositedCollection from "../../components/reports/deposited/deposited_collection";
import UndepositedCollection from "../../components/reports/undeposited/undeposited_collection"
import CashReceiptRecords from "../../components/reports/cash_receipt_records/cash_receipt_record"
import { useRef, useState } from "react";
import MonthlyCollection from "../../components/reports/monthly_collection/monthly_collection_deposit";
import ReportCollectionDeposit from "../../components/reports/report_collection_deposit/report_collection_deposit";
import SubsidaryLegder from '../../components/reports/subsidary_ledger/subsidary_ledger'
import ReportOfAccountability from "../../components/reports/report_accountability/report_accountability";
import SummaryCityProvinces from "../../components/reports/summary_city_provinces/summary_city_provinces";
import { Receipt } from '../../components/reports/receipt/receipt';
import { CSVLink } from "react-csv";

const ReportsView = () => {
    const componentRef = useRef("Test");
    const componentRef2 = useRef();
    const componentRef3 = useRef();
    const componentRef4 = useRef();
    const componentRef5 = useRef();
    const componentRef6 = useRef();
    const componentRef7 = useRef();
    const componentRef8 = useRef();
    const componentRef9 = useRef();
    const componentRef10 = useRef();

    const refs = [
      componentRef,
      componentRef2,
      componentRef3,
      componentRef4,
      componentRef5,
      componentRef6,
      componentRef7,
      componentRef8,
      componentRef9,
      componentRef10,
    ];

  // const [ldcData, setLdcData] = useState([]);
  // const [ldcHeader, setLdcHeader] = useState([]);
  // const [udcData, setUdcData] = useState([]);
  // const [udcHeader, setUdcHeader] = useState([]);
  // const [crrData, setCrrData] = useState([]);
  // const [crrHeader, setCrrHeader] = useState([]);

  const listOfReports = [
    "List of Deposited Collection",
    "Summary of Undeposited Collection",
    "Cash Receipt Record",
    "Monthly Report of Collection and Deposit",
    " Report of Collection and Deposit",
    "Report of Accountability for Accountable Forms",
    "Subsidary Ledger",
    "Summary Collection and Deposits for City/Provinces",
    "Summary Collection and Deposits for Municipalities",
  ];

    setTimeout(function () {
      <div className="loading"></div>;
    }, 3000);

  const reportButtons = listOfReports.map((report, index) => {
    return (
      <ReactToPrint
        trigger={() => (
          <Button bsPrefix className="custom-button m-3">
            {report}
          </Button>
        )}
        content={() => refs[index].current}
        key={report}
      />
    );
  });


  return (
    <>
      <h1 className="titleReports">Reports</h1>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="List of Deposited Collection">
                  List of Deposited Collection
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10}>
            {/* <Tab.Content>
              <Tab.Pane eventKey="List of Deposited Collection">
                <Button>Export to Excel</Button>
                <DepositedCollection
                  setLdcData={setLdcData}
                  setLdcHeader={setLdcHeader}
                />
              </Tab.Pane>
            </Tab.Content> */}
          </Col>
        </Row>
      </Tab.Container>
      <div className="wrapper">{reportButtons}</div>

      {/* <DepositedCollection
        setLdcData={setLdcData}
        setLdcHeader={setLdcHeader}
      />
      <CSVLink data={ldcData} headers={ldcHeader}>
        <Button bsPrefix className="custom-button m-3">
          List of Deposited Collection
        </Button>
      </CSVLink>

      <UndepositedCollection
        setUdcData={setUdcData}
        setUdcHeader={setUdcHeader}
      />
      <CSVLink data={udcData} headers={udcHeader}>
        <Button bsPrefix className="custom-button m-3">
          List of Undeposited Collection
        </Button>
      </CSVLink> */}

      {/* <div className="">
        <DepositedCollection ref={componentRef} />
      </div>
      <div className="none">
        <UndepositedCollection ref={componentRef2} />
      </div>
      <div className="none">
        <CashReceiptRecords ref={componentRef3} />
      </div>
      <div className="none">
        <MonthlyCollection ref={componentRef4} />
      </div>
      <div className="none">
        <ReportCollectionDeposit ref={componentRef5} />
      </div>
      <div className="none">
        <ReportOfAccountability ref={componentRef6} />
      </div>
      <div className="none">
        <SubsidaryLegder ref={componentRef7} />
      </div>
      <div className="none">
        <SummaryCityProvinces ref={componentRef8} />
      </div>
      <div className="none">
        <Receipt ref={componentRef9} />
      </div> */}
    </>
  );
};

export default ReportsView;
