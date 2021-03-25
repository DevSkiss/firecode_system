import style from "./style.module.css";
import moment from "moment"

export default function ReportCollectionDeposit(){
    var date = Date.now();
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
            <p>SUMMARY OF COLLECTION AND DEPOSITS</p>
            <p>(FIRE CODE FEES)</p>
          </div>
          <div className={style.secondbox}>
            <p>Name of Agency : </p>
          </div>
          <div className={style.tablewrapper}>
            <div className={style.seventhbox}>
              <div className={style.table}>
                <div className={style.tablerow}>
                  <div className={style.tablehead}>Date</div>
                  <div className={style.tablehead}>O.R. No.</div>
                  <div className={style.tablehead}>Payor</div>
                  <div className={style.tablehead}>Total Collection</div>
                  <div className={style.tablehead}>Construction Tax</div>
                  <div className={style.tablehead}>Realty Tax</div>
                  <div className={style.tablehead}>Prem Tax</div>
                  <div className={style.tablehead}>Sales Tax</div>
                  <div className={style.tablehead}>Proceeds Tax</div>
                  <div className={style.tablehead}>FSIF</div>
                  <div className={style.tablehead}>SC Fee</div>
                  <div className={style.tablehead}>CC Fee</div>
                  <div className={style.tablehead}>IC Fee</div>
                  <div className={style.tablehead}>OC Fee</div>
                  <div className={style.tablehead}>Admin Fines</div>
                </div>
                <div className={style.tablerow}>
                  <div className={style.tablecell}>22-Oct-21</div>
                  <div className={style.tablecell}>6656357</div>
                  <div className={style.tablecell}>
                    EMG Micro Linn Computer Shop and Services
                  </div>
                  <div className={style.tablecell}>200849.00</div>
                  <div className={style.tablecell}>200849.00</div>
                  <div className={style.tablecell}>200849.00</div>
                  <div className={style.tablecell}>200849.00</div>
                  <div className={style.tablecell}>200849.00</div>
                  <div className={style.tablecell}>200849.00</div>
                  <div className={style.tablecell}>200849.00</div>
                  <div className={style.tablecell}>200849.00</div>
                  <div className={style.tablecell}>200849.00</div>
                  <div className={style.tablecell}>200849.00</div>
                  <div className={style.tablecell}>200849.00</div>
                  <div className={style.tablecell}>200849.00</div>
                </div>
                <div className={style.tablerow}>
                  <div className={style.tablecell}>-</div>
                  <div className={style.tablecell}>-</div>
                  <div className={style.tablecell}>
                    <strong>TOTAL:</strong>
                  </div>
                  <div className={style.tablecell}>
                    <strong>200849.00</strong>
                  </div>
                  <div className={style.tablecell}>-</div>
                  <div className={style.tablecell}>-</div>
                  <div className={style.tablecell}>-</div>
                  <div className={style.tablecell}>-</div>
                  <div className={style.tablecell}>-</div>
                  <div className={style.tablecell}>-</div>
                  <div className={style.tablecell}>-</div>
                  <div className={style.tablecell}>-</div>
                  <div className={style.tablecell}>-</div>
                  <div className={style.tablecell}>-</div>
                  <div className={style.tablecell}>-</div>
                </div>
              </div>
            </div>
            <div className={style.eytpoyntpayb}>
              <p>
                Deposit: <strong>P 280,958.00</strong>
              </p>
              <p>
                Deposit Date: <strong>{moment(date).format("LL")}</strong>
              </p>
              <p>
                Undeposited Collection: <strong>P</strong>
              </p>
            </div>
            <div className={style.eytpoyntsix}>
              <p>
                <strong>CERTIFICATION</strong>
              </p>
              <p>
                I hereby certify on my official oath that the above are true
                statement of all collections received by me during the period
                stated above for which OR No.
                ____________________________________. Inclusive were actually{" "}
              </p>
              <p>
                Issued by me in the amount shown thereon. I also certify that I
                have not received from whatever source without having issued by
                me in the amount show thereon. I also certify that I have not
                receive money from whatever sourrce
              </p>
              <p>
                without havinng issued the necessary Official Receipt received
                in acknowledged hereof. Collection issued by the sub-collectors
                are reordered above in lump sumopposite their respective
                colelction report number. I certify further
              </p>
              <p>
                that the balance shown agrees with the balance appearing in my
                cash receipt record.
              </p>
            </div>
            <div className={style.footer}>
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
          </div>
        </div>
      </>
    );
  }