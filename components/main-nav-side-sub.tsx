import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Subcategory } from "@/types";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";

interface MainNavSideProps {
  data: Subcategory[];
 
}

const MainNavSideSub: React.FC<MainNavSideProps> = ({
  data,


}) => {
  const pathname = usePathname();
  const [openSubcategory, setOpenSubcategory] = useState<number | null>(null);

  const routes = data.map((route) => ({
    href: `/subcategory/${route.id}`,
    label: route.name,
    active: pathname === `/subcategory/${route.id}`,
  }));

  const handleSubcategoryClick = (index: number) => {
    if (openSubcategory === index) {
      setOpenSubcategory(null);
    } else {
      setOpenSubcategory(index);
    }
  };

  return (
    <nav className="mx-4 ">
      <h2 className="text-2xl font-semibold mb-4">Subcategories</h2>
      <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
        {routes.map((route, index) => (
          <li key={route.href} className="mb-2">
            <div
              className={cn(
                'flex items-center w-full p-2 bg-white border font-bold border-gray-400 shadow-md rounded transition-colors',
                route.active
                  ? 'text-black bg-blue-500 border border-gray-800'
                  : 'text-slate-500',
              )}
            >
              <span
                className={cn('cursor-pointer', {
                  'mr-2': openSubcategory === index, // Add margin if the category is open
                })}
                onClick={() => handleSubcategoryClick(index)}
              >
                {openSubcategory === index ? (
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
            {openSubcategory === index && (
              <ul className="pl-6">
                   
              </ul>
              
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MainNavSideSub;