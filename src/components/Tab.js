import React, { useState } from 'react';
import AutoComplete from './AutoComplete';
import ClickToEdit from './ClickToEdit';
import Modal from './Modal';
import Tag from './Tag';
import Toggle from './Toggle';

const menu = [
  { name: 'autoComplete', component: <AutoComplete /> },
  { name: 'clickToEdit', component: <ClickToEdit /> },
  { name: 'modal', component: <Modal /> },
  { name: 'tag', component: <Tag /> },
  { name: 'toggle', component: <Toggle /> },
];

export default function Tab() {
  const [content, setContent] = useState(null);
  const [tab, setTab] = useState('');

  return (
    <div className="w-full h-full">
      <nav className="h-12 px-2 bg-gray-200">
        <ul className="flex justify-evenly h-full">
          {menu.map(({ name, component }, idx) => (
            <li
              key={idx}
              className={`w-1/5 px-2 flex items-center font-bold transition-colors duration-500 ${
                tab !== name
                  ? `bg-gray-200 text-gray-400`
                  : `bg-purple-700 text-white`
              } cursor-pointer`}
              onClick={() => {
                setTab(name);
                setContent(component);
              }}
            >
              {name}
            </li>
          ))}
        </ul>
      </nav>
      {content}
    </div>
  );
}
