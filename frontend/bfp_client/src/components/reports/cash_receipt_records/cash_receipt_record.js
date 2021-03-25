import style from "./style.module.css";
import moment from "moment";
import TransactionService from "../../../service/transaction_service";
import { useState, useEffect, useContext } from "react";
import CommaSeparated from "../../../../helper/comma_separated";
import { FireCodeConvert } from "../../../../helper/firecode_convert";
import UserContext from "../../../../context/UserContext";

export default function CashReceiptRecords() {
  const _transactionService = new TransactionService();
  const [data, setData] = useState([])
  const { user } = useContext(UserContext);

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
    return (
      <div className={style.tablerow} key={payment._id}>
        <div className={style.tablecell}>
          {moment(payment.createdAt).format("L")}
        </div>
        <div className={style.tablecell}>{payment._id}</div>
        <div className={style.tablecell}>{payment.payor}</div>
        <div className={style.tablecell}>MFO / P A P</div>
        <div className={style.tablecell}>Object Code</div>
        <div className={style.tablecell}>
          {FireCodeConvert(payment.firecode)}
        </div>
        <div className={style.tablecell}>
          ₱ {CommaSeparated(Math.round(payment.amount * 100) / 100)}
        </div>
        <div className={style.tablecell}>
          ₱ {CommaSeparated(Math.round(payment.amount * 100) / 100)}
        </div>
        <div className={style.tablecell}>
          ₱ {CommaSeparated(Math.round(payment.amount * 100) / 100)}
        </div>
      </div>
    );
  })

  return (
    <>
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
          <h3>CASH RECEIPTS RECORD</h3>
        </div>
        <div className={style.secondbox}>
          <p>Entity Name: _____________________ </p>
          <p>Fund Cluster: _____________________ </p>
        </div>
        <div className={style.thirdbox}>
          <p>Entity Name: _____________________ </p>
          <p>Fund Cluster: _____________________ </p>
        </div>
        <div className={style.fourthbox}>
          <p>{user.fullName}</p>
          <p>Accountable Officer</p>
        </div>
        <div className={style.fifthbox}>
          <p>{user.rank}</p>
          <p>Official Designation</p>
        </div>
        <div className={style.sixthbox}>
          <p>{user.station}</p>
          <p>Station</p>
        </div>
        <div className={style.seventhbox}>
          <div className={style.table}>
            <div className={style.tablerow}>
              <div className={style.tablehead}>Date</div>
              <div className={style.tablehead}>
                Reference No. / O.R. No./D.S.
              </div>
              <div className={style.tablehead}>Payor</div>
              <div className={style.tablehead}>MFO/PAP</div>
              <div className={style.tablehead}>Object Code</div>
              <div className={style.tablehead}>Nature of Collection</div>
              <div className={style.tablehead}>Collection</div>
              <div className={style.tablehead}>Deposit</div>
              <div className={style.tablehead}>Undeposited Collection</div>
            </div>
            {showTableDetails}
          </div>
        </div>
        <div className={style.eightbox}>
          <h5>CERTIFICATION</h5>
          <p>
            I hereby certify on my official oath that the foregoing is a correct
            and complete record
          </p>
          <p>
            of all collections and deposits had by me in my capacity as a
            _________________________________ of
          </p>
          <p>
            _________________________________ during the period from
            _________________________________ to
          </p>
          <p>
            _________________________________. inclusives, as indicated in the
            corresponding columns.
          </p>
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
