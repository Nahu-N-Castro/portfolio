const Contact = () => {
  return (
    <div className="sm:flex sm:justify-center md:items-center w-full h-full pt-10 grid grid-cols-1 sm:space-x-10 md:space-x-64 z-50">
      <a
        href="mailto:nahu.castro@hotmail.com"
        className="flex flex-col text-white hover:text-gray-500 items-center gap-5">
        <img src="/contacto.png" className="h-20 w-20 sm:h-52 sm:w-52 " />
        <span>Mail</span>
      </a>
      <a
        href="https://github.com/Nahu-N-Castro"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col text-white hover:text-gray-500 items-center gap-5">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          className="h-20 sm:h-52"
        />
        <span>GitHub</span>
      </a>

      <a
        href="https://www.linkedin.com/in/nahuelcastro/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col text-white hover:text-gray-500 items-center gap-5">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
          className="h-20 sm:h-52"
        />
        <span>Linkedin</span>
      </a>
    </div>
  );
};

export default Contact;
