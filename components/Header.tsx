'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white font-['Pacifico'] text-2xl">
            Detail District
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="#services" className="text-white hover:text-blue-400 transition-colors whitespace-nowrap cursor-pointer">
              Services
            </Link>
            <Link href="#shop" className="text-white hover:text-blue-400 transition-colors whitespace-nowrap cursor-pointer">
              Shop
            </Link>
            <Link href="#logistics" className="text-white hover:text-blue-400 transition-colors whitespace-nowrap cursor-pointer">
              Logistics
            </Link>
            <Link href="#contact" className="text-white hover:text-blue-400 transition-colors whitespace-nowrap cursor-pointer">
              Contact
            </Link>
            <Link href="#book" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-colors whitespace-nowrap cursor-pointer">
              Book Now
            </Link>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white w-6 h-6 flex items-center justify-center cursor-pointer"
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link href="#services" className="text-white hover:text-blue-400 transition-colors cursor-pointer">
                Services
              </Link>
              <Link href="#shop" className="text-white hover:text-blue-400 transition-colors cursor-pointer">
                Shop
              </Link>
              <Link href="#logistics" className="text-white hover:text-blue-400 transition-colors cursor-pointer">
                Logistics
              </Link>
              <Link href="#contact" className="text-white hover:text-blue-400 transition-colors cursor-pointer">
                Contact
              </Link>
              <Link href="#book" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-colors text-center cursor-pointer">
                Book Now
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}