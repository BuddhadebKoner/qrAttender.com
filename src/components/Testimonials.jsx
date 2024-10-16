import React from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { testimonials } from '../constant/constants';

const Testimonials = () => {
   // Initialize Swiper when the component mounts
   React.useEffect(() => {
      new Swiper('.swiper', {
         modules: [Navigation, Pagination],
         navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
         },
         pagination: {
            el: '.swiper-pagination',
            clickable: true,
         },
         loop: true,
         spaceBetween: 30,
         slidesPerView: 1,
      });
   }, []);

   return (
      <div className="py-20 bg-gradient-to-br from-gray-950 via-gray-900 flex flex-col gap-20">
         <div className="container mx-auto px-5 md:px-20">
            <h2 className="text-3xl font-extrabold text-start text-white mb-10">What Our Users Say</h2>

            {/* Slider main container */}
            <div className="swiper">
               {/* Additional required wrapper */}
               <div className="swiper-wrapper">
                  {testimonials.map((testimonial) => (
                     <div className="swiper-slide " key={testimonial.id}>
                        <div className="bg-gradient-to-br from-white to-gray-100 rounded-lg p-5 shadow-xl transition-transform duration-300">
                           <div className="flex items-center mb-4">
                              <img
                                 src={testimonial.avatar}
                                 alt={testimonial.name}
                                 className="w-12 h-12 rounded-full border-2 border-purple-600 mr-4 shadow-md"
                              />
                              <div className='w-full h-full flex justify-start items-center gap-5'>
                                 <h3 className="text-sm md:text-xl font-bold text-gray-800">{testimonial.name}</h3>
                                 <p className="text-gray-600 text-sm">{testimonial.date}</p>
                              </div>
                           </div>
                           <p className="text-gray-700 italic">{`"${testimonial.feedback}"`}</p>
                        </div>
                     </div>
                  ))}
               </div>
               {/* If we need pagination */}
               <div className="swiper-pagination"></div>

            </div>
         </div>
         <div className="container mx-auto px-5 md:px-20">
            <h3 className="text-3xl font-bold text-white text-start py-10">Contact Us</h3>
            <form className="space-y-6">
               <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">Email</label>
                  <input
                     type="email"
                     id="email"
                     className="w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                     placeholder="Enter your email"
                     required
                  />
               </div>
               <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">Message</label>
                  <textarea
                     id="message"
                     rows="4"
                     className="w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                     placeholder="Your message..."
                     required
                  ></textarea>
               </div>
               <div className="text-center flex justify-end">
                  <button
                     type="submit"
                     className="px-6 py-3 bg-hero-text text-white rounded-md shadow-md font-semibold transition-colors duration-200"
                  >
                     Submit
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Testimonials;
