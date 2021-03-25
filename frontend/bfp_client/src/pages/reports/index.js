import { Button, Col, Row, Tab, Nav } from "react-bootstrap";
import { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import DepositedCollection from "../../components/reports/deposited/deposited_collection";
import UndepositedCollection from "../../components/reports/undeposited/undeposited_collection"
import CashReceiptRecord from "../../components/reports/cash_receipt_records/cash_receipt_record"
import MonthlyCollection from "../../components/reports/monthly_collection/monthly_collection_deposit";
import ReportCollectionDeposit from "../../components/reports/report_collection_deposit/report_collection_deposit";
import SubsidaryLegder from '../../components/reports/subsidary_ledger/subsidary_ledger'
import ReportOfAccountability from "../../components/reports/report_accountability/report_accountability";
import SummaryCityProvinces from "../../components/reports/summary_city_provinces/summary_city_provinces";
import Receipt from '../../components/reports/receipt/receipt';

const ReportsView = () => {
  const listOfReports = [
    "List of Deposited Collection",
    "Summary of Undeposited Collection",
    "Cash Receipt Record",
    "Monthly Report of Collection and Deposit",
    " Report of Collection and Deposit",
    "Report of Accountability for Accountable Forms",
    "Subsidary Ledger",
    "Summary Collection and Deposits for City/Provinces",
  ];

   setTimeout(function () {
     <div className="loading"></div>;
   }, 3000);

  const tabNavs = listOfReports.map((report, index) => {
    return (
      <Nav.Item key={report}>
        <Nav.Link eventKey={report}>{report}</Nav.Link>
      </Nav.Item>
    );
  })

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
      <h1 className="text-center titleReports">Reports</h1>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              {tabNavs}
            </Nav>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey={listOfReports[0]}>
                <DepositedCollection />
              </Tab.Pane>
              <Tab.Pane eventKey={listOfReports[1]}>
                <UndepositedCollection />
              </Tab.Pane>
              <Tab.Pane eventKey={listOfReports[2]}>
                <CashReceiptRecord />
              </Tab.Pane>
              <Tab.Pane eventKey={listOfReports[3]}>
                <MonthlyCollection />
              </Tab.Pane>
              <Tab.Pane eventKey={listOfReports[4]}>
                <ReportCollectionDeposit />
              </Tab.Pane>
              <Tab.Pane eventKey={listOfReports[5]}>
                <ReportOfAccountability />
              </Tab.Pane>
              <Tab.Pane eventKey={listOfReports[6]}>
                <SubsidaryLegder />
              </Tab.Pane>
              <Tab.Pane eventKey={listOfReports[7]}>
                <SummaryCityProvinces />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      <div className="wrapper">{reportButtons}</div>
    </>
  );
};

export default ReportsView;
