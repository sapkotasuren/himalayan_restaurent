import { Facebook,Instagram, Mail, MapPin, PhoneCall } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";


const Footer = () => {
  return (
    <footer className="w-full py-16">
      <div className="mt-12 w-full max-w-screen-xl mx-auto my-20 rounded-lg h-[450px]">
        <div className="mt-12 w-full max-w-screen-xl mx-auto my-20 rounded-lg h-[450px]">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.738191240358!2d3.721216776525122!3d51.057921843439765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c371389b42eba1%3A0x2e34032056547960!2sOudburg%201%2C%209000%20Gent%2C%20Belgium!5e0!3m2!1sen!2snp!4v1762408634989!5m2!1sen!2snp"
    width="600"
    height="450"
    style={{ border: 0 }} 
    allowFullScreen 
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="w-full h-full rounded-lg"
  ></iframe>
</div>

      </div>
      <div className="max-w-screen-lg mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8 mt-4 text-center md:text-left">
          <div className="flex flex-col space-y-1">
            <h3 className="text-[#8c6d46] font-semibold uppercase text-sm tracking-wider">
              Opening Time
            </h3>
            <div className="border-t border-[#d4b78f] pt-2 mt-1">
              <h4 className="font-serif text-[#513c28]">Opening Time</h4>
              <p className="text-[#776552]">12 to 14:30</p>
              <p className="text-[#776552]"> 17:30 to 22:30 PM</p>
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            <h3 className="text-[#8c6d46] font-semibold uppercase text-sm tracking-wider">
              Contact us
            </h3>
            <div className="border-t border-[#d4b78f] pt-2 mt-1">
              <h4 className="font-serif text-[#513c28]">Opening Hours</h4>
              {/* <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-4 sm:justify-start justify-center items-center"> */}
              <a
                href="tel:+32 486 91 85 29"
                className="text-[#776552] flex items-center justify-center lg:justify-normal gap-x-2"
              >
                <PhoneCall className="h-5 w-5" />
                +32 486 91 85 29
              </a>
              <a
                href="mailto:himalayagent@gmail.com"
                className="text-[#776552] flex items-center justify-center lg:justify-normal gap-x-2"
              >
                <Mail className="h-5 w-5" />
himalayagent@gmail.com              </a>
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            <h3 className="text-[#8c6d46] font-semibold uppercase text-sm tracking-wider">
              Location
            </h3>
            <div className="border-t border-[#d4b78f] pt-2 mt-1">
              <h4 className="font-serif text-[#513c28]">
                Oudburg 1, 9000 Gent              </h4>
              <p className="text-[#776552]">Belgium</p>
            </div>
          </div>
        </div>

        {/* Logo & Social Media */}
        <div className="flex flex-col items-center border-gray-200 pt-16">
                <Link href="/">

          <Image
            src="/himalayan_logo.jpeg"
            height={180}
            width={180}
            alt="Himalayan Logo"
            className="mb-8"
          />
                </Link>





          {/* Social Media Links */}
          <div className="flex gap-8 mb-8">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className=" transition"
            >
              <Facebook className="h-7 w-7" />
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className=" transition"
            >
              <Instagram className="h-7 w-7" />
            </a>
            <a
              href="https://maps.app.goo.gl/8sQFfNA8bW2zHDL79"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin className="h-7 w-7" />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              
            </a>
            <a href=""></a>
          </div>

          <p className="text-sm lg:text-base text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Himalayan Restaurent. All Rights Reserved.
            <br />
            <span>
              By{" "}
              <a
                target="_blank"
                href="https://squarelabs.com.np/"
                className="hover:text-green-700 "
              >
                SquareLabs
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
