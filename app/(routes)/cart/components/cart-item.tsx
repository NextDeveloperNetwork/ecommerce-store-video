"use client";

import Image from "next/image";
import { toast } from "react-hot-toast";
import { X } from "lucide-react";

import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/input-vatiant";
import React, { useState } from "react";

interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({
  data
}) => {
  const cart = useCart();
  const [quantity, setQuantity] = useState(data.quantity);
  const onRemove = () => {
    cart.removeItem(data.id);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 1 && newQuantity <= 1000) {
      setQuantity(newQuantity); // Update the quantity in the component's state
    }
  };
 
  
  return ( 
    <li className="flex py-6 border-b">
    <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
    <Image
        fill
        src={data.images[0].url}
        alt=""
        className="object-cover object-center"
      />
    </div>
    <div className="ml-4 flex flex-1 flex-col justify-between">
      <div className="flex justify-between items-center mb-2">
        <p className="text-lg font-semibold text-black">{data.name}</p>
        <IconButton onClick={onRemove} icon={<X size={15} />} />
      </div>
      <div className="text-sm font-italic text-gray-500 mb-2">
        Quantity in stock: {data.quantity} pc
      </div>
      <div className="flex items-center text-sm mb-2">
        <p className="text-gray-500">Color: {data.color.name}</p>
        <p className="ml-4 text-gray-500">Size: {data.size.name}</p>
      </div>
      <div className="flex items-center text-lg font-semibold text-black">
        <span className="mr-2">Price:</span>
        <Currency value={data.price} />
      </div>
      <div className="flex items-center mt-4">
        <h2 className="text-sm font-medium text-foreground mr-2">Quantity</h2>
        <div className="flex">
          
        
          
        </div>
      </div>
    </div>
  </li>
  );
}
 
export default CartItem;