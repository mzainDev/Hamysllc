"use client"; // Add this at the top

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ShoppingCart, Search, User } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#0f172a] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Navbar */}
        <div className="flex justify-between items-center h-16">
          {/* Left - Brand Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src="/image/HAMYSLLC.png"
              alt="HAMYSLLC Logo"
              width={50}
              height={50}
              className="rounded-2xl p-1"
            />
            <span className="text-xl font-bold text-white">
              HAMYSLLC
            </span>
          </div>

          {/* Center - Navigation (Desktop) */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white font-medium hover:text-[#64b5f6] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/product"
              className="text-white font-medium hover:text-[#64b5f6] transition-colors"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-white font-medium hover:text-[#64b5f6] transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-white font-medium hover:text-[#64b5f6] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right - Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-[#64b5f6] transition-colors">
              <Search size={20} />
            </button>
            <Link href="/account" className="text-white hover:text-[#64b5f6] transition-colors">
              <User size={20} />
            </Link>
            <Link
              href="/cart"
              className="flex items-center justify-center bg-[#64b5f6] text-white p-2 rounded-full relative hover:bg-[#3b82f6] transition-colors"
            >
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-white text-[#0f172a] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">3</span>
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-md focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`${menuOpen ? "max-h-screen py-4" : "max-h-0 py-0"
            } md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <div className="flex flex-col space-y-3 border-t border-gray-700 pt-3">
            <Link
              href="/"
              className="text-white font-medium hover:text-[#64b5f6] transition-colors py-2"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/product"
              className="text-white font-medium hover:text-[#64b5f6] transition-colors py-2"
              onClick={() => setMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/categories"
              className="text-white font-medium hover:text-[#64b5f6] transition-colors py-2"
              onClick={() => setMenuOpen(false)}
            >
              Categories
            </Link>
            <Link
              href="/about"
              className="text-white font-medium hover:text-[#64b5f6] transition-colors py-2"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-white font-medium hover:text-[#64b5f6] transition-colors py-2"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;