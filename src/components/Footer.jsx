import React from 'react';

const Footer = () => {
   return (
      <footer className="text-white py-4 flex">
         <div className="container mx-auto flex flex-col md:flex-row items-end justify-between">
            <h1 className="text-lg font-bold mb-2">QrAttender</h1>
            <p className="text-sm mb-2">© 2023 Coding Hero. All rights reserved.</p>
            <div className="flex space-x-4">
               <a href="/privacy-policy" className="text-gray-400 hover:text-gray-200">Privacy Policy</a>
               <a href="/terms-of-service" className="text-gray-400 hover:text-gray-200">Terms of Service</a>
               <a href="/contact" className="text-gray-400 hover:text-gray-200">Contact Us</a>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
