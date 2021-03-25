import style from "./style.module.css";
import moment from "moment";
import TransactionService from "../../../service/transaction_service";
import { useState, useEffect } from "react";
import CommaSeparated from "../../../../helper/comma_separated";

export default function UndepositedCollection() {
  const _transactionService = new TransactionService();
  const [data, setData] = useState([]);
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

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setData(await _transactionService.getAllPayment());
  }

  const getTotal = (props) => {
    let tempTotal = 0;
    data.map((payment) => {
      if (payment.firecode === props) {
        tempTotal = tempTotal + payment.amount;
      }
    });
    return tempTotal;
  };

  const showTableDetails = data.map((payment, index) => {
    if (payment.deposited === false) {
        return (
          <div className={style.tablerow} key={payment._id}>
            <div className={style.tablecell}>
              {moment(payment.createdAt).format("L")}
            </div>
            <div className={style.tablecell}>{payment.transactionId}</div>
            <div className={style.tablecell}>{payment.station}</div>
            <div className={style.tablecell}>{payment.firecode}</div>
            <div className={style.tablecell}>
              ₱ {CommaSeparated(Math.round(payment.amount * 100) / 100)}
            </div>
          </div>
        );
    }
  
  })

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.firstbox}>
          <div>
            <img src="bfp.png" className={style.logo} />
          </div>
          <div className={style.bfpheader}>
            <h4>Bureau of Fire Protection</h4>
            <h5>Region 8</h5>
            <h5>Some City Fire Station</h5>
          </div>
          <div>
            <img src="dilg.png" className={style.logo} />
          </div>
        </div>
        <div className={style.secondbox}>
          <div className={style.title}>
            <h5>SUMMARY OF UNDEPOSITED COLLECTION</h5>
            <p>
              For the Month of <strong>{moment(d).format("MMMM YYYY")}</strong>{" "}
            </p>
          </div>
        </div>
        <div className={style.thirdbox}>
          <div className={style.table}>
            <div className={style.tablerow}>
              <div className={style.tablehead}>Date</div>
              <div className={style.tablehead}>O.R. Number</div>
              <div className={style.tablehead}>Payees</div>
              <div className={style.tablehead}>Account Code</div>
              <div className={style.tablehead}>Amount</div>
            </div>
            {showTableDetails}
          </div>
        </div>
        <div className={style.fourthbox}>
          <strong>Total: _____________________</strong>
        </div>
        <div className={style.fifthbox}>
          <p>________________________________ </p>
          <p className={style.collecting}>Collecting Officer</p>
          <p className={style.collecting}>City Municipal Fire Marshall</p>
          <p>C.O Code: _____________________</p>
        </div>
      </div>
    </>
  );
}
