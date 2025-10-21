import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Server,
  Layers,
  Zap,
  Settings,
  ShieldCheck,
  Users,
  Workflow,
  Rocket,
} from "lucide-react";

const CustomSoftwareDevelopment = () => {
  const services = [
    {
      title: "Business-Specific Applications",
      desc: "Software designed to meet your unique challenges.",
      icon: <Workflow className="w-10 h-10 text-indigo-600" />,
    },
    {
      title: "Enterprise-Level Systems",
      desc: "Integrated solutions that streamline processes across departments.",
      icon: <Layers className="w-10 h-10 text-indigo-600" />,
    },
    {
      title: "Automation Platforms",
      desc: "Tools that reduce manual work and increase accuracy.",
      icon: <Zap className="w-10 h-10 text-indigo-600" />,
    },
    {
      title: "Maintenance & Upgrades",
      desc: "Continuous improvements to keep your software running efficiently.",
      icon: <Settings className="w-10 h-10 text-indigo-600" />,
    },
  ];

  const technologies = [
    { name: "Frontend", items: "React, Angular, Vue.js", icon: <Code /> },
    { name: "Backend", items: ".NET, Java, Python, Node.js", icon: <Server /> },
    { name: "Database", items: "MySQL, MongoDB, PostgreSQL", icon: <Server /> },
    { name: "Mobile", items: "Flutter, React Native, Swift", icon: <Rocket /> },
    { name: "Cloud", items: "AWS, Azure, Google Cloud", icon: <Layers /> },
  ];

  const stacks = [
    { title: "MERN / MEAN Stack", desc: "For high-speed, scalable web apps" },
    { title: "LAMP Stack", desc: "For reliable and cost-effective systems" },
    {
      title: "Serverless & Microservices Architecture",
      desc: "For flexibility and modular growth",
    },
  ];

  const process = [
    { step: "Requirement Analysis", desc: "Understanding your goals and challenges.", icon: Users },
    { step: "Design & Prototyping", desc: "Visualizing the structure and user experience.", icon: Workflow },
    { step: "Development", desc: "Writing efficient, secure, and scalable code.", icon: Code },
    { step: "Testing & QA", desc: "Ensuring performance and reliability.", icon: ShieldCheck },
    { step: "Deployment & Support", desc: "Launching, maintaining, and evolving your solution.", icon: Rocket },
  ];

  const clientsReasons = [
    "Agile and transparent development process",
    "Scalable architecture for future growth",
    "Clean, secure, and maintainable code",
    "Dedicated support from planning to deployment",
  ];

  return (
    <div className="bg-gray-50 text-gray-800 py-16 px-6 md:px-20">

      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-700 mb-4">
          Custom Software Development Services
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
          Custom Software, Crafted Around Your Vision
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          At Intellects, we create fully customized software solutions built to match your business goals, workflow, and growth plans. Our team transforms your ideas into intelligent, scalable, and high-performing systems that drive results.
        </p>
      </motion.div>

      {/* Services We Offer */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-3xl font-bold text-indigo-600 mb-6">Services We Offer</h3>
        <p className="text-gray-700 mb-6">
          Our custom software development services help organizations simplify operations, enhance productivity, and deliver value through smart technology.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                {s.icon}
                <h4 className="font-semibold text-indigo-600">{s.title}</h4>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Technologies */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-3xl font-bold text-indigo-600 mb-6">Technologies We Rely On</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {technologies.map((t, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl border transition duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="text-indigo-600 text-3xl">{t.icon}</div>
                <h4 className="font-semibold text-indigo-600">{t.name}</h4>
                <p className="text-gray-600">{t.items}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Technology Stacks */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-3xl font-bold text-indigo-600 mb-6">Technology Stacks</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          {stacks.map((stack, i) => (
            <li key={i}>
              <b>{stack.title} –</b> {stack.desc}
            </li>
          ))}
        </ul>
        <p className="text-gray-600">
          We match technology with your business strategy to ensure seamless performance.
        </p>
      </motion.div>

      {/* Tailored Tech */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-3xl font-bold text-indigo-600 mb-6">Tailored Tech for All Business Types</h3>
        <p className="text-gray-700">
          Whether you run a startup, SME, or enterprise, our custom-built software adapts to your specific needs. We design every feature to align with your operations, branding, and user expectations — ensuring your software feels like it was made just for you.
        </p>
      </motion.div>

      {/* Why Clients Choose Intellects */}
      <motion.div
        className="mb-16 bg-white rounded-xl shadow-xl p-8 flex flex-col md:flex-row items-center gap-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="https://cdn.pixabay.com/photo/2018/03/20/20/26/handshake-3243656_960_720.jpg"
          alt="Why Clients Choose Intellects"
          className="w-full md:w-1/2 rounded-xl shadow-md"
        />
        <div>
          <h3 className="text-3xl font-bold text-indigo-600 mb-4">Why Clients Choose Intellects</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {clientsReasons.map((reason, i) => (
              <li key={i}>{reason}</li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Software Development Process */}
      <motion.div
        className="mb-16 bg-gradient-to-r from-indigo-100 to-indigo-50 rounded-xl shadow-xl p-8"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-3xl font-bold text-indigo-600 mb-6">Software Development Process</h3>
        <div className="grid md:grid-cols-5 gap-8 text-center">
          {process.map(({ step, desc, icon: Icon }, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl p-6 shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300"
              whileHover={{ y: -10 }}
            >
              <Icon className="w-12 h-12 text-indigo-600 mb-3" />
              <p className="font-semibold text-gray-700">{step}</p>
              <p className="text-gray-600 text-sm mt-2">{desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.p
        className="text-center text-gray-600 mt-10 text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        At Intellects, we don’t offer templates — we engineer tailored software that grows with your business.
      </motion.p>
    </div>
  );
};

export default CustomSoftwareDevelopment;
