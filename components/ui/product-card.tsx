"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

import Currency  from "@/components/ui/currency";
import IconButton  from "@/components/ui/icon-button";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import StarList from "./starlist";


interface ProductCard {
  data: Product
}

const ProductCard: React.FC<ProductCard> = ({
  data
}) => {
  const previewModal = usePreviewModal();
  const cart = useCart();
  const router = useRouter();


  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };
  
  const maxCharacters = 25; // Set the maximum number of characters

  const truncatedDescription =
    data.description && data.description.length > maxCharacters
      ? `${data.description.substring(0, maxCharacters)}...`
      : data.description;
  
  return ( 
    <div onClick={handleClick} className=" bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      {/* Image & actions */}
      <div className="aspect-square rounded-xl bg-gray-200 relative">
        <Image 
          src={data.images?.[0]?.url} 
          alt="" 
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-20 group-hover:opacity-80 transition flex w-full px-1 py-1  bottom-5">
          <div className="flex gap-x-6 justify-center ">
            <IconButton 
              onClick={onPreview} 
              icon={<Expand size={20} className="text-gray-600 hover:text-white" />}
            />
            
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{data?.name}</p>
        <p className="text-sm text-gray-500">{truncatedDescription}</p>
     
        
      </div>
     
      {/* Price & Reiew */}
      <div className="flex items-center justify-between">
      <div className="text-red-600">
        <Currency value={data?.price} />
      </div>
       
        <IconButton
              onClick={onAddToCart} 
              icon={<ShoppingCart size={20} 
              className="text-gray-600 hover:text-white" />} 
            />
      </div>
    </div>
  );
}

export default ProductCard;
