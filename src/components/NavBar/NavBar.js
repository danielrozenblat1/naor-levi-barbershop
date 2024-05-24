import React from "react";
import styles from "./NavBar.module.css";
import { ScrollLink } from "react-scroll";
import logo from "../../images/נאור לוי לוגו.png"
import Button from "../button/Button";

const NavBar = () => {
  return <>
    <nav className={styles.navBar}>
  
    {window.innerWidth>1050&& <ul className={styles.navLinks}>

      <li>
        <div className={styles.navLink}>
           חייג אלי
         </div>
          {/* <div className={styles.underline}></div> */}
        </li>

        <li>
      <div className={styles.navLink}>
       לקוחות מרוצים
        </div>
          {/* <div className={styles.underline}></div> */}
        </li>
        <li>
        <div className={styles.navLink}> 
            קצת עלי
         </div>
          {/* <div className={styles.underline}></div> */}
        </li>
        <li>
        <div className={styles.navLink}>
           קביעת תורים
         </div>
          {/* <div className={styles.underline}></div> */}
        </li>
        <li>
        <div className={styles.navLink}>
     מיקום
         </div>
          {/* <div className={styles.underline}></div> */}
        </li>
 
      </ul>}
      <div className={styles.middle}><img className={styles.image} src={logo}/></div>
    <div className={styles.center}><button className={styles.button}>לקביעת תורים</button></div>
    {/* <Button/> */}
    </nav>
  
  </>
};

export default NavBar;