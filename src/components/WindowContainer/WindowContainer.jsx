import { useState } from "react";
import IconFolder from "../IcoProjects/IcoProjects";
import WindowHeader from "../WindowHeader/WindowHeader";
import ProjectContainer from "../ProjectContainer/ProjectContainer";

/* eslint-disable react/prop-types */
const WindowContainer = ({ onSelect, title }) => {
  const [project, setProject] = useState(null);
  return (
    <div className="absolute top-10 flex-col h-[90vh] w-[90vw] sm:w-[80vw] bg-slate-50 z-10 shadow-neutral-700 shadow-md">
      <WindowHeader onSelect={onSelect} title={title} />
      {title === "proyectos" && (
        <section className="flex">
          <div className="flex h-full w-full sm:w-[45%]">
            <IconFolder
              title="R&M"
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

          {project && <ProjectContainer title={project} onSelect={onSelect} />}
        </section>
      )}
    </div>
  );
};

export default WindowContainer;
