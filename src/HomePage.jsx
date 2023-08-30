import { useState } from "react";
import styles from "./HomePage.module.css";

function HomePage() {
  const [inputClick, setInputClick] = useState(0);


  return (
    <>
      <input
        type="text"
        value={inputClick}
        onClick={() => setInputClick(inputClick < 3 ?  inputClick + 1 : 3)}
        className={styles.invisibleInput}
      />
     {inputClick == 0 && (
        <div className={styles.initialAnimation}/>)}
     {inputClick == 1 && (
        <div className={styles.transitionAnimation}/>)}
     {inputClick == 2 && (
        <div className={styles.grettingsAnimation}/>)}
    </>
  );
}

export default HomePage;
