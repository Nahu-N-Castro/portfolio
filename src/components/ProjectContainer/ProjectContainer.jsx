/* eslint-disable react/prop-types */
import { useState } from "react";
import WindowHeader from "../WindowHeader/WindowHeader";

const ProjectContainer = ({ onSelect, title }) => {
  const [content, setContent] = useState(true);
  return (
    <section className="flex flex-col w-full h-full p-5  text-black">
      <WindowHeader onSelect={onSelect} title={title} />
      <div className="bg-amber-50 p-5 over max-h-[35rem] overflow-y-auto">
        <img src="/artify/captura-01.png" alt="captura"  className="h-72 mx-auto my-5" />
        <button
          onClick={() => setContent(true)}
          className={`bg-neutral-400 rounded-r-none rounded-bl-none p-2 focus:outline-none ${
            content ? "bg-neutral-500" : null
          }`}>
          Documentación
        </button>
        <button
          onClick={() => setContent(false)}
          className={`bg-neutral-400 rounded-l-none rounded-br-none p-2 focus:outline-none ${
            !content ? "bg-neutral-500" : null
          }`}>
          Detalle
        </button>
        {content ? <div className="bg-neutral-500 p-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, esse itaque. Dolore voluptatum facilis ipsam sint rerum? Praesentium ea, vel repellendus molestiae eum nihil accusamus, asperiores enim eveniet ab aspernatur Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam praesentium suscipit at totam dolores labore nulla ea magni. Autem laborum assumenda labore laboriosam praesentium consectetur minus obcaecati omnis ex ducimus!.</div> : <div>Detalle</div>}
      </div>
    </section>
  );
};

export default ProjectContainer;
