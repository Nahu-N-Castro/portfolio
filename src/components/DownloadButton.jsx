/* eslint-disable react/prop-types */
import WindowHeader from "./WindowHeader";

const DownloadButton = ({ onSelect }) => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-[90vw] sm:w-[40vw] dark:bg-neutral-900 rounded-lg shadow-neutral-900 bg-neutral-100 dark:bg-opacity-90 dark:text-white  dark:backdrop-blur-3xl shadow-lg z-10  ">
      <WindowHeader onSelect={onSelect} title={"Curriculum Vitae"} />
   

      <div className="flex mb-4 mt-4">
        <a
          href="/Nahuel Castro CV.pdf"
          target="_blank"
          className="py-2 px-4 bg-gray-300 hover:bg-gray-400 text-black rounded-md transition duration-200 border-none focus:outline-none no-underline hover:text-black">
          Español
        </a>
        <a
          href="/Nahuel Castro Resume.pdf"
          target="_blank"
          className="mx-5 py-2 px-6 bg-rose-500 hover:bg-rose-300 text-white hover:text-white rounded-md transition duration-200 border-none focus:outline-none">
          English
        </a>
      </div>
    </div>
  );
};

export default DownloadButton;
