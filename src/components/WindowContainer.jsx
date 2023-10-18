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
      className={`absolute h-full w-full sm:top-20 flex-col sm:h-[85%] sm:w-[80%] bg-neutral-100 bg-opacity-80 dark:bg-zinc-900 z-10 dark:shadow-zinc-900 shadow-black drop-shadow-2xl backdrop-blur-3xl dark:bg-opacity-90 rounded-lg animate-fadeinup overflow-hidden ${animationClass}`}>
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
