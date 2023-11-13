import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTiktok, FaInfo, FaAndroid, FaApple } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-4 gap-6 px-5">
        {/* Column 1: Contact Us */}
        <div className="text-center md:text-left">
          <h4 className="text-xl font-semibold text-red-500">Contact Us</h4>
          <div className="flex items-center py-2">
            <FaPhone className="mr-2" /> +355 698822191
          </div>
          <div className="flex items-center py-2">
            <FaEnvelope className="mr-2" /> @gmail.com
          </div>
          <div className="flex items-center py-2">
            <FaMapMarkerAlt className="mr-2" /> Tirane, Autostrada Durres-Rrogozhine
          </div>
        </div>

        {/* Column 2: Social Media */}
        <div className="text-center md:text-left">
          <h4 className="text-xl font-semibold text-red-500">Socials</h4>

          <div className="flex items-center py-2">
            <a href="https://www.facebook.com/your-store-url" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center"> {/* Added this container */}
                   <FaFacebook className="text-blue-500 hover:text-blue-600 hover:animate-spin" />
                   <span className='px-2'> FACEBOOK MARKET </span>
                </div>
            </a>
          </div>

          <div className="flex items-center py-2">
    <a href="https://www.instagram.com/your-store-url" target="_blank" rel="noopener noreferrer">
      <div className="flex items-center"> {/* Added this container */}
        <FaInstagram className="text-blue-500 hover:text-blue-600 hover:animate-spin" /> 
        <span className='px-2'>INSTA_MARKET</span>
      </div>
    </a>
  </div> {/* Blue color with hover effect */}

  <div className="flex items-center py-2">
    <a href="https://www.tiktok.com/your-store-url" target="_blank" rel="noopener noreferrer">
      <div className="flex items-center"> {/* Added this container */}
        <FaTiktok className="text-blue-500 hover:text-blue-600 hover:animate-spin" />
        <span className='px-2'>TT_MARKET</span>
      </div>
    </a>
  </div> {/* Blue color with hover effect */}
</div>

        {/* Column 3: About Us */}
        <div className="text-center md:text-left">
          <h4 className="text-xl font-semibold text-red-500">About Us</h4>
          <div className="flex items-center py-2">
            <FaInfo className="mr-2" /> DERGESAT
          </div>
          <div className="flex items-center py-2">
            <FaInfo className="mr-2" /> RREGULLORE
          </div>
          <div className="flex items-center py-2">
            <FaInfo className="mr-2" /> KTHIMET
          </div>
        </div>

        {/* Column 4: Download App */}
        <div className="text-center md:text-left">
          <h4 className="text-xl font-semibold text-red-500">Download App</h4>
          <div className="flex items-center py-2">
            <FaAndroid className="text-blue-500 hover:text-blue-600 hover:animate-spin mr-2" /> Android
          </div>
          <div className="flex items-center py-2">
            <FaApple className="mr-2" /> iOS
          </div>
        </div>
      </div>
      <div className="text-center text-xs py-4">
        &copy; 2023 Store, Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;


