/* eslint-disable react/prop-types */
import WindowHeader from "./WindowHeader";

const DownloadButton = ({ onSelect }) => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-[90vw] sm:w-[40vw] dark:bg-neutral-900  shadow-neutral-900 bg-purple-600 dark:bg-opacity-90 dark:text-white  dark:backdrop-blur-3xl shadow-lg z-10">
      <WindowHeader onSelect={onSelect} />

      <section>
        <p className="my-4 text-lg text-black dark:text-white">
          ¿Quieres descargar el Curriculum Vitae?
        </p>
        <div className="flex m-2 justify-around">
          <a
            href="/CV.pdf"
            download
            className="py-2 px-6 bg-rose-500 hover:bg-rose-300 text-white hover:text-white rounded-md transition duration-200 border-none focus:outline-none">
            Confirmar Descarga
          </a>
          <button
            onClick={() => onSelect(null)}
            className="py-2 px-4 bg-gray-300 hover:bg-gray-400 text-black rounded-md transition duration-200 border-none focus:outline-none">
            Cancelar
          </button>
        </div>
      </section>
    </div>
  );
};

export default DownloadButton;
