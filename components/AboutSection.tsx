'use client';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              About <span className="text-blue-500">Detail District</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are South Africa's premier automotive customization specialists, delivering exceptional results for car enthusiasts, business owners, and fleet managers across Gauteng.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20automotive%20technician%20working%20on%20luxury%20vehicle%20wrap%20installation%20in%20modern%20garage%20facility%2C%20skilled%20craftsman%20applying%20premium%20vinyl%20wrap%20with%20precision%20tools%2C%20clean%20workshop%20environment%20with%20professional%20equipment%2C%20high-quality%20automotive%20customization%20process&width=600&height=400&seq=about-img&orientation=landscape"
                alt="Detail District Workshop"
                className="rounded-lg shadow-2xl object-cover w-full h-96"
              />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-car-line text-white text-xl w-6 h-6 flex items-center justify-center"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Vehicle Wrapping</h3>
                  <p className="text-gray-600">Premium vinyl wraps that transform your vehicle's appearance while protecting the original paintwork.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-volume-up-line text-white text-xl w-6 h-6 flex items-center justify-center"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Car Audio Installation</h3>
                  <p className="text-gray-600">Professional installation of premium sound systems, speakers, and audio equipment for the ultimate driving experience.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-brush-line text-white text-xl w-6 h-6 flex items-center justify-center"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Professional Detailing</h3>
                  <p className="text-gray-600">Comprehensive detailing services that restore and maintain your vehicle's pristine condition inside and out.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-settings-3-line text-white text-xl w-6 h-6 flex items-center justify-center"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Custom Modifications</h3>
                  <p className="text-gray-600">Bespoke styling modifications and performance upgrades tailored to your unique vision and requirements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}