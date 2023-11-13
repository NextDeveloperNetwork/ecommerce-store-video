

import Link from "next/link";
import { redirect } from "next/navigation";
import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";
import SearchInput from "@/components/search-input"
import MobileFilters from "./category-filter";
import SearchBar from "@/components/search-bar"
import SE from "./search-element";
import NavbarSearch from "@/components/search-bar/navbar-search";







const Navbar = async () => {


  const categories = await getCategories();
 
  return (
    <div className="border-b sticky top-0 bg-white z-10">

      <Container>
      
        <div className="mx-auto max-w-7xl  relative flex h-16 items-center px-4 justify-between">
        <MobileFilters categories={categories} />
        
          <Link href="/" className="flex items-center gap-x-2">
            <p className="font-bold text-xl px-2 "> Market</p>
          </Link>
          <div className="hidden md:flex"> {/* Hide on screens smaller than md (medium) */}
            <MainNav data={categories} />
          </div>
          <div className="flex-grow "></div> {/* Pushes elements to the left */}
       
          <NavbarSearch/>
          <NavbarActions />
        </div>
      </Container>
    </div>
  );

};

export default Navbar;
