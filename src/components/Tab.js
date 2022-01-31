import React, { useState } from 'react';
import AutoComplete from './AutoComplete';
import ClickToEdit from './ClickToEdit';
import Modal from './Modal';
import Tag from './Tag';
import Toggle from './Toggle';

export default function Tab() {
  const [menu] = useState([
    { name: 'autoComplete', item: <AutoComplete /> },
    { name: 'clickToEdit', item: <ClickToEdit /> },
    { name: 'modal', item: <Modal /> },
    { name: 'tag', item: <Tag /> },
    { name: 'toggle', item: <Toggle /> },
  ]);
  const [content, setContent] = useState(null);
  const [name, setName] = useState('');

  return (
    <div className="w-full h-full">
      <nav className="h-12 px-2 bg-gray-200">
        <ul className="flex justify-evenly h-full">
          {menu.map((item, idx) => (
            <li
              key={idx}
              className={`w-1/5 px-2 flex items-center font-bold transition-colors duration-500 ${
                name !== item.name
                  ? `bg-gray-200 text-gray-400`
                  : `bg-purple-700 text-white`
              } cursor-pointer`}
              onClick={() => {
                setName(item.name);
                setContent(item.item);
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </nav>
      {content}
    </div>
  );
}
