import { useState } from "react";
import BackgroundParticles from "../BackgroundParticles";
import style from "./About.module.css";
import VignetteText from "../VignetteText";

const gifsMe = [{ src: "/standby.gif" }, { src: "/talking.gif" }];

const textAbout = [
  [
    <span key={1} className="animate-fade-right">
      ¡Hola a todos!
    </span>,
  ],
  [
    <span key={2} className="animate-fade-right">
      Soy Nahuel. A los 19 años comencé mi aventura en Ingeniería en Sistemas, y
      fue ahí donde me sumergí de lleno en el apasionante mundo de la
      programación. Ahora, a mis 22 años, ya me desenvuelvo como desarollador
      Full Stack.
    </span>,
  ],
  [
    <span key={3} className="animate-fade-right">
      Me gusta trabajar meticulosamente, siempre buscando la precisión en lo que
      hago. Cuando trabajo en equipo, priorizo la comunicación y busco crear un
      ambiente ameno y cooperativo.
    </span>,
  ],
  [
    <span key={4} className="animate-fade-right">
      Para mí, la comunicación es esencial; es la herramienta que nos permite
      avanzar, ya sea en proyectos individuales o grupales. Y siempre he creído
      que la organización es clave en nuestro rubro.
    </span>,
  ],
  [
    <span key={5} className="animate-fade-left">
      Si necesitas a alguien con experiencia en JavaScript, React, Redux,
      Next.js, Express.js, Node.js, PostgreSQL, MySQL y que sea bueno en CSS
      ¡aquí estoy! No dudes en escribirme. Será genial lo qué podremos hacer
      juntos.
    </span>,
  ],
];

const isMobile = window.innerWidth <= 767;

function About() {
  const [currentGifIndex, setCurrentGifIndex] = useState(0);

  return (
    <section className="flex flex-col h-full w-full z-10 sm:p-10 text-rose-500 dark:text-[#F5F1DE]">
      <div className={style.container} >
        <span style={{ "--l": "'N'" }}>N</span>
        <span style={{ "--l": "'A'" }}>A</span>
        <span style={{ "--l": "'H'" }}>H</span>
        <span style={{ "--l": "'U'" }}>U</span>
        <span style={{ "--l": "'E'" }}>E</span>
        <span style={{ "--l": "'L'" }}>L</span>
      </div>

      <div className="flex justify-center pb-5 sm:pb-10 font-minecraft text-rose-500 dark:text-[#F5F1DE] text-lg md:text-xl lg:text-4xl">
        <span className={style.dev} style={{ "--d": "'Full Stack Developer'" }}>
          Full Stack Developer
        </span>
      </div>

      <div className="flex justify-center items-end h-[48%] xsm:h-[51%] sm:h-[35%] md:h-[12%] sm:mt-10 md:justify-start mx-2 lg:mx-32 xl:mx-52 lg:my-40">
        <VignetteText
          setCurrentIndex={setCurrentGifIndex}
          currentIndex={currentGifIndex}
          text={textAbout}
          gifs={gifsMe}
        />
      </div>
      {!isMobile ? (
        <BackgroundParticles
          widthRem={50}
          heightRem={40}
          num={isMobile ? 5 : 30}
        />
      ) : (
        ""
      )}
    </section>
  );
}

export default About;
