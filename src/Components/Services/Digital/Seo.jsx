import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaChartLine, FaLink, FaUsers, FaPlus, FaMinus } from "react-icons/fa";

// FAQ Item Component with Toggle
const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      key={index}
      className="rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer overflow-hidden bg-white border border-green-200"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div 
        className="p-6 flex justify-between items-center bg-green-50 hover:bg-green-100 transition-colors"
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
            className="px-6 pb-6 pt-0"
          >
            <p className="text-slate-700 border-t border-green-200 pt-3">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function SEO() {
  return (
    <div className="bg-white text-slate-800 overflow-hidden">

      {/* Hero Section */}
      <motion.section
        className="py-20 text-center bg-gradient-to-b from-green-50 to-white"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <FaSearch className="mx-auto text-green-600 text-5xl mb-4 animate-bounce" />
          <h1 className="text-4xl font-bold mb-4">
            SEO & Digital Marketing Services
          </h1>
          <p className="text-lg text-slate-600">
            At Intellects, our SEO services help businesses achieve higher rankings,
            attract quality traffic, and convert visitors into loyal customers.
          </p>
        </div>
      </motion.section>

      {/* Keyword Strategy Section */}
      <motion.section
        className="py-16 bg-white border-t border-slate-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-10">Comprehensive Keyword Strategy</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              {
                icon: <FaSearch className="text-green-500 text-4xl mb-4" />,
                title: "Keyword Research & Analysis",
                desc: "Discover valuable opportunities to attract targeted traffic.",
              },
              {
                icon: <FaChartLine className="text-green-500 text-4xl mb-4" />,
                title: "Competitor Analysis",
                desc: "Understand market trends and outperform competitors.",
              },
              {
                icon: <FaUsers className="text-green-500 text-4xl mb-4" />,
                title: "Long-Tail & Local Keywords",
                desc: "Target specific search queries for better engagement.",
              },
              {
                icon: <FaLink className="text-green-500 text-4xl mb-4" />,
                title: "Continuous Monitoring",
                desc: "Refine keywords based on analytics and results.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-6 bg-green-50 rounded-2xl shadow-md hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                {item.icon}
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SEO Optimization Sections */}
      <motion.section
        className="py-16 bg-green-50 border-t border-slate-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-10">
            SEO Optimization Areas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
              <h3 className="font-semibold text-xl mb-2">On-Page SEO</h3>
              <ul className="list-disc list-inside text-slate-700">
                <li>Meta Tags & Headings</li>
                <li>URL Structure</li>
                <li>Content Optimization</li>
                <li>Internal Linking</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
              <h3 className="font-semibold text-xl mb-2">Technical SEO</h3>
              <ul className="list-disc list-inside text-slate-700">
                <li>Mobile-Friendly Design</li>
                <li>Site Speed Optimization</li>
                <li>Crawlability & Indexing</li>
                <li>Structured Data & Schema Markup</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
              <h3 className="font-semibold text-xl mb-2">Off-Page SEO</h3>
              <ul className="list-disc list-inside text-slate-700">
                <li>High-Quality Backlinks</li>
                <li>Guest Posting & Outreach</li>
                <li>Social Signals</li>
                <li>Brand Mentions</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
              <h3 className="font-semibold text-xl mb-2">Analytics & Improvement</h3>
              <ul className="list-disc list-inside text-slate-700">
                <li>Traffic & Engagement Analysis</li>
                <li>Ranking Reports</li>
                <li>Conversion Optimization</li>
                <li>Ongoing Strategy Updates</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FAQs Section */}
      <motion.section
        className="py-16 bg-white border-t border-slate-200"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4 text-slate-700">
            {[
              {
                q: "What is SEO and why is it important for my business?",
                a: "SEO is the process of optimizing your website to rank higher in search engine results. It helps attract organic traffic, increase visibility, and convert visitors into customers."
              },
              {
                q: "In what timeframe can SEO improvements become visible?",
                a: "SEO is a long-term strategy. Typically, measurable improvements are seen within 3–6 months, depending on competition and website condition."
              },
              {
                q: "What is the difference between on-page and off-page SEO?",
                a: "On-page SEO optimizes website elements like content, headings, meta tags, and links. Off-page SEO builds authority through backlinks, social signals, and mentions."
              },
              {
                q: "Can Intellects guarantee #1 ranking on Google?",
                a: "No professional SEO company can guarantee #1 ranking due to algorithm changes. We use proven strategies to improve visibility and organic traffic."
              },
              {
                q: "Do I need SEO if I'm already running paid ads?",
                a: "Yes. SEO complements paid ads by generating organic traffic and providing long-term brand credibility."
              },
              {
                q: "Will SEO work for local businesses?",
                a: "Absolutely. Local SEO targets location-specific searches, helping businesses appear in local listings and maps."
              }
            ].map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
