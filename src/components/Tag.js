import React, { useEffect, useState } from 'react';

export default function Tag() {
  const [fade, setFade] = useState(false);
  const [click, setClick] = useState(false);
  const [tags, setTags] = useState([
    { content: 'CodeStates', id: 0 },
    { content: 'JJang', id: 1 },
  ]);
  const [input, setInput] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setTags((prev) => [
        ...prev,
        { content: input, id: prev.length ? prev[prev.length - 1].id + 1 : 0 },
      ]);
      setInput('');
    }
  };

  useEffect(() => {
    setFade(true);
  }, []);

  return (
    <div
      className={`w-full h-1/3 flex items-center justify-center`}
      onClick={() => setClick(false)}
    >
      <div
        className={`w-[600px] flex flex-wrap justify-start items-center gap-2 rounded-lg p-2 ${
          click
            ? `border border-purple-700 border-t-black`
            : 'border border-gray-200'
        } transition-opacity duration-500 ease-in-out ${
          fade ? `opacity-100` : `opacity-0`
        }`}
        onClick={(e) => {
          e.stopPropagation();
          setClick(true);
        }}
      >
        {tags.map((tag) => (
          <div
            key={tag.id}
            className="flex items-center gap-2 bg-purple-800 text-white px-2 py-1 rounded-lg"
            onClick={(e) => {
              e.stopPropagation();
              setClick(false);
            }}
          >
            <span>{tag.content}</span>
            <div
              className="w-4 h-4 border border-black rounded-full bg-white text-black cursor-pointer"
              onClick={(e) => {
                setTags((prev) => prev.filter((item) => item.id !== tag.id));
              }}
            >
              <svg
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </div>
          </div>
        ))}
        <input
          className="min-w-[200px] flex-1 h-6 outline-none placeholder:text-gray-600"
          type={'text'}
          value={input}
          maxLength={30}
          placeholder="Please enter to add tags"
          onClick={(e) => {
            e.stopPropagation();
            setClick(true);
          }}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
      </div>
    </div>
  );
}
