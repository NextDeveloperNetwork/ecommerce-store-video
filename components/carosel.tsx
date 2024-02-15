"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CarouselProps {}

interface CarouselState {
  currentSlide: number;
}

const Carousel: React.FC<CarouselProps> = () => {
  const [state, setState] = useState<CarouselState>({ currentSlide: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setState((prevState) => ({
        ...prevState,
        currentSlide: (prevState.currentSlide + 1) % 2,
      }));
    }, 15000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setState((prevState) => ({
      ...prevState,
      currentSlide: (prevState.currentSlide - 1 + 2) % 2,
    }));
  };

  const nextSlide = () => {
    setState((prevState) => ({
      ...prevState,
      currentSlide: (prevState.currentSlide + 1) % 2,
    }));
  };

  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {/* Item 1 */}
        <Link href="/sellout">
         
            <div
              className={`duration-700 ease-in-out ${state.currentSlide === 0 ? 'block' : 'hidden'}`}
              data-carousel-item
            >
              <Image src="/images/backgroundsellout.png" alt="Slide 1" layout="fill" objectFit="cover" />
            </div>
        
        </Link>
        {/* Item 2 */}
        <Link href="/oferta">
         
            <div
              className={`duration-700 ease-in-out ${state.currentSlide === 1 ? 'block' : 'hidden'}`}
              data-carousel-item
            >
              <Image src="/images/backgroundoffers.png" alt="Slide 2" layout="fill" objectFit="cover" />
            </div>
        
        </Link>
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {[...Array(2)].map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${state.currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'}`}
            aria-current={state.currentSlide === index ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
          />
        ))}
      </div>
      {/* Slider controls */}
      <button
        id="data-carousel-prev"
        type="button"
        className="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        onClick={prevSlide}
      >
        <span
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70"
        >
          <svg
            className="h-4 w-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="hidden">Previous</span>
        </span>
      </button>
      <button
        id="data-carousel-next"
        type="button"
        className="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        onClick={nextSlide}
      >
        <span
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70"
        >
          <svg
            className="h-4 w-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="hidden">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
