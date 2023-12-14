"use client";

import { ShoppingCart } from "lucide-react";
import { BiLogoMessenger, BiLogoWhatsapp } from "react-icons/bi";
import Currency  from "@/components/ui/currency";
import Button from "@/components/ui/Button";
import { Product } from "@/types";
import useCart from "@/hooks/use-cart";
import IconButton  from "@/components/ui/icon-button";
import useMessage from "@/components/ui/open-Messenger";
import useMessageW from "@/components/ui/open-wapp";
import { MouseEventHandler } from "react";
interface InfoProps {
  data: Product
};

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();
  const message = useMessage()
  const messageW= useMessageW()
  
  const onAddToCart = () => {
    cart.addItem(data);
  }
  const onOpenMessnger: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    message.addItemToMessenger(data);
  };
  const onOpenWhatsapp: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    messageW.addItemToWapp(data);
  };
  return (
    <div className="bg-white shadow-md p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">{data?.name}</h1>
      <div className="mt-2 sm:mt-4 flex items-center justify-between">
        <p className="text-lg md:text-2xl lg:text-3xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
  
      <hr className="my-4" />
  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-black">Tipi/Permasa:</h3>
          <div>{data?.size?.value}</div>
        </div>
  
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-black">Ngjyra:</h3>
          <div className="h-6 w-6 rounded-full border border-gray-600" style={{ backgroundColor: data?.color?.value }} />
        </div>
      </div>
  
      <div className="mt-6">
        <h3 className="font-semibold text-black">Pershkrimi:</h3>
        <div>{data?.description}</div>
      </div>
  
      <div className="mt-8 flex gap-3 flex-col sm:flex-row items-center justify-between">
      <button onClick={onAddToCart} className="bg-blue-500 text-white hover:bg-blue-600 px-4 md:px-6 py-2 md:py-3 rounded-md transition mb-2 sm:mb-0">
        <span className="flex items-center gap-2">
          Add To Cart
          <ShoppingCart size={20} className="text-white" />
        </span>
      </button>
      <div className="flex gap-3 ">
        <button onClick={onOpenMessnger} className="bg-blue-500 text-white hover:bg-blue-600 px-4 md:px-6 py-2 md:py-3 rounded-md transition">
          <span className="flex items-center gap-2">
            Porosit Messenger
            <BiLogoMessenger size={25} className="text-white" />
          </span>
        </button>
        <button onClick={onOpenWhatsapp} className="bg-green-500 text-white hover:bg-green-600 px-4 md:px-6 py-2 md:py-3 rounded-md transition">
          <span className="flex items-center gap-2">
          Porosit WhatsApp
            <BiLogoWhatsapp size={25} className="text-white" />
          </span>
        </button>
      </div>
    </div>
  </div>
  );
  }
export default Info;