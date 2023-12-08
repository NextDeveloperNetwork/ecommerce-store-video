'use client';
import React, { useState } from 'react';
import Button from './ui/Button';
import { PiUserThin } from "react-icons/pi";
import { CiViewList } from "react-icons/ci";
import Link from "next/link";
import LogoutButton from './logout';

const UserMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <div >
     <Button 
  onClick={toggleMenu}
  style={{ display: 'flex', alignItems: 'center', height: '40px' }}
>
  <PiUserThin style={{ marginRight: '5px' }} /> Account
</Button>

      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md">
         
          <ul className="list-none p-2">
         
      


            <li className="cursor-pointer py-2 px-4 hover:bg-gray-200">
              <Link href="/profil" onClick={closeMenu}>
                
              <PiUserThin /><span style={{ marginRight: '5px' }}>Settings</span>
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
