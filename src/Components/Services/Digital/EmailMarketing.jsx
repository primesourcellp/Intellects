import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaEnvelope, 
  FaChartLine, 
  FaSyncAlt, 
  FaPlus, 
  FaMinus,
  FaPaperPlane,
  FaCheckCircle,
  FaArrowRight,
  FaUsers,
  FaBullseye,
  FaRocket,
  FaBell,
  FaChartBar,
  FaLightbulb,
  FaCog,
  FaPen,
  FaEye,
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
const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      key={index}
      className="rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer overflow-hidden bg-white border-2 border-violet-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: false, amount: 0.1 }}
    >
      <div 
        className="p-6 flex justify-between items-center bg-gradient-to-r from-gray-50 to-gray-100 hover:from-purple-100 hover:to-violet-100 transition-colors"
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

export default function EmailMarketing() {
  const faqs = [
    {
      q: "What types of email campaigns do you manage?",
      a: "We handle newsletters, promotional emails, onboarding sequences, product launches, and re-engagement campaigns."
    },
    {
      q: "How often should I send marketing emails?",
      a: "It depends on your audience and goals, but we typically recommend 1–3 targeted emails per week."
    },
    {
      q: "Do you use automation tools?",
      a: "Yes. We work with tools like Mailchimp, HubSpot, ActiveCampaign, and others to automate and optimize your email marketing."
    },
    {
      q: "How do you ensure emails don't go to spam?",
      a: "We follow industry best practices — including verified sender domains, optimized subject lines, and proper HTML formatting."
    },
    {
      q: "Can you help design email templates?",
      a: "Absolutely. We design mobile-responsive templates that match your brand identity and marketing goals."
    },
  ];

  return (
    <div className="min-h-screen text-gray-800" style={{ background: 'linear-gradient(to bottom right, #F9FAFB, #F3F4F6)' }}>
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full blur-3xl -top-48 -left-48 animate-pulse" style={{ background: 'radial-gradient(circle, #4C1D9520, #00000015)' }}></div>
        <div className="absolute w-96 h-96 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000" style={{ background: 'radial-gradient(circle, #00000020, #4C1D9515)' }}></div>
      </div>

      {/* Header Section */}
      <section
        className="relative py-32 md:py-40 px-6 md:px-12 lg:px-24 text-center shadow-lg overflow-hidden"
        style={{ backgroundColor: '#FFFFFF', boxShadow: '0 10px 15px -3px rgba(30, 58, 138, 0.1), 0 4px 6px -2px rgba(30, 58, 138, 0.05)' }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={sky8Image}
            alt="Hero Background"
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
            style={{ background: 'linear-gradient(135deg, #4C1D95, #000000)' }}
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
            style={{ background: 'linear-gradient(135deg, #000000, #4C1D95)' }}
          />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight relative z-10"
          style={{ color: '#000000' }}
        >
          <TypingText text="Email " />
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
            <TypingText text="Marketing" />
          </motion.span>
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl md:text-3xl font-bold max-w-4xl mx-auto mb-4 relative z-10"
          style={{ color: '#000000' }}
        >
          Connect, Nurture, and Convert with Precision Communication
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl max-w-4xl mx-auto font-light leading-relaxed relative z-10"
          style={{ color: '#6B7280' }}
        >
          At Intellects, we turn emails into powerful marketing tools that drive engagement and sales. Our Email Marketing services are crafted to help you connect directly with your audience — delivering the right message, at the right time, to the right inbox.
        </motion.p>
      </section>

      {/* Targeted Email Campaign Strategy Section */}
      <motion.section 
        className="py-20 px-6 md:px-12 lg:px-24 relative z-10" 
        style={{ backgroundColor: '#FFFFFF' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="inline-block mb-6"
            >
              <span className="px-8 py-3 text-white text-sm font-bold rounded-full shadow-2xl" style={{ background: 'linear-gradient(135deg, #4C1D95, #000000)' }}>
                📧 STRATEGIC PLANNING
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#4C1D95' }}>
              Targeted Email Campaign Strategy
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-2 font-semibold" style={{ color: '#000000' }}>
              Plan, Personalize, and Perform
            </p>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
              Our email marketing begins with understanding your audience and objectives. We design strategic campaigns that deliver measurable results and align with your overall marketing goals.
            </p>
          </div>

          {/* Strategic Process */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: '#4C1D95' }}>
              Our strategic process includes:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: <FaUsers className="w-6 h-6" />, title: "Audience segmentation and profiling", color: "from-purple-500 to-purple-600" },
                { icon: <FaBullseye className="w-6 h-6" />, title: "Campaign goal setting and automation setup", color: "from-purple-600 to-purple-700" },
                { icon: <FaChartLine className="w-6 h-6" />, title: "A/B testing for subject lines and content", color: "from-gray-700 to-gray-900" },
                { icon: <FaCog className="w-6 h-6" />, title: "Scheduling for optimal delivery times", color: "from-gray-800 to-black" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: false }}
                  className="group flex items-center gap-4 p-6 rounded-2xl border-2 border-gray-100 hover:border-violet-300 transition-all duration-300 hover:shadow-lg bg-white"
                >
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 bg-gradient-to-br ${item.color} text-white`}>
                    {item.icon}
                  </div>
                  <p className="text-gray-700 font-medium text-lg leading-relaxed flex-1">
                    {item.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Key Benefits */}
          <div className="bg-gradient-to-br from-purple-50 to-gray-100 rounded-3xl p-12 border-2 border-purple-100">
            <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: '#4C1D95' }}>
              Key Benefits:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <FaChartBar className="w-6 h-6" />, title: "Higher open and click-through rates", color: "from-purple-500 to-purple-600" },
                { icon: <FaRocket className="w-6 h-6" />, title: "Improved lead nurturing and conversions", color: "from-purple-600 to-black" },
                { icon: <FaCheckCircle className="w-6 h-6" />, title: "Enhanced customer retention", color: "from-gray-700 to-black" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: false }}
                  className="flex items-center gap-3 p-5 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all"
                >
                  <div className={`flex-shrink-0 w-10 h-10 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center text-white`}>
                    {item.icon}
                  </div>
                  <p className="text-gray-800 font-semibold">{item.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Creative Email Design & Copywriting Section */}
      <motion.section
        className="py-20 px-6 md:px-12 lg:px-24 relative z-10"
        style={{ backgroundColor: '#F9FAFB' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="inline-block mb-6"
            >
              <span className="px-8 py-3 text-white text-sm font-bold rounded-full shadow-2xl" style={{ background: 'linear-gradient(135deg, #4C1D95, #000000)' }}>
                🎨 CREATIVE DESIGN
              </span>
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#4C1D95' }}>
              Creative Email Design & Copywriting
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-2 font-semibold" style={{ color: '#000000' }}>
              Emails That Look Good and Read Better
            </p>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
              Your audience's attention is precious — and we make every word and design element count. Our creative team ensures your emails are visually appealing, mobile-friendly, and aligned with your brand identity.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: '#4C1D95' }}>
              We deliver:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { title: "Eye-catching templates and responsive layouts", image: soft9Image, icon: <FaEye className="w-8 h-8" /> },
                { title: "Compelling subject lines and call-to-actions", image: sky8Image, icon: <FaPen className="w-8 h-8" /> },
                { title: "Personalized email sequences for better engagement", image: aboutImage, icon: <FaUsers className="w-8 h-8" /> },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-violet-300 transition-all relative overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: false }}
                  whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Image at top */}
                <div className="relative h-48 overflow-hidden rounded-t-3xl">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  {/* Icon badge on image */}
                  <div className="absolute top-4 left-4 w-14 h-14 bg-gradient-to-br from-purple-500 to-black text-white rounded-xl flex items-center justify-center shadow-lg">
                    {item.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 text-center relative z-10">
                  <h3 className="font-bold text-lg text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                    {item.title}
                  </h3>
                  <div className="h-1 w-12 rounded-full mx-auto bg-gradient-to-r from-purple-500 to-black group-hover:w-full transition-all duration-500"></div>
                </div>
                
                {/* Bottom shine effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Automation & Workflow Optimization Section */}
      <motion.section
        className="py-20 px-6 md:px-12 lg:px-24 relative z-10"
        style={{ backgroundColor: '#FFFFFF' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="inline-block mb-6"
            >
              <span className="px-8 py-3 text-white text-sm font-bold rounded-full shadow-2xl" style={{ background: 'linear-gradient(135deg, #4C1D95, #000000)' }}>
                ⚙️ AUTOMATION
              </span>
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#4C1D95' }}>
              Automation & Workflow Optimization
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-2 font-semibold" style={{ color: '#000000' }}>
              Reach Your Audience Automatically — and Intelligently
            </p>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
              Automation is the backbone of effective email marketing. At Intellects, we set up automated workflows that trigger based on user actions, ensuring timely and relevant communication.
            </p>
          </div>

          <div className="text-center mb-8">
            <p className="text-lg font-semibold" style={{ color: '#4C1D95' }}>Our automation covers:</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FaBell className="w-8 h-8" />, title: "Welcome and onboarding sequences", color: "from-purple-500 to-purple-600" },
              { icon: <FaSyncAlt className="w-8 h-8" />, title: "Abandoned cart reminders", color: "from-purple-600 to-purple-700" },
              { icon: <FaRocket className="w-8 h-8" />, title: "Lead nurturing and follow-up emails", color: "from-gray-700 to-gray-900" },
              { icon: <FaLightbulb className="w-8 h-8" />, title: "Re-engagement campaigns", color: "from-gray-800 to-black" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-violet-300 transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                viewport={{ once: false }}
                whileHover={{ y: -10, scale: 1.03 }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'linear-gradient(135deg, #4C1D9510, #00000010)' }}
                />

                <div className="absolute -top-2 -right-2 w-16 h-16 opacity-20">
                  <div className={`w-full h-full rounded-full bg-gradient-to-br ${item.color}`}></div>
                </div>

                <div className="relative z-10 p-8 flex flex-col items-center text-center">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
                    viewport={{ once: false }}
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 bg-gradient-to-br ${item.color} text-white`}
                  >
                    {item.icon}
                  </motion.div>

                  <p className="text-gray-700 text-sm leading-relaxed font-medium">
                    {item.title}
                  </p>
                </div>

                <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Performance Tracking & Reporting Section */}
      <motion.section
        className="py-20 px-6 md:px-12 lg:px-24 relative z-10"
        style={{ backgroundColor: '#F9FAFB' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="inline-block mb-6"
            >
              <span className="px-8 py-3 text-white text-sm font-bold rounded-full shadow-2xl" style={{ background: 'linear-gradient(135deg, #4C1D95, #000000)' }}>
                📊 ANALYTICS
              </span>
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#4C1D95' }}>
              Performance Tracking & Reporting
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-2 font-semibold" style={{ color: '#000000' }}>
              Measure What Matters, Improve What Works
            </p>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
              We monitor campaign results in real-time to ensure maximum impact and ROI. Our reports provide clear insights into what's performing well and what needs improvement.
            </p>
          </div>

          <div className="text-center mb-8">
            <p className="text-lg font-semibold" style={{ color: '#4C1D95' }}>We track:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <FaChartBar className="w-6 h-6" />, title: "Open and click rates", color: "from-purple-500 to-purple-600" },
              { icon: <FaRocket className="w-6 h-6" />, title: "Conversion metrics", color: "from-purple-600 to-purple-800" },
              { icon: <FaSyncAlt className="w-6 h-6" />, title: "Unsubscribe and bounce rates", color: "from-gray-700 to-gray-900" },
              { icon: <FaChartLine className="w-6 h-6" />, title: "Campaign ROI reports", color: "from-gray-800 to-black" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: false }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  boxShadow: '0 20px 40px rgba(76, 29, 149, 0.2)',
                }}
                className="relative p-8 rounded-3xl shadow-lg border-2 border-gray-100 transition-all cursor-pointer group overflow-hidden"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${item.color}`}></div>
                
                <div className="relative z-10 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${item.color} text-white`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-purple-700 transition-colors" style={{ color: '#4C1D95' }}>
                    {item.title}
                  </h3>
                </div>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Continuous Optimization & Support Section */}
      <motion.section
        className="py-20 px-6 md:px-12 lg:px-24 relative z-10 overflow-hidden"
        style={{ backgroundColor: '#FFFFFF' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="inline-block mb-6"
            >
              <span className="px-8 py-3 text-white text-sm font-bold rounded-full shadow-2xl" style={{ background: 'linear-gradient(135deg, #4C1D95, #000000)' }}>
                🔄 CONTINUOUS SUPPORT
              </span>
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#4C1D95' }}>
              Continuous Optimization & Support
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-2 font-semibold" style={{ color: '#000000' }}>
              Your Campaigns, Always Getting Smarter
            </p>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
              We don't just send emails — we build relationships. Our team continuously tests, refines, and evolves your campaigns for consistent improvement and better customer connection.
            </p>
          </div>

          <div className="text-center mb-8">
            <p className="text-lg font-semibold" style={{ color: '#4C1D95' }}>Our support includes:</p>
          </div>

          {/* Split Design */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Side - Gradient Panel */}
              <div className="relative h-full min-h-[400px] overflow-hidden bg-gradient-to-br from-purple-600 via-violet-600 to-black p-12 flex items-center">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                
                <div className="relative z-10 text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                  >
                    <FaEnvelope className="w-20 h-20 mb-6" />
                    <h3 className="text-3xl font-black mb-4">Always Improving</h3>
                    <p className="text-white/90 text-lg leading-relaxed">
                      We continuously optimize your email campaigns to ensure maximum engagement and better customer relationships.
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Right Side - Feature List */}
              <div className="p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  {[
                    { icon: <FaChartLine className="w-6 h-6" />, title: "Regular performance reviews", color: "from-purple-500 to-purple-600" },
                    { icon: <FaCog className="w-6 h-6" />, title: "Content updates and automation tuning", color: "from-purple-600 to-purple-800" },
                    { icon: <FaLightbulb className="w-6 h-6" />, title: "Strategy consultation for future campaigns", color: "from-gray-700 to-black" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: false }}
                      whileHover={{ x: 5 }}
                      className="group flex items-start gap-4 p-5 rounded-2xl border-2 border-gray-100 hover:border-violet-300 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-white to-gray-50"
                    >
                      <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 bg-gradient-to-br ${item.color} text-white`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-800 group-hover:text-purple-700 transition-colors">
                          {item.title}
                        </h4>
                      </div>
                      <div className="flex-shrink-0 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        <FaArrowRight className="w-5 h-5" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="py-20 px-6 md:px-12 lg:px-24 relative z-10"
        style={{ backgroundColor: '#F9FAFB' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="inline-block mb-6"
            >
              <span className="px-8 py-3 text-white text-sm font-bold rounded-full shadow-2xl" style={{ background: 'linear-gradient(135deg, #4C1D95, #000000)' }}>
                ❓ COMMON QUESTIONS
              </span>
            </motion.div>

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
              </motion.span>{" "}
              (FAQs)
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section
        className="py-20 px-6 md:px-12 lg:px-24 relative z-10"
        style={{ backgroundColor: '#FFFFFF' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: false }}
      >
        <div className="max-w-6xl mx-auto">
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
                viewport={{ once: false }}
                className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6 border-2 border-white/40"
              >
                <FaPaperPlane className="w-10 h-10 text-white" />
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight max-w-5xl mx-auto">
                Ready to Transform Your Email Marketing?
              </h3>

              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Let's create powerful, personalized email campaigns that connect with your audience and drive measurable results.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <button className="px-10 py-4 bg-white font-bold rounded-xl shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300 flex items-center gap-2 group" style={{ color: '#4C1D95' }}>
                  Start Your Campaign <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-purple-900 transition-all duration-300 hover:scale-105">
                  Request Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
