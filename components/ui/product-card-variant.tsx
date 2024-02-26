"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

import Currency  from "@/components/ui/currency";
import IconButton  from "@/components/ui/icon-button";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
import { Product, Comment} from "@/types";
import StarList from "./starlist";


interface ProductCardV {
  data: Product

}

const ProductCardV: React.FC<ProductCardV> = ({
  data
}) => {
  
  const getRandomNumber = () => Math.floor(Math.random() * 80);
  const previewModal = usePreviewModal();
  const cart = useCart();
  const router = useRouter();

  const averageFunction = (comments: Comment[]) => {

    if (!comments) {
      return 0;
    }

    const sum = comments.reduce((acc, comment) => acc + comment.rate * 1, 0);
    const count = comments.length;
  
    return count > 0 ? sum / count : 0;
  };
  const averageRating = averageFunction(data.comments);

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    console.log(data)
    const color = data.colors[0].color.name; // Assuming colors is an array and you want the first color
    const size = data.sizes[0].size.name
    cart.addItem(data, color, size);
    //cart.setColor(data.id, color);
};
  const mCharacters = 40; // Set the maximum number of characters

  const truncatedName =
    data.name && data.description.length > mCharacters
      ? `${data.name.substring(0, mCharacters)}...`
      : data.name;

  const maxCharacters = 25; // Set the maximum number of characters

  const truncatedDescription =
    data.description && data.description.length > maxCharacters
      ? `${data.description.substring(0, maxCharacters)}...`
      : data.description;
  
  return ( 
    <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 shadow-md transition-transform transform hover:scale-105">
    <div className="flex">
      {/* Image */}
      <div className="w-3/5 rounded-xl overflow-hidden bg-gray-200 relative mr-4">
        <Image 
          src={data.images?.[0]?.url} 
          alt="" 
          fill
          className="object-cover rounded-md h-full"
        />
        <div className="opacity-20 group-hover:opacity-70 transition flex w-full px-1 py-1 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton 
              onClick={onPreview} 
              icon={<Expand size={20} className="text-gray-600 hover:text-white" />}
            />
          </div>
        </div>
      </div>
      {/* Title, Price, Rating, and Button */}
      <div className="w-3/5 flex flex-col justify-between">
        <div className="text-left">
          <p className="font-semibold text-md text-gray-800">{truncatedName}</p>
          <div className="justify-between items-center flex">
            <StarList raiting={averageRating} />
            <div className="text-gray-500 italic"> <span className="text-black">(</span> {averageRating} <span className="text-black">)</span></div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-red-600 font-bold py-4">
            <div className="text-gray-400 text-sm line-through">
              <Currency value={data?.price / 100 * 115} />
            </div>
            <Currency value={data?.price} />
          </div>
          <div>
            <IconButton
              onClick={onAddToCart} 
              text="Shto"
              icon={<ShoppingCart size={20} className="text-gray-600 hover:text-white" />}
              className="bg-green-500 text-white rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductCardV;
