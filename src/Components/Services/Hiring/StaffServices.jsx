import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaUsers, FaSearch, FaDollarSign, FaIndustry, FaChartLine, 
  FaCheckCircle, FaClipboardList, FaLaptopCode, FaPlus, FaMinus, 
  FaUserCheck, FaHandsHelping, FaBusinessTime, FaShieldAlt,
  FaUserTie, FaSyncAlt, FaChartBar, FaGlobe // FaGlobe was also missing from the list in your last response
} from "react-icons/fa";
// ===============================================
// Component for a single animated FAQ item
// ===============================================
const FAQItem = ({ faq, index, itemVariant }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      key={index}
      className="rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer overflow-hidden bg-white border border-indigo-200"
      variants={itemVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div 
        className="p-5 flex justify-between items-center bg-indigo-50 hover:bg-indigo-100 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="font-semibold text-lg text-slate-800">{faq.q}</h4>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <FaMinus className="text-indigo-600" /> : <FaPlus className="text-indigo-600" />}
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
            <p className="text-slate-700 border-t border-indigo-200 pt-3">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function StaffingServices() {
  
  // ===============================================
  // Data Consolidation
  // ===============================================
  const flexibleHiring = [
    { name: "Permanent Staffing", icon: FaUserCheck, color: "text-indigo-500" },
    { name: "Contract and Temporary Staffing", icon: FaBusinessTime, color: "text-green-500" },
    { name: "Project-Based Hiring", icon: FaClipboardList, color: "text-yellow-500" },
    { name: "Remote and Offshore Staffing", icon: FaLaptopCode, color: "text-red-500" },
    { name: "Executive and Leadership Hiring", icon: FaUserTie, color: "text-purple-500" },
  ];

  const keyBenefits = [
    { name: "Access to pre-vetted global talent", icon: FaGlobe, color: "text-indigo-600" },
    { name: "Faster recruitment turnaround", icon: FaChartLine, color: "text-green-600" },
    { name: "Reduced hiring costs and risks", icon: FaDollarSign, color: "text-yellow-600" },
  ];

  const industries = [
    { name: "Information Technology & Software Development", icon: FaLaptopCode, color: "text-blue-500" },
    { name: "Engineering & Manufacturing", icon: FaIndustry, color: "text-orange-500" },
    { name: "Finance, Sales & Marketing", icon: FaChartLine, color: "text-green-500" },
    { name: "Healthcare & Life Sciences", icon: FaHandsHelping, color: "text-red-500" },
    { name: "HR & Administrative Services", icon: FaUserTie, color: "text-purple-500" },
  ];

  const hiringProcessSteps = [
    { name: "Requirement analysis and job profiling", icon: FaSearch, color: "text-red-400" },
    { name: "Candidate sourcing and screening", icon: FaUsers, color: "text-blue-400" },
    { name: "Interview coordination and evaluation", icon: FaClipboardList, color: "text-green-400" },
    { name: "Background checks and onboarding support", icon: FaCheckCircle, color: "text-yellow-400" },
  ];
  
  const dataFocus = [
    { name: "Predictive hiring insights", icon: FaChartLine, color: "text-indigo-500" },
    { name: "Candidate performance metrics", icon: FaClipboardList, color: "text-teal-500" },
    { name: "Continuous feedback and improvement", icon: FaSyncAlt, color: "text-pink-500" },
  ];

  const ongoingSupport = [
    { name: "Performance monitoring", icon: FaChartBar, color: "text-green-600" },
    { name: "HR consulting and support", icon: FaHandsHelping, color: "text-blue-600" },
    { name: "Contract renewals and compliance management", icon: FaShieldAlt, color: "text-yellow-600" },
  ];

  const faqs = [
    { q: "What types of staffing services do you offer?", a: "We provide permanent, contract, temporary, project-based, and offshore staffing solutions for businesses of all sizes." },
    { q: "How do you ensure candidate quality?", a: "Every candidate undergoes skill evaluation, background verification, and cultural fit assessments before shortlisting." },
    { q: "Can you provide staffing for urgent or bulk requirements?", a: "Yes. Our global database and quick turnaround process allow us to meet both urgent and large-scale staffing needs." },
    { q: "Do you handle employee onboarding and documentation?", a: "Yes, Intellects manages the onboarding process, including offer letters, documentation, and compliance checks." },
    { q: "What industries do you specialize in?", a: "We specialize in IT, Engineering, Healthcare, Finance, Sales, and Administrative staffing." },
  ];

  // ===============================================
  // Framer Motion Variants
  // ===============================================
  const itemVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  
  const cardVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, duration: 0.6 } }
  }


  return (
    <div className="bg-white text-slate-800">

      {/* Hero Section */}
      <motion.section
        className="text-center py-24 bg-gradient-to-br from-indigo-50 to-white overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.5 },
            visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
          }}
        >
          <FaUsers className="mx-auto text-indigo-600 text-7xl mb-4 p-3 rounded-full bg-white shadow-xl" />
        </motion.div>
        <motion.h1 
          className="text-5xl font-extrabold mb-4 text-slate-900"
          variants={itemVariant}
        >
          Staffing Services
        </motion.h1>
        <motion.p 
          className="text-xl max-w-3xl mx-auto text-slate-700"
          variants={itemVariant}
        >
          Empowering Businesses with the **Right People at the Right Time**. We believe great organizations are built by great talent.
        </motion.p>
        <motion.button
          className="mt-8 px-10 py-4 bg-indigo-600 text-white font-bold rounded-full text-lg shadow-xl hover:bg-indigo-700 transition-colors"
          whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.3)" }}
          whileTap={{ scale: 0.95 }}
          variants={itemVariant}
        >
          Get Started - Find Your Talent
        </motion.button>
      </motion.section>

      {/* --------------------------------------- */}
      
      {/* Comprehensive Staffing Solutions (Flexible Hiring Options) */}
      <motion.section 
        className="py-16 max-w-7xl mx-auto px-4" 
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <h2 className="text-4xl font-bold mb-10 text-center text-slate-800">Comprehensive Staffing Solutions</h2>
        <p className="text-center text-lg max-w-3xl mx-auto mb-12 text-slate-600">Flexible Hiring Options for Every Business Need—short-term, long-term, and project-specific.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {flexibleHiring.map((solution, idx) => (
            <motion.div
              key={idx}
              className="text-center p-6 bg-white rounded-xl shadow-lg border-t-4 border-indigo-400 hover:shadow-2xl transition-all cursor-pointer"
              variants={cardVariant}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <solution.icon className={`mx-auto text-4xl mb-3 ${solution.color}`} />
              <h3 className="font-semibold text-lg">{solution.name}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* --------------------------------------- */}

      {/* Key Benefits */}
      <motion.section 
        className="py-16 bg-indigo-50" 
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Key Benefits</h2>
          <motion.ul className="list-none text-slate-700 space-y-3">
            {keyBenefits.map((item, idx) => (
              <motion.li 
                key={idx} 
                className="p-4 bg-white rounded-lg shadow-md font-medium border-l-4 border-indigo-400 flex items-center justify-center space-x-3"
                variants={itemVariant}
                whileHover={{ scale: 1.02 }}
              >
                <item.icon className={`text-xl ${item.color}`} />
                <span>{item.name}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.section>

      {/* --------------------------------------- */}

      {/* Industry-Focused Expertise */}
      <motion.section 
        className="py-16" 
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Industry-Focused Expertise</h2>
          <p className="text-lg mb-8 text-slate-600">Specialized Recruitment Across Multiple Sectors.</p>
          <motion.ul className="list-none text-slate-700 space-y-3">
            {industries.map((item, idx) => (
              <motion.li 
                key={idx} 
                className="p-4 bg-gray-50 rounded-lg shadow-sm font-medium border-l-4 border-teal-400 flex items-center justify-center space-x-3"
                variants={itemVariant}
                whileHover={{ scale: 1.02 }}
              >
                <item.icon className={`text-xl ${item.color}`} />
                <span>{item.name}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.section>

      {/* --------------------------------------- */}

      {/* Streamlined Hiring Process */}
      <motion.section 
        className="py-16 bg-indigo-50" 
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-10">Streamlined Hiring Process</h2>
          <p className="text-lg max-w-3xl mx-auto mb-12 text-slate-600">Efficiency from Start to Finish—ensuring you get the best talent without the stress.</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {hiringProcessSteps.map((step, idx) => (
              <motion.div
                key={idx}
                className="p-6 bg-white rounded-xl shadow-lg border-b-4 border-red-400 flex flex-col items-center hover:shadow-2xl transition-all"
                variants={cardVariant}
                whileHover={{ y: -5 }}
              >
                <div className={`text-5xl mb-3 p-3 rounded-full bg-red-50 ${step.color}`}>
                  <step.icon />
                </div>
                <h3 className="font-semibold text-lg mb-2">Step {idx + 1}</h3>
                <p className="text-sm text-slate-600">{step.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* --------------------------------------- */}

      {/* Data-Driven Recruitment */}
      <motion.section 
        className="py-16" 
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Data-Driven Recruitment</h2>
          <p className="text-lg mb-8 text-slate-600">Smart Hiring Backed by Analytics to reduce hiring time and improve retention.</p>
          <motion.ul className="list-none text-slate-700 space-y-3">
            {dataFocus.map((item, idx) => (
              <motion.li 
                key={idx} 
                className="p-4 bg-gray-50 rounded-lg shadow-sm font-medium border-l-4 border-purple-400 flex items-center justify-center space-x-3"
                variants={itemVariant}
                whileHover={{ scale: 1.02 }}
              >
                <item.icon className={`text-xl ${item.color}`} />
                <span>{item.name}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.section>

      {/* --------------------------------------- */}

      {/* Ongoing Support & Workforce Management */}
      <motion.section 
        className="py-16 bg-indigo-50" 
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ongoing Support & Workforce Management</h2>
          <p className="text-lg mb-8 text-slate-600">Your Trusted Partner in Long-Term Staffing Success.</p>
          <motion.ul className="list-none text-slate-700 space-y-3">
            {ongoingSupport.map((item, idx) => (
              <motion.li 
                key={idx} 
                className="p-4 bg-white rounded-lg shadow-sm font-medium border-l-4 border-pink-400 flex items-center justify-center space-x-3"
                variants={itemVariant}
                whileHover={{ scale: 1.02 }}
              >
                <item.icon className={`text-xl ${item.color}`} />
                <span>{item.name}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.section>

      {/* --------------------------------------- */}

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