import React, { useState, useEffect } from "react";
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

// Typing Animation Component
const TypingText = ({ text, className = "" }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!started) return;
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, started]);

  return <span className={className}>{displayedText}</span>;
};


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
  // Animations are now defined inline for better performance and flexibility

  return (
    <div className="min-h-screen font-sans relative overflow-hidden" style={{ backgroundColor: COLOR_BG, color: COLOR_TEXT }}>
      
      {/* ======================================================
          HERO SECTION WITH BACKGROUND IMAGE
      ====================================================== */}
      <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
        {/* Background Image with Overlay */}
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
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
        </motion.div>

        {/* Floating Shapes - Enhanced */}
        <motion.div
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-20 h-20 rounded-full opacity-20"
          style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}
        />
        <motion.div
          animate={{ 
            y: [0, 25, 0],
            rotate: [0, -10, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-32 h-32 rounded-full opacity-20"
          style={{ background: 'linear-gradient(135deg, #7C3AED, #4C1D95)' }}
        />
        
        {/* Additional Floating Elements */}
        <motion.div
          animate={{ 
            x: [0, 30, 0],
            y: [0, -15, 0],
            rotate: [0, 15, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-40 right-20 w-16 h-16 rounded-lg opacity-15"
          style={{ background: 'linear-gradient(135deg, #F59E0B, #4C1D95)' }}
        />
        <motion.div
          animate={{ 
            x: [0, -20, 0],
            y: [0, 20, 0],
            rotate: [0, -12, 0]
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-32 left-20 w-12 h-12 rounded-full opacity-15"
          style={{ background: 'linear-gradient(135deg, #7C3AED, #F59E0B)' }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-6 md:px-16 lg:px-28">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            style={{ color: '#000000' }}
          >
            <TypingText text="Empowering Businesses Through " />
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
              <TypingText text="Intelligence and Innovation" />
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl max-w-4xl mx-auto font-light leading-relaxed"
            style={{ color: '#6B7280' }}
          >
            Building with Purpose. Delivering with Precision.
          </motion.p>
        </div>
      </div>

      {/* ======================================================
          DEVELOPMENT & METHODOLOGY INTRO
      ====================================================== */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
        className="py-20 sm:py-24 px-6 md:px-16 lg:px-28 text-center"
        style={{ backgroundColor: '#F9FAFB' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="inline-block mb-4"
        >
          <motion.span 
            className="px-6 py-2 rounded-full font-bold text-sm shadow-lg inline-block" 
            style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)', color: '#FFFFFF' }}
            animate={{
              boxShadow: [
                '0 4px 15px rgba(76, 29, 149, 0.3)',
                '0 4px 25px rgba(76, 29, 149, 0.5)',
                '0 4px 15px rgba(76, 29, 149, 0.3)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            OUR APPROACH
          </motion.span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold mb-6" 
          style={{ color: '#000000' }}
        >
          Our Development &{" "}
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
            Methodology
          </motion.span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto text-xl font-semibold mb-6" 
          style={{ color: '#4C1D95' }}
        >
          Building with Purpose, Delivering with Precision
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto text-base sm:text-lg leading-relaxed" 
          style={{ color: '#6B7280' }}
        >
          Our approach to development is rooted in agility, collaboration, and continuous improvement. 
          We understand that every client's journey is unique — that's why Intellects tailors its 
          methodology to fit your goals, timelines, and business model. We combine deep technical 
          knowledge with a human-centered mindset to ensure every solution we build is innovative, 
          reliable, and scalable.
        </motion.p>
      </motion.section>

      {/* ======================================================
          OUR PROVEN METHODOLOGY STEPS
      ====================================================== */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
        className="py-20 sm:py-24 px-6 md:px-16 lg:px-28"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold mb-6 text-center" 
          style={{ color: '#000000' }}
        >
          Our Proven{" "}
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
            Methodology
          </motion.span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-lg max-w-3xl mx-auto mb-16"
          style={{ color: '#6B7280' }}
        >
          A systematic approach that ensures success at every stage of your project.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              number: "01",
              title: "Discovery & Strategy",
              text: "We start with understanding — diving deep into your business, audience, and goals to build a solid strategic foundation.",
              icon: "🔍"
            },
            {
              number: "02",
              title: "Planning & Design",
              text: "Our experts design intelligent systems and user-friendly interfaces that balance creativity with functionality.",
              icon: "📐"
            },
            {
              number: "03",
              title: "Agile Development",
              text: "Using an agile framework, we develop in focused sprints, ensuring rapid progress, flexibility, and transparency throughout the process.",
              icon: "⚡"
            },
            {
              number: "04",
              title: "Testing & Quality Assurance",
              text: "Every product undergoes thorough testing to guarantee stability, security, and performance at every level.",
              icon: "✅"
            },
            {
              number: "05",
              title: "Deployment & Support",
              text: "We ensure seamless deployment and provide long-term support so your solutions continue performing as your business scales.",
              icon: "🚀"
            },
            {
              number: "06",
              title: "Continuous Improvement",
              text: "We don't stop at launch. We monitor performance and iterate, ensuring your solution evolves with market needs.",
              icon: "🔄"
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ 
                y: -12,
                scale: 1.02,
                boxShadow: '0 25px 50px rgba(76, 29, 149, 0.25)',
                borderColor: '#4C1D95',
                transition: { duration: 0.3 }
              }}
              className="p-8 rounded-2xl shadow-lg border-2 transition-all cursor-pointer relative overflow-hidden group bg-white"
              style={{ borderColor: '#E5E7EB' }}
            >
              {/* Animated Background Glow */}
              <motion.div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}
              />
              
              {/* Number Badge */}
              <motion.div 
                className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg opacity-20 group-hover:opacity-100 transition-opacity" 
                style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)', color: '#FFFFFF' }}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                {item.number}
              </motion.div>

              {/* Icon */}
              <motion.div 
                className="text-5xl mb-4"
                whileHover={{ 
                  scale: 1.2,
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                {item.icon}
              </motion.div>

              {/* Title */}
              <motion.h3 
                className="text-xl sm:text-2xl font-bold mb-3 relative z-10" 
                style={{ color: '#4C1D95' }}
                whileHover={{ x: 5, transition: { duration: 0.3 } }}
              >
                {item.title}
              </motion.h3>

              {/* Description */}
              <p className="leading-relaxed relative z-10" style={{ color: '#6B7280' }}>
                {item.text}
              </p>

              {/* Bottom Accent Line */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" 
                style={{ background: 'linear-gradient(90deg, #4C1D95, #7C3AED)' }}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ======================================================
          WHY IT WORKS
      ====================================================== */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
        className="py-20 sm:py-24 px-6 md:px-16 lg:px-28 text-center"
        style={{ backgroundColor: '#F9FAFB' }}
      >
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold mb-8" 
          style={{ color: '#4C1D95' }}
        >
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
        </motion.h2>
        <ul className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-base sm:text-lg">
          {[
            "✅ Transparent Communication",
            "⚙️ Agile and Adaptable Process",
            "🏆 Quality-First Culture",
            "🤝 Strong Partnership Mindset",
          ].map((point, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ 
                borderColor: '#4C1D95', 
                boxShadow: '0 10px 30px rgba(76, 29, 149, 0.2)',
                scale: 1.03,
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="p-6 rounded-lg border-2 shadow-sm transition-all text-left font-medium cursor-pointer"
              style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB', color: COLOR_TEXT }}
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
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
        className="py-20 sm:py-24 px-6 md:px-16 lg:px-28 text-center"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold mb-6" 
          style={{ color: '#4C1D95' }}
        >
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
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl mx-auto text-base sm:text-lg mb-8" 
          style={{ color: COLOR_TEXT }}
        >
          Over the years, Intellects has had the privilege of working with a diverse range of
          clients — from emerging startups to established enterprises across industries like
          technology, healthcare, retail, and finance. Our clients choose us not just for our
          skills — but for our commitment to helping them achieve lasting success.
        </motion.p>
        <motion.blockquote 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, type: "spring" }}
          className="italic text-xl font-semibold mb-10" 
          style={{ color: '#4C1D95' }}
        >
          "Trusted by forward-thinking brands who believe in innovation and excellence."
        </motion.blockquote>
      </motion.section>

      {/* ======================================================
          PARTNERSHIP SECTION + TESTIMONIAL BUTTON
      ====================================================== */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
        className="py-20 sm:py-24 px-6 md:px-16 lg:px-28 text-center"
        style={{ backgroundColor: '#F9FAFB' }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: '#4C1D95' }}>
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.08, 
            boxShadow: "0 20px 50px rgba(76, 29, 149, 0.6)",
            y: -3,
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              '0 10px 30px rgba(76, 29, 149, 0.3)',
              '0 10px 40px rgba(76, 29, 149, 0.5)',
              '0 10px 30px rgba(76, 29, 149, 0.3)'
            ]
          }}
          transition={{ duration: 0.6, boxShadow: { duration: 2, repeat: Infinity } }}
          className="inline-flex items-center justify-center px-10 py-4 rounded-full font-semibold shadow-2xl cursor-pointer transition-transform duration-200 relative overflow-hidden group"
          style={{ 
            background: 'linear-gradient(135deg, #4C1D95, #7C3AED)',
            color: "#FFFFFF",
          }}
        >
          {/* Animated shine effect */}
          <motion.div
            className="absolute inset-0 w-full h-full"
            style={{ 
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)'
            }}
            animate={{
              x: ['-100%', '200%']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1
            }}
          />
          
          {/* Using the locally defined Link component */}
          <Link to="/testimonials" className="flex items-center gap-3 text-lg relative z-10">
            Clients & Partners 
            <motion.span 
              className="text-2xl"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </motion.section>

      {/* ======================================================
          LET'S GROW TOGETHER (CTA)
      ====================================================== */}
      <motion.div
        className="px-6 md:px-12 max-w-7xl mx-auto py-16 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="rounded-3xl p-10 md:p-12 text-center shadow-2xl relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #4C1D95, #1F2937)' }}>
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl"
              animate={{ 
                rotate: [0, 360]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="relative z-10">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4 border-2 border-white/40"
            >
              <motion.svg 
                className="w-8 h-8 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </motion.svg>
            </motion.div>

            {/* Main Heading */}
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-black text-white mb-3 leading-tight"
            >
          Ready to{" "}
          <motion.span
            animate={{
              textShadow: [
                    `0 0 20px rgba(255,255,255,0)`,
                    `0 0 30px rgba(255,255,255,0.5)`,
                    `0 0 20px rgba(255,255,255,0)`
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
          >
            Grow?
              </motion.span>
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl font-bold text-white mb-4"
            >
          Let's Connect.
            </motion.p>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-white/90 text-base mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Intellects is more than a consulting firm — we're a growth partner that combines
              technology, creativity, and strategy to shape the future of business.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                to="/contact"
                className="group px-10 py-4 bg-white font-bold rounded-xl shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300 flex items-center gap-3 relative overflow-hidden"
                style={{ color: '#4C1D95' }}
              >
                {/* Button shine effect */}
                <motion.div
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-200%', '200%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                />
                <span className="relative z-10">Start Your Project</span>
                <motion.svg 
                  className="w-5 h-5 relative z-10" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </Link>
              
              <Link
                to="/contact"
                className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
                style={{ color: '#FFFFFF' }}
                onMouseEnter={e => { 
                  e.currentTarget.style.color = '#4C1D95'; 
                  e.currentTarget.style.backgroundColor = '#FFFFFF'; 
                }}
                onMouseLeave={e => { 
                  e.currentTarget.style.color = '#FFFFFF'; 
                  e.currentTarget.style.backgroundColor = 'transparent'; 
                }}
              >
                <span className="relative z-10 transition-colors duration-300">Schedule a Call</span>
              </Link>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 pt-6 border-t border-white/20"
            >
              <p className="text-white/70 text-sm mb-2">
                Or reach out directly
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
                <motion.a 
                  href="mailto:info@intellects.com" 
                  className="flex items-center gap-2 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium">info@intellects.com</span>
                </motion.a>
                <motion.a 
                  href="tel:+1234567890" 
                  className="flex items-center gap-2 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-medium">+1 (234) 567-890</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
