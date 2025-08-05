'use client';

import { useState } from 'react';

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState('wraps');
  
  const galleryItems = {
    wraps: [
      {
        image: 'https://readdy.ai/api/search-image?query=Stunning%20luxury%20sports%20car%20with%20premium%20matte%20black%20vinyl%20wrap%20with%20blue%20accents%2C%20professional%20vehicle%20wrap%20installation%20showcasing%20expert%20craftsmanship%2C%20modern%20automotive%20customization%20in%20professional%20garage%20setting%20with%20dramatic%20lighting&width=400&height=300&seq=wrap-1&orientation=landscape',
        title: 'Matte Black with Blue Accents',
        category: 'Premium Wrap'
      },
      {
        image: 'https://readdy.ai/api/search-image?query=High-end%20SUV%20with%20glossy%20white%20and%20carbon%20fiber%20vinyl%20wrap%20design%2C%20professional%20vehicle%20wrapping%20service%20result%2C%20luxury%20automotive%20customization%20with%20premium%20materials%2C%20clean%20modern%20garage%20background&width=400&height=300&seq=wrap-2&orientation=landscape',
        title: 'Carbon Fiber Design',
        category: 'Luxury SUV Wrap'
      },
      {
        image: 'https://readdy.ai/api/search-image?query=Custom%20racing%20stripes%20and%20graphics%20on%20performance%20vehicle%2C%20professional%20vinyl%20wrap%20application%20with%20precision%20detailing%2C%20motorsport-inspired%20vehicle%20customization%2C%20high-quality%20automotive%20wrap%20installation&width=400&height=300&seq=wrap-3&orientation=landscape',
        title: 'Racing Stripes Package',
        category: 'Performance Wrap'
      }
    ],
    audio: [
      {
        image: 'https://readdy.ai/api/search-image?query=Premium%20car%20audio%20system%20installation%20with%20high-end%20speakers%20subwoofers%20and%20amplifiers%20professionally%20mounted%20in%20luxury%20vehicle%20interior%2C%20custom%20sound%20system%20setup%20with%20LED%20lighting%20accents%2C%20professional%20car%20audio%20installation&width=400&height=300&seq=audio-1&orientation=landscape',
        title: 'Premium Sound System',
        category: 'Audio Installation'
      },
      {
        image: 'https://readdy.ai/api/search-image?query=Custom%20subwoofer%20enclosure%20installation%20in%20vehicle%20trunk%20with%20professional%20wiring%20and%20amplifier%20setup%2C%20high-end%20car%20audio%20equipment%20with%20clean%20professional%20installation%2C%20premium%20automotive%20sound%20system&width=400&height=300&seq=audio-2&orientation=landscape',
        title: 'Custom Subwoofer Setup',
        category: 'Bass System'
      },
      {
        image: 'https://readdy.ai/api/search-image?query=Professional%20car%20dashboard%20with%20upgraded%20touchscreen%20infotainment%20system%20and%20premium%20speaker%20installation%2C%20modern%20automotive%20audio%20equipment%20with%20sleek%20interface%2C%20high-tech%20car%20interior%20upgrade&width=400&height=300&seq=audio-3&orientation=landscape',
        title: 'Infotainment Upgrade',
        category: 'Tech Installation'
      }
    ],
    custom: [
      {
        image: 'https://readdy.ai/api/search-image?query=Luxury%20sports%20car%20with%20custom%20body%20modifications%20including%20spoiler%20side%20skirts%20and%20performance%20upgrades%2C%20professional%20automotive%20customization%20work%2C%20high-end%20vehicle%20modification%20in%20modern%20workshop%20setting&width=400&height=300&seq=custom-1&orientation=landscape',
        title: 'Aero Package',
        category: 'Body Modifications'
      },
      {
        image: 'https://readdy.ai/api/search-image?query=Custom%20wheel%20and%20tire%20installation%20with%20lowered%20suspension%20setup%20on%20luxury%20vehicle%2C%20professional%20automotive%20modification%20with%20premium%20aftermarket%20wheels%2C%20performance%20vehicle%20customization%20project&width=400&height=300&seq=custom-2&orientation=landscape',
        title: 'Wheel & Suspension',
        category: 'Performance Mods'
      },
      {
        image: 'https://readdy.ai/api/search-image?query=Custom%20interior%20modification%20with%20premium%20leather%20seats%20racing%20harnesses%20and%20custom%20dashboard%20elements%2C%20luxury%20vehicle%20interior%20upgrade%20with%20professional%20craftsmanship%2C%20high-end%20automotive%20customization&width=400&height=300&seq=custom-3&orientation=landscape',
        title: 'Interior Upgrade',
        category: 'Custom Interior'
      }
    ]
  };

  const tabs = [
    { key: 'wraps', label: 'Vehicle Wraps', icon: 'ri-palette-line' },
    { key: 'audio', label: 'Sound Systems', icon: 'ri-volume-up-line' },
    { key: 'custom', label: 'Custom Builds', icon: 'ri-settings-3-line' }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our <span className="text-blue-500">Showcase</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our portfolio of premium automotive customization projects, showcasing the quality and craftsmanship that sets Detail District apart.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center px-6 py-3 rounded-full transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === tab.key
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <i className={`${tab.icon} mr-2 w-4 h-4 flex items-center justify-center`}></i>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {galleryItems[activeTab as keyof typeof galleryItems].map((item, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl shadow-xl bg-white hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-blue-300 text-sm">{item.category}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-black mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}