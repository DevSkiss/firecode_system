import style from "./style.module.css";
import moment from 'moment';

export default function ReportOfAccountability(){
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
            <p>REPORT OF ACCOUNTABILITY FOR ACCOUNTABLE FORMS</p>
            <p>
              For the month of{" "}
              <strong>{moment(date).format("MMMM, YYYY")}</strong>
            </p>
          </div>
          <div className={style.secondbox}>
            <p>Entity Name: ____________________________________</p>
            <p>Find Cluster: ____________________________________</p>
          </div>

          <div className={style.thirdbox}>
            <p>
              <strong>Accountable Forms</strong>
            </p>
          </div>
          <div className={style.fourthbox}>
            <p>
              <strong>Beginning Balance</strong>
            </p>
          </div>
          <div className={style.fifthbox}>
            <p>
              <strong>Receipt</strong>  
            </p>
          </div>
          <div className={style.sixthbox}>
            <p>
              <strong>Issue</strong>
            </p>
          </div>
          <div className={style.seventhbox}>
            <p>
              <strong>Ending Balance</strong>
            </p>
          </div>
          <div className={style.withvalue}>
            <p>A. WITH FACE VALUE</p>
          </div>
          <div className={style.eigthbox}>
            <div className={style.table}>
              <div className={style.tablerow}>
                <div className={style.tablehead}>Name of Form</div>
                <div className={style.tablehead}>Number</div>
                <div className={style.tablehead}>Face Value</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>September 19, 2054</div>
                <div className={style.tablecell}>1212121212121</div>
                <div className={style.tablecell}>299,999.00</div>
              </div>
            </div>
          </div>
          <div className={style.ninthbox}>
            <div className={style.table}>
              <div className={style.tablerow}>
                <div className={style.tablehead}>Quantity</div>
                <div className={style.tablehead}>From</div>
                <div className={style.tablehead}>To Value</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>September 19, 2054</div>
                <div className={style.tablecell}>1212121212121</div>
                <div className={style.tablecell}>299,999.00</div>
              </div>
            </div>
          </div>
          <div className={style.tenthbox}>
            <div className={style.table}>
              <div className={style.tablerow}>
                <div className={style.tablehead}>Quantity</div>
                <div className={style.tablehead}>From</div>
                <div className={style.tablehead}>To Value</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>September 19, 2054</div>
                <div className={style.tablecell}>1212121212121</div>
                <div className={style.tablecell}>299,999.00</div>
              </div>
            </div>
          </div>
          <div className={style.eleventhbox}>
            <div className={style.table}>
              <div className={style.tablerow}>
                <div className={style.tablehead}>Quantity</div>
                <div className={style.tablehead}>From</div>
                <div className={style.tablehead}>To Value</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>September 19, 2054</div>
                <div className={style.tablecell}>1212121212121</div>
                <div className={style.tablecell}>299,999.00</div>
              </div>
            </div>
          </div>
          <div className={style.twelvthbox}>
            <div className={style.table}>
              <div className={style.tablerow}>
                <div className={style.tablehead}>Quantity</div>
                <div className={style.tablehead}>From</div>
                <div className={style.tablehead}> To Value</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>September 19, 2054</div>
                <div className={style.tablecell}>1212121212121</div>
                <div className={style.tablecell}>299,999.00</div>
              </div>
            </div>
          </div>

          <div className={style.withvalue}>
            <p>A. WITH NO FACE VALUE</p>
          </div>
          <div className={style.eigthbox}>
            <div className={style.table}>
              <div className={style.tablerow}>
                <div className={style.tablehead}>Name of Form</div>
                <div className={style.tablehead}>Number</div>
                <div className={style.tablehead}>Face Value</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>September 19, 2054</div>
                <div className={style.tablecell}>1212121212121</div>
                <div className={style.tablecell}>299,999.00</div>
              </div>
            </div>
          </div>
          <div className={style.ninthbox}>
            <div className={style.table}>
              <div className={style.tablerow}>
                <div className={style.tablehead}>Quantity</div>
                <div className={style.tablehead}>From</div>
                <div className={style.tablehead}>To Value</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>September 19, 2054</div>
                <div className={style.tablecell}>1212121212121</div>
                <div className={style.tablecell}>299,999.00</div>
              </div>
            </div>
          </div>
          <div className={style.tenthbox}>
            <div className={style.table}>
              <div className={style.tablerow}>
                <div className={style.tablehead}>Quantity</div>
                <div className={style.tablehead}>From</div>
                <div className={style.tablehead}>To Value</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>September 19, 2054</div>
                <div className={style.tablecell}>1212121212121</div>
                <div className={style.tablecell}>299,999.00</div>
              </div>
            </div>
          </div>
          <div className={style.eleventhbox}>
            <div className={style.table}>
              <div className={style.tablerow}>
                <div className={style.tablehead}>Quantity</div>
                <div className={style.tablehead}>From</div>
                <div className={style.tablehead}>To Value</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>September 19, 2054</div>
                <div className={style.tablecell}>1212121212121</div>
                <div className={style.tablecell}>299,999.00</div>
              </div>
            </div>
          </div>
          <div className={style.twelvthbox}>
            <div className={style.table}>
              <div className={style.tablerow}>
                <div className={style.tablehead}>Quantity</div>
                <div className={style.tablehead}>From</div>
                <div className={style.tablehead}> To Value</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>September 19, 2054</div>
                <div className={style.tablecell}>1212121212121</div>
                <div className={style.tablecell}>299,999.00</div>
              </div>
            </div>
          </div>
          <div className={style.thirteenthbox}>
            <p>
              <strong>CERTIFICATION</strong>
            </p>
            <p>
              I hereby certify that the foregoing is a true statemennt of all
              accountable forms received,
            </p>
            <p>
              issued and transferred by me during the period above-stated and
              that the beginning and ending balances are correct.
            </p>
          </div>
          <div className={style.fourteenthbox}>
            <p>Prepared by:</p>
            <p>____________________________________________________</p>
            <p>Signature over Printed Name if the Accountable Agent</p>
          </div>
          <div className={style.fifteenthbox}>
            <p>Certified Correct by:</p>
            <p>____________________________________________________</p>
            <p>Signature over Printed Name if the Accountable Offficer</p>
          </div>
        </div>
      </>
    );
  }