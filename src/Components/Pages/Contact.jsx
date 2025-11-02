import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Phone, Clock, Globe, Facebook, Twitter, Linkedin, Instagram, MessageCircle, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    if (form.phone && !/^[\+]?[1-9][\d]{0,15}$/.test(form.phone.replace(/[\s\-\(\)]/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { name, email, phone, company, message } = form;
      const subject = encodeURIComponent(`Contact from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\n\nMessage:\n${message}`
      );

      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=dharshinism11@gmail.com&su=${subject}&body=${body}`;
      window.open(gmailLink, "_blank");

      setForm({ name: "", email: "", phone: "", company: "", message: "" });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-purple-100 text-gray-800">
      {/* HERO SECTION */}
      <section className="text-center py-20 px-6 md:px-12 lg:px-24 bg-white shadow-sm border-b border-gray-200">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6"
        >
          Contact <span className="text-purple-700">Us</span>
        </motion.h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          Let’s Connect. Let’s Build the{" "}
          <span className="font-semibold text-purple-600">Future Together.</span>
        </p>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="px-6 py-20 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-2 gap-12 bg-white p-10 rounded-3xl shadow-lg border-l-4 border-purple-700">
          {/* LEFT SIDE - CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Get In <span className="text-purple-700">Touch</span>
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We make it easy to connect with us. Reach our team via phone, email,
              or by filling out the contact form below.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Contact Information
            </h3>

            <ul className="space-y-6 text-gray-700">
              <li className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <span className="font-medium text-gray-900">Head Office:</span>
                  <p className="text-gray-600">
                  311 Melvin Jackson Drive, Cary NC 27519
                  </p>
                </div>
              </li>

              <li className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <span className="font-medium text-gray-900">Phone:</span>
                  <p className="text-gray-600">+1(919)699-1281</p>
                </div>
              </li>

              <li className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <span className="font-medium text-gray-900">Email:</span>
                  <p className="text-gray-600">hello@intellects.com</p>
                </div>
              </li>

              <li className="flex items-start space-x-4">
                <Globe className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <span className="font-medium text-gray-900">Website:</span>
                  <p className="text-gray-600">www.intellects.com</p>
                </div>
              </li>

              <li className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <span className="font-medium text-gray-900">Business Hours:</span>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 5:00 PM EST
                  </p>
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
            className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-purple-700"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Send Us a Message
            </h3>
            <p className="text-gray-600 mb-8">
              We value your inquiries. Fill out the form below and our team will get back
              to you within 24 hours.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className={`w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-700 outline-none transition duration-300 ${
                    errors.name ? 'border-red-500 focus:ring-red-500' : 'border-purple-300'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center mt-2 text-red-600 text-sm"
                  >
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.name}
                  </motion.div>
                )}
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className={`w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-700 outline-none transition duration-300 ${
                    errors.email ? 'border-red-500 focus:ring-red-500' : 'border-purple-300'
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center mt-2 text-red-600 text-sm"
                  >
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.email}
                  </motion.div>
                )}
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
                  className={`w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-700 outline-none transition duration-300 ${
                    errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-purple-300'
                  }`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center mt-2 text-red-600 text-sm"
                  >
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.phone}
                  </motion.div>
                )}
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
                  className="w-full border border-purple-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-700 outline-none transition duration-300"
                  placeholder="Enter your company name"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2 font-medium">
                Message / Project Details <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="5"
                className={`w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-700 outline-none transition duration-300 ${
                  errors.message ? 'border-red-500 focus:ring-red-500' : 'border-purple-300'
                }`}
                placeholder="Tell us about your project or inquiry..."
              />
              {errors.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center mt-2 text-red-600 text-sm"
                >
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.message}
                </motion.div>
              )}
            </div>

            <motion.button
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 font-semibold rounded-full shadow-lg transition duration-300 flex items-center justify-center space-x-2 ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-600 to-purple-400 text-white hover:opacity-90'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <MessageCircle className="w-5 h-5" />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>

            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center justify-center space-x-2"
                >
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <p className="text-green-700 font-medium">
                    Gmail compose window opened — you can send your message now!
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="px-6 py-20 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Find Us <span className="text-purple-700">Here</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Visit our office or get directions to our location
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="h-96 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Interactive Map</h3>
                <p className="text-gray-600 mb-4">123 Intellect Tower, Innovation Hub</p>
                <p className="text-gray-600">New York, NY 10001</p>
                <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300">
                  Get Directions
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOCIAL MEDIA & FAQ SECTION */}
      <section className="px-6 py-20 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* SOCIAL MEDIA */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Connect With <span className="text-purple-700">Us</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Follow us on social media for updates, insights, and behind-the-scenes content.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Facebook, name: "Facebook", color: "bg-blue-600", href: "#" },
                  { icon: Twitter, name: "Twitter", color: "bg-sky-500", href: "#" },
                  { icon: Linkedin, name: "LinkedIn", color: "bg-blue-700", href: "#" },
                  { icon: Instagram, name: "Instagram", color: "bg-pink-600", href: "#" }
                ].map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${social.color} text-white p-4 rounded-xl flex items-center space-x-3 hover:opacity-90 transition duration-300`}
                  >
                    <social.icon className="w-6 h-6" />
                    <span className="font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* FAQ SECTION */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Frequently Asked <span className="text-purple-700">Questions</span>
              </h2>
              
              <div className="space-y-4">
                {[
                  {
                    question: "How quickly do you respond to inquiries?",
                    answer: "We typically respond to all inquiries within 24 hours during business days."
                  },
                  {
                    question: "Do you offer free consultations?",
                    answer: "Yes, we provide free initial consultations to discuss your project requirements."
                  },
                  {
                    question: "What services do you specialize in?",
                    answer: "We specialize in web development, mobile apps, digital marketing, and custom software solutions."
                  },
                  {
                    question: "Do you work with international clients?",
                    answer: "Absolutely! We work with clients worldwide and have experience with different time zones."
                  }
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-50 p-4 rounded-lg"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
