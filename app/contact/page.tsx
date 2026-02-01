import Navbar from "@/components/Navbar";
import { Mail, PhoneCall } from "lucide-react";
import Image from "next/image";
import React from "react";

const Contact = () => {
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

      {/* section */}

      <section className="w-full max-w-screen-xl mx-auto px-4 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Opening Time */}
          <div className="group bg-white p-8 border border-[#d4b78f] hover:border-[#8c6d46] transition-colors duration-300">
            <h3 className="text-[#8c6d46] font-semibold uppercase text-sm tracking-wider mb-4">
              Openingsuur
            </h3>
            <div className="border-t border-[#d4b78f] pt-4">
              <h4 className="font-serif text-[#513c28] text-lg mb-2">
                Wij zijn elke dag open van:
              </h4>
              <div className="text-[#776552] space-y-2">
                <div className="flex justify-between">
                  <span>Lunch: 12:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Diner: 17:15 - 21:30</span>
                </div>
              </div>
            </div>
          </div>

          <div className="group bg-white p-8 border border-[#d4b78f] hover:border-[#8c6d46] transition-colors duration-300">
            <h3 className="text-[#8c6d46] font-semibold uppercase text-sm tracking-wider mb-4">
              Contacteer ons
            </h3>

            <div className="border-t border-[#d4b78f] pt-4">
              <h4 className="font-serif text-[#513c28] text-lg mb-4"></h4>
              <div className="space-y-4">
                <a
                  href="tel:+32 9 233 21 37"
                  className="text-[#776552] flex gap-x-2"
                >
                  <PhoneCall className="h-5 w-5" />
                  +32 9 233 21 37
                </a>
                <a
                  href="Tel: +32 9 233 21 37"
                  className="text-[#776552] flex items-center gap-x-3 hover:text-[#8c6d46] transition-colors duration-300"
                >
                  <PhoneCall className="h-4 w-4" />
                  <span>+32 486 91 85 29</span>
                </a>
                <a
                  href="mailto:himalayagent@gmail.com"
                  className="text-[#776552] flex items-center gap-x-3 hover:text-[#8c6d46] transition-colors duration-300"
                >
                  <Mail className="h-4 w-4" />
                  <span>himalayagent@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
          <div className="group bg-white p-8 border border-[#d4b78f] hover:border-[#8c6d46] transition-colors duration-300">
            <h3 className="text-[#8c6d46] font-semibold uppercase text-sm tracking-wider mb-4">
              Adres
            </h3>
            <div className="border-t border-[#d4b78f] pt-4">
              <h4 className="font-serif text-[#513c28] text-lg mb-2"></h4>
              <div className="text-[#776552] space-y-1">
                <p className="font-medium">Oudburg 1 9000 Gent, Belgium</p>
                <p>Onderneming nr:</p>
              </div>
            </div>
          </div>

          <div className="group bg-white p-8 border border-[#d4b78f] hover:border-[#8c6d46] transition-colors duration-300">
            <h3 className="text-[#8c6d46] font-semibold uppercase text-sm tracking-wider mb-4">
              Reservatie
            </h3>
            <div className="border-t border-[#d4b78f] pt-4">
              <h4 className="font-serif text-[#513c28] text-lg mb-2">
                Reserveer een tafel:
              </h4>
              <div className="text-[#776552] space-y-2">
                <a
                  href="tel:+32 486 91 85 29"
                  className="text-[#776552] flex items-center gap-x-3 hover:text-[#8c6d46] transition-colors duration-300"
                >
                  <PhoneCall className="h-5 w-5" />
                  +32 486 91 85 29
                </a>
                <a
                  href="tel:+32 9 233 21 37"
                  className="text-[#776552] flex items-center  lg:justify-normal gap-x-2"
                >
                  <PhoneCall className="h-5 w-5" />
                  +32 9 233 21 37
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
