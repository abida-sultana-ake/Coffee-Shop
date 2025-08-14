import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-yellow-50 text-yellow-900  shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Logo & Description */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <img
                src="/assets/coffee-cup.png"
                alt="logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-bold">Bean & Dream</span>
            </div>
            <p className="text-yellow-800 max-w-xs">
              Your daily dose of fresh coffee and delightful pastries. Serving
              happiness, one cup at a time.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-yellow-900 mb-2">Quick Links</h3>
            <a href="/" className="hover:text-yellow-700 transition-colors">
              Home
            </a>
            <a href="/menu" className="hover:text-yellow-700 transition-colors">
              Menu
            </a>
            <a
              href="/about"
              className="hover:text-yellow-700 transition-colors"
            >
              About
            </a>
            <a
              href="/contact"
              className="hover:text-yellow-700 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Contact & Socials */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-yellow-900 mb-2">
              Connect with us
            </h3>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/abidasultanakhan"
                className="hover:text-yellow-700 transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/__abii_daaa__/"
                className="hover:text-yellow-700 transition-colors"
              >
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-yellow-700 transition-colors">
                <FaTwitter />
              </a>
              <a
                href="mailto:info@beananddream.com"
                className="hover:text-yellow-700 transition-colors"
              >
                <FaEnvelope />
              </a>
            </div>
            <p className="text-yellow-800 mt-2">Email: info@beananddream.com</p>
            <p className="text-yellow-800">Phone: +880 1234 567 890</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-yellow-700 border-t border-yellow-200 pt-4 text-sm">
          &copy; {new Date().getFullYear()} Bean & Dream. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
