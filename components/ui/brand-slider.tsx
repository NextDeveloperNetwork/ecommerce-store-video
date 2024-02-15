"use client"

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "@react-hook/media-query";

const images = [
  { src: "/images/brand/big/gewiss.png", alt: "Slide 1", link: "https://www.edi-store.shop/subcategory/b936e7e0-e977-4ce5-825f-a0f2eb13c5ae" },
  { src: "/images/brand/big/hikoki.png", alt: "Slide 1", link: "https://www.edi-store.shop/subcategory/d97e36ca-f890-4412-8e5c-783187cd6e3a" },
  { src: "/images/brand/big/legrand.png", alt: "Slide 1", link: "https://www.edi-store.shop/subcategory/37c21eff-b4f8-48a5-911e-01e716ff7760" },
  { src: "/images/brand/big/siemens.png", alt: "Slide 1", link: "https://www.edi-store.shop/subcategory/407b6149-e2ab-43f2-b4c6-301171330891" },
  { src: "/images/brand/big/Schneider.png", alt: "Slide 1", link: "https://www.edi-store.shop/subcategory/3203c1c7-94c5-4ace-8fd3-6d31b028ea24" },
  { src: "/images/brand/big/Hager.png", alt: "Slide 1", link: "https://www.edi-store.shop/subcategory/b0ffc656-83ab-4e20-b3a4-caef0e510442" },
  { src: "/images/brand/big/General.png", alt: "Slide 1", link: "https://www.edi-store.shop/subcategory/a4213878-912e-4cec-a3d4-5acf2a18b0bb" },
  { src: "/images/brand/big/flex.png", alt: "Slide 1", link: "https://www.edi-store.shop/subcategory/d2d4853f-b839-41e3-a498-b8160a093bdc" },
  { src: "/images/brand/big/BTicino.png", alt: "Slide 1", link: "https://www.edi-store.shop/subcategory/d2d4853f-b839-41e3-a498-b8160a093bdc" },
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