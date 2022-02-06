import React, { useEffect, useState } from 'react';

export default function Toggle() {
  const [toggle, setToggle] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
  }, []);

  return (
    <div
      className={`w-full h-96 flex flex-col items-center justify-center gap-5 transition-opacity duration-500 ease-in-out ${
        fade ? `opacity-100` : `opacity-0`
      }`}
    >
      <div
        className={`w-48 h-20 rounded-full flex items-center p-2 transition-colors ease-linear duration-[250ms] ${
          toggle ? `bg-purple-500` : `bg-gray-400`
        }`}
        onClick={() => setToggle((prev) => !prev)}
      >
        <div
          className={`w-16 h-16 rounded-full bg-white transition-transform ease-linear duration-[250ms] ${
            toggle ? `translate-x-28` : `translate-x-0`
          } `}
        ></div>
      </div>
      <p className="text-3xl">
        {toggle ? `Toggle Switch On` : `Toggle Switch Off`}
      </p>
    </div>
  );
}
