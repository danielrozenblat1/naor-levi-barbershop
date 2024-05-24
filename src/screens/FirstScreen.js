import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import LoadingScreen from "./LoadingScreen";
import styles from "./FirstScreen.module.css";
import rekaImage from "../images/רקע חדש.png"; // Import the image file

const FirstScreen = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = rekaImage; // Use the imported image object
    imageLoader.onload = () => setImageLoaded(true);
  }, []);

  return (
    <>

      {!imageLoaded && <LoadingScreen />}
      {imageLoaded &&  <div className={styles.background}>
      <NavBar />
      </div>}
    </>
  );
};

export default FirstScreen;