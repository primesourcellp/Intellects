import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaChartLine, FaBullhorn, FaRegLightbulb, FaSyncAlt } from "react-icons/fa";

export default function EmailMarketing() {
  const strategyPoints = [
    "Audience segmentation and profiling",
    "Campaign goal setting and automation setup",
    "A/B testing for subject lines and content",
    "Scheduling for optimal delivery times"
  ];

  const benefits = [
    "Higher open and click-through rates",
    "Improved lead nurturing and conversions",
    "Enhanced customer retention"
  ];

  const creative = [
    "Eye-catching templates and responsive layouts",
    "Compelling subject lines and call-to-actions",
    "Personalized email sequences for better engagement"
  ];

  const automation = [
    "Welcome and onboarding sequences",
    "Abandoned cart reminders",
    "Lead nurturing and follow-up emails",
    "Re-engagement campaigns"
  ];

  const performance = [
    "Open and click rates",
    "Conversion metrics",
    "Unsubscribe and bounce rates",
    "Campaign ROI reports"
  ];

  const ongoingSupport = [
    "Regular performance reviews",
    "Content updates and automation tuning",
    "Strategy consultation for future campaigns"
  ];

  const faqs = [
    {
      q: "What types of email campaigns do you manage?",
      a: "We handle newsletters, promotional emails, onboarding sequences, product launches, and re-engagement campaigns."
    },
    {
      q: "How often should I send marketing emails?",
      a: "It depends on your audience and goals, but we typically recommend 1–3 targeted emails per week."
    },
    {
      q: "Do you use automation tools?",
      a: "Yes. We work with tools like Mailchimp, HubSpot, ActiveCampaign, and others to automate and optimize your email marketing."
    },
    {
      q: "How do you ensure emails don’t go to spam?",
      a: "We follow industry best practices — including verified sender domains, optimized subject lines, and proper HTML formatting."
    },
    {
      q: "Can you help design email templates?",
      a: "Absolutely. We design mobile-responsive templates that match your brand identity and marketing goals."
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
        <FaEnvelope className="mx-auto text-blue-600 text-5xl mb-4 animate-bounce" />
        <h1 className="text-4xl font-bold mb-4">Email Marketing</h1>
        <p className="text-lg max-w-3xl mx-auto text-slate-700">
          Connect, nurture, and convert with precision communication. Reach the right audience at the right time.
        </p>
      </motion.section>

      {/* Strategy */}
      <motion.section className="py-16 max-w-6xl mx-auto px-4" initial="hidden" whileInView="visible">
        <h2 className="text-3xl font-semibold mb-8 text-center">Targeted Email Campaign Strategy</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {strategyPoints.map((item, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-blue-50 rounded-2xl shadow-md hover:shadow-xl transition-all"
              variants={sectionVariant}
            >
              <FaChartLine className="text-blue-500 text-4xl mb-4" />
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

      {/* Creative Design */}
      <motion.section className="py-16" initial="hidden" whileInView="visible">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Creative Email Design & Copywriting</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            {creative.map((item, idx) => (
              <motion.li key={idx} variants={sectionVariant}>{item}</motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Automation */}
      <motion.section className="py-16 bg-blue-50" initial="hidden" whileInView="visible">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Automation & Workflow Optimization</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            {automation.map((item, idx) => (
              <motion.li key={idx} variants={sectionVariant}>{item}</motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Performance */}
      <motion.section className="py-16" initial="hidden" whileInView="visible">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Performance Tracking & Reporting</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            {performance.map((item, idx) => (
              <motion.li key={idx} variants={sectionVariant}>{item}</motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Ongoing Support */}
      <motion.section className="py-16 bg-blue-50" initial="hidden" whileInView="visible">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Continuous Optimization & Support</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            {ongoingSupport.map((item, idx) => (
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
