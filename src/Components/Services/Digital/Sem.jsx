import React from "react";
import { motion } from "framer-motion";
import { FaBullhorn, FaChartBar,FaPenFancy, FaSyncAlt } from "react-icons/fa";

export default function SEM() {
  const semProcess = [
    "In-depth keyword research & targeting strategy",
    "Google Ads & Bing Ads campaign setup",
    "Smart bid management to optimize budget",
    "A/B testing for continuous performance improvement",
    "Custom ad copywriting to maximize clicks and conversions"
  ];

  const keyBenefits = [
    "Instant visibility on search engines",
    "Measurable and trackable performance",
    "Enhanced conversion rates and ROI"
  ];

  const dataDrivenFocus = [
    "Conversion tracking & performance monitoring",
    "Budget optimization",
    "Deep analytics reports to measure success"
  ];

  const audienceTargeting = [
    "Geo-targeted and device-based campaigns",
    "Interest-based and retargeting strategies",
    "High-quality lead generation tactics"
  ];

  const creativeAds = [
    "Engaging visuals and clear CTAs",
    "Ad copy optimized for relevance and conversions",
    "Consistent branding across all platforms"
  ];

  const continuousOptimization = [
    "Weekly performance analysis",
    "Competitor benchmarking",
    "Strategy reviews and improvement plans"
  ];

  const faqs = [
    {
      q: "What makes SEM different from SEO?",
      a: "SEO focuses on organic growth, while SEM uses paid advertising for instant visibility on search engines."
    },
    {
      q: "How soon will I see results from SEM?",
      a: "You can start seeing results within days of campaign launch, depending on your budget and targeting strategy."
    },
    {
      q: "Can Intellects manage multi-channel ad campaigns?",
      a: "Yes, we handle campaigns across Google Ads, Bing Ads, and display networks for maximum reach."
    },
    {
      q: "How do you ensure the best ROI?",
      a: "Through continuous optimization, keyword analysis, and performance tracking, we ensure every rupee spent delivers value."
    },
    {
      q: "Is SEM suitable for small and mid-sized businesses?",
      a: "Absolutely. Our flexible packages allow businesses of any size to leverage paid advertising effectively."
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
        <FaBullhorn className="mx-auto text-blue-600 text-5xl mb-4 animate-bounce" />
        <h1 className="text-4xl font-bold mb-4">Search Engine Marketing (SEM)</h1>
        <p className="text-lg max-w-3xl mx-auto text-slate-700">
          Reach the right audience instantly with smart paid campaigns. We craft high-performing SEM campaigns that deliver qualified traffic, stronger conversions, and visible growth.
        </p>
      </motion.section>

      {/* SEM Process */}
      <motion.section
        className="py-16 max-w-6xl mx-auto px-4"
        initial="hidden"
        whileInView="visible"
      >
        <h2 className="text-3xl font-semibold mb-8 text-center">Our SEM Process</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {semProcess.map((item, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-blue-50 rounded-2xl shadow-md hover:shadow-xl transition-all"
              variants={sectionVariant}
              custom={idx}
            >
              <FaChartBar className="text-blue-500 text-4xl mb-4" />
              <p>{item}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Key Benefits */}
      <motion.section className="py-16 bg-blue-50" initial="hidden" whileInView="visible">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Key Benefits</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            {keyBenefits.map((item, idx) => (
              <motion.li key={idx} variants={sectionVariant}>
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Data-Driven Strategy */}
      <motion.section className="py-16" initial="hidden" whileInView="visible">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Data-Driven Marketing Strategy</h2>
          <p className="mb-6 text-slate-700">
            Decisions powered by insights, not assumptions. Every campaign at Intellects is backed by real-time data, user behavior tracking, and advanced analytics.
          </p>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            {dataDrivenFocus.map((item, idx) => (
              <motion.li key={idx} variants={sectionVariant}>{item}</motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Audience Targeting */}
      <motion.section className="py-16 bg-blue-50" initial="hidden" whileInView="visible">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Precision Audience Targeting</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            {audienceTargeting.map((item, idx) => (
              <motion.li key={idx} variants={sectionVariant}>{item}</motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Creative Ads */}
      <motion.section className="py-16" initial="hidden" whileInView="visible">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Creative Ad Development</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            {creativeAds.map((item, idx) => (
              <motion.li key={idx} variants={sectionVariant}>{item}</motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Continuous Optimization */}
      <motion.section className="py-16 bg-blue-50" initial="hidden" whileInView="visible">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Continuous Optimization & Growth</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            {continuousOptimization.map((item, idx) => (
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
