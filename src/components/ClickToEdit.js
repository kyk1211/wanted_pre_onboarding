import React, { useEffect, useState } from 'react';

export default function ClickToEdit() {
  const [fade, setFade] = useState(false);
  const [name, setName] = useState('홍길동');
  const [age, setAge] = useState('20');

  useEffect(() => {
    setFade(true);
  }, []);

  return (
    <div
      className={`w-full h-96 flex items-center justify-center flex-col gap-8 transition-opacity duration-500 ease-in-out ${
        fade ? `opacity-100` : `opacity-0`
      }`}
    >
      <label>
        이름{' '}
        <input
          type="text"
          defaultValue={name}
          className={`w-44 h-10 border border-solid border-black text-center focus:py-5 focus:text-sm`}
          onBlur={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        나이{' '}
        <input
          type="text"
          defaultValue={age}
          className={`w-44 h-10 border border-solid border-black text-center focus:py-5 focus:text-sm`}
          onBlur={(e) => setAge(e.target.value)}
        />
      </label>
      <p>{`이름 ${name} 나이 ${age}`}</p>
    </div>
  );
}
