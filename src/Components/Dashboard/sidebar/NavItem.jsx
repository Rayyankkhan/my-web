import React from 'react';

const NavItem = ({ icon, text, link, dropdownItems }) => {
  if (dropdownItems) {
    return (
      <li className="hover:bg-gray-700 p-2 rounded">
        <div className="block">
          <button className="flex items-center w-full">
            <span className="mr-2" role="img" aria-label={text}>
              {icon}
            </span>
            <span>{text}</span>
            <svg
              className="ml-auto w-4 h-4 transform transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <ul className="space-y-2 pl-4 mt-2 hidden">
            {dropdownItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="block hover:bg-gray-700 rounded py-1"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </li>
    );
  } else {
    return (
      <li className="hover:bg-gray-700 p-2 rounded">
        <a href={link} className=" flex items-center">
          <span className="mr-2" role="img" aria-label={text}>
            {icon}
          </span>
          <span>{text}</span>
        </a>
      </li>
    );
  }
};

export default NavItem;
