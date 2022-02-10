import React, { useCallback, useEffect, useState } from 'react';

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const colors = [1, 0, 1, 0];

  const handleNextClick = useCallback(() => {
    setIndex((prev) => (prev + 1) % colors.length);
  }, [colors.length]);

  const handlePrevClick = useCallback(() => {
    setIndex((prev) => (prev + colors.length - 1) % colors.length);
  }, [colors.length]);

  useEffect(() => {
    let timer = setInterval(() => {
      handleNextClick();
    }, 3000);
    return () => clearInterval(timer);
  }, [handleNextClick]);

  return (
    <div className="w-full h-[200px] relative ">
      <div className="w-full h-full overflow-hidden">
        <div className="w-[400%] h-full flex relative">
          {colors.map((color, idx) => (
            <div
              className={`w-[25%] h-full flex items-center justify-center ${
                color === 1 ? `bg-red-500` : `bg-blue-500`
              }`}
              key={idx}
            >
              <span>{`${idx}(${index})`}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2 absolute bottom-0 right-0 left-0">
        {colors.map((_, idx) => (
          <div
            className={`w-2 h-2 rounded-full ${
              index === idx ? `bg-blue-800` : 'bg-gray-600'
            }`}
            key={idx}
          ></div>
        ))}
      </div>
    </div>
  );
}
