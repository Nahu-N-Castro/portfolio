import { useState, useEffect } from "react";
import styles from "./IntroPage.module.css";
import PropTypes from "prop-types";
import TextReveal from "../../src/components/TextReveal/TextReveal";
import { Navigate } from "react-router-dom";

const gifsNight = [
  { src: "public/bucle-night-1.gif", type: "loop" },
  { src: "public/bucle-night-2.gif", type: "transition" },
  { src: "public/bucle-night-3.gif", type: "loop" },
  { src: "public/bucle-night-4.png", type: "loop" },
];
const gifsDay = [
  { src: "public/day-bucle-1.gif", type: "loop" },
  { src: "public/day-transition-1.gif", type: "transition" },
  { src: "public/day-bucle-2.gif", type: "loop" },
  // { src: 'url_del_gif_transicion_2.gif', type: 'transition' }
];

function GifPlayer({ gifs, currentGifIndex, setCurrentGifIndex }) {
  useEffect(() => {
    if (gifs[currentGifIndex].type === "transition") {
      const img = new Image();
      img.src = gifs[currentGifIndex].src;
      img.onload = () => {
        const gifDuration = 1200;
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
