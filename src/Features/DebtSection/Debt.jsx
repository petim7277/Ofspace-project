import styles from "./Debt.module.css"
import  mom from "../../Assets/Mom-tips.jpg"
import  woman from "../../Assets/woman.jpg"
import  man from "../../Assets/Man.jpg"
import  house from "../../Assets/pentHouse.jpeg"

const  Debt = ()=>{
    return(
        <div className={styles.mainCont}>
                 <div className={styles.wrapDiv}>
                           <div className={styles.firstDiv}>
                               <div className={styles.firstBox}>
                                   <div className={styles.imageOne}>
                                       <img src={mom} alt={"Image of a woman"}/>
                                   </div>
                                   <div className={styles.boxText}>
                                   <p>DEBT</p>
                                   <h6>Older couples discuss<br/> information on laptop <br/></h6><p>3mins read &#8594;</p>
                                   </div>
                               </div>



                                 <div className={styles.firstBox}>
                                     <div className={styles.imageOne}>
                                         <img src={woman} alt={"Image of a woman"}/>
                                     </div>
                                     <div className={styles.boxText}>
                                     <p>DEBT</p>
                                     <h6>Older couples discuss<br/> information on laptop <br/></h6><p>3mins read &#8594;</p>
                                     </div>
                                 </div>



                                 <div className={styles.firstBox}>
                                     <div className={styles.imageOne}>
                                         <img src={man} alt={"Image of a woman"}/>
                                     </div>
                                     <div className={styles.boxText}>
                                     <p>DEBT</p>
                                         <h6>Older couples discuss<br/> information on laptop <br/></h6><p>3mins read &#8594;</p>
                                     </div>
                                 </div>
                          </div>

                          <div className={styles.secondDiv}>
                              <img src={house} alt={"Image of a pentHouse"}/>
                          </div>
                 </div>
        </div>
    )
}
export default Debt;