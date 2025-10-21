import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUsers, FaProjectDiagram, FaIndustry, FaClipboardCheck, FaDollarSign, FaPlus, FaMinus, FaRocket, FaHandshake, FaGavel } from "react-icons/fa";

// Component for a single FAQ item with toggle functionality
const FAQItem = ({ faq, index, sectionVariant }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      key={index}
      className="rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer overflow-hidden bg-blue-50"
      variants={sectionVariant}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="p-5 flex justify-between items-center">
        <h4 className="font-semibold text-lg">{faq.q}</h4>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <FaMinus className="text-blue-600" /> : <FaPlus className="text-blue-600" />}
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-5 pb-5 pt-0"
          >
            <p className="text-slate-700 border-t border-blue-200 pt-3">{faq.a}</p>
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

  // New section data for core values
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
      color: "text-purple-500"
    },
    {
      title: "Strategic Partnership",
      icon: FaHandshake,
      description: "We work as an extension of your HR team, providing consulting and continuous support beyond simple placement.",
      color: "text-green-500"
    }
  ];

  // Framer Motion Variants
  const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const itemVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  };

  return (
    <div className="bg-white text-slate-800">

      {/* Hero Section */}
      <motion.section
        className="text-center py-20 bg-gradient-to-b from-blue-100/70 to-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaUsers className="mx-auto text-blue-600 text-6xl mb-4" />
        </motion.div>
        <h1 className="text-5xl font-extrabold mb-4 text-slate-900">Contract Staffing</h1>
        <p className="text-xl max-w-3xl mx-auto text-slate-700">
          **Flexible workforce solutions** for a dynamic business environment. Scale your team as needed without long-term commitments.
        </p>
        <motion.button
          className="mt-8 px-8 py-3 bg-blue-600 text-white font-bold rounded-full text-lg shadow-lg hover:bg-blue-700 transition-colors"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
          whileTap={{ scale: 0.95 }}
        >
          Request a Consultation
        </motion.button>
      </motion.section>

      {/* --- */}

      {/* Core Aspects - New Section */}
      <motion.section
        className="py-16 max-w-7xl mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <h2 className="text-4xl font-bold mb-12 text-center text-slate-800">Why Choose Contract Staffing?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreAspects.map((aspect, idx) => (
            <motion.div
              key={idx}
              className="text-center p-8 bg-white rounded-2xl shadow-xl border-t-4 border-blue-500 hover:scale-[1.02] transition-transform"
              variants={sectionVariant}
            >
              <aspect.icon className={`mx-auto text-6xl mb-4 ${aspect.color}`} />
              <h3 className="text-xl font-semibold mb-3">{aspect.title}</h3>
              <p className="text-slate-600">{aspect.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* --- */}

      {/* Services */}
      <motion.section
        className="py-16 max-w-6xl mx-auto px-4 bg-blue-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-slate-800">Scalable & Flexible Workforce Solutions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((item, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow-md border-l-4 border-blue-500 hover:shadow-xl transition-all flex items-center space-x-4"
              variants={itemVariant}
            >
              <FaProjectDiagram className="text-blue-500 text-4xl flex-shrink-0" />
              <p className="text-lg font-medium">{item}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* --- */}

      {/* Benefits */}
      <motion.section
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Key Benefits</h2>
          <motion.ul className="list-none text-slate-700 space-y-3">
            {benefits.map((item, idx) => (
              <motion.li
                key={idx}
                className="p-3 bg-gray-50 rounded-lg shadow-sm font-medium border-l-4 border-blue-400"
                variants={itemVariant}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.section>

      {/* --- */}

      {/* Industries */}
      <motion.section
        className="py-16 bg-blue-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Expertise Across Industries</h2>
          <motion.ul className="list-none text-slate-700 space-y-3">
            {industries.map((item, idx) => (
              <motion.li
                key={idx}
                className="p-3 bg-white rounded-lg shadow-sm font-medium border-l-4 border-green-400"
                variants={itemVariant}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.section>

      {/* --- */}

      {/* Staffing Process */}
      <motion.section
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">End-to-End Staffing Management</h2>
          <motion.ul className="list-none text-slate-700 space-y-3">
            {staffingProcess.map((item, idx) => (
              <motion.li
                key={idx}
                className="p-3 bg-gray-50 rounded-lg shadow-sm font-medium border-l-4 border-red-400"
                variants={itemVariant}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.section>

      {/* --- */}

      {/* Cost & Transparency */}
      <motion.section
        className="py-16 bg-blue-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Cost-Effective & Transparent Process</h2>
          <motion.ul className="list-none text-slate-700 space-y-3">
            {costEffectiveness.map((item, idx) => (
              <motion.li
                key={idx}
                className="p-3 bg-white rounded-lg shadow-sm font-medium border-l-4 border-yellow-400"
                variants={itemVariant}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.section>

      {/* --- */}

      {/* Continuous Support */}
      <motion.section
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Continuous Support & Partnership</h2>
          <motion.ul className="list-none text-slate-700 space-y-3">
            {continuousSupport.map((item, idx) => (
              <motion.li
                key={idx}
                className="p-3 bg-gray-50 rounded-lg shadow-sm font-medium border-l-4 border-cyan-400"
                variants={itemVariant}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.section>

      {/* --- */}

      {/* FAQs (Toggle Implementation) */}
      <motion.section
        className="py-16 bg-blue-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} faq={faq} index={idx} sectionVariant={sectionVariant} />
            ))}
          </div>
        </div>
      </motion.section>

    </div>
  );
}