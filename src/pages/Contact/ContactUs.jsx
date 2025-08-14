import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row bg-yellow-50">
      {/* Left Image Section */}
      <div className="lg:w-1/2 relative h-80 lg:h-auto">
        <img
          src="/public/assets/contuct.jpg"
          alt="Coffee Shop"
          className="w-full h-full object-cover rounded-b-3xl lg:rounded-r-3xl"
        />
        <div className="absolute inset-0 bg-yellow-900/30 rounded-b-3xl lg:rounded-r-3xl"></div>
      </div>

      {/* Right Form + Info Section */}
      <div className="lg:w-1/2 flex flex-col justify-center px-6 lg:px-16 py-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-900 mb-4">
          Contact Us
        </h1>
        <p className="text-yellow-800 mb-10">
          Have a question or want to place an order? Reach out to us and we'll
          get back to you as soon as possible.
        </p>

        {/* Contact Form */}
        <form className="flex flex-col gap-4 mb-10">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-xl border border-yellow-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-xl border border-yellow-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Subject"
            className="p-4 rounded-xl border border-yellow-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />
          <textarea
            placeholder="Message"
            rows="5"
            className="p-4 rounded-xl border border-yellow-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none resize-none"
          ></textarea>
          <button className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-white font-semibold shadow-lg hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300">
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 bg-yellow-100 p-4 rounded-xl shadow hover:shadow-lg transition-shadow">
            <FaEnvelope className="text-yellow-600 text-2xl" />
            <div>
              <h3 className="font-semibold text-yellow-900">Email</h3>
              <p className="text-yellow-800">info@beananddream.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-yellow-100 p-4 rounded-xl shadow hover:shadow-lg transition-shadow">
            <FaPhoneAlt className="text-yellow-600 text-2xl" />
            <div>
              <h3 className="font-semibold text-yellow-900">Phone</h3>
              <p className="text-yellow-800">+880 1234 567 890</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-yellow-100 p-4 rounded-xl shadow hover:shadow-lg transition-shadow">
            <FaMapMarkerAlt className="text-yellow-600 text-2xl" />
            <div>
              <h3 className="font-semibold text-yellow-900">Address</h3>
              <p className="text-yellow-800">
                123 Coffee Street, Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
