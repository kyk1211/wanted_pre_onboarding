import React, { useCallback, useEffect, useState } from 'react';

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [timer, setTimer] = useState(null);
  const colors = [1, 0, 1, 0];

  const handleNextClick = useCallback(() => {
    setIndex((prev) => (prev + 1) % colors.length);
  }, [colors.length]);

  const handlePrevClick = useCallback(() => {
    setIndex((prev) => (prev + colors.length - 1) % colors.length);
  }, [colors.length]);

  useEffect(() => {
    if (timer) {
      clearInterval(timer);
    }
    setTimer(
      setInterval(() => {
        handleNextClick();
      }, 3000)
    );
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleNextClick]);

  return (
    <div className="w-full h-[200px] relative mt-2">
      <div className="w-full h-full overflow-hidden relative">
        <div
          className="w-full h-full flex transition-opacity duration-300 ease-linear"
          onMouseEnter={() => clearInterval(timer)}
          onMouseLeave={() =>
            setTimer(
              setInterval(() => {
                handleNextClick();
              }, 3000)
            )
          }
        >
          {colors.map((color, idx) => {
            if (idx === index) {
              return (
                <div
                  className={`w-full h-full flex items-center justify-center mx-2 ${
                    color === 1 ? `bg-red-500` : `bg-blue-500`
                  } animate-fadeIn`}
                  key={idx}
                >
                  <span>
                    {idx}({index})
                  </span>
                </div>
              );
            } else {
              return null;
            }
          })}
          <div
            className="absolute top-[50%] left-2 rounded-full w-5 h-5 bg-white flex items-center justify-center cursor-pointer"
            onClick={handlePrevClick}
          >
            p
          </div>
          <div
            className="absolute top-[50%] right-2 rounded-full w-5 h-5 bg-white flex items-center justify-center cursor-pointer"
            onClick={handleNextClick}
          >
            n
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-2 absolute bottom-0 right-0 left-0 mb-1">
        {colors.map((_, idx) => (
          <div
            className={`w-2 h-2 rounded-full ${
              index === idx ? `bg-blue-800` : 'bg-gray-600'
            } hover:bg-blue-800 cursor-pointer`}
            onClick={() => setIndex(idx)}
            key={idx}
          ></div>
        ))}
      </div>
    </div>
  );
}
