import Link from 'next/link';
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTiktok, FaInfo, FaAndroid, FaApple } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container justify-between  mx-auto py-10 grid grid-cols-1 md:grid-cols-4 gap-6 px-5">
      
        <div className="text-center md:text-left">
          <h4 className="text-xl font-semibold text-red-500">Contact Us</h4>
          <div className="flex items-center py-2">
            <FaPhone className="mr-2" /> +355692711177
          </div>
          <div className="flex items-center py-2">
            <FaEnvelope className="mr-2" /> <span className="text-sm">store.edi.al@gmail.com</span>
          </div>
          <div className="flex items-center py-2">
            <FaMapMarkerAlt className="mr-2" /> Tirane, Albania
          </div>
        </div>

        
        <div className="text-center md:text-left">
          <h4 className="text-xl font-semibold text-red-500">Socials</h4>

          <div className="flex items-center py-2">
            <a href="https://www.facebook.com/profile.php?id=61553134485424" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center">
                   <FaFacebook className="text-blue-500 hover:text-blue-600 hover:animate-spin" />
                   <span className='px-2'> EdiStore </span>
                </div>
            </a>
          </div>

          <div className="flex items-center py-2">
    <a href="https://www.instagram.com/edistoreal" target="_blank" rel="noopener noreferrer">
      <div className="flex items-center">
        <FaInstagram className="text-blue-500 hover:text-blue-600 hover:animate-spin" /> 
        <span className='px-2'>EdiStoreAl</span>
      </div>
    </a>
  </div> 

  <div className="flex items-center py-2">
    <a href="https://www.tiktok.com/@edistoreal" target="_blank" rel="noopener noreferrer">
      <div className="flex items-center"> 
        <FaTiktok className="text-blue-500 hover:text-blue-600 hover:animate-spin" />
        <span className='px-2'>edistoreal</span>
      </div>
    </a>
  </div> 
</div> 

        {/* Column 3: About Us */}
        <div className="text-center md:text-left">
          <h4 className="text-xl font-semibold text-red-500">About Us</h4>
          <Link href={'/dergesat'}>
          <div className="flex items-center py-2">
            <FaInfo className="mr-2" /> DERGESAT
          </div>
          </Link>
          <Link href={'/rregullore'}>
          <div className="flex items-center py-2">
            <FaInfo className="mr-2" /> RREGULLORE
          </div>
          </Link>
          <Link href={'/kthime'}>
          <div className="flex items-center py-2">
            <FaInfo className="mr-2" /> KTHIMET
          </div>
          </Link>
        </div>

        {/* Column 4: Download App */}
       <div className="text-center md:text-left">
          <h4 className="text-xl font-semibold text-red-500">Download App</h4>
          <div className="flex items-center py-2">
            <FaAndroid className="text-blue-500 hover:text-blue-600 hover:animate-spin mr-2" /> Android ...se shpejti
          </div>
          <div className="flex items-center py-2">
            <FaApple className="mr-2" /> iOS...se shpejti
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


