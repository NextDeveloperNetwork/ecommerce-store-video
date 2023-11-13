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
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
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
          <h3 className="font-semibold text-black">Description:</h3>
          <div >{data?.description}</div>
        </div>

      </div>
      
  <div className="mt-10 flex items-center gap-x-3">
  <Button onClick={onAddToCart} className="flex items-center gap-x-2">
          Add To Cart
          <ShoppingCart size={20} />
        </Button>
  </div>
              <div className="mt-10 flex items-center gap-x-3">
              <Button onClick={onOpenMessnger} className="flex items-center gap-x-2"> 
                        Porosit ne Messenger
                        <BiLogoMessenger size={35} 
                          className="text-blue-500" />
                          </Button>
              </div>

      <div className="mt-10 flex items-center gap-x-3">
            <Button onClick={onOpenWhatsapp} className="flex items-center gap-x-2"> 
          Porosit ne Wahtsapp
          <BiLogoWhatsapp size={35} 
            className="text-green-500" />
            </Button>
      </div>
    </div>
  );
};
 
export default Info;