

import Link from "next/link";
import {auth} from "@clerk/nextjs";
import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";
import Button from './ui/Button';
import { PiUserThin } from "react-icons/pi";
import MobileFilters from "./category-filter";
import NavbarSearch from "./search-bar/navbar-search";
import Image from "next/image";
import UserMenue from "./drop-user-menue";

const Navbar = async () => {
  const {userId} =auth();

  const categories = await getCategories();
 
  return (
<div className="border-b sticky top-0 bg-white z-10">
  <Container>
    <div className="mx-auto max-w-7xl relative flex h-12 items-center px-4 justify-between">
      <MobileFilters categories={categories} />
      <Link href="/" className="flex items-center gap-x-2">
      <Image
        src="/images/favicon.png"
        alt="Market Logo"
        width={80}
        height={80}
      />
      </Link>
      <div className="hidden md:flex">
        {/* Hide on screens smaller than md (medium) */}
        
      </div>
      <div className="flex-grow"></div>
      <div className="hidden md:flex" >
      <NavbarSearch />
      </div>
      
      <NavbarActions />
      <div>
      <div className="ml-auto flex items-center gap-x-4">
        {!userId &&(
          <>
        <Link href='sign-in' className="text-grey-300 hover:text-black mr-4 py-2">
          <Button 
  
           style={{ display: 'flex', alignItems: 'center', height: '40px' }}
           >
          <PiUserThin style={{ marginRight: '5px' }} /> LogIn
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
</div>
  );

};

export default Navbar;
