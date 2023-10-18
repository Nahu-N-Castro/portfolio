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
    <div className="relative h-full xsm:h-[25rem] w-full  mb-2">
      <div className="h-full w-full flex overflow-hidden">
        {slides.map((image) => (
          <img
            key={image.url}
            src={`${image.url}`}
            alt={image.title}
            className="object-cover h-full w-full block shrink-0 grow-0 "
            style={{
              transform: `translateX(${-100 * currentIndex}%)`,
              transition: "transform 300ms ease-in-out",
            }}
          />
        ))}
      </div>

      <button
        className="block absolute top-0 bottom-0 p-4 z-10 cursor-pointer  hover:backdrop-blur-sm transition-all ease-in-out"
        onClick={goToPrevious}>
        <ChevronLeft strokeWidth={5} className="stroke-rose-700"/>
      </button>
      <button
        className="block absolute top-0 bottom-0 p-4 right-0 z-10 cursor-pointer hover:backdrop-blur-sm transition-all ease-in-out"
        onClick={goToNext}>
        <ChevronRight strokeWidth={5}  className="stroke-rose-700"/>
      </button>
      <div className="flex justify-center space-x-5 bottom-5 left-1/2 -translate-x-1/2 sm:space-x-10 absolute ">
        {slides.map((_, slideIndex) => (
          <button
            className="cursor-pointer"
            key={slideIndex}
            onClick={() => setCurrentIndex(slideIndex)}>
            {currentIndex === slideIndex ? (
              <CircleDot strokeWidth={2.5} className="stroke-rose-600 scale-110 transition-all" />
            ) : (
              <Circle strokeWidth={2} className="stroke-rose-600" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
