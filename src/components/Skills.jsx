import ListItem from "./ListItem";

const items = [
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    alt: "cv",
    title: "HTML",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    alt: "css",
    title: "CSS",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    alt: "javascript",
    title: "Javascript",
  },
  {
    icon: "https://icongr.am/devicon/react-original.svg?size=128&color=currentColor",
    alt: "react",
    title: "React",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    alt: "nodejs",
    title: "NodeJs",
  },
  {
    icon: "https://sequelize.org/img/logo.svg",
    alt: "Sequelize",
    title: "Sequelize",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    alt: "Express",
    title: "Express",
  },
  {
    icon: "https://camo.githubusercontent.com/91e66834eb064e372ae403ec874cd9f9968cfe1291fbe2969841003576ebd7f1/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f707269736d612e706e67",
    alt: "primsa",
    title: "Prisma",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    alt: "redux",
    title: "Redux",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    alt: "postsgresql",
    title: "PostgreSQL",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    alt: "tailwind",
    title: "Tailwind",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    alt: "next",
    title: "NextJs",
  },
  {
    icon: "https://camo.githubusercontent.com/5ef323398644d0544cbf5284d118cd027594a32f1ad973d13667f169d245e382/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f6c6f676f2d7469746c652e737667",
    alt: "chartjs",
    title: "ChartJs",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    alt: "figma",
    title: "Figma",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
    alt: "npm",
    title: "npm",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    alt: "python",
    title: "Python",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg",
    alt: "Trello",
    title: "Trello",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
    alt: "ps",
    title: "Photoshop",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
    alt: "ilustrator",
    title: "Ilustrator",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    alt: "Typescript",
    title: "Typescript",
  },
];

function Skills() {
  return (

      <div className="h-[100%] grid grid-cols-2 py-10 pb-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center overflow-y-auto max-h-[125%]">
        {items.map((item) => (
          <ListItem
            key={item.alt}
            {...item}
            className="transition-transform transform hover:scale-150 "
          />
        ))}
      </div>

  );
}

export default Skills;
