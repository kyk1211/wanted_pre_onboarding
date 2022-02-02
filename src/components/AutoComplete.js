import React, { useEffect, useState } from 'react';

const auto = [
  'apple',
  'banana',
  'grape',
  'peach',
  'mango',
  'watermelon',
  'melon',
  'strawberry',
  'blueberry',
  'kiwi',
  'orange',
  'lemon',
  'cherry',
];
auto.sort();

export default function AutoComplete() {
  const [filtered, setFiltered] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [autoValue, setAutoValue] = useState('');
  const [focus, setFocus] = useState(false);
  const [index, setIndex] = useState(null);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
  }, []);

  useEffect(() => {
    setIndex(null);
    if (inputValue) {
      setFiltered(
        auto
          .filter((item) =>
            item.toLowerCase().includes(inputValue.toLowerCase())
          )
          .slice(0, 6)
      );
    }
  }, [inputValue]);

  useEffect(() => {
    setAutoValue(filtered[index]);
  }, [filtered, index]);

  return (
    <div
      className={`w-full h-5/6 flex flex-col items-center p-2 transition-opacity duration-500 ease-in-out ${
        fade ? `opacity-100` : `opacity-0`
      }`}
      onClick={() => setFocus(false)}
    >
      <div
        className={`w-[500px] h-10 px-3 py-2 flex justify-between border-gray-400 border rounded-xl  
        ${
          focus
            ? inputValue &&
              auto.filter((item) =>
                item.toLowerCase().includes(inputValue.toLowerCase())
              ).length !== 0
              ? `rounded-b-none`
              : 'shadow-[0_4px_5px_-2px_#6b7280]'
            : 'shadow-[0_4px_5px_-2px_#6b7280]'
        }
        `}
        onClick={(e) => e.stopPropagation()}
      >
        <input
          className={`w-[500px] h-6 outline-none`}
          type="search"
          value={autoValue || inputValue}
          placeholder="search"
          onChange={(e) => {
            setInputValue(e.target.value);
            setAutoValue('');
          }}
          onFocus={() => setFocus(true)}
          onBlur={() => setIndex(null)}
          onKeyDown={(e) => {
            if (e.key === 'ArrowUp') {
              e.preventDefault();
              setIndex((prev) =>
                prev === null
                  ? filtered.length - 1
                  : prev === 0
                  ? null
                  : prev - 1
              );
            }
            if (e.key === 'ArrowDown') {
              e.preventDefault();
              setIndex((prev) =>
                prev === null
                  ? 0
                  : prev === filtered.length - 1
                  ? null
                  : prev + 1
              );
            }
          }}
        />
        <span
          className={`w-6 h-6 cursor-pointer flex justify-center items-center ${
            inputValue ? '' : 'hidden'
          }`}
          onClick={() => {
            setInputValue('');
            setAutoValue('');
          }}
        >
          <svg
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
        </span>
      </div>
      {focus && inputValue && filtered.length !== 0 && (
        <div
          className={`flex flex-col w-[500px] max-h-[200px] px-2 py-1 shadow-[0_4px_5px_-2px_#6b7280] rounded-b-xl border-gray-400 border border-t-0`}
        >
          {filtered.map((item, idx) => (
            <span
              key={idx}
              className={`p-1 rounded cursor-pointer hover:bg-gray-200`}
              onClick={() => {
                setAutoValue(item);
                setFocus(false);
              }}
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
