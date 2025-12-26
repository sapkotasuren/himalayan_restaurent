import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroCard = () => {
  return (
    <section className="w-full max-w-screen-lg mx-auto -mt-36 absolute left-1/2 transform -translate-x-1/2 z-20 ">
      {/* Floating Contact Button */}
      <div className="hidden h-24 w-24 md:h-32 md:w-32 bg-[#d4b78f] absolute -top-10 -right-5 shadow-lg lg:flex justify-center items-center rounded-full hover:border-2 hover:border-green-500 hover:shadow-md hover:shadow-green-500 z-30">
        <Link href="/contact" className="text-white text-lg font-serif italic">
          Contact Us
        </Link>
      </div>

      <div className="bg-gradient-to-br from-[#faf7f2] via-white to-[#f5f0e8] h-full w-full p-6 md:p-8 rounded-2xl shadow-2xl relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4b78f]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#8c6d46]/10 rounded-full blur-3xl"></div>

        <div className="relative border-2 border-[#d4b78f]/30 h-full rounded-xl p-6 md:p-10 bg-white/40 backdrop-blur-sm">
          <div className="w-full flex flex-col space-y-8">
            <div className="flex flex-col items-center space-y-4">
              <div className="text-center space-y-2">
                <p className="text-lg md:text-xl text-[#8c6d46] font-light tracking-wide">
                  Welkom bij
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#513c28] via-[#6b523a] to-[#513c28] font-serif font-bold tracking-tight leading-tight">
                  Himalaya Restaurant
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4b78f] to-transparent mx-auto"></div>
              </div>
            </div>

            <div className="w-full">
              <div className="relative bg-gradient-to-r from-[#513c28] via-[#6b523a] to-[#513c28] p-6 md:p-8 rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-1000"></div>
                <p className="relative text-lg md:text-xl text-center text-white font-serif leading-relaxed">
                  <span className="font-bold text-[#d4b78f]">
                    Kom genieten van de smaken van Nepal
                  </span>{" "}
                  <span className="font-bold text-[#d4b78f]">en</span> India in
                  het hart van Gent!
                  <br />
                  <span className="text-base italic text-[#f0e9db] mt-2 inline-block">
                    Voor lunch of diner ben je bij ons altijd welkom. We
                    serveren heerlijke gerechten met veel aandacht voor
                    kwaliteit en kwantiteit – en dat aan een eerlijke prijs.
                    Laat je verrassen door onze passie, gastvrijheid en
                    authentieke smaken.
                  </span>
                </p>
              </div>
            </div>

            <div className="w-full flex justify-center my-2">
              <Image
                src="/decoration.png"
                height={140}
                width={550}
                alt="decoration svg"
                className="opacity-60"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6">
              <div className="bg-gradient-to-br from-white to-[#faf7f2] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#d4b78f]/20 group">
                <div className="flex items-center space-x-3 mb-3">
                  <svg
                    className="w-6 h-6 text-[#8c6d46] group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <h3 className="text-[#8c6d46] font-bold uppercase text-sm tracking-wider">
                    Contact
                  </h3>
                </div>
                <div className="space-y-2 pl-9">
                  <a
                    href="tel:+3292332137"
                    className="block font-serif text-[#513c28] font-semibold hover:text-[#8c6d46] transition-colors"
                  >
                    +32 9 233 21 37
                  </a>
                  <a
                    href="tel:+32486918529"
                    className="block font-serif text-[#513c28] font-semibold hover:text-[#8c6d46] transition-colors"
                  >
                    +32 486 91 85 29
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-[#faf7f2] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#d4b78f]/20 group">
                <div className="flex items-center space-x-3 mb-3">
                  <svg
                    className="w-6 h-6 text-[#8c6d46] group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <h3 className="text-[#8c6d46] font-bold uppercase text-sm tracking-wider">
                    Adres
                  </h3>
                </div>
                <div className="pl-9">
                  <p className="text-[#513c28] font-serif leading-relaxed">
                    Oudburg 1, 9000 Gent
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-[#faf7f2] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#d4b78f]/20 group">
                <div className="flex items-center space-x-3 mb-3">
                  <svg
                    className="w-6 h-6 text-[#8c6d46] group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="text-[#8c6d46] font-bold uppercase text-sm tracking-wider">
                    Openingsuur
                  </h3>
                </div>
                <div className="space-y-2 pl-9">
                  <p className="text-[#513c28]">Lunch: 12 to 14:30</p>
                  <p className="text-[#513c28]">Diner: 17:30- 22:30</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCard;
