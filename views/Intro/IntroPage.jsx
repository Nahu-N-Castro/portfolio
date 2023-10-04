import { useState, useEffect } from "react";
import styles from "./IntroPage.module.css";
import TextReveal from "../../src/components/TextReveal/TextReveal";
import { Navigate } from "react-router-dom";
import GifPlayer from "../../src/components/GifPlayer/GifPlayer";

const gifsNight = [
  { src: "night-1.gif", type: "loop" },
  { src: "night-2.gif", type: "transition" },
  { src: "night-3.gif", type: "loop" },
  { src: "night-4.png", type: "loop" },
];
const gifsDay = [
  { src: "day-1.gif", type: "loop" },
  { src: "day-2.gif", type: "transition" },
  { src: "day-3.gif", type: "loop" },
  { src: "day-4.png", type: "loop" },
];

function IntroPage() {
  const [currentGifIndex, setCurrentGifIndex] = useState(0);
  const [mode, setMode] = useState(true);
  const [shouldNavigate, setShouldNavigate] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    mode ? setTheme("dark") : setTheme("light");
    theme === "dark"
      ? document.querySelector("html").classList.add("dark")
      : document.querySelector("html").classList.remove("dark");
  }, [mode,theme]);

  if (currentGifIndex === 3) {
    setTimeout(() => {
      setShouldNavigate(true);
    }, 800);
  }
  return (
    <div className="relative h-screen w-screen">
      {currentGifIndex > -1 && (
        <GifPlayer
          setCurrentGifIndex={setCurrentGifIndex}
          currentGifIndex={currentGifIndex}
          gifs={mode ? gifsNight : gifsDay}
        />
      )}

      {currentGifIndex === 2 && <TextReveal />}

      {currentGifIndex < 3 && (
        <>
          <button
            className={`absolute top-64 right-10 w-10 h-16 border-none bg-center bg-cover sm:right-[9rem] sm:top-[35rem] sm:w-20 sm:h-28 hover:border-white hover:border-double focus:outline-none ${
              mode ? styles.imageOne : styles.imageTwo
            }`}
            onClick={() => setMode(!mode)}
          />
          <h2
            className={`${styles.clickTo} absolute text-xl sm:bottom-0 left-1/2 transform -translate-x-1/2 bottom-20 pb-10`}>
            Click to Continue !
          </h2>
        </>
      )}

      {shouldNavigate && <Navigate to="/home" />}
    </div>
  );
}

export default IntroPage;
