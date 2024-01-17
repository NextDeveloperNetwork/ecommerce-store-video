"use client";


import { usePathname } from "next/navigation";

import { Category, Subcategory as SubcategoryTypes } from "@/types";

import DropdownMenu from "@/components/ui/dropdown-menu";
interface MainNavProps {
  data: Category[];
}

import React from 'react';

interface Subcategory {
  id: string;
  name: string;
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const limitedRoutes = data.slice(0, 10).map((route) => ({
    id: route.id,
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
    subcategories: route.subcategories
  }));

  return (
    <div className="mx-auto max-w-7xl relative flex h-12 items-center px-4 justify-between">
        <nav className="flex ">
      {limitedRoutes.map((route) => (
        <div  key={route.href}>
          <DropdownMenu route={route} subcategories={route.subcategories} />
        </div>
      ))}
    </nav>
    </div>
  
    
  );

};

export default MainNav;
