import styles from "./NavBar.module.css"
import logo from "../../../Assets/logo.jpg"
import arrow from "../../../Assets/arrows.png"
import piggy from "../../../Assets/piggy.png"
import bank from "../../../Assets/bank.png"
const NavBar = ()=>{
    return(
        <div className={styles.mainDiv}>
            <div className={styles.navCont}>
                      <div className={styles.logoDiv}>
                          <img src={logo} alt={"Ofspace log"}/>
                      </div>
                      <div className={styles.navLinks}>
                          <a>About</a>
                          <a>Contact us</a>
                          <a>Help</a>
                          <a>Search</a>
                      </div>
                      <div className={styles.navButtons}>
                          <a>Log in</a>
                          <button>Sign up</button>
                      </div>

            </div>

            <div className={styles.heroDiv}>
                    <div className={styles.heroText}>
                        <h1>Guiding you<span style={{display:"block"}}></span> through life's<span style={{display:"block"}}></span> financial journey</h1>
                        <p>Grow your money faster with smart tools in an <span style={{display:"block"}}>Ally Bank Online Savings Account </span></p>
                    </div>
            </div>

            <div className={styles.tabCont}>
                <div className={styles.tabDiv}>
                        <div className={styles.tabText}>
                            <img src={arrow} alt={"Arrow Logo"} />
                            <h3>Self Directed Trading</h3>
                            <p>That's right-you can trade commission<span style={{display:"block"}}>
                                               free with Ally Invest Self-Directed Trading
                                           </span></p>
                            <h4>Learn More &#8594;</h4>
                        </div>

                        <div className={styles.tabText}>
                            <img src={piggy} alt={"Piggy Logo"}/>
                            <h3>Managed Portfolios</h3>
                            <p>we're offering investing free of advisory<span style={{display:"block"}}>
                                               fees. Start investing with as little as &#x24;100
                                                   </span></p>
                            <h4>Learn More &#8594;</h4>
                        </div>

                        <div className={styles.tabText}>
                            <img src={bank} alt={"Bank Logo"} />
                            <h3>Home Loans</h3>
                            <p>You could get pre-approved for<span style={{display:"block"}}>
                                               a home loan we're offering
                                                   </span></p>
                            <h5>Learn More &#8594;</h5>
                        </div>

            </div>
            </div>

        </div>
    )

}
export default NavBar