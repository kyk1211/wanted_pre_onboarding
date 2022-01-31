import React, { useState } from 'react';

export default function Modal() {
  const [show, setShow] = useState(false);

  const stopBubble = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className="w-full h-96 flex items-center justify-center">
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
            onClick={(e) => stopBubble(e)}
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
