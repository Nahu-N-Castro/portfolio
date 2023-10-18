import { Moon, Sun } from "lucide-react";


// eslint-disable-next-line react/prop-types
const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <button
      className="w-12 h-12 rounded-full dark:bg-zinc-700 bg-black bg-opacity-80 p-2 shadow-sm"
      onClick={toggleTheme}
    >
      {isDarkMode ? <Sun size="2rem" className="animate-fadein" /> : <Moon size="2rem" className="animate-fadein" />}
    </button>
  );
}
export default ThemeToggle