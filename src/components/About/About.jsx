import { useState } from "react";
import GifPlayer from "../GifPlayer/GifPlayer";
import BackgroundParticles from "../BackgroundParticles";
import style from "./About.module.css";

function About() {
  const [currentGifIndex, setCurrentGifIndex] = useState(0);
  const gifsMe = [
    { src: "/standby.gif", type: "loop" },
    // { src: "/talking.gif", type: "transition" },
  ];
  return (
    <section className="grid grid-row-2 h-full w-full z-10">
      <div className={style.container}>
        {/* <span style={{ "--l": "'N'" }}>N</span>
        <span style={{ "--l": "'A'" }}>A</span>
        <span style={{ "--l": "'H'" }}>H</span>
        <span style={{ "--l": "'U'" }}>U</span>
        <span style={{ "--l": "'E'" }}>E</span>
        
        <span style={{ "--l": "'L'" }}>L</span> */}
        <span style={{ "--l": "'W'" }}>W</span>
        <span style={{ "--l": "'A'" }}>A</span>
        <span style={{ "--l": "'L'" }}>L</span>
        <span style={{ "--l": "'K'" }}>K</span>
        <span style={{ "--l": "'E'" }}>E</span>
        <span style={{ "--l": "'R'" }}>R</span>
      </div>

      <div className="absolute -bottom-3 mx-10 h-96">
        <GifPlayer
          setCurrentGifIndex={setCurrentGifIndex}
          currentGifIndex={currentGifIndex}
          gifs={gifsMe}
        />
      </div>

      <BackgroundParticles widthRem={50} heightRem={40} />
    </section>
  );
}

export default About;
