"use client"

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "@react-hook/media-query";

const images = [
  { src: "/images/brand/big/gewiss.png", alt: "Slide 1", link: "https://www.edi-store.shop/subcategory/e6e70fc6-c696-4eed-9e57-de7811a32dca" },
  { src: "/images/brand/big/hikoki.png", alt: "Slide 1", link: "https://www.edi-store.shop/subcategory/1cbd4feb-f084-4a62-9543-44fc3f9cc417" },
  { src: "/images/brand/big/legrand.png", alt: "Slide 1", link: "https://www.edi-store.shop/subcategory/2bc380c1-ff79-4c70-a316-4724092ae481" },
  { src: "/images/brand/big/siemens.png", alt: "Slide 1", link: "https://www.edi-store.shop/subcategory/61c16163-7b4a-4e3e-a594-210559d81e2d" },
  { src: "/images/brand/big/Schneider.png", alt: "Slide 1", link: "https://www.edi-store.shop/subcategory/3883ac47-934a-4600-a8e8-9d08a3b3612a" },
  { src: "/images/brand/big/Hager.png", alt: "Slide 1", link: "https://www.edi-store.shop/subcategory/fc9e2843-b198-4c80-9fa5-32576dd6a080" },
  { src: "/images/brand/big/General.png", alt: "Slide 1", link: "https://www.edi-store.shop/subcategory/7958dfc1-373a-4a66-af12-05fb30cd2d02" },
  { src: "/images/brand/big/flex.png", alt: "Slide 1", link: "https://www.edi-store.shop/subcategory/d878b0ed-29c3-4497-8ec3-f5fae0c6072f" },
  { src: "/images/brand/big/BTicino.png", alt: "Slide 1", link: "https://www.edi-store.shop/subcategory/4438a16d-2db5-4092-ac4a-68e9ac1c1632" },
];

const BrandSelect = () => {
  const matchesSm = useMediaQuery("(max-width: 640px)");
  const matchesLg = useMediaQuery("(min-width: 1024px)");

  const perView = matchesSm ? 4 : (matchesLg ? 8 : 6);
  const animation = { duration: 5000, easing: (t: any) => t };
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView,
      spacing: 10,
    },
    created(s) {
      s.moveToIdx(0, true, animation);
    },
    updated(s) {
      const currentSlide = Math.floor(s.track.details.abs) % images.length;
      if (currentSlide === images.length - 1) {
        s.moveToIdx(0, true, animation);
      } else {
        s.moveToIdx(s.track.details.abs + 1, true, animation);
      }
    },
    animationEnded(s) {
      const currentSlide = Math.floor(s.track.details.abs) % images.length;
      if (currentSlide === images.length - 1) {
        s.moveToIdx(0, true, animation);
      } else {
        s.moveToIdx(s.track.details.abs + 1, true, animation);
      }
    },
  
  });

  return (
    
    <div ref={sliderRef} className="keen-slider px-4">
      {images.map((image, index) => (
        <Link key={index} href={image.link} target="_blank" rel="noopener noreferrer" className="keen-slider__slide">
          <Image
              src={image.src}
              alt={image.alt}
              width={100}
              height={50}
              layout="responsive"
              objectFit="cover"
              className="border p-2 bg-white rounded-md hover:scale-95 transform transition-transform duration-300 mx-auto"
          />
        </Link>
      ))}
    </div>
    
  );
};

export default BrandSelect;