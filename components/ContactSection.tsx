'use client';

export default function ContactSection() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in Detail District's services. Please tell me more.");
    window.open(`https://wa.me/27697100346?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Get In <span className="text-blue-500">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your ride? Contact our team of automotive specialists to discuss your customization needs and get a personalized quote.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-black mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-whatsapp-line text-white text-xl w-6 h-6 flex items-center justify-center"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">WhatsApp</h4>
                    <p className="text-gray-600">069 710 0346</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-map-pin-line text-white text-xl w-6 h-6 flex items-center justify-center"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Location</h4>
                    <p className="text-gray-600">Gauteng Province, South Africa</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-time-line text-white text-xl w-6 h-6 flex items-center justify-center"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Business Hours</h4>
                    <p className="text-gray-600">Mon - Fri: 8:00 AM - 6:00 PM<br />Sat: 8:00 AM - 4:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-mail-line text-white text-xl w-6 h-6 flex items-center justify-center"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Email</h4>
                    <p className="text-gray-600">info@detaildistrict.co.za</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center whitespace-nowrap cursor-pointer"
              >
                <i className="ri-whatsapp-line mr-3 text-xl w-6 h-6 flex items-center justify-center"></i>
                Chat on WhatsApp
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="h-96 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232563.53658774384!2d27.766990354467744!3d-26.205622451663196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sJohannesburg%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1704888000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Detail District Location - Gauteng, South Africa"
              />
            </div>
            
            <div className="p-6">
              <h4 className="text-lg font-bold text-black mb-2">Visit Our Workshop</h4>
              <p className="text-gray-600">
                Located in the heart of Gauteng, our state-of-the-art facility is equipped with the latest tools and technology to deliver exceptional results for every project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}