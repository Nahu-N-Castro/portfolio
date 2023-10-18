/* eslint-disable react/prop-types */

const WindowHeader = ({ title, onSelect, setAnimationClass }) => {
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

  const IconButton = ({ alt, src, extraClasses = "", onClick }) => (
    <div
      onClick={onClick}
      className={`relative bg-transparent border-none p-2 m-0 text-inherit font-inherit h-10 w-11 hover:bg-rose-900 hover:border-none focus:outline-none transition duration-150 ease-in-out cursor-pointer ${extraClasses}`}>
      <img src={src} alt={alt} className="w-full h-full px-1" />
    </div>
  );

  return (
    <div className="flex w-full items-center justify-between bg-rose-700 rounded-t-md ">
      <div className="flex h-8 justify-center items-center">
        {title && <img className="h-4 m-2" src={`/${title}.png`} alt={title} />}
        <h1 className="text-sm capitalize text-white">{title}</h1>
      </div>
      <div className="flex">
        <IconButton alt="minimize" src="/minimize.png" onClick={handleClose} />
        <IconButton
          alt="close"
          src="/close.png "
          onClick={handleClose}
          extraClasses="w-12 hover:bg-red-600 rounded-tr-md "
        />
      </div>
    </div>
  );
};

export default WindowHeader;
