/* eslint-disable react/prop-types */
import { useState } from "react";
import WindowHeader from "./WindowHeader";
import projects from "../utils/projects";
import ImageSlider from "./ImageSlider";

const ProjectContainer = ({ onSelect, title }) => {
  const imagesSrc = [
    { url: `${title}/captura-01.png`, title: title },
    { url: `${title}/captura-02.png`, title: title },
    { url: `${title}/captura-03.png`, title: title },
    { url: `${title}/captura-04.png`, title: title },
    { url: `${title}/captura-05.png`, title: title },
    { url: `${title}/captura-06.png`, title: title },
    { url: `${title}/captura-07.png`, title: title },
  ];
  const [content, setContent] = useState(true);
  return (
    <section className="absolute top-0 right-0 md:left-auto md:right-0 w-full md:w-2/3 h-full md:py-16 md:px-5 text-black z-20">
      <WindowHeader onSelect={onSelect} title={title} />
      <div className="bg-amber-50 dark:bg-transparent p-5  max-h-[85%] sm:max-h-[95%] overflow-y-auto">
        <ImageSlider slides={imagesSrc} />

        <button
          onClick={() => setContent(true)}
          className={`rounded-r-none rounded-bl-none p-2 focus:outline-none ${
            content ? "bg-rose-600 dark:bg-rose-200" : "text-white"
          }`}>
          Documentación
        </button>
        <button
          onClick={() => setContent(false)}
          className={`rounded-l-none rounded-br-none p-2 focus:outline-none ${
            !content ? "bg-rose-600 dark:bg-rose-200" : "text-white"
          }`}>
          Detalle
        </button>

        {content ? (
          <div className="bg-amber-200 dark:bg-rose-200 p-5">{projects[title].overview}</div>
        ) : (
          <div className="bg-amber-200 dark:bg-rose-200 p-5">{projects[title].detail}</div>
        )}
      </div>
    </section>
  );
};

export default ProjectContainer;
