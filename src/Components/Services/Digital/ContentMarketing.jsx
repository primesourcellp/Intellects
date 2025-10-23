import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaPenFancy, 
  FaChartLine, 
  FaBullhorn, 
  FaRegLightbulb, 
  FaSyncAlt, 
  FaPlus, 
  FaMinus,
  FaFeatherAlt,
  FaPalette,
  FaCheckCircle,
  FaBook,
  FaArrowRight,
} from "react-icons/fa";

// FAQ Item Component with Toggle
const FAQItem = ({ faq, index, sectionVariant }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      key={index}
      className="rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer overflow-hidden bg-white border-2"
      style={{ borderColor: '#4C1D95' }}
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div 
        className="p-6 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="font-bold text-lg text-gray-900">{faq.q}</h4>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="p-2 rounded-full"
          style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}
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
            <p className="text-gray-700 border-t-2 pt-4 leading-relaxed" style={{ borderColor: '#4C1D95' }}>{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function ContentMarketing() {
  const strategyPoints = [
    "Audience persona development",
    "Keyword and topic research",
    "Content calendar planning",
    "Channel selection and content mapping"
  ];

  const benefits = [
    "Clear content direction and consistency",
    "Stronger brand authority and trust",
    "Improved search visibility"
  ];

  const deliverables = [
    "Blog posts and articles",
    "Website and landing page content",
    "Product descriptions and service pages",
    "Press releases and newsletters"
  ];

  const visuals = [
    "Infographics and data visuals",
    "Social media creatives and carousels",
    "Video scripts and storyboards"
  ];

  const performance = [
    "Content performance audits",
    "SEO tracking and ranking analysis",
    "Data-driven content improvement"
  ];

  const ongoingSupport = [
    "Regular content updates",
    "Style and tone consistency checks",
    "Editorial reviews and content repurposing"
  ];

  const faqs = [
    {
      q: "What types of content do you create?",
      a: "We create blogs, website content, articles, infographics, case studies, videos, and more based on your marketing goals."
    },
    {
      q: "How does content marketing help my business?",
      a: "It boosts visibility, improves SEO rankings, builds authority, and attracts high-quality leads organically."
    },
    {
      q: "How often should I publish new content?",
      a: "We recommend regular publishing — typically weekly or biweekly — depending on your business goals and audience engagement."
    },
    {
      q: "Do you provide SEO-optimized content?",
      a: "Yes, every piece of content we produce is optimized for search engines while maintaining natural, reader-friendly flow."
    },
    {
      q: "Can you help repurpose existing content?",
      a: "Absolutely. We audit and rework your current content to align with modern SEO and engagement standards."
    }
  ];

  const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

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
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=1920)' }}
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
          Content{" "}
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
            Marketing
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
          At <span className="font-semibold" style={{ color: '#4C1D95' }}>Intellects</span>, we craft words that inspire, inform, and convert. Build trust, authority, and engagement through powerful content.
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
              <span>Create Content</span>
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

      {/* Strategy */}
      <motion.section className="py-20 px-6 md:px-12 max-w-7xl mx-auto relative z-10" initial="hidden" whileInView="visible">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="px-6 py-2 bg-gradient-to-r from-purple-500 to-yellow-500 text-white text-sm font-bold rounded-full shadow-lg">
              CREATIVE STRATEGY
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
            Strategy-Driven Content{" "}
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
              Creation
            </motion.span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {strategyPoints.map((item, idx) => (
            <motion.div
              key={idx}
              className="group p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl border-2 border-purple-100 transition-all relative overflow-hidden"
              variants={sectionVariant}
              whileHover={{ y: -8 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-100 to-yellow-100 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10 flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <FaChartLine className="text-white text-2xl" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 font-medium leading-relaxed group-hover:text-gray-600 transition-colors">{item}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Benefits */}
      <motion.section className="py-20 px-6 md:px-12 max-w-6xl mx-auto relative z-10" initial="hidden" whileInView="visible">
        <div className="bg-gradient-to-br from-purple-50 to-yellow-50 rounded-3xl shadow-2xl overflow-hidden border-2 border-purple-100 p-12">
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-yellow-600 rounded-2xl mb-6 shadow-xl"
            >
              <FaBook className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-900">
              Key{" "}
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
                Benefits
              </motion.span>
            </h2>
          </div>
          <div className="space-y-4">
            {benefits.map((item, idx) => (
              <motion.div
                key={idx}
                variants={sectionVariant}
                className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <FaCheckCircle className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-700 font-semibold text-lg group-hover:text-gray-600 transition-colors">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Deliverables */}
      <motion.section className="py-20 px-6 md:px-12 max-w-7xl mx-auto relative z-10" initial="hidden" whileInView="visible">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
            Engaging and SEO-Optimized{" "}
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
              Content
            </motion.span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliverables.map((item, idx) => (
            <motion.div
              key={idx}
              variants={sectionVariant}
              className="group p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl border-l-4 border-purple-500 transition-all text-center"
              whileHover={{ y: -8 }}
            >
              <div className="inline-flex p-4 bg-gradient-to-br from-purple-50 to-yellow-50 rounded-2xl mb-4 group-hover:from-purple-100 group-hover:to-yellow-100 transition-colors">
                <FaPenFancy className="w-8 h-8 text-gray-600" />
        </div>
              <p className="text-gray-700 font-medium leading-relaxed group-hover:text-gray-600 transition-colors">{item}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FAQs */}
      <motion.section 
        className="py-20 px-6 md:px-12 max-w-6xl mx-auto relative z-10" 
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="px-6 py-2 bg-gray-900 text-white text-sm font-bold rounded-full shadow-lg">
              FAQ
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
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
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} faq={faq} index={idx} sectionVariant={sectionVariant} />
            ))}
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
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6 border-2 border-white/40"
            >
              <FaFeatherAlt className="w-10 h-10 text-white" />
            </motion.div>

            <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight max-w-5xl mx-auto">
              Ready to tell your story and create compelling content that drives engagement?
            </h3>

            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Create compelling content that resonates with your audience and drives meaningful engagement.
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
