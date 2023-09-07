import { useState, useEffect } from "react";
import styles from "./HomePage.module.css";
import PropTypes from "prop-types";
import TextReveal from "./components/TextReveal/TextReveal";

const gifsNight = [
  { src: "public/bucle-night-1.gif", type: "loop" },
  { src: "public/bucle-night-2.gif", type: "transition" },
  { src: "public/bucle-night-3.gif", type: "loop" },
  // { src: 'url_del_gif_transicion_2.gif', type: 'transition' }
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
      img.onload = function () {
        const gifDuration = 1200;
        setTimeout(() => {
          setCurrentGifIndex((prevIndex) => (prevIndex + 1) % gifs.length);
        }, gifDuration);
      };
    }
  }, [currentGifIndex, gifs]);

  const handlerClick = () => {
    if (gifs[currentGifIndex].type === "loop") {
      setCurrentGifIndex((prevIndex) => (prevIndex + 1) % gifs.length);
    }
  };
  return (
    <img
      className={styles.gifAnimated}
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

function HomePage() {
  const [currentGifIndex, setCurrentGifIndex] = useState(0);
  const [mode, setMode] = useState(true);

  useEffect(() => {}, [mode]);

  return (
    <div className="">
      <GifPlayer
        setCurrentGifIndex={setCurrentGifIndex}
        currentGifIndex={currentGifIndex}
        gifs={mode === true ? gifsNight : gifsDay}
      />
      {currentGifIndex == 2 && (
        <>
          <TextReveal />
        </>
      )}

      <button
        className={`${styles.customButton} ${
          mode ? styles.imageOne : styles.imageTwo
        }`}
        onClick={() => setMode(!mode)}>
      </button>
    </div>
  );
}

export default HomePage;
