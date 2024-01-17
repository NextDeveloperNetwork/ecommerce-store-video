"use client"

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "@react-hook/media-query";

const images = [
  { src: "/images/brand/big/gewiss.png", alt: "Slide 1", link: "https://www.edi-store.shop/subcategory/de7f448d-efbb-476b-9ebf-be1866bfd896" },
  { src: "/images/brand/big/hikoki.png", alt: "Slide 1", link: "https://www.edi-store.shop/subcategory/bb89f520-2772-4d9a-80df-7e287c031e08" },
  { src: "/images/brand/big/legrand.png", alt: "Slide 1", link: "https://www.edi-store.shop/subcategory/f62f5961-f1af-439e-806f-d8f3934aaacc" },
  { src: "/images/brand/big/siemens.png", alt: "Slide 1", link: "https://www.edi-store.shop/subcategory/560a94f8-6f78-4368-b903-8cdf41e9f9e9" },
  { src: "/images/brand/big/Schneider.png", alt: "Slide 1", link: "https://www.edi-store.shop/subcategory/db4e051a-1524-49ec-b2e8-ba690fa03db2" },
  { src: "/images/brand/big/Hager.png", alt: "Slide 1", link: "https://www.edi-store.shop/subcategory/40bfc3c5-a24e-457b-a288-bbb8b17a9196" },
  { src: "/images/brand/big/General.png", alt: "Slide 1", link: "https://www.edi-store.shop/subcategory/b502c3a0-2f33-4ac5-8bb4-e037ce41fdae" },
  { src: "/images/brand/big/flex.png", alt: "Slide 1", link: "https://www.edi-store.shop/subcategory/e17cdb04-02e8-48ad-865f-942589b0f7e9" },
  { src: "/images/brand/big/BTicino.png", alt: "Slide 1", link: "https://www.edi-store.shop/subcategory/5f8ae213-0475-45ab-a70b-3a69f2a27351" },
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
              className="border p-2 bg-gradient-to-r from-blue-100 to-white rounded-md hover:scale-95 transform transition-transform duration-300 mx-auto"
          />
        </Link>
      ))}
    </div>
    
  );
};

export default BrandSelect;