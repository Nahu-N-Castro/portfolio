/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./HomePage.module.css";
import WindowContainer from "../../src/components/WindowContainer";
import DownloadButton from "../../src/components/DownloadButton";
import ListItem from "../../src/components/ListItem";

const items = [
  { icon: "/proyectos.png", alt: "proyectos", title: "Proyectos" },
  { icon: "/skills.png", alt: "skills", title: "Habilidades" },
  { icon: "/about.png", alt: "about", title: "About" },
  { icon: "/juegos.png", alt: "juegos", title: "Juegos" },
  { icon: "/contacto.png", alt: "contacto", title: "Contacto" },
  { icon: "/Curriculum Vitae.png", alt: "cv", title: "CV.pdf" },
];

function HomePage() {
  const [selected, setSelected] = useState(null);



  // const handleChangeTheme = () => {
  //   const htmlElement = document.querySelector("html");

  //   if (htmlElement.classList.contains("dark")) {
  //     htmlElement.classList.remove("dark");
  //   } else {
  //     htmlElement.classList.add("dark");
  //   }
  // };

  return (
    <div className={styles.container}>
      <nav>{/* <button onClick={handleChangeTheme}>hola</button> */}</nav>
      <ul className="flex flex-col justify-center items-center sm:absolute sm:left-10 sm:top-10 space-y-7">
        {items.map((item) => (
          <ListItem key={item.alt} onSelect={setSelected} {...item} />
        ))}
      </ul>

      {(selected === "proyectos" ||
        selected === "juegos" ||
        selected === "about" ||
        selected === "skills") && (
        <WindowContainer onSelect={setSelected} title={selected} />
      )}
      {selected === "cv" && <DownloadButton onSelect={setSelected} />}
    </div>
  );
}

export default HomePage;
