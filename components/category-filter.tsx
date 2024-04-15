"use client";

import { useState } from "react";
import { MenuIcon,  X } from "lucide-react";
import { Dialog } from "@headlessui/react";

import IconButton  from "@/components/ui/icon-button";
import { Category } from "@/types";
import MainNavSide from "./main-nav-side";
import Button from "./ui/Button";
import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';




interface MobileFiltersProps {
  categories: Category[],

}

const MobileFilters: React.FC<MobileFiltersProps> = ({
 categories
}) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
    <Button className="flex flex-col items-center bg-transparent rounded-full px-0 py-2" onClick={onOpen}>
  {<MenuIcon size={25} color="black" />}
  <span className="text-sm text-black hidden sm:block">Kategori</span>
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
  
          <div className="p-2 ">
            <MainNavSide data={categories}  />
          </div>

        
        </Dialog.Panel>
      </div>
    </Dialog>
  </>
  );
};

export default MobileFilters;
