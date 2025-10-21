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
    </div>
  );
};

export default ClientsTestimonials;
