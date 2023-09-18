import IconFolder from "../IcoProjects/IcoProjects";

/* eslint-disable react/prop-types */
const WindowContainer = ({ onSelect, title }) => {
  return (
    <div className="absolute top-10 flex-col h-[90vh] w-[90vw] sm:w-[80vw] bg-slate-50 z-10 shadow-neutral-700 shadow-md">
      <div className="flex items-center justify-between bg-amber-200">
        <div className="flex h-8 justify-center items-center">
          <img className="h-4 m-2" src={`/${title}.png`} alt={title} />
          <h1 className="text-sm text-black capitalize">{title}</h1>
        </div>
        <div className="flex">
          <div
            onClick={() => onSelect(null)}
            className="relative bg-transparent border-none py-2 px-1 m-0 text-inherit font-inherit h-10 w-11 hover:bg-amber-300 hover:border-none focus:outline-none transition duration-150 ease-in-out">
            <img
              src="/minimize.png"
              alt="minimize"
              className="w-full h-full px-1"
            />
          </div>
          <div
            onClick={() => onSelect(null)}
            className="relative bg-transparent border-none p-2 m-0 text-inherit font-inherit h-10 w-12 hover:bg-red-600 focus:outline-none transition duration-150 ease-in-out ">
            <img src="/close.png" alt="close" className="w-full h-full px-1" />
          </div>
        </div>
      </div>
      {title === "proyectos" && (
        <div className="flex">
          <IconFolder
            title="R&M"
            imgWidth="w-9"
            imgPosition="top-6 left-6"
          />
          <IconFolder title="pokedex"/>
          <IconFolder
            title="artify"
            imgWidth="w-14"
            imgPosition="top-7 left-3"
          />
        </div>
      )}
    </div>
  );
};

export default WindowContainer;
