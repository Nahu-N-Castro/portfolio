import { useState } from "react";
import IconFolder from "./IcoProjects";
import WindowHeader from "./WindowHeader";
import ProjectContainer from "./ProjectContainer";
import About from "./About/About";

/* eslint-disable react/prop-types */
const WindowContainer = ({ onSelect, title }) => {
  const [project, setProject] = useState(null);
  const [animationClass, setAnimationClass] = useState("");

  return (
    <div
      className={`absolute h-full w-full sm:top-10 flex-col sm:h-[90%] sm:w-[80%] dark:bg-neutral-900 z-10 shadow-neutral-900 bg-purple-100 dark:bg-opacity-90 shadow-lg dark:backdrop-blur-3xl rounded-lg animate-fadeinup overflow-hidden ${animationClass}`}>
      <WindowHeader
        onSelect={onSelect}
        title={title}
        setAnimationClass={setAnimationClass}
        context={"project"}
      />
      {title === "proyectos" && (
        <section className="flex ">
          <div className="grid grid-cols-2 sm:grid-cols-3 h-full w-full sm:w-[35%]">
            <IconFolder title="rym" imgWidth="w-20 " onProject={setProject} />
            <IconFolder title="pokedex" onProject={setProject} />
            <IconFolder title="artify" imgWidth="w-24" onProject={setProject} />
          </div>

          {project && (
            <ProjectContainer title={project} onSelect={setProject} />
          )}
        </section>
      )}
      {title === "about" && <About />}
    </div>
  );
};

export default WindowContainer;
