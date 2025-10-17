import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  // Define Custom Colors for Navy Blue & White Theme
  const COLOR_NAVY = 'rgb(30 58 138)'; // Tailwind: indigo-800
  const COLOR_ACCENT = 'rgb(59 130 246)'; // Tailwind: blue-500
  const COLOR_BACKGROUND_LIGHT = '#FFFFFF'; // White
  const COLOR_BACKGROUND_SECTION = 'rgb(249 250 251)'; // Light gray
  const COLOR_TEXT_DARK = 'rgb(17 24 39)'; // Dark text
  const COLOR_TEXT_MUTED = 'rgb(75 85 99)'; // Muted gray

  const navyShadow = `0 10px 15px -3px rgba(30, 58, 138, 0.1), 0 4px 6px -2px rgba(30, 58, 138, 0.05)`;
  const buttonShadow = `0 10px 20px rgba(30, 58, 138, 0.3)`;
  const cardGlow = `0 8px 20px rgba(30, 58, 138, 0.2)`;

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
    <div className="overflow-x-hidden" style={{ backgroundColor: COLOR_BACKGROUND_LIGHT, color: COLOR_TEXT_DARK }}>
      {/* ========================================
        HERO SECTION
      ======================================== */}
      <section
        className="relative py-40 px-6 md:px-12 lg:px-24 text-center shadow-lg"
        style={{ backgroundColor: COLOR_BACKGROUND_LIGHT, boxShadow: navyShadow }}
      >
        <motion.h1 initial="hidden" animate="show" variants={fadeInUp} className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
          Turning Ambitious Ideas into <span style={{ color: COLOR_NAVY }}>Real-World Impact </span>
        </motion.h1>
        <motion.p initial="hidden" animate="show" variants={fadeIn} className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto font-light" style={{ color: COLOR_TEXT_MUTED }}>
          Welcome to <span className="font-semibold" style={{ color: COLOR_NAVY }}>Intellects</span>, where technology, creativity, and strategy come together to move
          your business forward.
        </motion.p>
        <motion.div initial="hidden" animate="show" variants={fadeInUp} className="flex justify-center">
          <Link
            to="/contact"
            className="font-bold px-10 py-4 rounded-full shadow-xl transition transform hover:scale-105 hover:opacity-90"
            style={{ backgroundColor: COLOR_NAVY, color: COLOR_BACKGROUND_LIGHT, boxShadow: buttonShadow }}
          >
            Schedule Your Free Consultation
          </Link>
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
        style={{ backgroundColor: COLOR_BACKGROUND_SECTION, borderColor: '#e5e7eb' }}
      >
        <h2 className="text-4xl font-bold mb-4" style={{ color: COLOR_NAVY }}>About Intellects</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed" style={{ color: COLOR_TEXT_MUTED }}>
          Every successful company starts with a simple idea — and the right
          partner to make it happen. At Intellects, we’re that partner.
        </p>
      </motion.section>

      {/* ========================================
        SERVICES SECTION 
      ======================================== */}
      <section className="py-24 px-6 md:px-12 lg:px-24" style={{ backgroundColor: COLOR_BACKGROUND_LIGHT }}>
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp} className="text-4xl font-bold text-center mb-6">
          Our Services
        </motion.h2>
        <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn} className="text-center max-w-3xl mx-auto mb-16 text-lg" style={{ color: COLOR_TEXT_MUTED }}>
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
            <motion.div key={i} variants={fadeInUp} whileHover={{ y: -5, boxShadow: cardGlow }} className="p-8 rounded-xl shadow-lg border-t-4 transition cursor-pointer"
              style={{ backgroundColor: COLOR_BACKGROUND_LIGHT, borderColor: COLOR_NAVY }}>
              <h3 className="text-2xl font-semibold mb-3" style={{ color: COLOR_NAVY }}>{service.title}</h3>
              <p style={{ color: COLOR_TEXT_MUTED }}>{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ========================================
        WHY CHOOSE SECTION
      ======================================== */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-t" style={{ backgroundColor: COLOR_BACKGROUND_SECTION, borderColor: '#e5e7eb' }}>
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp} className="text-4xl font-bold text-center mb-12" style={{ color: COLOR_NAVY }}>
          Why Choose Intellects
        </motion.h2>
        <motion.ul initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={container} className="max-w-4xl mx-auto space-y-5">
          {[
            "All-in-One Expertise — Technology, marketing, and HR under one roof.",
            "Tailored Solutions — Every plan starts with your unique challenges.",
            "Collaborative Approach — We work with you, not around you.",
            "Transparent Communication — Honest timelines and clear progress.",
            "Long-Term Focus — We’re invested in your success, not just your launch.",
            "Proven Results — Our clients see measurable improvements in efficiency, growth, and team morale.",
          ].map((point, i) => (
            <motion.li
              key={i}
              variants={fadeIn}
              whileHover={{ x: 15, color: COLOR_ACCENT }}
              className="flex items-start gap-3 p-4 rounded-lg transition-colors cursor-pointer border-l-4 shadow-sm"
              style={{
                backgroundColor: COLOR_BACKGROUND_LIGHT,
                borderColor: COLOR_BACKGROUND_SECTION,
                borderLeftColor: COLOR_TEXT_MUTED,
                color: COLOR_TEXT_MUTED
              }}
              onMouseEnter={e => e.currentTarget.style.borderLeftColor = COLOR_NAVY}
              onMouseLeave={e => e.currentTarget.style.borderLeftColor = COLOR_TEXT_MUTED}
            >
              <span className="font-bold text-xl" style={{ color: COLOR_NAVY }}>→</span> {point}
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
        style={{ backgroundColor: COLOR_BACKGROUND_LIGHT }}
      >
        <h2 className="text-4xl font-bold mb-4" style={{ color: COLOR_NAVY }}>Careers at Intellects</h2>
        <p className="max-w-3xl mx-auto leading-relaxed mb-8 text-lg" style={{ color: COLOR_TEXT_MUTED }}>
          Grow Your Future with a Team That Values You. We’re always searching for curious minds — developers, strategists, creatives, and
          consultants — who want to shape the future of IT consulting.
        </p>
        <Link
          to="/career"
          className="inline-block border-2 font-bold px-8 py-3 rounded-full shadow-md transition transform hover:scale-105"
          style={{
            borderColor: COLOR_NAVY,
            color: COLOR_NAVY,
            boxShadow: `0 0 10px rgba(30, 58, 138, 0.2)`,
          }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = COLOR_NAVY; e.currentTarget.style.color = COLOR_BACKGROUND_LIGHT; }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = COLOR_NAVY; }}
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
        style={{ backgroundColor: COLOR_BACKGROUND_SECTION, borderColor: '#e5e7eb' }}
      >
        <h2 className="text-4xl font-bold mb-4" style={{ color: COLOR_NAVY }}>
          Your Vision, Our Engineering Expertise
        </h2>
        <p className="max-w-3xl mx-auto leading-relaxed text-lg" style={{ color: COLOR_TEXT_MUTED }}>
          Our team combines creativity with technical excellence to
          turn your ideas into scalable, high-performing solutions. Your vision
          is our blueprint — and innovation is our craft.
        </p>
      </motion.section>

      {/* ========================================
        FAQ SECTION (+ / - toggle)
      ======================================== */}
      <section className="py-24 px-6 md:px-12 lg:px-24" style={{ backgroundColor: COLOR_BACKGROUND_LIGHT }}>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-4xl font-bold text-center mb-12"
          style={{ color: COLOR_TEXT_DARK }}
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
            { q: "2. How does Intellects ensure quality in its projects?", a: "Every project follows our agile development methodology, with continuous testing, clear communication, and client feedback loops to maintain the highest quality standards." },
            { q: "3. Which industries does Intellects work with?", a: "We work across technology, retail, healthcare, education, and finance industries — customizing every solution to fit each client’s unique needs." },
            { q: "4. Why should I choose Intellects for my business?", a: "We combine technical excellence, creative strategy, and transparent collaboration to deliver long-term results. We measure success by your satisfaction and growth." },
            { q: "5. How can I start working with Intellects?", a: "Simply reach out to us through our contact form or email. Our consulting team will connect with you to understand your goals and craft a solution tailored to your business vision." },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ scale: 1.01, boxShadow: `0 8px 20px ${COLOR_NAVY}25` }}
              className="p-6 rounded-lg shadow-md border-l-4 cursor-pointer"
              style={{ backgroundColor: COLOR_BACKGROUND_SECTION, borderColor: COLOR_ACCENT }}
              onClick={() => toggleFAQ(i)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-xl" style={{ color: COLOR_NAVY }}>{item.q}</h3>
                <motion.span
                  initial={false}
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-3xl font-bold select-none"
                  style={{ color: COLOR_NAVY }}
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
                <p style={{ color: COLOR_TEXT_MUTED }}>{item.a}</p>
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
        <p className="text-2xl md:text-3xl italic max-w-4xl mx-auto font-serif" style={{ color: COLOR_ACCENT }}>
          “Intellects turns technology into possibility — and possibility into progress.”
        </p>
      </motion.section>
    </div>
  );
}
