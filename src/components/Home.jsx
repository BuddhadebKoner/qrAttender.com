const Home = () => {
   return (
      <>
         <div className=" px-5 md:px-[5rem] relative w-full h-[50rem] md:h-[50rem] lg:h-screen flex flex-col justify-center items-center gap-2 bg-transparent">
            <div className="absolute w-[30rem] h-[30rem] md:w-[60rem] md:h-[60rem] rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 opacity-20 blur-3xl"></div>

            <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-extrabold drop-shadow-md relative z-10">QR Attender simplifies and</h1>
            <h1 className="text-hero-text text-2xl md:text-4xl lg:text-5xl font-extrabold drop-shadow-md relative z-10">Efficient and paperless</h1>
            <p className="text-white text-center mt-3 relative md:text-lg lg:text-2xl z-10">
               QR Attender simplifies and streamlines attendance tracking, making it efficient and paperless.
            </p>
            <a href="" className="w-fit h-fit bg-hero-text text-white px-10 py-2 rounded-full mt-5 text-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-opacity-90 relative z-10">
               Know More
            </a>
            <p className="text-gray-400 mt-10 relative z-10">to being a premium member</p>
            <h1 className="text-hero-text text-xl font-semibold relative z-10">₹1,000 for pro user</h1>
         </div>
      </>
   )
}

export default Home;