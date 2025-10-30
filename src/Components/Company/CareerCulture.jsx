import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Lightbulb,
  TrendingUp,
  DollarSign,
  Briefcase,
  Zap,
  BookOpen,
  Clock,
  HeartHandshake,
  CheckCircle,
} from "lucide-react";
import sky8Image from "../../assets/sky8.jpg";
import aboutImage from "../../assets/about.jpg";
import soft9Image from "../../assets/soft9.png";

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

const AnimatedSection = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.2 }}
  >
    {children}
  </motion.div>
);

const BulletPoint = ({ icon: Icon, title, description, delay = 0, index = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.3 }}
    className="relative flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-lg border-2 overflow-hidden group"
    style={{ borderColor: '#E5E7EB' }}
    whileHover={{ 
      y: -8,
      scale: 1.03,
      borderColor: '#4C1D95',
      boxShadow: '0 25px 50px rgba(76, 29, 149, 0.25)',
      transition: { duration: 0.3 }
    }}
  >
    {/* Animated background glow on hover */}
    <motion.div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{ 
        background: 'radial-gradient(circle at center, rgba(76, 29, 149, 0.08) 0%, transparent 70%)'
      }}
    />
    
    {/* Icon with animation */}
    <motion.div
      whileHover={{ 
        scale: 1.2,
        rotate: [0, -10, 10, -10, 0],
        transition: { duration: 0.5 }
      }}
      className="relative z-10 mb-4"
    >
      <Icon className="w-12 h-12" style={{ color: '#4C1D95' }} />
    </motion.div>
    
    <h3 className="text-xl font-bold mb-3 relative z-10 transition-colors duration-300 group-hover:text-purple-800" style={{ color: '#000000' }}>
      {title}
    </h3>
    <p className="relative z-10 leading-relaxed" style={{ color: '#6B7280' }}>{description}</p>
    
    {/* Bottom accent line */}
    <motion.div
      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-800 to-purple-600"
      initial={{ width: 0 }}
      whileInView={{ width: '100%' }}
      transition={{ duration: 0.8, delay: delay + 0.3 }}
      viewport={{ once: true }}
    />
  </motion.div>
);

