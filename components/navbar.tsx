

import Link from "next/link";
import {auth} from "@clerk/nextjs";
import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";
import Button from './ui/Button';
import { Users } from 'lucide-react';
import MobileFilters from "./category-filter";
import NavbarSearch from "./search-bar/navbar-search";
import Image from "next/image";
import UserMenue from "./drop-user-menue";
import SubNavbar from "./subnavbar";


const Navbar = async () => {
  const {userId} =auth();

  const categories = await getCategories();
 
  return (
<div className="border-b sticky top-0 bg-black z-10">
  <Container>
    <div className="mx-auto max-w-7xl relative flex items-center px-4 justify-between h-14 border rounded-lg bg-white">
    <Link href="/" className="flex items-center gap-x-2">
      <Image
     
        src="/images/favicon.png"
        alt="Market Logo"
        width={70}
        height={40}
      />
      </Link>
     
      <div className="hidden md:flex">
        {/* Hide on screens smaller than md (medium) */}
        
      </div>
      <div className="flex-grow"></div>
      <div className="hidden md:flex" >
      <NavbarSearch />
      </div>
      <MobileFilters categories={categories} />
      {/* <NavbarActions />  */}
      <div>
       <div className="ml-auto flex items-center justify-center gap-x-4">
        {!userId &&(
          <>
<Link href='/sign-in' className="text-gray-300 hover:text-black mr-4 py-2">
  <Button className="bg-transparent text-black" style={{ display: 'flex', alignItems: 'center', height: '40px' }}>
    <Users style={{ marginRight: '5px' }} />
    <span className="text-sm text-black hidden sm:block px-4">LogIn</span>
  </Button>
  
</Link>
       
          </>
        )}
         {userId && (
          <UserMenue/> 
        )}
      </div> 
    </div> 
    
    </div>
   

  </Container>
  <SubNavbar />
</div>
  );

};

export default Navbar;
