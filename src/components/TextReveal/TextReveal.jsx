import { useState, useEffect, useRef } from "react";

const texts = [
  { string: "Hey hola, ", delay: 1000, classes:"px-1" },
  { string: "soy ", delay: 500, classes: "px-1" },
  { string: "Nahuel ", delay: 800, classes: "text-red-500 px-1" },
  { string: "un desarollador web! ", delay: 700, classes: "px-1" },
];

function TextReveal() {
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
      const textObject = texts[currentTextIndex];
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
        <span
          key={currentTextIndex}
          className={`${textObject.classes || ""}`}
        >
          {text}
        </span>
      );
  
      setTextChildren(newChildren);
    }, 80);
  
    return () => {
      clearInterval(interval.current);
    };
  }, [text, textChildren, currentTextIndex, delay, charIndex]);

  return (
    <div className="bg-purple-200 border-4 border-purple-900 flex items-center justify-center cursor-pointer absolute top-1/3 left-1/4 p-8 mt-5">
      <span className="text-black transition-opacity duration-300 mx-3 px-2 text-xl">
        {textChildren.map((span) => {
          return span;
        })}
      </span>
    </div>
  );
}

export default TextReveal;
