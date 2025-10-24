import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaApple,
  FaAndroid,
  FaUsers,
  FaCogs,
  FaClipboardCheck,
  FaRocket,
  FaCheck,
  FaLaptopCode,
  FaServer,
  FaCloud,
  FaShieldAlt,
  FaArrowRight,
  FaChartLine,
  FaTools,
  FaHandshake,
} from "react-icons/fa";
import sky8Image from "../../../assets/sky8.jpg";
import aboutImage from "../../../assets/about.jpg";
import soft9Image from "../../../assets/soft9.png";

// Typing Animation Component
const TypingText = ({ text, className = "", delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (started && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 70);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, started]);

  return <span className={className}>{displayedText}</span>;
};

export default function Mobileapplication() {
  return (
    <div className="overflow-x-hidden" style={{ backgroundColor: '#F9FAFB', color: '#1F2937' }}>
      {/* Luxury Elegant Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.15, 1],
            rotate: [0, 180, 360],
            opacity: [0.06, 0.12, 0.06]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, #4C1D9520, #7C3AED15)' }}
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.08, 0.06, 0.08]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-0 w-80 h-80 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, #7C3AED18, #F59E0B12)' }}
        />
        <motion.div
          animate={{ 
            y: [0, -100, 0],
            opacity: [0.06, 0.15, 0.06]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-1/4 w-72 h-72 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, #F59E0B18, #4C1D9515)' }}
        />
      </div>

      {/* Header Section */}
      <section
        className="relative py-32 md:py-40 px-6 md:px-12 lg:px-24 text-center shadow-lg overflow-hidden"
        style={{ backgroundColor: '#FFFFFF', boxShadow: '0 10px 15px -3px rgba(30, 58, 138, 0.1), 0 4px 6px -2px rgba(30, 58, 138, 0.05)' }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={sky8Image}
            alt="Hero Background"
            className="w-full h-full object-cover"
            style={{ opacity: 1 }}
          />
          <div 
            className="absolute inset-0" 
            style={{ 
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)',
            }}
          />
        </div>

        {/* Floating Icons */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 md:left-20 opacity-20"
        >
          <div 
            className="w-20 h-20 rounded-2xl transform rotate-12" 
            style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}
          />
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-40 right-10 md:right-32 opacity-20"
        >
          <div 
            className="w-16 h-16 rounded-full" 
            style={{ background: 'linear-gradient(135deg, #7C3AED, #F59E0B)' }}
          />
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, -15, 0],
            x: [0, 10, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-20 opacity-20"
        >
          <div 
            className="w-12 h-12 rounded-lg transform -rotate-12" 
            style={{ background: 'linear-gradient(135deg, #F59E0B, #4C1D95)' }}
          />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight relative z-10"
          style={{ color: '#000000' }}
        >
          <TypingText text="Mobile Application " />
          <motion.span
            style={{ color: '#4C1D95' }}
            animate={{
              textShadow: [
                `0 0 20px rgba(76, 29, 149, 0)`,
                `0 0 20px rgba(76, 29, 149, 0.5)`,
                `0 0 20px rgba(76, 29, 149, 0)`
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <TypingText text="Development" />
          </motion.span>
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl md:text-3xl font-bold max-w-4xl mx-auto mb-4 relative z-10"
          style={{ color: '#4C1D95' }}
        >
          Empowering Businesses Through Innovative Mobile Apps
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl max-w-4xl mx-auto font-light leading-relaxed relative z-10"
          style={{ color: '#6B7280' }}
        >
          At Intellects, we create user-friendly, secure, and high-performing mobile applications that connect businesses with their customers anytime, anywhere. Our mobile apps are designed to enhance engagement, streamline processes, and deliver measurable results.
        </motion.p>
      </section>

      {/* Transforming Businesses Section */}
      <motion.section 
        className="pt-16 pb-20 px-6 md:px-12 lg:px-24 relative z-10" 
        style={{ backgroundColor: '#F9FAFB' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#000000' }}>
              Transforming Businesses with{" "}
              <motion.span 
                style={{ color: '#4C1D95' }}
                animate={{ 
                  textShadow: [
                    `0 0 20px ${'#4C1D95'}00`,
                    `0 0 20px ${'#4C1D95'}50`,
                    `0 0 20px ${'#4C1D95'}00`
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Custom Mobile Apps
              </motion.span>
            </h3>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-4" style={{ color: '#6B7280' }}>
              At Intellects, we believe that mobile applications are more than just digital tools — they are powerful engines for business growth. Our custom apps are built to solve real-world challenges, improve customer experiences, and help businesses scale efficiently.
            </p>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed font-semibold" style={{ color: '#4C1D95' }}>
              We focus on:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              title: "Enhancing User Engagement", 
              desc: "Apps designed to delight users and boost interaction.",
              icon: <FaUsers className="w-8 h-8" />,
              color: "from-blue-500 to-cyan-500"
            },
            { 
              title: "Optimizing Operations", 
              desc: "Streamlining workflows and automating repetitive tasks.",
              icon: <FaCogs className="w-8 h-8" />,
              color: "from-purple-500 to-violet-500"
            },
            { 
              title: "Driving Revenue Growth", 
              desc: "E-commerce and service apps that increase conversions.",
              icon: <FaChartLine className="w-8 h-8" />,
              color: "from-green-500 to-emerald-500"
            },
            { 
              title: "Ensuring Scalability", 
              desc: "Flexible solutions that evolve as your business grows.",
              icon: <FaRocket className="w-8 h-8" />,
              color: "from-orange-500 to-amber-500"
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-violet-300 transition-all text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: false }}
              whileHover={{ y: -8 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
                  viewport={{ once: false }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${item.color}`}
                >
                  <div className="text-white">
                    {item.icon}
                  </div>
                </motion.div>
                <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false }}
          className="text-center mt-12"
        >
          <p className="text-xl md:text-2xl font-bold max-w-4xl mx-auto leading-relaxed" style={{ color: '#4C1D95' }}>
            Every mobile app we create is tailored to deliver tangible business outcomes.
          </p>
        </motion.div>
        </div>
      </motion.section>

      {/* Services We Offer Section */}
      <motion.section 
        className="py-20 px-6 md:px-12 lg:px-24 relative z-10" 
        style={{ backgroundColor: '#FFFFFF' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#4C1D95' }}>
              Services We{" "}
              <motion.span 
                style={{ color: '#000000' }}
                animate={{ 
                  textShadow: [
                    `0 0 20px ${'#4C1D95'}00`,
                    `0 0 20px ${'#4C1D95'}50`,
                    `0 0 20px ${'#4C1D95'}00`
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Offer
              </motion.span>
            </h3>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
              Our end-to-end mobile application development services cater to businesses of all sizes:
            </p>
          </div>
          
          {[
            {
              title: "Native Apps",
              desc: "High-performance apps for iOS and Android platforms.",
              img: sky8Image,
            },
            {
              title: "Cross-Platform Apps",
              desc: "Built with Flutter or React Native for multiple devices.",
              img: aboutImage,
            },
            {
              title: "Enterprise Mobility Solutions",
              desc: "Secure apps to manage operations efficiently.",
              img: soft9Image,
            },
            {
              title: "E-commerce & Service Apps",
              desc: "Engaging platforms for customers and clients.",
              img: sky8Image,
            },
            {
              title: "App Maintenance & Support",
              desc: "Ongoing updates, monitoring, and optimization.",
              img: aboutImage,
            },
          ].map((s, i) => (
            <motion.section
              key={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="py-8 border-b"
              style={{ borderColor: '#E5E7EB' }}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Text Column */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8 }}
                  className={i % 2 === 1 ? 'lg:col-start-2' : ''}
                >
                  <h4 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#4C1D95' }}>
                    {s.title}
                  </h4>
                  <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#6B7280' }}>
                    {s.desc}
                  </p>
                </motion.div>

                {/* Image Column */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8 }}
                  className={`relative ${i % 2 === 1 ? 'lg:col-start-1' : ''}`}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl max-h-96">
                    <img 
                      src={s.img} 
                      alt={s.title} 
                      className="w-full h-full object-cover"
                      style={{ 
                        borderRadius: '1rem',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                        maxHeight: '384px'
                      }}
                    />
                    <div 
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background: 'linear-gradient(135deg, rgba(76, 29, 149, 0.1) 0%, rgba(124, 58, 237, 0.1) 100%)',
                        pointerEvents: 'none'
                      }}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.section>
          ))}
        </div>
      </motion.section>

      {/* Development Process */}
      <motion.section
        className="py-20 px-6 md:px-12 lg:px-24 relative z-10 overflow-hidden"
        style={{ backgroundColor: '#F9FAFB' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ 
              y: [0, -50, 0],
              opacity: [0.03, 0.08, 0.03]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, #4C1D9520, transparent)' }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="inline-block mb-6"
          >
            <span className="px-8 py-3 text-white text-sm font-bold rounded-full shadow-2xl" style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}>
              🚀 PROVEN METHODOLOGY
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
            className="text-3xl md:text-5xl font-black mb-6" 
            style={{ color: '#000000' }}
          >
            Our Mobile App Development{" "}
            <motion.span 
              style={{ color: '#4C1D95' }}
              animate={{ 
                textShadow: [
                  `0 0 20px rgba(76, 29, 149, 0)`,
                  `0 0 20px rgba(76, 29, 149, 0.5)`,
                  `0 0 20px rgba(76, 29, 149, 0)`
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Process
            </motion.span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: false }}
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" 
            style={{ color: '#6B7280' }}
          >
            We follow a structured, collaborative process to ensure quality and timely delivery.
          </motion.p>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { title: "Requirement Analysis", desc: "Understanding business goals and user needs." },
              { title: "UI/UX Design", desc: "Designing intuitive, interactive, and visually appealing interfaces." },
              { title: "Development", desc: "Building secure, scalable, and feature-rich mobile apps." },
              { title: "Testing & QA", desc: "Rigorous testing to ensure functionality, performance, and security." },
              { title: "Deployment & Support", desc: "Launching your app with continuous improvements and maintenance." },
            ].map((step, i) => (
              <motion.div
                key={i}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl flex flex-col items-center text-center border-2 border-gray-100 hover:border-violet-300 transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
                viewport={{ once: false }}
                whileHover={{ y: -15, scale: 1.05 }}
              >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {i < 4 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-gray-300 to-transparent z-0"></div>
              )}

              <h4 className="relative z-10 font-black text-xl text-gray-800 mb-3 mt-4 group-hover:text-gray-900 transition-colors">
                {step.title}
              </h4>
              
              <div className={`relative z-10 h-1 w-12 rounded-full mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-500`}></div>
              
              <p className="relative z-10 text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                {step.desc}
              </p>

              <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl`}></div>
              </motion.div>
            ))}
        </div>
        </div>
      </motion.section>

      {/* Hiring Models Section */}
      <motion.section
        className="py-20 px-6 md:px-12 lg:px-24 relative z-10 overflow-hidden"
        style={{ backgroundColor: '#FFFFFF' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 w-96 h-96 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, #4C1D9530, #7C3AED20)' }}
          />
          <motion.div
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
              opacity: [0.08, 0.05, 0.08]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, #7C3AED30, #F59E0B20)' }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="inline-block mb-6"
          >
            <span className="px-8 py-3 text-white text-sm font-bold rounded-full shadow-2xl" style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}>
              ✨ FLEXIBLE COLLABORATION
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
            className="text-3xl md:text-5xl font-black mb-6" 
            style={{ color: '#000000' }}
          >
            Our Custom Hiring{" "}
            <motion.span 
              style={{ color: '#4C1D95' }}
              animate={{ 
                textShadow: [
                  `0 0 20px rgba(76, 29, 149, 0)`,
                  `0 0 20px rgba(76, 29, 149, 0.5)`,
                  `0 0 20px rgba(76, 29, 149, 0)`
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Models
            </motion.span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: false }}
            className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed" 
            style={{ color: '#6B7280' }}
          >
            We provide flexible engagement models to suit different project requirements.
          </motion.p>
        </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Dedicated Team Model",
                subtitle: "Full-time developers focused exclusively on your project.",
                icon: <FaUsers className="w-8 h-8" />,
                color: "from-cyan-500 to-blue-600",
              },
              {
                number: "02",
                title: "Fixed-Price Model",
                subtitle: "Predefined budget and scope for predictable outcomes.",
                icon: <FaClipboardCheck className="w-8 h-8" />,
                color: "from-purple-500 to-violet-600",
              },
              {
                number: "03",
                title: "Hourly / Time & Material Model",
                subtitle: "Flexible option for evolving projects with dynamic requirements.",
                icon: <FaCogs className="w-8 h-8" />,
                color: "from-orange-500 to-amber-600",
              },
            ].map((model, i) => (
              <motion.div
                key={i}
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl border-2 border-gray-100 hover:border-violet-300 transition-all duration-500 overflow-hidden p-8"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: i * 0.2, ease: "easeOut" }}
                viewport={{ once: false }}
                whileHover={{ y: -12, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300" style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}>
                <span className={`text-white font-black text-2xl bg-gradient-to-r ${model.color} bg-clip-text text-transparent`} style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {model.number}
                </span>
              </div>
              
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 + 0.3 }}
                  viewport={{ once: false }}
                  className={`inline-flex p-4 rounded-2xl mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 bg-gradient-to-r ${model.color}`}
                >
                  <div className="text-white">
                    {model.icon}
                  </div>
                </motion.div>

                <h3 className="font-black text-2xl mb-4 text-gray-800 group-hover:text-gray-900 transition-colors">
                  {model.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm">
                  {model.subtitle}
                </p>
                
                <div className={`h-1 w-16 rounded-full mt-6 bg-gradient-to-r ${model.color} group-hover:w-full transition-all duration-500`}></div>
              </div>
              
              <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${model.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </motion.div>
            ))}
        </div>
        </div>
      </motion.section>

      {/* Technologies Section */}
      <motion.section
        className="py-20 px-6 md:px-12 lg:px-24 relative z-10 overflow-hidden"
        style={{ backgroundColor: '#F9FAFB' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 right-10 w-64 h-64 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, #4C1D9520, transparent)' }}
          />
          <motion.div
            animate={{ 
              rotate: [360, 0],
              scale: [1.1, 1, 1.1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 left-10 w-64 h-64 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, #7C3AED20, transparent)' }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="inline-block mb-6"
          >
            <span className="px-8 py-3 text-white text-sm font-bold rounded-full shadow-2xl" style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}>
              💻 CUTTING-EDGE TECHNOLOGY
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
            className="text-3xl md:text-5xl font-black mb-6" 
            style={{ color: '#000000' }}
          >
            Technologies & Frameworks We{" "}
            <motion.span 
              style={{ color: '#4C1D95' }}
              animate={{ 
                textShadow: [
                  `0 0 20px rgba(76, 29, 149, 0)`,
                  `0 0 20px rgba(76, 29, 149, 0.5)`,
                  `0 0 20px rgba(76, 29, 149, 0)`
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Use
            </motion.span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: false }}
            className="text-lg max-w-3xl mx-auto leading-relaxed" 
            style={{ color: '#6B7280' }}
          >
            Our mobile apps are built using modern and reliable technologies to ensure top-notch performance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: "iOS", 
              tech: ["Swift", "Objective-C"],
              icon: <FaApple className="w-8 h-8" />,
              color: "from-gray-600 to-gray-800"
            },
            { 
              title: "Android", 
              tech: ["Kotlin", "Java"],
              icon: <FaAndroid className="w-8 h-8" />,
              color: "from-green-500 to-emerald-600"
            },
            { 
              title: "Cross-Platform", 
              tech: ["Flutter", "React Native"],
              icon: <FaMobileAlt className="w-8 h-8" />,
              color: "from-blue-500 to-cyan-500"
            },
            { 
              title: "Backend", 
              tech: ["Node.js", ".NET", "Firebase"],
              icon: <FaServer className="w-8 h-8" />,
              color: "from-purple-500 to-violet-500"
            },
            { 
              title: "APIs", 
              tech: ["REST", "GraphQL"],
              icon: <FaLaptopCode className="w-8 h-8" />,
              color: "from-orange-500 to-amber-500"
            },
            { 
              title: "Cloud", 
              tech: ["AWS", "Azure", "Google Cloud"],
              icon: <FaCloud className="w-8 h-8" />,
              color: "from-pink-500 to-rose-500"
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-violet-300 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              viewport={{ once: false }}
              whileHover={{ y: -10, scale: 1.03 }}
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'linear-gradient(135deg, #4C1D9510, #7C3AED10)' }}
              />

              <div className="absolute -top-2 -right-2 w-16 h-16 opacity-20">
                <div className={`w-full h-full rounded-full bg-gradient-to-br ${item.color}`}></div>
              </div>

              <div className="relative z-10 p-8">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.15 + 0.2 }}
                  viewport={{ once: false }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 bg-gradient-to-br ${item.color}`}
                >
                  <div className="text-white">
                    {item.icon}
                  </div>
                </motion.div>

                <h4 className="font-black text-2xl mb-4 text-gray-800 group-hover:text-gray-900 transition-colors">
                  {item.title}
                </h4>

                <div className={`h-1 w-12 rounded-full mb-6 bg-gradient-to-r ${item.color} group-hover:w-full transition-all duration-500`}></div>

                <div className="space-y-2">
                  {item.tech.map((tech, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.15 + idx * 0.1 }}
                      viewport={{ once: false }}
                      className="flex items-center gap-2 group/tech"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color} group-hover/tech:scale-150 transition-transform`}></div>
                      <span className="text-gray-700 text-sm group-hover/tech:text-gray-900 group-hover/tech:translate-x-1 transition-all">
                        {tech}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
            </motion.div>
          ))}
        </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section
        className="py-20 px-6 md:px-12 lg:px-24 relative z-10"
        style={{ backgroundColor: '#FFFFFF' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: false }}
      >
        <div className="max-w-6xl mx-auto">
        <div className="rounded-3xl p-12 md:p-16 text-center shadow-2xl relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #4C1D95, #1F2937)' }}>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6 border-2 border-white/40"
            >
              <FaMobileAlt className="w-10 h-10 text-white" />
            </motion.div>

            <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight max-w-5xl mx-auto">
              Ready to Transform Your Business with a Powerful Mobile App?
            </h3>

            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              With Intellects, your mobile app becomes a powerful tool to transform your business and elevate user experiences.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="px-10 py-4 bg-white font-bold rounded-xl shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300 flex items-center gap-2 group" style={{ color: '#4C1D95' }}>
                Start Your Project <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-purple-900 transition-all duration-300 hover:scale-105">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
        </div>
      </motion.section>
    </div>
  );
}
