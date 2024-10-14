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
      <div className="py-20 bg-gradient-to-br from-gray-950 via-gray-900">
         <div className="container mx-auto px-5 md:px-20">
            <h2 className="text-4xl font-extrabold text-center text-white mb-10">What Our Users Say</h2>

            {/* Slider main container */}
            <div className="swiper">
               {/* Additional required wrapper */}
               <div className="swiper-wrapper">
                  {testimonials.map((testimonial) => (
                     <div className="swiper-slide " key={testimonial.id}>
                        <div className="bg-gradient-to-br from-white to-gray-100 rounded-lg p-8 shadow-xl transition-transform duration-300">
                           <div className="flex items-center mb-4">
                              <img
                                 src={testimonial.avatar}
                                 alt={testimonial.name}
                                 className="w-16 h-16 rounded-full border-2 border-purple-600 mr-4 shadow-md"
                              />
                              <div>
                                 <h3 className="text-xl font-bold text-gray-800">{testimonial.name}</h3>
                                 <p className="text-gray-600">{testimonial.role}</p>
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
      </div>
   );
};

export default Testimonials;
