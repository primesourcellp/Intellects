import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaBriefcase, FaIndustry, FaClipboardList, FaChartLine } from "react-icons/fa";

export default function StaffingServices() {
  const staffingSolutions = [
    "Permanent staffing",
    "Contract and temporary staffing",
    "Project-based hiring",
    "Remote and offshore staffing",
    "Executive and leadership hiring"
  ];

  const benefits = [
    "Access to pre-vetted global talent",
    "Faster recruitment turnaround",
    "Reduced hiring costs and risks"
  ];

  const industries = [
    "Information Technology & Software Development",
    "Engineering & Manufacturing",
    "Finance, Sales & Marketing",
    "Healthcare & Life Sciences",
    "HR & Administrative Services"
  ];

  const process = [
    "Requirement analysis and job profiling",
    "Candidate sourcing and screening",
    "Interview coordination and evaluation",
    "Background checks and onboarding support"
  ];

  const dataDriven = [
    "Predictive hiring insights",
    "Candidate performance metrics",
    "Continuous feedback and improvement"
  ];

  const support = [
    "Performance monitoring",
    "HR consulting and support",
    "Contract renewals and compliance management"
  ];

  const faqs = [
    {
      q: "What types of staffing services do you offer?",
      a: "We provide permanent, contract, temporary, project-based, and offshore staffing solutions for businesses of all sizes."
    },
    {
      q: "How do you ensure candidate quality?",
      a: "Every candidate undergoes skill evaluation, background verification, and cultural fit assessments before shortlisting."
    },
    {
      q: "Can you provide staffing for urgent or bulk requirements?",
      a: "Yes. Our global database and quick turnaround process allow us to meet both urgent and large-scale staffing needs."
    },
    {
      q: "Do you handle employee onboarding and documentation?",
      a: "Yes, Intellects manages the onboarding process, including offer letters, documentation, and compliance checks."
    },
    {
      q: "What industries do you specialize in?",
      a: "We specialize in IT, Engineering, Healthcare, Finance, Sales, and Administrative staffing."
    }
  ];

  const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-white text-slate-800">

      {/* Hero Section */}
      <motion.section
        className="text-center py-20 bg-gradient-to-b from-green-50 to-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
        <FaBriefcase className="mx-auto text-green-600 text-5xl mb-4 animate-bounce" />
        <h1 className="text-4xl font-bold mb-4">Staffing Services</h1>
        <p className="text-lg max-w-3xl mx-auto text-slate-700">
          Empowering businesses with the right people at the right time. Customized workforce solutions for permanent, contract, and project-based hiring.
        </p>
      </motion.section>

      {/* Staffing Solutions */}
      <motion.section className="py-16 max-w-6xl mx-auto px-4" initial="hidden" whileInView="visible">
        <h2 className="text-3xl font-semibold mb-8 text-center">Comprehensive Staffing Solutions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {staffingSolutions.map((item, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-green-50 rounded-2xl shadow-md hover:shadow-xl transition-all"
              variants={sectionVariant}
            >
              <FaUsers className="text-green-500 text-4xl mb-4" />
              <p>{item}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Benefits */}
      <motion.section className="py-16 bg-green-50" initial="hidden" whileInView="visible">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Key Benefits</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            {benefits.map((item, idx) => (
              <motion.li key={idx} variants={sectionVariant}>{item}</motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Industry Expertise */}
      <motion.section className="py-16" initial="hidden" whileInView="visible">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Industry-Focused Expertise</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            {industries.map((item, idx) => (
              <motion.li key={idx} variants={sectionVariant}>{item}</motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Recruitment Process */}
      <motion.section className="py-16 bg-green-50" initial="hidden" whileInView="visible">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Streamlined Hiring Process</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            {process.map((item, idx) => (
              <motion.li key={idx} variants={sectionVariant}>{item}</motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Data-Driven Recruitment */}
      <motion.section className="py-16" initial="hidden" whileInView="visible">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Data-Driven Recruitment</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            {dataDriven.map((item, idx) => (
              <motion.li key={idx} variants={sectionVariant}>{item}</motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Ongoing Support */}
      <motion.section className="py-16 bg-green-50" initial="hidden" whileInView="visible">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Ongoing Support & Workforce Management</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            {support.map((item, idx) => (
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
                className="p-6 bg-green-50 rounded-xl shadow-md hover:shadow-lg transition-all"
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
