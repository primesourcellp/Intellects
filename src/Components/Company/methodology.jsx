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
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
        {/* Background Image with Overlay */}
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

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

      {/* ⚡ DEVELOPMENT & METHODOLOGY INTRO – SUPER ANIMATED EDITION ⚡ */}
<motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1.2 }}
  viewport={{ once: false, amount: 0.25 }}
  className="py-28 px-6 md:px-16 lg:px-28 text-center relative overflow-hidden"
  style={{ backgroundColor: "#F9FAFB" }}
>

  {/* 🌌 Floating Gradient Clouds */}
  <motion.div
    className="absolute inset-0"
    animate={{
      opacity: [0.3, 0.5, 0.3],
      scale: [1, 1.1, 1]
    }}
    transition={{ duration: 8, repeat: Infinity }}
    style={{
      background:
        "radial-gradient(circle, rgba(124,58,237,0.25) 0%, rgba(255,255,255,0) 70%)"
    }}
  />

  {/* 🚀 Badge with Bounce */}
  <motion.div
    initial={{ opacity: 0, y: -50, scale: 0.4 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.9, type: "spring", stiffness: 150 }}
    viewport={{ once: false }}
    className="inline-block mb-6 relative"
  >
    <motion.span
      className="px-7 py-3 rounded-full font-bold text-sm shadow-xl inline-block tracking-wider uppercase select-none cursor-default"
      style={{
        background: "linear-gradient(135deg, #4C1D95, #7C3AED)",
        color: "#FFFFFF"
      }}
      animate={{
        scale: [1, 1.08, 1],
        boxShadow: [
          "0 0 25px rgba(124,58,237,0.9)",
          "0 0 45px rgba(76,29,149,1)",
          "0 0 25px rgba(124,58,237,0.9)"
        ]
      }}
      transition={{ duration: 2.2, repeat: Infinity }}
    >
      OUR APPROACH
    </motion.span>
  </motion.div>

  {/* 🎥 Hero Heading with Flicker Glow */}
  <motion.h2
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, type: "spring", stiffness: 120, delay: 0.2 }}
    className="text-4xl md:text-6xl font-black mb-6 leading-snug tracking-tight"
    style={{ color: "#020617" }}
  >
    Our Development &{" "}
    <motion.span
      animate={{
        color: ["#4C1D95", "#7C3AED", "#4C1D95"],
        textShadow: [
          "0 0 10px rgba(124,58,237,0)",
          "0 0 35px rgba(124,58,237,0.9)",
          "0 0 10px rgba(124,58,237,0)"
        ]
      }}
      transition={{ duration: 2.5, repeat: Infinity }}
      style={{ display: "inline-block" }}
    >
      Methodology
    </motion.span>
  </motion.h2>

  {/* ⚡ Subtitle Slide-Up */}
  <motion.p
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.4 }}
    className="max-w-3xl mx-auto text-2xl font-semibold mb-6"
    style={{ color: "#5B21B6" }}
  >
    Building with Purpose, Delivering with Precision
  </motion.p>

  {/* 📜 Main Text with Wave Reveal */}
  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6,
        staggerChildren: 0.015,
        duration: 0.8
      }
    }}
    className="max-w-4xl mx-auto text-lg leading-relaxed"
    style={{ color: "#6B7280" }}
  >
    Our approach to development is rooted in agility, collaboration, and continuous improvement.
    We understand that every client's journey is unique — that's why Intellects tailors its
    methodology to fit your goals, timelines, and business model. We combine deep technical
    knowledge with a human-centered mindset to ensure every solution we build is
    innovative, reliable, and scalable.
  </motion.p>
