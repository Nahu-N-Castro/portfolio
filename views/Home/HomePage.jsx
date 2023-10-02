/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./HomePage.module.css";
import WindowContainer from "../../src/components/WindowContainer";
import DownloadButton from "../../src/components/DownloadButton";

const items = [
  { icon: "/proyectos.png", alt: "proyectos", title: "Proyectos" },
  { icon: "/skills.png", alt: "skills", title: "Habilidades" },
  { icon: "/about.png", alt: "about", title: "About" },
  { icon: "/juegos.png", alt: "juegos", title: "Juegos" },
  { icon: "/contacto.png", alt: "contacto", title: "Contacto" },
  { icon: "/Curriculum Vitae.png", alt: "cv", title: "CV.pdf" },
];

function ListItem({ icon, alt, title, onSelect }) {
  return (
    <li className="flex h-20 w-24 text-center cursor-pointer hover:bg-gray-300 hover:bg-opacity-60 focus:border-blue-500 focus:border-2 border-solid focus:outline-none">
      <button
        onClick={() => onSelect(alt)}
        className="bg-transparent border-none p-0 m-0 text-inherit font-inherit focus:outline-none">
        <img className="px-7" src={icon} alt={alt} />
        <h2 className="select-none text-white">{title}</h2>
      </button>
    </li>
  );
}

function HomePage() {
  const [selected, setSelected] = useState(null);

  const handleChangeTheme = () => {
    const htmlElement = document.querySelector("html");

    if (htmlElement.classList.contains("dark")) {
      htmlElement.classList.remove("dark");
    } else {
      htmlElement.classList.add("dark");
    }
  };

  return (
    <div className={styles.container}>
      <nav>
        <button onClick={handleChangeTheme}>HOLA</button>
      </nav>
      <ul className="flex flex-col justify-center items-center sm:absolute sm:left-10 sm:top-10 space-y-7">
        {items.map((item) => (
          <ListItem key={item.alt} onSelect={setSelected} {...item} />
        ))}
      </ul>

      {(selected === "proyectos" || selected === "juegos") && (
        <WindowContainer onSelect={setSelected} title={selected} />
      )}
      {selected === "cv" && <DownloadButton onSelect={setSelected} />}
    </div>
  );
}

export default HomePage;
