"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const images = [
  '/images/backgroundoffers.png',
  '/images/backgroundsellout.png',
  // Add more images as needed
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const getDestinationPage = () => {
    switch (currentIndex) {
      case 0:
        return '/oferta';
      case 1:
        return '/sellout';
      // Add more cases for other images if needed
      default:
        return '/';
    }
  };

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden">
      <Link href={getDestinationPage()}>
        <div className="relative w-full h-96 overflow-hidden rounded-xl cursor-pointer">
          <Image
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            layout="fill"
            objectFit="cover"
            className="rounded-md transition-transform duration-500 transform hover:scale-105"
          />
        </div>
      </Link>

      <button
        type="button"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/30 dark:bg-gray-800/30 rounded-full p-3 hover:bg-white/50 dark:hover:bg-gray-800/60 focus:ring-4 focus:ring-white dark:focus:ring-gray-800/70 focus:outline-none z-10"
        onClick={goToPrev}
      >
        <svg
          className="w-6 h-6 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
        <span className="sr-only">Previous</span>
      </button>

      <button
        type="button"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/30 dark:bg-gray-800/30 rounded-full p-3 hover:bg-white/50 dark:hover:bg-gray-800/60 focus:ring-4 focus:ring-white dark:focus:ring-gray-800/70 focus:outline-none z-10"
        onClick={goToNext}
      >
        <svg
          className="w-6 h-6 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
