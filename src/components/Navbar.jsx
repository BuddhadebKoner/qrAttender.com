const Navbar = () => {
   return (
      <>
         <div className="bg-white/10 backdrop-blur-md w-full h-full py-3 px-5 rounded-lg flex justify-between items-center shadow-md">
            <a href="/">
               <h1 className="text-lg font-bold text-white">Qr Attender</h1>
            </a>
            <a
               target="_blank"
               href="https://play.google.com/store/apps/details?id=com.rajislab.qrattender"
               className="md:text-lg text-sm font-bold text-hero-text md:px-5 px-3 py-1 bg-white rounded-full flex items-center shadow-lg md:hover:shadow-xl transition-all duration-300 transform md:hover:scale-105">
               Download Now
               <img
                  className="md:mx-2 mx-1 w-5 md:w-fit" src="/assets/icons/download.svg" alt="download-icon" />   
            </a>
         </div>
      </>
   );
}

export default Navbar;
