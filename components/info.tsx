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
    <div className="bg-white shadow-md p-8 py-2">
      <h1 className="text-3xl font-bold text-gray-900">{data?.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
  
      <hr className="my-4" />
  
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>{data?.size?.value}</div>
        </div>
  
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div className="h-6 w-6 rounded-full border border-gray-600" style={{ backgroundColor: data?.color?.value }} />
        </div>
  
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Pershkrimi:</h3>
          <div >{data?.description}</div>
        </div>

      </div>
      
      <div className="mt-10 flex items-center gap-x-3 py-4">
  <Button onClick={onAddToCart} className="flex items-center gap-x-2  text-white hover:bg-gray-800 px-4 py-2 rounded-md transition">
    Add To Cart
    <ShoppingCart size={20} className="text-white" />
  </Button>
  </div>
  <div className="flex items-center gap-x-3">
    <Button onClick={onOpenMessnger} className="flex items-center gap-x-2 bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-md transition">
      Porosit ne Messenger
      <BiLogoMessenger size={25} className="text-white" />
    </Button>

    <Button onClick={onOpenWhatsapp} className="flex items-center gap-x-2 bg-green-500 text-white hover:bg-green-600 px-4 py-2 rounded-md transition">
      Porosit ne Whatsapp
      <BiLogoWhatsapp size={25} className="text-white" />
    </Button>
  </div>
</div>

  );
};
 
export default Info;