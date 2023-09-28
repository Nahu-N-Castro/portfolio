import { useState, useEffect } from "react";
import styles from "./IntroPage.module.css";
import PropTypes from "prop-types";
import TextReveal from "../../src/components/TextReveal/TextReveal";
import { Navigate } from "react-router-dom";

const gifsNight = [
  { src: "public/night-1.gif", type: "loop" },
  { src: "public/night-2.gif", type: "transition" },
  { src: "public/night-3.gif", type: "loop" },
  { src: "public/night-4.png", type: "loop" },
];
const gifsDay = [
  { src: "public/day-1.gif", type: "loop" },
  { src: "public/day-2.gif", type: "transition" },
  { src: "public/day-3.gif", type: "loop" },
  { src: "public/day-4.png", type: "loop" },
];

function GifPlayer({ gifs, currentGifIndex, setCurrentGifIndex }) {
  useEffect(() => {
    if (gifs[currentGifIndex].type === "transition") {
      const img = new Image();
      img.src = gifs[currentGifIndex].src;
      img.onload = () => {
        const gifDuration = 600;
        setTimeout(() => {
          setCurrentGifIndex((prevIndex) =>
            prevIndex < 3 ? prevIndex + 1 : null
          );
        }, gifDuration);
      };
    }
  }, [currentGifIndex, gifs]);

  const handlerClick = () => {
    if (currentGifIndex === gifs.length - 1) {
      setCurrentGifIndex(-1);
    } else {
      setCurrentGifIndex((prevIndex) => (prevIndex < 3 ? prevIndex + 1 : null));
    }
  };

  return (
    <img
      className={`${
        styles.gifAnimated
      } h-screen w-screen max-w-screen object-cover object-center ${
        currentGifIndex === 3 ? styles.customOrigin : ""
      }`}
      src={gifs[currentGifIndex].src}
      alt="gif"
      onClick={handlerClick}
    />
  );
}

GifPlayer.propTypes = {
  gifs: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentGifIndex: PropTypes.number.isRequired,
  setCurrentGifIndex: PropTypes.func.isRequired,
};

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
    <div className="relative">
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
            className={`${styles.clickTo} absolute text-xl bottom-0 left-1/2 transform -translate-x-1/2 pb-10`}>
            Click to Continue !
          </h2>
        </>
      )}

      {shouldNavigate && <Navigate to="/home" />}
    </div>
  );
}

export default IntroPage;