</motion.section>
{/* ✅ Internal CSS required for flip effect */}
<style>{`
  .perspective { perspective: 1200px; }
  .preserve-3d { transform-style: preserve-3d; }
  .backface-hidden { backface-visibility: hidden; }
  .rotate-y-180 { transform: rotateY(180deg); }
`}</style>
{/* ✅ Internal CSS for Premium Hover Effect */}
<style>{`
  .card-3d {
    transform: translateZ(0);
    transition: transform 0.45s ease, box-shadow 0.45s ease, border-color 0.45s ease;
  }
  .card-3d:hover {
    transform: translateY(-12px) scale(1.05);
    box-shadow: 0 20px 50px rgba(124, 58, 237, 0.18);
    border-color: rgba(124, 58, 237, 0.6);
  }

  /* Shine animation */
  .shine-effect {
    position: relative;
    overflow: hidden;
  }
  .shine-effect::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    height: 100%;
    width: 50%;
    background: linear-gradient(115deg, transparent, rgba(255,255,255,0.4), transparent);
    transform: skewX(-20deg);
    transition: 0.7s;
  }
  .shine-effect:hover::before {
    left: 150%;
  }

  /* Floating icon animation */
  .float-icon {
    animation: floatIcon 2.4s ease-in-out infinite alternate;
  }
  @keyframes floatIcon {
    0% { transform: translateY(0px) scale(1); }
    100% { transform: translateY(-8px) scale(1.15); }
  }
`}</style>

{/* 🚀 PREMIUM HOVER ANIMATION CARD SECTION */}
<motion.h2
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
  className="text-4xl md:text-6xl font-black mb-8 leading-snug tracking-tight text-center max-w-7xl mx-auto"
  style={{ color: "#020617" }}
>
  Our Proven {" "}
  <motion.span
    animate={{
      color: ["#4C1D95", "#7C3AED", "#4C1D95"],
      textShadow: [
        "0 0 10px rgba(124,58,237,0)",
        "0 0 35px rgba(124,58,237,0.9)",
        "0 0 10px rgba(124,58,237,0)"
      ]
    }}
    transition={{ duration: 2.5, repeat: Infinity }}
    style={{ display: "inline-block" }}
  >
    Methodology
  </motion.span>
</motion.h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">
  {[
    {
      number: "01",
      title: "Discovery & Strategy",
      text: "We start with understanding — diving deep into your business, audience, and goals to build a solid strategic foundation.",
      icon: "🧭",
      bg: "bg-gradient-to-br from-purple-100 via-white to-purple-200"
    },
    {
      number: "02",
      title: "Planning & Design",
      text: "Our experts design intelligent systems and user-friendly interfaces that balance creativity with functionality.",
      icon: "🎨",
      bg: "bg-gradient-to-br from-indigo-100 via-white to-indigo-200"
    },
    {
      number: "03",
      title: "Agile Development",
      text: "Using an agile framework, we develop in focused sprints, ensuring rapid progress, flexibility,and transparency throughout the process.",
      icon: "⚙️",
      bg: "bg-gradient-to-br from-blue-100 via-white to-blue-200"
    },
    {
      number: "04",
      title: "Testing & Quality Assurance",
      text: "Every product undergoes thorough testing to guarantee stability, security, and performance at every level.",
      icon: "✅",
      bg: "bg-gradient-to-br from-emerald-100 via-white to-emerald-200"
    },
    {
      number: "05",
      title: "Deployment & Support",
      text: "We ensure seamless deployment and provide long-term support so your solutions continue performing as your business scales.",
      icon: "📡",
      bg: "bg-gradient-to-br from-rose-100 via-white to-rose-200"
    }
  ].map((item, i) => (
    <motion.div
      key={i}
      className={`shine-effect card-3d ${item.bg} border rounded-3xl p-7 shadow-md cursor-pointer`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6 }
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex flex-col items-start gap-4 relative">
        <div className="text-5xl float-icon">{item.icon}</div>

        <div className="flex justify-between w-full items-center">
          <h3 className="text-xl font-bold text-purple-900">
            {item.title}
          </h3>
          <span className="text-sm opacity-40 font-extrabold">
            {item.number}
          </span>
        </div>

        <p className="text-gray-600 leading-relaxed text-sm sm:text-base font-medium">
          {item.text}
        </p>
      </div>
    </motion.div>
  ))}
</div>



