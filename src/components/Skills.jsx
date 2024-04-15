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
    title: "JavaScript",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    alt: "Typescript",
    title: "TypeScript",
  },
  {
    icon: "https://icongr.am/devicon/react-original.svg?size=128&color=currentColor",
    alt: "react",
    title: "React",
  },
  {
    icon: "https://icon.icepanel.io/Technology/svg/Solid.js.svg",
    alt: "solidjs",
    title: "SolidJs",
  },
  {
    icon: "https://alpinejs.dev/alpine_long.svg",
    alt: "alpinejs",
    title: "AlpineJs",
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
    icon: "https://cdn.icon-icons.com/icons2/2148/PNG/512/prisma_icon_132076.png",
    alt: "prisma",
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
    icon: "https://media.dev.to/cdn-cgi/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Forganization%2Fprofile_image%2F1968%2F40db4713-914e-41dd-88a6-6c4f684e5ace.png",
    alt: "supabase",
    title: "Supabase",
  },
  {
    icon: "https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png",
    alt: "tailwind",
    title: "Tailwind",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    alt: "next",
    title: "NextJs",
  },
  {
    icon: "https://www.chartjs.org/docs/latest/favicon.ico",
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
];

function Skills() {
  return (

      <div className="h-[90%] grid grid-cols-2 p-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center overflow-y-auto max-h-[125%]">
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