// Learning Opportunity Flip Card (Services Style)
const LearningOpportunityCard = ({ icon: Icon, title, description, details, delay = 0, gradient }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="relative w-full h-[350px]"
      style={{ perspective: '1200px' }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full cursor-pointer"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        {/* Front Side - Visual/Image */}
        <div
          className="absolute w-full h-full rounded-2xl overflow-hidden shadow-xl"
          style={{ 
            backfaceVisibility: 'hidden',
            background: gradient
          }}
        >
          {/* Animated Pattern Overlay */}
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 30% 50%, rgba(255,255,255,0.15) 0%, transparent 50%),
                               radial-gradient(circle at 70% 70%, rgba(255,255,255,0.1) 0%, transparent 50%)`
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Decorative Shapes */}
          <motion.div
            className="absolute top-6 right-6 w-20 h-20 rounded-full opacity-20 bg-white"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-6 left-6 w-16 h-16 rounded-lg opacity-20 bg-white"
            animate={{
              rotate: [0, -180, -360]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
            <motion.div
              animate={{
                y: [0, -10, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border-2 border-white/30 mb-6"
            >
              <Icon className="w-16 h-16 text-white" />
            </motion.div>
            
            <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
              {title}
            </h3>
            
            <p className="text-white/90 text-sm font-medium">
              Hover to learn more →
            </p>
          </div>
        </div>

        {/* Back Side - Details */}
        <div
          className="absolute w-full h-full rounded-2xl bg-white shadow-xl p-8 flex flex-col justify-center items-center text-center border-2"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            borderColor: '#4C1D95'
          }}
        >
          <div className="mb-4">
            <Icon className="w-12 h-12 mx-auto" style={{ color: '#4C1D95' }} />
          </div>
          
          <h3 className="text-xl font-bold mb-4" style={{ color: '#4C1D95' }}>
            {title}
          </h3>
          
          <p className="text-base leading-relaxed mb-4" style={{ color: '#6B7280' }}>
            {description}
          </p>
          
          <ul className="text-sm space-y-2 text-left w-full">
            {details.map((detail, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: isFlipped ? 1 : 0, x: isFlipped ? 0 : -10 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-2"
                style={{ color: '#374151' }}
              >
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#4C1D95' }} />
                <span>{detail}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Culture Card with Image Top and Content Bottom
const CultureCard = ({ icon: Icon, title, description, delay = 0, gradient, index = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.3 }}
    className="relative bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
    whileHover={{
      y: -10,
      scale: 1.02,
      boxShadow: '0 25px 50px rgba(76, 29, 149, 0.3)',
      transition: { duration: 0.3 }
    }}
  >
    {/* Top Image Section with Gradient */}
    <motion.div 
      className="relative h-48 overflow-hidden"
      style={{ background: gradient }}
    >
      {/* Animated Pattern Overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)`
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Floating Shapes */}
      <motion.div
        className="absolute top-4 right-4 w-16 h-16 rounded-full opacity-20 bg-white"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-4 left-4 w-12 h-12 rounded-lg opacity-20 bg-white"
        animate={{
          y: [0, 10, 0],
          rotate: [0, -180, -360]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          whileHover={{ 
            scale: 1.2,
            rotate: [0, -10, 10, -10, 0],
            transition: { duration: 0.5 }
          }}
          className="relative z-10 bg-white/20 backdrop-blur-sm p-6 rounded-2xl border-2 border-white/30"
        >
          <Icon className="w-16 h-16 text-white" />
        </motion.div>
      </div>
      
      {/* Bottom Wave Effect */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-8">
          <path 
            d="M0,0 C300,80 600,80 900,0 L1200,0 L1200,120 L0,120 Z" 
            fill="white"
          />
        </svg>
      </div>
    </motion.div>
    
    {/* Bottom Content Section */}
    <div className="p-6 text-center">
      <h3 className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-purple-800" style={{ color: '#000000' }}>
        {title}
      </h3>
      <p className="leading-relaxed text-base" style={{ color: '#6B7280' }}>
        {description}
      </p>
      
      {/* Bottom accent line */}
      <motion.div
        className="mt-4 mx-auto h-1 rounded-full bg-gradient-to-r from-purple-800 to-purple-600"
        initial={{ width: 0 }}
        whileInView={{ width: '60px' }}
        transition={{ duration: 0.8, delay: delay + 0.3 }}
        viewport={{ once: true }}
      />
    </div>
  </motion.div>
);

export default function CareerCulture() {
  return (
    <div style={{ backgroundColor: '#FFFFFF', color: '#1F2937' }}>
    {/* ======================================================
    HEADER SECTION (CAREER & COMPANY CULTURE)
====================================================== */}
<div 
  className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-between overflow-hidden"
  style={{ backgroundColor: '#FFFFFF' }}
>
  {/* Background Image with Overlay */}
  <div className="absolute inset-0">
    <img
      src={sky8Image}
      alt="Career Culture"
      className="w-full h-full object-cover"
      style={{ opacity: 1 }}
    />
    <div
      className="absolute inset-0"
      style={{
        background:
          'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)',
      }}
    />
  </div>

  {/* Floating Decorative Shapes */}
  <motion.div
    animate={{
      y: [0, -20, 0],
      rotate: [0, 5, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    className="absolute top-20 left-10 w-20 h-20 rounded-full opacity-20"
    style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}
  />
  <motion.div
    animate={{
      y: [0, 20, 0],
      rotate: [0, -5, 0],
      scale: [1, 1.15, 1],
    }}
    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    className="absolute bottom-20 right-10 w-32 h-32 rounded-full opacity-20"
    style={{ background: 'linear-gradient(135deg, #7C3AED, #4C1D95)' }}
  />

  {/* LEFT CONTENT (TEXT SECTION) */}
  <div className="relative z-10 flex-1 text-center md:text-left px-8 md:px-16 py-12">
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
      style={{
        color: '#000000',
        textShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}
    >
      <motion.span
        animate={{
          opacity: [0.7, 1, 0.7],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        Career &
      </motion.span>{' '}
      <motion.span
        style={{ color: '#4C1D95' }}
        animate={{
          textShadow: [
            `0 0 20px rgba(76,29,149,0)`,
            `0 0 20px rgba(76,29,149,0.5)`,
            `0 0 20px rgba(76,29,149,0)`,
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        Company Culture
      </motion.span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="text-lg md:text-xl max-w-xl mx-auto md:mx-0 font-light leading-relaxed"
      style={{ color: '#6B7280' }}
    >
      Grow With Purpose. Work With Intellect.
    </motion.p>
  </div>

  {/* RIGHT SIDE IMAGE WITH ANIMATION */}
  <motion.div
    initial={{ opacity: 0, x: 100, scale: 0.9 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    transition={{ duration: 1.2, ease: 'easeOut' }}
    className="relative z-10 flex-1 flex justify-center items-center px-6"
  >
    <motion.img
      src="https://media.istockphoto.com/id/1271291959/vector/business-line-or-development-process.jpg?s=612x612&w=0&k=20&c=g0OQGANYKu_CfnPHjgAPVqboJXe35HJHc1I5v4ot14A="
      alt="Business Development Illustration"
      className="max-w-md md:max-w-lg w-full rounded-2xl shadow-2xl"
      animate={{
        y: [0, -15, 0],
        scale: [1, 1.02, 1],
      }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    />
  </motion.div>
</div>

     {/* Introduction */}
<AnimatedSection>
  <div 
    className="relative overflow-hidden py-24 px-6 md:px-20"
    style={{
      background: "radial-gradient(circle at top left, #EDE9FE, #FFFFFF)"
    }}
  >

    {/* Background Blobs */}
    <motion.div
      className="absolute top-0 -left-20 w-96 h-96 rounded-full blur-3xl opacity-40"
      style={{ background: "#C4B5FD" }}
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 6, repeat: Infinity }}
    />
    <motion.div
      className="absolute bottom-0 -right-20 w-96 h-96 rounded-full blur-3xl opacity-40"
      style={{ background: "#A78BFA" }}
      animate={{ scale: [1.1, 1, 1.1] }}
      transition={{ duration: 6, repeat: Infinity }}
    />

    <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

      {/* Left Content */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center md:text-left"
      >
        
        {/* Glowing Badge */}
        <motion.span
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block mb-6 px-6 py-2 rounded-full text-sm font-bold border-2 shadow-lg"
          style={{
            color: "#4C1D95",
            borderColor: "#4C1D95",
            background: "rgba(76, 29, 149, 0.1)"
          }}
        >
          WHO WE ARE
        </motion.span>

        {/* Updated Typography */}
        <h2 
          className="text-3xl md:text-5xl font-black mb-6"
          style={{ color: "#3B0764" }}
        >
          We Build Intelligent&nbsp;
          <span style={{ color: "#7C3AED" }}>Innovation</span>
        </h2>

        <p 
          className="text-lg md:text-xl leading-relaxed tracking-wide"
          style={{ color: "#4B5563" }}
        >
          Join Intellects — where ideas turn into impact, and innovation meets opportunity.
          We're more than a team of developers, strategists, and consultants —
          we’re a community of thinkers, creators, and problem-solvers shaping a smarter future.
        </p>
      </motion.div>

     {/* Floating Image */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="flex justify-center"
>
  <motion.img
    src="https://savechildlife.org/uploads/who-we-are-1.png"
    alt="Who We Are"
    className="w-full max-w-sm drop-shadow-2xl"
    animate={{
      y: [0, -20, 0],
      rotate: [0, 1.5, 0],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
</motion.div>


    </div>

  </div>
</AnimatedSection>

{/* Our Work Culture */}
<AnimatedSection delay={0.3}>
  <div 
    className="relative overflow-hidden py-24 px-6 md:px-20"
    style={{
      background: "linear-gradient(135deg, #FFFFFF 30%, #F3E8FF 100%)"
    }}
  >

    {/* Background Decorative Blobs */}
    <motion.div
      className="absolute -top-20 left-0 w-80 h-80 rounded-full blur-3xl opacity-40"
      style={{ background: "#D8B4FE" }}
      animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
      transition={{ duration: 8, repeat: Infinity }}
    />
    <motion.div
      className="absolute bottom-0 -right-20 w-96 h-96 rounded-full blur-3xl opacity-40"
      style={{ background: "#A78BFA" }}
      animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
      transition={{ duration: 8, repeat: Infinity }}
    />

    <div className="relative max-w-5xl mx-auto text-center">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-black mb-8"
        style={{ color: "#3B0764" }}
      >
        Our Work&nbsp;
        <motion.span
          style={{ color: "#7C3AED" }}
          animate={{
            textShadow: [
              "0 0 10px rgba(124, 58, 237, 0.3)",
              "0 0 25px rgba(124, 58, 237, 0.6)",
              "0 0 10px rgba(124, 58, 237, 0.3)",
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Culture
        </motion.span>
      </motion.h2>

      {/* Subtitle Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
        style={{ color: "#4B5563" }}
      >
        We’ve built a culture that balances excellence and empathy —
        where performance matters, but people matter more.
        <br />
        Our culture thrives on teamwork, continuous learning,
        and the freedom to innovate boldly.
      </motion.p>

    {/* Floating Decorative Dots */}
<motion.div
  className="absolute top-10 left-10 w-4 h-4 bg-purple-400 rounded-full opacity-70"
  animate={{ y: [0, -10, 0] }}
  transition={{ duration: 2, repeat: Infinity }}
/>

<motion.div
  className="absolute bottom-10 right-10 w-3 h-3 bg-purple-300 rounded-full opacity-70"
  animate={{ y: [0, 10, 0] }}
  transition={{ duration: 3, repeat: Infinity }}
/>


    </div>

  </div>
</AnimatedSection>


  {/* ✅ What Defines Our Culture */}
<AnimatedSection delay={0.4}>
  <div
    className="relative overflow-hidden py-24 px-6 md:px-20"
    style={{
      background: "radial-gradient(circle at top left, #F5F3FF 0%, #FFFFFF 100%)"
    }}
  >

    {/* Decorative Floating Blobs */}
    <motion.div
      className="absolute -top-14 -left-24 w-[360px] h-[360px] bg-purple-300 opacity-30 rounded-full blur-[120px]"
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 9, repeat: Infinity }}
    />

    <motion.div
      className="absolute bottom-0 -right-32 w-[420px] h-[420px] bg-violet-400 opacity-30 rounded-full blur-[130px]"
      animate={{ scale: [1.1, 1, 1.1] }}
      transition={{ duration: 10, repeat: Infinity }}
    />

    {/* Content Wrapper */}
    <div className="relative max-w-6xl mx-auto z-10">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-extrabold text-center mb-14"
        style={{ color: "#3B0764" }}
      >
        What Defines Our{" "}
        <motion.span
          style={{ color: "#7C3AED" }}
          animate={{
            textShadow: [
              "0 0 10px rgba(124, 58, 237, 0.2)",
              "0 0 25px rgba(124, 58, 237, 0.5)",
              "0 0 10px rgba(124, 58, 237, 0.2)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Culture
        </motion.span>
      </motion.h2>

      {/* Cards Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

        <CultureCard
          icon={Users}
          title="Collaboration"
          description="We believe in shared success — every win is a team win."
          delay={0}
          gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        />

        <CultureCard
          icon={Clock}
          title="Flexibility"
          description="Work in ways that empower you to perform your best."
          delay={0.1}
          gradient="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
        />

        <CultureCard
          icon={Lightbulb}
          title="Innovation"
          description="We encourage new ideas, bold thinking, and creative problem-solving."
          delay={0.2}
          gradient="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
        />

        <CultureCard
          icon={TrendingUp}
          title="Growth Mindset"
          description="Every challenge is an opportunity to learn and improve."
          delay={0.3}
          gradient="linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
        />

        <CultureCard
          icon={HeartHandshake}
          title="Respect & Inclusion"
          description="We welcome diverse voices and perspectives."
          delay={0.4}
          gradient="linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
        />
        
      </div>

    </div>

  </div>
</AnimatedSection>



    {/* 🚀 Career Growth & Learning */}
<AnimatedSection delay={0.5}>
  <div
    className="relative overflow-hidden py-28 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12"
    style={{
      background: "radial-gradient(circle at bottom right, #ede9fe 0%, #ffffff 70%)",
    }}
  >
    {/* ===== Decorative Floating Blobs (Left & Right) ===== */}
    <motion.div
      className="absolute -top-24 -left-32 w-[380px] h-[380px] bg-purple-200 opacity-30 rounded-full blur-[120px]"
      animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
      transition={{ duration: 10, repeat: Infinity }}
    />

    <motion.div
      className="absolute bottom-[-80px] -right-[120px] w-[450px] h-[450px] bg-indigo-300 opacity-30 rounded-full blur-[130px]"
      animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
      transition={{ duration: 12, repeat: Infinity }}
    />

    {/* ===== Decorative Side Floating Dots ===== */}
    <motion.div
      className="absolute top-[20%] left-6 w-4 h-4 bg-purple-400 rounded-full opacity-70"
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
    />
    <motion.div
      className="absolute bottom-[20%] right-10 w-3 h-3 bg-indigo-400 rounded-full opacity-80"
      animate={{ y: [0, 12, 0] }}
      transition={{ duration: 3.5, repeat: Infinity }}
    />

    {/* ===== LEFT SIDE: IMAGE ===== */}
    <motion.div
      initial={{ opacity: 0, x: -80, scale: 0.9 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative z-10 md:w-1/2 flex justify-center"
    >
      <motion.img
        src="https://img.freepik.com/premium-vector/career-education-with-growth-concept-learning-model-associate-activity-hand-drawn-illustration_2175-10323.jpg"
        alt="Career Growth Illustration"
        className="w-[85%] max-w-md rounded-2xl shadow-2xl"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 1.5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>

    {/* ===== RIGHT SIDE: TEXT CONTENT ===== */}
    <div className="relative z-10 text-center md:text-left md:w-1/2">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-extrabold mb-10"
        style={{ color: "#3B0764" }}
      >
        Career Growth &{" "}
        <motion.span
          style={{ color: "#7C3AED" }}
          animate={{
            textShadow: [
              "0 0 10px rgba(124, 58, 237, 0.2)",
              "0 0 25px rgba(124, 58, 237, 0.5)",
              "0 0 10px rgba(124, 58, 237, 0.2)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Learning
        </motion.span>
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto md:mx-0"
        style={{ color: "#4B5563" }}
      >
        At Intellects, your career path is built around your strengths and ambitions.
        We offer continuous learning programs, hands-on training,
        mentorship, and certifications to help you stay ahead in the
        ever-evolving world of technology and consulting.
        <br /><br />
        We encourage our people to explore new domains, master emerging tools,
        and grow their expertise — because your success fuels our innovation.
      </motion.p>
    </div>
  </div>
</AnimatedSection>

    {/* Learning Opportunities Include */}
<AnimatedSection delay={0.1}>
  <div 
    className="py-24 md:py-32 px-6 md:px-20 relative overflow-hidden"
    style={{ background: "linear-gradient(120deg, #F3E8FF 0%, #E0EAFC 100%)" }}
  >
    {/* Soft floating lights */}
    <div className="absolute top-10 right-10 w-40 h-40 bg-purple-300 opacity-30 blur-[120px] animate-pulse" />
    <div className="absolute bottom-10 left-10 w-48 h-48 bg-blue-300 opacity-30 blur-[140px] animate-pulse" />

    <div className="max-w-6xl mx-auto relative z-10">
      
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-6xl font-extrabold text-center mb-20"
        style={{ color: '#4C1D95' }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Learning Opportunities{" "}
        <motion.span
          style={{ color: "#000000" }}
          animate={{
            textShadow: [
              `0 0 20px #4C1D95`,
              `0 0 40px #4C1D95`,
              `0 0 20px #4C1D95`
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Include
        </motion.span>
      </motion.h2>

      {/* All Opportunity Sections */}
      {[
        {
          title: "Professional Skill Development Programs",
          points: [
            "Technical skill workshops and hands-on training",
            "Soft skills and interpersonal development",
            "Industry best practices and standards",
            "Career advancement and leadership courses"
          ],
          img: sky8Image,
        },
        {
          title: "Technology Workshops & Certifications",
          points: [
            "Cloud platforms: AWS, Azure, Google Cloud",
            "Modern frameworks and development tools",
            "Security and compliance certifications",
            "DevOps, Agile, and CI/CD training"
          ],
          img: aboutImage,
          reverse: true
        },
        {
          title: "Mentorship from Industry Experts",
          points: [
            "One-on-one mentoring sessions",
            "Career guidance and planning",
            "Tech knowledge sharing",
            "Professional networking opportunities"
          ],
          img: soft9Image,
        },
        {
          title: "Leadership & Communication Training",
          points: [
            "Leadership development programs",
            "Presentation & public speaking",
            "Team building & collaboration",
            "Negotiation & conflict resolution"
          ],
          img: sky8Image,
          reverse: true
        },
        {
          title: "Cross-Department Collaboration",
          points: [
            "Cross-functional project assignments",
            "Team rotation & exchange programs",
            "Collaborative workshops",
            "Shared knowledge & innovations"
          ],
          img: aboutImage,
        }
      ].map((item, index) => (
        <motion.section
          key={index}
          initial={{ opacity: 0, x: item.reverse ? 100 : -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24`}
        >
          {/* Text */}
          <div className={`${item.reverse ? "lg:order-2" : ""}`}>
            <h4 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#4C1D95' }}>
              {item.title}
            </h4>
            <ul className="space-y-4">
              {item.points.map((point, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-6 h-6 mt-1" style={{ color: '#4C1D95' }} />
                  <span className="text-gray-700 text-lg">{point}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <motion.div
            className="rounded-3xl overflow-hidden shadow-2xl h-80 group lg:hover:scale-105 transition-transform duration-700"
            whileHover={{ y: -10, rotate: -1 }}
          >
            <img 
              src={item.img} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt={item.title}
            />
          </motion.div>
        </motion.section>
      ))}

    </div>
  </div>
</AnimatedSection>


     {/* Why Work With Intellects */}
<AnimatedSection delay={0.2}>
  <div 
    className="py-28 md:py-36 px-6 md:px-20 relative overflow-hidden"
    style={{
      background: "linear-gradient(135deg, #EEF2FF 0%, #E3F0FF 40%, #F3E8FF 100%)"
    }}
  >
    {/* Soft floating hover lights */}
    <motion.div
      className="absolute top-10 left-16 w-48 h-48 bg-purple-300 opacity-[0.25] blur-[120px] rounded-full"
      animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
      transition={{ duration: 6, repeat: Infinity }}
    />
    <motion.div
      className="absolute bottom-16 right-16 w-56 h-56 bg-blue-300 opacity-[0.25] blur-[140px] rounded-full"
      animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
      transition={{ duration: 7, repeat: Infinity }}
    />

    <div className="max-w-6xl mx-auto text-center relative z-10">
      <motion.h2 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-6xl font-extrabold mb-10 tracking-wide"
        style={{ color: "#4C1D95" }}
      >
        Why Work With{" "}
        <motion.span
          style={{ color: '#000000' }}
          animate={{
            textShadow: [
              "0 0 20px #4C1D95",
              "0 0 35px #4C1D95",
              "0 0 20px #4C1D95"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Intellects
        </motion.span>
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg md:text-2xl font-medium leading-relaxed max-w-4xl mx-auto"
        style={{ color: '#4B5563' }}
      >
        Join a team where innovation thrives and creativity leads the way.  
        Be a part of a digital revolution — solving real problems, creating real value,
        and building a future that inspires.
      </motion.p>

      {/* Subtle Divider animation */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "120px" }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="h-1 mx-auto mt-10 rounded-full"
        style={{ backgroundColor: "#4C1D95" }}
      />
    </div>
  </div>
</AnimatedSection>

     {/* Here's Why Professionals Love Working With Us */}
<AnimatedSection delay={0.8}>
  <div
    className="relative py-28 md:py-36 px-6 md:px-20 overflow-hidden"
    style={{
      background: "linear-gradient(135deg, #2E1065 0%, #4C1D95 40%, #7C3AED 100%)"
    }}
  >
    {/* Floating Glow Orbs */}
    <div className="absolute w-full h-full top-0 left-0 overflow-hidden pointer-events-none">
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full opacity-10"
          style={{
            width: Math.random() * 80 + 30,
            height: Math.random() * 80 + 30,
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%"
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 30, 0]
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}
    </div>

    <div className="relative max-w-6xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold mb-6 text-white"
      >
        Here’s Why Professionals Love Working With Us
      </motion.h2>

      {/* Animated Underline */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "200px" }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="h-1 bg-white mx-auto rounded-lg shadow-lg"
      />

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-16">
        {[
          {
            icon: Briefcase,
            title: "Global Client Opportunities",
            desc: "Work with diverse international clients and expand your professional network.",
            gradient: "from-blue-500 to-purple-500"
          },
          {
            icon: HeartHandshake,
            title: "Supportive Management",
            desc: "Transparent leadership that values your ideas and career growth.",
            gradient: "from-purple-500 to-pink-500"
          },
          {
            icon: Lightbulb,
            title: "Latest Technologies",
            desc: "Access cutting-edge development platforms & tools.",
            gradient: "from-yellow-400 to-orange-500"
          },
          {
            icon: Users,
            title: "Trust & Innovation",
            desc: "A culture built on respect, creativity & collaboration.",
            gradient: "from-green-500 to-teal-500"
          },
          {
            icon: DollarSign,
            title: "Competitive Compensation",
            desc: "Market-leading salary with performance bonuses.",
            gradient: "from-indigo-500 to-purple-600"
          }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.07,
              boxShadow: "0 0 30px rgba(255,255,255,0.3)",
              transition: { duration: 0.3 }
            }}
            className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20"
          >
            {/* Icon */}
            <div
              className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} mb-5 shadow-lg`}
            >
              <item.icon className="w-8 h-8 text-white" />
            </div>

            <h4 className="text-xl font-bold text-gray-900 mb-3">
              {item.title}
            </h4>
            <p className="text-gray-700 text-base leading-relaxed">
              {item.desc}
            </p>

          </motion.div>
        ))}
      </div>
    </div>
  </div>
</AnimatedSection>

      {/* Join the Intellects Family - CTA */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl p-12 md:p-16 text-center shadow-2xl relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #4C1D95, #1F2937)' }}
        >
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
              className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6 border-2 border-white/40"
            >
              <motion.svg 
                className="w-10 h-10 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </motion.svg>
            </motion.div>

            {/* Main Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight"
            >
              Join the{" "}
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
                Intellects Family
              </motion.span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white/90 text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              At Intellects, we're not just building technology — we're building
              futures. If you're driven by passion, purpose, and progress, your
              next big opportunity starts here.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
            <motion.button
                whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
                className="group px-10 py-4 bg-white font-bold rounded-xl shadow-2xl hover:shadow-white/20 transition-all duration-300 flex items-center gap-3 relative overflow-hidden"
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
                <span className="relative z-10">Start Your Journey</span>
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
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                View Open Positions
              </motion.button>
            </motion.div>

            {/* Quote */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-10 text-white/80 italic text-base"
            >
              "Start your journey with Intellects — where your ideas inspire innovation."
            </motion.p>
          </div>
        </motion.div> 
        </div>
    </div>
  );
}
