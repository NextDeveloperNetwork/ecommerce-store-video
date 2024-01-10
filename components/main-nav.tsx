"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Category, Subcategory as SubcategoryTypes } from "@/types";

import DropdownMenu from "@/components/ui/dropdown-menu";

interface TruncatedLinkProps {
  route: {
    href: string;
    label: string;
    active: boolean;
  };
}

const TruncatedLink: React.FC<TruncatedLinkProps> = ({ route }) => {
  const truncatedLabel =
    route.label.length > 15
      ? route.label.substring(0, 12) + "..."
      : route.label;

  return (
    <Link
      key={route.href}
      href={route.href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-black",
        route.active
          ? "text-black font-bold border-b-2 border-red-500"
          : "text-black"
      )}
    >
      {truncatedLabel}
    </Link>
  );
};

interface MainNavProps {
  data: Category[];
}

import React from 'react';

interface Subcategory {
  id: string;
  name: string;
}

function MyDropdown(route: { href: string; label: string; active: boolean }, subcategories: SubcategoryTypes[]) {
  return (
    <div className="relative inline-block text-left group">
      {/* Dropdown button */}
      <button
        id="dropdownHoverButton"
        data-dropdown-toggle="dropdownHover"
        data-dropdown-trigger="hover"
        className="text-gray-800 bg-transparent hover:bg-white/50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={() => {}}
      >
        {route.label}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>

      {/* Dropdown menu */}
      <div id="dropdownHover" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
          {subcategories.map((subcategory) => (
            <li key={subcategory.id}>
              <a href={`/category/${subcategory.id}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                {subcategory.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const limitedRoutes = data.slice(0, 6).map((route) => ({
    id: route.id,
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
    subcategories: route.subcategories
  }));

  return (
    <nav className="mx-6 flex items-center justify-between space-x-4 lg:space-x-6">
      {limitedRoutes.map((route) => (
        <div key={route.href}>
          {/* <TruncatedLink key={route.href} route={route} /> */}
          {/* {MyDropdown(route, route.subcategories)} */}
          <DropdownMenu route={route} subcategories={route.subcategories} />
        </div>        
      ))}
    </nav>
  );

};

export default MainNav;
