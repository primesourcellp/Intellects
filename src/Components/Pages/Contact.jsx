import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock, Globe } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Message sent successfully!", {
      style: {
        border: "1px solid #FF4F8B",
        padding: "12px",
        color: "#333",
      },
      iconTheme: {
        primary: "#FF4F8B",
        secondary: "#fff",
      },
    });

    setTimeout(() => {
      const subject = encodeURIComponent(`Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`
      );
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=dharshinism11@gmail.com&su=${subject}&body=${body}`
      );
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-gray-100 flex flex-col items-center text-gray-800 px-6 py-16">
      <Toaster position="top-center" reverseOrder={false} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-pink-700 bg-clip-text text-transparent mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Let’s Connect. Let’s Build the Future Together.
        </p>
      </motion.div>

      {/* Contact Info + Form Section */}
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10">
        {/* Left Side - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8 border border-pink-100"
        >
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We make it easy to connect with us. You can reach our team through
            phone, email, or by filling out the quick contact form below.
          </p>

          <div className="space-y-5">
            <div className="flex items-start space-x-3">
              <MapPin className="text-pink-500 mt-1" />
              <p>
                <strong>Head Office:</strong>
                <br /> 123 Intellect Tower, Innovation Hub, Madurai, Tamil Nadu
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <Phone className="text-pink-500 mt-1" />
              <p>
                <strong>Phone:</strong>
                <br /> +91 98765 43210
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <Mail className="text-pink-500 mt-1" />
              <p>
                <strong>Email:</strong>
                <br /> dharshinism11@gmail.com
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <Globe className="text-pink-500 mt-1" />
              <p>
                <strong>Website:</strong>
                <br /> www.intellects.in
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <Clock className="text-pink-500 mt-1" />
              <p>
                <strong>Business Hours:</strong>
                <br /> Mon–Fri: 9:00 AM – 6:00 PM
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8 border border-pink-100"
        >
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent mb-4">
            Send Us a Message
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We value your time and inquiries. Please fill out the form below — our team will get back to you within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Phone Number (optional)
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Company Name
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
                placeholder="Enter your company name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Message / Project Details
              </label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none h-28"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 via-rose-400 to-pink-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
