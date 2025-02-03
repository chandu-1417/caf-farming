import React, { useState, useEffect } from 'react';
import logo from './Images/logo2.png';
import { FaArrowRightLong } from "react-icons/fa6";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust the scroll threshold as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`w-full h-[110px] flex justify-between items-center px-10 fixed transition-colors z-20 duration-300 ${isScrolled ? 'bg-[#1F4E3D]' : 'bg-transparent'}`}>
      <div className='w-[190px] mt-2'>
        <img src={logo} alt="" />
      </div>
      <div className='flex gap-12 justify-center items-center text-white'>
        <ul className='flex gap-9 text-xl font-semibold'>
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Cloud Farming</li>
        </ul>
        <div className='flex justify-center items-center'>
            <button className='px-12 text-xl font-semibold bg-[#2AB939] h-12 rounded-full flex justify-center items-center gap-2'>Contact us<FaArrowRightLong className='mt-1 ml-2'/></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;