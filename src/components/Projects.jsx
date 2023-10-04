import IconFolder from "./IcoProjects";
import ProjectContainer from "./ProjectContainer";
import { useState } from "react";

function Projects() {
  const [project, setProject] = useState(null);
  return (
    <section className="flex">
      <div className="grid grid-cols-2 sm:grid-cols-3 h-full w-full sm:w-[35%]">
        <IconFolder title="rym" imgWidth="w-20 " onProject={setProject} />
        <IconFolder title="pokedex" onProject={setProject} />
        <IconFolder title="artify" imgWidth="w-24" onProject={setProject} />
      </div>

      {project && <ProjectContainer title={project} onSelect={setProject} />}
    </section>
  );
}

export default Projects;
