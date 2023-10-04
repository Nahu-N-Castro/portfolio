import { useState } from "react";
import GifPlayer from "../GifPlayer/GifPlayer";
import BackgroundParticles from "../BackgroundParticles";
import style from "./About.module.css";

function About() {
  const [currentGifIndex, setCurrentGifIndex] = useState(0);
  const gifsMe = [
    { src: "/standby.gif", type: "loop" },
    { src: "/talking.gif", type: "transition" },
    { src: "/standby.gif", type: "loop" },
    { src: "/talking.gif", type: "transition" },
    { src: "/standby.gif", type: "loop" },
  ];
  return (
    <section className="grid grid-rows-2 h-full w-full z-10">
      <div className={style.container}>
        <span style={{ "--l": "'N'" }}>N</span>
        <span style={{ "--l": "'A'" }}>A</span>
        <span style={{ "--l": "'H'" }}>H</span>
        <span style={{ "--l": "'U'" }}>U</span>
        <span style={{ "--l": "'E'" }}>E</span>
        <span style={{ "--l": "'L'" }}>L</span>
      </div>

      <div className="absolute top-[27%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-minecraft text-[#F5F1DE] text-4xl">
        <span className={style.dev} style={{ "--d": "'Full Stack Developer'" }}>
          Full Stack Developer
        </span>
      </div>

      <div className="absolute -bottom-3 mx-10 h-96 z-50">
        <GifPlayer
          gifDuration={4200}
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
