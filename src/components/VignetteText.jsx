/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function VignetteText({ text, gifs }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransition, setIsTransition] = useState(false);
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

  useEffect(() => {
    setIsTransition(true);
    const transition = setTimeout(() => {
      setIsTransition(false);
    }, 4200);
    return () => {
      clearTimeout(transition);
    };
  }, [currentIndex]);

  return (
    <>
      <section className="text-xs xsm:text-base sm:text-base md:text-xl lg:text-3xl bg-slate-50 border-4 border-zinc-950 text-black font-minecraft rounded-t-3xl rounded-br-3xl shadow-md shadow-black ">
        <div className="pt-5 mx-5 sm:mx-10 ">{text[currentIndex]}</div>

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
      </section>
      <section className="absolute bottom-0 left-20 z-50">
        <img
          src={isTransition ? gifs[1].src : gifs[0].src}
          className="h-40 xsm:h-60 sm:h-[25rem]"
        />
      </section>
    </>
  );
}

export default VignetteText;
