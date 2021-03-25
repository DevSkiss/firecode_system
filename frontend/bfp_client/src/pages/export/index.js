import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import moment from "moment";
import { Row, Col, Button, Table } from "react-bootstrap";
import { useState } from "react";


export default function Index() {
    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());

  return (
    <>
      <h1>Export Data</h1>
      <Row>
        <Col className="d-flex justify-content-start">
          <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
            <DatePicker
              autoOk
              label="From Date"
              clearable
              format="MMMM DD, yyyy"
              disableFuture
              showTodayButton
              value={fromDate}
              onChange={setFromDate}
            />
            <div className="ml-5"></div>
            <DatePicker
              autoOk
              label="To Date"
              showTodayButton
              clearable
              format="MMMM DD, yyyy"
              disableFuture
              value={toDate}
              onChange={setToDate}
            />
          </MuiPickersUtilsProvider>
          <Button className="ml-5">Search Data</Button>
        </Col>
      </Row>

      <p>Create Table That shows the the selected date</p>
      <Table striped bordered hover responsive="sm" bg="dark" variant="dark">
        <thead>
          <tr>
            <th>Payor</th>
            <th>Nature of Collection</th>
            <th>Fire Code</th>
            <th>Amount</th>
            <th>Created At</th>
          </tr>
        </thead>
      </Table>
    </>
  );
}
