import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroCard = () => {
  return (
    <section className="w-full max-w-screen-lg mx-auto -mt-36 absolute left-1/2 transform -translate-x-1/2 z-20">
      <Link href="/contact">
        <div className="hidden lg:flex absolute -top-12 -right-8 h-36 w-36 bg-gradient-to-br from-[#d4b78f] to-[#b8956f] rounded-full shadow-2xl flex-col justify-center items-center cursor-pointer group hover:scale-105 transition-all duration-300">
          <div className="text-center">
            <svg className="w-8 h-8 mx-auto mb-2 text-white group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-semibold text-white tracking-wide">Contact Us</span>
          </div>
        </div>
      </Link>

      {/* Main Card */}
      <div className="bg-gradient-to-br from-[#faf7f2] via-white to-[#f5f0e8] h-full w-full p-6 md:p-8 rounded-2xl shadow-2xl relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4b78f]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#8c6d46]/10 rounded-full blur-3xl"></div>
        
        <div className="relative border-2 border-[#d4b78f]/30 h-full rounded-xl p-6 md:p-10 bg-white/40 backdrop-blur-sm">
          <div className="w-full flex justify-between items-center flex-col space-y-8">
            
            <div className="flex flex-col items-center space-y-4">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#d4b78f] to-[#8c6d46] rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              </div>
              
              <div className="text-center space-y-2">
                <p className="text-lg md:text-xl text-[#8c6d46] italic font-light tracking-wide">
                  for the best memories
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#513c28] via-[#6b523a] to-[#513c28] font-serif font-bold tracking-tight leading-tight">
                  A Cuisine Journey
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4b78f] to-transparent mx-auto"></div>
              </div>
            </div>

            <div className="w-full">
              <div className="relative bg-gradient-to-r from-[#513c28] via-[#6b523a] to-[#513c28] p-6 md:p-8 rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-1000"></div>
                <p className="relative text-lg md:text-xl text-center text-white font-serif leading-relaxed">
                  <span className="font-bold text-[#d4b78f]">Himalayan Indian</span>,  & <span className="font-bold text-[#d4b78f]">Nepalese</span> Cuisines
                  <br />
                  <span className="text-base italic text-[#f0e9db] mt-2 inline-block">Authentic Flavors, Unforgettable Taste!</span>
                </p>
              </div>
            </div>

            <div className="my-2">
              <Image
                src="/decoration.png"
                height={140}
                width={550}
                alt="decoration svg"
                className="opacity-60"
              />
            </div>

            {/* Information Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6 mt-4">
              
              <div className="bg-gradient-to-br from-white to-[#faf7f2] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#d4b78f]/20 group">
                <div className="flex items-center space-x-3 mb-3">
                  <svg className="w-6 h-6 text-[#8c6d46] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-[#8c6d46] font-bold uppercase text-sm tracking-wider">
                    Opening Time
                  </h3>
                </div>
                <div className="space-y-2 pl-9">
                  <p className="text-[#513c28] font-serif font-semibold text-lg">12 to 14:30 </p>
                  <div className="space-y-1 text-sm">
                    <p className="text-[#776552]">
                      <span className="font-semibold">:</span> 17:30 to 22:30
                    </p>
                    
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-[#faf7f2] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#d4b78f]/20 group">
                <div className="flex items-center space-x-3 mb-3">
                  <svg className="w-6 h-6 text-[#8c6d46] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="text-[#8c6d46] font-bold uppercase text-sm tracking-wider">
                    Location
                  </h3>
                </div>
                <div className="pl-9">
                  <p className="text-[#513c28] font-serif leading-relaxed">
                    G/F, 1J Water Street<br/>Sai Ying Pun, Belgium
                  </p>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-gradient-to-br from-white to-[#faf7f2] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#d4b78f]/20 group">
                <div className="flex items-center space-x-3 mb-3">
                  <svg className="w-6 h-6 text-[#8c6d46] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <h3 className="text-[#8c6d46] font-bold uppercase text-sm tracking-wider">
                    Contact
                  </h3>
                </div>
                <div className="space-y-2 pl-9">
                  <a
                    href="tel:+3248691852"
                    className="block font-serif text-[#513c28] font-semibold hover:text-[#8c6d46] transition-colors"
                  >
                    +32 486 91 85 29
                  </a>
                  <a 
                    href="tel:+3248691852" 
                    className="block text-[#776552] text-sm hover:text-[#8c6d46] transition-colors"
                  >
                    Call for Reservations
                  </a>
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