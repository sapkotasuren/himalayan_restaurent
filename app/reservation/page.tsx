import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const ReservationPage = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />

      <section className="relative min-h-[20vh] lg:min-h-[50vh] w-full">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/bg.jpeg"
            fill
            priority
            className="object-cover"
            alt="Himalaya restaurant ambiance"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative mx-auto max-w-screen-sm w-full min-h-[50vh] flex flex-col justify-center items-center text-white text-center px-4 pt-10">
          <h1 className="text-4xl font-bold mb-4">Contacteer ons</h1>
          <p className="text-lg italic">
            Heb je een vraag? We horen graag van je.
          </p>
        </div>
      </section>

      <section className="w-full max-w-screen-xl mx-auto px-4 pt-16 pb-16">
        <div className="mb-4 text-center">
         

          <div className="group bg-white p-4 border border-[#d4b78f] hover:border-[#8c6d46] transition-colors duration-300 flex flex-col">
            <h3 className="text-[#8c6d46] font-semibold uppercase text-sm tracking-wider mb-4 px-4 pt-4">
              Reservatie
            </h3>
            <div className="border-t border-[#d4b78f] flex-grow">
              <iframe
                src="https://tableagent.com/iframe/himalaya-restaurant/"
                style={{
                  border: "0px none",
                  minWidth: "100%",
                  minHeight: "736px",
                }}
                sandbox="allow-forms allow-modals allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                width="100%"
                height="100%"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReservationPage;
