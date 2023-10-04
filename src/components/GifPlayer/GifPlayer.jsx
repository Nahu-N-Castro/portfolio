/* eslint-disable react/prop-types */
import { useEffect } from "react";
import styles from "./GifPlayer.module.css";
import PropTypes from "prop-types";

function GifPlayer({ gifs, currentGifIndex, setCurrentGifIndex, gifDuration }) {
  useEffect(() => {
    if (gifs[currentGifIndex].type === "transition") {
      const img = new Image();
      img.src = gifs[currentGifIndex].src;
      img.onload = () => {
        setTimeout(() => {
          setCurrentGifIndex((prevIndex) =>
            prevIndex < gifs.length ? prevIndex + 1 : 0
          );
        }, gifDuration);
      };
    }
  }, [currentGifIndex, gifs]);

  const handlerClick = () => {
    if (currentGifIndex === gifs.length - 1) {
      setCurrentGifIndex(0);
    } else {
      setCurrentGifIndex((prevIndex) => (prevIndex < gifs.length ? prevIndex + 1 : 0));
    }
  };

  return (
    <img
      className={`${
        styles.gifAnimated
      } h-full w-full max-w-screen object-cover object-center ${
        currentGifIndex === gifs.length ? styles.customOrigin : ""
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

export default GifPlayer;
