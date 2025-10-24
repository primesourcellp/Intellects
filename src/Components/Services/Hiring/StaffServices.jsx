import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaUsers, 
  FaSearch, 
  FaDollarSign, 
  FaIndustry, 
  FaChartLine, 
  FaCheckCircle, 
  FaClipboardList, 
  FaLaptopCode, 
  FaPlus, 
  FaMinus, 
  FaUserCheck, 
  FaHandsHelping, 
  FaBusinessTime, 
  FaShieldAlt,
  FaUserTie, 
  FaSyncAlt, 
  FaChartBar, 
  FaGlobe,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";

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

// FAQ Item Component
const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      key={index}
      className="rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer overflow-hidden bg-white border-l-4"
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
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}
        >
          {isOpen ? <FaMinus className="text-white text-xs" /> : <FaPlus className="text-white text-xs" />}
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

export default function StaffingServices() {
  
  const flexibleHiring = [
    { name: "Permanent Staffing", icon: FaUserCheck, color: "text-gray-500" },
    { name: "Contract and Temporary Staffing", icon: FaBusinessTime, color: "text-blue-500" },
    { name: "Project-Based Hiring", icon: FaClipboardList, color: "text-gray-500" },
    { name: "Remote and Offshore Staffing", icon: FaLaptopCode, color: "text-violet-500" },
    { name: "Executive and Leadership Hiring", icon: FaUserTie, color: "text-gray-600" },
  ];

  const keyBenefits = [
    { name: "Access to pre-vetted global talent", icon: FaGlobe, color: "text-gray-600" },
    { name: "Faster recruitment turnaround", icon: FaChartLine, color: "text-blue-600" },
    { name: "Reduced hiring costs and risks", icon: FaDollarSign, color: "text-gray-600" },
  ];

  const industries = [
    { name: "Information Technology & Software Development", icon: FaLaptopCode, color: "text-blue-500" },
    { name: "Engineering & Manufacturing", icon: FaIndustry, color: "text-gray-500" },
    { name: "Finance, Sales & Marketing", icon: FaChartLine, color: "text-gray-500" },
    { name: "Healthcare & Life Sciences", icon: FaHandsHelping, color: "text-violet-500" },
    { name: "HR & Administrative Services", icon: FaUserTie, color: "text-gray-600" },
  ];

  const hiringProcessSteps = [
    { name: "Requirement analysis and job profiling", icon: FaSearch, color: "text-red-400" },
    { name: "Candidate sourcing and screening", icon: FaUsers, color: "text-blue-400" },
    { name: "Interview coordination and evaluation", icon: FaClipboardList, color: "text-gray-400" },
    { name: "Background checks and onboarding support", icon: FaCheckCircle, color: "text-gray-400" },
  ];
  
  const dataFocus = [
    { name: "Predictive hiring insights", icon: FaChartLine, color: "text-gray-500" },
    { name: "Candidate performance metrics", icon: FaClipboardList, color: "text-gray-500" },
    { name: "Continuous feedback and improvement", icon: FaSyncAlt, color: "text-blue-500" },
  ];

  const ongoingSupport = [
    { name: "Performance monitoring", icon: FaChartBar, color: "text-gray-600" },
    { name: "HR consulting and support", icon: FaHandsHelping, color: "text-blue-600" },
    { name: "Contract renewals and compliance management", icon: FaShieldAlt, color: "text-gray-600" },
  ];

  const faqs = [
    { q: "What types of staffing services do you offer?", a: "We provide permanent, contract, temporary, project-based, and offshore staffing solutions for businesses of all sizes." },
    { q: "How do you ensure candidate quality?", a: "Every candidate undergoes skill evaluation, background verification, and cultural fit assessments before shortlisting." },
    { q: "Can you provide staffing for urgent or bulk requirements?", a: "Yes. Our global database and quick turnaround process allow us to meet both urgent and large-scale staffing needs." },
    { q: "Do you handle employee onboarding and documentation?", a: "Yes, Intellects manages the onboarding process, including offer letters, documentation, and compliance checks." },
    { q: "What industries do you specialize in?", a: "We specialize in IT, Engineering, Healthcare, Finance, Sales, and Administrative staffing." },
  ];

  const itemVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  
  const cardVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, duration: 0.6 } }
  }


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
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920)' }}
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
          <TypingText text="Staffing " delay={0} />
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
            <TypingText text="Services" delay={630} />
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
          At <span className="font-semibold" style={{ color: '#4C1D95' }}>Intellects</span>, we empower businesses with the right people at the right time. We believe great organizations are built by great talent.
        </motion.p>
      </section>

      {/* Comprehensive Staffing Solutions */}
      <motion.section 
        className="py-20 px-6 md:px-12 max-w-7xl mx-auto relative z-10" 
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-600 text-white text-sm font-bold rounded-full shadow-lg">
              COMPREHENSIVE SOLUTIONS
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
            Comprehensive Staffing{" "}
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
              Solutions
            </motion.span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Flexible Hiring Options for Every Business Need—short-term, long-term, and project-specific.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {flexibleHiring.map((solution, idx) => (
            <motion.div
              key={idx}
              className="text-center p-8 bg-white rounded-3xl shadow-xl border-2 border-purple-100 hover:shadow-2xl transition-all"
              variants={cardVariant}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <solution.icon className={`mx-auto text-5xl mb-4 ${solution.color}`} />
              <h3 className="font-bold text-lg text-gray-800">{solution.name}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Key Benefits */}
      <motion.section 
        className="py-20 px-6 md:px-12 max-w-6xl mx-auto relative z-10" 
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <div className="bg-gradient-to-br from-purple-50 to-purple-50 rounded-3xl shadow-2xl overflow-hidden border-2 border-purple-100 p-12">
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-600 rounded-2xl mb-6 shadow-xl"
            >
              <FaRocket className="w-8 h-8 text-white" />
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
            {keyBenefits.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all group"
                variants={itemVariant}
                whileHover={{ scale: 1.02 }}
              >
                <item.icon className={`text-3xl ${item.color}`} />
                <span className="text-gray-700 font-semibold text-lg group-hover:text-gray-600 transition-colors">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Streamlined Hiring Process */}
      <motion.section 
        className="py-20 px-6 md:px-12 max-w-7xl mx-auto relative z-10" 
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
            Streamlined Hiring{" "}
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
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Efficiency from Start to Finish—ensuring you get the best talent without the stress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {hiringProcessSteps.map((step, idx) => (
            <motion.div
              key={idx}
              className="p-8 bg-white rounded-3xl shadow-xl border-2 border-purple-100 flex flex-col items-center hover:shadow-2xl transition-all text-center"
              variants={cardVariant}
              whileHover={{ y: -5 }}
            >
              <div className={`text-6xl mb-4 p-4 rounded-full bg-purple-50 ${step.color}`}>
                <step.icon />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">Step {idx + 1}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{step.name}</p>
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
            <FAQItem key={idx} faq={faq} index={idx} />
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
              Ready to build your dream team and transform your workforce strategy?
            </h3>

            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Partner with us to access top-tier talent and transform your workforce strategy.
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
