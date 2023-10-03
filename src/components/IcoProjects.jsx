/* eslint-disable react/prop-types */
function IconFolder({ title, imgWidth, imgPosition, onProject }) {
  const handleClick = () => {
    onProject(null);
    setTimeout(() => onProject(title), 100);
};
  return (
    <div
      onClick={handleClick}
      className="relative items-center w-fit h-fit m-7 hover:-translate-y-2 transition-transform cursor-pointer">
      <img className="w-40" src="/carpeta-win.png" alt="background" />
      <img 
        className={`absolute ${imgPosition || "top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"} ${
          imgWidth || "w-10 sm:w-20"
        } opacity-80 `}
        src={`/${title}.png`}
        alt={title}
      />
      <h2 className="absolute mt-2 left-1/2 transform -translate-x-1/2 text-black text-lg capitalize dark:text-white">
        {title}
      </h2>
    </div>
  );
}

export default IconFolder;
