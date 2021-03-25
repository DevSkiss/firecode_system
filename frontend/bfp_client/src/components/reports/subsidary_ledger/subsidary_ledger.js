import style from "./style.module.css";
import moment from "moment";

export default function SubsidaryLegder(){
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
            <p>
              <strong>Subsidiary Ledger {moment(date).format("YYYY")} </strong>
            </p>
          </div>
          <div className={style.secondbox}>
            <p>Municipality / City: ______________________________</p>
            <p>Station Code : ______________________________</p>
          </div>
          <div className={style.thirdbox}>
            <p>Collection Officer: ______________________________</p>
            <p>Area Code : ______________________________</p>
          </div>
          <div className={style.fourthbox}>
            <p> Code : ______________________________</p>
          </div>
          <div className={style.fifthbox}>
            <div className={style.table}>
              <div className={style.tablerow}>
                <div className={style.tablehead}>O.R/LC #</div>
                <div className={style.tablehead}>Date</div>
                <div className={style.tablehead}>Nature of Collection</div>
                <div className={style.tablehead}>Account Code</div>
                <div className={style.tablehead}>Debit</div>
                <div className={style.tablehead}>Credit</div>
                <div className={style.tablehead}>Balance</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}></div>
                <div className={style.tablecell}></div>
                <div className={style.tablecell}></div>
                <div className={style.tablecell}></div>
                <div className={style.tablecell}></div>
                <div className={style.tablecell}></div>
                <div className={style.tablecell}></div>
              </div>
                <div className={style.tablerow}>
                <div className={style.tablecell}></div>
                <div className={style.tablecell}></div>
                <div className={style.tablecell}></div>
                <div className={style.tablecell}></div>
                <div className={style.tablecell}></div>
                <div className={style.tablecell}></div>
                <div className={style.tablecell}></div>
              </div>
                <div className={style.tablerow}>
                <div className={style.tablecell}></div>
                <div className={style.tablecell}></div>
                <div className={style.tablecell}></div>
                <div className={style.tablecell}></div>
                <div className={style.tablecell}></div>
                <div className={style.tablecell}></div>
                <div className={style.tablecell}></div>
              </div>
            
              <div className={style.tablerow}>
                <div className={style.tablecell}>-</div>
                <div className={style.tablecell}>-</div>
                <div className={style.tablecell}>-</div>
                <div className={style.tablecell}>
                  <strong>Sub-Total</strong>
                </div>
                <div className={style.tablecell}>
                  <p>1,229,379.00</p>
                </div>
                <div className={style.tablecell}>
                  <p>1,229,379.00</p>
                </div>
                <div className={style.tablecell}>-</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>-</div>
                <div className={style.tablecell}>-</div>
                <div className={style.tablecell}>-</div>
                <div className={style.tablecell}>
                  <strong>Total</strong>
                </div>
                <div className={style.tablecell}>
                  <p>1,229,379.00</p>
                </div>
                <div className={style.tablecell}>
                  <p>1,229,379.00</p>
                </div>
                <div className={style.tablecell}>-</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }