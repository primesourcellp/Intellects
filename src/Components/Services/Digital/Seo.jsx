import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaSearch, 
  FaChartLine, 
  FaFileAlt,
  FaCogs,
  FaLink, 
  FaRocket,
  FaCheck,
  FaArrowRight,
  FaPlus,
  FaMinus,
  FaKeyboard,
  FaUsers,
  FaTachometerAlt,
  FaGlobe,
  FaBullhorn,
  FaNewspaper,
  FaHandshake,
  FaShareAlt,
  FaAward,
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

// Analytics Flip Card Component
const AnalyticsFlipCard = ({ item, index }) => {
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
        {/* Front Side - Icon and Text */}
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
          <div className="relative w-full h-full">
            {/* Background Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// FAQ Item Component with Toggle
const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer overflow-hidden border-2 group"
      style={{ 
        borderColor: isOpen ? '#4C1D95' : '#E5E7EB',
        backgroundColor: '#FFFFFF'
      }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      <div 
        className="p-6 flex items-start gap-4 transition-colors"
        style={{ backgroundColor: '#FFFFFF' }}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F3EFF9'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFFFFF'}
      >
        {/* Icon */}
        <motion.div 
          className="text-3xl flex-shrink-0"
          animate={{ rotate: isOpen ? 360 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {faq.icon}
        </motion.div>

        {/* Question */}
        <div className="flex-1">
          <h4 className="font-bold text-lg text-gray-900 group-hover:text-purple-700 transition-colors">
            {faq.q}
          </h4>
        </div>

        {/* Toggle Button */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ 
            background: isOpen 
              ? 'linear-gradient(135deg, #4C1D95, #7C3AED)' 
              : '#F3F4F6'
          }}
        >
          {isOpen ? (
            <FaMinus className="text-white text-sm" />
          ) : (
            <FaPlus className="text-gray-600 text-sm" />
          )}
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 pl-20">
              <div 
                className="pt-4 border-t-2" 
                style={{ borderColor: '#E5E7EB' }}
              >
                <p className="text-gray-700 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function Seo() {
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
        style={{ backgroundColor: '#F8F5FC', boxShadow: '0 10px 15px -3px rgba(30, 58, 138, 0.1), 0 4px 6px -2px rgba(30, 58, 138, 0.05)' }}
      >
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
          <TypingText text="SEO " />
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
            <TypingText text="(Search Engine Optimization)" />
          </motion.span>
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl md:text-3xl font-bold max-w-4xl mx-auto mb-4 relative z-10"
          style={{ color: '#4C1D95' }}
        >
          Boost Your Online Visibility
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl max-w-4xl mx-auto font-light leading-relaxed relative z-10"
          style={{ color: '#6B7280' }}
        >
          At Intellects, our SEO services are designed to help businesses achieve higher rankings on search engines, attract quality traffic, and convert visitors into loyal customers. SEO is more than just keywords—it's a strategic approach to increase your brand visibility, enhance user experience, and generate measurable business results.
        </motion.p>
      </section>

      {/* Comprehensive Keyword Strategy Section */}
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
              Comprehensive{" "}
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
                Keyword Strategy
              </motion.span>
            </h3>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-4" style={{ color: '#6B7280' }}>
              Successful SEO starts with targeting the right keywords. At Intellects, we conduct in-depth research to identify high-impact keywords that your potential customers are actively searching for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { 
              title: "Keyword Research & Analysis", 
              desc: "Discover valuable opportunities to attract targeted traffic.",
              icon: <FaSearch className="w-8 h-8" />,
              color: "from-blue-500 to-cyan-500"
            },
            { 
              title: "Competitor Analysis", 
              desc: "Understand market trends and outperform competitors.",
              icon: <FaChartLine className="w-8 h-8" />,
              color: "from-purple-500 to-violet-500"
            },
            { 
              title: "Long-Tail & Local Keywords", 
              desc: "Target specific search queries for better engagement.",
              icon: <FaGlobe className="w-8 h-8" />,
              color: "from-green-500 to-emerald-500"
            },
            { 
              title: "Continuous Monitoring", 
              desc: "Refine keywords based on analytics and results.",
              icon: <FaTachometerAlt className="w-8 h-8" />,
              color: "from-orange-500 to-amber-500"
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
              <div className="relative z-10 flex items-start gap-4">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
                  viewport={{ once: false }}
                  className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${item.color}`}
                >
                  <div className="text-white">
                    {item.icon}
                  </div>
                </motion.div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-gray-800 mb-2 group-hover:text-gray-900 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
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
            Our keyword strategy ensures your business reaches the right audience effectively.
          </p>
        </motion.div>
        </div>
      </motion.section>

      {/* On-Page SEO Optimization Section */}
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
              On-Page SEO{" "}
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
                Optimization
              </motion.span>
            </h3>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
              Optimizing your website content and structure is key to better rankings. Intellects focuses on enhancing every page element to improve visibility and user engagement.
            </p>
          </div>
          
          {[
            {
              title: "Meta Tags & Headings",
              desc: "Optimized titles, descriptions, and headers for SEO and clarity.",
              img: sky8Image,
              },
              {
              title: "URL Structure",
              desc: "Clean, descriptive URLs that improve crawling and indexing.",
              img: aboutImage,
              },
              {
              title: "Content Optimization",
              desc: "Engaging, relevant, and SEO-friendly copy.",
              img: soft9Image,
              },
              {
              title: "Internal Linking",
              desc: "Structured links to guide visitors and search engines effectively.",
              img: sky8Image,
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

      {/* Technical SEO Excellence Section */}
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
            Technical SEO <span style={{ color: '#4C1D95' }}>Excellence</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
            A technically sound website performs better in search results. Intellects ensures your site is fast, secure, and accessible.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Mobile-Friendly Design", desc: "Optimized for all devices and screen sizes.", icon: <FaGlobe className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
              { title: "Site Speed Optimization", desc: "Faster load times for better rankings and user experience.", icon: <FaTachometerAlt className="w-6 h-6" />, color: "from-purple-500 to-violet-500" },
              { title: "Crawlability & Indexing", desc: "Ensuring search engines can easily navigate your site.", icon: <FaSearch className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
              { title: "Structured Data & Schema Markup", desc: "Boosts rich results in search engines.", icon: <FaCogs className="w-6 h-6" />, color: "from-orange-500 to-amber-500" },
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
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
                  viewport={{ once: false }}
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${item.color}`}
                >
                  <div className="text-white">
                    {item.icon}
                  </div>
                </motion.div>
                <h3 className="font-bold text-lg text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
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

      {/* Off-Page SEO & Link Building Section */}
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
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="inline-block mb-6"
            >
              <span className="px-8 py-3 text-white text-sm font-bold rounded-full shadow-2xl" style={{ background: 'linear-gradient(135deg, #4C1D95, #000000)' }}>
                🔗 LINK BUILDING
              </span>
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#000000' }}>
              Off-Page SEO & <span style={{ color: '#4C1D95' }}>Link Building</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
              Building authority and trust is essential for high rankings. Our off-page SEO focuses on increasing your website's credibility.
            </p>
          </div>

          {/* Vertical Timeline Layout */}
          <div className="relative max-w-5xl mx-auto">
            {/* Central Animated Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -ml-0.5">
              <motion.div
                className="h-full w-full rounded-full"
                style={{ 
                  background: 'linear-gradient(180deg, transparent 0%, #4C1D95 10%, #7C3AED 50%, #4C1D95 90%, transparent 100%)'
                }}
                initial={{ scaleY: 0, opacity: 0 }}
                whileInView={{ scaleY: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: false }}
              />
              
              {/* Animated Flowing Dots */}
              <motion.div
                className="absolute top-0 left-1/2 -ml-2 w-4 h-4 rounded-full"
                style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}
                animate={{ 
                  y: ['0%', '100%'],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  repeatDelay: 0.5
                }}
              />
            </div>

            {/* Timeline Steps */}
            <div className="space-y-12 md:space-y-16">
              {[
                {
                  icon: <FaLink className="w-8 h-8" />,
                  title: "High-Quality Backlinks",
                  desc: "From relevant and authoritative sources.",
                  color: "from-purple-600 to-purple-700"
                },
                {
                  icon: <FaNewspaper className="w-8 h-8" />,
                  title: "Guest Posting & Outreach",
                  desc: "Expanding your brand's presence online.",
                  color: "from-indigo-600 to-indigo-700"
                },
                {
                  icon: <FaShareAlt className="w-8 h-8" />,
                  title: "Social Signals",
                  desc: "Leveraging social media engagement to boost SEO.",
                  color: "from-violet-600 to-violet-700"
                },
                {
                  icon: <FaAward className="w-8 h-8" />,
                  title: "Brand Mentions",
                  desc: "Building reputation across the web.",
                  color: "from-purple-700 to-purple-800"
                },
              ].map((step, i) => {
                const isLeft = i % 2 === 0;
                
                return (
                  <motion.div
                    key={i}
                    className="relative"
                    initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: i * 0.1,
                      type: "spring",
                      stiffness: 80
                    }}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    {/* Timeline Node - Center Circle */}
                    <motion.div
                      className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full items-center justify-center z-20 shadow-2xl text-white"
                      style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: i * 0.1 + 0.3,
                        type: "spring",
                        stiffness: 150
                      }}
                      viewport={{ once: false }}
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 360,
                        transition: { duration: 0.6 }
                      }}
                    >
                      {step.icon}
                      
                      {/* Pulse Rings */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-4 border-purple-300"
                        animate={{
                          scale: [1, 1.5, 1.5],
                          opacity: [0.6, 0, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut",
                          delay: i * 0.3
                        }}
                      />
                    </motion.div>

                    {/* Content Container */}
                    <div className={`flex flex-col md:flex-row items-center gap-8 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                      {/* Spacer for desktop */}
                      <div className="hidden md:block flex-1" />
                      
                      {/* Content Box */}
                      <motion.div 
                        className={`flex-1 relative group ${isLeft ? 'md:text-right' : 'md:text-left'}`}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Connection Line to Center */}
                        <motion.div
                          className={`hidden md:block absolute top-1/2 ${isLeft ? 'left-full' : 'right-full'} w-8 h-0.5`}
                          style={{ background: 'linear-gradient(90deg, #4C1D95, #7C3AED)' }}
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          transition={{ duration: 0.5, delay: i * 0.1 + 0.5 }}
                          viewport={{ once: false }}
                        >
                          <motion.div
                            className={`absolute top-1/2 ${isLeft ? 'right-0' : 'left-0'} w-3 h-3 -mt-1.5 rounded-full bg-purple-500`}
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [1, 0.5, 1]
                            }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                        </motion.div>

                        {/* Content Card */}
                        <motion.div
                          className="relative p-8 rounded-3xl shadow-xl overflow-hidden bg-white border-2 border-gray-100"
                          whileHover={{
                            boxShadow: '0 25px 50px -12px rgba(76, 29, 149, 0.25)',
                            borderColor: '#4C1D95'
                          }}
                        >
                          {/* Animated Background Gradient */}
                          <motion.div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{
                              background: 'linear-gradient(135deg, rgba(76, 29, 149, 0.05), rgba(124, 58, 237, 0.03))'
                            }}
                          />

                          {/* Mobile Icon Badge */}
                          <motion.div
                            className={`md:hidden absolute -top-4 ${isLeft ? 'left-8' : 'left-8'} w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl z-10 text-white bg-gradient-to-br ${step.color}`}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.5, type: "spring" }}
                            viewport={{ once: false }}
                          >
                            {step.icon}
                          </motion.div>

                          {/* Text Content */}
                          <div className="relative z-10">
                            <motion.h4 
                              className="text-2xl md:text-3xl font-black mb-4 group-hover:text-purple-700 transition-colors"
                              style={{ 
                                background: 'linear-gradient(135deg, #000000, #4C1D95)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                              }}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.1 + 0.4, duration: 0.5 }}
                              viewport={{ once: false }}
                            >
                              {step.title}
                            </motion.h4>
                            
                            <motion.p 
                              className="text-gray-600 text-lg leading-relaxed"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.1 + 0.5, duration: 0.5 }}
                              viewport={{ once: false }}
                            >
                              {step.desc}
                            </motion.p>
                          </div>

                          {/* Bottom accent line */}
                          <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${step.color} group-hover:w-full transition-all duration-500 mt-4`}></div>

                          {/* Decorative Corner Element */}
                          <div className={`absolute ${isLeft ? 'bottom-0 left-0' : 'bottom-0 right-0'} w-32 h-32 opacity-10`}>
                            <div 
                              className={`w-full h-full rounded-full blur-2xl bg-gradient-to-br ${step.color}`}
                            />
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Analytics & Continuous Improvement Section */}
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
            Analytics & Continuous <span style={{ color: '#4C1D95' }}>Improvement</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-2" style={{ color: '#6B7280' }}>
            SEO is an ongoing process. Intellects monitors performance, analyzes results, and continuously refines strategies for maximum impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Traffic & Engagement Analysis", 
                description: "Understanding audience behavior.", 
                icon: "📊",
                image: sky8Image,
                gradient: 'linear-gradient(135deg, #4C1D95 0%, #7C3AED 100%)'
              },
              { 
                title: "Ranking Reports", 
                description: "Tracking keyword and page performance.", 
                icon: "📈",
                image: aboutImage,
                gradient: 'linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)'
              },
              { 
                title: "Conversion Optimization", 
                description: "Turning traffic into leads and sales.", 
                icon: "🎯",
                image: soft9Image,
                gradient: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)'
              },
              { 
                title: "Ongoing Strategy Updates", 
                description: "Staying ahead with algorithm changes and industry trends.", 
                icon: "🔄",
                image: sky8Image,
                gradient: 'linear-gradient(135deg, #4C1D95 0%, #6366F1 100%)'
              },
            ].map((item, i) => (
              <AnalyticsFlipCard key={i} item={item} index={i} />
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
            With Intellects SEO services, your website becomes a powerful tool to attract, engage, and convert your audience.
          </p>
        </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="py-20 px-6 md:px-12 lg:px-24 relative z-10"
        style={{ backgroundColor: '#FFFFFF' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#000000' }}>
            Frequently Asked <span style={{ color: '#4C1D95' }}>Questions</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {[
              {
                q: "What is SEO and why is it important for my business?",
                a: "SEO (Search Engine Optimization) is the process of optimizing your website to rank higher in search engine results. It helps your business attract organic traffic, increase visibility, and convert visitors into customers.",
                icon: "💼"
              },
              {
                q: "In what timeframe can SEO improvements become visible?",
                a: "SEO is a long-term strategy. Typically, businesses begin to see measurable improvements within 3–6 months, depending on competition, website condition, and keyword targeting.",
                icon: "⏱️"
              },
              {
                q: "What is the difference between on-page and off-page SEO?",
                a: (
                  <div>
                    <p className="mb-2"><strong>On-page SEO</strong> focuses on optimizing website elements like content, headings, meta tags, and internal links.</p>
                    <p><strong>Off-page SEO</strong> involves building authority through backlinks, social signals, and online mentions. Both are crucial for higher rankings.</p>
                  </div>
                ),
                icon: "🔍"
              },
              {
                q: "Can Intellects guarantee #1 ranking on Google?",
                a: "No professional SEO company can guarantee the #1 ranking due to algorithm changes and competition. However, Intellects follows proven strategies to improve visibility, organic traffic, and overall search performance.",
                icon: "🏆"
              },
              {
                q: "How do you track and measure SEO success?",
                a: "We use analytics and reporting tools to track website traffic, keyword rankings, conversion rates, bounce rates, and user engagement. This helps us continuously optimize your SEO strategy for better results.",
                icon: "📊"
              },
              {
                q: "Do I need SEO if I'm already running paid ads?",
                a: "Yes. SEO complements paid ads by generating organic traffic, reducing dependency on ads, and providing long-term visibility and brand credibility.",
                icon: "💡"
              },
              {
                q: "Will SEO work for local businesses?",
                a: "Absolutely. Local SEO targets location-specific searches, helping your business appear in local listings and maps, driving nearby customers to your website or physical store.",
                icon: "📍"
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                className={i === 6 ? "lg:col-span-2" : ""}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: false }}
              >
                <FAQItem faq={faq} index={i} />
              </motion.div>
            ))}
        </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.div
        className="px-6 md:px-12 max-w-7xl mx-auto py-16 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: false }}
      >
        <div className="rounded-3xl p-10 md:p-12 text-center shadow-2xl relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #4C1D95, #1F2937)' }}>
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Ready to Dominate Search Rankings and Drive Real Results?
            </h3>

            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's boost your online visibility and transform your website into a powerful growth engine.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="px-10 py-4 bg-white font-bold rounded-xl shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300 flex items-center gap-2 group" style={{ color: '#4C1D95' }}>
                Get Started Today <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-purple-900 transition-all duration-300 hover:scale-105">
                Request SEO Audit
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
