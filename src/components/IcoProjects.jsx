/* eslint-disable react/prop-types */
function IconFolder({ title, imgWidth, imgPosition, onProject }) {
  const handleClick = () => {
    onProject(null);
    setTimeout(() => onProject(title), 100);
};
  return (
    <div
      onClick={handleClick}
      className="relative items-center w-fit h-fit m-5 hover:-translate-y-1 transition-transform cursor-pointer">
      <img className="w-20" src="/carpeta-win.png" alt="background" />
      <img
        className={`absolute ${imgPosition || "top-7 left-6"} z-10 ${
          imgWidth || "w-9"
        } opacity-80`}
        src={`/${title}.png`}
        alt={title}
      />
      <h2 className="absolute left-1/2 transform -translate-x-1/2 text-black capitalize dark:text-white">
        {title}
      </h2>
    </div>
  );
}

export default IconFolder;
