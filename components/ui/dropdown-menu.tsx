"use client";

import { Subcategory } from '@/types';
import React, { useState } from 'react';

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
    <div className="relative inline-block text-left" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {/* Dropdown button */}
      <button
        id={`dropdownHoverButton-${route.id}`}
        data-dropdown-toggle={`dropdownHover-${route.id}`}
        data-dropdown-trigger="hover"
        className="whitespace-nowrap text-gray-800 bg-transparent hover:bg-white/30 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
        type="button"
        onClick={() => onClick(route.href)}
      >
        {route.label}
        <svg
          className="w-2.5 h-2.5 ms-3"
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
        className={`z-10 ${isHovered ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute`}
      >
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby={`dropdownHoverButton-${route.id}`}>
        {subcategories.map((subcategory) => (
            <li key={subcategory.id}>
              <a href={`/subcategory/${subcategory.id}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                {subcategory.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;