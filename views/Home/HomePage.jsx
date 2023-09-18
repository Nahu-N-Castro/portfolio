import { useState } from "react";
import styles from "./HomePage.module.css";
import WindowContainer from "../../src/components/WindowContainer/WindowContainer";

const items = [
  { icon: "/proyectos.png", alt: "proyectos", title: "Proyectos" },
  { icon: "/juegos.png", alt: "juegos", title: "Juegos" },
  { icon: "/contacto.png", alt: "contacto", title: "Contacto" },
  { icon: "/cv.png", alt: "cv", title: "CV.pdf" },
];

// eslint-disable-next-line react/prop-types
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
  return (
    <div className={styles.container}>
      <ul className="flex flex-col justify-center items-center sm:absolute sm:left-10 sm:top-10 space-y-7">
        {items.map((item) => (
          <ListItem key={item.alt} onSelect={setSelected} {...item} />
        ))}
      </ul>

      {selected === "proyectos" && (
        <WindowContainer onSelect={setSelected} title={"proyectos"}/>
        
      )}
      {selected === "juegos" && (
        <WindowContainer onSelect={setSelected} title={"juegos"} />
      )}
    </div>
  );
}

export default HomePage;
