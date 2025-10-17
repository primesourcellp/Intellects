import React from "react";
import { motion } from "framer-motion";
import { FaPenFancy, FaChartLine, FaBullhorn, FaRegLightbulb, FaSyncAlt } from "react-icons/fa";

export default function ContentMarketing() {
  const strategyPoints = [
    "Audience persona development",
    "Keyword and topic research",
    "Content calendar planning",
    "Channel selection and content mapping"
  ];

  const benefits = [
    "Clear content direction and consistency",
    "Stronger brand authority and trust",
    "Improved search visibility"
  ];

  const deliverables = [
    "Blog posts and articles",
    "Website and landing page content",
    "Product descriptions and service pages",
    "Press releases and newsletters"
  ];

  const visuals = [
    "Infographics and data visuals",
    "Social media creatives and carousels",
    "Video scripts and storyboards"
  ];

  const performance = [
    "Content performance audits",
    "SEO tracking and ranking analysis",
    "Data-driven content improvement"
  ];

  const ongoingSupport = [
    "Regular content updates",
    "Style and tone consistency checks",
    "Editorial reviews and content repurposing"
  ];

  const faqs = [
    {
      q: "What types of content do you create?",
      a: "We create blogs, website content, articles, infographics, case studies, videos, and more based on your marketing goals."
    },
    {
      q: "How does content marketing help my business?",
      a: "It boosts visibility, improves SEO rankings, builds authority, and attracts high-quality leads organically."
    },
    {
      q: "How often should I publish new content?",
      a: "We recommend regular publishing — typically weekly or biweekly — depending on your business goals and audience engagement."
    },
    {
      q: "Do you provide SEO-optimized content?",
      a: "Yes, every piece of content we produce is optimized for search engines while maintaining natural, reader-friendly flow."
    },
    {
      q: "Can you help repurpose existing content?",
      a: "Absolutely. We audit and rework your current content to align with modern SEO and engagement standards."
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
        className="text-center py-20 bg-gradient-to-b from-yellow-50 to-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
        <FaRegLightbulb className="mx-auto text-yellow-600 text-5xl mb-4 animate-bounce" />
        <h1 className="text-4xl font-bold mb-4">Content Marketing</h1>
        <p className="text-lg max-w-3xl mx-auto text-slate-700">
          Crafting words that inspire, inform, and convert. Build trust, authority, and engagement through powerful content.
        </p>
      </motion.section>

      {/* Strategy */}
      <motion.section className="py-16 max-w-6xl mx-auto px-4" initial="hidden" whileInView="visible">
        <h2 className="text-3xl font-semibold mb-8 text-center">Strategy-Driven Content Creation</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {strategyPoints.map((item, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-yellow-50 rounded-2xl shadow-md hover:shadow-xl transition-all"
              variants={sectionVariant}
            >
              <FaChartLine className="text-yellow-500 text-4xl mb-4" />
              <p>{item}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Benefits */}
      <motion.section className="py-16 bg-yellow-50" initial="hidden" whileInView="visible">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Key Benefits</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            {benefits.map((item, idx) => (
              <motion.li key={idx} variants={sectionVariant}>{item}</motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Deliverables */}
      <motion.section className="py-16" initial="hidden" whileInView="visible">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Engaging and SEO-Optimized Content</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            {deliverables.map((item, idx) => (
              <motion.li key={idx} variants={sectionVariant}>{item}</motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Visual Storytelling */}
      <motion.section className="py-16 bg-yellow-50" initial="hidden" whileInView="visible">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Visual and Interactive Storytelling</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            {visuals.map((item, idx) => (
              <motion.li key={idx} variants={sectionVariant}>{item}</motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Performance */}
      <motion.section className="py-16" initial="hidden" whileInView="visible">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Performance Measurement & Optimization</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            {performance.map((item, idx) => (
              <motion.li key={idx} variants={sectionVariant}>{item}</motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Ongoing Support */}
      <motion.section className="py-16 bg-yellow-50" initial="hidden" whileInView="visible">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Ongoing Content Management & Support</h2>
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
                className="p-6 bg-yellow-50 rounded-xl shadow-md hover:shadow-lg transition-all"
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
