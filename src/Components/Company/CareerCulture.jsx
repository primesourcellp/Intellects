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
      {/* Header Section */}
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
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
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)',
            }}
          />
        </div>

        {/* Enhanced Floating Shapes */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-20 h-20 rounded-full opacity-20"
          style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0],
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
        <div className="relative z-10 text-center px-6 md:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ color: '#000000' }}
          >
            <TypingText text="Career & " />
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
              <TypingText text="Company Culture" />
            </motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl max-w-4xl mx-auto font-light leading-relaxed"
            style={{ color: '#6B7280' }}
          >
            Grow With Purpose. Work With Intellect.
          </motion.p>
        </div>
      </div>

      {/* Introduction */}
      <AnimatedSection>
        <div className="py-20 px-6 md:px-20 text-center" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="max-w-4xl mx-auto">
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <motion.span
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(76, 29, 149, 0.3)',
                    '0 0 30px rgba(76, 29, 149, 0.5)',
                    '0 0 20px rgba(76, 29, 149, 0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="px-6 py-2 rounded-full text-sm font-bold border-2"
                style={{ 
                  color: '#4C1D95', 
                  borderColor: '#4C1D95',
                  background: 'rgba(76, 29, 149, 0.05)'
                }}
              >
                WHO WE ARE
              </motion.span>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl leading-relaxed" 
              style={{ color: '#6B7280' }}
            >
              Join Intellects — where ideas turn into impact, and innovation meets
              opportunity. We're more than a team of developers, strategists, and
              consultants — we're a community of thinkers, creators, and
              problem-solvers who believe in using technology and intellect to
              shape a smarter future.
            </motion.p>
          </div>
        </div>
      </AnimatedSection>

      {/* Life at Intellects */}
      <AnimatedSection delay={0.2}>
        <div className="py-16 px-6 md:px-20" style={{ backgroundColor: '#F9FAFB' }}>
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false, amount: 0.5 }}
              className="text-3xl md:text-5xl font-bold mb-8" 
              style={{ color: '#4C1D95' }}
            >
              Life at{" "}
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
                Intellects
              </motion.span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-lg leading-relaxed" 
              style={{ color: '#6B7280' }}
            >
              Working at Intellects means being part of a company that values
              creativity, integrity, and collaboration. We believe in open
              communication, mutual respect, and a positive work environment that
              encourages everyone to bring their best ideas forward.
            </motion.p>
          </div>
        </div>
      </AnimatedSection>

      {/* Our Work Culture */}
      <AnimatedSection delay={0.3}>
        <div className="py-16 px-6 md:px-20" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false, amount: 0.5 }}
              className="text-3xl md:text-5xl font-bold mb-8" 
              style={{ color: '#4C1D95' }}
            >
              Our Work{" "}
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
                Culture
              </motion.span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-lg leading-relaxed" 
              style={{ color: '#6B7280' }}
            >
              We've built a culture that balances excellence and empathy — where
              performance matters, but people matter more. <br />
              Our culture thrives on teamwork, continuous learning, and the
              freedom to innovate.
            </motion.p>
          </div>
        </div>
      </AnimatedSection>

      {/* What Defines Our Culture */}
      <AnimatedSection delay={0.4}>
        <div className="py-16 px-6 md:px-20" style={{ backgroundColor: '#F9FAFB' }}>
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false, amount: 0.5 }}
              className="text-3xl md:text-5xl font-bold text-center mb-12" 
              style={{ color: '#4C1D95' }}
            >
              What Defines Our{" "}
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
                Culture
              </motion.span>
            </motion.h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <CultureCard
                icon={Users}
                title="Collaboration"
                description="We believe in shared success — every win is a team win."
                delay={0}
                gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                index={0}
              />
              <CultureCard
                icon={Clock}
                title="Flexibility"
                description="Work in ways that empower you to perform your best."
                delay={0.1}
                gradient="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
                index={1}
              />
              <CultureCard
                icon={Lightbulb}
                title="Innovation"
                description="We encourage new ideas, bold thinking, and creative problem-solving."
                delay={0.2}
                gradient="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
                index={2}
              />
              <CultureCard
                icon={TrendingUp}
                title="Growth Mindset"
                description="Every challenge is an opportunity to learn and improve."
                delay={0.3}
                gradient="linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
                index={3}
              />
              <CultureCard
                icon={HeartHandshake}
                title="Respect & Inclusion"
                description="We welcome diverse voices and perspectives."
                delay={0.4}
                gradient="linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
                index={4}
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Career Growth & Learning */}
      <AnimatedSection delay={0.5}>
        <div className="py-20 md:py-28 px-6 md:px-20" style={{ backgroundColor: '#F9FAFB' }}>
          <div className="max-w-5xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false, amount: 0.5 }}
              className="text-3xl md:text-5xl font-bold mb-8" 
              style={{ color: '#4C1D95' }}
            >
              Career Growth &{" "}
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
                Learning
              </motion.span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto" 
              style={{ color: '#6B7280' }}
            >
              At Intellects, your career path is built around your strengths and
              ambitions. We offer continuous learning programs, hands-on training,
              mentorship, and certifications to help you stay ahead in the
              ever-changing world of technology and consulting. <br /><br />
              Our employees are encouraged to explore new roles, master new tools,
              and expand their expertise — because your growth fuels our success.
            </motion.p>
          </div>
        </div>
      </AnimatedSection>

      {/* Learning Opportunities Include */}
      <AnimatedSection delay={0.6}>
        <div className="py-20 md:py-28 px-6 md:px-20" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false, amount: 0.5 }}
              className="text-3xl md:text-5xl font-bold mb-16 text-center" 
              style={{ color: '#4C1D95' }}
            >
              Learning Opportunities{" "}
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
                Include
              </motion.span>
            </motion.h2>
            
            {/* Learning Opportunity 1 */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="py-8 mb-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Column */}
                <div>
                  <h4 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 leading-tight" style={{ color: '#4C1D95' }}>
                    Professional Skill Development Programs
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Technical skill workshops and hands-on training",
                      "Soft skills and interpersonal development",
                      "Industry best practices and standards",
                      "Career advancement and leadership courses"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: '#4C1D95' }} />
                        <span style={{ color: '#374151' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image Column */}
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl h-80 group">
                    <img 
                      src={sky8Image} 
                      alt="Professional Skill Development" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Learning Opportunity 2 */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="py-8 mb-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:grid-flow-dense">
                {/* Text Column */}
                <div className="lg:col-start-2">
                  <h4 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 leading-tight" style={{ color: '#4C1D95' }}>
                    Technology Workshops & Certifications
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Cloud platforms: AWS, Azure, Google Cloud",
                      "Modern frameworks and development tools",
                      "Security and compliance certifications",
                      "DevOps, Agile, and CI/CD training"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: '#4C1D95' }} />
                        <span style={{ color: '#374151' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image Column */}
                <div className="lg:col-start-1">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl h-80 group">
                    <img 
                      src={aboutImage} 
                      alt="Technology Workshops & Certifications" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Learning Opportunity 3 */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="py-8 mb-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Column */}
                <div>
                  <h4 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 leading-tight" style={{ color: '#4C1D95' }}>
                    Mentorship from Industry Experts
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Personalized one-on-one mentoring sessions",
                      "Strategic career guidance and planning",
                      "Technical expertise and knowledge sharing",
                      "Professional networking opportunities"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: '#4C1D95' }} />
                        <span style={{ color: '#374151' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image Column */}
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl h-80 group">
                    <img 
                      src={soft9Image} 
                      alt="Mentorship from Industry Experts" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Learning Opportunity 4 */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="py-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:grid-flow-dense">
                {/* Text Column */}
                <div className="lg:col-start-2">
                  <h4 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 leading-tight" style={{ color: '#4C1D95' }}>
                    Leadership & Communication Training
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Leadership development and management programs",
                      "Presentation and public speaking workshops",
                      "Team building and collaboration skills",
                      "Conflict resolution and negotiation training"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: '#4C1D95' }} />
                        <span style={{ color: '#374151' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image Column */}
                <div className="lg:col-start-1">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl h-80 group">
                    <img 
                      src={sky8Image} 
                      alt="Leadership & Communication Training" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
            </div>
            </motion.section>

            {/* Learning Opportunity 5 */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="py-8 mb-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Column */}
                <div>
                  <h4 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 leading-tight" style={{ color: '#4C1D95' }}>
                    Cross-Department Collaboration
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Cross-functional project assignments",
                      "Department rotation and exchange programs",
                      "Collaborative team workshops and brainstorming",
                      "Knowledge sharing across different teams"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: '#4C1D95' }} />
                        <span style={{ color: '#374151' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image Column */}
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl h-80 group">
                    <img 
                      src={aboutImage} 
                      alt="Cross-Department Collaboration" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Work With Intellects */}
      <AnimatedSection delay={0.7}>
        <div className="py-24 md:py-32 px-6 md:px-20" style={{ backgroundColor: '#F9FAFB' }}>
          <div className="max-w-6xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false, amount: 0.5 }}
              className="text-3xl md:text-5xl font-bold mb-8" 
              style={{ color: '#4C1D95' }}
            >
              Why Work With{" "}
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
                Intellects
              </motion.span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto" 
              style={{ color: '#6B7280' }}
            >
              Joining Intellects means being part of something bigger — a team
              that's shaping the digital future for businesses across industries.
              You'll work on real projects, solve real problems, and create real
              impact.
            </motion.p>
          </div>
        </div>
      </AnimatedSection>

      {/* Here's Why Professionals Love Working With Us */}
      <AnimatedSection delay={0.8}>
        <div className="py-24 md:py-32 px-6 md:px-20" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="max-w-6xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-8 text-center" 
              style={{ color: '#4C1D95' }}
            >
              Here's Why Professionals{" "}
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
                Love Working With Us
              </motion.span>
            </motion.h2>
            
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
              {[
                {
                  icon: Briefcase,
                  title: "Global Client Opportunities",
                  description: "Work with diverse international clients and expand your professional network across industries and markets.",
                  gradient: "from-blue-500 to-purple-600"
                },
                {
                  icon: HeartHandshake,
                  title: "Supportive Management",
                  description: "Experience transparent leadership and a management team that values your input and career growth.",
                  gradient: "from-purple-500 to-pink-600"
                },
                {
                  icon: Lightbulb,
                  title: "Latest Technologies",
                  description: "Stay ahead of the curve with access to cutting-edge tools, frameworks, and development platforms.",
                  gradient: "from-yellow-500 to-orange-600"
                },
                {
                  icon: Users,
                  title: "Trust & Innovation",
                  description: "Thrive in a culture built on mutual respect, creative thinking, and collaborative problem-solving.",
                  gradient: "from-green-500 to-teal-600"
                },
                {
                  icon: DollarSign,
                  title: "Competitive Compensation",
                  description: "Receive market-leading salary packages with performance bonuses and comprehensive benefits.",
                  gradient: "from-indigo-500 to-purple-600"
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="relative group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  {/* Gradient Header */}
                  <div className={`h-2 bg-gradient-to-r ${item.gradient}`}></div>
                  
                  <div className="p-6">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h4 className="text-xl font-bold mb-3 group-hover:text-purple-800 transition-colors" style={{ color: '#000000' }}>
                      {item.title}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-base leading-relaxed" style={{ color: '#6B7280' }}>
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Hover Effect Border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-800 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
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
