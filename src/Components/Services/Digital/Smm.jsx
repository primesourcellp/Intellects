import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaChartLine, FaBullhorn, FaPenFancy, FaSyncAlt } from "react-icons/fa";

export default function SMM() {
  const managementPoints = [
    "Social media strategy planning",
    "Monthly content calendar & post scheduling",
    "Page management and audience engagement",
    "Hashtag research and trend optimization"
  ];

  const benefits = [
    "Consistent brand visibility",
    "Stronger customer relationships",
    "Increased traffic and lead generation"
  ];

  const adServices = [
    "Campaign setup and audience segmentation",
    "Creative design and ad copywriting",
    "A/B testing for performance improvement",
    "Conversion tracking and reporting"
  ];

  const contentCreation = [
    "Engaging post designs and reels",
    "Platform-specific content strategies",
    "Caption writing and storytelling tone"
  ];

  const analytics = [
    "Monthly insights and performance reports",
    "Engagement and follower growth tracking",
    "Recommendations for improvement"
  ];

  const continuousSupport = [
    "Regular content updates",
    "Trend adaptation",
    "24/7 monitoring and quick response strategy"
  ];

  const faqs = [
    {
      q: "Which social platforms do you manage?",
      a: "We handle Facebook, Instagram, LinkedIn, YouTube, and X (Twitter), among others."
    },
    {
      q: "Can I run both organic and paid campaigns together?",
      a: "Yes, we recommend combining organic growth with targeted paid campaigns for maximum impact."
    },
    {
      q: "How often will you post on my social accounts?",
      a: "Posting frequency depends on your business goals, but we generally maintain 3–5 high-quality posts per week per platform."
    },
    {
      q: "How do you measure SMM success?",
      a: "We track KPIs like engagement rate, reach, follower growth, and conversions through detailed analytics reports."
    },
    {
      q: "Is SMM suitable for B2B businesses?",
      a: "Absolutely. Platforms like LinkedIn and YouTube work exceptionally well for B2B marketing, lead generation, and brand authority."
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
        className="text-center py-20 bg-gradient-to-b from-purple-50 to-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
        <FaBullhorn className="mx-auto text-purple-600 text-5xl mb-4 animate-bounce" />
        <h1 className="text-4xl font-bold mb-4">Social Media Marketing (SMM)</h1>
        <p className="text-lg max-w-3xl mx-auto text-slate-700">
          We transform your social presence into a powerful growth engine. Connect, engage, and grow across all major platforms.
        </p>
      </motion.section>

      {/* Social Media Management */}
      <motion.section className="py-16 max-w-6xl mx-auto px-4" initial="hidden" whileInView="visible">
        <h2 className="text-3xl font-semibold mb-8 text-center">Strategic Social Media Management</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {managementPoints.map((item, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-purple-50 rounded-2xl shadow-md hover:shadow-xl transition-all"
              variants={sectionVariant}
            >
              <FaChartLine className="text-purple-500 text-4xl mb-4" />
              <p>{item}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Benefits */}
      <motion.section className="py-16 bg-purple-50" initial="hidden" whileInView="visible">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Key Benefits</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            {benefits.map((item, idx) => (
              <motion.li key={idx} variants={sectionVariant}>{item}</motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Targeted Advertising */}
      <motion.section className="py-16" initial="hidden" whileInView="visible">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Targeted Advertising Campaigns</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            {adServices.map((item, idx) => (
              <motion.li key={idx} variants={sectionVariant}>{item}</motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Content Creation */}
      <motion.section className="py-16 bg-purple-50" initial="hidden" whileInView="visible">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Creative Content & Visual Storytelling</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            {contentCreation.map((item, idx) => (
              <motion.li key={idx} variants={sectionVariant}>{item}</motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Performance Analytics */}
      <motion.section className="py-16" initial="hidden" whileInView="visible">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Performance Analytics & Reporting</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            {analytics.map((item, idx) => (
              <motion.li key={idx} variants={sectionVariant}>{item}</motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Continuous Support */}
      <motion.section className="py-16 bg-purple-50" initial="hidden" whileInView="visible">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Continuous Optimization & Support</h2>
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
                className="p-6 bg-purple-50 rounded-xl shadow-md hover:shadow-lg transition-all"
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
