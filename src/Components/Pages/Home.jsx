import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";
import sky8Image from "../../assets/sky8.jpg";
import aboutImage from "../../assets/about.jpg";
import logoImage from "../../assets/logo.png";

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

// FlipCard Component for Services Section
const FlipCard = ({ service, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: index * 0.2 }
    }
  };

  return (
    <motion.div
      variants={fadeInUp}
      className="relative w-full h-[400px] max-w-[450px] mx-auto"
      style={{ perspective: '1200px' }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full cursor-pointer"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Front Side - Image */}
        <div
          className="absolute w-full h-full rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-200"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="relative w-full h-full" style={{ background: service.bgColor || '#F5F7FA' }}>
            {/* Background Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover block"
              onLoad={() => console.log(`Image loaded: ${service.title}`)}
              onError={(e) => {
                console.error(`Failed to load image for ${service.title}:`, e);
                e.target.style.display = 'none';
              }}
            />
            {/* Gradient Overlay */}
            <div
              className="absolute inset-0 opacity-85"
              style={{ background: service.gradient }}
            />
            {/* Title on Front */}
            <div
              className="absolute bottom-0 left-0 right-0 p-10 text-white"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.3))' }}
            >
              <h3 className="text-3xl font-semibold m-0 leading-tight">
                {service.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Back Side - Content */}
        <div
          className="absolute w-full h-full rounded-2xl bg-white border-2 shadow-2xl p-12 flex flex-col justify-center items-center text-center"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            borderColor: '#6CB28E',
            boxShadow: '0 10px 30px rgba(108, 178, 142, 0.25)'
          }}
        >
          <h3 className="text-3xl font-semibold mb-5 leading-tight" style={{ color: '#6CB28E' }}>
            {service.title}
          </h3>
          <p className="text-gray-600 text-base leading-relaxed m-0">
            {service.desc}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Home() {

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

  // FAQ Item Component with Toggle
  const FAQItem = ({ faq, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <motion.div
        key={index}
        className="rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer overflow-hidden bg-white border-l-4"
        style={{ borderColor: '#4C1D95' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div 
          className="p-6 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h4 className="font-bold text-lg text-gray-900">{faq.q}</h4>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}
          >
            {isOpen ? <FaMinus className="text-white text-xs" /> : <FaPlus className="text-white text-xs" />}
          </motion.div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="px-6 pb-6 pt-2"
            >
              <p className="text-gray-700 border-t-2 pt-4 leading-relaxed" style={{ borderColor: '#4C1D95' }}>{faq.a}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <div className="overflow-x-hidden" style={{ backgroundColor: '#F9FAFB', color: '#1F2937' }}>
      {/* Luxury Elegant Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.15, 1],
            rotate: [0, 180, 360],
            opacity: [0.06, 0.12, 0.06]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, #4C1D9520, #7C3AED15)' }}
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.08, 0.06, 0.08]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-0 w-80 h-80 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, #7C3AED18, #F59E0B12)' }}
        />
        <motion.div
          animate={{ 
            y: [0, -100, 0],
            opacity: [0.06, 0.15, 0.06]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-1/4 w-72 h-72 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, #F59E0B18, #4C1D9515)' }}
        />
      </div>

      {/* ========================================
        HERO SECTION - ENHANCED
      ======================================== */}
      <section
        className="relative py-32 md:py-40 px-6 md:px-12 lg:px-24 text-center shadow-lg overflow-hidden"
        style={{ backgroundColor: '#FFFFFF', boxShadow: '0 10px 15px -3px rgba(30, 58, 138, 0.1), 0 4px 6px -2px rgba(30, 58, 138, 0.05)' }}
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
            style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}
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
            style={{ background: 'linear-gradient(135deg, #7C3AED, #F59E0B)' }}
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
            style={{ background: 'linear-gradient(135deg, #F59E0B, #4C1D95)' }}
          />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight relative z-10"
          style={{ color: '#000000' }}
        >
          <TypingText text="Turning Ambitious Ideas into " />
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
            <TypingText text="Real-World Impact" />
          </motion.span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl max-w-4xl mx-auto font-light leading-relaxed relative z-10" 
          style={{ color: '#6B7280' }}
        >
          Welcome to Intellects, where technology, creativity, and strategy come together to move your business forward.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center gap-4 relative z-10 mt-10"
        >
          <motion.div
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="font-bold px-10 py-4 rounded-full shadow-xl transition inline-flex items-center gap-3"
              style={{ background: 'linear-gradient(135deg, #4C1D95 0%, #7C3AED 100%)', color: '#FFFFFF', boxShadow: '0 25px 50px -12px rgba(30, 58, 138, 0.25)' }}
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

      </section>

      {/* ========================================
        ABOUT SECTION 
      ======================================== */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={scaleIn}
        className="py-24 px-6 md:px-12 lg:px-24 border-b"
        style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#4C1D95' }}>
              About Intellects
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-4" style={{ color: '#6B7280' }}>
              Every successful company starts with a simple idea — and the right partner to make it happen.
            </p>
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#6B7280' }}>
              At Intellects, we're that partner.
            </p>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={sky8Image} 
                alt="About Intellects" 
                className="w-full h-auto object-cover"
                style={{ 
                  borderRadius: '1rem',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }}
              />
              {/* Decorative overlay */}
              <div 
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(76, 29, 149, 0.1) 0%, rgba(124, 58, 237, 0.1) 100%)',
                  pointerEvents: 'none'
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ========================================
        SERVICES SECTION 
      ======================================== */}
      <section className="py-24 px-6 md:px-12 lg:px-24" style={{ backgroundColor: '#FFFFFF' }}>
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-center mb-6" style={{ color: '#000000' }}>
          Our{" "}
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
            Services
          </motion.span>
        </motion.h2>
        <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn} className="text-center max-w-3xl mx-auto mb-16 text-lg" style={{ color: '#6B7280' }}>
          At Intellects, every service is designed around one simple belief:
          when your technology, marketing, and people work together, growth becomes natural.
        </motion.p>
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: 'Software Development',
              icon: '💻',
              desc: 'We build secure, scalable, and future-ready software that transforms ideas into powerful digital solutions. From web and mobile applications to enterprise systems, Intellects develops custom solutions tailored to your needs — ensuring seamless performance and real business impact.',
              image: aboutImage,
              bgColor: '#E8F4F0',
              gradient: 'linear-gradient(135deg, #6CB28E 0%, #7BA9E1 100%)'
            },
            { 
              title: 'Digital Marketing',
              icon: '📈',
              desc: 'Our marketing team at Intellects helps brands connect, convert, and grow through smart digital strategy. In the rapidly evolving digital landscape, standing out is crucial for success. Our digital marketing experts at Intellects create data-driven strategies that boost brand presence, engage your audience, and generate measurable results across all platforms — SEO, PPC, social media, and beyond.',
              image: sky8Image,
              bgColor: '#FFF4E6',
              gradient: 'linear-gradient(135deg, #F7B267 0%, #6CB28E 100%)'
            },
            { 
              title: 'HR Consulting', 
              icon: '👥',
              desc: 'People are the foundation of every great business. With Intellects, you gain strategic HR solutions that help you attract top talent, strengthen your workforce, and build a culture that drives performance and growth.',
              image: aboutImage,
              bgColor: '#E8F3FB',
              gradient: 'linear-gradient(135deg, #7BA9E1 0%, #A8D5BA 100%)'
            }
          ].map((service, i) => (
            <FlipCard key={i} service={service} index={i} />
          ))}
        </motion.div>
      </section>

      {/* ========================================
        WHY CHOOSE SECTION
      ======================================== */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-t" style={{ backgroundColor: '#F9FAFB', borderColor: '#E5E7EB' }}>
        <motion.h2 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true }} 
          variants={fadeInUp} 
          className="text-3xl md:text-5xl font-bold text-center mb-6" 
          style={{ color: '#000000' }}
        >
          Why Choose{" "}
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
            Intellects
          </motion.span>
        </motion.h2>
        
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center text-lg max-w-3xl mx-auto mb-16"
          style={{ color: '#6B7280' }}
        >
          We don't just deliver projects — we deliver results. Here's what sets Intellects apart.
        </motion.p>

        <motion.div 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true, amount: 0.2 }} 
          variants={container} 
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            {
              title: "All-in-One Expertise",
              description: "Technology, marketing, and HR under one roof.",
              icon: "🎯"
            },
            {
              title: "Tailored Solutions",
              description: "Every plan starts with your unique challenges.",
              icon: "✨"
            },
            {
              title: "Collaborative Approach",
              description: "We work with you, not around you.",
              icon: "🤝"
            },
            {
              title: "Transparent Communication",
              description: "Honest timelines and clear progress.",
              icon: "💬"
            },
            {
              title: "Long-Term Focus",
              description: "We're invested in your success, not just your launch.",
              icon: "🚀"
            },
            {
              title: "Proven Results",
              description: "Our clients see measurable improvements in efficiency, growth, and team morale.",
              icon: "📈"
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ 
                y: -8, 
                boxShadow: '0 20px 40px rgba(76, 29, 149, 0.2)',
                borderColor: '#4C1D95'
              }}
              className="p-8 rounded-2xl shadow-lg border-2 transition-all cursor-pointer group"
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: '#E5E7EB'
              }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#4C1D95' }}>
                {item.title}
              </h3>
              <p className="leading-relaxed" style={{ color: '#6B7280' }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
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
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: '#000000' }}>
          Careers at{" "}
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
            Intellects
          </motion.span>
        </h2>
        <p className="max-w-3xl mx-auto leading-relaxed mb-8 text-lg" style={{ color: '#6B7280' }}>
          Grow Your Future with a Team That Values You. We're always searching for curious minds — developers, strategists, creatives, and
          consultants — who want to shape the future of IT consulting.
        </p>
        <Link
          to="/career"
          className="inline-block border-2 font-bold px-8 py-3 rounded-full shadow-md transition transform hover:scale-105"
          style={{
            borderColor: '#4C1D95',
            color: '#4C1D95',
            boxShadow: '0 4px 6px -1px rgba(30, 58, 138, 0.1), 0 2px 4px -1px rgba(30, 58, 138, 0.06)',
          }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#4C1D95'; e.currentTarget.style.color = '#FFFFFF'; }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#4C1D95'; }}
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
        style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: '#000000' }}>
          Your Vision, Our{" "}
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
            Engineering Expertise
          </motion.span>
        </h2>
        <p className="max-w-3xl mx-auto leading-relaxed text-lg" style={{ color: '#6B7280' }}>
          Our team combines creativity with technical excellence to
          turn your ideas into scalable, high-performing solutions. Your vision
          is our blueprint — and innovation is our craft.
        </p>
      </motion.section>

      {/* ========================================
        FAQ SECTION (+ / - toggle)
      ======================================== */}
      <motion.section
        className="py-20 px-6 md:px-12 max-w-6xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#000000' }}>
            Frequently Asked{" "}
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
              Questions
            </motion.span>
          </h2>
        </div>

        <div className="space-y-4">
          {[
            { q: "What services does Intellects provide?", a: "Intellects offers IT consulting services including Software Development, Digital Marketing, and HR Consulting — helping businesses grow smarter and perform better." },
            { q: "How does Intellects ensure quality in its projects?", a: "Every project follows our agile development methodology, with continuous testing, clear communication, and client feedback loops to maintain the highest quality standards." },
            { q: "Which industries does Intellects work with?", a: "We work across technology, retail, healthcare, education, and finance industries — customizing every solution to fit each client's unique needs." },
            { q: "Why should I choose Intellects for my business?", a: "We combine technical excellence, creative strategy, and transparent collaboration to deliver long-term results. At Intellects, we measure success by your satisfaction and growth." },
            { q: "How can I start working with Intellects?", a: "Simply reach out to us through our contact form or email. Our consulting team will connect with you to understand your goals and craft a solution tailored to your business vision." },
          ].map((item, i) => (
            <FAQItem key={i} faq={item} index={i} />
          ))}
        </div>
      </motion.section>

      {/* ========================================
        CALL TO ACTION SECTION
      ======================================== */}
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
              Ready to Transform Your Business?
            </motion.h3>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white/90 text-lg mb-8 max-w-2xl mx-auto"
            >
              Let's create something extraordinary together. We're here to make it happen.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                to="/contact"
                className="group px-8 py-3 bg-white font-bold rounded-xl shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300 flex items-center gap-2"
                style={{ color: '#4C1D95' }}
              >
                Start Your Project
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link
                to="/contact"
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white transition-all duration-300 hover:scale-105"
                onMouseEnter={e => { e.currentTarget.style.color = '#4C1D95'; e.currentTarget.style.backgroundColor = '#FFFFFF'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.backgroundColor = 'transparent'; }}
              >
                Schedule a Call
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
