import styles from "./Perfect.module.css"
import diamondLogo from  "../../Assets/diamond.png"
const Perfect = ()=>{
    return(
        <div className={styles.mainCont}>
            <div className={styles.wrapperDiv}>
                    <div className={styles.firstDiv}>
                           <div className={styles.firstBox}>
                               <p>INTRODUCING CARDMATCH "</p>
                               <h1>Your perfect card is<br/>one click away</h1>
                               <button>Find your match</button>
                           </div>
                            <div className={styles.diamonds}>
                                <img src={diamondLogo} alt={"Diamond logo"} className={styles.smallDiamond}/>
                                <img src={diamondLogo} alt={"Diamond logo"} className={styles.bigDiamond}/>
                            </div>
                       </div>

                    <div className={styles.secondDiv}>

                    </div>
            </div>

        </div>
    )

}
export default Perfect;