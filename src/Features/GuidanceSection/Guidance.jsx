import styles from "./Guidance.module.css"
import man from "../../Assets/Man.jpg"
import woman from "../../Assets/woman.jpg"
import mom from "../../Assets/Mom-tips.jpg"
const Guidance = ()=>{
    return(
        <div className={styles.mainCont}>

                <div className={styles.wrapDiv}>
                            <div className={styles.firstDiv}>
                                    <p>200+ FINANCIAL CALCULATORS</p>
                                    <h1>Guidance for every</h1>
                                    <div className={styles.innerDiv}>
                                        <div className={styles.firstText}>

                                                       <p>Mortgage calculator</p>
                                                       <p>Amortization</p>
                                                       <p>Home Affordability</p>
                                                       <p>CD calculator</p>

                                        </div>
                                        <div className={styles.secondText}>
                                                       <p>Simple savings</p>
                                                       <p>Cost-of-living</p>
                                                       <p>Credit card payoff</p>
                                                       <p>Balance transfer</p>

                                        </div>


                                    </div>
                            </div>
                            <div className={styles.secondDiv}>
                                <div className={styles.fourthImgDiv}>
                                    <img src={mom} alt={"Mother reading to her child"}/>
                                </div>
                                <div className={styles.thirdImgDiv}>
                                    <img src={woman} alt={"woman and children playing"}/>
                                </div>
                                <div className={styles.secondImgDiv}>
                                    <img src={man} alt={"man sitting on a couch"}/>
                                </div>
                                <div className={styles.firstImgDiv}></div>

                            </div>
                </div>

        </div>
    );

}
export default Guidance