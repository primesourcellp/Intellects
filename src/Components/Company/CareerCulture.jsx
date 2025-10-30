import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

// Typing Animation Component
const TypingText = ({ text, delay = 0, speed = 50, className = "", cursorHeight = "1em" }) => {
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
      {currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          style={{ height: cursorHeight }}
          className="inline-block w-1 bg-current ml-1 align-middle"
        />
      )}
    </span>
  );
};

export default function CareerCulture() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 0.8, 0.6]);
  
  return (
    <div className="bg-gradient-to-b from-white via-purple-50/30 to-white overflow-hidden">
      {/* Hero Section - Redesigned */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
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

        {/* Particles Effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <motion.div 
          className="relative z-10 text-center px-6 md:px-12 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ y: y1, opacity }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full mb-8 shadow-lg"
          >
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">
              <TypingText text="Welcome to Intellects" delay={800} speed={80} cursorHeight="1.2em" />
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-black mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent">
              <TypingText text="Career & Company Culture" delay={2000} speed={70} cursorHeight="1em" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4.0 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-6 leading-relaxed"
          >
            Grow With Purpose. Work With Intellect.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4.5 }}
            className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
          >
            Join Intellects — where ideas turn into impact, and innovation meets opportunity. 
            We're more than a team of developers, strategists, and consultants — we're a community 
            of thinkers, creators, and problem-solvers who believe in using technology and intellect 
            to shape a smarter future.
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

      {/* Who We Are Section - Redesigned */}
      <section className="relative py-32 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
            >
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
                className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6 font-semibold"
              >
                <Target className="w-4 h-4" />
                LIFE AT INTELLECTS
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: false }}
                className="text-4xl md:text-6xl font-black mb-6 leading-tight"
              >
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Life at Intellects
                </span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                Working at Intellects means being part of a company that values creativity, integrity, 
                and collaboration. We believe in open communication, mutual respect, and a positive work 
                environment that encourages everyone to bring their best ideas forward.
              </motion.p>
            </motion.div>

            {/* Right Image with 3D Effect */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false }}
              className="relative"
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10"
              >
                <img
                  src="https://savechildlife.org/uploads/who-we-are-1.png"
                  alt="Who We Are"
                  className="w-full rounded-3xl shadow-2xl"
                />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -30, 0],
                  rotate: [0, 360, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full opacity-20 blur-2xl"
              />
              <motion.div
                animate={{
                  y: [0, 30, 0],
                  rotate: [360, 0, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full opacity-20 blur-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Core Values - Redesigned */}
      <section className="relative py-32 px-6 md:px-12 bg-gradient-to-b from-white to-purple-50/50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 px-4 py-2 rounded-full mb-6 font-semibold"
            >
              <Star className="w-4 h-4" />
              WHAT DEFINES OUR CULTURE
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: false }}
              className="text-4xl md:text-6xl font-black mb-6"
            >
              <span className="text-gray-900">What Defines Our </span>
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Culture
              </span>
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: false }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
                className={`relative group bg-gradient-to-br ${value.bgGradient} p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} text-white mb-6 shadow-lg`}
                  >
                    <value.icon className="w-8 h-8" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>

                  {/* Decorative element */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "60px" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: false }}
                    className={`h-1 bg-gradient-to-r ${value.gradient} rounded-full mt-6`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Career Growth & Development - Redesigned */}
      <section className="relative py-32 px-6 md:px-12 bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-800 text-white overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px),
              repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)
            `
          }} />
        </div>

        {/* Floating Orbs */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: Math.random() * 60 + 20,
              height: Math.random() * 60 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        <div className="relative max-w-7xl mx-auto z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 font-semibold border border-white/30"
            >
              <Rocket className="w-4 h-4" />
              GROWTH & DEVELOPMENT
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: false }}
              className="text-4xl md:text-6xl font-black mb-6"
            >
              Career Growth & Learning
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false }}
              className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
            >
              At Intellects, your career path is built around your strengths and ambitions. 
              We offer continuous learning programs, hands-on training, mentorship, and certifications 
              to help you stay ahead in the ever-changing world of technology and consulting.
              <br /><br />
              Our employees are encouraged to explore new roles, master new tools, and expand their 
              expertise — because your growth fuels our success.
            </motion.p>
          </div>

        </div>
      </section>


      {/* Learning Opportunities - Redesigned */}
      <section className="relative py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 px-4 py-2 rounded-full mb-6 font-semibold"
            >
              <BookOpen className="w-4 h-4" />
              LEARNING & DEVELOPMENT
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: false }}
              className="text-4xl md:text-6xl font-black mb-6"
            >
              <span className="text-gray-900">Learning Opportunities </span>
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Include
              </span>
            </motion.h2>
          </div>

          {/* Learning Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Professional Skill Development Programs",
                icon: BookOpen,
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "Technology Workshops & Certifications",
                icon: Award,
                gradient: "from-purple-500 to-pink-500"
              },
              {
                title: "Mentorship from Industry Experts",
                icon: Users,
                gradient: "from-amber-500 to-orange-500"
              },
              {
                title: "Leadership & Communication Training",
                icon: TrendingUp,
                gradient: "from-green-500 to-emerald-500"
              },
              {
                title: "Cross-Department Collaboration",
                icon: Briefcase,
                gradient: "from-indigo-500 to-purple-500"
              },
            ].map((program, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: false }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
                className="relative group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all overflow-hidden"
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
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


      {/* Why Choose Intellects - Redesigned */}
      <section className="relative py-32 px-6 md:px-12 bg-gradient-to-b from-purple-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 px-4 py-2 rounded-full mb-6 font-semibold"
            >
              <Sparkles className="w-4 h-4" />
              WHY INTELLECTS
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: false }}
              className="text-4xl md:text-6xl font-black mb-6"
            >
              <span className="text-gray-900">Why Work With </span>
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Intellects
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              Joining Intellects means being part of something bigger — a team that's shaping the digital 
              future for businesses across industries. You'll work on real projects, solve real problems, 
              and create real impact.
            </motion.p>

            <motion.h3
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: false }}
              className="text-2xl font-bold text-gray-800 max-w-3xl mx-auto"
            >
              Here's why professionals love working with us:
            </motion.h3>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Work with Global Clients",
                description: "Opportunity to work with global clients",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: HeartHandshake,
                title: "Supportive Management",
                description: "Transparent and supportive management",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Rocket,
                title: "Latest Technologies",
                description: "Exposure to the latest technologies",
                color: "from-indigo-500 to-purple-500"
              },
              {
                icon: Users,
                title: "Trust & Innovation",
                description: "A culture of trust, innovation, and respect",
                color: "from-amber-500 to-orange-500"
              },
              {
                icon: DollarSign,
                title: "Competitive Compensation",
                description: "Competitive salary and growth opportunities",
                color: "from-green-500 to-emerald-500"
              },
            ].map((benefit, i) => (
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
                className="relative group bg-white p-8 rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} text-white mb-6 shadow-lg`}
                >
                  <benefit.icon className="w-8 h-8" />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "60px" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: false }}
                  className={`h-1 bg-gradient-to-r ${benefit.color} rounded-full mt-6`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Home Page Style */}
      <motion.div
        className="px-6 md:px-12 max-w-5xl mx-auto py-16 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: false }}
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
              viewport={{ once: false }}
              className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight"
            >
              Join the Intellects Family
            </motion.h3>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
              className="text-white/90 text-lg mb-8 max-w-2xl mx-auto"
            >
              Start your journey with Intellects — where your ideas inspire innovation.
            </motion.p>

            {/* Action Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
              className="flex items-center justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="group px-10 py-4 bg-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-white/20 transition-all duration-300 flex items-center gap-2"
                style={{ color: '#4C1D95' }}
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
