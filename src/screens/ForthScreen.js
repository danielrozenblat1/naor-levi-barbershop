import styles from "./ForthScreen.module.css"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from "../components/button/Button"
import Slider from "react-slick"
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import result from "../images/result.png"
import result1 from "../images/result1.png"
import result2 from "../images/result2.png"
import result3 from "../images/result3.png"
import result4 from "../images/result4.png"
import result5 from "../images/result5.png"
import result6 from "../images/result6.png"
import result7 from "../images/result7.png"
import result8 from "../images/result8.png"
import result9 from "../images/result9.png"
import result10 from "../images/result10.png"
import result11 from "../images/result11.png"
import result12 from "../images/result12.png"
import result14 from "../images/result14.png"
import result15 from "../images/result15.png"
import result16 from "../images/result16.png"
import result17 from "../images/result17.png"
import result18 from "../images/result18.png"
import result19 from "../images/result19.png"
import result20 from "../images/result20.png"
import result21 from "../images/result21.png"
import result22 from "../images/result22.png"
import result23 from "../images/result23.png"
import result24 from "../images/result24.png"
import result25 from "../images/result25.png"
import result26 from "../images/result26.png"
import result27 from "../images/result27.png"

const ForthScreen=()=>{

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2500,
        slidesToShow: window.innerWidth < 450 ? 1 : window.innerWidth < 650 ? 2 : 3,
        slidesToScroll:1,
        // הוספת מרווח בין תמונות באמצעות padding
        style: {
          padding: '0 10px', // התאמת המרווח לפי הצורך שלך
        }
      };

      const content = [


        {
            type: 'image',
            src: result,
          },
        
        {
          type: 'image',
          src: result1,
        },
      
        {
          type: 'image',
          src: result2,
        },
 

        {
          type: 'image',
          src: result3,
        },
        {
            type: 'image',
            src: result4,
          },
        
          {
            type: 'image',
            src: result5,
          },
   
  
          {
            type: 'image',
            src: result6,
          },
      
          {
            type: 'image',
            src: result7,
          },
        
          {
            type: 'image',
            src: result8,
          },
   
  
          {
            type: 'image',
            src: result9,
          },
      
          {
            type: 'image',
            src: result10,
          },
        
          {
            type: 'image',
            src: result11,
          },
   
  
          {
            type: 'image',
            src: result12,
          },
      
          {
            type: 'image',
            src: result14,
          },
          {
            type: 'image',
            src: result15,
          },
   
  
          {
            type: 'image',
            src: result16,
          },
      
          {
            type: 'image',
            src: result17,
          },
        
          {
            type: 'image',
            src: result18,
          },
   
  
          {
            type: 'image',
            src: result19,
          },
      
          {
            type: 'image',
            src: result20,
          },
          {
            type: 'image',
            src: result21,
          },
   
  
          {
            type: 'image',
            src: result22,
          },
      
          {
            type: 'image',
            src: result23,
          },
        
          {
            type: 'image',
            src: result24,
          },
   
  
          {
            type: 'image',
            src: result25,
          },
      
          {
            type: 'image',
            src: result26,
          },
          
          {
            type: 'image',
            src: result27,
          },
    ];

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
 
  },[])

return <>
<div className={styles.background}>

<div className={styles.title}>אתה במרחק קליק מלהראות כמוהם</div>

<div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {content.map((item, index) => (
            <div key={index}>
              {item.type === 'image' && (
                <img src={item.src} className={styles.image1} alt={`רגינה אטן לקוחה ממליצה מספר ${index + 1}`} />
              )}
              {/* {item.type === 'video' && (
                <video
                  style={{ width: "100%",display:"flex",objectFit:"cover", margin: "auto", height: "100%" }}
                  muted
                  controls
                >
                  <source src={item.src} type="video/mp4" />
             
                </video>
              )} */}
            </div>
          ))}
        </Slider>
      </div>
     <div className={styles.center}> <Button text="לעוד תספורות לחץ כאן"/></div>
      </div>

</>


}
export default ForthScreen