import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Category,Subcategory } from "@/types";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";







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
                'flex items-center w-full p-2 bg-white border font-bold border-gray-400 shadow-md rounded transition-colors',
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
                      <a href={`/subcategory/${subcategory.id}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        {subcategory.name}
                      </a>
                    </li>
                  ))}
              </ul>
              
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MainNavSide;