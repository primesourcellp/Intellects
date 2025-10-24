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

    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\n\nMessage:\n${message}`
    );

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=dharshinism11@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailLink, "_blank");

    setForm({ name: "", email: "", phone: "", company: "", message: "" });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-800">
      {/* HERO SECTION */}
      <section className="text-center py-20 px-6 md:px-12 lg:px-24 bg-white shadow-sm border-b border-gray-200">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6"
        >
          Contact <span className="text-teal-600">Us</span>
        </motion.h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          Let’s Connect. Let’s Build the <span className="font-semibold text-teal-700">Future Together.</span>
        </p>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="px-6 py-20 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-2 gap-12 bg-white p-10 rounded-3xl shadow-lg border border-gray-200">
          {/* LEFT SIDE - CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Get In <span className="text-teal-600">Touch</span>
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We make it easy to connect with us. You can reach our team through phone, email,
              or by filling out the quick contact form below.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Contact Information
            </h3>

            <ul className="space-y-6 text-gray-700">
              <li className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-teal-600 mt-1" />
                <div>
                  <span className="font-medium text-gray-900">Head Office:</span>
                  <p className="text-gray-600">123 Intellect Tower, Innovation Hub, New York, NY 10001</p>
                </div>
              </li>

              <li className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-teal-600 mt-1" />
                <div>
                  <span className="font-medium text-gray-900">Phone:</span>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </li>

              <li className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-teal-600 mt-1" />
                <div>
                  <span className="font-medium text-gray-900">Email:</span>
                  <p className="text-gray-600">hello@intellects.com</p>
                </div>
              </li>

              <li className="flex items-start space-x-4">
                <Globe className="w-6 h-6 text-teal-600 mt-1" />
                <div>
                  <span className="font-medium text-gray-900">Website:</span>
                  <p className="text-gray-600">www.intellects.com</p>
                </div>
              </li>

              <li className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-teal-600 mt-1" />
                <div>
                  <span className="font-medium text-gray-900">Business Hours:</span>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM EST</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* RIGHT SIDE - CONTACT FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 p-8 rounded-2xl shadow-inner"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Send Us a Message
            </h3>
            <p className="text-gray-600 mb-8">
              We value your time and inquiries. Please fill out the form below — our team will
              get back to you within 24 hours.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-600 outline-none"
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
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-600 outline-none"
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
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-600 outline-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-teal-600 to-green-500 text-white font-semibold rounded-full shadow-lg hover:opacity-90 transition duration-300"
            >
              Send Message
            </motion.button>

            {submitted && (
              <p className="text-green-600 font-medium text-center mt-4">
                ✅ Gmail compose window opened — you can send your message now!
              </p>
            )}
          </motion.form>
        </div>
      </section>
    </div>
  );
}
