import { useEffect } from "react";
import SocialIcons from "../components/social/Social"
import styles from "./ContactScreen.module.css"
import ScrollReveal from "scrollreveal";

const ContactScreen=()=>{


    
    useEffect(()=>{

        ScrollReveal().reveal(`.${styles.title}`, {
            duration: 1000,
            distance: "30px",
            origin: "top", // Start from the right side
            easing: "ease-in-out",
            reset:false,
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
 

          
        ScrollReveal().reveal(`.${styles.description}`, {
            duration: 1000,
            distance: "30px",
            origin: "top", // Start from the right side
            easing: "ease-in-out",
            reset:false,
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
  },[])
    return <>
    <div className={styles.background}>
    <div className={styles.title}>שלא תגיד לא ידעתי</div>
    <div className={styles.row}>

{/* שעות פעילות */}
    <div className={styles.wrap}>
    <div className={styles.subTitle}>שעות פעילות</div>
    <div className={styles.description}>יום א' ------ 11:00-19:00</div>
    <div className={styles.description}>יום ב' ------ 11:00-17:00</div>
    <div className={styles.description}>יום ג' ------ 11:00-19:00</div>
    <div className={styles.description}>יום ד',ה' ------ 11:00-22:00</div>
    <div className={styles.description}>יום ו ------ 8:00-13:00</div>
    </div>

{/* מספר טלפון וכתובת */}

<div className={styles.wrap}>
<div className={styles.subTitle}>כתובת + יצירת קשר</div>
    <div className={styles.description}>טיומקין 18 , ראשון לציון</div>
    <div className={styles.description}>054-456-4827 || לכל שאלה תלחצו כאן וחייגו אלי</div>


</div>


{/* סושיאל מדיה */}

<div className={styles.wrap}>

<div className={styles.subTitle}>חפשו אותי ב</div>
<SocialIcons/>

</div>

    </div>
    </div>
    </>
}
export default ContactScreen