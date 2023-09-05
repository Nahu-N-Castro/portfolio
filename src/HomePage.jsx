import { useState, useEffect } from "react";
import styles from "./HomePage.module.css";
import PropTypes from "prop-types";
import TextReveal from "./components/TextReveal/TextReveal";

const gifs = [
  { src: "public/bucle-night-1.gif", type: "loop" },
  { src: "public/bucle-night-2.gif", type: "transition" },
  { src: "public/bucle-night-3.gif", type: "loop" },
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

  return (
    <div className={styles.container}>
      <GifPlayer
        setCurrentGifIndex={setCurrentGifIndex}
        currentGifIndex={currentGifIndex}
        gifs={gifs}
      />
      {currentGifIndex == 2 && (
        <>  
          <TextReveal />
        </>
      )}
    </div>
  );
}

export default HomePage;
