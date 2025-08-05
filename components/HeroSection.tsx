'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20automotive%20workshop%20with%20sleek%20black%20sports%20car%20being%20customized%20with%20vehicle%20wraps%20and%20premium%20modifications%2C%20modern%20garage%20environment%20with%20professional%20lighting%2C%20clean%20minimalist%20background%20with%20subtle%20blue%20accent%20lighting%2C%20high-end%20luxury%20car%20customization%20facility&width=1920&height=1080&seq=hero-bg&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="block">Wrap.</span>
            <span className="block text-blue-400">Protect.</span>
            <span className="block">Detail.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Premium automotive customization, detailing, and protection services for car enthusiasts and businesses across Gauteng.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="#book" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              Book Your Ride
            </Link>
            <Link 
              href="#services" 
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-lg font-semibold transition-all whitespace-nowrap cursor-pointer"
            >
              View Services
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <i className="ri-arrow-down-line text-white text-2xl w-6 h-6 flex items-center justify-center"></i>
        </div>
      </div>
    </section>
  );
}