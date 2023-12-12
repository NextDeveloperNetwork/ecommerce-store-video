"use client";

import NextImage from "next/image";
import { Tab } from "@headlessui/react";

import { Image } from "@/types";

import GalleryTab from "./gallery-tab";

interface GalleryProps {
  images: Image[];
}

const Gallery: React.FC<GalleryProps> = ({
  images = []
}) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse ">
      <div className="mx-auto mt-6 w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-5 gap-4">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square w-full mt-4">
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <NextImage
                fill
                src={image.url}
                alt="Image"
                className="object-cover object-center rounded-md shadow-md"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
  
}
 
export default Gallery;