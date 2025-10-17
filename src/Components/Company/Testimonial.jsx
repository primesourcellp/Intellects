import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight, FaHandshake } from "react-icons/fa";

// ✅ Sample Clients Data
const clients = [
  {
    id: 1,
    name: "TechNova Solutions",
    feedback:
      "Intellects transformed our business operations with custom software solutions. Their team’s professionalism and expertise made the process smooth and efficient.",
    clientImage: "https://via.placeholder.com/150x150.png?text=Client+1",
  },
  {
    id: 2,
    name: "EduCore Systems",
    feedback:
      "Working with Intellects has been a delight. Their innovative approach to digital transformation helped us scale faster than ever.",
    clientImage: "https://via.placeholder.com/150x150.png?text=Client+2",
  },
  {
    id: 3,
    name: "HealthBridge",
    feedback:
      "Their attention to detail and commitment to quality make Intellects one of the best partners we’ve ever worked with.",
    clientImage: "https://via.placeholder.com/150x150.png?text=Client+3",
  },
];

// ✅ Sample Team Images
const teamImages = [
  "https://via.placeholder.com/300x200.png?text=Team+1",
  "https://via.placeholder.com/300x200.png?text=Team+2",
  "https://via.placeholder.com/300x200.png?text=Team+3",
];

export default function ClientsTestimonialsPage() {
  return (
    <div className="bg-white text-slate-800 overflow-hidden">
      {/* 🌟 Hero Section */}
      <motion.section
        className="text-center py-20 bg-gradient-to-b from-blue-50 to-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="max-w-3xl mx-auto px-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <FaHandshake className="mx-auto text-blue-600 text-5xl mb-4 animate-bounce" />
          <h1 className="text-4xl font-bold mb-4">Clients & Testimonials</h1>
          <p className="text-lg text-slate-600">
            Our Clients, Our Pride. <br />
            At Intellects, every partnership is built on trust, innovation, and
            shared success. We don’t just deliver projects — we build
            relationships that last.
          </p>
        </motion.div>
      </motion.section>

      {/* 🧑‍💼 Clients Section */}
      <motion.section
        className="py-16 bg-white border-t border-slate-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="max-w-6xl mx-auto px-4"
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold text-center mb-8">
            Our Valued Clients
          </h2>
          <p className="text-center text-slate-600 max-w-3xl mx-auto mb-10">
            We’re proud to have partnered with leading organizations and
            ambitious startups around the world. Our clients come from diverse
            industries — technology, retail, healthcare, education, and finance
            — but they all share one thing in common: a commitment to growth
            through innovation.
          </p>

          {/* 🖼️ Team / Client Logos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamImages.map((img, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <img
                  src={img}
                  alt={`Team ${index + 1}`}
                  className="w-full h-56 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* 💬 Testimonials Section */}
      <motion.section
        className="py-20 bg-blue-50 border-t border-slate-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
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
                {/* <FaQuoteLeft className="text-blue-500 text-2xl mb-4 mx-auto" /> */}
                <motion.img
                  src={client.clientImage}
                  alt={client.name}
                  className="mx-auto rounded-full w-20 h-20 mb-4 object-cover border-4 border-blue-100"
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.3 }}
                />
                <h3 className="font-semibold text-lg mb-2">{client.name}</h3>
                <p className="text-slate-600 text-sm mb-4">{client.feedback}</p>
                {/* <FaQuoteRight className="text-blue-500 text-2xl mx-auto mt-2" /> */}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
