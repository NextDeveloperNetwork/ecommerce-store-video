"use client";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import 'keen-slider/keen-slider.min.css'
// Define constants
const imageWidth = 100;
const imageHeight = 50;
const marginBetweenSlides = 10; // Set your preferred margin value
const animation = { duration: 5000, easing: (t: any) => t };

// Main SliderPage component
const SliderPage = () => {
  // Define images array with corresponding links
  const images = [
    { src: "/images/brand/Solid.png" },
    { src: "/images/brand/gewiss.png", link: "https://www.edi-store.shop/subcategory/de7f448d-efbb-476b-9ebf-be1866bfd896" },
    { src: "/images/brand/hager.png", link: "https://example.com/hager" },
    { src: "/images/brand/gewiss-1.png", link: "https://www.edi-store.shop/subcategory/de7f448d-efbb-476b-9ebf-be1866bfd896" },
    { src: "/images/brand/BTicino.png", link: "https://example.com/bticino" },
    { src: "/images/brand/Siemens.png", link: "https://example.com/siemens" },
    { src: "/images/brand/flex.png", link: "https://example.com/flex" },
    { src: "/images/brand/hikoki.png", link: "https://example.com/hikoki" },
    { src: "/images/brand/legrand.png", link: "https://example.com/legrand" },
    { src: "/images/brand/hager.png", link: "https://example.com/hager" },
    { src: "/images/brand/BTicino.png", link: "https://example.com/bticino" },
    { src: "/images/brand/Siemens.png", link: "https://example.com/siemens" },
    { src: "/images/brand/flex.png", link: "https://example.com/flex" },
    { src: "/images/brand/hikoki.png", link: "https://example.com/hikoki" },
    { src: "/images/brand/legrand.png", link: "https://example.com/legrand" },
    
  ];

  // Use Keen Slider hook
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 6,
      spacing: 15,
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

  // Return the component JSX
  return (
    <div ref={sliderRef} className="keen-slider-container">
      <div className="keen-slider">
        {images.map((image, index) => (
          <a key={index} href={image.link} target="_blank" rel="noopener noreferrer">
            <div className="keen-slider__slide" style={{ marginRight: `${marginBetweenSlides}px` }}>
              <Image
                src={image.src}
                alt={`Slide ${index + 1}`}
                style={{ width: `${imageWidth}px`, height: `${imageHeight}px` }}
                width={100}
                height={50}
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SliderPage;