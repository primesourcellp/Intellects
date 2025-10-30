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

      {/* Why It Works Section */}
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
