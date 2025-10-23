import React from "react";
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
        className="relative py-32 md:py-40 px-6 md:px-12 lg:px-24 text-center shadow-lg overflow-hidden mb-24"
        style={{ backgroundColor: '#FFFFFF', boxShadow: '0 10px 15px -3px rgba(30, 58, 138, 0.1), 0 4px 6px -2px rgba(30, 58, 138, 0.05)' }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1920)' }}
          ></div>
        </div>

        {/* Floating Decorative Elements */}
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
            style={{ background: 'linear-gradient(135deg, #7C3AED, #4C1D95)' }}
          />
        </motion.div>

        {/* Content */}
        <motion.h1 
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { 
              duration: 0.8, 
              ease: "easeOut",
              type: "spring",
              stiffness: 100
            }
          }}
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight relative z-10"
        >
          Mobile Application{" "}
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
            Development
          </motion.span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, delay: 0.2 }
          }}
          className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto font-light relative z-10" 
          style={{ color: '#6B7280' }}
        >
          At <span className="font-semibold" style={{ color: '#4C1D95' }}>Intellects</span>, we create user-friendly, secure, and high-performing mobile applications that connect businesses with their customers anytime, anywhere.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            transition: { duration: 0.6, delay: 0.4 }
          }}
          className="flex justify-center gap-4 flex-wrap relative z-10"
        >
          <motion.div whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.95 }}>
            <button
              className="font-bold px-10 py-4 rounded-full shadow-xl transition inline-flex items-center gap-3"
              style={{ background: 'linear-gradient(135deg, #4C1D95 0%, #7C3AED 100%)', color: '#FFFFFF', boxShadow: '0 25px 50px -12px rgba(76, 29, 149, 0.25)' }}
            >
              <span>Launch Your App</span>
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <FaArrowRight className="w-5 h-5" />
              </motion.span>
            </button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              className="font-bold px-10 py-4 rounded-full shadow-lg transition inline-flex items-center gap-3 border-2"
              style={{ backgroundColor: '#FFFFFF', color: '#4C1D95', borderColor: '#4C1D95' }}
            >
              View Portfolio
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Mobile Apps Section */}
      <motion.section
        className="py-20 px-6 md:px-12 max-w-7xl mx-auto relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
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
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
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
      </motion.section>

      {/* Services Offered */}
      <motion.section
        className="py-20 px-6 md:px-12 max-w-7xl mx-auto relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
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
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Native Apps – High-performance apps for iOS and Android platforms.",
              "Cross-Platform Apps – Built with Flutter or React Native for multiple devices.",
              "Enterprise Mobility Solutions – Secure apps to manage operations efficiently.",
              "E-commerce & Service Apps – Engaging platforms for customers and clients.",
              "App Maintenance & Support – Ongoing updates, monitoring, and optimization.",
            ].map((service, i) => (
              <motion.div
                key={i}
              className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl border-l-4 border-purple-500 transition-all relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ x: 5 }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-100 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10 flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <FaCheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-700 font-medium leading-relaxed group-hover:text-gray-900 transition-colors">{service}</p>
              </div>
              </motion.div>
            ))}
        </div>
      </motion.section>

      {/* Mobile App Development Process */}
      <motion.section
        className="py-20 px-6 md:px-12 max-w-7xl mx-auto relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
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
      </motion.section>

      {/* Technologies & Frameworks */}
      <motion.section
        className="py-20 px-6 md:px-12 max-w-6xl mx-auto relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
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
            <h2 className="text-4xl font-black mb-6 text-gray-900">
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
      </motion.section>

      {/* Final CTA */}
      <motion.div
        className="px-6 md:px-12 max-w-6xl mx-auto pb-20 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
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
      </motion.div>
    </div>
  );
}
