import React from "react";
import { motion } from "framer-motion";
import sky8Image from "../../assets/sky8.jpg";

// NOTE: Since this is a single, self-contained file, we define a simple 
// placeholder component for 'Link' from 'react-router-dom' to ensure 
// the code is runnable without a full routing setup.
const Link = ({ to, children, className }) => (
  <a 
    href={to} 
    onClick={(e) => {
      e.preventDefault();
      console.log(`Navigation attempt to: ${to}`);
      // In a real application, this would use a router navigation function.
    }} 
    className={className}
  >
    {children}
  </a>
);


export default function App() {
  // ===== Intellects Color Palette =====
  const COLOR_PRIMARY = "#4C1D95"; // Purple Dark - Primary
  const COLOR_PURPLE_DARK = "#4C1D95"; // Dark Purple
  const COLOR_PINK = "#4C1D95"; // Purple - Accent
  const COLOR_PINK_LIGHT = "#7C3AED"; // Purple Violet
  const COLOR_BG = "#FFFFFF"; // Clean White - Base
  const COLOR_SECTION = "#F9FAFB"; // Light Gray
  const COLOR_TEXT = "#000000"; // Black Text
  const COLOR_MUTED = "#6B7280"; // Medium Gray

  // ===== Animation Presets =====
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };
  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="min-h-screen font-sans relative overflow-hidden" style={{ backgroundColor: COLOR_BG, color: COLOR_TEXT }}>
      
      {/* ======================================================
          HERO SECTION WITH BACKGROUND IMAGE
      ====================================================== */}
      <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={sky8Image}
            alt="Methodology"
            className="w-full h-full object-cover"
            style={{ opacity: 1 }}
          />
          <div 
            className="absolute inset-0" 
            style={{ 
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)',
            }}
          />
        </div>

        {/* Floating Shapes */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-20 h-20 rounded-full opacity-20"
          style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-32 h-32 rounded-full opacity-20"
          style={{ background: 'linear-gradient(135deg, #7C3AED, #4C1D95)' }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-6 md:px-16 lg:px-28">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight"
            style={{ color: '#000000' }}
          >
            Empowering Businesses Through Intelligence and{" "}
            <motion.span
              style={{ color: '#4C1D95' }}
              animate={{
                textShadow: [
                  `0 0 20px ${'#4C1D95'}00`,
                  `0 0 20px ${'#4C1D95'}50`,
                  `0 0 20px ${'#4C1D95'}00`
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Innovation
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl max-w-5xl mx-auto leading-relaxed"
            style={{ color: '#6B7280' }}
          >
            At <span className="font-semibold" style={{ color: COLOR_PRIMARY }}>Intellects</span>, we
            bridge technology, creativity, and human insight to help organizations grow smarter,
            faster, and stronger in a digital world. We believe innovation begins with intellect —
            the power to think differently, solve challenges, and create progress.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0 0 20px rgba(76, 29, 149, 0)',
                  '0 0 30px rgba(76, 29, 149, 0.4)',
                  '0 0 20px rgba(76, 29, 149, 0)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="px-8 py-3 rounded-full font-semibold text-white shadow-lg"
              style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}
            >
              Learn More
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, borderColor: '#4C1D95', color: '#4C1D95' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full font-semibold border-2 bg-white"
              style={{ borderColor: '#E5E7EB', color: '#000000' }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* ======================================================
          DEVELOPMENT & METHODOLOGY INTRO
      ====================================================== */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeInUp}
        className="py-20 sm:py-24 px-6 md:px-16 lg:px-28 text-center border-t"
        style={{ backgroundColor: COLOR_SECTION, borderColor: COLOR_PINK_LIGHT }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#4C1D95' }}>
          Our Development &{" "}
          <motion.span
            style={{ color: '#000000' }}
            animate={{
              textShadow: [
                `0 0 20px ${'#4C1D95'}00`,
                `0 0 20px ${'#4C1D95'}50`,
                `0 0 20px ${'#4C1D95'}00`
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Methodology
          </motion.span>
        </h2>
        <p className="max-w-4xl mx-auto text-base sm:text-lg leading-relaxed mb-0" style={{ color: COLOR_TEXT }}>
          <strong>Building with Purpose, Delivering with Precision</strong> — Our approach to
          development is rooted in agility, collaboration, and continuous improvement. We understand
          that every client’s journey is unique — that’s why Intellects tailors its methodology to
          fit your goals, timelines, and business model. We combine deep technical knowledge with a
          human-centered mindset to ensure every solution we build is innovative, reliable, and
          scalable.
        </p>
        {/* The 'Our Proven Methodology' heading has been moved below to be directly above the steps grid. */}
      </motion.section>

      {/* ======================================================
          OUR PROVEN METHODOLOGY STEPS
      ====================================================== */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="py-20 sm:py-24 px-6 md:px-16 lg:px-28" // Removed grid classes from the section
        style={{ backgroundColor: COLOR_SECTION }}
      >
        <motion.h2 
          variants={fadeInUp}
          className="text-3xl sm:text-4xl font-bold mb-12 text-center" 
          style={{ color: '#4C1D95' }}
        >
          Our Proven{" "}
          <motion.span
            style={{ color: '#000000' }}
            animate={{
              textShadow: [
                `0 0 20px ${'#4C1D95'}00`,
                `0 0 20px ${'#4C1D95'}50`,
                `0 0 20px ${'#4C1D95'}00`
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Methodology
          </motion.span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "1. Discovery & Strategy",
              text: "We start with understanding — diving deep into your business, audience, and goals to build a solid strategic foundation.",
            },
            {
              title: "2. Planning & Design",
              text: "Our experts design intelligent systems and user-friendly interfaces that balance creativity with functionality.",
            },
            {
              title: "3. Agile Development",
              text: "Using an agile framework, we develop in focused sprints, ensuring rapid progress, flexibility, and transparency throughout the process.",
            },
            {
              title: "4. Testing & Quality Assurance",
              text: "Every product undergoes thorough testing to guarantee stability, security, and performance at every level.",
            },
            {
              title: "5. Deployment & Support",
              text: "We ensure seamless deployment and provide long-term support so your solutions continue performing as your business scales.",
            },
            {
              title: "6. Continuous Improvement",
              text: "We don't stop at launch. We monitor performance and iterate, ensuring your solution evolves with market needs.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.04,
                y: -8,
                borderColor: '#4C1D95',
                boxShadow: '0 20px 40px rgba(76, 29, 149, 0.3)'
              }}
              whileTap={{ scale: 0.98 }}
              className="p-8 rounded-xl shadow-lg border-l-4 transition-all cursor-pointer relative overflow-hidden group"
              style={{ borderColor: COLOR_PRIMARY, backgroundColor: COLOR_BG }}
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(76, 29, 149, 0.1), rgba(124, 58, 237, 0.05))',
                  pointerEvents: 'none' 
                }}
              />
              <motion.h3 
                className="text-xl sm:text-2xl font-bold mb-3 relative z-10" 
                style={{ color: '#4C1D95' }}
                whileHover={{ scale: 1.05, x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.title}
              </motion.h3>
              <p className="relative z-10" style={{ color: COLOR_TEXT }}>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ======================================================
          WHY IT WORKS
      ====================================================== */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeInUp}
        className="py-20 sm:py-24 px-6 md:px-16 lg:px-28 text-center"
        style={{ backgroundColor: COLOR_BG }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: '#4C1D95' }}>
          Why It{" "}
          <motion.span
            style={{ color: '#000000' }}
            animate={{
              textShadow: [
                `0 0 20px ${'#4C1D95'}00`,
                `0 0 20px ${'#4C1D95'}50`,
                `0 0 20px ${'#4C1D95'}00`
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Works
          </motion.span>
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-base sm:text-lg">
          {[
            "✅ Transparent Communication",
            "⚙️ Agile and Adaptable Process",
            "🏆 Quality-First Culture",
            "🤝 Strong Partnership Mindset",
          ].map((point, i) => (
            <motion.li
              key={i}
              variants={fadeIn}
              whileHover={{ borderColor: '#4C1D95', boxShadow: '0 10px 30px rgba(76, 29, 149, 0.2)' }}
              className="p-6 rounded-lg border-2 shadow-sm transition-all text-left font-medium"
              style={{ backgroundColor: COLOR_SECTION, borderColor: '#E5E7EB', color: COLOR_TEXT }}
            >
              {point}
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* ======================================================
          OUR KEY CLIENTS
      ====================================================== */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        className="py-20 sm:py-24 px-6 md:px-16 lg:px-28 text-center border-t"
        style={{ backgroundColor: COLOR_SECTION, borderColor: COLOR_PINK_LIGHT }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#4C1D95' }}>
          Our Key{" "}
          <motion.span
            style={{ color: '#000000' }}
            animate={{
              textShadow: [
                `0 0 20px ${'#4C1D95'}00`,
                `0 0 20px ${'#4C1D95'}50`,
                `0 0 20px ${'#4C1D95'}00`
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Clients
          </motion.span>
        </h2>
        <p className="max-w-4xl mx-auto text-base sm:text-lg mb-8" style={{ color: COLOR_TEXT }}>
          Over the years, Intellects has had the privilege of working with a diverse range of
          clients — from emerging startups to established enterprises across industries like
          technology, healthcare, retail, and finance. Our clients choose us not just for our
          skills — but for our commitment to helping them achieve lasting success.
        </p>
        <blockquote className="italic text-xl font-semibold mb-10" style={{ color: '#4C1D95' }}>
          "Trusted by forward-thinking brands who believe in innovation and excellence."
        </blockquote>
      </motion.section>

      {/* ======================================================
          PARTNERSHIP SECTION + TESTIMONIAL BUTTON
      ====================================================== */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        className="py-20 sm:py-24 px-6 md:px-16 lg:px-28 text-center border-t"
        style={{ backgroundColor: COLOR_BG, borderColor: COLOR_PINK_LIGHT }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#4C1D95' }}>
          <motion.span
            style={{ color: '#000000' }}
            animate={{
              textShadow: [
                `0 0 20px ${'#4C1D95'}00`,
                `0 0 20px ${'#4C1D95'}50`,
                `0 0 20px ${'#4C1D95'}00`
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Strategic
          </motion.span>{" "}
          Partnerships
        </h2>
        <p className="max-w-4xl mx-auto text-base sm:text-lg leading-relaxed mb-10" style={{ color: COLOR_TEXT }}>
          Intellects partners with leading technology providers and platforms to ensure we deliver
          world-class solutions. Our alliances help us access the best tools, frameworks, and
          expertise — so our clients always stay ahead in an ever-evolving digital ecosystem.
        </p>

        <motion.div
          whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(76, 29, 149, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              '0 0 20px rgba(76, 29, 149, 0)',
              '0 0 30px rgba(76, 29, 149, 0.4)',
              '0 0 20px rgba(76, 29, 149, 0)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-flex items-center justify-center px-10 py-4 rounded-full font-semibold shadow-2xl cursor-pointer transition-transform duration-200"
          style={{ 
            background: 'linear-gradient(135deg, #4C1D95, #7C3AED)',
            color: "#FFFFFF",
            boxShadow: '0 10px 30px rgba(76, 29, 149, 0.4)'
          }}
        >
          {/* Using the locally defined Link component */}
          <Link to="/testimonials" className="flex items-center gap-3 text-lg">
            Clients & Partners <span className="text-2xl">→</span>
          </Link>
        </motion.div>
      </motion.section>

      {/* ======================================================
          LET’S GROW TOGETHER (CTA)
      ====================================================== */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-20 sm:py-24 px-6 md:px-16 lg:px-28 text-center border-t"
        style={{ backgroundColor: COLOR_SECTION, borderColor: COLOR_PINK_LIGHT }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#4C1D95' }}>
          Ready to{" "}
          <motion.span
            style={{ color: '#000000' }}
            animate={{
              textShadow: [
                `0 0 20px ${'#4C1D95'}00`,
                `0 0 20px ${'#4C1D95'}50`,
                `0 0 20px ${'#4C1D95'}00`
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Grow?
          </motion.span>{" "}
          Let's Connect.
        </h2>
        <p className="max-w-4xl mx-auto text-base sm:text-lg leading-relaxed" style={{ color: COLOR_TEXT }}>
          Intellects is more than a consulting firm — we’re a growth partner that combines
          technology, creativity, and strategy to shape the future of business. Reach out today to start your transformation journey.
        </p>
      </motion.section>
    </div>
  );
}
