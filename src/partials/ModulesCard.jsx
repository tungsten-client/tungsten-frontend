
import React from "react";

const ModulesCard = ({ name, description, img }) => {
  return (
    <div
      className="w-[50%] md:w-full p-4 transition duration-300 border-2 rounded-md h-fit hover:brightness-110 bg-slate-800 border-slate-700/50"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="mx-auto">
        <h1 className="text-xl font-bold">{name}</h1>
        <p className="line-clamp-3 text-wrap text-left break-words hyphens-auto " lang="en">{description}</p>
        <button
          id={`modules::${name}`}
          className="max-w-[75%] truncate hover:text-white transition-all duration-750 border-b-2 border-transparent hover:border-white"
        >
          Download
        </button>

      </div>
      <img
        draggable={false}
        className="w-40 mx-auto mt-4 select-none aspect-square"
        src={img}
      />
    </div>
  );
};

export default ModulesCard;

