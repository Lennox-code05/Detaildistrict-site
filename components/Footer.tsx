'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-['Pacifico'] text-xl mb-4">Detail District</h3>
            <p className="text-gray-400 mb-4">
              Premium automotive customization, detailing, and logistics services in Gauteng, South Africa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors w-6 h-6 flex items-center justify-center cursor-pointer">
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors w-6 h-6 flex items-center justify-center cursor-pointer">
                <i className="ri-instagram-line text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors w-6 h-6 flex items-center justify-center cursor-pointer">
                <i className="ri-whatsapp-line text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">Vehicle Wrapping</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">Car Audio</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">Detailing</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">Custom Modifications</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Departments</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">Vehicle Customization</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">Product Sales</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">DD Logistics</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">Online Store</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <i className="ri-phone-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                069 710 0346
              </li>
              <li className="flex items-center">
                <i className="ri-map-pin-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                Gauteng, South Africa
              </li>
              <li className="flex items-center">
                <i className="ri-mail-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                info@detaildistrict.co.za
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Detail District (Pty) Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}