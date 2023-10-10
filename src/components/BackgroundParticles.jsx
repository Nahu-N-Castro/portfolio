/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function remToPx(remValue) {
  return (
    remValue * parseFloat(getComputedStyle(document.documentElement).fontSize)
  );
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function generateParticles(num) {
  const icons = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  ];

  let particles = [];
  for (let i = 0; i < num; i++) {
    particles.push({
      id: i,
      x: getRandom(0, window.innerWidth),
      y: getRandom(0, window.innerHeight),
      dx: getRandom(-1, 1),
      dy: getRandom(-1, 1),
      icon: icons[Math.floor(Math.random() * icons.length)],
    });
  }
  return particles;
}

function BackgroundParticles({ widthRem, heightRem, num }) {
  const [particles, setParticles] = useState(generateParticles(num));
  const width = remToPx(widthRem);
  const height = remToPx(heightRem);

  useEffect(() => {
    function animate() {
      setParticles((prev) =>
        prev.map((p) => ({
          ...p,
          x: p.x + p.dx,
          y: p.y + p.dy,
          // Hacer que las partículas reboten en los bordes del div
          dx: p.x + p.dx < 0 || p.x + p.dx > width ? -p.dx : p.dx,
          dy: p.y + p.dy < 0 || p.y + p.dy > height ? -p.dy : p.dy,
        }))
      );

      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [width, height]);

  return (
    <div className="absolute w-full h-screen">
      {particles.map((p) => (
        <img
          key={p.id}
          src={p.icon}
          alt="Dynamic Icon"
          className="absolute opacity-10 "
          style={{ left: p.x, top: p.y, width: "50px", height: "50px" }}
        />
      ))}
    </div>
  );
}

export default BackgroundParticles;
