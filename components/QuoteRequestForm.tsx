'use client';

import { useState } from 'react';

export default function QuoteRequestForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    service: '',
    description: '',
    budget: '',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate textarea length
    if (formData.description.length > 500) {
      setSubmitStatus('Description must be 500 characters or less.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const formDataToSubmit = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSubmit.append(key, value);
      });

      const response = await fetch('/api/quote-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formDataToSubmit as any).toString()
      });

      if (response.ok) {
        setSubmitStatus('Quote request submitted successfully! We\'ll contact you within 24 hours.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          vehicleMake: '',
          vehicleModel: '',
          vehicleYear: '',
          service: '',
          description: '',
          budget: '',
          timeline: ''
        });
      } else {
        setSubmitStatus('Failed to submit quote request. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('An error occurred. Please try again later.');
    }

    setIsSubmitting(false);
  };

  return (
    <section id="quote" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Request A <span className="text-blue-500">Quote</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get a personalized quote for your automotive detailing needs. Fill out the form below and our team will get back to you with a detailed estimate.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 shadow-xl">
            <form id="quote-request-form" onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-black mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-black mb-2">
                    Service Type *
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm appearance-none pr-8 cursor-pointer"
                    >
                      <option value="">Select a service</option>
                      <option value="interior-detailing">Interior Detailing</option>
                      <option value="exterior-detailing">Exterior Detailing</option>
                      <option value="full-detailing">Full Detailing Package</option>
                      <option value="paint-protection">Paint Protection</option>
                      <option value="ceramic-coating">Ceramic Coating</option>
                      <option value="upholstery-cleaning">Upholstery Cleaning</option>
                      <option value="headlight-restoration">Headlight Restoration</option>
                      <option value="custom-package">Custom Package</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <i className="ri-arrow-down-s-line text-gray-400 w-4 h-4 flex items-center justify-center"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="vehicleMake" className="block text-sm font-semibold text-black mb-2">
                    Vehicle Make *
                  </label>
                  <input
                    type="text"
                    id="vehicleMake"
                    name="vehicleMake"
                    value={formData.vehicleMake}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="e.g., Toyota"
                  />
                </div>

                <div>
                  <label htmlFor="vehicleModel" className="block text-sm font-semibold text-black mb-2">
                    Vehicle Model *
                  </label>
                  <input
                    type="text"
                    id="vehicleModel"
                    name="vehicleModel"
                    value={formData.vehicleModel}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="e.g., Camry"
                  />
                </div>

                <div>
                  <label htmlFor="vehicleYear" className="block text-sm font-semibold text-black mb-2">
                    Vehicle Year *
                  </label>
                  <input
                    type="number"
                    id="vehicleYear"
                    name="vehicleYear"
                    value={formData.vehicleYear}
                    onChange={handleInputChange}
                    required
                    min="1980"
                    max="2024"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="e.g., 2020"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="budget" className="block text-sm font-semibold text-black mb-2">
                    Budget Range
                  </label>
                  <div className="relative">
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm appearance-none pr-8 cursor-pointer"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-500">Under R500</option>
                      <option value="500-1000">R500 - R1,000</option>
                      <option value="1000-2000">R1,000 - R2,000</option>
                      <option value="2000-3000">R2,000 - R3,000</option>
                      <option value="3000-5000">R3,000 - R5,000</option>
                      <option value="over-5000">Over R5,000</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <i className="ri-arrow-down-s-line text-gray-400 w-4 h-4 flex items-center justify-center"></i>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-semibold text-black mb-2">
                    Preferred Timeline
                  </label>
                  <div className="relative">
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm appearance-none pr-8 cursor-pointer"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="this-week">This Week</option>
                      <option value="next-week">Next Week</option>
                      <option value="this-month">This Month</option>
                      <option value="flexible">Flexible</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <i className="ri-arrow-down-s-line text-gray-400 w-4 h-4 flex items-center justify-center"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-semibold text-black mb-2">
                  Additional Details
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-vertical"
                  placeholder="Tell us more about your vehicle's condition, specific areas of concern, or any special requests..."
                />
                <div className="text-right text-sm text-gray-500 mt-1">
                  {formData.description.length}/500 characters
                </div>
              </div>

              {submitStatus && (
                <div className={`p-4 rounded-lg text-center ${
                  submitStatus.includes('success') 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {submitStatus}
                </div>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 disabled:transform-none whitespace-nowrap cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <i className="ri-loader-4-line animate-spin mr-2 w-5 h-5 flex items-center justify-center"></i>
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <i className="ri-send-plane-line mr-3 w-5 h-5 flex items-center justify-center"></i>
                      Request Quote
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}