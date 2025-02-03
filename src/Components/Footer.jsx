import React from 'react';
import plant from './Images/plant.png';
import logo from './Images/logo2.png';
import { MdEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1F4E3D] text-white pb-10 pt-[200px] mt-[350px] relative">
        <div>
            <img src={plant} alt="" className='absolute left-0 top-0 opacity-15'/>
        </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <img src={logo} alt="" className='w-[250px]'/>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Service</h2>
          <ul className="space-y-2">
            <li>Success Steps Education</li>
            <li>Pathway to Progress</li>
            <li>Skill Builders Academy</li>
            <li>Academic Achievers</li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Link</h2>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Service</li>
            <li>FAQ</li>
            <li>Blog And News</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <ul className="space-y-2">
            <li className='flex items-center gap-2'><MdEmail className='text-green-400'/> info@agrogoods.com</li>
            <li className='flex items-center gap-2'><FaAddressCard className='text-green-400'/> Road No 21,Vinukonda,AP</li>
            <li className='flex items-center gap-2'><FaPhoneAlt className='text-green-400'/>8885444154</li>
            <li>www.cafcloudfarming.com</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center">
        <p>© rk-theme 2024. All Rights Reserved</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="#" className="hover:text-gray-400">Terms & Conditions</a>
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
