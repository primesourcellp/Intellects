import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaProjectDiagram, FaIndustry, FaClipboardCheck, FaDollarSign } from "react-icons/fa";

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

  const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-white text-slate-800">

      {/* Hero */}
      <motion.section
        className="text-center py-20 bg-gradient-to-b from-blue-50 to-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
        <FaUsers className="mx-auto text-blue-600 text-5xl mb-4 animate-bounce" />
        <h1 className="text-4xl font-bold mb-4">Contract Staffing</h1>
        <p className="text-lg max-w-3xl mx-auto text-slate-700">
          Flexible workforce solutions for a dynamic business environment. Scale your team as needed without long-term commitments.
        </p>
      </motion.section>

      {/* Services */}
      <motion.section className="py-16 max-w-6xl mx-auto px-4" initial="hidden" whileInView="visible">
        <h2 className="text-3xl font-semibold mb-8 text-center">Scalable & Flexible Workforce Solutions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((item, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-blue-50 rounded-2xl shadow-md hover:shadow-xl transition-all"
              variants={sectionVariant}
            >
              <FaProjectDiagram className="text-blue-500 text-4xl mb-4" />
              <p>{item}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Benefits */}
      <motion.section className="py-16 bg-blue-50" initial="hidden" whileInView="visible">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Key Benefits</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            {benefits.map((item, idx) => (
              <motion.li key={idx} variants={sectionVariant}>{item}</motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Industries */}
      <motion.section className="py-16" initial="hidden" whileInView="visible">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Expertise Across Industries</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            {industries.map((item, idx) => (
              <motion.li key={idx} variants={sectionVariant}>{item}</motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Staffing Process */}
      <motion.section className="py-16 bg-blue-50" initial="hidden" whileInView="visible">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">End-to-End Staffing Management</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            {staffingProcess.map((item, idx) => (
              <motion.li key={idx} variants={sectionVariant}>{item}</motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Cost & Transparency */}
      <motion.section className="py-16" initial="hidden" whileInView="visible">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Cost-Effective & Transparent Process</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            {costEffectiveness.map((item, idx) => (
              <motion.li key={idx} variants={sectionVariant}>{item}</motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Continuous Support */}
      <motion.section className="py-16 bg-blue-50" initial="hidden" whileInView="visible">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Continuous Support & Partnership</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            {continuousSupport.map((item, idx) => (
              <motion.li key={idx} variants={sectionVariant}>{item}</motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* FAQs */}
      <motion.section className="py-16" initial="hidden" whileInView="visible">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                className="p-6 bg-blue-50 rounded-xl shadow-md hover:shadow-lg transition-all"
                variants={sectionVariant}
              >
                <h4 className="font-semibold mb-2">{faq.q}</h4>
                <p className="text-slate-700">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

    </div>
  );
}
