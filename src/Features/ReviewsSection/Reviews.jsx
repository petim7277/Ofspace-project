import styles from "./Reviews.module.css"
import marcusLogo from "../../Assets/marcusLogo.webp"
import capitalOneLogo from "../../Assets/capitaloneLogo.png"
import citiLog from "../../Assets/citiLogo.png"
import cfBankLogo from "../../Assets/cfbanLogo.png"
import allyLogo from "../../Assets/allyLogo.png"
import diamondLogo from "../../Assets/diamond.png"

const Reviews = ()=>{
    return(
      <div className={styles.mainCont}>
                   <div className={styles.wrapperDiv}>
                           <div className={styles.firstDiv}>
                              <div className={styles.diamonds}>
                                  <img src={diamondLogo} alt={"Diamond logo"} className={styles.smallDiamond}/>
                                  <img src={diamondLogo} alt={"Diamond logo"}/>
                              </div>
                               <div className={styles.marcus}>
                                   <img src={marcusLogo} alt={"Marcus logo"}/>
                                   <h3>4.9 <span style={{color: "gold;"}}>&#9733; &#9733; &#9733; &#9733; &#9733;</span></h3>
                                   <p>Business reviews</p>
                               </div>
                           </div>


                       <div className={styles.secondDiv}>
                           <h1>Reviews and Recommendations</h1>
                           <div className={styles.text}>
                               <h4>Banking</h4>
                               <p>Mortgage lender</p>
                               <p>Credit card</p>
                               <p>Personal loan</p>
                               <p>Home equity</p>
                           </div>
                           <div className={styles.lines}>
                               <hr className={styles.smallLine}></hr> <hr className={styles.bigLine}></hr>
                           </div>

                           <div className={styles.logos}>
                                   <div className={styles.firstLogo}>
                                       <img src={capitalOneLogo} alt={"capitalOne logo"}/>
                                       <h3>4.9 <span style={{color: "gold;"}}>&#9733; &#9733; &#9733; &#9733; &#9733;</span></h3>
                                       <p>Business reviews</p>
                                   </div>

                                   <div className={styles.secondLogo}>
                                       <img src={citiLog} alt={"citi logo"}/>
                                       <h3>4.9 <span style={{color: "gold;"}}>&#9733; &#9733; &#9733; &#9733; &#9733;</span></h3>
                                       <p>Business reviews</p>
                                   </div>

                                   <div className={styles.thirdLogo}>
                                       <img src={cfBankLogo} alt={"cfBank logo"}/>
                                       <h3>4.9 <span style={{color: "gold;"}}>&#9733; &#9733; &#9733; &#9733; &#9733;</span></h3>
                                       <p>Business reviews</p>
                                   </div>
                                   <div className={styles.fourthLogo}>
                                       <img src={allyLogo} alt={"Ally logo"}/>
                                       <h3>4.9 <span style={{color: "gold;"}}>&#9733; &#9733; &#9733; &#9733; &#9733;</span></h3>
                                       <p>Business reviews</p>
                                   </div>
                               </div>
                       </div>

                   </div>

      </div>
    );
}
export default Reviews;