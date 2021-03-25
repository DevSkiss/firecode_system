import style from './style.module.css';

export default function Receipt() {
        return (
          <>
            <div className={style.wrapper}>
              <div className={style.four}>
                <p>Date: October 29, 2021</p>
              </div>
              <div className={style.five}>five</div>
              <div className={style.six}>six</div>
              <div className={style.seven}>seven</div>
              <div className={style.eight}>eight</div>
              <div className={style.nine}>
                <div className={style.table}>
                  <div className={style.tablerow}>
                    <div className={style.tablehead}></div>
                    <div className={style.tablehead}></div>
                    <div className={style.tablehead}></div>
                  </div>
                  <div className={style.tablerow}>
                    <div className={style.tablecell}>FCCT</div>
                    <div className={style.tablecell}>629-BFP-02</div>
                    <div className={style.tablecell}>P 1050.00</div>
                  </div>
                  <div className={style.tablerow}>
                    <div className={style.tablecell}>FCCT</div>
                    <div className={style.tablecell}>629-BFP-02</div>
                    <div className={style.tablecell}>P 1050.00</div>
                  </div>
                  <div className={style.tablerow}>
                    <div className={style.tablecell}>FCCT</div>
                    <div className={style.tablecell}>629-BFP-02</div>
                    <div className={style.tablecell}>P 1050.00</div>
                  </div>
                  <div className={style.tablerow}>
                    <div className={style.tablecell}>FCCT</div>
                    <div className={style.tablecell}>629-BFP-02</div>
                    <div className={style.tablecell}>P 1050.00</div>
                  </div>
                  <div className={style.tablerow}>
                    <div className={style.tablecell}>FCCT</div>
                    <div className={style.tablecell}>629-BFP-02</div>
                    <div className={style.tablecell}>P 1050.00</div>
                  </div>
                  
                </div>
              </div>
              <div className={style.ten}>
                Two Hundred Thousand Nine hundred Ninety nine Nine hundred
                ninety nine only
              </div>

              <div className={style.fifteen}>SFO1 Random User Name</div>
            </div>
          </>
        );
    }