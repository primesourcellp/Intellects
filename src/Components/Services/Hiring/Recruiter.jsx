import React from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaUserTie, FaIndustry, FaHandsHelping, FaChartBar } from "react-icons/fa";

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

  const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-white text-slate-800">

      {/* Hero */}
      <motion.section
        className="text-center py-20 bg-gradient-to-b from-primary-lightest to-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
        <FaGlobe className="mx-auto text-primary-medium text-5xl mb-4 animate-bounce" />
        <h1 className="text-4xl font-bold mb-4">Global Recruitments</h1>
        <p className="text-lg max-w-3xl mx-auto text-slate-700">
          Connecting global talent with the right opportunities. Find skilled professionals worldwide to fit your business needs.
        </p>
      </motion.section>

      {/* Strategy */}
      <motion.section className="py-16 max-w-6xl mx-auto px-4" initial="hidden" whileInView="visible">
        <h2 className="text-3xl font-semibold mb-8 text-center">Strategic Talent Acquisition</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {strategyPoints.map((item, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-green-50 rounded-2xl shadow-md hover:shadow-xl transition-all"
              variants={sectionVariant}
            >
              <FaUserTie className="text-primary-medium text-4xl mb-4" />
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
          <h2 className="text-3xl font-semibold mb-6">Industry-Specific Recruitment Expertise</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            {industryExpertise.map((item, idx) => (
              <motion.li key={idx} variants={sectionVariant}>{item}</motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Recruitment Process */}
      <motion.section className="py-16 bg-green-50" initial="hidden" whileInView="visible">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">End-to-End Recruitment Support</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            {recruitmentProcess.map((item, idx) => (
              <motion.li key={idx} variants={sectionVariant}>{item}</motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Data-Driven */}
      <motion.section className="py-16" initial="hidden" whileInView="visible">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Data-Driven Hiring Decisions</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            {dataDriven.map((item, idx) => (
              <motion.li key={idx} variants={sectionVariant}>{item}</motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Continuous Support */}
      <motion.section className="py-16 bg-green-50" initial="hidden" whileInView="visible">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Continuous Support & Global Compliance</h2>
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
