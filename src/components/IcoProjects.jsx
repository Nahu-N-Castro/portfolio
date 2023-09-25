/* eslint-disable react/prop-types */
function IconFolder({ title, imgWidth, imgPosition, onProject }) {
  return (
    <div
      onClick={() => onProject(title)}
      className="relative items-center w-fit h-fit m-5 hover:-translate-y-1 transition-transform">
      <img className="w-20" src="/carpeta-win.png" alt="background" />
      <img
        className={`absolute ${imgPosition || "top-7 left-6"} z-10 ${
          imgWidth || "w-9"
        } opacity-80`}
        src={`/${title}.png`}
        alt={title}
      />
      <h2 className="absolute left-1/2 transform -translate-x-1/2 text-black capitalize">
        {title}
      </h2>
    </div>
  );
}

export default IconFolder;
