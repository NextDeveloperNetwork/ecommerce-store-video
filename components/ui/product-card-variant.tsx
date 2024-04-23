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

  const averageFunction = (comments: Comment[]) => {
    if (!comments) return 0;

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
    const color = data.colors[0]?.color.name; // Assuming colors is an array and you want the first color
    const size = data.sizes[0]?.size.name;
    cart.addItem(data, color, size);
  };
  const mCharacters = 25; // Set the maximum number of characters

  const truncatedName =
    data.name && data.description.length > mCharacters
      ? `${data.name.substring(0, mCharacters)}...`
      : data.name;
  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-2 md:p-3 space-y-2 shadow-md transition-transform transform hover:scale-105 flex flex-col md:flex-row"
    >
      {/* Image */}
      <div className="md:w-1/3 md:mr-4 rounded-md overflow-hidden bg-gray-200 relative">
  <img
    src={data.images?.[0]?.url}
    alt=""
    className="object-cover w-full h-full"
  />
  <div className="absolute opacity-70 group-hover:opacity-80 top-0 left-0 p-2">
    <IconButton
      onClick={onPreview}
      icon={<Expand size={20} className="text-white hover:text-white" />}
    />
  </div>
  <div className="opacity-30 group-hover:opacity-80 transition flex w-full px-1 py-1 absolute bottom-0">
    {/* Other elements inside the bottom of the image */}
  </div>
</div>
      {/* Title, Price, Rating, and Button */}
      <div className="md:w-2/3 flex flex-col justify-between flex-grow">
        <div className="text-left">
          <p className="font-semibold text-sm md:text-md text-gray-800 mb-1">{truncatedName }</p>
          {/* <StarList raiting={averageRating} />
          <span className="text-gray-500 text-xs">{`(${averageRating})`}</span>
          <p className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2">{data.description}</p> */}
        </div>
        <div className="flex items-center justify-between mt-1 md:mt-2">
          <div className="text-red-600 font-bold">
            <Currency value={data?.price} />
          </div>
          <Button
            className="bg-blue-600 py-1 px-2 md:px-3 text-xs md:text-sm"
            onClick={() => window.location.href = data?.link}
          >
            <span className="flex items-center gap-1">
              Bli
              <ShoppingCart size={16} className="text-white" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardV;

