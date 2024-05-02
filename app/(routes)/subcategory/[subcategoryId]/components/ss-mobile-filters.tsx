"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import { Dialog } from "@headlessui/react";

import IconButton  from "@/components/ui/icon-button";
import Button from "@/components/ui/Button";
import { Subsub } from "@/types";

import Filter from "./ss-filter";
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
interface MobileFiltersProps {
  subsub: Subsub[],
  
}

const MobileFiltersSS: React.FC<MobileFiltersProps> = ({
  subsub
}) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button
       className="flex items-center rounded-full text-black bg-gray-300 px-2 py-2"onClick={onOpen}
      >
        Filtro
        <Plus size={20}  color="black" />
      </Button>

      <Dialog open={open} as="div" className="relative z-40 lg:hidden" onClose={onClose}>
        
        {/* Background color and opacity */}
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        
        {/* Dialog position */}
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            
            {/* Close button */}
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>

            <div className="p-4 items-center">
              <Filter
                valueKey="subcategoryId" 
                name="Nenkategori" 
                data={subsub}
              />
               <div className="mt-auto py-24">


<div className="text-center flex-auto items-center md:text-center flex flex-col">
<h4 className="text-xl font-semibold text-black-500">Socials</h4> {/* Red color */}

<div className="flex items-center">
<a href="https://www.facebook.com/profile.php?id=61553134485424" target="_blank" rel="noopener noreferrer">
<div className="flex items-center"> {/* Added this container */}
<FaFacebook className="text-blue-500 hover:text-blue-600 hover:animate-spin" />
<span>-facebook: EdiStore</span>
</div>
</a>
</div>

<div className="flex items-center">
<a href="https://www.instagram.com/edistoreal" target="_blank" rel="noopener noreferrer">
<div className="flex items-center"> {/* Added this container */}
<FaInstagram className="text-blue-500 hover:text-blue-600 hover:animate-spin" /> 
<span>-Instagram: EdiStoreAl</span>
</div>
</a>
</div> {/* Blue color with hover effect */}

<div className="flex items-center">
<a href="https://www.tiktok.com/@edistoreal" target="_blank" rel="noopener noreferrer">
<div className="flex items-center"> {/* Added this container */}
<FaTiktok className="text-blue-500 hover:text-blue-600 hover:animate-spin" />
<span>-tik tok: edistoreal</span>
</div>
</a>
</div> {/* Blue color with hover effect */}
</div>

          <div className="text-center text-xs py-4">
            &copy; 2023 Store, Inc. All rights reserved.
          </div>

</div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFiltersSS;
