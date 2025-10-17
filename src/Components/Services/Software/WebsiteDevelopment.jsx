import React from "react";
import { motion } from "framer-motion";
import {
  FaGlobe,
  FaLaptopCode,
  FaStore,
  FaUsers,
  FaCogs,
  FaClipboardCheck,
  FaHandshake,
  FaQuestionCircle,
} from "react-icons/fa";

export default function WebsiteDevelopment() {
  return (
    <div className="bg-white text-slate-800 overflow-hidden">
      {/* 🌐 Hero Section */}
      <motion.section
        className="py-20 text-center bg-gradient-to-b from-blue-50 to-white"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="max-w-4xl mx-auto px-4"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <FaGlobe className="mx-auto text-blue-600 text-5xl mb-4 animate-bounce" />
          <h1 className="text-4xl font-bold mb-4">
            Website Development Services
          </h1>
          <p className="text-lg text-slate-600">
            <span className="font-semibold">
              Transform Your Online Presence with Intellects
            </span>{" "}
            <br />
            We design and develop modern, responsive, and business-driven
            websites that make a lasting digital impression — from corporate
            sites to e-commerce platforms.
          </p>
        </motion.div>
      </motion.section>

      {/* 🧱 Services Section */}
      <motion.section
        className="py-16 bg-white border-t border-slate-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Services We Offer
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaUsers className="text-blue-500 text-4xl mb-4" />,
                title: "Corporate & Business Websites",
                desc: "Build trust with sleek, professional designs.",
              },
              {
                icon: <FaStore className="text-blue-500 text-4xl mb-4" />,
                title: "E-commerce Platforms",
                desc: "Secure, scalable, and conversion-focused online stores.",
              },
              {
                icon: <FaClipboardCheck className="text-blue-500 text-4xl mb-4" />,
                title: "CMS Development",
                desc: "Empower your team with easy content management.",
              },
              {
                icon: <FaLaptopCode className="text-blue-500 text-4xl mb-4" />,
                title: "Landing Pages",
                desc: "Optimize campaigns with high-impact designs.",
              },
              {
                icon: <FaCogs className="text-blue-500 text-4xl mb-4" />,
                title: "Custom Web Portals",
                desc: "Designed to improve internal operations and user experience.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                className="p-6 bg-white shadow-md rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                {service.icon}
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 🧩 Success Formula */}
      <motion.section
        className="py-20 bg-blue-50 border-t border-slate-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-10">
            Our Formula for Web Development Success
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Understanding Your Goals",
              "Creative UI/UX Design",
              "Agile Development Approach",
              "Continuous Testing",
              "Post-Launch Support",
            ].map((pillar, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <h3 className="font-semibold text-lg text-blue-600">
                  {pillar}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 💼 Why Choose Us */}
      <motion.section
        className="py-20 bg-white border-t border-slate-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <FaHandshake className="text-blue-600 text-4xl mb-4 mx-auto" />
          <h2 className="text-3xl font-semibold mb-10">
            Why Businesses Choose Intellects
          </h2>
          <ul className="text-slate-600 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              "Deep industry experience with global clients.",
              "Dedicated in-house development and design teams.",
              "Scalable and flexible project models.",
              "On-time delivery and transparent communication.",
              "End-to-end solutions from design to deployment.",
            ].map((point, i) => (
              <motion.li
                key={i}
                className="p-4 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                • {point}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* ⚙️ Development Process */}
      <motion.section
        className="py-20 bg-blue-50 border-t border-slate-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-12">
            Our Web Development Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              "Discovery & Strategy",
              "Design & Prototyping",
              "Development",
              "Testing & QA",
              "Deployment & Maintenance",
            ].map((step, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {i + 1}
                </div>
                <p className="font-medium text-slate-700">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 👩‍💻 Hiring Models */}
      <motion.section
        className="py-20 bg-white border-t border-slate-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-12">Our Custom Hiring Models</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Dedicated Team Model",
                desc: "Ideal for long-term projects requiring consistent technical expertise.",
              },
              {
                title: "Fixed-Price Model",
                desc: "Perfect for projects with clear requirements, milestones, and deadlines.",
              },
              {
                title: "Hourly / Time & Material Model",
                desc: "Flexible pay-as-you-go structure ideal for evolving or R&D projects.",
              },
            ].map((model, i) => (
              <motion.div
                key={i}
                className="p-6 bg-blue-50 rounded-2xl shadow hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <h3 className="font-semibold text-xl mb-2 text-blue-700">
                  {model.title}
                </h3>
                <p className="text-slate-600 text-sm">{model.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ❓ FAQ Section */}
      <motion.section
        className="py-20 bg-blue-50 border-t border-slate-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <FaQuestionCircle className="text-blue-600 text-4xl mb-6 mx-auto" />
          <h2 className="text-3xl font-semibold text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How long does it take to develop a website?",
                a: "A basic business site may take 3–4 weeks, while e-commerce or advanced platforms may need 8–12 weeks.",
              },
              {
                q: "Can Intellects redesign or upgrade my existing website?",
                a: "Absolutely! We specialize in website redesigns with modern aesthetics, performance, and user experience enhancements.",
              },
              {
                q: "What technologies does Intellects use?",
                a: "We use React, Laravel, WordPress, Node.js, .NET, and Shopify for scalable, modern web solutions.",
              },
              {
                q: "Will my website be mobile-friendly and SEO-optimized?",
                a: "Yes. All websites we build are fully responsive and follow SEO best practices for better ranking.",
              },
              {
                q: "Do you provide maintenance after launch?",
                a: "Yes, we offer post-launch maintenance, security updates, and ongoing support.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <h3 className="font-semibold text-blue-700 text-lg mb-2">
                  {faq.q}
                </h3>
                <p className="text-slate-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
