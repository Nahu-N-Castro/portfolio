/* eslint-disable react/prop-types */

const WindowHeader = ({ title, onSelect }) => {
  return (
    <div className="flex w-full items-center justify-between bg-amber-200">
      <div className="flex h-8 justify-center items-center">
        {title && <img className="h-4 m-2" src={`/${title}.png`} alt={title} />}

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
  );
};

export default WindowHeader;
