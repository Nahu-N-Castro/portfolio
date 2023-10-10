/* eslint-disable react/prop-types */
import {useState } from "react";
import WindowHeader from "./WindowHeader";
import projects from "../utils/projects";
import ImageSlider from "./ImageSlider";
import Draggable from "react-draggable";
import { imageCollections } from "../utils/imageCollections";

const ProjectContainer = ({ onSelect, title }) => {
  const imagesSrc = imageCollections[title] || []
  const [content, setContent] = useState(true);
  const isMobile = window.innerWidth <= 767;

  return (
    <Draggable disabled={isMobile}>
      <div className="absolute top-10 lg:mx-8 right-0 w-full lg:w-2/3 text-black z-40 animate-fadein">
        <WindowHeader onSelect={onSelect} title={title} />
        <div className="absoulte dark:bg-neutral-900 z-10 shadow-neutral-900 bg-purple-100 dark:bg-opacity-95 shadow-lg dark:backdrop-blur-2xl sm:p-5 animate-fadein rounded-b-md">
          <ImageSlider slides={imagesSrc} />

          <button
            onClick={() => setContent(true)}
            className={`rounded-r-none rounded-bl-none p-2 focus:outline-none border-0 ${
              content
                ? "bg-rose-600 dark:bg-neutral-800 hover:border-0 text-rose-400 font-bold"
                : "font-extralight text-white "
            }`}>
            Documentación
          </button>
          <button
            onClick={() => setContent(false)}
            className={`rounded-l-none rounded-br-none p-2 focus:outline-none hover:outline-none border-0 ${
              !content
                ? "bg-rose-600 dark:bg-neutral-800 hover:border-0 text-rose-400 font-bold"
                : "font-extralight text-white "
            }`}>
            ¿Qué hice?
          </button>

          {content ? (
            <div className="">{projects[title].detail}</div>
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
