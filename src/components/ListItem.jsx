/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

function ListItem({ icon, alt, title, onSelect, className }) {
  const isSelectable = typeof onSelect === "function";
  const handleClick = () => {
    onSelect(null);
    setTimeout(() => onSelect(alt), 50);
  };
  return (
    <li
      role={isSelectable ? "button" : undefined}
      tabIndex={isSelectable ? "0" : undefined}
      onClick={isSelectable ? handleClick : undefined}
      className={`flex flex-col justify-center items-center h-24 w-32 text-center cursor-pointer ${
        isSelectable
          ? "hover:bg-gray-300 hover:bg-opacity-60 focus:border-blue-500 focus:border-2 border-solid focus:outline-none"
          : ""
      } ${className}`}>
      <img className="px-7 h-12" src={icon} alt={alt} />
      <h2 className="select-none text-white mt-2">{title}</h2>
    </li>
  );
}

ListItem.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
};

export default ListItem;
