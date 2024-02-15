'use client';
import React, { useState, useEffect, useRef } from 'react';
import Button from './ui/Button';
import { PiUserThin } from "react-icons/pi";
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
        style={{ display: "flex", alignItems: "center", height: "40px" }}
      >
        <PiUserThin style={{ marginRight: "5px" }} /> Llogaria
      </Button>

      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md">
          <ul className="list-none p-2">
            <li>
              <Username />
            </li>

            <li className="cursor-pointer py-2 px-4 hover:bg-gray-200">
              <Link
                href="/orders"
                onClick={closeMenu}
                className="flex items-center"
              >
                <CiViewList className="mr-1" />
                <span>Porosite</span>
              </Link>
            </li>

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

            <LogoutButton />
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
