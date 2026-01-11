import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  PhoneCall,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full py-16">
      <div className="w-full max-w-screen-xl mx-auto mb-20 rounded-lg h-[450px] px-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.738191240358!2d3.721216776525122!3d51.057921843439765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c371389b42eba1%3A0x2e34032056547960!2sOudburg%201%2C%209000%20Gent%2C%20Belgium!5e0!3m2!1sen!2snp!4v1762408634989!5m2!1sen!2snp"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full rounded-lg border-0"
        />
      </div>

      <div className="max-w-screen-lg mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left">
          
          <div>
            <h3 className="text-[#8c6d46] font-semibold uppercase text-sm tracking-wider">
              Quick Links
            </h3>
            <div className="border-t border-[#d4b78f] pt-3 mt-2 flex flex-col space-y-2">
              <Link href="/" className="text-[#776552] hover:text-[#3B1C32]">
                Home
              </Link>
              <Link href="/about" className="text-[#776552] hover:text-[#3B1C32]">
                About
              </Link>
              <a
                href="/menu.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#776552] hover:text-[#3B1C32]"
              >
                Menu
              </a>
              <Link
                href="/reservation"
                className="text-[#776552] hover:text-[#3B1C32]"
              >
                Reservations
              </Link>
              <Link
                href="/contact"
                className="text-[#776552] hover:text-[#3B1C32]"
              >
                Contact
              </Link>
              <Link
                href="/gallery"
                className="text-[#776552] hover:text-[#3B1C32]"
              >
                Gallery
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-[#8c6d46] font-semibold uppercase text-sm tracking-wider">
              Openingsuur
            </h3>
            <div className="border-t border-[#d4b78f] pt-2 mt-1">
              <h4 className="font-serif text-[#513c28]">
                Wij zijn elke dag open van:
              </h4>
              <p className="text-[#776552]">12:00 - 14:30</p>
              <p className="text-[#776552]">17:00 - 22:30</p>
            </div>
          </div>

          <div>
            <h3 className="text-[#8c6d46] font-semibold uppercase text-sm tracking-wider">
              Contacteer ons
            </h3>
            <div className="border-t border-[#d4b78f] pt-2 mt-1">
              <a
                href="tel:+32 9 233 21 37"
                className="text-[#776552] flex items-center justify-center lg:justify-normal gap-x-2"
              >
                <PhoneCall className="h-5 w-5" />
                +32 9 233 21 37
              </a>
              <a
                href="tel:+32 486 91 85 29"
                className="text-[#776552] flex items-center justify-center lg:justify-normal gap-x-2"
              >
                <PhoneCall className="h-5 w-5" />
                +32 486 91 85 29
              </a>
              <a
                href="mailto:himalayagent@gmail.com"
                className="text-[#776552] flex items-center justify-center md:justify-start gap-2"
              >
                <Mail className="h-5 w-5" />
                himalayagent@gmail.com{" "}
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[#8c6d46] font-semibold uppercase text-sm tracking-wider">
              Adres
            </h3>
            <div className="border-t border-[#d4b78f] pt-2 mt-1">
              <h4 className="font-serif text-[#513c28]">
                Oudburg 1, 9000 Gent{" "}
              </h4>
              <p className="text-[#776552]">Belgium</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center pt-16">
          <Link href="/">
            <Image
              src="/himalayan_logo.jpeg"
              height={180}
              width={180}
              alt="Himalayan Logo"
              className="mb-8"
            />
          </Link>

          <div className="flex gap-8 mb-8 text-[#3B1C32]">
            <a href="/" target="_blank">
              <Facebook className="h-7 w-7" />
            </a>
            <a href="/" target="_blank">
              <Instagram className="h-7 w-7" />
            </a>
            <a
              href="https://maps.app.goo.gl/8sQFfNA8bW2zHDL79"
              target="_blank"
            >
              <MapPin className="h-7 w-7" />
            </a>
          </div>

          <p className="text-sm text-gray-600 text-center">
            &copy; {new Date().getFullYear()} Himalayan Restaurant. All Rights Reserved.
            <br />
            <span>
              By{" "}
              <a
                href="https://squarelabs.com.np/"
                target="_blank"
                className="hover:text-[#3B1C32]"
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
