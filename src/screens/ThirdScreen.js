import styles from "./ThirdScreen.module.css"
import map from "../images/מפה נאור לוי.png"
import PriceList from "../components/mehiron/Mehiron"
import Button from "../components/button/Button"
import { useEffect } from "react"
import ScrollReveal from "scrollreveal"
const ThirdScreen=()=>{
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
        ScrollReveal().reveal(`.${styles.description}`, {
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
          ScrollReveal().reveal(`.${styles.side}`, {
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
  },[])
  

return <>
<div className={styles.background}>
<div className={styles.title}>קצת עלינו</div>
<div className={styles.description}>לחץ על המפה לקישור ישיר לוייז</div>
<div className={styles.row}>
<PriceList/>
<div className={styles.side}><img className={styles.image} src={map}/></div>

</div>
<Button text="אני רוצה לקבוע תור"/>
</div>
</>


}
export default ThirdScreen