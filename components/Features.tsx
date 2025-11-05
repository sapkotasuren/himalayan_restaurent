import React from "react";

const Features = () => {
  const features = [
    {
      image: "/features1.png",
      title: "Menu for every taste",
      description: "Discover our diverse menu featuring both classic favorites and innovative culinary creations."
    },
    {
      image: "/features2.png",
      title: "Fresh Ingredients",
      description: "We source the finest local ingredients to ensure every dish exceeds your expectations."
    },
    {
      image: "/features3.png",
      title: "Expert Chefs",
      description: "Our skilled chefs bring years of experience to create memorable dining experiences."
    }
  ];

  return (
    <section className="w-full py-5 lg:py-10 relative overflow-hidden">
      {/* left decoration  */}
      <div className="hidden lg:block absolute -right-20 -top-5 opacity-20">
        <img src="/decoration2.png" alt="" />
      </div>
      <div className="hidden lg:block absolute -left-28 -bottom-16 opacity-20">
        <img src="/decoration1.png" alt="" />
      </div>

      <div className="w-full max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-6 mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 italic">
            Why people choose us?
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl text-center">
            Experience the perfect blend of taste, ambiance, and exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-center p-10 border-2 border-[#d4b78f] rounded-lg duration-300 hover:shadow-lg"
            >
              <div className="mb-6 transform hover:scale-105 transition-transform duration-300">
                <img 
                  src={feature.image} 
                  alt="features image" 
                  className="h-32 w-auto object-contain"
                />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {feature.title}
              </h2>
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;