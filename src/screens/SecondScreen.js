import styles from "./SecondScreen.module.css"
import naor from "../images/naorMain.png"
import barber from "../components/icons/wired-lineal-1566-barber-pole.json"
import ScrollReveal from "scrollreveal"
import { Player } from "@lordicon/react";
import { useEffect, useRef } from "react";
import Button from "../components/button/Button";
const SecondScreen=()=>{
    const playerRef1=useRef(null)
  const handleComplete=()=>{
    setTimeout(() => {
        playerRef1?.current?.playFromBeginning();
      }, 2500); // play again after 2.5 seconds
    
    }
      useEffect(()=>{
    
        playerRef1.current?.playFromBeginning();

            
         
      },[])

      useEffect(()=>{

          ScrollReveal().reveal(`.${styles.title}`, {
              duration: 1000,
              distance: "30px",
              origin: "right", // Start from the right side
              easing: "ease-in-out",
              reset:false,
              viewFactor: 0.2,
              interval: 300, // Delay between each element
              delay: 200, // Delay before the animation starts
              scale: 1, // Set scale to 1 or null
            });
            ScrollReveal().reveal(`.${styles.job}`, {
              duration: 1000,
              distance: "30px",
              origin: "right", // Start from the right side
              easing: "ease-in-out",
              reset:false,
              viewFactor: 0.2,
              interval: 300, // Delay between each element
              delay: 200, // Delay before the animation starts
              scale: 1, // Set scale to 1 or null
            });
            ScrollReveal().reveal(`.${styles.left}`, {
                duration: 1000,
                distance: "30px",
                origin: "left", // Start from the right side
                easing: "ease-in-out",
                reset:false,
                viewFactor: 0.2,
                interval: 300, // Delay between each element
                delay: 200, // Delay before the animation starts
                scale: 1, // Set scale to 1 or null
              });
      },[])

    return <>
  
   <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.imageWrapper}>
            <img className={styles.image} src={naor} alt="נאור לוי" />
          </div>
        </div>

        <div className={styles.right}>
            <div className={styles.row}>
        <div className={styles.job}>ספר גברים וילדים</div>
        <div className={styles.icon}>
          <Player ref={playerRef1} size="100%" onComplete={handleComplete}
            icon={barber}
          />
          </div>
          <div className={styles.title} id="קצת עלי">נאור לוי</div>
        
          </div>
          <div className={styles.description}>
         בעשור האחרון אני קם כל בוקר והולך לישון כל לילה במטרה אחת - שכל אדם שנכנס אלי למספרה ייצא עם חיוך - גם מהתספורת שלו וגם מהחוויה במספרה עצמה
          </div>

        <div className={styles.rowReverse}>
      

            <Button text="נאור, תראה לי עבודות שלך"/>
        </div>

        </div>
      </div>
    </>
}
export default SecondScreen