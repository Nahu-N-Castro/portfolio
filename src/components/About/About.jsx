import { useState } from "react";
import BackgroundParticles from "../BackgroundParticles";
import style from "./About.module.css";
import VignetteText from "../VignetteText";

const gifsMe = [{ src: "/standby.gif" }, { src: "/talking.gif" }];

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
      mi capacidad para colaborar y liderar equipos , fomentando un ambiente de
      trabajo productivo y cooperativo.
    </span>,
  ],
  [
    <span key={4} className="animate-fade-right">
      Veo la comunicación como un pilar fundamental que me permite trabajar
      eficazmente tanto en equipos como en proyectos individuales. Además,
      valoro mantener una organización clara y eficiente.
    </span>,
  ],
  [
    <span key={5} className="animate-fade-right">
      Me emociona la oportunidad de aplicar mi pasión por la programación, mi
      curiosidad innata y mi constante deseo de aprender en nuevos proyectos y
      desafíos. Cada paso en este camino lo veo como una oportunidad para crecer
      y continuar desarrollándome profesionalmente. Estoy interesado en unirme a
      un equipo que valore la creatividad, la innovación y la colaboración, y
      esté comprometido con ofrecer resultados de alta calidad a sus clientes.
    </span>,
  ],
  [
    <span key={5} className="animate-fade-left">
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

      <div className="flex justify-center pb-5 sm:pb-10 font-minecraft text-[#F5F1DE] text-lg md:text-xl lg:text-4xl">
        <span className={style.dev} style={{ "--d": "'Full Stack Developer'" }}>
          Full Stack Developer
        </span>
      </div>

      <div className="flex justify-center items-end h-[48%] xsm:h-[51%] sm:h-[35%] md:h-[25%] sm:mt-10 sm:justify-start mx-2 xl:mx-52 lg:my-40 md:items-end ">
        <VignetteText
          setCurrentIndex={setCurrentGifIndex}
          currentIndex={currentGifIndex}
          text={textAbout}
          gifs={gifsMe}
        />
      </div>

      <BackgroundParticles widthRem={50} heightRem={40} />
    </section>
  );
}

export default About;
