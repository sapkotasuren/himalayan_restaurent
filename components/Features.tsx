"use client";

import React from "react";
import Image from "next/image";

const Features = () => {
  const features = [
    {
      image: "/features1.png",
      title: "Authentieke smaken",
      description:
        "Proef de echte Nepalese en Indiase keuken, met verse ingrediënten en passie in elk gerecht",
    },
    {
      image: "/features2.png",
      title: "Gastvrij en gezellig",
      description:
        "Of je komt voor een intiem diner of een avond met vrienden, bij ons voel je je altijd welkom.",
    },
    {
      image: "/features3.png",
      title: "Waar voor je geld",
      description:
        "Heerlijke porties, hoge kwaliteit en eerlijke prijzen maken elke maaltijd een feestje.",
    },
  ];

  return (
    <section className="w-full py-5 lg:py-10 relative overflow-hidden">
      {/* Decorations */}
      <div className="hidden lg:block absolute -right-20 -top-5 opacity-20">
        <Image
          src="/decoration2.png"
          alt="decoration"
          width={500}
          height={400}
        />
      </div>

      <div className="hidden lg:block absolute -left-28 -bottom-16 opacity-20">
        <Image
          src="/decoration1.png"
          alt="decoration"
          width={300}
          height={300}
          className="w-auto h-auto"
        />
      </div>

      <div className="w-full max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-6 mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Waarom onze gasten van ons houden
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl text-center">
            Experience dining where flavor, ambiance, and service come together perfectly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-10 border-2 border-[#d4b78f] rounded-lg duration-300 hover:shadow-lg"
            >
              


<div className="mb-6 w-[140px] h-[140px] flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
  <Image
    src={feature.image}
    alt={feature.title}
    width={140}
    height={140}
    className="object-contain"
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
