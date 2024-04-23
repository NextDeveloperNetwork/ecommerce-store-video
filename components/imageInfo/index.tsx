import NextImage from "next/image";
import { Image } from "@/types";

interface GalleryProps {
  images: Image[];
}

const Gallery: React.FC<GalleryProps> = ({ images = [] }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {images.map((image) => (
        <div key={image.id} className="m-4">
          <div className="relative h-96 w-96 sm:h-96 sm:w-96 overflow-hidden rounded-md shadow-md">
            <NextImage
              src={image.url}
              alt="Image"
              layout="fill"
              objectFit="cover"
              className="object-cover object-center"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;