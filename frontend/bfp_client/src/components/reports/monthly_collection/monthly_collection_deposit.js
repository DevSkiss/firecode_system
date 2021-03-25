import style from "./style.module.css";
import moment from "moment";
import { useState, useEffect, useContext } from "react";
import CommaSeparated from "../../../../helper/comma_separated";
import { FireCodeConvert } from "../../../../helper/firecode_convert";
import UserContext from "../../../../context/UserContext";
import TransactionService from "../../../service/transaction_service";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import { Row, Col, Button } from "react-bootstrap";

export default function MonthlyCollectio() {
  var date = Date.now();
  const _transactionService = new TransactionService();
  const [data, setData] = useState([]);
  const [selectedDate, handleDateChange] = useState(new Date());
  const { user } = useContext(UserContext);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setData(await _transactionService.getAllPayment());
  }



  const collectionTable = data.map((payment, index) => {
    return (
      <div className={style.tablerow} key={payment._id}>
        <div className={style.tablecell}>
          <p>{moment(payment.createdAt).format("LL")}</p>
        </div>
        <div className={style.tablecell}>{payment._id}</div>
        <div className={style.tablecell}>
          ₱ {CommaSeparated(Math.round(payment.amount * 100) / 100)}
        </div>
      </div>
    );
  })
  

  return (
    <>
      <Row>
        <Col className="d-flex justify-content-between">
          <Button>Export</Button>
          <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
            <DatePicker
              views={["year", "month"]}
              label="Monthly Report"
              minDate={new Date("2021-01-01")}
              maxDate={new Date()}
              value={selectedDate}
              onChange={handleDateChange}
            />
          </MuiPickersUtilsProvider>
        </Col>
      </Row>
      <div className={style.wrapper}>
        <div className={style.firstbox}>
          <div>
            <img src="dilg.png" className={style.logo} />
          </div>
          <div className={style.bfpheader}>
            <p>Republic of the Philippines</p>
            <p>Department of the Local and Interior Government</p>
            <h5>Bureau of Fire Protection</h5>
            <strong>Region VIII</strong>
          </div>
          <div>
            <img src="bfp.png" className={style.logo} />
          </div>
        </div>
        <div className={style.title}>
          <h4>MONTHLY REPORTS of COLLECTION AND DEPOSITS</h4>
          <h5>
            for the month of{" "}
            <strong className={style.date}>
              {moment(selectedDate).format("MMMM yyyy")}
            </strong>
          </h5>
        </div>
        <div className={style.secondbox}>
          <p>
            Name of Agency : <strong>Bereau of Fire Protection</strong>
          </p>
          <p>
            Agency / LGU : <strong>Agency</strong>
          </p>
          <p>
            Station Municipality: <strong>{user.station}</strong>
          </p>
        </div>

        <div className={style.fourthbox}>
          <p>COLLECTIONS</p>
        </div>
        <div className={style.fifthbox}>
          <p>DEPOSITS</p>
        </div>
        <div className={style.seventhbox}>
          <div className={style.table}>
            <div className={style.tablerow}>
              <div className={style.tablehead}>Date</div>
              <div className={style.tablehead}>O.R. No.</div>
              <div className={style.tablehead}>Amount</div>
            </div>
            {collectionTable}
          </div>
        </div>
        <div className={style.eightbox}>
          <div className={style.table}>
            <div className={style.tablerow}>
              <div className={style.tablehead}>Date</div>
              <div className={style.tablehead}>LC No.</div>
              <div className={style.tablehead}>Amount</div>
            </div>
            <div className={style.tablerow}>
              <div className={style.tablecell}>Date</div>
              <div className={style.tablecell}>Reference No.</div>
              <div className={style.tablecell}>Uelaiza Hope Baldanado</div>
            </div>
          </div>
        </div>

        <div className={style.ninthbox}>
          <p>Prepared by:</p>
          <p>____________________________________________________</p>
          <p>Signature over Printed Name if the Accountable Agent</p>
        </div>

        <div className={style.tenthbox}>
          <p>Certified Corrected by:</p>
          <p>____________________________________________________</p>
          <p>Signature over Printed Name if the Accountable Officer</p>
        </div>
      </div>
    </>
  );
}
