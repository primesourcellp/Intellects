import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaGlobe, FaUserTie, FaIndustry, FaHandsHelping, FaChartBar, 
  FaPlus, FaMinus, FaSearch, FaRocket, FaExchangeAlt, FaBalanceScale 
} from "react-icons/fa";

// ===============================================
// ✅ FIX: Defined the FAQItem component here 
// ===============================================
const FAQItem = ({ faq, index, itemVariant }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      key={index}
      className="rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer overflow-hidden bg-white border border-green-200"
      variants={itemVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div 
        className="p-5 flex justify-between items-center bg-green-50 hover:bg-green-100 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="font-semibold text-lg text-slate-800">{faq.q}</h4>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <FaMinus className="text-green-600" /> : <FaPlus className="text-green-600" />}
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="px-5 pb-5 pt-0"
          >
            <p className="text-slate-700 border-t border-green-200 pt-3">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};


export default function GlobalRecruitments() {
  const strategyPoints = [
    "Global candidate sourcing and shortlisting",
    "Skill-based and behavioral screening",
    "Multi-level interview coordination",
    "Cultural and organizational fit assessment"
  ];

  const benefits = [
    "Access to global talent pools",
    "Reduced hiring time and costs",
    "Improved retention and performance"
  ];

  const industryExpertise = [
    "IT & Software Development",
    "Engineering & Manufacturing",
    "Healthcare & Life Sciences",
    "Finance, Sales & Marketing",
    "HR & Administration"
  ];

  const recruitmentProcess = [
    "Job description creation and optimization",
    "Candidate communication and interview scheduling",
    "Offer negotiation and documentation support",
    "Post-placement follow-up"
  ];

  const dataDriven = [
    "Candidate scoring and ranking systems",
    "Hiring funnel analysis",
    "Predictive analytics for talent retention"
  ];

  const continuousSupport = [
    "Workforce planning and scalability",
    "Global mobility and relocation assistance",
    "Compliance with labor and visa regulations"
  ];

  const faqs = [
    {
      q: "What regions do you recruit from?",
      a: "We source candidates globally, focusing on regions like Asia, Europe, the Middle East, and North America based on client requirements."
    },
    {
      q: "Can you handle remote and hybrid roles?",
      a: "Yes, we recruit for onsite, remote, and hybrid positions across multiple industries."
    },
    {
      q: "How do you ensure quality in hiring?",
      a: "Through a structured screening process, skill validation, and thorough background checks before presenting candidates."
    },
    {
      q: "What industries do you specialize in?",
      a: "We have expertise across IT, Engineering, Healthcare, Finance, and Administrative roles."
    },
    {
      q: "Do you assist with relocation or visa processing?",
      a: "Yes, we offer complete support for global mobility, including visa documentation and relocation assistance."
    }
  ];

  // Map for dynamic icons in the Industry Expertise section
  const industryIconMap = {
    "IT & Software Development": FaRocket,
    "Engineering & Manufacturing": FaIndustry,
    "Healthcare & Life Sciences": FaHandsHelping,
    "Finance, Sales & Marketing": FaChartBar,
    "HR & Administration": FaUserTie,
  };

  // Framer Motion Variants
  const itemVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };
  
  // Variant for the main list items to use a staggered grid layout 
  const cardVariant = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  }


  return (
    <div className="bg-white text-slate-800">

      {/* Hero Section */}
      <motion.section
        className="text-center py-24 bg-gradient-to-br from-green-50 to-white overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.3
            }
          }
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.5 },
            visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
          }}
        >
          {/* Animated Globe Icon */}
          <FaGlobe className="mx-auto text-green-600 text-7xl mb-4 p-3 rounded-full bg-white shadow-xl" />
        </motion.div>
        <motion.h1 
          className="text-5xl font-extrabold mb-4 text-slate-900"
          variants={itemVariant}
        >
          Global Recruitments
        </motion.h1>
        <motion.p 
          className="text-xl max-w-3xl mx-auto text-slate-700"
          variants={itemVariant}
        >
          Connecting **global talent** with the right opportunities. Find skilled professionals worldwide to fit your business needs.
        </motion.p>
        <motion.button
          className="mt-8 px-10 py-4 bg-green-600 text-white font-bold rounded-full text-lg shadow-xl hover:bg-green-700 transition-colors"
          whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.3)" }}
          whileTap={{ scale: 0.95 }}
          variants={itemVariant}
        >
          Start Your Global Search
        </motion.button>
      </motion.section>

      {/* --- */}

      {/* Strategy Points (Grid with Cards) */}
      <motion.section 
        className="py-16 max-w-6xl mx-auto px-4" 
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <h2 className="text-4xl font-bold mb-10 text-center text-slate-800">Strategic Talent Acquisition Pipeline</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {strategyPoints.map((item, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-white rounded-xl shadow-lg border-b-4 border-green-500 hover:shadow-2xl transition-all flex items-start space-x-4 cursor-pointer"
              variants={cardVariant}
              whileHover={{ y: -5 }} // Subtle lift
            >
              <FaSearch className="text-green-500 text-3xl flex-shrink-0 mt-1" />
              <p className="text-lg font-medium">{item}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* --- */}

      {/* Benefits */}
      <motion.section 
        className="py-16 bg-green-50" 
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Key Benefits of Global Partnership</h2>
          <motion.ul className="list-none text-slate-700 space-y-3">
            {benefits.map((item, idx) => (
              <motion.li 
                key={idx} 
                className="p-4 bg-white rounded-lg shadow-sm font-medium border-l-4 border-green-400 flex items-center justify-center space-x-2"
                variants={itemVariant}
                whileHover={{ scale: 1.02 }}
              >
                <FaHandsHelping className="text-xl text-green-600" />
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.section>

      {/* --- */}

      {/* Industry Expertise */}
      <motion.section 
        className="py-16" 
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Industry-Specific Recruitment Expertise</h2>
          <motion.ul className="list-none text-slate-700 space-y-3">
            {industryExpertise.map((item, idx) => {
              const IconComponent = industryIconMap[item] || FaIndustry;
              return (
                <motion.li 
                  key={idx} 
                  className="p-4 bg-gray-50 rounded-lg shadow-sm font-medium border-l-4 border-blue-400 flex items-center justify-center space-x-2"
                  variants={itemVariant}
                  whileHover={{ scale: 1.02 }}
                >
                  <IconComponent className="text-xl text-blue-600" />
                  <span>{item}</span>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </motion.section>

      {/* --- */}

      {/* Recruitment Process */}
      <motion.section 
        className="py-16 bg-green-50" 
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">End-to-End Recruitment Support</h2>
          <motion.ul className="list-none text-slate-700 space-y-3">
            {recruitmentProcess.map((item, idx) => (
              <motion.li 
                key={idx} 
                className="p-4 bg-white rounded-lg shadow-sm font-medium border-l-4 border-red-400 flex items-center justify-center space-x-2"
                variants={itemVariant}
                whileHover={{ scale: 1.02 }}
              >
                <FaExchangeAlt className="text-xl text-red-600" />
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.section>

      {/* --- */}

      {/* Data-Driven */}
      <motion.section 
        className="py-16" 
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Data-Driven Hiring Decisions</h2>
          <motion.ul className="list-none text-slate-700 space-y-3">
            {dataDriven.map((item, idx) => (
              <motion.li 
                key={idx} 
                className="p-4 bg-gray-50 rounded-lg shadow-sm font-medium border-l-4 border-purple-400 flex items-center justify-center space-x-2"
                variants={itemVariant}
                whileHover={{ scale: 1.02 }}
              >
                <FaChartBar className="text-xl text-purple-600" />
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.section>

      {/* --- */}

      {/* Continuous Support */}
      <motion.section 
        className="py-16 bg-green-50" 
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Continuous Support & Global Compliance</h2>
          <motion.ul className="list-none text-slate-700 space-y-3">
            {continuousSupport.map((item, idx) => (
              <motion.li 
                key={idx} 
                className="p-4 bg-white rounded-lg shadow-sm font-medium border-l-4 border-yellow-400 flex items-center justify-center space-x-2"
                variants={itemVariant}
                whileHover={{ scale: 1.02 }}
              >
                <FaBalanceScale className="text-xl text-yellow-600" />
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.section>

      {/* --- */}

      {/* FAQs (Toggle Implementation) */}
      <motion.section
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} faq={faq} index={idx} itemVariant={cardVariant} />
            ))}
          </div>
        </div>
      </motion.section>

    </div>
  );
}