import React, { useState } from "react";
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

// FAQ Item Component
const FAQItem = ({ faq, index, sectionVariant }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      key={index}
      className="rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer overflow-hidden bg-white border-2"
      style={{ borderColor: '#4C1D95' }}
      variants={sectionVariant}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="p-6 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors">
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
            transition={{ duration: 0.3 }}
            className="px-6 pb-6 pt-2"
          >
            <p className="text-gray-700 border-t-2 pt-4 leading-relaxed" style={{ borderColor: '#4C1D95' }}>{faq.a}</p>
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
      q: "What is contract staffing?",
      a: "Contract staffing allows companies to hire professionals for specific projects or time periods without full-time employment commitments."
    },
    {
      q: "What are the advantages of contract staffing?",
      a: "It provides flexibility, cost savings, and quick access to skilled professionals without long-term liabilities."
    },
    {
      q: "Can contract staff be converted to permanent employees?",
      a: "Yes, we offer contract-to-hire solutions that allow clients to evaluate talent before offering permanent roles."
    },
    {
      q: "Do you handle payroll and compliance?",
      a: "Absolutely. Intellects manages payroll, tax deductions, benefits, and all legal compliance on your behalf."
    },
    {
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
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920)' }}
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
          Contract{" "}
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
            Staffing
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
          At <span className="font-semibold" style={{ color: '#4C1D95' }}>Intellects</span>, we provide flexible workforce solutions for a dynamic business environment. Scale your team as needed without long-term commitments.
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

      <motion.section
        className="relative py-24 text-center overflow-hidden hidden"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <motion.button
            className="px-10 py-4 bg-white text-gray-600 font-bold rounded-full text-lg shadow-2xl hover:bg-purple-50 transition-colors animate-pulse hover:animate-none"
            style={{ boxShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(14, 165, 233, 0.3)' }}
          whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
          whileTap={{ scale: 0.95 }}
        >
          Request a Consultation
        </motion.button>
        </div>
      </motion.section>

      {/* Core Aspects */}
      <motion.section
        className="py-20 px-6 md:px-12 max-w-7xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="px-6 py-2 bg-gray-900 text-white text-sm font-bold rounded-full shadow-lg">
              WHY CHOOSE US
            </span>
          </motion.div>
          
          <h3 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
            Why Clients Choose{" "}
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
              Intellects
            </motion.span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreAspects.map((aspect, idx) => (
            <motion.div
              key={idx}
              className="text-center p-10 bg-white rounded-3xl shadow-xl border-2 border-purple-100 hover:scale-[1.02] transition-transform"
              variants={sectionVariant}
            >
              <aspect.icon className={`mx-auto text-6xl mb-6 ${aspect.color}`} />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{aspect.title}</h3>
              <p className="text-gray-600 leading-relaxed">{aspect.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Services */}
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
            <span className="px-6 py-2 bg-gray-900 text-white text-sm font-bold rounded-full shadow-lg">
              OUR SOLUTIONS
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
            Scalable & Flexible Workforce{" "}
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
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((item, idx) => (
            <motion.div
              key={idx}
              className="group p-8 bg-white rounded-3xl shadow-xl border-2 border-purple-100 hover:shadow-2xl transition-all flex items-center space-x-4"
              variants={itemVariant}
            >
              <FaProjectDiagram className="text-gray-500 text-4xl flex-shrink-0" />
              <p className="text-lg font-medium text-gray-700 group-hover:text-gray-600 transition-colors">{item}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Benefits */}
      <motion.section
        className="py-20 px-6 md:px-12 max-w-6xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl shadow-2xl overflow-hidden border-2 border-purple-100 p-12">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span className="px-6 py-2 bg-gray-900 text-white text-sm font-bold rounded-full shadow-lg">
                OUR BENEFITS
              </span>
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
                className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all group"
                variants={itemVariant}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <FaCheckCircle className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-700 font-semibold text-lg group-hover:text-gray-600 transition-colors">{item}</p>
              </motion.div>
            ))}
          </div>
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
              <FaRocket className="w-10 h-10 text-white" />
            </motion.div>

            <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight max-w-5xl mx-auto">
              Ready to build a flexible workforce that scales with your business needs?
            </h3>

            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Scale your team dynamically with contract staffing solutions tailored to your business needs.
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
