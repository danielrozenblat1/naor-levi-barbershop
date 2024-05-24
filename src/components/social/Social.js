import React from 'react';
import styles from './Social.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faGithub, faLinkedin, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt, faBook } from '@fortawesome/free-solid-svg-icons';
const SocialIcons = () => {

  const whatsappMessageLink = "https://wa.me/972544564827?text=מה%20קורה%20נאור?%20אשמח%20לדעת...";
  return (
    <ul className={styles.iconList}>
      <li className={styles.iconContent}>
        <a
          data-social="facebook"
          aria-label="facebook"
          href="tel:+972544564827"
          className={styles.iconLink}
          target="_blank" rel="noopener noreferrer"
        >
          <div className={styles.filled}></div>
          <FontAwesomeIcon icon={faMobileAlt} />
        </a>
        <div className={styles.tooltip}>בוא נדבר</div>
      </li>
      <li className={styles.iconContent}>
        <a
          data-social="LinkedIn"
          aria-label="LinkedIn"
          href="https://plannieapp.com/?name=מספרתנאורלוי"
          className={styles.iconLink}
          target="_blank" rel="noopener noreferrer"
        >
          <div className={styles.filled}></div>
          <FontAwesomeIcon icon={faBook} />
        </a>
        <div className={styles.tooltip}>לקביעת תור</div>
      </li>
      <li className={styles.iconContent}>
        <a
          data-social="instagram"
          aria-label="instagram"
          href=""
          className={styles.iconLink}
          target="_blank" rel="noopener noreferrer"
        >
          <div className={styles.filled}></div>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <div className={styles.tooltip}>אינסטגרם</div>
      </li>
      <li className={styles.iconContent}>
        <a
          data-social="whatsApp"
          aria-label="whatsApp"
          href={whatsappMessageLink}
          className={styles.iconLink}
          target="_blank" rel="noopener noreferrer"
        >
          <div className={styles.filled}></div>
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <div className={styles.tooltip}>ווצאפ</div>
      </li>
    </ul>
  );
};

export default SocialIcons;
