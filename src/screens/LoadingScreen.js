import Button from "../components/button/Button"
import styles from "./LoadingScreen.module.css"
import barber from "../components/icons/wired-lineal-701-mustache-beard.json"
import { useEffect, useRef } from "react"
import { Player } from "@lordicon/react"
const LoadingScreen=()=>{
    const playerRef1=useRef(null)
    const handleComplete=()=>{
      setTimeout(() => {
          playerRef1?.current?.playFromBeginning();
        }, 2500); // play again after 2.5 seconds
      
      }
        useEffect(()=>{
      
          playerRef1.current?.playFromBeginning();
  
              
           
        },[])


    return <>
    
    <div className={styles.background}>
<div className={styles.title}>העמוד בטעינה.. אנא המתן...</div>
    <div className={styles.icon}>
          <Player ref={playerRef1} size="100%" onComplete={handleComplete}
            icon={barber}
          />
          </div>
          <div className={styles.title}>אין סבלנות :) ?</div>
      <div className={styles.center}> <Button loading={true} text="לקביעת תור לחץ כאן"/></div>
    </div>
    
    </>
}
export default LoadingScreen