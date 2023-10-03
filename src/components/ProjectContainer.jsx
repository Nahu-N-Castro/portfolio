/* eslint-disable react/prop-types */
import { useState } from "react";
import WindowHeader from "./WindowHeader";
import projects from "../utils/projects";
import ImageSlider from "./ImageSlider";
import Draggable from "react-draggable";

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
    <Draggable>
      <div className="absolute top-16 right-0 md:mx-8 md:left-auto md:right-0 w-full md:w-2/3 h-fit  text-black z-40 animate-fadein overflow-auto">
        <WindowHeader onSelect={onSelect} title={title} />
        <div className="absoulte dark:bg-neutral-900 z-10 shadow-neutral-900 bg-purple-100 dark:bg-opacity-90 shadow-lg dark:backdrop-blur-3xl p-5 max-h-[40rem] sm:max-h-[40rem] overflow-y-auto animate-fadein rounded-b-md">
          <ImageSlider slides={imagesSrc} />

          <button
            onClick={() => setContent(true)}
            className={`rounded-r-none rounded-bl-none p-2 focus:outline-none border-0 text-white ${
              content
                ? "bg-rose-600 dark:bg-neutral-800 hover:border-0"
                : "font-extralight"
            }`}>
            Documentación
          </button>
          <button
            onClick={() => setContent(false)}
            className={`rounded-l-none rounded-br-none p-2 focus:outline-none hover:outline-none border-0 text-white ${
              !content
                ? "bg-rose-600 dark:bg-neutral-800 hover:border-0"
                : "font-extralight"
            }`}>
            ¿Qué hice?
          </button>

          {content ? (
            <div className="">
              {projects[title].detail}
            </div>
          ) : (
            <div className="overflow-y-auto max-h-[45%]">
              {projects[title].overview}
            </div>
          )}
        </div>
      </div>
    </Draggable>
  );
};

export default ProjectContainer;
