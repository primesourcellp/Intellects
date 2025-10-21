import React from "react";
import { motion } from "framer-motion";

// 🔹 Replace with your actual image imports
import client1 from "../../assets/clients/about.jpg";
import client2 from "../../assets/clients/about.jpg";
import client3 from "../../assets/clients/about.jpg";
import team1 from "../../assets/clients/about.jpg";
import team2 from "../../assets/clients/about.jpg";
import team3 from "../../assets/clients/about.jpg";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
  }),
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const ClientsTestimonials = () => {
  const clients = [
    {
      name: "TechNova Solutions",
      feedback:
        "Intellects transformed our digital presence with cutting-edge solutions and unmatched professionalism. A true partner in innovation.",
      image: client1,
    },
    {
      name: "GreenMart Retail",
      feedback:
        "Working with Intellects was a seamless experience. Their team understood our needs and delivered beyond expectations!",
      image: client2,
    },
    {
      name: "EduBridge Learning",
      feedback:
        "Their technical expertise and creative approach helped us scale our online platform to reach thousands of students globally.",
      image: client3,
    },
  ];

  const teamImages = [team1, team2, team3];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white text-gray-800 py-20 px-6 md:px-20 overflow-hidden">
      {/* HEADER SECTION */}
      <motion.div
        className="text-center mb-16"
    <div className="bg-white text-slate-800 overflow-hidden">
      {/* 🌟 Hero Section */}
      <motion.section
        className="text-center py-20 bg-gradient-to-b from-primary-lightest to-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-blue-700 mb-6 tracking-tight"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Clients & Testimonials
        </motion.h1>
        <motion.p
          className="text-2xl font-semibold text-gray-600 mb-4"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          Our Clients, Our Pride.
        </motion.p>
        <motion.p
          className="max-w-3xl mx-auto text-gray-700 leading-relaxed"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          At Intellects, every partnership is built on trust, innovation, and shared
          success. We don’t just deliver projects — we build relationships that last.
        </motion.p>
      </motion.div>
        <motion.div
          className="max-w-3xl mx-auto px-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <FaHandshake className="mx-auto text-primary-medium text-5xl mb-4 animate-bounce" />
          <h1 className="text-4xl font-bold mb-4">Clients & Testimonials</h1>
          <p className="text-lg text-slate-600">
            Our Clients, Our Pride. <br />
            At Intellects, every partnership is built on trust, innovation, and
            shared success. We don’t just deliver projects — we build
            relationships that last.
          </p>
        </motion.div>
      </motion.section>

      {/* OUR VALUED CLIENTS */}
      <motion.div
        className="text-center mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-4xl font-bold text-blue-600 mb-6">
          Our Valued Clients
        </h2>
        <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
          We’re proud to have partnered with leading organizations and ambitious
          startups around the world. Our clients come from diverse industries —
          technology, retail, healthcare, education, and finance — but they all share
          one thing in common: a commitment to growth through innovation.
        </p>
      </motion.div>

      {/* TEAM PICTURES */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {teamImages.map((img, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-3xl shadow-2xl group"
            variants={scaleUp}
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={img}
              alt={`Team ${index + 1}`}
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 flex items-end justify-center pb-6 transition-opacity duration-500"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <p className="text-white text-lg font-semibold">
                Intellects Team Member {index + 1}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* CLIENT TESTIMONIALS */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {clients.map((client, index) => (
          <motion.div
            key={index}
            className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200 hover:shadow-2xl transform transition duration-500 hover:-translate-y-2"
            variants={fadeInUp}
            custom={index}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.img
                src={client.image}
                alt={client.name}
                className="w-24 h-24 rounded-full border-4 border-blue-500 mb-4 object-cover shadow-lg"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 150 }}
              />
              <h3 className="text-xl font-bold text-blue-600 mb-3">
                {client.name}
              </h3>
              <p className="text-gray-600 italic leading-relaxed">
                “{client.feedback}”
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-3xl font-semibold text-center mb-12"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            What Our Clients Say
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.id}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                {/* <FaQuoteLeft className="text-primary-medium text-2xl mb-4 mx-auto" /> */}
                <motion.img
                  src={client.clientImage}
                  alt={client.name}
                  className="mx-auto rounded-full w-20 h-20 mb-4 object-cover border-4 border-blue-100"
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.3 }}
                />
                <h3 className="font-semibold text-lg mb-2">{client.name}</h3>
                <p className="text-slate-600 text-sm mb-4">{client.feedback}</p>
                {/* <FaQuoteRight className="text-primary-medium text-2xl mx-auto mt-2" /> */}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ClientsTestimonials;
