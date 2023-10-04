import { useState } from "react";
import GifPlayer from "../GifPlayer/GifPlayer";
import BackgroundParticles from "../BackgroundParticles";
import style from "./About.module.css";
import VignetteText from "../VignetteText";
// import TextReveal from "../TextReveal/TextReveal";

const gifsMe = [
  { src: "/standby.gif", type: "loop" },
  { src: "/talking.gif", type: "transition" },
  { src: "/standby.gif", type: "loop" },
  { src: "/talking.gif", type: "transition" },
  { src: "/standby.gif", type: "loop" },
];

const textAbout = [
  [
    <span key={1} className="animate-fade-right">
      Hola Mundo!
    </span>,
  ],
  [
    <span key={2} className="animate-fade-right">
      Soy Nahuel, un apasionado Desarrollador Web formado en el Bootcamp de
      SoyHenry y estudiante de Ingeniería en Sistemas de Información en la UTN
      FRC. Mi primer acercamiento a la programación fue como Técnico
      Electrónico, trabajando con Arduino. Esta experiencia despertó en mí un
      profundo interés por la tecnología y su potencial para resolver problemas
      cotidianos de maneras innovadoras y eficientes.
    </span>,
  ],
  [
    <span key={3} className="animate-fade-right">
      Adopto una mentalidad crítica y curiosa, disfrutando del desafío de
      mejorar código y descubrir soluciones innovadoras . Mi formación en
      ingeniería y la intensidad del Bootcamp de SoyHenry han potenciado mi
      habilidad para enfrentar desafíos y resolver problemas de manera
      eficiente. Además, mis experiencias académicas y prácticas han cultivado
      mi capacidad para colaborar y liderar equipos , fomentando un ambiente
      de trabajo productivo y cooperativo.
    </span>,
  ],
  [
    <span key={4} className="animate-fade-right">
      Veo la comunicación  como un pilar fundamental que me permite trabajar
      eficazmente tanto en equipos como en proyectos individuales. Además,
      valoro mantener una organización  clara y eficiente.
    </span>,
  ],
  [
    <span key={5} className="animate-fade-right">
      Me emociona la oportunidad de aplicar mi pasión  por la programación, mi
      curiosidad innata y mi constante deseo de aprender en nuevos proyectos y
      desafíos. Cada paso en este camino lo veo como una oportunidad para crecer
       y continuar desarrollándome profesionalmente. Estoy interesado en
      unirme a un equipo que valore la creatividad, la innovación y la
      colaboración, y esté comprometido con ofrecer resultados de alta calidad a
      sus clientes.
    </span>,
  ],
  [
    <span key={5} className="animate-fade-right">
      Si estás buscando a alguien con habilidades en JavaScript, React, Redux,
      Next.js, CSS, Tailwind, Figma, Express, PostgreSQL y Git, no dudes en
      contactarme . ¡Será un placer trabajar juntos!
    </span>,
  ],
];

function About() {
  const [currentGifIndex, setCurrentGifIndex] = useState(0);

  return (
    <section className="flex flex-col h-full w-full z-10 sm:p-10">
      <div className={style.container}>
        <span style={{ "--l": "'N'" }}>N</span>
        <span style={{ "--l": "'A'" }}>A</span>
        <span style={{ "--l": "'H'" }}>H</span>
        <span style={{ "--l": "'U'" }}>U</span>
        <span style={{ "--l": "'E'" }}>E</span>
        <span style={{ "--l": "'L'" }}>L</span>
      </div>

      <div className="flex justify-center pb-5 sm:pb-10 font-minecraft text-[#F5F1DE] text-lg sm:text-4xl">
        <span className={style.dev} style={{ "--d": "'Full Stack Developer'" }}>
          Full Stack Developer
        </span>
      </div>

      <div className="flex h-[30rem] sm:h-[20rem] sm:mx-64  items-end justify-start">
        {<VignetteText text={textAbout} />}
      </div>

      <div className="absolute -bottom-3 mx-10 h-60 sm:h-96 z-50">
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
