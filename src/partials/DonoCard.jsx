import React from "react";

const DonoCard = ({ name, address, delay }) => {
  let timeoutId;

  // fuck please dont look at this
  const handleCope = () => {
    if (timeoutId) return;

    navigator.clipboard.writeText(address);

    const btn = document.getElementById(`addressCopyBtn::${name}`);

    btn.classList.add("text-green-500");
    btn.classList.remove("hover:text-white", "hover:border-white");
    btn.innerText = "Copied";

    timeoutId = setTimeout(() => {
      btn.classList.remove("text-green-500");
      btn.classList.add("hover:text-white", "hover:border-white");
      btn.innerText = address;

      timeoutId = null;
    }, 1000);
  };

  return (
    <div
      className="w-[50%] md:w-full p-4 transition duration-300 border-2 rounded-md h-fit hover:brightness-110 bg-slate-800 border-slate-700/50"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="mx-auto">
        <p className="text-xl font-bold">{name}</p>

        <button
          disabled={!!timeoutId}
          id={`addressCopyBtn::${name}`}
          title={`Copy ${address}`}
          className="max-w-[75%] truncate hover:text-white transition-all duration-750 border-b-2 border-transparent hover:border-white"
          onClick={handleCope}
        >
          {address}
        </button>
      </div>
      <img
        draggable={false}
        className="w-40 mx-auto mt-4 select-none aspect-square"
        src={`/qrcodes/${name.toLowerCase()}.svg`}
      />
    </div>
  );
};

export default DonoCard;

