import React from 'react';

const Footer = () => {
   return (
      <footer className="text-white py-4 flex">
         <div className="container mx-auto flex flex-col md:flex-row items-end justify-between">
            <img
               className="w-12 h-12"
               src="/qrAttender.svg"
               alt=""
            />
            <p className="text-sm mb-2">© 2024 Raji’s Lab - All Rights Reserved</p>
            <div className="flex space-x-4">
               <a
                  target='_blank'
                  href="https://rajislab.com" className="text-gray-400 hover:text-gray-200">Privacy Policy</a>
               <a
                  target='_blank'
                  href="https://rajislab.com" className="text-gray-400 hover:text-gray-200">Terms of Service</a>
               <a
                  target='_blank'
                  href="mailto:contact@rajislab.com" className="text-gray-400 hover:text-gray-200">Contact Us</a>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
