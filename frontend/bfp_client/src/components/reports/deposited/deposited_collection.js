import style from "./style.module.css";
import TransactionService from "../../../service/transaction_service";
import { useState, useEffect, useContext } from "react";
import CommaSeparated from "../../../../helper/comma_separated";
import { Button, Row, Col, Form, Modal } from "react-bootstrap";
import UserContext from '../../../../context/UserContext';
//this is for datesss
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import moment from "moment";
import PaymentService from '../../../service/payment_service';
import DepositService from '../../../service/deposit_service';
//end

export default function DepositedCollection() {
  const _transactionService = new TransactionService();
  const _paymentService = new PaymentService();
  const _depositedService = new DepositService();
  const { user } = useContext(UserContext);
  const [data, setData] = useState([]);
  const [toDate, setToDate] = useState(new Date());
  let totalAmount = 0; 
  var d = Date.now();
  const transactionCode = [
    "628-BFP-01",
    "628-BFP-02",
    "628-BFP-03",
    "628-BFP-04",
    "628-BFP-05",
    "628-BFP-06",
    "628-BFP-07",
    "628-BFP-08",
    "628-BFP-09",
    "628-BFP-10",
    "628-BFP-11",
  ];
  const natureOfCollection = [
    "Fire Code Construction Tax",
    "Fire Code Realty Tax",
    "Fire Code Premium Tax",
    "Fire Code Sales Tax",
    "Fire Code Proceeds Tax",
    "Fire Safety Inspection Fee",
    "Storage Clearance Fee",
    "Conveyance Clearance Fee",
    "Installation Clearance Fee",
    "Fire Code Administrative Fines",
    "Others Fees",
  ];

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setData(await _depositedService.getAllDeposited());
  }

  console.log(data);

  const getTotal = (props) => {
    let tempTotal = 0;
    data.map((payment) => {
      let temp
      if (payment.firecode === props) {
        tempTotal = tempTotal + payment.amount;
        totalAmount = totalAmount + payment.amount;
      }  
    });
    return tempTotal;
  };

  const showTableDetails = transactionCode.map((code, index) => {
    return (
      <div className={style.tablerow} key={code}>
        <div className={style.tablecell}>{natureOfCollection[index]}</div>
        <div className={style.tablecell}>{code}</div>
        <div className={style.tablecell}>Table Cell</div>
        <div className={style.tablecell}>
          ₱ {CommaSeparated(Math.round(getTotal(code) * 100) / 100)}
        </div>
      </div>
    );
  });

  return (
    <>
      <Row className="d-flex justify-content-between">
        <div>
          <Button variant="success">Export as EXCEL</Button>
          <Button className="ml-2">Print as PDF</Button>
        </div>
        <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
          <DatePicker
            variant="inline"
            views={["year", "month"]}
            label="Select Date"
            format="MMMM yyyy"
            disableFuture
            value={toDate}
            onChange={setToDate}
          />
        </MuiPickersUtilsProvider>
      </Row>
      <div className={style.wrapper}>
        <div className={style.firstbox}>
          <div className={style.title}>
            <h4>List of Deposited Collections</h4>
          </div>
          <div className={style.title}>
            <p>{moment(d).format("LL")}</p>
          </div>
        </div>
        <div className={style.secondbox}>
          <p>List of Collections No.: _____________________ </p>
          <p>BANK: _____________________</p>
          <p>BANK CODE: _____________________</p>
        </div>
        <div className={style.thirdbox}>
          <p>Name of Agency: _____________________ </p>
          <p>Agency Code: _____________________</p>
          <p>Station Code: _____________________</p>
          <p>Area Code: _____________________</p>
        </div>
        <div className={style.fourthbox}>
          <div className={style.table}>
            <div className={style.tablerow}>
              <div className={style.tablehead}>Nature of Collection</div>
              <div className={style.tablehead}>Transaction Code</div>
              <div className={style.tablehead}>Fund Code</div>
              <div className={style.tablehead}>Amount</div>
            </div>
            {showTableDetails}
          </div>
        </div>
        <div className={style.fifthbox}>
          <strong>
            Total: ₱ {CommaSeparated(Math.round(totalAmount * 100) / 100)}
          </strong>
        </div>
        <div className={style.sixthbox}>
          <p className="d-flex justify-content-center">{user.rank + " " + user.fullName}</p>
          <p className={style.collecting}>Collecting Officer</p>
          <p>C.O Code: _____________________</p>
        </div>
      </div>
    </>
  );
}
