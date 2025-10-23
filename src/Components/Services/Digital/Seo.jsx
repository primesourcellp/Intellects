import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaSearch, 
  FaChartLine, 
  FaLink, 
  FaUsers, 
  FaPlus, 
  FaMinus,
  FaLeaf,
  FaSeedling,
  FaCheckCircle,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";

// FAQ Item Component with Toggle
const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      key={index}
      className="rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer overflow-hidden bg-white border-2"
      style={{ borderColor: '#4C1D95' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
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

export default function SEO() {
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
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=1920)' }}
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
          SEO{" "}
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
            Services
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
          At <span className="font-semibold" style={{ color: '#4C1D95' }}>Intellects</span>, we help businesses rank higher, drive organic traffic, and achieve sustainable growth through data-driven SEO strategies.
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
              <span>Get Started</span>
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

      {/* Keyword Strategy Section */}
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
            <span className="px-6 py-2 bg-gradient-to-r from-purple-500 to-emerald-500 text-white text-sm font-bold rounded-full shadow-lg">
              STRATEGIC APPROACH
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
            Comprehensive Keyword{" "}
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
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <FaSearch className="text-white text-5xl" />,
              title: "Keyword Research & Analysis",
              desc: "Discover valuable opportunities to attract targeted traffic.",
              gradient: "from-purple-500 to-emerald-600",
            },
            {
              icon: <FaChartLine className="text-white text-5xl" />,
              title: "Competitor Analysis",
              desc: "Understand market trends and outperform competitors.",
              gradient: "from-emerald-500 to-teal-600",
            },
            {
              icon: <FaUsers className="text-white text-5xl" />,
              title: "Long-Tail & Local Keywords",
              desc: "Target specific search queries for better engagement.",
              gradient: "from-teal-500 to-purple-600",
            },
            {
              icon: <FaLink className="text-white text-5xl" />,
              title: "Continuous Monitoring",
              desc: "Refine keywords based on analytics and results.",
              gradient: "from-lime-500 to-emerald-600",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden border-2 border-purple-100"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                  <div className="bg-white/20 backdrop-blur-sm p-5 rounded-2xl border-2 border-white/40">
                    {item.icon}
                  </div>
                </div>
              </div>

              <div className="p-6 text-center">
                <h3 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-gray-600 transition-colors">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>

              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* SEO Optimization Sections */}
      <motion.section
        className="py-20 px-6 md:px-12 max-w-7xl mx-auto relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
            SEO Optimization{" "}
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
              Areas
            </motion.span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "On-Page SEO",
              items: ["Meta Tags & Headings", "URL Structure", "Content Optimization", "Internal Linking"],
              color: "green",
            },
            {
              title: "Technical SEO",
              items: ["Mobile-Friendly Design", "Site Speed Optimization", "Crawlability & Indexing", "Structured Data & Schema Markup"],
              color: "emerald",
            },
            {
              title: "Off-Page SEO",
              items: ["High-Quality Backlinks", "Guest Posting & Outreach", "Social Signals", "Brand Mentions"],
              color: "teal",
            },
            {
              title: "Analytics & Improvement",
              items: ["Traffic & Engagement Analysis", "Ranking Reports", "Conversion Optimization", "Ongoing Strategy Updates"],
              color: "lime",
            },
          ].map((section, i) => (
            <motion.div
              key={i}
              className={`group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl border-2 border-${section.color}-200 hover:border-${section.color}-400 transition-all`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br from-${section.color}-500 to-${section.color}-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <FaLeaf className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-black text-2xl text-gray-800 group-hover:text-gray-600 transition-colors">{section.title}</h3>
              </div>
              <ul className="space-y-3">
                {section.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <FaCheckCircle className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FAQs Section */}
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
          {[
            {
              q: "What is SEO and why is it important for my business?",
              a: "SEO is the process of optimizing your website to rank higher in search engine results. It helps attract organic traffic, increase visibility, and convert visitors into customers."
            },
            {
              q: "In what timeframe can SEO improvements become visible?",
              a: "SEO is a long-term strategy. Typically, measurable improvements are seen within 3–6 months, depending on competition and website condition."
            },
            {
              q: "What is the difference between on-page and off-page SEO?",
              a: "On-page SEO optimizes website elements like content, headings, meta tags, and links. Off-page SEO builds authority through backlinks, social signals, and mentions."
            },
            {
              q: "Can Intellects guarantee #1 ranking on Google?",
              a: "No professional SEO company can guarantee #1 ranking due to algorithm changes. We use proven strategies to improve visibility and organic traffic."
            },
            {
              q: "Do I need SEO if I'm already running paid ads?",
              a: "Yes. SEO complements paid ads by generating organic traffic and providing long-term brand credibility."
            },
            {
              q: "Will SEO work for local businesses?",
              a: "Absolutely. Local SEO targets location-specific searches, helping businesses appear in local listings and maps."
            }
          ].map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
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
              <FaRocket className="w-10 h-10 text-white" />
            </motion.div>

            <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight max-w-5xl mx-auto">
              Ready to grow your organic traffic and dominate search rankings?
            </h3>

            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's boost your search rankings and drive more qualified leads to your business.
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
