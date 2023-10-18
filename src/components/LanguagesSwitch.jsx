import { Languages } from "lucide-react";
import { useState } from "react";
import PropTypes from "prop-types";

const LanguagesSwitch = ({currentLanguage, setterLanguage}) => {
  const [animationClass, setAnimationClass] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  LanguagesSwitch.propTypes = {
    currentLanguage: PropTypes.string.isRequired,
    setterLanguage: PropTypes.func.isRequired,
  };

  const handlerLanguage = (props) => {
    if (isVisible) {
      setAnimationClass("animate-fadedowncustom");
      requestAnimationFrame(() => {
        setTimeout(() => {
          setIsVisible(!isVisible);
          setAnimationClass("");
        }, 150);
      });
      setterLanguage(props);
    } else {
      setIsVisible(!isVisible);
      setterLanguage(props);
    }
  };

  return (
    <div>
      <button
        onClick={() => handlerLanguage(currentLanguage)}
        className="rounded-full dark:bg-zinc-700 bg-black bg-opacity-80 p-2 shadow-sm ">
        <Languages />
      </button>
      {isVisible ? (
        <div
          className={`flex flex-col absolute bg-slate-50 dark:bg-zinc-800 rounded-xl w-[30rem] h-fit text-black p-3 border-solid dark:border-zinc-700 border-zinc-400 border animate-fade-up animate-duration-200 sm:bottom-0 sm:right-24 gap-1 z-40   ${animationClass}`}>
          <div className="pl-2">
            <h1 className="text-zinc-800 dark:text-white">Idioma de Windows</h1>
            <p className="mb-4 text-sm text-zinc-500 dark:text-zinc-400">
              Las características de Windows, como Explorador de archivos,
              Proyectos, CV, se mostrarán en este idioma
            </p>
          </div>

          <button
            onClick={() => handlerLanguage("esp")}
            className={`text-zinc-800 dark:text-white flex items-center py-3 dark:hover:bg-zinc-700 hover:bg-slate-300 rounded-md pr-2 ${
              currentLanguage === "esp" ? "dark:bg-zinc-700 bg-slate-300" : ""
            } `}>
            <div
              className={`mr-2 bg-transparent h-5  ${
                currentLanguage === "esp"
                  ? "border-l-4 border-spacing-y-96 border-rose-600 rounded-md"
                  : ""
              }`}></div>
            <h3 className="text-sm dark:text-white mr-2">ESP</h3>
            Español (Argentina)
          </button>
          <button
            onClick={() => handlerLanguage("eng")}
            className={`text-zinc-800 dark:text-white flex items-center py-3 dark:hover:bg-zinc-700 hover:bg-slate-300 rounded-md pr-2 ${
              currentLanguage === "eng" ? "dark:bg-zinc-700 bg-slate-300" : ""
            } `}>
            <div
              className={`mr-2 bg-transparent h-5  ${
                currentLanguage === "eng"
                  ? "border-l-4 border-spacing-y-96 border-rose-600 rounded-md"
                  : ""
              }`}></div>
            <h3 className="text-sm dark:text-white mr-2">ENG</h3>
            Inglés (Estados Unidos)
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default LanguagesSwitch;
