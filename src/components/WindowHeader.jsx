/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const WindowHeader = ({ title, onSelect, setAnimationClass }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(document.querySelector("html").classList.contains("dark"));
  }, [isDarkMode]);

  const handleClose = () => {
    if (setAnimationClass != undefined) {
      setAnimationClass("animate-fadeoutdown");      
      requestAnimationFrame(() => {
        setTimeout(() => {
          onSelect(false);
        }, 200);
      });
    } else {
      onSelect(false);
    }
  };

  const IconButton = ({
    alt,
    srcDark,
    srcLight,
    extraClasses = "",
    onClick,
  }) => (
    <div
      onClick={onClick}
      className={`relative bg-transparent border-none p-2 m-0 text-inherit font-inherit h-10 w-11 hover:bg-rose-900 hover:border-none focus:outline-none transition duration-150 ease-in-out cursor-pointer ${extraClasses}`}>
      <img
        src={!isDarkMode ? srcDark : srcLight}
        alt={alt}
        className="w-full h-full px-1"
      />
    </div>
  );

  return (
    <div className="flex w-full items-center justify-between dark:text-white dark:bg-rose-700">
      <div className="flex h-8 justify-center items-center">
        {title && <img className="h-4 m-2" src={`/${title}.png`} alt={title} />}
        <h1 className="text-sm text-black capitalize dark:text-white">
          {title}
        </h1>
      </div>
      <div className="flex">
        <IconButton
          alt="minimize"
          srcDark="/minimize.png"
          srcLight="/minimize-white.png"
          onClick={handleClose}
        />
        <IconButton
          alt="close"
          srcDark="/close.png"
          srcLight="/close-white.png"
          onClick={handleClose}
          extraClasses="w-12 hover:bg-red-600"
        />
      </div>
    </div>
  );
};

export default WindowHeader;