{/* ✅ Internal CSS for Hover & Gradient Animation */}
<style>{`
  .why-section-bg {
    background: linear-gradient(
      135deg,
      #F1EAFE 0%,
      #ECE9FF 30%,
      #EFEAFF 70%,
      #E9E2FF 100%
    );
    position: relative;
    overflow: hidden;
  }

  /* ✨ Soft Moving Glow Overlay */
  .why-section-bg::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at 35% 25%,
      rgba(124, 58, 237, 0.18),
      transparent 65%
    );
    animation: glowMove 9s infinite alternate ease-in-out;
  }

  /* 🌈 Extra Layer for Depth */
  .why-section-bg::after {
    content: "";
    position: absolute;
    bottom: -20%;
    right: -10%;
    width: 45%;
    height: 45%;
    background: radial-gradient(
      circle,
      rgba(109, 40, 217, 0.22),
      transparent 70%
    );
    filter: blur(80px);
    animation: glowPulse 10s infinite alternate ease-in-out;
  }

  @keyframes glowMove {
    from { transform: translate(0px, 0px); }
    to { transform: translate(70px, 50px); }
  }

  @keyframes glowPulse {
    from { opacity: 0.35; }
    to { opacity: 0.65; }
  }

  /* Premium Cards */
  .why-card {
    background: #FFFFFF;
    border: 2px solid #E5E7EB;
    border-radius: 18px;
    transition: all 0.35s ease;
  }

  .why-card:hover {
    transform: translateY(-8px) scale(1.04);
    border-color: #4C1D95;
    box-shadow: 0 14px 38px rgba(76, 29, 149, 0.22);
  }

  .icon-float {
    display: inline-block;
    transition: transform 0.35s ease;
  }

  .why-card:hover .icon-float {
    transform: translateY(-6px) scale(1.12);
  }
`}</style>

{/* 🌟 WHY IT WORKS — BACKGROUND REMOVED */}
<motion.section
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.2 }}
  className="why-section-bg py-28 px-6 md:px-16 lg:px-32 text-center relative"
  style={{ background: "transparent" }} // ✅ BG removed
>
  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="text-3xl md:text-5xl font-extrabold mb-10"
    style={{ color: '#4C1D95' }}
  >
    Why It{" "}
    <motion.span
      style={{ color: '#000000' }}
      animate={{
        textShadow: [
          '0 0 10px rgba(76,29,149,0)',
          '0 0 12px rgba(76,29,149,0.35)',
          '0 0 10px rgba(76,29,149,0)'
        ]
      }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      Works
    </motion.span>
  </motion.h2>

  <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
    {[
      { icon: "💬", title: "Transparent Communication" },
      { icon: "⚙️", title: "Agile & Adaptable Process" },
      { icon: "🏆", title: "Quality-First Culture" },
      { icon: "🤝", title: "Strong Partnership Mindset" }
    ].map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: i * 0.12, duration: 0.55 }
        }}
        viewport={{ once: true, amount: 0.2 }}
        className="why-card p-7 flex items-center gap-4 text-left cursor-pointer 
          rounded-xl bg-white shadow-md hover:shadow-lg transition-all"
      >
        <span className="text-3xl icon-float">{item.icon}</span>
        <span className="text-lg font-semibold text-gray-800">
          {item.title}
        </span>
      </motion.div>
    ))}
  </div>
</motion.section>
{/* ======================================================
    OUR KEY CLIENTS (ULTRA LIGHT BACKGROUND)
====================================================== */}
<motion.section
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.2 }}
  className="py-20 sm:py-24 px-6 md:px-16 lg:px-28 text-center relative overflow-hidden"
  style={{ 
    background: "linear-gradient(135deg, #FFFFFF, #F7F5FF)" 
  }}
>
  {/* Soft Glow Overlay */}
  <motion.div
    className="absolute inset-0 opacity-35"
    style={{
      background:
        "radial-gradient(circle at top left, rgba(124,58,237,0.10), transparent 65%)"
    }}
    animate={{ opacity: [0.2, 0.4, 0.2] }}
    transition={{ duration: 5, repeat: Infinity }}
  />

  {/* Heading */}
  <motion.h2 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="text-3xl md:text-5xl font-bold mb-6 relative z-10"
    style={{ color: "#4C1D95" }}
  >
    Our Key{" "}
    <motion.span
      style={{ color: "#000000" }}
      animate={{
        textShadow: [
          `0 0 14px rgba(76,29,149,0)`,
          `0 0 14px rgba(76,29,149,0.35)`,
          `0 0 14px rgba(76,29,149,0)`
        ]
      }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      Clients
    </motion.span>
  </motion.h2>

  {/* Subtext */}
  <motion.p 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.2 }}
    className="max-w-4xl mx-auto text-base sm:text-lg mb-8 relative z-10"
    style={{ color: "#4B5563" }}
  >
    Over the years, Intellects has had the privilege of working with a diverse 
    range of clients — from emerging startups to established enterprises across 
    industries like technology, healthcare, retail, and finance. We are committed 
    to innovation, quality, and results.
  </motion.p>

  {/* Highlight Quote */}
  <motion.blockquote 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7, delay: 0.3, type: "spring" }}
    className="italic text-xl font-semibold mb-10 relative z-10"
    style={{ color: "#4C1D95" }}
  >
    "Trusted by visionary brands shaping the future."
  </motion.blockquote>

</motion.section>


{/* ======================================================
    PARTNERSHIP SECTION + TESTIMONIAL BUTTON (ULTRA LIGHT BG)
====================================================== */}
<motion.section
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.2 }}
  className="py-20 sm:py-24 px-6 md:px-16 lg:px-28 text-center relative overflow-hidden"
  style={{
    background: "linear-gradient(135deg, #FFFFFF, #F7F3FF)", 
    color: "#2D0F73"
  }}
>

  {/* Soft Glow Overlay */}
  <motion.div
    className="absolute inset-0"
    style={{
      background:
        "radial-gradient(circle at bottom right, rgba(124,58,237,0.12), transparent 70%)"
    }}
    animate={{ opacity: [0.18, 0.28, 0.18] }}
    transition={{ duration: 6, repeat: Infinity }}
  />

  {/* Decorative Blur Elements */}
  <div className="absolute -top-12 -left-12 w-36 h-36 bg-purple-200 opacity-20 blur-3xl rounded-full"></div>
  <div className="absolute -bottom-24 right-0 w-48 h-48 bg-purple-100 opacity-25 blur-3xl rounded-full"></div>

  {/* Title */}
  <h2 className="text-3xl md:text-5xl font-bold mb-4 relative z-10">
    <motion.span
      style={{ color: "#4C1D95" }}
      animate={{
        textShadow: [
          `0 0 14px rgba(76,29,149,0)`,
          `0 0 14px rgba(76,29,149,0.45)`,
          `0 0 14px rgba(76,29,149,0)`
        ]
      }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      Strategic
    </motion.span>{" "}
    Partnerships
  </h2>

  {/* Subtext */}
  <p className="max-w-4xl mx-auto text-base sm:text-lg leading-relaxed mb-10 relative z-10 text-gray-700">
    Intellects partners with leading technology providers and platforms to ensure 
    world-class digital solutions. Our alliances help us deliver the best 
    technologies so our clients stay future-ready in a fast-changing landscape.
  </p>

  {/* Button */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.1 }}
    className="inline-flex items-center justify-center px-10 py-4 rounded-full font-semibold shadow-xl cursor-pointer relative overflow-hidden group z-10"
    style={{
      background: "linear-gradient(135deg, #7C3AED, #C084FC)"
    }}
  >
    <motion.div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)"
      }}
      animate={{ x: ['-120%', '200%'] }}
      transition={{ duration: 2, repeat: Infinity }}
    />

    <Link 
      to="/testimonials"
      className="flex items-center gap-3 text-lg relative z-10 text-white"
    >
      Clients & Partners 
      <motion.span 
        className="text-2xl"
        animate={{ x: [0, 6, 0] }}
        transition={{ duration: 1.4, repeat: Infinity }}
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
        className="px-6 md:px-12 max-w-6xl mx-auto py-10 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="rounded-3xl p-8 md:p-10 text-center shadow-2xl relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #4C1D95, #1F2937)' }}>
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

            
          </div>
        </div>
      </motion.div>
    </div>
  );
}
