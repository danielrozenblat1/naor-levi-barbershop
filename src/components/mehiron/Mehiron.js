import React, { useEffect } from 'react';
import styles from './Mehiron.module.css';
import whiteLogo from "../../images/נאור לוי לוגו לבן.png"
import ScrollReveal from 'scrollreveal';
const PriceList = () => {
  const prices = [
    { serviceName: "תספורת ילד/גבר", servicePrice: 70 },
    { serviceName: "תספורת + זקן קצר", servicePrice: 80 },
    { serviceName: "תספורת + זקן ארוך", servicePrice: 90 },
    { serviceName: "שעווה בגבות/ לחיים/אף", servicePrice: 20 },
    { serviceName: "תוספת שעווה לאחר זקן", servicePrice: 10 },
  ];

  useEffect(()=>{

      ScrollReveal().reveal(`.${styles.priceList}`, {
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
      ScrollReveal().reveal(`.${styles.priceItem}`, {
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


    {/* <h1 className={styles.header}>מחירון</h1> */}

    <div className={styles.priceList}>
    <div className={styles.center}><img className={styles.logo} src={whiteLogo}/></div> 
      {prices.map((priceItem) => (
        <div key={priceItem.serviceName} className={styles.priceItem}>
         <div className={styles.servicePrice}>{priceItem.servicePrice}₪</div>
          <div className={styles.line}>
            <div className={styles.lineFill}></div>
          </div>
    
          <div className={styles.serviceName}>{priceItem.serviceName}</div>
        </div>
      ))}
    </div>

    </>
};

export default PriceList;