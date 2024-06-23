
import styles from "./FooterSection.module.css"
// import  logo from "../../Assets/logo.jpg"
import miniLogo from  "../../Assets/download.png"
import instaIcon from "../../Assets/instaIcon.png"
import facebookLogo from "../../Assets/facebookLogo.png"
import twitterIcon from "../../Assets/twitterIcon.png"
const FooterSection = ()=>{
    return(
        <div className = {styles.mainCont}>

            <div className={styles.wrapperDiv}>
                    <div className={styles.firstDiv}>

                        <div className={styles.logoWrap}>

                            <div>
                                <img src={miniLogo} alt={"OfSpace Company Logo"} className={styles.mainImg}/>
                            </div>
                            <div className={styles.mainText}>
                                <h1>Ofspace</h1>
                                <p>Digital  Agency</p>
                            </div>
                        </div>

                        <p>Bankrate.com is an independent,<br/>
                            advertising-supported publisher<br/>
                            and comparison service .</p>
                        <div className={styles.imgDiv}>
                            <img src={instaIcon} alt={"ofspace logo"}/>
                            <img src={facebookLogo} alt={"ofspace logo"}/>
                            <img src={twitterIcon} alt={"ofspace logo"}/>
                        </div>
                    </div>

                   <div className={styles.secondDiv}>
                            <h4>ABOUT</h4>
                            <p>About us</p>
                            <p>Press room</p>
                            <p>Careers </p>
                            <p>Advertise with us </p>
                            <p>Site map</p>

                   </div>

                  <div className={styles.secondDiv}>
                            <h4>HELP</h4>
                            <p>Contact us</p>
                            <p>Latest news </p>
                            <p>Popular topics </p>
                            <p>Glossary </p>

                  </div>

                 <div className={styles.secondDiv}>
                            <h4>LEGAL</h4>
                            <p>privacy policy</p>
                            <p>Do not sell my info  </p>
                            <p>Popular topics </p>
                            <p>Terms of use </p>

                 </div>



        </div>

        </div>
    );

}
export default FooterSection;