"use client";

import { Subcategory } from '@/types';

import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';

interface DropMenuProps {
    route: {
        id: string, href: string; label: string; active: boolean
    },
    subcategories: Subcategory[]
}

const DropdownMenu = ({
    route, subcategories
}: DropMenuProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const onClick = (href : string) => {
    window.location.href = href;
  }

  return (
    <div className="relative inline-block text-left " onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
     {/* Dropdown button */}
<button
  id={`dropdownHoverButton-${route.id}`}
  data-dropdown-toggle={`dropdownHover-${route.id}`}
  data-dropdown-trigger="hover"
  className="whitespace-nowrap text-black bg-transparent hover:bg-white/30 focus:ring-4 focus:outline-none focus:ring-blue-100 font-medium rounded-lg text-sm px-2 md:px-2 py-2 md:py-2.5 text-center inline-flex items-center transition duration-300 ease-in-out transform hover:scale-105 md:scale-100"
  type="button"
  onClick={() => onClick(route.href)}
>
  {route.label}
  <svg
    className="w-2.5 h-2.5 ms-2 md:ms-3"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 10 6"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m1 1 4 4 4-4"
    />
  </svg>
</button>
  


{/* Dropdown menu */}
<div
  id={`dropdownHover-${route.id}`}
  role="menu"
  aria-labelledby={`dropdownHover-${route.id}`}
  className={`z-10 ${isHovered ? 'block opacity-100 scale-100' : 'hidden opacity-0 scale-95'} bg-gradient-to-r from-white to-gray-200 divide-y divide-gray-200 rounded-lg shadow-lg w-full md:w-96 absolute overflow-hidden transform transition-all ease-in-out duration-300`}
  style={{ transformOrigin: 'top' }}
>
  <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-1 p-2">
    {subcategories.map((subcategory, index) => (
      <div key={subcategory.id}>
        <a
          href={`/subcategory/${subcategory.id}`}
          className="flex items-center justify-between px-2 py-2 text-sm font-semibold transition duration-300 ease-in-out transform hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 hover:shadow-lg focus:outline-none focus:ring focus:border-blue-300 rounded-md"
          style={{ transitionProperty: 'background, transform, box-shadow', transitionDuration: '0.3s' }}
        >
          <span>{subcategory.name}</span>
          <FaChevronRight className="ml-2" /> {/* Add chevron right icon */}
        </a>
      </div>
    ))}
  </div>
  <div className="p-4">
    <button
      onClick={() => setIsHovered(false)}
      className="w-full text-gray-500 hover:text-gray-700 focus:outline-none transition duration-300 transform hover:scale-110"
    >
      Close
    </button>
  </div>
</div>
</div>

  );
  
};

export default DropdownMenu;