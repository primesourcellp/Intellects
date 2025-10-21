import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, 
  FaTwitter, FaFacebook, FaInstagram, FaPaperPlane 
} from "react-icons/fa";
import { theme } from "../../theme";

function Contact() {
  const { colors, gradients, shadows } = theme;
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const floatAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      {/* Animated Background Circles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative pt-20 pb-12 px-6 text-center"
      >
        <motion.div
          animate={floatAnimation}
          className="inline-block mb-6"
        >
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl">
            <FaEnvelope className="text-4xl text-white" />
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
        >
          Let's Connect
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl text-slate-600 max-w-2xl mx-auto"
        >
          Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </motion.p>
      </motion.section>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-7xl mx-auto px-6 pb-20"
      >
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information Cards */}
          <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6">
            {/* Contact Cards */}
            {[
              {
                icon: FaPhone,
                title: "Phone",
                content: "+1 (555) 123-4567",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: FaEnvelope,
                title: "Email",
                content: "hello@intellects.com",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: FaMapMarkerAlt,
                title: "Office",
                content: "123 Business St, Tech City, TC 12345",
                color: "from-purple-500 to-pink-500"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                  <item.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.content}</p>
              </motion.div>
            ))}

            {/* Social Media */}
            <motion.div
              variants={cardVariants}
              className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100"
            >
              <h3 className="text-lg font-bold text-slate-800 mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {[
                  { Icon: FaLinkedin, color: "hover:bg-blue-600" },
                  { Icon: FaTwitter, color: "hover:bg-sky-500" },
                  { Icon: FaFacebook, color: "hover:bg-blue-700" },
                  { Icon: FaInstagram, color: "hover:bg-pink-600" }
                ].map(({ Icon, color }, idx) => (
                  <motion.a
                    key={idx}
                    href="#"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 hover:text-white transition-all duration-300 ${color}`}
                  >
                    <Icon className="text-xl" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2"
          >
            <motion.div
              variants={cardVariants}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-100"
            >
              <h2 className="text-3xl font-bold mb-6 text-slate-800">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative"
                  >
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 peer"
                      placeholder=" "
                    />
                    <label className="absolute left-4 -top-3 bg-white px-2 text-sm font-semibold text-slate-600 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-600 transition-all duration-300">
                      Your Name *
                    </label>
                  </motion.div>

                  {/* Email */}
                  <motion.div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 peer"
                      placeholder=" "
                    />
                    <label className="absolute left-4 -top-3 bg-white px-2 text-sm font-semibold text-slate-600 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-600 transition-all duration-300">
                      Email Address *
                    </label>
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <motion.div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 peer"
                      placeholder=" "
                    />
                    <label className="absolute left-4 -top-3 bg-white px-2 text-sm font-semibold text-slate-600 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-600 transition-all duration-300">
                      Phone Number
                    </label>
                  </motion.div>

                  {/* Subject */}
                  <motion.div className="relative">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 peer"
                      placeholder=" "
                    />
                    <label className="absolute left-4 -top-3 bg-white px-2 text-sm font-semibold text-slate-600 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-600 transition-all duration-300">
                      Subject *
                    </label>
                  </motion.div>
                </div>

                {/* Message */}
                <motion.div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-6 py-4 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 resize-none peer"
                    placeholder=" "
                  />
                  <label className="absolute left-4 -top-3 bg-white px-2 text-sm font-semibold text-slate-600 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-600 transition-all duration-300">
                    Your Message *
                  </label>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                    submitted 
                      ? "bg-green-500 hover:bg-green-600" 
                      : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-6 h-6 border-3 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : submitted ? (
                    <>
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        ✓
                      </motion.span>
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

 export default Contact;