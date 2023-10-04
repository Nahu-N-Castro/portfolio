/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function VignetteText({ text }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const firstIndex = currentIndex === 0;
  const lastIndex = currentIndex === text.length - 1;

  const goToPrevious = () => {
    const isFirstText = currentIndex === 0;
    const newIndex = isFirstText ? text.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastText = currentIndex === text.length - 1;
    const newIndex = isLastText ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {}, [currentIndex]);

  return (
    <div className="flex flex-col justify-around items-center bg-slate-50 border-4 border-zinc-950 text-black font-minecraft  rounded-t-3xl rounded-br-3xl">
      <div className="pt-5 sm:py-5 sm:mx-10 text-xl ">{text[currentIndex]}</div>

      <div className="flex justify-end w-full">
        <button
          disabled={firstIndex}
          className={`flex p-1 z-50 cursor-pointer hover:border-0 focus:outline-none hover:outline-none border-0 ${
            firstIndex ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={goToPrevious}>
          <img
            className="transform scale-x-[-1] h-10"
            src="/arrow.png"
            alt="arrow"
          />
        </button>

        <button
          disabled={lastIndex}
          className={`flex p-1  z-50 cursor-pointer hover:border-0 focus:outline-none hover:outline-none border-0 ${
            lastIndex ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={goToNext}>
          <img className="h-10" src="/arrow.png" alt="arrow" />
        </button>
      </div>
    </div>
  );
}

export default VignetteText;
