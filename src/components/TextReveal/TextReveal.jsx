/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import styles from "./TextReveal.module.css";

function TextReveal({ texts }) {
  const [text, setText] = useState("");
  const [textChildren, setTextChildren] = useState([]);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [delay, setDelay] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const interval = useRef(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      if (delay !== 0) {
        setDelay(delay > 300 ? delay - 300 : 0);
        return;
      }
      const textObject = texts[currentTextIndex]
      if (textObject === undefined) {
        clearInterval(interval.current);
        return;
      }

      const char = textObject.string[charIndex];
      if (char === undefined) {
        setDelay(textObject.delay);
        setText("");
        setCurrentTextIndex(currentTextIndex + 1);
        setCharIndex(0);
        return;
      }

      setText((prevText) => prevText + char);
      setCharIndex((prevIndex) => prevIndex + 1);

      let newChildren = [...textChildren];
      newChildren[currentTextIndex] = (
        <span key={currentTextIndex} className={`${textObject.classes || ""}`}>
          {text}
        </span>
      );

      setTextChildren(newChildren);
    }, 40);

    return () => {
      clearInterval(interval.current);
    };
  }, [text, textChildren, currentTextIndex, delay, charIndex,texts]);

  return (
    <div
      className={`${styles.customFont} top-0 sm:rounded-tl-2xl sm:rounded-br-2xl sm:rounded-tr-2xl bg-purple-200 border-4 border-purple-900 flex items-center justify-center cursor-pointer absolute sm:top-1/3 sm:left-[50%] xl:top-[40%] p-8 mt-5 `}>
      <span className="text-black transition-opacity duration-300 mx-1 text-xl">
        {textChildren.map((span) => {
          return span;
        })}
      </span>
    </div>
  );
}

export default TextReveal;
