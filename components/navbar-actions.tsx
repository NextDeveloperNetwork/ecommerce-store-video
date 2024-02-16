"use client";

import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Button from "@/components/ui/Button";
import useCart from "@/hooks/use-cart";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return ( 
<div className="ml-auto flex items-center gap-x-4 px-2">
  <div className="flex flex-col items-center">
    <Button onClick={() => router.push('/cart')} className="flex items-center relative rounded-full bg-transparent px-4 py-2">
      <ShoppingCart className="text-black" />
      <span className={`absolute top-0 right-0 mt-1 -mr-2 ${cart.items.length < 1 ? 'bg-gray-300' : 'bg-red-500'} text-white text-xs px-1 rounded-full`}>
        {cart.items.length}
      </span>
    </Button>
    <span className=" text-sm text-black hidden sm:block">Shporta</span>
  </div>
</div>
  );
}
 
export default NavbarActions;
    

