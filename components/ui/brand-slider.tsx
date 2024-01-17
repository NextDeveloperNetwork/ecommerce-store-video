"use client"

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Link from "next/link";
import Image from "next/image";

const images = [
  { src: "/images/brand/big/gewiss.png", alt: "Slide 1", link: "https://example.com/1" },
  { src: "/images/brand/big/hikoki.png", alt: "Slide 1", link: "https://example.com/1" },
  { src: "/images/brand/big/legrand.png", alt: "Slide 1", link: "https://example.com/1" },
  { src: "/images/brand/big/siemens.png", alt: "Slide 1", link: "https://example.com/1" },
  { src: "/images/brand/big/gewiss.png", alt: "Slide 1", link: "https://example.com/1" },
  { src: "/images/brand/big/hikoki.png", alt: "Slide 1", link: "https://example.com/1" },
  { src: "/images/brand/big/legrand.png", alt: "Slide 1", link: "https://example.com/1" },
  { src: "/images/brand/big/siemens.png", alt: "Slide 1", link: "https://example.com/1" },
  { src: "/images/brand/big/gewiss.png", alt: "Slide 1", link: "https://example.com/1" },
  { src: "/images/brand/big/hikoki.png", alt: "Slide 1", link: "https://example.com/1" },
  { src: "/images/brand/big/legrand.png", alt: "Slide 1", link: "https://example.com/1" },
  { src: "/images/brand/big/siemens.png", alt: "Slide 1", link: "https://example.com/1" },
];

const BrandSelect = () => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 6,
      spacing: 15,
    },
  });

  return (
    
    <div ref={sliderRef} className="keen-slider">
      {images.map((image, index) => (
        <Link key={index} href={image.link} target="_blank" rel="noopener noreferrer" className="keen-slider__slide">
          <Image src={image.src} alt={image.alt} width={100} height={50} className="border p-1 bg-gradient-to-r from-white to-blue-100 rounded-md"/>
        </Link>
      ))}
    </div>
    
  );
};

export default BrandSelect;