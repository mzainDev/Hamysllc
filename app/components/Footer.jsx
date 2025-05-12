import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Send, ArrowRight } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/image/Logoi.png"
                alt="HAMYSLLC Logo"
                width={40}
                height={40}
                className="bg-white rounded-full p-1"
              />
              <span className="text-xl font-bold">HAMYSLLC</span>
            </div>
            <p className="text-gray-400 mb-6">
              We provide high-quality products at competitive prices with excellent customer service.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#64b5f6] mt-1 flex-shrink-0" />
                <span className="text-gray-300">Bronx,New York</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone size={18} className="text-[#64b5f6] mt-1 flex-shrink-0" />
                <span className="text-gray-300">929-756-9365</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={18} className="text-[#64b5f6] mt-1 flex-shrink-0" />
                <span className="text-gray-300">SALES@HAMYSLLCWHOLESALE.COM</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={18} className="text-[#64b5f6] mt-1 flex-shrink-0" />
                <span className="text-gray-300">Monday to Friday: 9am - 5pm</span>
              </div>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Quick Links
              <span className="absolute left-0 bottom-0 w-1/2 h-0.5 bg-[#64b5f6]"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2 text-[#64b5f6]" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2 text-[#64b5f6]" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/product"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2 text-[#64b5f6]" />
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2 text-[#64b5f6]" />
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2 text-[#64b5f6]" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Categories
              <span className="absolute left-0 bottom-0 w-1/2 h-0.5 bg-[#64b5f6]"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/categories/home"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2 text-[#64b5f6]" />
                  Home & Kitchen
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/beauty"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2 text-[#64b5f6]" />
                  Beauty & Health
                </Link>
              </li>

            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Newsletter
              <span className="absolute left-0 bottom-0 w-1/2 h-0.5 bg-[#64b5f6]"></span>
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive updates and exclusive offers.
            </p>
            <div className="flex mb-6">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-[#1e293b] border border-gray-700 rounded-l-md px-4 py-2 focus:outline-none focus:border-[#64b5f6] text-white w-full"
              />
              <button className="bg-[#64b5f6] hover:bg-[#3b82f6] text-white px-4 rounded-r-md transition-colors flex items-center justify-center">
                <Send size={18} />
              </button>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-3 text-gray-300">FOLLOW US</h4>
              <div className="flex space-x-4">
                <Link href="#" className="bg-[#1e293b] hover:bg-[#64b5f6] text-white p-2 rounded-md transition-colors">
                  <Facebook size={20} />
                </Link>
                <Link href="#" className="bg-[#1e293b] hover:bg-[#64b5f6] text-white p-2 rounded-md transition-colors">
                  <Twitter size={20} />
                </Link>
                <Link href="#" className="bg-[#1e293b] hover:bg-[#64b5f6] text-white p-2 rounded-md transition-colors">
                  <Instagram size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#0a101e] py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} HAMYSLLC. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer