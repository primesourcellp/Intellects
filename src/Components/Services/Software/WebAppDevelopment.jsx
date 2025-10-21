import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaServer,
  FaCloud,
  FaShieldAlt,
  FaUsers,
  FaTasks,
} from "react-icons/fa";

export default function WebAppDevelopment() {
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
          <FaLaptopCode className="mx-auto text-primary-medium text-5xl mb-4 animate-bounce" />
          <h1 className="text-4xl font-bold mb-4">
            Web Application Development
          </h1>
          <p className="text-lg text-slate-600">
            At Intellects, we build intelligent, high-performance web applications
            that simplify operations, enhance engagement, and accelerate business
            growth. From enterprise solutions to SaaS platforms, we empower
            businesses to thrive.
          </p>
        </div>
      </motion.section>

      {/* Services We Offer */}
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
                icon: <FaLaptopCode className="text-primary-medium text-4xl mb-4" />,
                title: "Custom Web Applications",
                desc: "Built from scratch to match your specific workflows.",
              },
              {
                icon: <FaServer className="text-primary-medium text-4xl mb-4" />,
                title: "Enterprise Portals",
                desc: "Streamlined access to data, analytics, and collaboration tools.",
              },
              {
                icon: <FaCloud className="text-primary-medium text-4xl mb-4" />,
                title: "SaaS Applications",
                desc: "Scalable cloud-based software for modern business models.",
              },
              {
                icon: <FaLaptopCode className="text-primary-medium text-4xl mb-4" />,
                title: "Progressive Web Apps (PWA)",
                desc: "Fast, reliable, and installable web experiences.",
              },
              {
                icon: <FaServer className="text-primary-medium text-4xl mb-4" />,
                title: "E-commerce Web Apps",
                desc: "Secure platforms to drive online sales and engagement.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                className="p-6 bg-white shadow-md rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all text-center"
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

      {/* Expertise Section */}
      <motion.section
        className="py-20 bg-blue-50 border-t border-slate-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-10">
            Our Web App Development Expertise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaUsers className="text-primary-medium text-4xl mb-4" />,
                title: "Seamless UX & Design",
                desc: "Consistent user experience with intuitive interfaces.",
              },
              {
                icon: <FaServer className="text-primary-medium text-4xl mb-4" />,
                title: "Robust Backend",
                desc: "Reliable, scalable systems for high performance.",
              },
              {
                icon: <FaCloud className="text-primary-medium text-4xl mb-4" />,
                title: "API & DB Integration",
                desc: "Connect seamlessly with third-party tools and databases.",
              },
              {
                icon: <FaShieldAlt className="text-primary-medium text-4xl mb-4" />,
                title: "Cloud Deployment",
                desc: "Flexible cloud-based systems for scalability.",
              },
              {
                icon: <FaTasks className="text-primary-medium text-4xl mb-4" />,
                title: "Cybersecurity",
                desc: "Strong protocols to protect sensitive business data.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 30 }}
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

      {/* Development Process */}
      <motion.section
        className="py-20 bg-white border-t border-slate-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-12">
            Our Web App Development Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              "Requirement Gathering",
              "Planning & Design",
              "Development Phase",
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
                <div className="text-4xl font-bold text-primary-medium mb-2">
                  {i + 1}
                </div>
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
              "Frontend: React.js, Angular, Vue.js",
              "Backend: Node.js, .NET, Laravel, Django",
              "Database: MongoDB, MySQL, PostgreSQL, Firebase",
              "Cloud: AWS, Azure, Google Cloud",
              "Other Tools: Docker, GitHub, Jenkins, REST & GraphQL APIs",
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
