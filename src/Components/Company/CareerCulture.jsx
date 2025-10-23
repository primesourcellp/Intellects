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
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

const BulletPoint = ({ icon: Icon, title, description }) => (
  <motion.div 
    className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
    style={{ borderColor: '#E5E7EB' }}
    whileHover={{ 
      borderColor: '#4C1D95',
      boxShadow: '0 20px 40px rgba(76, 29, 149, 0.2)'
    }}
  >
    <Icon className="w-10 h-10 mb-4" style={{ color: '#4C1D95' }} />
    <h3 className="text-xl font-semibold mb-2" style={{ color: '#000000' }}>{title}</h3>
    <p style={{ color: '#6B7280' }}>{description}</p>
  </motion.div>
);

export default function CareerCulture() {
  return (
    <div style={{ backgroundColor: '#FFFFFF', color: '#1F2937' }}>
      {/* Header Section */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
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
        <div className="relative z-10 text-center px-6 md:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ color: '#000000' }}
          >
            <TypingText text="Career & Company Culture" />
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"
            style={{ color: '#6B7280' }}
          >
            Grow With Purpose. Work With Intellect.
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
              Join Our Team
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, borderColor: '#4C1D95', color: '#4C1D95' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full font-semibold border-2 bg-white"
              style={{ borderColor: '#E5E7EB', color: '#000000' }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Introduction */}
      <AnimatedSection>
        <div className="py-16 px-6 md:px-20 text-center" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#6B7280' }}>
              Join Intellects — where ideas turn into impact, and innovation meets
              opportunity. We're more than a team of developers, strategists, and
              consultants — we're a community of thinkers, creators, and
              problem-solvers who believe in using technology and intellect to
              shape a smarter future.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Life at Intellects */}
      <AnimatedSection delay={0.2}>
        <div className="py-16 px-6 md:px-20" style={{ backgroundColor: '#F9FAFB' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#4C1D95' }}>
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
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: '#6B7280' }}>
              Working at Intellects means being part of a company that values
              creativity, integrity, and collaboration. We believe in open
              communication, mutual respect, and a positive work environment that
              encourages everyone to bring their best ideas forward.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Our Work Culture */}
      <AnimatedSection delay={0.3}>
        <div className="py-16 px-6 md:px-20" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#4C1D95' }}>
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
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: '#6B7280' }}>
              We've built a culture that balances excellence and empathy — where
              performance matters, but people matter more. <br />
              Our culture thrives on teamwork, continuous learning, and the
              freedom to innovate.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* What Defines Our Culture */}
      <AnimatedSection delay={0.4}>
        <div className="py-16 px-6 md:px-20" style={{ backgroundColor: '#F9FAFB' }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#4C1D95' }}>
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
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <BulletPoint
                icon={Users}
                title="Collaboration"
                description="We believe in shared success — every win is a team win."
              />
              <BulletPoint
                icon={Clock}
                title="Flexibility"
                description="Work in ways that empower you to perform your best."
              />
              <BulletPoint
                icon={Lightbulb}
                title="Innovation"
                description="We encourage new ideas, bold thinking, and creative problem-solving."
              />
              <BulletPoint
                icon={TrendingUp}
                title="Growth Mindset"
                description="Every challenge is an opportunity to learn and improve."
              />
              <BulletPoint
                icon={HeartHandshake}
                title="Respect & Inclusion"
                description="We welcome diverse voices and perspectives."
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Career Growth & Learning */}
      <AnimatedSection delay={0.5}>
        <div className="py-16 px-6 md:px-20" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#4C1D95' }}>
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
            </h2>
            <p className="text-lg leading-relaxed mb-10" style={{ color: '#6B7280' }}>
              At Intellects, your career path is built around your strengths and
              ambitions. We offer continuous learning programs, hands-on training,
              mentorship, and certifications to help you stay ahead in the
              ever-changing world of technology and consulting. <br />
              Our employees are encouraged to explore new roles, master new tools,
              and expand their expertise — because your growth fuels our success.
            </p>

            <h3 className="text-2xl font-semibold mb-8" style={{ color: '#4C1D95' }}>
              Learning Opportunities Include:
            </h3>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <BulletPoint
                icon={BookOpen}
                title="Professional Skill Development Programs"
                description="Professional skill development programs."
              />
              <BulletPoint
                icon={CheckCircle}
                title="Technology Workshops & Certifications"
                description="Technology workshops & certifications."
              />
              <BulletPoint
                icon={HeartHandshake}
                title="Mentorship from Industry Experts"
                description="Mentorship from industry experts."
              />
              <BulletPoint
                icon={Zap}
                title="Leadership & Communication Training"
                description="Leadership & communication training."
              />
              <BulletPoint
                icon={Users}
                title="Cross-Department Collaboration"
                description="Cross-department collaboration."
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Work With Intellects */}
      <AnimatedSection delay={0.6}>
        <div className="py-16 px-6 md:px-20" style={{ backgroundColor: '#F9FAFB' }}>
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#4C1D95' }}>
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
            </h2>
            <p className="text-lg leading-relaxed mb-10" style={{ color: '#6B7280' }}>
              Joining Intellects means being part of something bigger — a team
              that's shaping the digital future for businesses across industries.
              You'll work on real projects, solve real problems, and create real
              impact.
            </p>
            <h3 className="text-xl font-semibold mb-8" style={{ color: '#4C1D95' }}>
              Here's why professionals love working with us:
            </h3>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <BulletPoint
                icon={Briefcase}
                title="Opportunity to Work with Global Clients"
                description="Opportunity to work with global clients."
              />
              <BulletPoint
                icon={HeartHandshake}
                title="Transparent and Supportive Management"
                description="Transparent and supportive management."
              />
              <BulletPoint
                icon={Lightbulb}
                title="Exposure to the Latest Technologies"
                description="Exposure to the latest technologies."
              />
              <BulletPoint
                icon={Users}
                title="A Culture of Trust, Innovation, and Respect"
                description="A culture of trust, innovation, and respect."
              />
              <BulletPoint
                icon={DollarSign}
                title="Competitive Salary and Growth Opportunities"
                description="Competitive salary and growth opportunities."
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Join the Intellects Family - CTA */}
      <AnimatedSection delay={0.8}>
        <div className="py-20 px-6 md:px-20" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#4C1D95' }}>
              Join the Intellects{" "}
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
                Family
              </motion.span>
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#6B7280' }}>
              At Intellects, we're not just building technology — we're building
              futures. If you're driven by passion, purpose, and progress, your
              next big opportunity starts here.
            </p>

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
              Start Your Journey →
            </motion.button>

            <p className="mt-6 italic" style={{ color: '#6B7280' }}>
              "Start your journey with Intellects — where your ideas inspire
              innovation."
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
