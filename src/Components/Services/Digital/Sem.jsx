import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaChartLine,
  FaBullseye,
  FaRocket,
  FaCheck,
  FaArrowRight,
  FaPlus,
  FaMinus,
  FaGoogle,
  FaAd,
  FaDollarSign,
  FaUsers,
  FaLightbulb,
  FaCogs,
  FaPaintBrush,
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

// Flip Card Component
const SEMFlipCard = ({ item, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <motion.div
      className="relative w-full h-[350px]"
      style={{ perspective: '1200px' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: false }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full cursor-pointer"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full rounded-2xl shadow-lg border-2 p-8 flex flex-col justify-center items-center text-center"
          style={{
            backfaceVisibility: 'hidden',
            backgroundColor: '#FFFFFF',
            borderColor: '#E5E7EB'
          }}
        >
          <div className="text-5xl mb-4">
            {item.icon}
          </div>
          <h3 className="text-xl font-bold mb-3" style={{ color: '#4C1D95' }}>
            {item.title}
          </h3>
          <p className="leading-relaxed" style={{ color: '#6B7280' }}>
            {item.description}
          </p>
        </div>

        {/* Back Side - Image */}
        <div
          className="absolute w-full h-full rounded-2xl overflow-hidden shadow-2xl border-2"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            borderColor: '#4C1D95'
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

// FAQ Item Component with Toggle
const FAQItem = ({ faq, index, sectionVariant }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      key={index}
      className="rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer overflow-hidden bg-white border-2 border-violet-100"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
    >
      <div 
        className="p-6 flex justify-between items-center bg-gradient-to-r from-cyan-50 to-blue-50 hover:from-purple-100 hover:to-violet-100 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-bold text-lg text-gray-900">{faq.q}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="bg-violet-500 p-2 rounded-full"
        >
          {isOpen ? <FaMinus className="text-white text-sm" /> : <FaPlus className="text-white text-sm" />}
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="px-6 pb-6 pt-2"
          >
            <p className="text-slate-700 border-t-2 border-violet-200 pt-4 leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function Sem() {
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
          <TypingText text="Search Engine Marketing " />
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
            <TypingText text="(SEM)" />
          </motion.span>
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl md:text-3xl font-bold max-w-4xl mx-auto mb-4 relative z-10"
          style={{ color: '#4C1D95' }}
        >
          Reach the Right Audience Instantly with Smart Paid Campaigns
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl max-w-4xl mx-auto font-light leading-relaxed relative z-10"
          style={{ color: '#6B7280' }}
        >
          Search Engine Marketing (SEM) is one of the fastest ways to get your business noticed online. At Intellects, we craft high-performing SEM campaigns that deliver qualified traffic, stronger conversions, and visible growth.
        </motion.p>
      </section>

      {/* Our SEM Process Section */}
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
              Our SEM{" "}
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
            </h3>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-4" style={{ color: '#6B7280' }}>
              Our SEM process includes:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              title: "Keyword Research & Targeting", 
              description: "In-depth keyword research & targeting strategy.", 
              icon: <FaSearch className="w-8 h-8" />,
              color: "from-blue-500 to-cyan-500"
            },
            { 
              title: "Campaign Setup", 
              description: "Google Ads & Bing Ads campaign setup.", 
              icon: <FaGoogle className="w-8 h-8" />,
              color: "from-purple-500 to-violet-500"
            },
            { 
              title: "Smart Bid Management", 
              description: "Smart bid management to optimize budget.", 
              icon: <FaDollarSign className="w-8 h-8" />,
              color: "from-green-500 to-emerald-500"
            },
            { 
              title: "A/B Testing", 
              description: "A/B testing for continuous performance improvement.", 
              icon: <FaCogs className="w-8 h-8" />,
              color: "from-orange-500 to-amber-500"
            },
            { 
              title: "Custom Ad Copywriting", 
              description: "Custom ad copywriting to maximize clicks and conversions.", 
              icon: <FaPaintBrush className="w-8 h-8" />,
              color: "from-pink-500 to-rose-500"
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-violet-300 transition-all relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: false }}
              whileHover={{ y: -8 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
                  viewport={{ once: false }}
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${item.color}`}
                >
                  <div className="text-white">
                    {item.icon}
                  </div>
                </motion.div>
                <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </motion.section>

      {/* Key Benefits Section */}
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
              Key{" "}
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
                Benefits
              </motion.span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "Instant Visibility", 
              description: "Instant visibility on search engines.", 
              icon: "⚡"
            },
            { 
              title: "Measurable Performance", 
              description: "Measurable and trackable performance.", 
              icon: "📊"
            },
            { 
              title: "Enhanced ROI", 
              description: "Enhanced conversion rates and ROI.", 
              icon: "💰"
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: false }}
              whileHover={{ 
                y: -8, 
                boxShadow: '0 20px 40px rgba(76, 29, 149, 0.2)',
                borderColor: '#4C1D95'
              }}
              className="p-8 rounded-2xl shadow-lg border-2 transition-all cursor-pointer group"
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: '#E5E7EB'
              }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#4C1D95' }}>
                {item.title}
              </h3>
              <p className="leading-relaxed" style={{ color: '#6B7280' }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
        </div>
      </motion.section>

      {/* Data-Driven Marketing Strategy Section */}
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
            Data-Driven Marketing{" "}
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
              Strategy
            </motion.span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-2" style={{ color: '#6B7280' }}>
            Decisions Powered by Insights, Not Assumptions
          </p>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
            We don't guess — we analyze. Every campaign at Intellects is backed by real-time data, user behavior tracking, and advanced analytics to ensure your ad budget is used effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: "Conversion Tracking", 
                description: "Conversion tracking & performance monitoring.",
                icon: "🎯",
                image: sky8Image
              },
              { 
                title: "Budget Optimization", 
                description: "Budget optimization.",
                icon: "💵",
                image: aboutImage
              },
              { 
                title: "Deep Analytics", 
                description: "Deep analytics reports to measure success.",
                icon: "📈",
                image: soft9Image
              },
            ].map((item, i) => (
              <SEMFlipCard key={i} item={item} index={i} />
            ))}
        </div>
        </div>
      </motion.section>

      {/* Precision Audience Targeting Section */}
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#4C1D95' }}>
            Precision Audience{" "}
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
              Targeting
            </motion.span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-2" style={{ color: '#6B7280' }}>
            Reaching the Right People at the Right Time
          </p>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
            Our targeting strategies go beyond demographics. We segment your audience based on intent, interest, and behavior to ensure your ads reach potential customers who are ready to engage.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "Geo-Targeted Campaigns", desc: "Geo-targeted and device-based campaigns." },
              { title: "Retargeting Strategies", desc: "Interest-based and retargeting strategies." },
              { title: "Lead Generation", desc: "High-quality lead generation tactics." },
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

      {/* Creative Ad Development Section */}
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
            Creative Ad{" "}
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
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-2" style={{ color: '#6B7280' }}>
            Where Strategy Meets Design
          </p>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
            Our creative team designs eye-catching visuals and persuasive ad copy that connect emotionally and logically with your audience. Every ad we craft speaks directly to customer needs while maintaining your brand's voice.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "Engaging Visuals", desc: "Engaging visuals and clear CTAs." },
              { title: "Optimized Copy", desc: "Ad copy optimized for relevance and conversions." },
              { title: "Consistent Branding", desc: "Consistent branding across all platforms." },
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
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 text-white font-bold text-xl rounded-xl mb-4 shadow-lg group-hover:scale-110 transition-transform">
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

      {/* Continuous Optimization Section */}
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#4C1D95' }}>
            Continuous Optimization &{" "}
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
              Growth
            </motion.span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-2" style={{ color: '#6B7280' }}>
            Your Campaign Never Stops Improving
          </p>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
            Digital marketing is a journey, not a one-time setup. We monitor and refine campaigns continuously to improve ROI, reduce ad waste, and strengthen performance over time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Performance Analysis", desc: "Weekly performance analysis.", icon: "📊" },
              { title: "Competitor Benchmarking", desc: "Competitor benchmarking.", icon: "🎯" },
              { title: "Strategy Reviews", desc: "Strategy reviews and improvement plans.", icon: "🔄" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: false }}
                whileHover={{ 
                  y: -8, 
                  boxShadow: '0 20px 40px rgba(76, 29, 149, 0.2)',
                  borderColor: '#4C1D95'
                }}
                className="p-8 rounded-2xl shadow-lg border-2 transition-all cursor-pointer group"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderColor: '#E5E7EB'
                }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#4C1D95' }}>
                  {item.title}
                </h3>
                <p className="leading-relaxed" style={{ color: '#6B7280' }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
        </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="py-20 px-6 md:px-12 lg:px-24 relative z-10"
        style={{ backgroundColor: '#F9FAFB' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#000000' }}>
            Frequently Asked{" "}
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
              Questions
            </motion.span>
          </h2>
        </div>

          <div className="space-y-4">
            {[
              {
                q: "What makes SEM different from SEO?",
                a: "SEO focuses on organic growth, while SEM uses paid advertising for instant visibility on search engines.",
              },
              {
                q: "How soon will I see results from SEM?",
                a: "You can start seeing results within days of campaign launch, depending on your budget and targeting strategy.",
              },
              {
                q: "Can Intellects manage multi-channel ad campaigns?",
                a: "Yes, we handle campaigns across Google Ads, Bing Ads, and display networks for maximum reach.",
              },
              {
                q: "How do you ensure the best ROI?",
                a: "Through continuous optimization, keyword analysis, and performance tracking, we ensure every rupee spent delivers value.",
              },
              {
                q: "Is SEM suitable for small and mid-sized businesses?",
                a: "Absolutely. Our flexible packages allow businesses of any size to leverage paid advertising effectively.",
              },
            ].map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} sectionVariant={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} />
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
              Ready to Drive Instant Results with Smart SEM Campaigns?
            </h3>

            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's create high-performing paid campaigns that deliver qualified traffic and measurable growth.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="px-10 py-4 bg-white font-bold rounded-xl shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300 flex items-center gap-2 group" style={{ color: '#4C1D95' }}>
                Launch Your Campaign <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-purple-900 transition-all duration-300 hover:scale-105">
                Request Free Audit
              </button>
            </div>
          </div>
        </div>
        </div>
      </motion.section>
    </div>
  );
}
