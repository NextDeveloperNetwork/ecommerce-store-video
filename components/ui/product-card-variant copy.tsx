import Image from "next/image";
import { MouseEventHandler } from "react";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
import { Product, Comment } from "@/types";
import StarList from "./starlist";
import Button from "./Button";

interface ProductCardVProps {
  data: Product;
}

const ProductCardV: React.FC<ProductCardVProps> = ({ data }) => {
  const previewModal = usePreviewModal();
  const cart = useCart();
  const router = useRouter();
  const getRandomNumber = () => Math.floor(Math.random() * 5) + 1;
  const randomRating = getRandomNumber();
  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    const color = data.colors[0].color.name; // Assuming colors is an array and you want the first color
    const size = data.sizes[0].size.name;
    cart.addItem(data, color, size);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 shadow-md transition-transform transform hover:scale-105"
    >
      <div className="flex">
        {/* Image */}
        <div className="w-2/5 rounded-xl overflow-hidden bg-gray-200 relative mr-4">
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
            <p className="font-semibold text-md text-gray-800">{data.name}</p>
            <p className="text-sm text-gray-600">{data.description}</p>
            <div className="flex items-center">
              <StarList raiting={randomRating} />
              <span className="text-gray-500 italic ml-1">{`(${randomRating})`}</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-red-600 font-bold py-2">
             
                <div className="text-gray-400 text-sm line-through">
                  <Currency value={data?.price / 100 * 115} />
                </div>
       
              <Currency value={data?.price} />
            </div>
            <Button
              className="bg-blue-600 py-2 px-4"
              onClick={() => window.location.href = data?.link}
            >
              <span className="flex items-center gap-2">
                Buy
                <ShoppingCart size={20} className="text-white" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardV;
