

import Link from "next/link";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";

import MobileFilters from "./category-filter";
import NavbarSearch from "./search-bar/navbar-search";


const Navbar = async () => {


  const categories = await getCategories();
 
  return (
    <div className="border-b sticky top-0 bg-white z-10">
  <Container>
    <div className="mx-auto max-w-7xl relative flex h-12 items-center px-4 justify-between">
      <MobileFilters categories={categories} />
      <Link href="/" className="flex items-center gap-x-2">
        <img src="images/favicon.png" alt="Market Logo" className="h-16 w-16" />
      </Link>
      <div className="hidden md:flex">
        {/* Hide on screens smaller than md (medium) */}
        <MainNav data={categories} />
      </div>
      <div className="flex-grow"></div>
      <NavbarSearch />
      <NavbarActions />
    </div>
    
  </Container>
</div>
  );

};

export default Navbar;
