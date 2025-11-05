import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const foodItems = [
  { id: 1, src: "/foods/1.png", title: "Food" },
  { id: 2, src: "/foods/2.png", title: "Food" },
  { id: 3, src: "/foods/3.png", title: "Food" },
  { id: 4, src: "/foods/4.png", title: "Food" },
  { id: 5, src: "/foods/5.png", title: "Food" },
  { id: 6, src: "/foods/6.png", title: "Food" },
  { id: 7, src: "/foods/7.png", title: "Food" },
  { id: 8, src: "/foods/8.png", title: "Food" },
  { id: 9, src: "/foods/9.png", title: "Food" },
  { id: 10, src: "/foods/10.png", title: "Food" },
  { id: 11, src: "/foods/11.png", title: "Food" },
  { id: 12, src: "/foods/12.png", title: "Food" },
  { id: 13, src: "/foods/13.jpg", title: "Food" },
  { id: 14, src: "/foods/14.jpg", title: "Food" },
  { id: 15, src: "/foods/15.jpg", title: "Food" },
  { id: 16, src: "/foods/16.jpg", title: "Food" },
  { id: 17, src: "/foods/17.jpg", title: "Food" },
  { id: 18, src: "/foods/18.jpg", title: "Food" },
  { id: 19, src: "/foods/19.jpg", title: "Food" },
  { id: 20, src: "/foods/20.jpg", title: "Food" },
  { id: 21, src: "/foods/21.png", title: "Food" },
  { id: 22, src: "/foods/22.png", title: "Food" },
  { id: 23, src: "/foods/23.png", title: "Food" },
  { id: 24, src: "/foods/24.jpg", title: "Food" },
  { id: 25, src: "/foods/25.jpg", title: "Food" },
  { id: 26, src: "/foods/26.jpg", title: "Food" },
  { id: 27, src: "/foods/27.jpg", title: "Food" },
  { id: 28, src: "/foods/28.jpg", title: "Food" },
  { id: 29, src: "/foods/29.jpg", title: "Food" },
  { id: 30, src: "/foods/30.jpg", title: "Food" },
  { id: 31, src: "/foods/31.jpg", title: "Food" },
  { id: 32, src: "/foods/32.jpg", title: "Food" },
];

const Gallery = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[20vh] lg:min-h-[50vh] w-full">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/hero.jpg"
            fill
            priority
            className="object-cover"
            alt="Rajdoot restaurant ambiance"
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

      <div className="p-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Food Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {foodItems.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={item.src}
                alt={item.title}
                width={300}
                height={200}
                className="rounded-lg object-cover w-full h-full"
              />
              <p className="text-center mt-2 font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
