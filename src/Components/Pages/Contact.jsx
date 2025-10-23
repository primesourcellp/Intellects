import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock, Globe } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, company, message } = form;

    if (!name || !email || !message) {
      alert("Please fill in all required fields (Name, Email, Message).");
      return;
    }

    // ✅ Gmail Compose URL format
    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\n\nMessage:\n${message}`
    );

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=dharshinism11@gmail.com&su=${subject}&body=${body}`;

    // ✅ Open Gmail Compose in new tab
    window.open(gmailLink, "_blank");

    // ✅ Reset form and show success message
    setForm({ name: "", email: "", phone: "", company: "", message: "" });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-24 px-6 md:px-12 lg:px-24 bg-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6"
        >
          Let’s Connect. Let’s Build the{" "}
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            Future Together
          </span>
        </motion.h1>
      </section>

      {/* Get In Touch Section */}
      <section className="px-6 py-20 md:px-12 lg:px-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Get In <span className="text-purple-700">Touch</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We make it easy to connect with us. You can reach our team through phone, email,
            or by filling out the quick contact form below.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 text-center">
          <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all">
            <MapPin className="w-10 h-10 text-purple-700 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Head Office</h3>
            <p className="text-gray-600">Madurai, Tamil Nadu, India</p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all">
            <Phone className="w-10 h-10 text-purple-700 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Phone</h3>
            <p className="text-gray-600">+91 98765 43210</p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all">
            <Mail className="w-10 h-10 text-purple-700 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Email</h3>
            <p className="text-gray-600">dharshinism11@gmail.com</p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all">
            <Globe className="w-10 h-10 text-purple-700 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Website</h3>
            <p className="text-gray-600">www.intellects.com</p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all">
            <Clock className="w-10 h-10 text-purple-700 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
            <p className="text-gray-600">Mon–Fri: 9:00 AM – 6:00 PM</p>
          </div>
        </div>

        {/* Send Message Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Send Us a{" "}
            <span className="bg-gradient-to-r from-purple-700 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              Message
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We value your time and inquiries. Please fill out the form below — our team will
            get back to you within 24 hours.
          </p>
        </div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-lg border border-gray-200"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-700 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-700 outline-none"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Phone Number (optional)
              </label>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-700 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Company Name</label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-700 outline-none"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-medium">
              Message / Project Details
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-700 outline-none"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-700 via-pink-500 to-orange-400 text-white font-semibold rounded-full shadow-lg transition duration-300"
          >
            Send Message
          </motion.button>

          {submitted && (
            <p className="text-green-600 font-medium text-center mt-4">
              ✅ Gmail compose window opened — you can send your message now!
            </p>
          )}
        </motion.form>
      </section>
    </div>
  );
}
