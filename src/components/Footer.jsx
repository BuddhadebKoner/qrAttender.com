import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
   return (
      <footer className="text-white py-6">
         <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo Section */}
            <div className="flex justify-center md:justify-start">
               <img
                  className="w-16 h-16"
                  src="/qrAttender.svg"
                  alt="QR Attender Logo"
               />
            </div>

            {/* Links Section */}
            <div className="flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-6">
               <Link
                  to={"/privacy"}
                  className="text-gray-400 hover:text-gray-200"
               >
                  Privacy Policy
               </Link>
               <Link
                  to={"/terms"}
                  className="text-gray-400 hover:text-gray-200"
               >
                  Terms of Service
               </Link>
               <a
                  target='_blank'
                  href="mailto:contact@rajislab.com"
                  className="text-gray-400 hover:text-gray-200"
               >
                  Contact Us
               </a>
            </div>

            {/* Copyright Section */}
            <div className="text-center md:text-right">
               <p className="text-sm text-gray-400">
                  © 2024 Raji’s Lab - All Rights Reserved
               </p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
