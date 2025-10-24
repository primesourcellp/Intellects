import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaUsers,
  FaCogs,
  FaServer,
  FaCloud,
  FaShieldAlt,
  FaRocket,
  FaHeart,
  FaStar,
  FaCheckCircle,
  FaArrowRight,
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

export default function MobileAppDevelopment() {
  return (
    <div className="min-h-screen text-gray-800" style={{ background: 'linear-gradient(to bottom right, #F9FAFB, #F3F4F6)' }}>
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full blur-3xl -top-48 -left-48 animate-pulse" style={{ background: 'radial-gradient(circle, #4C1D9520, #1F293715)' }}></div>
        <div className="absolute w-96 h-96 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000" style={{ background: 'radial-gradient(circle, #4C1D9520, #1F293715)' }}></div>
      </div>

      {/* Header Section - Home Page Style */}
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
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight relative z-10"
          style={{ color: '#000000' }}
        >
          <TypingText text="Turning Mobile Ideas into " />
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
            <TypingText text="Real-World Apps" />
          </motion.span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl max-w-4xl mx-auto font-light leading-relaxed relative z-10"
          style={{ color: '#6B7280' }}
        >
          Building with Purpose. Delivering with Precision.
        </motion.p>
      </section>

      {/* Why Mobile Apps Section */}
      <motion.section
        className="py-20 px-6 md:px-12 relative z-10"
        style={{ backgroundColor: '#F9FAFB' }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="px-6 py-2 bg-gradient-to-r from-purple-500 to-purple-500 text-white text-sm font-bold rounded-full shadow-lg">
              TRANSFORMATIVE POWER
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#000000' }}>
            Transforming Businesses with Custom Mobile{" "}
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
              Apps
            </motion.span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
              icon: <FaUsers className="text-white text-5xl" />,
                title: "Enhancing User Engagement",
                desc: "Apps designed to delight users and boost interaction.",
              gradient: "from-purple-500 to-purple-600",
              },
              {
              icon: <FaCogs className="text-white text-5xl" />,
                title: "Optimizing Operations",
                desc: "Streamlining workflows and automating repetitive tasks.",
              gradient: "from-purple-500 to-fuchsia-600",
              },
              {
              icon: <FaMobileAlt className="text-white text-5xl" />,
                title: "Driving Revenue Growth",
                desc: "E-commerce and service apps that increase conversions.",
              gradient: "from-fuchsia-500 to-purple-600",
              },
              {
              icon: <FaServer className="text-white text-5xl" />,
                title: "Ensuring Scalability",
                desc: "Flexible solutions that evolve as your business grows.",
              gradient: "from-purple-500 to-purple-600",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden border-2 border-purple-100"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -10, scale: 1.03 }}
              >
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                  <div className="bg-white/20 backdrop-blur-sm p-5 rounded-2xl border-2 border-white/40">
                {item.icon}
                  </div>
                </div>
              </div>

              <div className="p-6 text-center">
                <h3 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-gray-900 transition-colors">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>

              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </motion.div>
            ))}
        </div>
        </div>
      </motion.section>

      {/* Services Offered */}
      <motion.section 
        className="py-20 px-6 md:px-12 relative z-10" 
        style={{ backgroundColor: '#FFFFFF' }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#000000' }}>
              Services We{" "}
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
                Offer
              </motion.span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
              High-performance mobile applications for iOS and Android platforms.
            </p>
          </div>
          
          {[
            {
              title: "Native Apps",
              desc: "High-performance apps for iOS and Android platforms with native capabilities and optimal user experience.",
              img: sky8Image,
            },
            {
              title: "Cross-Platform Apps",
              desc: "Built with Flutter or React Native for multiple devices, reducing development time and costs.",
              img: aboutImage,
            },
            {
              title: "Enterprise Mobility Solutions",
              desc: "Secure apps to manage operations efficiently and empower your workforce.",
              img: soft9Image,
            },
            {
              title: "E-commerce & Service Apps",
              desc: "Engaging platforms for customers and clients that drive sales and loyalty.",
              img: sky8Image,
            },
          ].map((s, i) => (
            <motion.section
              key={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="py-8 border-b"
              style={{ borderColor: '#E5E7EB' }}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Text Column */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
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
                  viewport={{ once: true }}
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
                    {/* Decorative overlay */}
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

      {/* Mobile App Development Process */}
      <motion.section
        className="py-20 px-6 md:px-12 relative z-10"
        style={{ backgroundColor: '#F9FAFB' }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#000000' }}>
            Our Mobile App Development{" "}
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
              Process
            </motion.span>
          </h2>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              "Requirement Analysis",
              "UI/UX Design",
              "Development",
              "Testing & QA",
              "Deployment & Support",
            ].map((step, i) => (
              <motion.div
                key={i}
              className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl flex flex-col items-center text-center border-2 border-transparent hover:border-purple-300 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
              whileHover={{ y: -15, scale: 1.05 }}
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-xl group-hover:scale-110 transition-transform">
                {i + 1}
              </div>

              <div className="mt-8 p-5 bg-gradient-to-br from-purple-50 to-purple-50 rounded-2xl group-hover:from-purple-100 group-hover:to-purple-100 transition-colors">
                <FaMobileAlt className="w-10 h-10 text-gray-900" />
              </div>

              <p className="font-bold text-lg text-gray-800 mt-4 group-hover:text-gray-900 transition-colors">
                {step}
              </p>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </motion.div>
            ))}
        </div>
        </div>
      </motion.section>

      {/* Technologies & Frameworks */}
      <motion.section
        className="py-20 px-6 md:px-12 relative z-10"
        style={{ backgroundColor: '#FFFFFF' }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-purple-100 p-12">
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mb-6 shadow-xl"
            >
              <FaStar className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#000000' }}>
              Technologies & Frameworks We{" "}
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
                Use
              </motion.span>
          </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { text: "iOS: Swift, Objective-C", icon: FaRocket },
              { text: "Android: Kotlin, Java", icon: FaMobileAlt },
              { text: "Cross-Platform: Flutter, React Native", icon: FaCloud },
              { text: "Backend: Node.js, .NET, Firebase", icon: FaServer },
              { text: "APIs: REST, GraphQL", icon: FaCogs },
              { text: "Cloud: AWS, Azure, Google Cloud", icon: FaShieldAlt },
            ].map((tech, i) => (
              <motion.div
                key={i}
                className="group p-6 bg-gradient-to-br from-purple-50 to-purple-50 rounded-2xl shadow-md hover:shadow-xl border-2 border-purple-200 hover:border-purple-400 transition-all"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <tech.icon className="text-white text-xl" />
                  </div>
                  <p className="font-bold text-gray-700 group-hover:text-gray-900 transition-colors">{tech.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section
        className="py-20 px-6 md:px-12 relative z-10"
        style={{ backgroundColor: '#F9FAFB' }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
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
              className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6 border-2 border-white/40"
            >
              <FaRocket className="w-10 h-10 text-white" />
            </motion.div>

            <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight max-w-5xl mx-auto">
              Ready to build your dream mobile app that transforms your vision into reality?
            </h3>

            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Transform your vision into reality with a stunning mobile application that users will love.
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
