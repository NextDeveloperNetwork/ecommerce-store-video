"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Category,Subcategory } from "@/types";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import Icon from "./icon";
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

interface MainNavSideProps {
  data: Category[];
}

const MainNavSide: React.FC<MainNavSideProps> =   ({
  data,

}) => {
  const pathname = usePathname();
  const [openCategory, setOpenCategory] = useState<number | null>(null);
  
  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
    subcategories: route.subcategories
  }));

  const handleCategoryClick = (index: number) => {
    if (openCategory === index) {
      setOpenCategory(null);
    } else {
      setOpenCategory(index);
    }
  };
  
  return (
    <nav className="mx-4 ">
      <h2 className="text-2xl font-semibold mb-4">Kategorite</h2>
      <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
        {routes.map((route, index) => (
          <li key={route.href} className="mb-2">
            <div
              className={cn(
                'flex items-center w-full p-2 bg-gradient-to-r from-white to-slate-200 shadow-md font-bold  transition-colors',
                route.active
                  ? 'text-black bg-blue-500 border border-gray-800'
                  : 'text-slate-500',
              )}
            >
              <span
                className={cn('cursor-pointer', {
                  'mr-2': openCategory === index, // Add margin if the category is open
                })}
                onClick={() => handleCategoryClick(index)}
              >
                {openCategory === index ? (
                  <BiChevronDown size={20} /> // Icon when the category is open
                ) : (
                  <BiChevronRight size={20} /> // Icon when the category is closed
                )}
              </span>
              <Link
                href={route.href}
                className={cn('ml-2', {
                  'text-center': route.active,
                })}
              >
                {route.label}
                
              </Link>
            </div>
            {openCategory === index && (
              <ul className="pl-6">
                  {route.subcategories.map((subcategory) => (
                    
                    <li key={subcategory.id}>   
                      <a href={`/subcategory/${subcategory.id}`} className="block px-4 py-2 border border-white  transition 
                      duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 
                      hover:shadow-lg focus:outline-none focus:ring focus:border-blue-300
                      rounded-md bg-gradient-to-r from-purple-200 to-blue-400 text-black font-semibold text-center">
                        {subcategory.name}  
                      </a>
                    </li>
                  ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <div className="mt-auto py-24">


          <div className="text-center flex-auto items-center md:text-center flex flex-col">
  <h4 className="text-xl font-semibold text-black-500">Socials</h4> {/* Red color */}
  
  <div className="flex items-center">
    <a href="https://www.facebook.com/profile.php?id=61553134485424" target="_blank" rel="noopener noreferrer">
      <div className="flex items-center"> {/* Added this container */}
        <FaFacebook className="text-blue-500 hover:text-blue-600 hover:animate-spin" />
        <span>-facebook: EdiStore</span>
      </div>
    </a>
  </div>

  <div className="flex items-center">
    <a href="https://www.instagram.com/edistoreal" target="_blank" rel="noopener noreferrer">
      <div className="flex items-center"> {/* Added this container */}
        <FaInstagram className="text-blue-500 hover:text-blue-600 hover:animate-spin" /> 
        <span>-Instagram: EdiStoreAl</span>
      </div>
    </a>
  </div> {/* Blue color with hover effect */}

  <div className="flex items-center">
    <a href="https://www.tiktok.com/@edistoreal" target="_blank" rel="noopener noreferrer">
      <div className="flex items-center"> {/* Added this container */}
        <FaTiktok className="text-blue-500 hover:text-blue-600 hover:animate-spin" />
        <span>-tik tok: edistoreal</span>
      </div>
    </a>
  </div> {/* Blue color with hover effect */}
</div>

                    <div className="text-center text-xs py-4">
                      &copy; 2023 Store, Inc. All rights reserved.
                    </div>

          </div>
    </nav>
  );
}

export default MainNavSide;