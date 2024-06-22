import  styles from "./Empower.module.css"
const Empower = ()=>{
    return(
        <div className={styles.mainCont}>
                <div className={styles.wrapDiv}>
                   <div className={styles.firstDiv}>
                               <div className={styles.greyDiv}></div>
                               <div className={styles.whiteDiv}></div>
                               <div className={styles.smallDiv}>
                                   SHOPPING<br/><h2>$870.50</h2>20% Avg spending
                               </div>
                               <div className={styles.lastDiv}>
                                   <h3>Introducing<br/> myMoney</h3>
                                   Get access to our suite of<br/> free personal finance<br/>tool
                               </div>
                   </div>

                   <div className={styles.secondDiv}>
                           <p className={styles.create}>CREATE A FREE ACCOUNT</p>
                           <h1>Empower your<br/> financial journey</h1>
                           <p>Activate your free Bankrate account to unlock <br/>
                              our most premium tools and content. </p>
                           <ul>
                               <li>Improve your financial health with our suite of<br/>personal finance tools</li>
                               <li>Gain access to a wide selection of courses,quizzes<br/> and other learning content</li>
                               <li>Get articles tools and product recommendations<br/>based on your interest</li>
                           </ul>

                  </div>
                </div>
        </div>
    )

}
export default Empower;