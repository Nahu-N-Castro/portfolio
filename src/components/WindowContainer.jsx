import { useState } from "react";
import WindowHeader from "./WindowHeader";
import About from "./About/About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

/* eslint-disable react/prop-types */
const WindowContainer = ({ onSelect, title }) => {
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
      {title === "proyectos" && <Projects />}
      {title === "about" && <About />}
      {title === "skills" && <Skills />}
      {title === "contacto" && <Contact />}
    </div>
  );
};

export default WindowContainer;
