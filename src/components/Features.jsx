import { useState } from "react";
import { aboutUsData, faqData, FeatureCards, keyFeatures, steps } from "../constant/constants";

const Features = () => {
  // State to manage which FAQ is open
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  // Function to toggle the FAQ
  const toggleFAQ = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };
  return (
    <>
      {/* App Features */}
      <div className="px-5 md:px-[5rem] w-full h-fit flex flex-col items-center justify-center py-[5rem]">
        <h1 className="text-3xl md:text-4xl text-white font-extrabold">
          App <span className="text-hero-text">Features</span>
        </h1>
        <p className="text-gray-400 text-center mt-10 md:text-2xl">
          We made this app with some cool features that you will love.
        </p>

        <div className="w-full h-full flex flex-col gap-5 mt-10 md:flex-row md:gap-7 lg:gap-10">
          {FeatureCards.map((card) => (
            <div
              key={card.id}
              className={`w-full md:w-1/3 md:px-5 px-2 h-fit bg-gradient-to-r ${card.gradient} bg-opacity-10 backdrop-blur-lg rounded-xl flex flex-col justify-center items-center py-5 gap-3 shadow-lg hover:shadow-2xl md:hover:scale-105 transition-all duration-300 transform`}
            >
              <img
                width={50}
                height={50}
                className="bg-white/20 p-2 rounded-[10px]"
                src={card.imgSrc}
                alt={card.imgAlt}
              />
              <h1 className="text-white font-bold">{card.title}</h1>
              <p className="text-white text-center">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Why We Use QR Attender App */}
      <div className="relative rounded-xl w-full h-fit flex flex-col items-center justify-center px-5 lg:px-[10rem] md:py-[10rem] py-10 mt-10 ">
        {/* Background Shapes */}
        <div className="absolute inset-0 -z-10">
          {/* Abstract Gradient Shape 1 */}
          <div className="absolute top-0 left-0 w-[30rem] h-[30rem] md:w-[50rem] md:h-[50rem] bg-gradient-to-tr from-indigo-500 via-purple-600 to-blue-400 opacity-30 blur-[140px] rounded-full"></div>

          {/* Abstract Gradient Shape 2 */}
          <div className="absolute top-[40%] left-[20%] w-[25rem] h-[25rem] md:w-[45rem] md:h-[45rem] bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-700 opacity-25 blur-[160px] rounded-full"></div>

          {/* Abstract Gradient Shape 3 */}
          <div className="absolute bottom-[-5rem] right-[-10rem] w-[35rem] h-[35rem] md:w-[55rem] md:h-[55rem] bg-gradient-to-bl from-blue-300 via-teal-400 to-cyan-500 opacity-20 blur-[150px] rounded-full"></div>
        </div>
        <h1 className="md:text-4xl text-3xl text-white font-extrabold mb-5 text-center">
          Why We Use<br /> <span className="text-hero-text">QR Attender App</span>
        </h1>
        <p className="text-gray-400 text-center text-lg mb-10">
          Discover the top reasons why QR Attender App is a must-have tool for modern event management and attendance tracking.
        </p>
        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {keyFeatures.map((feature, index) => (
            <div key={index} className="w-full h-64 bg-[#111827] rounded-xl flex flex-col justify-center items-center gap-3 p-5 shadow-xl">
              <img
                width={50}
                height={50}
                className="bg-white/10 p-2 rounded-full"
                src={feature.icon}
                alt={feature.title} />
              <h1 className="text-white font-bold text-xl">{feature.title}</h1>
              <p className="text-white text-center text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
        <h1 className="text-white mt-10 bg-hero-text px-5 py-2 text-sm lg:text-xl font-semibold rounded-full ">
          We are the only one in market
        </h1>
        {/* About Us Section */}
        <section className="mt-[10rem] w-full h-fit flex flex-col items-center justify-center md:py-20 md:px-0 px-[5px] rounded-xl">
          <div className="w-full max-w-6xl">
            <h2 className="text-4xl font-extrabold text-white mb-8 text-start w-full">
              {aboutUsData.title}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed text-start mb-12 w-full">
              {aboutUsData.description}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
            {aboutUsData.teamMembers.map((member) => (
              <a
                key={member.name}
                target="_blank"
                href={member.linkedin}
                className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={member.image}
                  alt={member.alt}
                  className="w-28 h-28 mb-4 rounded-full shadow-md object-cover"
                />
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              </a>
            ))}
          </div>
          <div className="mt-12 text-start w-full max-w-6xl">
            <h3 className="text-2xl font-semibold text-white">
              {aboutUsData.callToAction.title}
            </h3>
            <p className="text-gray-300 mt-4">
              {aboutUsData.callToAction.contactDescription}
            </p>
            <div className="mt-8 flex justify-center space-x-8 flex-wrap">
              {aboutUsData.socialLinks.map((link) => (
                <a
                  key={link.name}
                  target="_blank"
                  href={link.url}
                  className="text-white hover:text-gray-400"
                >
                  <img
                    className="w-8 h-8"
                    src={link.icon}
                    alt={link.name} />
                </a>
              ))}
            </div>
            <p className="text-white font-semibold mt-10">
              {aboutUsData.footerNote}
              <a
                className="text-hero-text underline ml-2"
                target="_blank"
                href="https://rajislab.com/">
                rajislab.com</a>
            </p>
          </div>
        </section>
      </div>
      {/* Your 7 Steps to Use Our App */}
      <div className="w-full h-fit flex flex-col items-center justify-center px-5 lg:px-[10rem] py-[5rem] mt-10">
        <h1 className="md:text-4xl md:pb-[5rem] text-2xl text-hero-text font-extrabold mb-10">Your 5 Steps to Use Our App</h1>

        <div className="relative w-full">
          {steps.map((step, index) => (
            <div className="flex items-start mb-8 relative" key={step.id}>
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center z-10">
                <img src={step.icon} alt={`Icon for ${step.title}`} className="h-6 w-6" />
              </div>
              <div className="ml-4 flex-grow">
                <div className="bg-[#111827] rounded-lg p-6 shadow-lg">
                  <h3 className="text-white text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-200">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute top-12 left-6 w-0.5 h-full bg-gradient-to-b from-orange-500 to-transparent -z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Frequently Asked Questions */}
      <div className="w-full h-fit flex flex-col px-5 pb-20 md:px-[10rem] lg:py-[10rem]">
        <h3 className="text-2xl md:text-4xl font-extrabold text-start text-white mb-12">Frequently Asked Questions</h3>
        <div className="space-y-8">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center py-4 text-xl font-semibold text-white hover:text-hero-text focus:outline-none transition-all duration-300"
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-6 h-6 text-white transition-transform duration-300 ${openFAQIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path>
                </svg>
              </button>

              {/* Answer Section with smooth expand transition */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openFAQIndex === index ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="mt-4 text-white leading-relaxed text-base">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Features;
