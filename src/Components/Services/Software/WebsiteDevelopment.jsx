import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGlobe,
  FaLaptopCode,
  FaStore,
  FaUsers,
  FaCogs,
  FaClipboardCheck,
  FaHandshake,
  FaQuestionCircle,
  FaPlus,
  FaMinus,
  FaArrowRight,
  FaCheck,
  FaWater,
  FaRocket,
} from "react-icons/fa";
import sky8Image from "../../../assets/sky8.jpg";
import aboutImage from "../../../assets/about.jpg";
import soft9Image from "../../../assets/soft9.png";

// Typing Animation Component
const TypingText = ({ text, className = "", delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (started && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 70);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, started]);

  return <span className={className}>{displayedText}</span>;
};

// FAQ Item Component with Toggle
const FAQItem = ({ faq, index, sectionVariant }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      key={index}
      className="rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer overflow-hidden bg-white border-2 border-violet-100"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div 
        className="p-6 flex justify-between items-center bg-gradient-to-r from-cyan-50 to-blue-50 hover:from-purple-100 hover:to-violet-100 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-bold text-lg text-gray-900">{faq.q}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="bg-violet-500 p-2 rounded-full"
        >
          {isOpen ? <FaMinus className="text-white text-sm" /> : <FaPlus className="text-white text-sm" />}
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
            <p className="text-slate-700 border-t-2 border-violet-200 pt-4 leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function WebsiteDevelopment() {
  return (
    <div className="min-h-screen text-gray-800" style={{ background: 'linear-gradient(to bottom right, #F9FAFB, #F3F4F6)' }}>
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full blur-3xl -top-48 -left-48 animate-pulse" style={{ background: 'radial-gradient(circle, #4C1D9520, #1F293715)' }}></div>
        <div className="absolute w-96 h-96 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000" style={{ background: 'radial-gradient(circle, #4C1D9520, #1F293715)' }}></div>
      </div>

      {/* Header Section - Home Page Style */}
      <section
        className="relative py-32 md:py-40 px-6 md:px-12 lg:px-24 text-center shadow-lg overflow-hidden mb-24"
        style={{ backgroundColor: '#FFFFFF', boxShadow: '0 10px 15px -3px rgba(30, 58, 138, 0.1), 0 4px 6px -2px rgba(30, 58, 138, 0.05)' }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920)' }}
          ></div>
        </div>

        {/* Floating Decorative Elements */}
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
            style={{ background: 'linear-gradient(135deg, #7C3AED, #4C1D95)' }}
          />
        </motion.div>

        {/* Content */}
        <motion.h1 
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { 
              duration: 0.8, 
              ease: "easeOut",
              type: "spring",
              stiffness: 100
            }
          }}
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight relative z-10"
        >
          <TypingText text="Website Development " delay={0} />
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
            <TypingText text="Services" delay={1540} />
          </motion.span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, delay: 0.2 }
          }}
          className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto font-light relative z-10" 
          style={{ color: '#6B7280' }}
        >
          At <span className="font-semibold" style={{ color: '#4C1D95' }}>Intellects</span>, we design and develop modern, responsive, and business-driven websites that make a lasting digital impression — from corporate sites to e-commerce platforms.
        </motion.p>
      </section>

      {/* Services Section */}
      <div className="pt-16 px-6 md:px-12 lg:px-24 relative z-10" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#4C1D95' }}>
              Services We{" "}
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
                Offer
              </motion.span>
            </h3>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
              Build trust with sleek, professional designs and cutting-edge technology solutions.
            </p>
          </div>
          
          {[
            {
              title: "Corporate & Business Websites",
              desc: "Build trust with sleek, professional designs that represent your brand and engage your audience.",
              img: sky8Image,
            },
            {
              title: "E-commerce Platforms",
              desc: "Secure, scalable, and conversion-focused online stores that drive sales and growth.",
              img: aboutImage,
            },
            {
              title: "CMS Development",
              desc: "Empower your team with easy content management systems that give you full control.",
              img: soft9Image,
            },
            {
              title: "Landing Pages",
              desc: "Optimize campaigns with high-impact designs that convert visitors into customers.",
              img: sky8Image,
            },
          ].map((s, i) => (
            <motion.section
              key={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="py-8 border-b"
              style={{ borderColor: '#E5E7EB' }}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Text Column */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={i % 2 === 1 ? 'lg:col-start-2' : ''}
                >
                  <h4 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#4C1D95' }}>
                    {s.title}
                  </h4>
                  <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#6B7280' }}>
                    {s.desc}
                  </p>
                </motion.div>

                {/* Image Column */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`relative ${i % 2 === 1 ? 'lg:col-start-1' : ''}`}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl max-h-96">
                    <img 
                      src={s.img} 
                      alt={s.title} 
                      className="w-full h-full object-cover"
                      style={{ 
                        borderRadius: '1rem',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                        maxHeight: '384px'
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
          ))}
        </div>
      </div>

      {/* Success Formula */}
      <motion.section
        className="py-20 px-6 md:px-12 max-w-7xl mx-auto relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
            Our Formula for Web Development{" "}
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
              Success
            </motion.span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Understanding Your Goals",
              "Creative UI/UX Design",
              "Agile Development Approach",
              "Continuous Testing",
              "Post-Launch Support",
            ].map((pillar, i) => (
              <motion.div
                key={i}
              className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-violet-300 transition-all text-center relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-bold text-xl rounded-xl mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  {i + 1}
                </div>
                <h3 className="font-bold text-lg text-gray-800 group-hover:text-gray-600 transition-colors">
                  {pillar}
                </h3>
              </div>
              </motion.div>
            ))}
        </div>
      </motion.section>

      {/* Why Clients Choose Intellects */}
      <motion.div
        className="mb-32 px-6 md:px-12 max-w-7xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Centered Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="px-6 py-2 bg-gray-900 text-white text-sm font-bold rounded-full shadow-lg">
              WHY CHOOSE US
            </span>
          </motion.div>
          
          <h3 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
            Why Clients Choose{" "}
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
          </h3>
        </div>

        {/* Content Grid */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-full min-h-[400px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-blue-600 to-violet-600"></div>
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center text-white">
                  <FaHandshake className="w-20 h-20 mx-auto mb-6" />
                  <h4 className="text-3xl font-bold mb-2">Trusted Partnership</h4>
                  <p className="text-gray-100">Building digital excellence together</p>
                </div>
              </div>
            </div>

            <div className="p-12 flex flex-col justify-center">

              <div className="space-y-4">
            {[
              "Deep industry experience with global clients.",
              "Dedicated in-house development and design teams.",
              "Scalable and flexible project models.",
              "On-time delivery and transparent communication.",
              "End-to-end solutions from design to deployment.",
            ].map((point, i) => (
                  <motion.div
                key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <FaCheck className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed flex-1 group-hover:text-gray-600 transition-colors">
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Development Process */}
      <motion.section
        className="py-20 px-6 md:px-12 max-w-7xl mx-auto relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
            Our Web Development{" "}
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
              Process
            </motion.span>
          </h2>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              "Discovery & Strategy",
              "Design & Prototyping",
              "Development",
              "Testing & QA",
              "Deployment & Maintenance",
            ].map((step, i) => (
              <motion.div
                key={i}
              className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl flex flex-col items-center text-center border-2 border-transparent hover:border-violet-300 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
              whileHover={{ y: -12, scale: 1.05 }}
              >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-xl group-hover:scale-110 transition-transform">
                  {i + 1}
                </div>

              <div className="mt-8 mb-4 p-5 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl group-hover:from-purple-100 group-hover:to-violet-100 transition-colors">
                <FaGlobe className="w-10 h-10 text-gray-600" />
              </div>

              <p className="font-bold text-lg text-gray-800 group-hover:text-gray-600 transition-colors">
                {step}
              </p>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </motion.div>
            ))}
        </div>
      </motion.section>

      {/* Hiring Models */}
      <motion.section
        className="py-20 px-6 md:px-12 max-w-6xl mx-auto relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="px-6 py-2 bg-gray-900 text-white text-sm font-bold rounded-full shadow-lg">
              HIRING MODELS
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
            Our Custom Hiring{" "}
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
              Models
            </motion.span>
          </h2>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Dedicated Team Model",
                desc: "Ideal for long-term projects requiring consistent technical expertise.",
              },
              {
                title: "Fixed-Price Model",
                desc: "Perfect for projects with clear requirements, milestones, and deadlines.",
              },
              {
                title: "Hourly / Time & Material Model",
                desc: "Flexible pay-as-you-go structure ideal for evolving or R&D projects.",
              },
            ].map((model, i) => (
              <motion.div
                key={i}
              className="group p-8 bg-gradient-to-br from-white to-violet-50 rounded-2xl shadow-lg hover:shadow-2xl border-2 border-violet-200 hover:border-violet-400 transition-all"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -8 }}
            >
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-black rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                  {i + 1}
                </div>
              </div>
              <h3 className="font-bold text-2xl mb-3 text-gray-800 group-hover:text-gray-600 transition-colors">
                  {model.title}
                </h3>
              <p className="text-gray-600 leading-relaxed">
                {model.desc}
              </p>
              </motion.div>
            ))}
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="py-20 px-6 md:px-12 max-w-6xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="px-6 py-2 bg-gray-900 text-white text-sm font-bold rounded-full shadow-lg">
              FAQ
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
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
              {
                q: "How long does it take to develop a website?",
                a: "A basic business site may take 3–4 weeks, while e-commerce or advanced platforms may need 8–12 weeks.",
              },
              {
                q: "Can Intellects redesign or upgrade my existing website?",
                a: "Absolutely! We specialize in website redesigns with modern aesthetics, performance, and user experience enhancements.",
              },
              {
                q: "What technologies does Intellects use?",
                a: "We use React, Laravel, WordPress, Node.js, .NET, and Shopify for scalable, modern web solutions.",
              },
              {
                q: "Will my website be mobile-friendly and SEO-optimized?",
                a: "Yes. All websites we build are fully responsive and follow SEO best practices for better ranking.",
              },
              {
                q: "Do you provide maintenance after launch?",
                a: "Yes, we offer post-launch maintenance, security updates, and ongoing support.",
              },
            ].map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} sectionVariant={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} />
            ))}
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.div
        className="px-6 md:px-12 max-w-6xl mx-auto pb-20 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <div className="rounded-3xl p-12 md:p-16 text-center shadow-2xl relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #4C1D95, #1F2937)' }}>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6 border-2 border-white/40"
            >
              <FaRocket className="w-10 h-10 text-white" />
            </motion.div>

            <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight max-w-5xl mx-auto">
              Ready to build a stunning website that drives real results and grows your business?
            </h3>

            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's create a stunning web presence that drives results and grows your business.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="px-10 py-4 bg-white font-bold rounded-xl shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300 flex items-center gap-2 group" style={{ color: '#4C1D95' }}>
                Start Your Project <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-purple-900 transition-all duration-300 hover:scale-105">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
