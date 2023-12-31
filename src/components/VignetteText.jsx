/* eslint-disable react/prop-types */
import { ChevronLeft, ChevronRight } from "lucide-react";
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
      <section className="mb-12 sm:mb-0 text-xs xsm:text-base sm:text-base md:text-xl lg:text-2xl bg-zinc-300 dark:bg-slate-100 border-4 dark:border-black border-zinc-800 text-zinc-800 font-minecraft rounded-t-3xl rounded-br-3xl shadow-md shadow-black z-50 ">
        <div className="pt-5 mx-5 xsm:mx-10 ">{text[currentIndex]}</div>

        <div className="flex p-1 justify-end w-full">
          <button
            disabled={firstIndex}
            className={`flex p-1 z-50 hover:border-0 focus:outline-none hover:outline-none border-0 ${
              firstIndex
                ? "opacity-40 cursor-not-allowed "
                : "active:translate-y-1 "
            }`}
            onClick={goToPrevious}>
      
            <ChevronLeft strokeWidth={6} size={58}  className="h-10 stroke-rose-700"/>
          </button>

          <button
            disabled={lastIndex}
            className={`flex p-1 z-50 hover:border-0 focus:outline-none hover:outline-none border-0 ${
              lastIndex
                ? "opacity-40 cursor-not-allowed active:translate-y-0"
                : "active:translate-y-1 "
            }`}
            onClick={goToNext}>
              
            <ChevronRight strokeWidth={6} size={58} className="h-10 stroke-rose-700"/>
          </button>
        </div>
      </section>
      <section className="absolute bottom-2 left-20 z-50">
        <img
          src={isTransition ? gifs[1].src : gifs[0].src}
          className="h-40 xsm:h-60 sm:h-[18rem] lg:h-[20rem] disable-blur"
        />
      </section>
    </>
  );
}

export default VignetteText;
