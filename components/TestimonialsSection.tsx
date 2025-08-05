'use client';

import { useState, useEffect } from 'react';

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      name: 'Marcus Viljoen',
      role: 'Business Owner',
      company: 'Sandton Executive Services',
      image: 'https://readdy.ai/api/search-image?query=Professional%20South%20African%20businessman%20in%20his%2040s%20wearing%20business%20suit%20standing%20next%20to%20luxury%20wrapped%20vehicle%2C%20confident%20executive%20portrait%20with%20modern%20automotive%20customization%2C%20professional%20headshot%20with%20premium%20car%20background&width=80&height=80&seq=client-1&orientation=squarish',
      rating: 5,
      text: 'Detail District transformed our entire fleet with premium wraps that look incredible and protect our investment. The professionalism and attention to detail is unmatched in Gauteng.'
    },
    {
      name: 'Sarah Mthembu',
      role: 'Car Enthusiast',
      company: 'JHB Motor Club',
      image: 'https://readdy.ai/api/search-image?query=Young%20South%20African%20woman%20car%20enthusiast%20smiling%20next%20to%20her%20customized%20sports%20car%20with%20premium%20modifications%2C%20automotive%20enthusiast%20portrait%20with%20custom%20vehicle%20background%2C%20professional%20lifestyle%20photography&width=80&height=80&seq=client-2&orientation=squarish',
      rating: 5,
      text: 'The custom sound system they installed is absolutely phenomenal! The bass is crisp, the highs are clear, and the installation was flawless. Worth every rand!'
    },
    {
      name: 'Johan Nel',
      role: 'Fleet Manager',
      company: 'Reef Mining Solutions',
      image: 'https://readdy.ai/api/search-image?query=South%20African%20mining%20industry%20fleet%20manager%20in%20work%20attire%20standing%20next%20to%20commercial%20mining%20vehicles%2C%20professional%20industrial%20portrait%20with%20heavy-duty%20trucks%20background%2C%20mining%20sector%20professional%20headshot&width=80&height=80&seq=client-3&orientation=squarish',
      rating: 5,
      text: 'Their logistics division handles all our mining transport needs efficiently and reliably. Detail District understands the demands of our industry and always delivers on time.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="text-blue-400">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what car enthusiasts, business owners, and fleet managers across Gauteng are saying about Detail District.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-gray-900 rounded-2xl p-8 md:p-12 mx-4">
                    <div className="flex items-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="ri-star-fill text-yellow-400 text-xl mr-1 w-5 h-5 flex items-center justify-center"></i>
                      ))}
                    </div>
                    
                    <blockquote className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
                      "{testimonial.text}"
                    </blockquote>
                    
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                        <p className="text-blue-400">{testimonial.role}</p>
                        <p className="text-gray-400 text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                  index === currentSlide ? 'bg-blue-400' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors cursor-pointer"
          >
            <i className="ri-arrow-left-line text-white text-xl w-6 h-6 flex items-center justify-center"></i>
          </button>
          
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors cursor-pointer"
          >
            <i className="ri-arrow-right-line text-white text-xl w-6 h-6 flex items-center justify-center"></i>
          </button>
        </div>
      </div>
    </section>
  );
}