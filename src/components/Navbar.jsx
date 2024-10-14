const Navbar = () => {
   return (
      <>
         <div className="bg-white/10 backdrop-blur-md w-full h-full py-3 px-5 rounded-lg flex justify-between items-center shadow-md">
            <a href="/">
               <h1 className="text-lg font-bold text-hero-text">Qr Attender</h1>
            </a>
            <a
               target="_blank"
               href="https://play.google.com/store/apps/details?id=com.rajislab.qrattender" className="text-lg font-bold text-hero-text px-5 py-1 bg-white rounded-full flex items-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
               Download Now
               <img className="mx-2" src="/assets/icons/download.svg" alt="download-icon" />
            </a>
         </div>
      </>
   );
}

export default Navbar;
