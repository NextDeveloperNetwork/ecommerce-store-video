'use client';
import React, { useState, useEffect, useRef } from 'react';
import Button from './ui/Button';
import { PiUserThin } from "react-icons/pi";
import { Users } from 'lucide-react';
import { CiViewList } from "react-icons/ci";
import Link from "next/link";
import LogoutButton from './logout';
import Username from '@/components/username'



 
const UserMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div ref={menuRef}>
      <Button
        onClick={toggleMenu}
        className="bg-transparent text-black"
         style={{ display: 'flex', alignItems: 'center', height: '40px' }}
      >
       <Users style={{ marginRight: '5px' }} /> 
       <span className="text-sm text-black hidden sm:block px-4">Llogaria</span>
       </Button>
     

      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md z-10">
          <ul className="list-none p-2">
          
            <li>
              <Username />
             
            </li>
            <hr className="my-2 border-t border-gray-300" />
            {/* <li className="cursor-pointer py-2 px-4 hover:bg-gray-200">
              <Link
                href="/orders"
                onClick={closeMenu}
                className="flex items-center"
              >
                <CiViewList className="mr-1" />
                <span>Porosite</span>
              </Link>
            </li> */}

            <li className="cursor-pointer py-2 px-4 hover:bg-gray-200">
              <Link
                href="/profil"
                onClick={closeMenu}
                className="flex items-center"
              >
                <PiUserThin className="mr-1" />
                <span>Settings</span>
              </Link>
            </li>
            <hr className="my-2 border-t border-gray-300" />
            <LogoutButton />
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
