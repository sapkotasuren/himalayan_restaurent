'use client';

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/Navbar";

const features = [
  {
    image: "/features1.png",
    title: "Menu for every taste",
    description:
      "Discover our diverse menu featuring both classic favorites and innovative culinary creations.",
  },
  {
    image: "/features2.png",
    title: "Fresh Ingredients",
    description:
      "We source the finest local ingredients to ensure every dish exceeds your expectations.",
  },
  {
    image: "/features3.png",
    title: "Expert Chefs",
    description:
      "Our skilled chefs bring years of experience to create memorable dining experiences.",
  },
];

const vibes = Array.from({ length:5 }, (_, i) => i + 1);

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white via-[#faf7f2] to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] lg:min-h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/hero.jpg"
            fill
            priority
            className="object-cover"
            alt="Himalayan restaurant ambiance"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/60"></div>
        </div>
        
        <div className="relative mx-auto max-w-screen-lg w-full h-full min-h-[40vh] lg:min-h-[60vh] flex flex-col justify-center items-center text-white text-center px-4">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              ABOUT OUR STORY
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>
            <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
              Experience the finest Indian,  & Nepali cuisine in Belgium
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl"></div>
        
        <div className="max-w-screen-xl mx-auto relative z-10">
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
            <div className="relative h-[400px] md:h-[500px] group overflow-hidden rounded-2xl shadow-2xl order-2 md:order-1">
              <Image
                src="/bg.jpeg"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Himalayan restaurant interior"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <div className="space-y-6 order-1 md:order-2">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                  Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600">Himalayan</span>
                </h1>
                <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
              </div>
    <p className="text-gray-700 text-lg leading-relaxed">
      Nestled in the heart of Ghent, Belgium, Himalaya Restaurant offers an authentic blend of Indian, Nepalese cuisine. More than just a dining destination, Himalaya is a culinary journey through the rich and diverse flavors of the Indian subcontinent and beyond.

Our chefs combine traditional Himalayan recipes with modern cooking techniques to create dishes that celebrate both authenticity and innovation. Each meal is carefully prepared using fresh ingredients and natural spices, without artificial additives—allowing the true flavors and aromas of our heritage to shine through.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                Our recipes strike the perfect balance between traditional
                Indian and Nepalese wilderness food and modern cooking
                techniques. Each dish is carefully prepared in its own juices,
                without artificial additives, allowing the natural flavors and
                aromas of our hand-selected spices to shine through.
              </p>
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
            <div className="space-y-6 order-2 md:order-1">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600">Philosophy</span>
                </h1>
                <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed">
 At Himalaya Restaurant, we believe that every dish is an individual masterpiece. Each meal is slow-cooked over gentle heat, allowing our carefully selected spices to blend harmoniously and develop their own distinctive character. Our commitment goes beyond exceptional food , we strive to deliver warm hospitality and attentive service, ensuring that every dining experience is truly memorable and fulfilling.
              </p>
            </div>
            
            <div className="relative h-[400px] md:h-[500px] group overflow-hidden rounded-2xl shadow-2xl order-1 md:order-2">
              <Image
                src="/bg1.jpeg"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Himalayan restaurant interior"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          <div className="mb-2">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Vibes at <span className="text-transparent bg-clip-text bg-orange-600 ">Himalayan</span>
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {vibes.map((number, index) => (
                <div 
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-xl shadow-lg group cursor-pointer"
                >
                  <Image
                    src={`/place/${number}.jpeg`}
                    alt="vibe"
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600">Us</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-200"
                >
                  <div className="mb-6 flex justify-center">
                    <div className="relative w-32 h-32 flex items-center justify-center bg-gradient-to-br from-orange-50 to-yellow-50 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={feature.image}
                        alt="features image"
                        className="h-20 w-auto object-contain"
                      />
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center group-hover:text-orange-600 transition-colors duration-300">
                    {feature.title}
                  </h2>
                  
                  <p className="text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About