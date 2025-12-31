import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const foodItems = [
  // { id: 2, src: "/foods/momo.jpg", title: " Veg Momo" },
 
];

const Gallery = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />

      <section className="relative min-h-[20vh] lg:min-h-[50vh] w-full">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/hero.webp"
            fill
            priority
            className="object-cover"
            alt="Himalaya restaurant ambiance"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative mx-auto max-w-screen-lg w-full min-h-[50vh] flex flex-col justify-center items-center text-white text-center px-4 pt-10">
          <h1 className="text-4xl font-bold mb-4">Gallery</h1>
          <p className="text-lg italic">
            &quot;A Taste of India & Nepal, Right in Belgium!&quot;
          </p>
        </div>
      </section>

      {/* Food Gallery */}
      <div className="p-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Food Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {foodItems.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
            >
              <Image
                src={item.src}
                alt={item.title}
                width={400}
                height={300}
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-500">
                <p className="text-white text-xl font-semibold">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;