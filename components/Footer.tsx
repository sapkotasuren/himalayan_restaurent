import { Facebook, Mail, MapPin, PhoneCall } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-16">
      <div className="mt-12 w-full max-w-screen-xl mx-auto my-20 rounded-lg h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.73532837460255!2d114.13885421717929!3d22.286880436098947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403ff814497271b%3A0x377e7f8f1d0cdd80!2sHong%20Kong%2C%20Shek%20Tong%20Tsui%2C%20On%20Ning%20Ln%2C%201-15%E8%99%9F%2C%20Tung%20Lee%20Mansion%2C%20Shop%201J!5e0!3m2!1sen!2snp!4v1742468554168!5m2!1sen!2snp"
          className="w-full h-full border-none px-5"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
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
              <p className="text-[#776552]">SAI YING PUN,Belgium</p>
            </div>
          </div>
        </div>

        {/* Logo & Social Media */}
        <div className="flex flex-col items-center border-gray-200 pt-16">
          <Image
            src="/logo.png"
            height={120}
            width={120}
            alt="Rajdoot Logo"
            className="mb-8"
          />

          {/* Social Media Links */}
          <div className="flex gap-8 mb-8">
            <a
              href="https://www.facebook.com/share/15xV7Y6atb/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className=" transition"
            >
              <Facebook className="h-7 w-7" />
            </a>
            {/* <a
              href="https://www.instagram.com/rajdoothk/"
              target="_blank"
              rel="noopener noreferrer"
              className=" transition"
            >
              <Instagram className="h-7 w-7" />
            </a> */}
            <a
              href="https://www.google.com/maps/dir//Shop+1J+Hong+Kong+Shek+Tong+Tsui,+On+Ning+Ln,+1-15%E8%99%9F+Tung+Lee+Mansion/@22.2869127,114.1388455,20z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3403ff814497271b:0x377e7f8f1d0cdd80!2m2!1d114.1388455!2d22.2869127?entry=ttu&g_ep=EgoyMDI1MDMxOC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin className="h-7 w-7" />
            </a>
            <a
              href="https://en.tripadvisor.com.hk/Restaurant_Review-g294217-d21229105-Reviews-Rajdoot_Restaurant_Bar-Hong_Kong.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/tripadvisor.png"
                width={36}
                height={36}
                alt="Tripadvisor"
              />
            </a>
            <a href=""></a>
          </div>

          {/* Copyright Notice */}
          <p className="text-sm lg:text-base text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Rajdoot Indian &
            Nepalese Cuisine + Bar. All Rights Reserved.
            <br />
            <span>
              With 💚 By{" "}
              <a
                target="_blank"
                href="https://squarelabs.com.np/"
                className="hover:text-green-700 italic"
              >
                SquareLabs Pvt.Ltd
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
