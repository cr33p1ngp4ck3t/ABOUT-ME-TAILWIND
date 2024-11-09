/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import '../../styles/global.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    setFormData({ name: "", email: "", message: "" }); // Reset the form
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-8 bg-white border-4 border-gray-900 shadow-lg rounded-lg flex flex-col space-y-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-xl font-semibold text-gray-900 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="px-4 py-3 border-2 border-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-xl font-semibold text-gray-900 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="px-4 py-3 border-2 border-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Message Input */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-xl font-semibold text-gray-900 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="px-4 py-3 border-2 border-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="Write your message"
              rows={4}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-black text-white font-semibold rounded-md transition duration-300 transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-gray-900"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
