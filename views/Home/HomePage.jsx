/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import WindowContainer from "../../src/components/WindowContainer";
import DownloadButton from "../../src/components/DownloadButton";
import ListItem from "../../src/components/ListItem";
import ThemeToggle from "../../src/components/ThemeToggle";
// import LanguagesSwitch from "../../src/components/LanguagesSwitch";
import {useNavigate } from "react-router-dom";

const items = [
  { icon: "/proyectos.png", alt: "proyectos", title: "Proyectos" },
  { icon: "/skills.png", alt: "skills", title: "Habilidades" },
  { icon: "/about.png", alt: "about", title: "About" },
  { icon: "/contacto.png", alt: "contacto", title: "Contacto" },
  { icon: "/Curriculum Vitae.png", alt: "cv", title: "CV.pdf" },
];

function HomePage() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);
  const [isDarkMode, setisDarkMode] = useState(true);
  // const [language, setLanguage] = useState("esp");

  const handleChangeTheme = () => {
    const htmlElement = document.querySelector("html");

    if (htmlElement.classList.contains("dark")) {
      htmlElement.classList.remove("dark");
      setisDarkMode(false);
    } else {
      htmlElement.classList.add("dark");
      setisDarkMode(true);
    }
  };

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (htmlElement.classList.contains("dark")) {
      htmlElement.classList.remove("dark");
      setisDarkMode(false);
    } else {
      htmlElement.classList.add("dark");
      setisDarkMode(true);
    }
  }, []);

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: isDarkMode
          ? 'url("/wallpaper-dark.jpeg")'
          : 'url("/wallpaper-light.jpeg")',
      }}>
      <div className="flex items-end justify-center p-2 gap-5 mb-16  ">
        <ThemeToggle isDarkMode={isDarkMode} toggleTheme={handleChangeTheme} />
        <button onClick={() => navigate("/")}>
          <img src="/me-face.png" alt="meface" className="h-14" />
        </button>
        {/* <LanguagesSwitch
          currentLanguage={language}
          setterLanguage={setLanguage}
        /> */}
      </div>

      <ul className="flex flex-col justify-center items-center sm:absolute sm:left-10 sm:top-10 space-y-7">
        {items.map((item) => (
          <ListItem key={item.alt} onSelect={setSelected} {...item} />
        ))}
      </ul>

      {(selected === "proyectos" ||
        selected === "about" ||
        selected === "contacto" ||
        selected === "skills") && (
        <WindowContainer onSelect={setSelected} title={selected} />
      )}
      {selected === "cv" && <DownloadButton onSelect={setSelected} />}
    </div>
  );
}

export default HomePage;
