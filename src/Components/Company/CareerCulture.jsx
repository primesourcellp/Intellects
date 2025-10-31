import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
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
  Award,
  Target,
  Sparkles,
  ArrowRight,
  Rocket,
  Globe,
  Star,
} from "lucide-react";
import careerImage1 from "../../assets/home2.png";
import careerImage2 from "../../assets/home3.png";

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

export default function CareerCulture() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 0.8, 0.6]);

  // Scroll animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section - Enhanced */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-indigo-50">
        {/* Animated Gradient Background */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating Decorative Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, Math.random() * 200 - 100, 0],
              x: [0, Math.random() * 200 - 100, 0],
              rotate: [0, Math.random() * 360, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 10 + Math.random() * 5, 
              repeat: Infinity, 
              delay: i * 0.5,
              ease: "easeInOut" 
            }}
            className="absolute opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${40 + Math.random() * 60}px`,
              height: `${40 + Math.random() * 60}px`,
            }}
          >
            <div 
              className="w-full h-full rounded-2xl"
              style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}
            />
          </motion.div>
        ))}

        {/* Main Content */}
        <motion.div 
          className="relative z-10 text-center px-6 md:px-12 max-w-7xl mx-auto py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ y: y1, opacity }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 leading-tight"
            style={{ color: '#000000' }}
          >
            <TypingText text="Career & " delay={800} speed={60} />
            <motion.span
              style={{ color: '#4C1D95' }}
              animate={{
                textShadow: [
                  `0 0 20px rgba(76, 29, 149, 0)`,
                  `0 0 20px rgba(76, 29, 149, 0.5)`,
                  `0 0 20px rgba(76, 29, 149, 0)`
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <TypingText text="Company Culture" delay={2000} speed={60} />
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6"
          >
            Grow With Purpose. Work With Intellect.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12"
          >
            Join Intellects — where ideas turn into impact, and innovation meets opportunity. We're 
            more than a team of developers, strategists, and consultants — we're a community of 
            thinkers, creators, and problem-solvers who believe in using technology and intellect to 
            shape a smarter future.
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-500 font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-purple-600 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Life at Intellects Section */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3, margin: "-100px" }}
              variants={fadeInLeft}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-semibold mb-4">
                <Target className="w-4 h-4" />
                LIFE AT INTELLECTS
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight" style={{ color: '#000000' }}>
                Life at{" "}
                <motion.span
                  style={{ color: '#4C1D95' }}
                  animate={{
                    textShadow: [
                      `0 0 20px rgba(76, 29, 149, 0)`,
                      `0 0 20px rgba(76, 29, 149, 0.5)`,
                      `0 0 20px rgba(76, 29, 149, 0)`
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Intellects
                </motion.span>
              </h2>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Working at Intellects means being part of a company that values creativity, integrity, 
                and collaboration. We believe in open communication, mutual respect, and a positive work 
                environment that encourages everyone to bring their best ideas forward.
              </p>

            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3, margin: "-100px" }}
              variants={fadeInRight}
              className="relative group"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-md mx-auto lg:max-w-lg">
                <img
                  src={careerImage1}
                  alt="Life at Intellects"
                  className="w-full h-auto max-h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Work Culture Section */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 bg-gradient-to-b from-purple-50/30 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3, margin: "-100px" }}
              variants={fadeInLeft}
              className="relative group"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-md mx-auto lg:max-w-lg">
                <img
                  src={careerImage2}
                  alt="Our Work Culture"
                  className="w-full h-auto max-h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-transparent"></div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3, margin: "-100px" }}
              variants={fadeInRight}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-semibold mb-4">
                <Star className="w-4 h-4" />
                OUR WORK CULTURE
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight" style={{ color: '#000000' }}>
                Our{" "}
                <motion.span
                  style={{ color: '#4C1D95' }}
                  animate={{
                    textShadow: [
                      `0 0 20px rgba(76, 29, 149, 0)`,
                      `0 0 20px rgba(76, 29, 149, 0.5)`,
                      `0 0 20px rgba(76, 29, 149, 0)`
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Work Culture
                </motion.span>
              </h2>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                We've built a culture that balances excellence and empathy — where performance 
                matters, but people matter more.
              </p>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Our culture thrives on teamwork, continuous learning, and the freedom to innovate.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 bg-gradient-to-b from-purple-50/30 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3, margin: "-100px" }}
              variants={fadeInDown}
              className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6 font-semibold"
            >
              <Star className="w-4 h-4" />
              WHAT DEFINES OUR CULTURE
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3, margin: "-100px" }}
              variants={fadeInDown}
              className="text-3xl md:text-5xl font-bold mb-6"
              style={{ color: '#000000' }}
            >
              What Defines Our{" "}
              <motion.span
                style={{ color: '#4C1D95' }}
                animate={{
                  textShadow: [
                    `0 0 20px rgba(76, 29, 149, 0)`,
                    `0 0 20px rgba(76, 29, 149, 0.5)`,
                    `0 0 20px rgba(76, 29, 149, 0)`
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Culture
              </motion.span>
            </motion.h2>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Collaboration",
                description: "We believe in shared success — every win is a team win.",
                gradient: "from-blue-500 to-cyan-500",
                bgGradient: "from-blue-50 to-cyan-50"
              },
              {
                icon: Clock,
                title: "Flexibility",
                description: "Work in ways that empower you to perform your best.",
                gradient: "from-purple-500 to-pink-500",
                bgGradient: "from-purple-50 to-pink-50"
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "We encourage new ideas, bold thinking, and creative problem-solving.",
                gradient: "from-amber-500 to-orange-500",
                bgGradient: "from-amber-50 to-orange-50"
              },
              {
                icon: TrendingUp,
                title: "Growth Mindset",
                description: "Every challenge is an opportunity to learn and improve.",
                gradient: "from-green-500 to-emerald-500",
                bgGradient: "from-green-50 to-emerald-50"
              },
              {
                icon: HeartHandshake,
                title: "Respect & Inclusion",
                description: "We welcome diverse voices and perspectives.",
                gradient: "from-rose-500 to-red-500",
                bgGradient: "from-rose-50 to-red-50"
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3, margin: "-100px" }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
                className={`relative group bg-gradient-to-br ${value.bgGradient} p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden`}
              >
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} text-white mb-6 shadow-lg`}
                  >
                    <value.icon className="w-8 h-8" />
                  </motion.div>

                  <h3 className="text-xl md:text-2xl font-black mb-3" style={{ color: '#4C1D95' }}>
                    {value.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "60px" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className={`h-1.5 bg-gradient-to-r ${value.gradient} rounded-full mt-6`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Growth & Development Section */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3, margin: "-100px" }}
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6 font-semibold"
            >
              <Rocket className="w-4 h-4" />
              GROWTH & DEVELOPMENT
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3, margin: "-100px" }}
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-bold mb-6"
              style={{ color: '#000000' }}
            >
              Career Growth &{" "}
              <motion.span
                style={{ color: '#4C1D95' }}
                animate={{
                  textShadow: [
                    `0 0 20px rgba(76, 29, 149, 0)`,
                    `0 0 20px rgba(76, 29, 149, 0.5)`,
                    `0 0 20px rgba(76, 29, 149, 0)`
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Learning
              </motion.span>
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6"
            >
              At Intellects, your career path is built around your strengths and ambitions.
            </motion.p>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              We offer continuous learning programs, hands-on training, mentorship, and certifications 
              to help you stay ahead in the ever-changing world of technology and consulting.
            </motion.p>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mt-6 mb-12"
            >
              Our employees are encouraged to explore new roles, master new tools, and expand their 
              expertise — because your growth fuels our success.
            </motion.p>
          </div>

          {/* Learning Opportunities Include Heading */}
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3, margin: "-100px" }}
            variants={fadeInDown}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-center mb-12"
            style={{ color: '#000000' }}
          >
            Learning Opportunities Include:
          </motion.h3>

          {/* Learning Opportunities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Professional skill development programs",
                icon: BookOpen,
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "Technology workshops & certifications",
                icon: Award,
                gradient: "from-purple-500 to-pink-500"
              },
              {
                title: "Mentorship from industry experts",
                icon: Users,
                gradient: "from-amber-500 to-orange-500"
              },
              {
                title: "Leadership & communication training",
                icon: TrendingUp,
                gradient: "from-green-500 to-emerald-500"
              },
              {
                title: "Cross-department collaboration",
                icon: Briefcase,
                gradient: "from-indigo-500 to-purple-500"
              },
            ].map((program, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3, margin: "-100px" }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
                className="relative group bg-white p-8 rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all overflow-hidden"
              >
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${program.gradient} text-white mb-6 shadow-lg`}
                  >
                    <program.icon className="w-8 h-8" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-900">
                    {program.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Intellects Section */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3, margin: "-100px" }}
              variants={fadeInDown}
              className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6 font-semibold"
            >
              <Sparkles className="w-4 h-4" />
              WHY INTELLECTS
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3, margin: "-100px" }}
              variants={fadeInDown}
              className="text-3xl md:text-5xl font-bold mb-6"
              style={{ color: '#000000' }}
            >
              Why Work With{" "}
              <motion.span
                style={{ color: '#4C1D95' }}
                animate={{
                  textShadow: [
                    `0 0 20px rgba(76, 29, 149, 0)`,
                    `0 0 20px rgba(76, 29, 149, 0.5)`,
                    `0 0 20px rgba(76, 29, 149, 0)`
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Intellects
              </motion.span>
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3, margin: "-100px" }}
              variants={fadeInDown}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6"
            >
              Joining Intellects means being part of something bigger — a team that's shaping the digital 
              future for businesses across industries.
            </motion.p>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3, margin: "-100px" }}
              variants={fadeInDown}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4"
            >
              You'll work on real projects, solve real problems, and create real impact.
            </motion.p>
          </div>

          {/* Benefits Grid - Enhanced Design */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Globe,
                title: "Opportunity to work with global clients",
                description: "",
                color: "from-blue-500 to-cyan-500",
                bgColor: "from-blue-50 to-cyan-50"
              },
              {
                icon: HeartHandshake,
                title: "Transparent and supportive management",
                description: "",
                color: "from-purple-500 to-pink-500",
                bgColor: "from-purple-50 to-pink-50"
              },
              {
                icon: Rocket,
                title: "Exposure to the latest technologies",
                description: "",
                color: "from-indigo-500 to-purple-500",
                bgColor: "from-indigo-50 to-purple-50"
              },
              {
                icon: Users,
                title: "A culture of trust, innovation, and respect",
                description: "",
                color: "from-amber-500 to-orange-500",
                bgColor: "from-amber-50 to-orange-50"
              },
              {
                icon: DollarSign,
                title: "Competitive salary and growth opportunities",
                description: "",
                color: "from-green-500 to-emerald-500",
                bgColor: "from-green-50 to-emerald-50"
              },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3, margin: "-100px" }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className={`relative group bg-gradient-to-br ${benefit.bgColor} p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all overflow-hidden`}
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                    transition={{ duration: 0.5 }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} text-white mb-6 shadow-lg`}
                  >
                    <benefit.icon className="w-8 h-8" />
                  </motion.div>

                  <h3 className="text-xl font-black mb-3" style={{ color: '#4C1D95' }}>
                    {benefit.title}
                  </h3>
                  
                  {benefit.description && (
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  )}

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "60px" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className={`h-1.5 bg-gradient-to-r ${benefit.color} rounded-full mt-6`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <motion.div
        className="px-6 md:px-12 max-w-5xl mx-auto py-16 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="rounded-3xl p-10 md:p-12 text-center shadow-2xl relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #4C1D95, #1F2937)' }}>
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="relative z-10">
            {/* Main Heading */}
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight"
            >
              Join the Intellects Family
            </motion.h3>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white/90 text-lg mb-8 max-w-2xl mx-auto"
            >
              Start your journey with Intellects — where your ideas inspire innovation.
            </motion.p>

            {/* Action Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <Link
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                className="group px-10 py-4 bg-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300 flex items-center gap-2"
                style={{ color: '#4C1D95' }}
              >
                Start Your Journey
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
