import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaServer,
  FaCloud,
  FaShieldAlt,
  FaUsers,
  FaTasks,
  FaRocket,
  FaCheckCircle,
  FaCube,
  FaArrowRight,
  FaCogs,
  FaClipboardCheck,
  FaCheck,
  FaGlobe,
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

export default function WebAppDevelopment() {
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
          <TypingText text="Web Application " />
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
          Transforming Ideas Into Scalable Web Applications
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl max-w-4xl mx-auto font-light leading-relaxed relative z-10"
          style={{ color: '#6B7280' }}
        >
          At Intellects, we build intelligent, high-performance web applications that simplify operations, enhance engagement, and accelerate business growth. Whether it's a custom enterprise solution or a SaaS platform, we create systems that empower your business to thrive.
        </motion.p>
      </section>

      {/* Services We Offer Section */}
      <motion.section 
        className="pt-16 pb-20 px-6 md:px-12 lg:px-24 relative z-10" 
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
            <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-4" style={{ color: '#6B7280' }}>
              We deliver tailored web application development services designed to meet your business objectives efficiently.
            </p>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed font-semibold" style={{ color: '#4C1D95' }}>
              We offer:
            </p>
          </div>
          
          {[
            {
              title: "Custom Web Applications",
              desc: "Built from scratch to match your specific workflows.",
              img: sky8Image,
            },
            {
              title: "Enterprise Portals",
              desc: "Streamlined access to data, analytics, and collaboration tools.",
              img: aboutImage,
            },
            {
              title: "SaaS Applications",
              desc: "Scalable cloud-based software for modern business models.",
              img: soft9Image,
            },
            {
              title: "Progressive Web Apps (PWA)",
              desc: "Fast, reliable, and installable web experiences.",
              img: sky8Image,
            },
            {
              title: "E-commerce Web Apps",
              desc: "Secure platforms to drive online sales and engagement.",
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
          
          {/* Closing Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false }}
            className="text-center mt-12"
          >
            <p className="text-xl md:text-2xl font-bold max-w-4xl mx-auto leading-relaxed" style={{ color: '#4C1D95' }}>
              Every solution we develop is built for performance, usability, and long-term scalability.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Expertise Section */}
      <motion.section
        className="py-20 px-6 md:px-12 lg:px-24 relative z-10"
        style={{ backgroundColor: '#F9FAFB' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#000000' }}>
            Our Web App Development{" "}
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
              Expertise
            </motion.span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-4" style={{ color: '#6B7280' }}>
            Our expertise lies in crafting secure, responsive, and data-driven web applications.
          </p>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed font-semibold" style={{ color: '#4C1D95' }}>
            We focus on:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Seamless User Experience", desc: "Design consistency across all platforms." },
            { title: "Robust Backend Systems", desc: "For reliability and speed." },
            { title: "API & Database Integration", desc: "Third-party tools and databases." },
            { title: "Cloud-Based Deployment", desc: "For flexibility and scalability." },
            { title: "Strong Cybersecurity", desc: "Protocols for data protection." },
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
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-bold text-xl rounded-xl mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  {i + 1}
                </div>
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
        </div>
      </motion.section>

      {/* Formula for Success Section */}
      <motion.section
        className="py-20 px-6 md:px-12 lg:px-24 relative z-10"
        style={{ backgroundColor: '#FFFFFF' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#000000' }}>
            Our Formula for Web Development{" "}
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
              Success
            </motion.span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-4" style={{ color: '#6B7280' }}>
            Our development approach is designed for precision and innovation.
          </p>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed font-semibold" style={{ color: '#4C1D95' }}>
            We ensure success through:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Deep Understanding", desc: "Analyzing business logic before writing a line of code." },
              { title: "Agile Methodology", desc: "Flexible, fast, and transparent development cycles." },
              { title: "Cross-Functional Teams", desc: "Designers, developers, and analysts working together." },
              { title: "Continuous Optimization", desc: "Regular testing and performance tuning." },
              { title: "End-to-End Support", desc: "From planning to post-launch maintenance." },
            ].map((pillar, i) => (
            <motion.div
              key={i}
              className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-violet-300 transition-all text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: false }}
              whileHover={{ y: -8 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-bold text-xl rounded-xl mb-4 shadow-lg group-hover:scale-110 transition-transform">
                {i + 1}
              </div>
                <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </motion.section>

      {/* Your Trusted Partner Section */}
      <motion.section
        className="py-20 px-6 md:px-12 lg:px-24 relative z-10"
        style={{ backgroundColor: '#F9FAFB' }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#000000' }}>
            Your Trusted Custom Web App Development{" "}
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
              Company
            </motion.span>
          </h3>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-8" style={{ color: '#6B7280' }}>
            Intellects stands as a reliable technology partner delivering excellence and transparency in every project.
          </p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl font-bold max-w-4xl mx-auto leading-relaxed" style={{ color: '#4C1D95' }}>
            We don't just develop web apps — we engineer business transformation.
          </p>
        </motion.div>
        </div>
      </motion.section>

      {/* Why Businesses Trust Us Section */}
      <motion.section
        className="py-20 px-6 md:px-12 lg:px-24 relative z-10"
        style={{ backgroundColor: '#FFFFFF' }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <div className="max-w-7xl mx-auto">
        {/* Centered Heading */}
        <div className="text-center mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="text-3xl md:text-5xl font-black max-w-3xl mx-auto leading-tight mb-6"
          >
            <span style={{ color: '#000000' }}>Why Businesses </span>
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
              Trust Us
              </motion.span>
          </motion.h3>
        </div>

        {/* Content Grid */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-full min-h-[400px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-blue-600 to-violet-600"></div>
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center text-white">
                  <FaRocket className="w-20 h-20 mx-auto mb-6" />
                  <h4 className="text-3xl font-bold mb-2">Trusted Partnership</h4>
                  <p className="text-gray-100">Building digital excellence together</p>
                </div>
              </div>
            </div>
            
            <div className="p-12 flex flex-col justify-center">
              <div className="space-y-4">
            {[
              "Proven expertise across multiple industries.",
              "Transparent communication and project tracking.",
              "Scalable architecture tailored to your business size.",
              "On-time delivery with uncompromised quality.",
              "Long-term partnership and ongoing technical support.",
            ].map((point, i) => (
                  <motion.div
                key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    viewport={{ once: false }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <FaCheck className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed flex-1 group-hover:text-gray-600 transition-colors">
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
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
            Our Web App Development{" "}
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
            Our structured approach ensures predictable results and efficient delivery.
          </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { title: "Requirement Gathering", desc: "Understanding project goals and target users." },
              { title: "Planning & Design", desc: "Defining workflows, UI, and user journeys." },
              { title: "Development Phase", desc: "Coding scalable, secure, and feature-rich solutions." },
              { title: "Testing & QA", desc: "Ensuring smooth performance and error-free experience." },
              { title: "Deployment & Support", desc: "Launching successfully and offering continuous updates." },
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
            We offer flexible hiring options that fit your business requirements.
          </motion.p>
        </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Dedicated Team Model",
                subtitle: "A skilled team focused exclusively on your project.",
                icon: <FaUsers className="w-8 h-8" />,
                color: "from-cyan-500 to-blue-600",
                points: [
                  { text: "Seamless Communication", desc: "Transparent workflow." },
                  { text: "Scalable Team Structure", desc: "For long-term projects." },
                  { text: "Continuous Innovation", desc: "Ideal for businesses." },
                ]
              },
              {
                number: "02",
                title: "Fixed-Price Model",
                subtitle: "Predetermined budget and scope for predictable outcomes.",
                icon: <FaClipboardCheck className="w-8 h-8" />,
                color: "from-purple-500 to-violet-600",
                points: [
                  { text: "Well-Defined Projects", desc: "Best for short-term projects." },
                  { text: "Milestone Payments", desc: "Based on completed milestones." },
                  { text: "Quality Assurance", desc: "Within agreed timelines." },
                ]
              },
              {
                number: "03",
                title: "Hourly / Time & Material Model",
                subtitle: "Pay only for actual hours worked.",
                icon: <FaCogs className="w-8 h-8" />,
                color: "from-orange-500 to-amber-600",
                points: [
                  { text: "Flexible Projects", desc: "Dynamic or evolving projects." },
                  { text: "Real-Time Tracking", desc: "Transparency in reporting." },
                  { text: "Iterative Development", desc: "Perfect for R&D projects." },
                ]
              },
            ].map((model, i) => (
              <motion.div
                key={i}
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl border-2 border-gray-100 hover:border-violet-300 transition-all duration-500 overflow-hidden"
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
              
              <div className="relative z-10 p-8">
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
                
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  {model.subtitle}
                </p>
                
                <div className={`h-1 w-16 rounded-full mb-6 bg-gradient-to-r ${model.color} group-hover:w-full transition-all duration-500`}></div>

                <div className="space-y-4">
                  {model.points.map((point, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.2 + idx * 0.1 }}
                      viewport={{ once: false }}
                      className="flex items-start gap-3 group/item"
                    >
                      <div className={`flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center shadow-md group-hover/item:scale-110 transition-transform bg-gradient-to-r ${model.color}`}>
                        <FaCheck className="w-3 h-3 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800 text-sm mb-1">{point.text}</p>
                        <p className="text-gray-600 text-xs leading-relaxed">{point.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
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
            Our experts at Intellects rely on cutting-edge technologies to deliver powerful web applications.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: false }}
            className="text-lg max-w-3xl mx-auto leading-relaxed mt-4 font-semibold" 
            style={{ color: '#4C1D95' }}
          >
            We choose technologies that align with your business goals — ensuring efficiency, scalability, and innovation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: "Frontend", 
              tech: ["React.js", "Angular", "Vue.js"],
              icon: <FaLaptopCode className="w-8 h-8" />,
              color: "from-blue-500 to-cyan-500"
            },
            { 
              title: "Backend", 
              tech: ["Node.js", ".NET", "Laravel", "Django"],
              icon: <FaCogs className="w-8 h-8" />,
              color: "from-purple-500 to-violet-500"
            },
            { 
              title: "Database", 
              tech: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
              icon: <FaServer className="w-8 h-8" />,
              color: "from-green-500 to-emerald-500"
            },
            { 
              title: "Cloud", 
              tech: ["AWS", "Azure", "Google Cloud"],
              icon: <FaCloud className="w-8 h-8" />,
              color: "from-orange-500 to-amber-500"
            },
            { 
              title: "Other Tools", 
              tech: ["Docker", "GitHub", "Jenkins", "REST & GraphQL APIs"],
              icon: <FaRocket className="w-8 h-8" />,
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
              <FaRocket className="w-10 h-10 text-white" />
            </motion.div>

            <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight max-w-5xl mx-auto">
              Ready to Transform Your Business with Powerful Web Apps?
            </h3>

            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's build something extraordinary together. Start your journey to digital excellence today.
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
