import styles from "./Button.module.css";
import {Link as ScrollLink } from "react-scroll";
const Button=(props)=>{
const openNaor=()=>{
  window.open(props.href)
}
return <>

{props.href && <button onClick={openNaor} className={styles.button}>
{props.text}
  {/* <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>*/}
</button>}
{!props.href && <button className={styles.button}>
<ScrollLink to={props.scrollTo} smooth={true} duration={1000} offset={-100}>{props.text}
  {/* <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>*/}
  </ScrollLink></button>}
    </>
}
export default Button