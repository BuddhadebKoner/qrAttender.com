import React from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { testimonials } from '../constant/constants';
import { useForm, ValidationError } from '@formspree/react';

const Testimonials = () => {
   React.useEffect(() => {
      new Swiper('.swiper', {
         modules: [Navigation, Pagination, Autoplay],
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
         autoplay: {
            delay: 2000,
            disableOnInteraction: false,
         },
      });
   }, []);

   // Formspree Space ID
   const FORM_SPACE_ID = import.meta.env.VITE_FORM_SPACE_ID;
   const [state, handleSubmit] = useForm(FORM_SPACE_ID);

   return (
      <div className="py-20 bg-gradient-to-br from-gray-950 via-gray-900 flex flex-col gap-20">

         <div className="container mx-auto px-5 md:px-20">
            <h2 className="text-3xl font-extrabold text-start text-white mb-10">What Our Users Say</h2>

            {/* Slider main container */}
            <div className="swiper">
               {/* Additional required wrapper */}
               <div className="swiper-wrapper">
                  {testimonials.map((testimonial) => (
                     <div className="swiper-slide" key={testimonial.id}>
                        <div className="bg-gradient-to-br from-white to-gray-100 rounded-lg p-5 shadow-xl transition-transform duration-300">
                           <div className="flex items-center mb-4">
                              <img
                                 src={testimonial.avatar}
                                 alt={testimonial.name}
                                 className="w-12 h-12 rounded-full border-2 border-purple-600 mr-4 shadow-md"
                              />
                              <div className="w-full h-full flex justify-start items-center gap-5">
                                 <h3 className="text-sm md:text-xl font-bold text-gray-800">{testimonial.name}</h3>
                                 <p className="text-gray-600 text-sm">{testimonial.date}</p>
                              </div>
                           </div>
                           <div className="flex items-center mb-2">
                              {/* 5 Star rating */}
                              {Array.from({ length: 5 }).map((_, index) => (
                                 <svg
                                    key={index}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-4 h-4 text-yellow-500"
                                 >
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                 </svg>
                              ))}
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
         {/* contact us */}
         <div className="container mx-auto px-5 md:px-20 py-10">
            <h3 className="text-3xl font-bold text-white text-start py-5">Contact Us</h3>

            {/* Success Message */}
            {state.succeeded ? (
               <p className="text-lg text-green-400">Thanks for reaching out! We will get back to you soon.</p>
            ) : (
               <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Email Field */}
                  <div>
                     <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">Email</label>
                     <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                        placeholder="Enter your email"
                        required
                     />
                     {state.errors && state.errors.length > 0 && (
                        <ValidationError
                           prefix="Email"
                           field="email"
                           errors={state.errors}
                           className="text-red-500 text-sm mt-1"
                        />
                     )}
                  </div>

                  {/* Message Field */}
                  <div>
                     <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">Message</label>
                     <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                        placeholder="Your message..."
                        required
                     />
                     {state.errors && state.errors.length > 0 && (
                        <ValidationError
                           prefix="Message"
                           field="message"
                           errors={state.errors}
                           className="text-red-500 text-sm mt-1"
                        />
                     )}
                  </div>

                  {/* Submit Button with Loading Indicator */}
                  <div className="text-center flex justify-end">
                     <button
                        type="submit"
                        disabled={state.submitting}
                        className={`px-4 lg:px-6 py-1 lg:py-3 rounded-md shadow-md font-semibold transition-colors duration-200 text-white ${state.submitting ? 'bg-gray-500 cursor-not-allowed' : 'bg-hero-text hover:bg-slate-500'}`}
                     >
                        {state.submitting ? (
                           <span className="flex items-center">
                              <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8V4z"></path>
                              </svg>
                              Sending...
                           </span>
                        ) : (
                           'Submit'
                        )}
                     </button>
                  </div>
               </form>
            )}

            {/* Error Handling */}
            {state.errors && state.errors.length > 0 && (
               <div className="mt-5 text-center">
                  <p className="text-red-500 font-medium">
                     Oops! Something went wrong. Please check your details and try again.
                  </p>
               </div>
            )}
         </div>
      </div>
   );
};

export default Testimonials;
