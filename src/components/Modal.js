import React, { useEffect, useState } from 'react';

export default function Modal() {
  const [fade, setFade] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setFade(true);
  }, []);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [show]);

  return (
    <>
      <div
        className={`w-full h-[calc(100%-48px)] flex items-center justify-center transition-opacity duration-500 ease-in-out ${
          fade ? `opacity-100` : `opacity-0`
        }`}
      >
        <div
          className="flex items-center justify-center rounded-full bg-purple-700 w-48 h-20 text-white text-2xl cursor-pointer"
          onClick={() => setShow(true)}
        >
          Open Modal
        </div>
      </div>
      {show && (
        <div
          onClick={() => setShow(false)}
          className="bg-gray-500 w-screen h-full fixed inset-0 bg-opacity-50 flex items-center justify-center"
        >
          <div
            className="bg-white w-96 h-60 rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center flex-col w-full h-full ">
              <p
                className="font-bold text-black cursor-pointer text-center"
                onClick={() => setShow(false)}
              >
                X
              </p>
              <p className="h-5/6 flex items-center">Modal</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
