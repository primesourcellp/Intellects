import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { theme } from "../../theme";

export default function Home() {
  // Using centralized theme colors
  const { colors, shadows, gradients } = theme;

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 1.0, ease: "easeOut" } },
  };

  // FAQ toggle state
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="overflow-x-hidden" style={{ backgroundColor: colors.neutral.white, color: colors.neutral.gray800 }}>
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl"
          style={{ background: `radial-gradient(circle, ${colors.primary.lighter}40, ${colors.secondary.lighter}20)` }}
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.25, 0.15, 0.25]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-0 w-80 h-80 rounded-full blur-3xl"
          style={{ background: `radial-gradient(circle, ${colors.secondary.lighter}40, ${colors.accent.lighter}20)` }}
        />
        <motion.div
          animate={{ 
            y: [0, -100, 0],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-1/4 w-72 h-72 rounded-full blur-3xl"
          style={{ background: `radial-gradient(circle, ${colors.accent.lighter}40, ${colors.primary.lighter}20)` }}
        />
      </div>

      {/* ========================================
        HERO SECTION - ENHANCED
      ======================================== */}
      <section
        className="relative py-32 md:py-40 px-6 md:px-12 lg:px-24 text-center shadow-lg overflow-hidden"
        style={{ backgroundColor: colors.neutral.white, boxShadow: shadows.md }}
      >
        {/* Floating Icons */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 md:left-20 opacity-20"
        >
          <div 
            className="w-20 h-20 rounded-2xl transform rotate-12" 
            style={{ background: `linear-gradient(135deg, ${colors.primary.main}, ${colors.secondary.main})` }}
          />
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-40 right-10 md:right-32 opacity-20"
        >
          <div 
            className="w-16 h-16 rounded-full" 
            style={{ background: `linear-gradient(135deg, ${colors.secondary.main}, ${colors.accent.main})` }}
          />
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, -15, 0],
            x: [0, 10, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-20 opacity-20"
        >
          <div 
            className="w-12 h-12 rounded-lg transform -rotate-12" 
            style={{ background: `linear-gradient(135deg, ${colors.accent.main}, ${colors.primary.light})` }}
          />
        </motion.div>

        <motion.h1 
          initial="hidden" 
          animate="show" 
          variants={{
            hidden: { opacity: 0, y: 50, scale: 0.9 },
            show: { 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: { 
                duration: 0.8, 
                ease: "easeOut",
                type: "spring",
                stiffness: 100
              } 
            }
          }} 
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight relative z-10"
        >
          Turning Ambitious Ideas into{" "}
          <motion.span 
            style={{ color: colors.primary.main }}
            animate={{ 
              textShadow: [
                `0 0 20px ${colors.primary.main}00`,
                `0 0 20px ${colors.primary.main}50`,
                `0 0 20px ${colors.primary.main}00`
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Real-World Impact
          </motion.span>
        </motion.h1>
        
        <motion.p 
          initial="hidden" 
          animate="show" 
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.8, delay: 0.2 }
            }
          }}
          className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto font-light relative z-10" 
          style={{ color: colors.neutral.gray600 }}
        >
          Welcome to <span className="font-semibold" style={{ color: colors.primary.main }}>Intellects</span>, where technology, creativity, and strategy come together to move
          your business forward.
        </motion.p>
        
        <motion.div 
          initial="hidden" 
          animate="show" 
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            show: { 
              opacity: 1, 
              scale: 1,
              transition: { duration: 0.6, delay: 0.4 }
            }
          }}
          className="flex justify-center relative z-10"
        >
          <motion.div
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="font-bold px-10 py-4 rounded-full shadow-xl transition inline-flex items-center gap-3"
              style={{ background: gradients.primary, color: colors.neutral.white, boxShadow: shadows.xl }}
            >
              <span>Schedule Your Free Consultation</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: "500+", label: "Projects Delivered" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "50+", label: "Expert Team" },
            { value: "15+", label: "Years Experience" }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + idx * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="p-4 rounded-xl bg-white/80 backdrop-blur shadow-lg border-2"
              style={{ borderColor: colors.primary.main }}
            >
              <motion.h3 
                className="text-3xl md:text-4xl font-bold mb-1"
                style={{ color: colors.primary.main }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {stat.value}
              </motion.h3>
              <p className="text-sm" style={{ color: colors.neutral.gray600 }}>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ========================================
        ABOUT SECTION 
      ======================================== */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        variants={scaleIn}
        className="py-24 px-6 md:px-12 lg:px-24 text-center border-b"
        style={{ backgroundColor: colors.neutral.gray50, borderColor: colors.neutral.gray200 }}
      >
        <h2 className="text-4xl font-bold mb-4" style={{ color: colors.primary.main }}>About Intellects</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed" style={{ color: colors.neutral.gray600 }}>
          Every successful company starts with a simple idea — and the right
          partner to make it happen. At Intellects, we're that partner.
        </p>
      </motion.section>

      {/* ========================================
        SERVICES SECTION 
      ======================================== */}
      <section className="py-24 px-6 md:px-12 lg:px-24" style={{ backgroundColor: colors.neutral.white }}>
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp} className="text-4xl font-bold text-center mb-6">
          Our Services
        </motion.h2>
        <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn} className="text-center max-w-3xl mx-auto mb-16 text-lg" style={{ color: colors.neutral.gray600 }}>
          At Intellects, every service is designed around one simple belief:
          when your technology, marketing, and people work together, growth becomes natural.
        </motion.p>
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: '💻 Software Development',
              desc: 'We build secure, scalable, and future-ready software that transforms ideas into powerful digital solutions. From web and mobile applications to enterprise systems, Intellects develops custom solutions tailored to your needs — ensuring seamless performance and real business impact.  '
            },
            { title: '📈 Digital Marketing',
               desc: 'Our marketing team at Intellects helps brands connect, convert, and grow through smart digital strategy. In the rapidly evolving digital landscape, standing out is crucial for success. Our digital marketing experts at Intellects create data-driven strategies that boost brand presence, engage your audience, and generate measurable results across all platforms — SEO, PPC, social media, and beyond.  ' },
            { title: '👥 HR Consulting', 
              desc: 'People are the foundation of every great business. With Intellects, you gain strategic HR solutions that help you attract top talent, strengthen your workforce, and build a culture that drives performance and growth.'
  
            }
            ].map((service, i) => (
            <motion.div key={i} variants={fadeInUp} whileHover={{ y: -5, boxShadow: shadows.glow }} className="p-8 rounded-xl shadow-lg border-t-4 transition cursor-pointer"
              style={{ backgroundColor: colors.neutral.white, borderColor: colors.primary.main }}>
              <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.primary.main }}>{service.title}</h3>
              <p style={{ color: colors.neutral.gray600 }}>{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ========================================
        WHY CHOOSE SECTION
      ======================================== */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-t" style={{ backgroundColor: colors.neutral.gray50, borderColor: colors.neutral.gray200 }}>
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp} className="text-4xl font-bold text-center mb-12" style={{ color: colors.primary.main }}>
          Why Choose Intellects
        </motion.h2>
        <motion.ul initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={container} className="max-w-4xl mx-auto space-y-5">
          {[
            "All-in-One Expertise — Technology, marketing, and HR under one roof.",
            "Tailored Solutions — Every plan starts with your unique challenges.",
            "Collaborative Approach — We work with you, not around you.",
            "Transparent Communication — Honest timelines and clear progress.",
            "Long-Term Focus — We're invested in your success, not just your launch.",
            "Proven Results — Our clients see measurable improvements in efficiency, growth, and team morale.",
          ].map((point, i) => (
            <motion.li
              key={i}
              variants={fadeIn}
              whileHover={{ x: 15, color: colors.accent.main }}
              className="flex items-start gap-3 p-4 rounded-lg transition-colors cursor-pointer border-l-4 shadow-sm"
              style={{
                backgroundColor: colors.neutral.white,
                borderColor: colors.neutral.gray50,
                borderLeftColor: colors.neutral.gray500,
                color: colors.neutral.gray600
              }}
              onMouseEnter={e => e.currentTarget.style.borderLeftColor = colors.primary.main}
              onMouseLeave={e => e.currentTarget.style.borderLeftColor = colors.neutral.gray500}
            >
              <span className="font-bold text-xl" style={{ color: colors.primary.main }}>→</span> {point}
            </motion.li>
          ))}
        </motion.ul>
      </section>

      {/* ========================================
        CAREERS SECTION 
      ======================================== */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        className="py-24 px-6 md:px-12 lg:px-24 text-center"
        style={{ backgroundColor: colors.neutral.white }}
      >
        <h2 className="text-4xl font-bold mb-4" style={{ color: colors.primary.main }}>Careers at Intellects</h2>
        <p className="max-w-3xl mx-auto leading-relaxed mb-8 text-lg" style={{ color: colors.neutral.gray600 }}>
          Grow Your Future with a Team That Values You. We're always searching for curious minds — developers, strategists, creatives, and
          consultants — who want to shape the future of IT consulting.
        </p>
        <Link
          to="/career"
          className="inline-block border-2 font-bold px-8 py-3 rounded-full shadow-md transition transform hover:scale-105"
          style={{
            borderColor: colors.primary.main,
            color: colors.primary.main,
            boxShadow: shadows.base,
          }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = colors.primary.main; e.currentTarget.style.color = colors.neutral.white; }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = colors.primary.main; }}
        >
          Join Our Team
        </Link>
      </motion.section>

      {/* ========================================
        VISION SECTION 
      ======================================== */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        className="py-24 px-6 md:px-12 lg:px-24 text-center border-t"
        style={{ backgroundColor: colors.neutral.gray50, borderColor: colors.neutral.gray200 }}
      >
        <h2 className="text-4xl font-bold mb-4" style={{ color: colors.primary.main }}>
          Your Vision, Our Engineering Expertise
        </h2>
        <p className="max-w-3xl mx-auto leading-relaxed text-lg" style={{ color: colors.neutral.gray600 }}>
          Our team combines creativity with technical excellence to
          turn your ideas into scalable, high-performing solutions. Your vision
          is our blueprint — and innovation is our craft.
        </p>
      </motion.section>

      {/* ========================================
        FAQ SECTION (+ / - toggle)
      ======================================== */}
      <section className="py-24 px-6 md:px-12 lg:px-24" style={{ backgroundColor: colors.neutral.white }}>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-4xl font-bold text-center mb-12"
          style={{ color: colors.neutral.gray800 }}
        >
          Frequently Asked Questions 🤔
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          {[
            { q: "1. What services does Intellects provide?", a: "Intellects offers IT consulting services including Software Development, Digital Marketing, and HR Consulting — helping businesses grow smarter and perform better." },
            { q: "2. How does Intellects ensure quality in its projects?", a: "Every project follows our agile development methodology, with continuous testing, clear communication, and client feedback loops to maintain the highest quality standards. " },
            { q: "3. Which industries does Intellects work with?", a: "We work across technology, retail, healthcare, education, and finance industries — customizing every solution to fit each client’s unique needs. " },
            { q: "4. Why should I choose Intellects for my business?", a: "We combine technical excellence, creative strategy, and transparent collaboration to deliver long-term results. At Intellects, we measure success by your satisfaction and growth. " },
            { q: "5. How can I start working with Intellects?", a: "Simply reach out to us through our contact form or email. Our consulting team will connect with you to understand your goals and craft a solution tailored to your business vision." },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ scale: 1.01, boxShadow: shadows.glow }}
              className="p-6 rounded-lg shadow-md border-l-4 cursor-pointer"
              style={{ backgroundColor: colors.neutral.gray50, borderColor: colors.accent.main }}
              onClick={() => toggleFAQ(i)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-xl" style={{ color: colors.primary.main }}>{item.q}</h3>
                <motion.span
                  initial={false}
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-3xl font-bold select-none"
                  style={{ color: colors.primary.main }}
                >
                  {openIndex === i ? "−" : "+"}
                </motion.span>
              </div>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === i ? "auto" : 0,
                  opacity: openIndex === i ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden mt-3"
              >
                <p style={{ color: colors.neutral.gray600 }}>{item.a}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ========================================
        QUOTE SECTION
      ======================================== */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.8 }}
        variants={fadeIn}
        className="text-white text-center pt-16 pb-8 px-6 shadow-inner"
      >
        <p className="text-2xl md:text-3xl italic max-w-4xl mx-auto font-serif" style={{ color: colors.accent.main }}>
          "Intellects turns technology into possibility — and possibility into progress."
        </p>
      </motion.section>
    </div>
  );
}
