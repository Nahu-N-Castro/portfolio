/* eslint-disable react/prop-types */
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

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative h-full sm:h-[400px] w-full overflow-hidden mb-10">
      <div
        className="absolute top-1/2 left-8 transform -translate-y-1/2 text-4xl text-black z-10 cursor-pointer"
        onClick={goToPrevious}>
        ❰
      </div>
      <div
        className="absolute top-1/2 right-8 transform -translate-y-1/2 text-4xl text-black z-10 cursor-pointer"
        onClick={goToNext}>
        ❱
      </div>
      <img
        src={`${slides[currentIndex].url}`}
        alt={slides[currentIndex].title}
        className="object-contain h-full w-full"
      />
      <div className="flex justify-center space-x-2 mt-4">
        {slides.map((_, slideIndex) => (
          <div
            className="w-4 h-4 bg-black rounded-full cursor-pointer"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
