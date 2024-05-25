import React from "react";
import styles from "./NavBar.module.css";
import {Link as ScrollLink } from "react-scroll";
import logo from "../../images/נאור לוי לוגו.png"
import Button from "../button/Button";

const NavBar = () => {

  const openNaor=()=>{
window.open("https://plannieapp.com/?name=מספרתנאורלוי")
  }

  return <>
    <nav className={styles.navBar}>
  
    {window.innerWidth>1050&& <ul className={styles.navLinks}>

      <li>
    <a className={styles.a} href="tel:+972544564827"> <div className={styles.navLink}>
           חייג אלי
         </div></a>
          {/* <div className={styles.underline}></div> */}
        </li>

        <li>
        <ScrollLink to="לקוחות ממליצים" smooth={true} duration={1000} offset={-100}>  <div className={styles.navLink}>
       לקוחות מרוצים
        </div></ScrollLink>
          {/* <div className={styles.underline}></div> */}
        </li>
        <li>
        <ScrollLink to="קצת עלי" smooth={true} duration={1000} offset={-100}> <div className={styles.navLink}> 
            קצת עלי
         </div></ScrollLink>
          {/* <div className={styles.underline}></div> */}
        </li>
        <li>
         <a className={styles.a}  href="https://plannieapp.com/?name=מספרתנאורלוי"><div className={styles.navLink} >
          קביעת תורים
         </div></a> 
          {/* <div className={styles.underline}></div> */}
        </li>
        <li>
        <ScrollLink to="מיקום" smooth={true} duration={1000} offset={-100}>   <div className={styles.navLink}>
     מיקום
         </div></ScrollLink>
          {/* <div className={styles.underline}></div> */}
        </li>
 
      </ul>}
      <div className={styles.middle}><img className={styles.image} src={logo}/></div>
    <div className={styles.center}><button   onClick={openNaor} className={styles.button}>לקביעת תורים</button></div>
    {/* <Button/> */}
    </nav>
  
  </>
};

export default NavBar;