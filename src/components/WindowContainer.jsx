import { useState, useRef } from "react";
import IconFolder from "./IcoProjects";
import WindowHeader from "./WindowHeader";
import ProjectContainer from "./ProjectContainer";

/* eslint-disable react/prop-types */
const WindowContainer = ({ onSelect, title }) => {
  const [project, setProject] = useState(null);
  const [animationClass, setAnimationClass] = useState('');
  const divRef = useRef(null);

  return (
    <div ref={divRef} className={`absolute h-full w-full sm:top-10 flex-col sm:h-[90vh] sm:w-[80vw] dark:bg-neutral-900 z-10 shadow-neutral-900 bg-purple-100 dark:bg-opacity-90 shadow-lg dark:backdrop-blur-3xl animate-fadeinup transition-opacity ${animationClass}`} >
      <WindowHeader onSelect={onSelect} title={title} setAnimationClass={setAnimationClass} divRef={divRef}  />
      {title === "proyectos" && (
        <section className="flex">
          <div className="flex h-full w-full sm:w-[45%]">
            <IconFolder
              title="rym"
              imgWidth="w-9"
              imgPosition="top-6 left-6"
              onProject={setProject}
            />
            <IconFolder title="pokedex" onProject={setProject} />
            <IconFolder
              title="artify"
              imgWidth="w-14"
              imgPosition="top-7 left-3"
              onProject={setProject}
            />
          </div>

          {project && (
            <ProjectContainer title={project} onSelect={setProject} />
          )}
        </section>
      )}
    </div>
  );
};

export default WindowContainer;
