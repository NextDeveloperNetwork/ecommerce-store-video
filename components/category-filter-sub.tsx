"use client";

import { useState } from "react";
import { MenuIcon,  X } from "lucide-react";
import { Dialog } from "@headlessui/react";

import IconButton  from "@/components/ui/icon-button";
import { Subcategory } from "@/types";
import MainNavSideSub from "./main-nav-side-sub";
import Button from "./ui/Button";
import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';




interface MobileFiltersProps {
  subcategories: Subcategory[],

}

const MobileFiltersC: React.FC<MobileFiltersProps> = ({
 subcategories
}) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
    <Button className="flex items-center rounded-full bg-black px-2 py-2"onClick={onOpen} >
    {<MenuIcon  
    size={15}
    color="white" />} 
    Nenkategori
    </Button>
    
    <Dialog open={open} as="div" className="relative z-40" onClose={onClose}>
      
      {/* Background color and opacity */}
      <div className="fixed inset-0 bg-black bg-opacity-25" />
      
      {/* Dialog position */}
      <div className="fixed inset-0 z-40 flex">
        <Dialog.Panel className="relative flex h-full w-full max-w-xs flex-col
         overflow-y-auto bg-white py-2 pb-4 shadow-xl left-0"> {/* Added "left-0" class */}
          
          {/* Close button */}
          <div className="flex items-center justify-end px-4">
            <IconButton icon={<X size={15} />} onClick={onClose} />
          </div>
  
          <div className="p-2">
            <MainNavSideSub data={subcategories}  />
          </div>
          <div className="mt-auto">


<div className="text-center flex-auto items-center md:text-center flex flex-col">
<h4 className="text-xl font-semibold text-black-500">Socials</h4> {/* Red color */}

<div className="flex items-center">
<a href="https://www.facebook.com/your-store-url" target="_blank" rel="noopener noreferrer">
<div className="flex items-center"> {/* Added this container */}
<FaFacebook className="text-blue-500 hover:text-blue-600 hover:animate-spin" />
<span>-facebook: EDI Dyqan</span>
</div>
</a>
</div>

<div className="flex items-center">
<a href="https://www.instagram.com/your-store-url" target="_blank" rel="noopener noreferrer">
<div className="flex items-center"> {/* Added this container */}
<FaInstagram className="text-blue-500 hover:text-blue-600 hover:animate-spin" /> 
<span>-Instagram: EDI_STORE</span>
</div>
</a>
</div> {/* Blue color with hover effect */}

<div className="flex items-center">
<a href="https://www.tiktok.com/your-store-url" target="_blank" rel="noopener noreferrer">
<div className="flex items-center"> {/* Added this container */}
<FaTiktok className="text-blue-500 hover:text-blue-600 hover:animate-spin" />
<span>-tik tok: EDI_STORE</span>
</div>
</a>
</div> {/* Blue color with hover effect */}
</div>

          <div className="text-center text-xs py-4">
            &copy; 2023 Store, Inc. All rights reserved.
          </div>

</div>
        </Dialog.Panel>
      </div>
    </Dialog>
  </>
  );
};

export default MobileFiltersC;
