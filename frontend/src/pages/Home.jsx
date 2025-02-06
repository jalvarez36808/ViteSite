import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const carouselTexts = [
  {
    title: <>Develop <span className="text-purple-500">Strategies</span> for<br />your <span className="text-purple-500">Defense</span></>,
    subtitle: "Don't let insurance exploit your grief. Learn how to build a strong defense strategy with our expert guidance and resources."
  },
  {
    title: <>Navigate the <span className="text-purple-500">Process</span><br />Together</>,
    subtitle: "Step-by-step assistance through every decision and document."
  },
  {
    title: <>Protect Your <span className="text-purple-500">Rights</span><br />and Future</>,
    subtitle: "Expert resources to ensure you receive fair treatment and support."
  }
];

export default function Home() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(true);

  const nextSlide = () => {
    setIsTextVisible(false);
    setTimeout(() => {
      setCurrentTextIndex((prev) => (prev + 1) % carouselTexts.length);
      setIsTextVisible(true);
    }, 500);
  };

  const prevSlide = () => {
    setIsTextVisible(false);
    setTimeout(() => {
      setCurrentTextIndex((prev) => (prev - 1 + carouselTexts.length) % carouselTexts.length);
      setIsTextVisible(true);
    }, 500);
  };

  useEffect(() => {
    const textInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(textInterval);
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/car-accident2.jpg")',
            opacity: '1',
            filter: 'grayscale(50%)',
            mixBlendMode: 'multiply'
          }}
        />
        
        {/* Purple Overlay */}
        <div 
          className="absolute inset-0 bg-purple-100/20 mix-blend-multiply"
        />
        
        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-full flex items-center">
            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 md:left-8 p-3 rounded-full bg-white/10 text-gray-400 hover:text-purple-500 hover:bg-white/20 transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeftIcon className="h-10 w-10" />
            </button>

            {/* Text Content */}
            <div 
              className={`w-full transition-opacity duration-500 ${
                isTextVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="max-w-3xl pl-16 md:pl-20">
                <h1 className="text-6xl md:text-7xl font-light tracking-tight text-gray-900 mb-8">
                  {carouselTexts[currentTextIndex].title}
                </h1>
                <div className="h-1 w-24 bg-purple-500 mb-8" />
                <p className="text-xl text-gray-600 max-w-2xl">
                  {carouselTexts[currentTextIndex].subtitle}
                </p>
                <div className="mt-10">
                  <Link
                    to="/signup"
                    className="inline-block px-8 py-3 border-2 border-purple-500 text-purple-500 font-medium rounded-md hover:bg-purple-500 hover:text-white transition-all duration-200"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>

            <button 
              onClick={nextSlide}
              className="absolute right-4 md:right-8 p-3 rounded-full bg-white/10 text-gray-400 hover:text-purple-500 hover:bg-white/20 transition-all"
              aria-label="Next slide"
            >
              <ChevronRightIcon className="h-10 w-10" />
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {carouselTexts.map((_, index) => (
              <div
                key={index}
                className={`h-1 transition-all duration-300 ${
                  index === currentTextIndex 
                    ? 'w-8 bg-purple-500' 
                    : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Resources Card */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100">
            <h3 className="text-2xl font-bold text-purple-600 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600 hover:text-purple-600 transition-colors duration-200">
                <span className="mr-2">•</span>
                Financial Assistance
              </li>
              <li className="flex items-center text-gray-600 hover:text-purple-600 transition-colors duration-200">
                <span className="mr-2">•</span>
                Funeral Arrangements
              </li>
              <li className="flex items-center text-gray-600 hover:text-purple-600 transition-colors duration-200">
                <span className="mr-2">•</span>
                Notifications
              </li>
              <li className="flex items-center text-gray-600 hover:text-purple-600 transition-colors duration-200">
                <span className="mr-2">•</span>
                Emotional Support
              </li>
            </ul>
          </div>

          {/* To-Do List Card */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100">
            <h3 className="text-2xl font-bold text-purple-600 mb-4">To-Do List</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600 hover:text-purple-600 transition-colors duration-200">
                <span className="mr-2">•</span>
                Funeral Arrangements
              </li>
              <li className="flex items-center text-gray-600 hover:text-purple-600 transition-colors duration-200">
                <span className="mr-2">•</span>
                Financial Help
              </li>
              <li className="flex items-center text-gray-600 hover:text-purple-600 transition-colors duration-200">
                <span className="mr-2">•</span>
                Death Certificate Process
              </li>
              <li className="flex items-center text-gray-600 hover:text-purple-600 transition-colors duration-200">
                <span className="mr-2">•</span>
                Who to Notify
              </li>
            </ul>
          </div>

          {/* Support Card */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100">
            <h3 className="text-2xl font-bold text-purple-600 mb-4">Support</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600 hover:text-purple-600 transition-colors duration-200">
                <span className="mr-2">•</span>
                24/7 Assistance
              </li>
              <li className="flex items-center text-gray-600 hover:text-purple-600 transition-colors duration-200">
                <span className="mr-2">•</span>
                Expert Guidance
              </li>
              <li className="flex items-center text-gray-600 hover:text-purple-600 transition-colors duration-200">
                <span className="mr-2">•</span>
                Community Support
              </li>
              <li className="flex items-center text-gray-600 hover:text-purple-600 transition-colors duration-200">
                <span className="mr-2">•</span>
                Legal Resources
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 