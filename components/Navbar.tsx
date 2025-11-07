"use client"

import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <nav className="w-full bg-gradient-to-b from-transparent/10 to-black/1 absolute top-0 z-10 h-32 px-6 md:px-12 ">
        <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center h-full text-white">
          
          <Link href="/">
            <Image
              src="/himalayan_logo.jpeg"
              height={180}
              width={180}
              alt="Himalayan Logo"
              className="object-cover rounded-full drop-shadow-lg hover:drop-shadow-xl transition-shadow duration-300"
            />
          </Link>

          <ul className="hidden md:flex gap-x-10 text-xl">
            <li>
              <Link 
                href="/about" 
                className={`font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:text-[#d4b78f]/90 pb-1 border-b-2 border-transparent hover:border-[#d4b78f] ${
                  pathname == "/about" ? "text-[#d4b78f] border-[#d4b78f] font-bold" : ""
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/menu" 
                className={`font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:text-[#d4b78f]/90 pb-1 border-b-2 border-transparent hover:border-[#d4b78f] ${
                  pathname == "/menu" ? "text-[#d4b78f] border-[#d4b78f] font-bold" : ""
                }`}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link 
                href="/reservation" 
                className={`font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:text-[#d4b78f]/90 pb-1 border-b-2 border-transparent hover:border-[#d4b78f] ${
                  pathname == "/reservation" ? "text-[#d4b78f] border-[#d4b78f] font-bold" : ""
                }`}
              >
                Reservation
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className={`font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:text-[#d4b78f]/90 pb-1 border-b-2 border-transparent hover:border-[#d4b78f] ${
                  pathname == "/contact" ? "text-[#d4b78f] border-[#d4b78f] font-bold" : ""
                }`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link 
                href="/gallery" 
                className={`font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:text-[#d4b78f]/90 pb-1 border-b-2 border-transparent hover:border-[#d4b78f] ${
                  pathname == "/gallery" ? "text-[#d4b78f] border-[#d4b78f] font-bold" : ""
                }`}
              >
                Gallery
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-8 w-8 transition-transform duration-300 hover:scale-110" /> : <Menu className="h-8 w-8 transition-transform duration-300 hover:scale-110" />}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-[9998] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed z-[9999] top-0 right-0 h-full w-64 bg-[#faf7f2]/95 backdrop-blur-sm text-black p-6 transform transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end mb-8">
          <X onClick={() => setIsOpen(false)} className="cursor-pointer h-6 w-6 text-gray-600 hover:text-black transition-colors duration-300" />
        </div>
        <ul className="flex flex-col gap-y-8 text-2xl">
          
          <li>
            <Link 
              href="/about" 
              onClick={() => setIsOpen(false)} 
              className={`font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:text-[#d4b78f] ${
                pathname == "/about" ? "text-[#d4b78f] font-bold" : ""
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              href="/menu" 
              onClick={() => setIsOpen(false)} 
              className={`font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:text-[#d4b78f] ${
                pathname == "/menu" ? "text-[#d4b78f] font-bold" : ""
              }`}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link 
              href="/reservation" 
              onClick={() => setIsOpen(false)} 
              className={`font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:text-[#d4b78f] ${
                pathname == "/reservation" ? "text-[#d4b78f] font-bold" : ""
              }`}
            >
              Reservation
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)} 
              className={`font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:text-[#d4b78f] ${
                pathname == "/contact" ? "text-[#d4b78f] font-bold" : ""
              }`}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link 
              href="/gallery" 
              onClick={() => setIsOpen(false)} 
              className={`font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:text-[#d4b78f] ${
                pathname == "/gallery" ? "text-[#d4b78f] font-bold" : ""
              }`}
            >
              Gallery
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar