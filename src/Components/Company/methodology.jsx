import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Compass,
  Palette,
  Cog,
  CheckCircle,
  Rocket,
  Users,
  Target,
  TrendingUp,
  Shield,
  Zap,
  MessageCircle,
  Award,
  Sparkles,
  ArrowRight,
  Globe,
  Lightbulb,
} from "lucide-react";
import aboutImage from "../../assets/sky8.jpg";

// Typing Animation Component
const TypingText = ({ text, delay = 0, speed = 50, className = "" }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, started, speed]);

  return (
    <span className={`${className} inline-block`}>
      {displayedText}
    </span>
  );
};

export default function Methodology() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 0.8, 0.6]);

  return (
    <div className="bg-gradient-to-b from-white via-purple-50/30 to-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative py-20 md:py-32 flex items-center justify-center overflow-hidden">
        {/* Animated Gradient Background */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating Decorative Shapes - Top to Bottom */}
        <motion.div
          animate={{ 
            y: [0, 200, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 md:left-20 opacity-20 z-0"
        >
          <div 
            className="w-20 h-20 rounded-2xl transform rotate-12" 
          style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}
        />
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, -150, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-40 right-10 md:right-32 opacity-20 z-0"
        >
          <div 
            className="w-16 h-16 rounded-full" 
            style={{ background: 'linear-gradient(135deg, #7C3AED, #F59E0B)' }}
          />
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, 180, 0],
            x: [0, 10, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 left-20 opacity-20 z-0"
        >
          <div 
            className="w-12 h-12 rounded-lg transform -rotate-12" 
          style={{ background: 'linear-gradient(135deg, #F59E0B, #4C1D95)' }}
        />
        </motion.div>

<<<<<<< Updated upstream
<<<<<<< Updated upstream
        {/* Content */}
        <div className="relative z-10 text-center px-6 md:px-16 lg:px-28">
                    
         {/* ======================================================
    HERO SECTION: TEXT LEFT + IMAGE ON RIGHT EDGE (SMALLER)
====================================================== */}
<div
  className="relative min-h-[80vh] flex flex-col md:flex-row items-center justify-between overflow-hidden gap-10 px-6 md:px-16 lg:px-28"
  style={{ backgroundColor: "#FFFFFF" }}
>
  {/* ==========================
      LEFT: HEADING + PARAGRAPH
  =========================== */}
  <div className="relative z-10 text-center md:text-left md:w-1/2 space-y-6">
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
      style={{ color: "#000000" }}
    >
      <TypingText text="Empowering Businesses Through " />
      <motion.span
        style={{ color: "#4C1D95" }}
        animate={{
          textShadow: [
            `0 0 20px ${"#4C1D95"}00`,
            `0 0 20px ${"#4C1D95"}50`,
            `0 0 20px ${"#4C1D95"}00`,
          ],
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
      className="text-lg md:text-xl font-light leading-relaxed"
      style={{ color: "#6B7280" }}
    >
      Building with Purpose. Delivering with Precision.
    </motion.p>
  </div>

 {/* ==========================
    RIGHT: IMAGE WITH ANIMATION
=========================== */}
<motion.div
  initial={{ opacity: 0, y: -200, scale: 0.8 }} // 👈 starts from above the screen
  animate={{ opacity: 1, y: 0, scale: 1 }}      // 👈 falls down into place
  transition={{
    duration: 1.2,
    ease: [0.22, 1, 0.36, 1], // smooth "easeOutBounce"-like feel
    delay: 0.3,
  }}
  whileHover={{ scale: 1.05 }}
  className="absolute right-10 bottom-0 top-auto hidden md:flex justify-end items-end z-0 -translate-y-29"
  style={{ width: "30%", maxHeight: "60%" }}
>
  <motion.img
    src="https://img.freepik.com/premium-vector/empowering-business-with-aidriven-customer-care-concept-digital-age-animated-video-business-cor_135661-4945.jpg"
    alt="Empowering Businesses Illustration"
    className="object-contain rounded-2xl shadow-2xl relative"
    animate={{
      y: [0, -10, 0], // 👈 subtle floating motion after drop
      scale: [1, 1.02, 1],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
</motion.div>
</div>
       </div>
     </div>

      
      {/* ⚡ DEVELOPMENT & METHODOLOGY INTRO – SUPER ANIMATED EDITION ⚡ */}
<motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1.2 }}
  viewport={{ once: false, amount: 0.25 }}
  className="py-28 px-6 md:px-16 lg:px-28 text-center relative overflow-hidden flex flex-col md:flex-row items-center gap-10"
  style={{ backgroundColor: "#F9FAFB" }}
>

  {/* 🖼️ Left Image */}
  <motion.div
    initial={{ opacity: 0, x: -80 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    className="flex-shrink-0 w-full md:w-1/2 flex justify-center"
  >
    <img
      src="https://previews.123rf.com/images/cosmaa/cosmaa1904/cosmaa190400031/123160072-vector-cartoon-illustration-of-teamwork-software-web-development-developing-concept-people.jpg"
      alt="Teamwork Development"
      className="rounded-2xl shadow-2xl w-full max-w-md md:max-w-lg object-cover"
    />
  </motion.div>

  {/* 🌌 Right Content */}
  <div className="md:w-1/2 text-center md:text-left relative z-10">

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
  </div>
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
=======
        {/* Particles Effect - Top to Bottom and Bottom to Top */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => {
            const isTopToBottom = i % 2 === 0;
            return (
        <motion.div
                key={i}
                className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: isTopToBottom ? '0%' : '100%',
                }}
          animate={{ 
                  y: isTopToBottom ? [0, 600, 0] : [0, -600, 0],
                  x: [0, (Math.random() - 0.5) * 100, 0],
                  opacity: [0, 0.5, 0],
                  scale: [0.5, 1.5, 0.5],
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "easeInOut"
                }}
              />
            );
          })}
        </div>

        {/* Main Content */}
        <motion.div 
          className="relative z-10 text-center px-6 md:px-12 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ y: y1, opacity }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight"
          >
            <span style={{ color: '#000000' }}>
              <TypingText text="Our Development  " delay={500} speed={70} />
            </span>
            <span style={{ color: '#4C1D95' }}>
              <TypingText text=" & Methodology" delay={1700} speed={70} />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Empowering Businesses Through Intelligence and Innovation.
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-purple-600 rounded-full"
            />
        </div>
        </motion.div>
      </div>

      {/* About Us Section */}
      <motion.section 
        className="relative py-32 px-6 md:px-12 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Two Column Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
                className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6 font-semibold"
              >
                <Target className="w-4 h-4" />
                ABOUT US
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: false }}
                className="text-4xl md:text-5xl font-black mb-6 leading-tight"
              >
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  About Us
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false }}
                className="text-lg text-gray-700 leading-relaxed mb-6"
              >
                At Intellects, we bridge technology, creativity, and human insight to help organizations 
                grow smarter, faster, and stronger in a digital world. We believe that innovation begins with 
                intellect — the power to think differently, solve challenges, and create progress.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: false }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                At Intellects, we don't just provide consulting services; we deliver meaningful transformation. 
                Our mission is to make technology and talent work together to drive measurable business success.
              </motion.p>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={aboutImage}
                  alt="About Intellects"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent"></div>
              </div>
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
                viewport={{ once: false }}
                className="absolute -bottom-6 -right-6 bg-white px-6 py-4 rounded-2xl shadow-xl"
              >
                <div className="text-center">
                  <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Innovation
                  </div>
                  <div className="text-sm text-gray-600 font-semibold">Driven by Intellect</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Development & Methodology Section */}
      <motion.section 
        className="relative py-32 px-6 md:px-12 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 px-4 py-2 rounded-full mb-6 font-semibold"
            >
              <Cog className="w-4 h-4" />
              OUR DEVELOPMENT & METHODOLOGY
            </motion.div>
>>>>>>> Stashed changes

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: false }}
              className="text-4xl md:text-6xl font-black mb-6"
            >
              <span className="text-gray-900">Building with Purpose, </span>
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Delivering with Precision
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false }}
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              Our approach to development is rooted in agility, collaboration, and continuous 
              improvement. We understand that every client's journey is unique — that's why Intellects 
              tailors its methodology to fit your goals, timelines, and business model. We combine deep 
              technical knowledge with a human-centered mindset to ensure every solution we build is 
              innovative, reliable, and scalable.
            </motion.p>
          </div>
        </div>
      </motion.section>

=======
        {/* Particles Effect - Top to Bottom and Bottom to Top */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => {
            const isTopToBottom = i % 2 === 0;
            return (
        <motion.div
                key={i}
                className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: isTopToBottom ? '0%' : '100%',
                }}
          animate={{ 
                  y: isTopToBottom ? [0, 600, 0] : [0, -600, 0],
                  x: [0, (Math.random() - 0.5) * 100, 0],
                  opacity: [0, 0.5, 0],
                  scale: [0.5, 1.5, 0.5],
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "easeInOut"
                }}
              />
            );
          })}
        </div>

        {/* Main Content */}
        <motion.div 
          className="relative z-10 text-center px-6 md:px-12 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ y: y1, opacity }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight"
          >
            <span style={{ color: '#000000' }}>
              <TypingText text="Our Development  " delay={500} speed={70} />
            </span>
            <span style={{ color: '#4C1D95' }}>
              <TypingText text=" & Methodology" delay={1700} speed={70} />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Empowering Businesses Through Intelligence and Innovation.
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-purple-600 rounded-full"
            />
        </div>
        </motion.div>
      </div>

      {/* About Us Section */}
      <motion.section 
        className="relative py-32 px-6 md:px-12 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Two Column Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
                className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6 font-semibold"
              >
                <Target className="w-4 h-4" />
                ABOUT US
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: false }}
                className="text-4xl md:text-5xl font-black mb-6 leading-tight"
              >
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  About Us
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false }}
                className="text-lg text-gray-700 leading-relaxed mb-6"
              >
                At Intellects, we bridge technology, creativity, and human insight to help organizations 
                grow smarter, faster, and stronger in a digital world. We believe that innovation begins with 
                intellect — the power to think differently, solve challenges, and create progress.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: false }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                At Intellects, we don't just provide consulting services; we deliver meaningful transformation. 
                Our mission is to make technology and talent work together to drive measurable business success.
              </motion.p>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={aboutImage}
                  alt="About Intellects"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent"></div>
              </div>
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
                viewport={{ once: false }}
                className="absolute -bottom-6 -right-6 bg-white px-6 py-4 rounded-2xl shadow-xl"
              >
                <div className="text-center">
                  <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Innovation
                  </div>
                  <div className="text-sm text-gray-600 font-semibold">Driven by Intellect</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Development & Methodology Section */}
      <motion.section 
        className="relative py-32 px-6 md:px-12 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 px-4 py-2 rounded-full mb-6 font-semibold"
            >
              <Cog className="w-4 h-4" />
              OUR DEVELOPMENT & METHODOLOGY
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: false }}
              className="text-4xl md:text-6xl font-black mb-6"
            >
              <span className="text-gray-900">Building with Purpose, </span>
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Delivering with Precision
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false }}
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              Our approach to development is rooted in agility, collaboration, and continuous 
              improvement. We understand that every client's journey is unique — that's why Intellects 
              tailors its methodology to fit your goals, timelines, and business model. We combine deep 
              technical knowledge with a human-centered mindset to ensure every solution we build is 
              innovative, reliable, and scalable.
            </motion.p>
          </div>
        </div>
      </motion.section>

>>>>>>> Stashed changes
      {/* Our Proven Methodology Section */}
      <motion.section 
        className="relative py-32 px-6 md:px-12 bg-gradient-to-b from-purple-50/50 to-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6 font-semibold"
            >
              <Sparkles className="w-4 h-4" />
              METHODOLOGY
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: false }}
              className="text-4xl md:text-6xl font-black mb-6"
            >
              <span className="text-gray-900">Our Proven </span>
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Methodology
              </span>
            </motion.h2>
          </div>

          {/* Methodology Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {[
    {
      number: "01",
                icon: Compass,
      title: "Discovery & Strategy",
                description: "We start with understanding — diving deep into your business, audience, and goals to build a solid strategic foundation.",
                gradient: "from-blue-500 to-cyan-500",
                bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      number: "02",
                icon: Palette,
      title: "Planning & Design",
                description: "Our experts design intelligent systems and user-friendly interfaces that balance creativity with functionality.",
                gradient: "from-purple-500 to-pink-500",
                bgGradient: "from-purple-50 to-pink-50"
    },
    {
      number: "03",
                icon: Cog,
      title: "Agile Development",
                description: "Using an agile framework, we develop in focused sprints, ensuring rapid progress, flexibility, and transparency throughout the process.",
                gradient: "from-indigo-500 to-purple-500",
                bgGradient: "from-indigo-50 to-purple-50"
    },
    {
      number: "04",
                icon: CheckCircle,
      title: "Testing & Quality Assurance",
                description: "Every product undergoes thorough testing to guarantee stability, security, and performance at every level.",
                gradient: "from-green-500 to-emerald-500",
                bgGradient: "from-green-50 to-emerald-50"
    },
    {
      number: "05",
                icon: Rocket,
      title: "Deployment & Support",
                description: "We ensure seamless deployment and provide long-term support so your solutions continue performing as your business scales.",
                gradient: "from-orange-500 to-red-500",
                bgGradient: "from-orange-50 to-red-50"
              },
            ].map((step, i) => (
    <motion.div
      key={i}
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: false }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
                className={`relative group bg-gradient-to-br ${step.bgGradient} p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  {/* Number Badge */}
                  <div className="absolute top-0 right-0 text-6xl font-black opacity-10">
                    {step.number}
        </div>

                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} text-white mb-6 shadow-lg`}
                  >
                    <step.icon className="w-8 h-8" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Decorative element */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "60px" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className={`h-1 bg-gradient-to-r ${step.gradient} rounded-full mt-6`}
                  />
      </div>
    </motion.div>
  ))}
          </div>
        </div>
      </motion.section>

<<<<<<< Updated upstream
<<<<<<< Updated upstream


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

{/* 🌟 WHY IT WORKS — */}
=======
      {/* Why It Works Section */}
>>>>>>> Stashed changes
=======
      {/* Why It Works Section */}
>>>>>>> Stashed changes
<motion.section
        className="relative py-32 px-6 md:px-12 bg-gradient-to-b from-white to-purple-50/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 px-4 py-2 rounded-full mb-6 font-semibold"
            >
              <Lightbulb className="w-4 h-4" />
              WHY IT WORKS
            </motion.div>

  <motion.h2
              initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: false }}
              className="text-4xl md:text-6xl font-black mb-6"
            >
              <span className="text-gray-900">Why It </span>
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
      Works
              </span>
  </motion.h2>
          </div>

          {/* Success Principles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: MessageCircle,
                title: "Transparent Communication",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Zap,
                title: "Agile and Adaptable Process",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Award,
                title: "Quality-First Culture",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: Users,
                title: "Strong Partnership Mindset",
                color: "from-orange-500 to-red-500"
              },
            ].map((principle, i) => (
      <motion.div
        key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: false }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="relative group bg-white p-8 rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${principle.color} text-white mb-6 shadow-lg`}
                >
                  <principle.icon className="w-8 h-8" />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {principle.title}
                </h3>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "60px" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: false }}
                  className={`h-1 bg-gradient-to-r ${principle.color} rounded-full mt-6`}
                />
      </motion.div>
    ))}
          </div>
        </div>
</motion.section>
<<<<<<< Updated upstream
<<<<<<< Updated upstream

{/* ======================================================
    OUR KEY CLIENTS (ULTRA LIGHT BACKGROUND)
====================================================== */}
<motion.section
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.2 }}
  className="py-20 sm:py-24 px-6 md:px-16 lg:px-28 text-center relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10"
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

  {/* LEFT: Text Content */}
  <div className="relative z-10 md:w-1/2 text-center md:text-left">
    {/* Heading */}
    <motion.h2 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-3xl md:text-5xl font-bold mb-6"
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
      className="max-w-4xl mx-auto text-base sm:text-lg mb-8"
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
      className="italic text-xl font-semibold"
      style={{ color: "#4C1D95" }}
    >
      "Trusted by visionary brands shaping the future."
    </motion.blockquote>
  </div>

  {/* RIGHT: Image */}
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    className="md:w-1/2 flex justify-center"
  >
    <img
      src="https://www.shutterstock.com/shutterstock/videos/1111081553/thumb/12.jpg?ip=x480"
      alt="Our Key Clients"
      className="rounded-2xl shadow-2xl w-full max-w-md md:max-w-lg object-cover"
    />
  </motion.div>

</motion.section>



{/* ======================================================
    PARTNERSHIP SECTION + TESTIMONIAL BUTTON (ULTRA LIGHT BG)
====================================================== */}
=======

      {/* Key Clients Section */}
<motion.section
        className="relative py-32 px-6 md:px-12 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto text-center">
  <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6 font-semibold"
          >
            <Globe className="w-4 h-4" />
            OUR CLIENTS
          </motion.div>

  <motion.h2 
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: false }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            <span className="text-gray-900">Our Key </span>
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
      Clients
            </span>
  </motion.h2>

  <motion.p 
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
            className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed"
          >
            Over the years, Intellects has had the privilege of working with a diverse range of clients — 
            from emerging startups to established enterprises across industries like technology, 
            healthcare, retail, and finance. Our clients choose us not just for our skills — but for our 
            commitment to helping them achieve lasting success.
  </motion.p>

  <motion.blockquote 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: false }}
            className="text-2xl font-bold text-purple-600 italic mb-12"
          >
            "Trusted by forward-thinking brands who believe in innovation and excellence."
  </motion.blockquote>
        </div>
</motion.section>

      {/* Strategic Partnerships Section */}
>>>>>>> Stashed changes
<motion.section
        className="relative py-32 px-6 md:px-12 bg-gradient-to-b from-purple-50/50 to-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto text-center">
  <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 px-4 py-2 rounded-full mb-6 font-semibold"
          >
            <TrendingUp className="w-4 h-4" />
            PARTNERSHIPS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: false }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
    Partnerships
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
            className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            Intellects partners with leading technology providers and platforms to ensure we deliver 
            world-class solutions. Our alliances help us access the best tools, frameworks, and 
            expertise — so our clients always stay ahead in an ever-evolving digital ecosystem.
          </motion.p>

          <motion.button
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group px-10 py-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center gap-3 mx-auto"
    >
      Clients & Partners 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
</motion.section>

=======

      {/* Key Clients Section */}
<motion.section
        className="relative py-32 px-6 md:px-12 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto text-center">
  <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6 font-semibold"
          >
            <Globe className="w-4 h-4" />
            OUR CLIENTS
          </motion.div>

  <motion.h2 
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: false }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            <span className="text-gray-900">Our Key </span>
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
      Clients
            </span>
  </motion.h2>

  <motion.p 
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
            className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed"
          >
            Over the years, Intellects has had the privilege of working with a diverse range of clients — 
            from emerging startups to established enterprises across industries like technology, 
            healthcare, retail, and finance. Our clients choose us not just for our skills — but for our 
            commitment to helping them achieve lasting success.
  </motion.p>

  <motion.blockquote 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: false }}
            className="text-2xl font-bold text-purple-600 italic mb-12"
          >
            "Trusted by forward-thinking brands who believe in innovation and excellence."
  </motion.blockquote>
        </div>
</motion.section>

      {/* Strategic Partnerships Section */}
<motion.section
        className="relative py-32 px-6 md:px-12 bg-gradient-to-b from-purple-50/50 to-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto text-center">
  <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 px-4 py-2 rounded-full mb-6 font-semibold"
          >
            <TrendingUp className="w-4 h-4" />
            PARTNERSHIPS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: false }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
    Partnerships
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
            className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            Intellects partners with leading technology providers and platforms to ensure we deliver 
            world-class solutions. Our alliances help us access the best tools, frameworks, and 
            expertise — so our clients always stay ahead in an ever-evolving digital ecosystem.
          </motion.p>

          <motion.button
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group px-10 py-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center gap-3 mx-auto"
    >
      Clients & Partners 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
</motion.section>

>>>>>>> Stashed changes
      {/* Final CTA Section */}
      <motion.div
        className="px-6 md:px-12 max-w-5xl mx-auto py-16 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: false }}
      >
        <div className="rounded-3xl p-10 md:p-12 text-center shadow-2xl relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="relative z-10">
            {/* Main Heading */}
            <motion.h3 
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight"
            >
              Ready to Transform Your Business?
            </motion.h3>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: false }}
              className="text-white/90 text-lg mb-8 max-w-2xl mx-auto"
            >
              Let's create something extraordinary together. We're here to make it happen.
            </motion.p>

            {/* Action Button */}
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
              className="flex items-center justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="group px-10 py-4 bg-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-white/20 transition-all duration-300 flex items-center gap-2"
                style={{ color: '#4C1D95' }}
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
