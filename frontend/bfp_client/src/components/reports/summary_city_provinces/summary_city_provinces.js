import style from "./style.module.css";
import moment from "moment"

export default function SummaryCityProvinces(){
    let date = Date.now();
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
            <p>SUMMARY OF COLLECTIONS AND DEPOSITS</p>
            <p>
              As of
              <strong>{moment(date).format("MMMM, YYYY")}</strong>
            </p>
          </div>
          <div className={style.secondbox}>
            <p>Account Codes</p>
          </div>
          <div className={style.thirdbox}>
            <p>CURRENT YEAR {moment(date).format("YYYY")}</p>
          </div>
          <div className={style.fourthbox}>
            <p>PRIOR YEAR</p>
          </div>
          <div className={style.fifthbox}>
            <div className={style.table}>
              <div className={style.tablerow}>
                <div className={style.tablehead}>
                  Province/<br></br>City/Municipality
                </div>
                <div className={style.tablehead}>
                  Collection<br></br>Officer
                </div>
                <div className={style.tablehead}>628-BFP-01</div>
                <div className={style.tablehead}>628-BFP-02</div>
                <div className={style.tablehead}>628-BFP-03</div>
                <div className={style.tablehead}>628-BFP-04</div>
                <div className={style.tablehead}>628-BFP-05</div>
                <div className={style.tablehead}>628-BFP-06</div>
                <div className={style.tablehead}>628-BFP-07</div>
                <div className={style.tablehead}>628-BFP-08</div>
                <div className={style.tablehead}>628-BFP-09</div>
                <div className={style.tablehead}>628-BFP-10</div>
                <div className={style.tablehead}>628-BFP-11</div>
                <div className={style.tablehead}>
                  Total<br></br>Collection
                </div>
                <div className={style.tablehead}>20% LGU Share</div>
                <div className={style.tablehead}>
                  Total<br></br>Deposits
                </div>
                <div className={style.tablehead}>
                  Undeposited<br></br>Collections
                </div>
                <div className={style.tablehead}>
                  Accumulated<br></br>Surplus
                </div>
                <div className={style.tablehead}>
                  Total<br></br>Deposits
                </div>
                <div className={style.tablehead}>
                  Undeposited<br></br>Collections
                </div>
                <div className={style.tablehead}>
                  Total<br></br>Undeposited
                </div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Capoocan Fire Station</div>
                <div className={style.tablecell}>SPO4 Joseph Arendaye</div>
                <div className={style.tablecell}>299,999.00</div>
                <div className={style.tablecell}>299,999.00</div>
                <div className={style.tablecell}>299,999.00</div>
                <div className={style.tablecell}>299,999.00</div>
                <div className={style.tablecell}>299,999.00</div>
                <div className={style.tablecell}>299,999.00</div>
                <div className={style.tablecell}>299,999.00</div>
                <div className={style.tablecell}>299,999.00</div>
                <div className={style.tablecell}>299,999.00</div>
                <div className={style.tablecell}>299,999.00</div>
                <div className={style.tablecell}>299,999.00</div>
                <div className={style.tablecell}>29,299,999.00</div>
                <div className={style.tablecell}>29,299,999.00</div>
                <div className={style.tablecell}>29,299,999.00</div>
                <div className={style.tablecell}>299,999.00</div>
                <div className={style.tablecell}>29,299,999.00</div>
                <div className={style.tablecell}>29,299,999.00</div>
                <div className={style.tablecell}>29,299,999.00</div>
                <div className={style.tablecell}>29,299,999.00</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablehead}>Sub-Total</div>
                <div className={style.tablehead}>-</div>
                <div className={style.tablehead}>29,299,999.00</div>
                <div className={style.tablehead}>29,299,999.00</div>
                <div className={style.tablehead}>29,299,999.00</div>
                <div className={style.tablehead}>29,299,999.00</div>
                <div className={style.tablehead}>29,299,999.00</div>
                <div className={style.tablehead}>29,299,999.00</div>
                <div className={style.tablehead}>29,299,999.00</div>
                <div className={style.tablehead}>29,299,999.00</div>
                <div className={style.tablehead}>29,299,999.00</div>
                <div className={style.tablehead}>29,299,999.00</div>
                <div className={style.tablehead}>29,299,999.00</div>
                <div className={style.tablehead}>29,299,999.00</div>
                <div className={style.tablehead}>29,299,999.00</div>
                <div className={style.tablehead}>29,299,999.00</div>
                <div className={style.tablehead}>29,299,999.00</div>
                <div className={style.tablehead}>29,299,999.00</div>
                <div className={style.tablehead}>29,299,999.00</div>
                <div className={style.tablehead}>29,299,999.00</div>
                <div className={style.tablehead}>29,299,999.00</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }