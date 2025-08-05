'use client';

import Link from 'next/link';

export default function DepartmentsSection() {
  const departments = [
    {
      icon: 'ri-car-washing-line',
      title: 'Vehicle Customization',
      description: 'Premium wraps, professional sound systems, and bespoke styling modifications for your dream ride.',
      services: ['Vehicle Wrapping', 'Sound Systems', 'Styling Modifications', 'Performance Upgrades'],
      image: 'https://readdy.ai/api/search-image?query=Luxury%20sports%20car%20with%20premium%20vinyl%20wrap%20being%20installed%20by%20professional%20technicians%20in%20modern%20automotive%20workshop%2C%20custom%20vehicle%20modification%20process%2C%20sleek%20black%20and%20blue%20color%20scheme%2C%20high-end%20car%20customization%20facility%20with%20professional%20lighting&width=400&height=300&seq=dept-1&orientation=landscape'
    },
    {
      icon: 'ri-shopping-bag-3-line',
      title: 'Product Sales',
      description: 'Premium car audio equipment, accessories, and professional-grade cleaning products.',
      services: ['Car Audio Equipment', 'Accessories', 'Cleaning Products', 'Performance Parts'],
      image: 'https://readdy.ai/api/search-image?query=Premium%20car%20audio%20equipment%20display%20including%20speakers%20subwoofers%20amplifiers%20and%20accessories%20arranged%20professionally%20in%20modern%20retail%20showroom%2C%20high-end%20automotive%20products%20with%20sleek%20packaging%2C%20clean%20minimalist%20background&width=400&height=300&seq=dept-2&orientation=landscape'
    },
    {
      icon: 'ri-truck-line',
      title: 'Detail District Logistics',
      description: 'Professional trucking services for mining and construction sectors across South Africa.',
      services: ['Mining Transport', 'Construction Logistics', 'Heavy Equipment', 'Fleet Services'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20heavy-duty%20trucks%20and%20logistics%20vehicles%20for%20mining%20and%20construction%20transport%2C%20modern%20fleet%20of%20commercial%20vehicles%20in%20industrial%20setting%2C%20clean%20professional%20trucking%20company%20branding%2C%20South%20African%20logistics%20operation&width=400&height=300&seq=dept-3&orientation=landscape'
    },
    {
      icon: 'ri-store-3-line',
      title: 'Online Store',
      description: 'Shop our complete range of products through leading eCommerce platforms like Takealot and Makro.',
      services: ['Takealot Store', 'Makro Marketplace', 'Direct Sales', 'Online Support'],
      image: 'https://readdy.ai/api/search-image?query=Modern%20e-commerce%20online%20shopping%20interface%20displaying%20automotive%20products%20and%20accessories%2C%20clean%20digital%20marketplace%20design%20with%20product%20categories%20and%20shopping%20cart%2C%20professional%20online%20store%20layout%20for%20car%20enthusiasts&width=400&height=300&seq=dept-4&orientation=landscape'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our <span className="text-blue-500">Departments</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four specialized divisions working together to deliver comprehensive automotive solutions for every need.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {departments.map((dept, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={dept.image}
                  alt={dept.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <i className={`${dept.icon} text-white text-xl w-6 h-6 flex items-center justify-center`}></i>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4">{dept.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{dept.description}</p>
                
                <div className="space-y-2 mb-6">
                  {dept.services.map((service, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <i className="ri-check-line text-blue-500 mr-2 w-4 h-4 flex items-center justify-center"></i>
                      {service}
                    </div>
                  ))}
                </div>
                
                <Link 
                  href="#contact" 
                  className="inline-flex items-center text-blue-500 font-semibold hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Learn More 
                  <i className="ri-arrow-right-line ml-2 w-4 h-4 flex items-center justify-center"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}