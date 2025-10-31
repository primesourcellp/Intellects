import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaUsers, 
  FaProjectDiagram, 
  FaIndustry, 
  FaClipboardCheck, 
  FaDollarSign, 
  FaPlus, 
  FaMinus, 
  FaRocket, 
  FaHandshake, 
  FaGavel,
  FaCheckCircle,
  FaBriefcase,
  FaArrowRight,
} from "react-icons/fa";
import gif2 from '../../../assets/gif_2.gif';
import staffing1Image from "../../../assets/staffing1.jpg";
import staffing2Image from "../../../assets/staffing2.jpg";
import staffing3Image from "../../../assets/staffing3.jpg";
import staffing4Image from "../../../assets/staffing4.jpg";

import { Link } from "react-router-dom";

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
      className="rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer overflow-hidden border-2 group"
      style={{ borderColor: isOpen ? '#4C1D95' : '#E5E7EB', backgroundColor: '#FFFFFF' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div 
        className="p-6 flex items-start gap-4 transition-colors"
        style={{ backgroundColor: '#FFFFFF' }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F3EFF9'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFFFFF'}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Icon */}
        <motion.div 
          className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ background: isOpen ? 'linear-gradient(135deg, #4C1D95, #7C3AED)' : 'linear-gradient(135deg, #E8E4F3, #F3EFF9)' }}
          animate={{ rotate: isOpen ? 360 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <faq.icon className={`text-xl ${isOpen ? 'text-white' : 'text-purple-600'}`} />
        </motion.div>

        {/* Question */}
        <h4 className="flex-1 font-bold text-lg" style={{ color: '#1F2937' }}>{faq.q}</h4>
        
        {/* Toggle Button */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
          style={{ background: isOpen ? 'linear-gradient(135deg, #4C1D95, #7C3AED)' : '#F3F4F6' }}
        >
          {isOpen ? (
            <FaMinus className="text-white text-xs" />
          ) : (
            <FaPlus className="text-gray-600 text-xs" />
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
            className="px-6 pb-6 pl-20"
          >
            <p className="leading-relaxed" style={{ color: '#374151' }}>{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function ContractStaffing() {
  const services = [
    "Short-term and long-term contract placements",
    "Project-based staffing",
    "Contract-to-hire recruitment",
    "Temporary replacement staffing"
  ];

  const benefits = [
    "Reduced recruitment and administrative costs",
    "Faster onboarding and deployment",
    "Access to specialized skills on demand"
  ];

  const industries = [
    "IT & Software Development",
    "Engineering & Construction",
    "Healthcare & Pharmaceuticals",
    "Finance, Sales & Operations",
    "Admin & Support Services"
  ];

  const staffingProcess = [
    "Candidate sourcing and screening",
    "Background verification and onboarding",
    "Payroll management and compliance",
    "Contract renewals and workforce tracking"
  ];

  const costEffectiveness = [
    "Transparent contract terms",
    "Regular performance feedback",
    "Optimized workforce utilization"
  ];

  const continuousSupport = [
    "Renewal and extension management",
    "Resource optimization consulting",
    "Compliance with local labor laws"
  ];

  const faqs = [
    {
      icon: FaBriefcase,
      q: "What is contract staffing?",
      a: "Contract staffing allows companies to hire professionals for specific projects or time periods without full-time employment commitments."
    },
    {
      icon: FaDollarSign,
      q: "What are the advantages of contract staffing?",
      a: "It provides flexibility, cost savings, and quick access to skilled professionals without long-term liabilities."
    },
    {
      icon: FaUsers,
      q: "Can contract staff be converted to permanent employees?",
      a: "Yes, we offer contract-to-hire solutions that allow clients to evaluate talent before offering permanent roles."
    },
    {
      icon: FaClipboardCheck,
      q: "Do you handle payroll and compliance?",
      a: "Absolutely. Intellects manages payroll, tax deductions, benefits, and all legal compliance on your behalf."
    },
    {
      icon: FaIndustry,
      q: "What industries do you provide contract staffing for?",
      a: "We provide contract staffing across IT, Engineering, Healthcare, Finance, and Administrative sectors."
    }
  ];

  const coreAspects = [
    {
      title: "Rapid Deployment",
      icon: FaRocket,
      description: "Get the right talent on your team fast to meet urgent project deadlines and immediate operational needs.",
      color: "text-red-500"
    },
    {
      title: "Zero Liability",
      icon: FaGavel,
      description: "Minimize long-term employment risk and administrative burdens, focusing purely on project success.",
      color: "text-gray-500"
    },
    {
      title: "Strategic Partnership",
      icon: FaHandshake,
      description: "We work as an extension of your HR team, providing consulting and continuous support beyond simple placement.",
      color: "text-green-500"
    }
  ];

  const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const itemVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  };

  return (
    <div className="min-h-screen text-gray-800" style={{ backgroundColor: '#F3EFF9' }}>
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full blur-3xl -top-48 -left-48 animate-pulse" style={{ background: 'radial-gradient(circle, #4C1D9520, #1F293715)' }}></div>
        <div className="absolute w-96 h-96 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000" style={{ background: 'radial-gradient(circle, #4C1D9520, #1F293715)' }}></div>
      </div>

      {/* Header Section */}
      <section
        className="relative py-20 md:py-32 px-6 md:px-12 lg:px-20 shadow-lg overflow-hidden"
        style={{ backgroundColor: '#F8F5FC' }}
      >
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          {/* Left Content */}
          <div className="text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
              style={{ color: '#000000' }}
            >
              <TypingText text="Contract Staffing" />
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-3xl font-semibold mb-6"
              style={{ color: '#4C1D95' }}
            >
              Flexible Workforce Solutions for a Dynamic Business Environment
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl font-light leading-relaxed"
              style={{ color: '#374151' }}
            >
              At Intellects, we understand that business needs change rapidly — and your workforce should adapt just as fast. Our Contract Staffing services provide companies with skilled professionals on a temporary, project-based, or contract-to-hire basis, helping you stay agile and efficient without long-term commitments.
            </motion.p>
          </div>

          {/* Right GIF */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <img
              src={gif2}
              alt="Contract Staffing"
              className="w-full h-auto max-w-lg rounded-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Scalable and Flexible Workforce Solutions */}
      <motion.section
        className="py-20 relative z-10 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col-reverse lg:flex-row items-center gap-20 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
          {/* Left Content */}
          <motion.div
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span className="px-7 py-2 bg-gradient-to-r from-purple-500 to-teal-500 text-white text-sm font-bold rounded-full shadow-lg">
                WORKFORCE SOLUTIONS
              </span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-5" style={{ color: '#000000' }}>
              Scalable and Flexible{" "}
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
                Workforce Solutions
              </motion.span>
            </h2>

            <h3 className="text-xl md:text-2xl font-semibold mb-6" style={{ color: '#4C1D95' }}>
              Hire Smart. Scale Fast. Stay Agile.
            </h3>

            <p className="text-lg leading-relaxed mb-8" style={{ color: '#374151' }}>
              Our contract staffing model is designed to help organizations respond quickly to changing market demands. We provide flexible hiring options that allow you to expand or reduce your workforce as needed — without the complexity of full-time employment.
            </p>
          </motion.div>

          {/* Right Points */}
          <motion.div
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
            {services.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaCheckCircle className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-800 font-medium text-lg">{item}</p>
              </motion.div>
            ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Key Benefits */}
      <motion.section
        className="py-20 relative z-10 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20"
          style={{ color: '#000000' }}
        >
          Key Benefits:
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
          {benefits.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-4 p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <FaCheckCircle className="w-7 h-7 text-white" />
              </div>
              <p className="text-gray-700 font-semibold text-lg text-center group-hover:text-gray-600 transition-colors">{item}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Expertise Across Industries */}
      <motion.section
        className="py-20 relative z-10 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-20 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
          {/* Left Content and Points - Image on mobile */}
          <motion.div
            className="lg:w-1/2 w-full flex justify-center lg:hidden"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img
              src={staffing1Image}
              alt="Industry Expertise"
              className="w-4/5 lg:w-3/4 rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span className="px-7 bg-gradient-to-r from-purple-500 to-teal-500 text-white text-sm py-2 font-bold rounded-full shadow-lg">
                INDUSTRY EXPERTISE
              </span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-5" style={{ color: '#000000' }}>
              Expertise Across{" "}
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
                Industries
              </motion.span>
            </h2>

            <h3 className="text-xl md:text-2xl font-semibold mb-6" style={{ color: '#4C1D95' }}>
              Talent That Fits Your Industry Needs
            </h3>

            <p className="text-lg leading-relaxed mb-8" style={{ color: '#374151' }}>
              We connect businesses with contract professionals across multiple domains. Our experienced recruiters understand industry-specific challenges and find candidates who can add value from day one.
            </p>

            <div className="space-y-6">
              {industries.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaCheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-800 font-medium text-lg">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image - Desktop only */}
          <motion.div
            className="lg:w-1/2 w-full hidden lg:flex justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img
              src={staffing1Image}
              alt="Industry Expertise"
              className="w-4/5 lg:w-3/4 rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* End-to-End Staffing Management */}
      <motion.section
        className="py-20 relative z-10 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-20 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
          {/* Left Image */}
          <motion.div
            className="lg:w-1/2 w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img
              src={staffing2Image}
              alt="Staffing Management"
              className="w-4/5 lg:w-3/4 rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* Right Content and Points */}
          <motion.div
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span className="px-7 bg-gradient-to-r from-purple-500 to-teal-500 text-white text-sm py-2 font-bold rounded-full shadow-lg">
                STAFFING MANAGEMENT
              </span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-5" style={{ color: '#000000' }}>
              End-to-End{" "}
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
                Staffing Management
              </motion.span>
            </h2>

            <h3 className="text-xl md:text-2xl font-semibold mb-6" style={{ color: '#4C1D95' }}>
              From Hiring to Compliance — We Handle It All
            </h3>

            <p className="text-lg leading-relaxed mb-8" style={{ color: '#374151' }}>
              Our team manages the entire contract staffing lifecycle, ensuring a seamless experience for both clients and candidates.
            </p>

            <div className="space-y-6">
              {staffingProcess.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaCheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-800 font-medium text-lg">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Cost-Effective and Transparent Process */}
      <motion.section
        className="py-20 relative z-10 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-20 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
          {/* Mobile Image First */}
          <motion.div
            className="lg:w-1/2 w-full flex justify-center lg:hidden"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img
              src={staffing3Image}
              alt="Cost-Effective Process"
              className="w-4/5 lg:w-3/4 rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* Left Content and Points */}
          <motion.div
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span className="px-7 bg-gradient-to-r from-teal-500 to-purple-500 text-white text-sm py-2 font-bold rounded-full shadow-lg">
                COST-EFFECTIVE
              </span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-5" style={{ color: '#000000' }}>
              Cost-Effective and{" "}
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
                Transparent Process
              </motion.span>
            </h2>

            <h3 className="text-xl md:text-2xl font-semibold mb-6" style={{ color: '#4C1D95' }}>
              Smart Staffing That Saves Time and Money
            </h3>

            <p className="text-lg leading-relaxed mb-8" style={{ color: '#374151' }}>
              We simplify workforce management by offering transparent pricing, easy reporting, and performance tracking. You get complete control and visibility while we handle the operational complexities.
            </p>

            <div className="space-y-6">
              {costEffectiveness.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaCheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-800 font-medium text-lg">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image - Desktop Only */}
          <motion.div
            className="lg:w-1/2 w-full hidden lg:flex justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img
              src={staffing3Image}
              alt="Cost-Effective Process"
              className="w-4/5 lg:w-3/4 rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Continuous Support & Partnership */}
      <motion.section
        className="py-20 relative z-10 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-20 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
          {/* Left Image */}
          <motion.div
            className="lg:w-1/2 w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img
              src={staffing4Image}
              alt="Continuous Support"
              className="w-4/5 lg:w-3/4 rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* Right Content and Points */}
          <motion.div
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span className="px-7 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm py-2 font-bold rounded-full shadow-lg">
                CONTINUOUS SUPPORT
              </span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-5" style={{ color: '#000000' }}>
              Continuous Support &{" "}
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
                Partnership
              </motion.span>
            </h2>

            <h3 className="text-xl md:text-2xl font-semibold mb-6" style={{ color: '#4C1D95' }}>
              Building Long-Term Workforce Relationships
            </h3>

            <p className="text-lg leading-relaxed mb-8" style={{ color: '#374151' }}>
              At Intellects, we go beyond placements. Our team maintains regular communication to ensure ongoing satisfaction, compliance, and workforce stability.
            </p>

            <div className="space-y-6">
              {continuousSupport.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaCheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-800 font-medium text-lg">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQs */}
      <motion.section
        className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden"
        style={{ backgroundColor: '#F3EFF9' }}
      >
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 rounded-full blur-3xl -top-48 -left-48 opacity-30" style={{ background: 'radial-gradient(circle, #4C1D95, transparent)' }}></div>
          <div className="absolute w-96 h-96 rounded-full blur-3xl -bottom-48 -right-48 opacity-30" style={{ background: 'radial-gradient(circle, #7C3AED, transparent)' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: '#000000' }}>
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
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
              Get answers to common questions about our contract staffing services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {faqs.map((faq, idx) => (
              <div key={idx} className={idx === 4 ? "lg:col-span-2" : ""}>
                <FAQItem faq={faq} index={idx} />
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.div
        className="px-6 md:px-12 max-w-7xl mx-auto py-12 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <div className="rounded-3xl p-8 md:p-10 text-center shadow-2xl relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #4C1D95, #1F2937)' }}>
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-5xl mx-auto">
              Ready to build a flexible workforce that scales with your business needs?
            </h3>

            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Scale your team dynamically with contract staffing solutions tailored to your business needs.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                className="group px-10 py-4 bg-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300 flex items-center gap-2"
                style={{ color: '#4C1D95' }}
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
