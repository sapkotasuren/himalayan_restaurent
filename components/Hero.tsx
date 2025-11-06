'use client';

import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import HeroCard from "./HeroCard";
import Link from "next/link";
import WelcomeModal from "./WelcomeModal";

const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setModalOpen(true); // Open modal on page load
  }, []);

  const closeModal = () => setModalOpen(false);

  // const openMenuPDF = () => {
  //   window.open("/menu.pdf", "_blank");
  // };
  const openMenuPDF = () => {
  window.location.href = "/menu.pdf"; 
};


  return (
    <>
      <WelcomeModal isOpen={modalOpen} onClose={closeModal} />

      <main className="relative min-h-[170vh] w-full mx-auto overflow-hidden">
        <Navbar />

        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/place/4.jpeg"
            fill
            priority
            className="hidden lg:block object-cover fixed"
            alt="hero image"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black/0"></div>
        </div>

        {/* Hero content */}
        <div className="relative h-screen w-full max-w-screen-lg mx-auto flex flex-col justify-center items-center text-white px-6 sm:px-8 py-24 gap-y-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400"></div>
            <span className="text-amber-400 text-sm tracking-[0.3em] uppercase font-light">
              Premium Dining
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400"></div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center leading-tight tracking-tight">
            Delight in Authentic Indian and{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Nepalese Cuisine, <br />
            </span>{" "}
            Right Here in Belgium
          </h1>

          <p className="text-lg sm:text-xl text-center max-w-2xl leading-relaxed italic text-gray-200 font-light">
            A place where each dish is crafted into a masterpiece, ready to delight your taste buds.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button
              onClick={openMenuPDF}
              className="group relative px-8 py-4 text-lg font-medium border-2 border-amber-400 bg-amber-400 text-black overflow-hidden transition-all duration-300 hover:bg-transparent hover:text-white cursor-pointer"
            >
              <span className="relative z-10">Menu</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>

            <Link href="/reservation">
              <button className="group relative px-8 py-4 text-lg font-medium border-2 border-white/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-amber-400 hover:bg-amber-400/10">
                <span className="relative z-10 group-hover:text-amber-400 transition-colors duration-300">
                  Book a Seat
                </span>
              </button>
            </Link>
          </div>

          {/* Scroll indicator */}
          <div
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
            style={{ animationDuration: "2s" }}
          >
            <span className="text-xs tracking-widest text-gray-400 uppercase">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-amber-400 to-transparent"></div>
          </div>
        </div>

        <HeroCard />
      </main>
    </>
  );
};

export default Hero;
