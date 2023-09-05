import { useState, useEffect, useRef } from "react";
import styles from "./TextReveal.module.css";

const texts = [
  { string: "Hola como andas? ", classes: "red", delay: 1000 },
  { string: "todo bien? ", delay: 5000 },
  { string: "todo biens? ", delay: 700 },
];

function TextReveal() {
  const [text, setText] = useState("");
  const [textChildren, setTextChildren] = useState([]);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [delay, setDelay] = useState(0);
  const interval = useRef(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      if (delay != 0) {
        setDelay(delay > 300 ? delay - 300 : 0);
        setTimeout(() => {}, delay);
        return;
      }
      const textObject = texts[currentTextIndex];
      if (textObject === undefined) {
        clearInterval(interval.current);
        return;
      }

      const char = textObject.string[text.length];
      if (char === undefined) {
        setDelay(textObject.delay);
        setText("");
        setCurrentTextIndex(currentTextIndex + 1);
        return;
      }

      setText(text + char);

      let newChildren = textChildren;
      newChildren[currentTextIndex] = (
        <span key={currentTextIndex} className={styles[textObject.classes]}>
          {text}
        </span>
      );

      setTextChildren(textChildren);
    }, 300);
    return () => {
      clearInterval(interval.current);
    };
  }, [text, textChildren, currentTextIndex, delay]);

  return (
    <>
      <div className={styles.shadowTextContainer}>
        <p className={styles.wrapped}>
          {textChildren.map((span) => {
            return span;
          })}
        </p>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.wrapped}>
          {textChildren.map((span) => {
            return span;
          })}
        </p>
      </div>
    </>
  );
}

export default TextReveal;
