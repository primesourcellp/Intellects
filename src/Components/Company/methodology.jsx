import React from "react";
import { motion } from "framer-motion";

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


export default function App() {

  // ===== Animation Presets =====
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };
  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: '#FFFFFF', color: '#1F2937' }}>
      
      {/* ======================================================
          HERO SECTION
      ====================================================== */}
      <section
        className="py-24 sm:py-32 px-6 md:px-16 lg:px-28 text-center"
        style={{ backgroundColor: '#F9FAFB' }}
      >
        <motion.h1
          initial="hidden"
          animate="show"
          variants={fadeInUp}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight"
          style={{ color: '#1E3A8A' }}
        >
          Empowering Businesses Through Intelligence and Innovation
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeIn}
          className="text-lg md:text-xl max-w-5xl mx-auto leading-relaxed text-gray-600"
          style={{ color: '#6B7280' }}
        >
          At <span className="font-semibold" style={{ color: '#1E3A8A' }}>Intellects</span>, we
          bridge technology, creativity, and human insight to help organizations grow smarter,
          faster, and stronger in a digital world. We believe innovation begins with intellect —
          the power to think differently, solve challenges, and create progress. At Intellects, we
          don’t just provide consulting services; we deliver meaningful transformation. Our mission
          is to make technology and talent work together to drive measurable business success.
        </motion.p>
      </section>

      {/* ======================================================
          DEVELOPMENT & METHODOLOGY INTRO
      ====================================================== */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeInUp}
        className="py-20 sm:py-24 px-6 md:px-16 lg:px-28 text-center border-t border-gray-100"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1E3A8A' }}>
          Our Development & Methodology
        </h2>
        <p className="max-w-4xl mx-auto text-base sm:text-lg leading-relaxed text-gray-600 mb-0" style={{ color: '#6B7280' }}>
          <strong>Building with Purpose, Delivering with Precision</strong> — Our approach to
          development is rooted in agility, collaboration, and continuous improvement. We understand
          that every client’s journey is unique — that’s why Intellects tailors its methodology to
          fit your goals, timelines, and business model. We combine deep technical knowledge with a
          human-centered mindset to ensure every solution we build is innovative, reliable, and
          scalable.
        </p>
        {/* The 'Our Proven Methodology' heading has been moved below to be directly above the steps grid. */}
      </motion.section>

      {/* ======================================================
          OUR PROVEN METHODOLOGY STEPS
      ====================================================== */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="py-20 sm:py-24 px-6 md:px-16 lg:px-28" // Removed grid classes from the section
        style={{ backgroundColor: '#F9FAFB' }}
      >
        <motion.h2 
          variants={fadeInUp}
          className="text-3xl sm:text-4xl font-bold mb-12 text-center" 
          style={{ color: '#1E3A8A' }}
        >
          Our Proven Methodology
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "1. Discovery & Strategy",
              text: "We start with understanding — diving deep into your business, audience, and goals to build a solid strategic foundation.",
            },
            {
              title: "2. Planning & Design",
              text: "Our experts design intelligent systems and user-friendly interfaces that balance creativity with functionality.",
            },
            {
              title: "3. Agile Development",
              text: "Using an agile framework, we develop in focused sprints, ensuring rapid progress, flexibility, and transparency throughout the process.",
            },
            {
              title: "4. Testing & Quality Assurance",
              text: "Every product undergoes thorough testing to guarantee stability, security, and performance at every level.",
            },
            {
              title: "5. Deployment & Support",
              text: "We ensure seamless deployment and provide long-term support so your solutions continue performing as your business scales.",
            },
            {
              title: "6. Continuous Improvement",
              text: "We don't stop at launch. We monitor performance and iterate, ensuring your solution evolves with market needs.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="p-8 rounded-xl shadow-lg border-l-4 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ borderColor: '#3B82F6', backgroundColor: '#FFFFFF' }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: '#1E3A8A' }}>
                {item.title}
              </h3>
              <p className="text-gray-600" style={{ color: '#6B7280' }}>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ======================================================
          WHY IT WORKS
      ====================================================== */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeInUp}
        className="py-20 sm:py-24 px-6 md:px-16 lg:px-28 text-center"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: '#1E3A8A' }}>
          Why It Works
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-base sm:text-lg">
          {[
            "✅ Transparent Communication",
            "⚙️ Agile and Adaptable Process",
            "🏆 Quality-First Culture",
            "🤝 Strong Partnership Mindset",
          ].map((point, i) => (
            <motion.li
              key={i}
              variants={fadeIn}
              className="p-6 rounded-lg border shadow-sm hover:shadow-lg transition-all text-left font-medium"
              style={{ backgroundColor: '#F9FAFB', borderColor: '#1E3A8A', color: '#1F2937' }}
            >
              {point}
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* ======================================================
          OUR KEY CLIENTS
      ====================================================== */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        className="py-20 sm:py-24 px-6 md:px-16 lg:px-28 text-center border-t border-gray-100"
        style={{ backgroundColor: '#F9FAFB' }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1E3A8A' }}>
          Our Key Clients
        </h2>
        <p className="max-w-4xl mx-auto text-base sm:text-lg text-gray-600 mb-8" style={{ color: '#6B7280' }}>
          Over the years, Intellects has had the privilege of working with a diverse range of
          clients — from emerging startups to established enterprises across industries like
          technology, healthcare, retail, and finance. Our clients choose us not just for our
          skills — but for our commitment to helping them achieve lasting success.
        </p>
        <blockquote className="italic text-xl font-semibold mb-10" style={{ color: '#3B82F6' }}>
          “Trusted by forward-thinking brands who believe in innovation and excellence.”
        </blockquote>
      </motion.section>

      {/* ======================================================
          PARTNERSHIP SECTION + TESTIMONIAL BUTTON
      ====================================================== */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        className="py-20 sm:py-24 px-6 md:px-16 lg:px-28 text-center border-t border-gray-100"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1E3A8A' }}>
          Partnerships
        </h2>
        <p className="max-w-4xl mx-auto text-base sm:text-lg leading-relaxed text-gray-600 mb-10" style={{ color: '#6B7280' }}>
          Intellects partners with leading technology providers and platforms to ensure we deliver
          world-class solutions. Our alliances help us access the best tools, frameworks, and
          expertise — so our clients always stay ahead in an ever-evolving digital ecosystem.
        </p>

        <motion.div
          whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center justify-center px-10 py-4 rounded-full font-semibold shadow-2xl cursor-pointer transition-transform duration-200"
          style={{ backgroundColor: '#1E3A8A', color: "#fff" }}
        >
          {/* Using the locally defined Link component */}
          <Link to="/testimonials" className="flex items-center gap-3 text-lg">
            Clients & Partners <span className="text-2xl">→</span>
          </Link>
        </motion.div>
      </motion.section>

      {/* ======================================================
          LET’S GROW TOGETHER (CTA)
      ====================================================== */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-20 sm:py-24 px-6 md:px-16 lg:px-28 text-center border-t border-gray-100"
        style={{ backgroundColor: '#F9FAFB' }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1E3A8A' }}>
          Ready to Grow? Let’s Connect.
        </h2>
        <p className="max-w-4xl mx-auto text-base sm:text-lg leading-relaxed text-gray-600" style={{ color: '#6B7280' }}>
          Intellects is more than a consulting firm — we’re a growth partner that combines
          technology, creativity, and strategy to shape the future of business. Reach out today to start your transformation journey.
        </p>
      </motion.section>
    </div>
  );
}
