import React from "react";
import { motion } from "framer-motion";
import {
  FaCogs,
  FaLaptopCode,
  FaCloud,
  FaMobileAlt,
  FaDatabase,
  FaLayerGroup,
  FaRocket,
  FaTools,
} from "react-icons/fa";

export default function CustomSoftware() {
  return (
    <div className="bg-white text-slate-800 overflow-hidden">
      {/* 🌟 Hero Section */}
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
          <FaLaptopCode className="mx-auto text-blue-600 text-5xl mb-4 animate-bounce" />
          <h1 className="text-4xl font-bold mb-4">
            Custom Software Development Services
          </h1>
          <p className="text-lg text-slate-600">
            <span className="font-semibold">Custom Software, Crafted Around Your Vision</span>  
            <br />
            At Intellects, we create fully customized software solutions built to
            match your business goals, workflow, and growth plans. Our team
            transforms your ideas into intelligent, scalable, and high-performing
            systems that drive results.
          </p>
        </motion.div>
      </motion.section>

      {/* 🧩 Services Section */}
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
          <p className="text-center text-slate-600 max-w-3xl mx-auto mb-12">
            Our custom software development services help organizations simplify
            operations, enhance productivity, and deliver value through smart
            technology.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaCogs className="text-blue-500 text-4xl mb-4" />,
                title: "Business-Specific Applications",
                desc: "Software designed to meet your unique challenges.",
              },
              {
                icon: <FaLayerGroup className="text-blue-500 text-4xl mb-4" />,
                title: "Enterprise-Level Systems",
                desc: "Integrated solutions that streamline processes across departments.",
              },
              {
                icon: <FaRocket className="text-blue-500 text-4xl mb-4" />,
                title: "Automation Platforms",
                desc: "Tools that reduce manual work and increase accuracy.",
              },
              {
                icon: <FaTools className="text-blue-500 text-4xl mb-4" />,
                title: "Maintenance & Upgrades",
                desc: "Continuous improvements to keep your software efficient.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-6 bg-white shadow-md rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all text-center"
                initial={{ opacity: 0, y: 50 }}
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

      {/* ⚙️ Technologies Section */}
      <motion.section
        className="py-20 bg-blue-50 border-t border-slate-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Technologies We Rely On
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {[
              {
                title: "Frontend",
                tech: "React, Angular, Vue.js",
                icon: <FaLaptopCode className="text-blue-500 text-4xl mb-3" />,
              },
              {
                title: "Backend",
                tech: ".NET, Java, Python, Node.js",
                icon: <FaCogs className="text-blue-500 text-4xl mb-3" />,
              },
              {
                title: "Database",
                tech: "MySQL, MongoDB, PostgreSQL",
                icon: <FaDatabase className="text-blue-500 text-4xl mb-3" />,
              },
              {
                title: "Mobile",
                tech: "Flutter, React Native, Swift",
                icon: <FaMobileAlt className="text-blue-500 text-4xl mb-3" />,
              },
              {
                title: "Cloud",
                tech: "AWS, Azure, Google Cloud",
                icon: <FaCloud className="text-blue-500 text-4xl mb-3" />,
              },
              {
                title: "Tech Stacks",
                tech: "MERN / MEAN, LAMP, Microservices",
                icon: <FaLayerGroup className="text-blue-500 text-4xl mb-3" />,
              },
            ].map((stack, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
              >
                {stack.icon}
                <h3 className="font-semibold text-lg mb-1">{stack.title}</h3>
                <p className="text-slate-600 text-sm">{stack.tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 🚀 Process Section */}
      <motion.section
        className="py-20 bg-white border-t border-slate-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Software Development Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              "Requirement Analysis",
              "Design & Prototyping",
              "Development",
              "Testing & QA",
              "Deployment & Support",
            ].map((step, i) => (
              <motion.div
                key={i}
                className="bg-blue-50 rounded-xl text-center p-6 shadow hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {i + 1}
                </div>
                <p className="text-slate-700 font-medium">{step}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-slate-600 max-w-3xl mx-auto mt-10">
            At Intellects, we don’t offer templates — we engineer tailored software that
            grows with your business. Every line of code is written with precision,
            performance, and your long-term success in mind.
          </p>
        </div>
      </motion.section>
    </div>
  );
}
