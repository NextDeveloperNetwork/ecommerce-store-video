import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="relative w-full h-32 overflow-hidden ">
      <div
        className="bg-cover bg-center w-full h-full opacity-70"
        style={{ backgroundImage: 'url("images/background2.jpg")' }}
      ></div>
      <Link href="/">
        <button className=" flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/images/brand/gewiss.png"
            alt="Gewiss Logo"
            width={100} // Adjust the width as needed
            height={50} // Let height adjust proportionally
          />
        </button>
      </Link>
    </div>
  );
};

export default Banner;

