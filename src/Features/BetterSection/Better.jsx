import  styles from  "./Better.module.css"
import man from "../../Assets/Man.jpg"
const Better = ()=>{
    return(
        <div className={styles.mainCont}>
            <div className={styles.wrapDiv}>
                <div className={styles.firstDiv}>
                    <img src={man} alt={"Image of a man sitting on a couch"}/>
                </div>
                <div className={styles.secondDiv}>
                        <h1>A better rate is waiting</h1>
                         <div className={styles.mortgage}>
                             <div className={styles.mortgageText}>
                             <p>Mortgage</p> <p>Banking</p>
                             </div>
                             <div className={styles.lines}>
                                 <hr className={styles.lineOne}></hr> <hr className={styles.lineTwo}></hr>
                             </div>
                         </div>
                         <div className={styles.boxes}>
                             <div className={styles.firstBox}>
                                 <h3>Mortgage rate</h3>
                             </div>
                             <div className={styles.secondBox}>
                                 <h3>Today's mortgage rate</h3>
                             </div>
                         </div>
                </div>
            </div>

        </div>
    )

}
export default Better;