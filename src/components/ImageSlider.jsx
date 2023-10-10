/* eslint-disable react/prop-types */
import { ChevronLeft, ChevronRight, Circle, CircleDot } from "lucide-react";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative h-full sm:h-[540px] w-full  mb-10">
      <div className="h-full w-full flex overflow-hidden">
        {slides.map((image) => (
          <img
            key={image.url}
            src={`${image.url}`}
            alt={image.title}
            className="object-cover h-full w-full block shrink-0 grow-0"
            style={{
              transform: `translateX(${-100 * currentIndex}%)`,
              transition: "transform 300ms ease-in-out",
            }}
          />
        ))}
      </div>
      <button
        className="block absolute top-0 bottom-0 p-4 text-6xl text-black z-10 cursor-pointer hover:bg-opacity-30 hover:bg-black transition-all ease-in-out"
        onClick={goToPrevious}>
        <ChevronLeft strokeWidth={5} />
      </button>
      <button
        className="block absolute top-0 bottom-0 p-4 right-0 text-6xl text-black z-10 cursor-pointer hover:bg-opacity-30 hover:bg-black transition-all ease-in-out"
        onClick={goToNext}>
        <ChevronRight strokeWidth={5} />
      </button>
      <div className="flex justify-center space-x-5 mt-4 sm:space-x-10">
        {slides.map((_, slideIndex) => (
          <button
            className="w-4 h-4 fill-white stroke-slate-50 cursor-pointer"
            key={slideIndex}
            onClick={() => setCurrentIndex(slideIndex)}>
            {currentIndex === slideIndex ? (
              <CircleDot className="stroke-white scale-125 transition-all" />
            ) : (
              <Circle className="stroke-white" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
