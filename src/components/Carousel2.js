import React, { useCallback, useEffect, useState } from 'react';

export default function Carousel() {
  const [indicater, setIndicater] = useState(0);
  const [index, setIndex] = useState(0);
  const [timer, setTimer] = useState(null);
  const [clone, setClone] = useState([]);
  const [trans, setTrans] = useState('translateX(calc(-100% - 16px))');
  const [time, setTime] = useState(300);
  const [colors] = useState([1, 0, 1, 0]);
  const len = colors.length + 1;

  const handleNextClick = useCallback(() => {
    setIndex((prev) => {
      if (prev >= colors.length) {
        return colors.length;
      }
      return (prev + 1) % len;
    });
    setTime(300);
  }, [colors.length, len]);

  const handlePrevClick = useCallback(() => {
    setIndex((prev) => {
      if (prev <= 0) {
        return -1;
      }
      return (prev - 1 + len) % len;
    });
    setTime(300);
  }, [len]);

  const cloneSlide = (slide) => {
    let first = slide[0];
    let last = slide[slide.length - 1];
    return [last, ...slide, first];
  };

  useEffect(() => {
    let style = `translateX(calc(${index + 1} * (-100% - 16px)))`;
    setTrans(style);
  }, [index]);

  useEffect(() => {
    let timer1;
    if (index === colors.length) {
      timer1 = setTimeout(() => {
        setTime(0);
        setIndex(0);
      }, time);
    }
    if (index === -1) {
      timer1 = setTimeout(() => {
        setTime(0);
        setIndex(3);
      }, time);
    }
    return () => clearTimeout(timer1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colors.length, index]);

  useEffect(() => {
    if (index === -1) {
      setIndicater(colors.length - 1);
    } else if (index === colors.length) {
      setIndicater(0);
    } else {
      setIndicater(index);
    }
  }, [colors.length, index]);

  useEffect(() => {
    setClone(cloneSlide(colors));
  }, [colors]);

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
      <div className="w-full h-full">
        <div
          className="w-[calc(6*100%)] h-full flex"
          onMouseEnter={() => clearInterval(timer)}
          onMouseLeave={() =>
            setTimer(
              setInterval(() => {
                handleNextClick();
              }, 3000)
            )
          }
        >
          {clone.map((color, idx) => {
            return (
              <div
                className={`w-[calc(100%/6+16px)] h-full flex items-center justify-center mx-2 ${
                  color === 1 ? `bg-red-500` : `bg-blue-500`
                }`}
                key={idx}
                style={{
                  transform: trans,
                  transition: `all ${time}ms ease-out`,
                }}
              >
                <span>{index}</span>
              </div>
            );
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
              indicater === idx ? `bg-blue-800` : 'bg-gray-600'
            } hover:bg-blue-800 cursor-pointer`}
            onClick={() => setIndex(idx)}
            key={idx}
          ></div>
        ))}
      </div>
    </div>
  );
}
