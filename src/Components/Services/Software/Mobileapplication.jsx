import React from "react";
import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaUsers,
  FaCogs,
  FaServer,
  FaCloud,
  FaShieldAlt,
} from "react-icons/fa";

export default function MobileAppDevelopment() {
  return (
    <div className="bg-white text-slate-800 overflow-hidden">

      {/* Hero Section */}
      <motion.section
        className="py-20 text-center bg-gradient-to-b from-primary-lightest to-white"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <FaMobileAlt className="mx-auto text-primary-medium text-5xl mb-4 animate-bounce" />
          <h1 className="text-4xl font-bold mb-4">
            Mobile Application Development
          </h1>
          <p className="text-lg text-slate-600">
            At Intellects, we create user-friendly, secure, and high-performing
            mobile applications that connect businesses with their customers anytime, anywhere.
          </p>
        </div>
      </motion.section>

      {/* Why Mobile Apps Section */}
      <motion.section
        className="py-16 bg-white border-t border-slate-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-10">
            Transforming Businesses with Custom Mobile Apps
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              {
                icon: <FaUsers className="text-primary-medium text-4xl mb-4" />,
                title: "Enhancing User Engagement",
                desc: "Apps designed to delight users and boost interaction.",
              },
              {
                icon: <FaCogs className="text-primary-medium text-4xl mb-4" />,
                title: "Optimizing Operations",
                desc: "Streamlining workflows and automating repetitive tasks.",
              },
              {
                icon: <FaMobileAlt className="text-primary-medium text-4xl mb-4" />,
                title: "Driving Revenue Growth",
                desc: "E-commerce and service apps that increase conversions.",
              },
              {
                icon: <FaServer className="text-primary-medium text-4xl mb-4" />,
                title: "Ensuring Scalability",
                desc: "Flexible solutions that evolve as your business grows.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-6 bg-blue-50 rounded-2xl shadow-md hover:shadow-xl transition-all"
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

      {/* Services Offered */}
      <motion.section
        className="py-16 bg-blue-50 border-t border-slate-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-10">Services We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              "Native Apps – High-performance apps for iOS and Android platforms.",
              "Cross-Platform Apps – Built with Flutter or React Native for multiple devices.",
              "Enterprise Mobility Solutions – Secure apps to manage operations efficiently.",
              "E-commerce & Service Apps – Engaging platforms for customers and clients.",
              "App Maintenance & Support – Ongoing updates, monitoring, and optimization.",
            ].map((service, i) => (
              <motion.div
                key={i}
                className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <p className="text-slate-700">{service}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Mobile App Development Process */}
      <motion.section
        className="py-20 bg-white border-t border-slate-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-12">
            Our Mobile App Development Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              "Requirement Analysis",
              "UI/UX Design",
              "Development",
              "Testing & QA",
              "Deployment & Support",
            ].map((step, i) => (
              <motion.div
                key={i}
                className="bg-blue-50 rounded-xl p-6 shadow hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
              >
                <div className="text-4xl font-bold text-primary-medium mb-2">{i + 1}</div>
                <p className="font-medium text-slate-700">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Technologies & Frameworks */}
      <motion.section
        className="py-20 bg-blue-50 border-t border-slate-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-10">
            Technologies & Frameworks We Use
          </h2>
          <ul className="text-slate-600 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              "iOS: Swift, Objective-C",
              "Android: Kotlin, Java",
              "Cross-Platform: Flutter, React Native",
              "Backend: Node.js, .NET, Firebase",
              "APIs: REST, GraphQL",
              "Cloud: AWS, Azure, Google Cloud",
            ].map((tech, i) => (
              <motion.li
                key={i}
                className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                {tech}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

    </div>
  );
}
