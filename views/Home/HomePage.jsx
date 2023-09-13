import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.container}>
      <ul className="absolute left-5 top-10 space-y-7">
        <li className="text-center cursor-pointer select-none">
        <Link to={"/proyects"}>
          <img className="w-12 mx-auto" src="/carpeta.png" alt="proyectos" />
          <h2 className="select-none text-white">Proyectos</h2>
        </Link>
        </li>
        <li className="text-center cursor-pointer">
        <Link to={"/games"}>
          <img className="w-12 mx-auto" src="/consola.png" alt="juegos" />
          <h2 className="select-none text-white">Juegos</h2>
          </Link>
        </li>
        <li className="text-center cursor-pointer">
        <Link to={"/cv"}>
          <img className="w-12 mx-auto" src="/pdf.png" alt="cv" />
          <h2 className="select-none text-white">Curriculum Vitae</h2>
          </Link>
        </li>
      </ul>

      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 h-10 flex items-center px-5">
        <img className="w-6 h-6" src="/windows-icon.png" alt="inicio" />
      </div>
    </div>
  );
}

export default HomePage;
