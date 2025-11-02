import React, { useState, useCallback, useEffect } from 'react';
import { Mail, MapPin, Phone, Clock, Globe, Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
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

// Animated Section Wrapper
const AnimatedSection = ({ children, delay = 0, backgroundColor = '#FFFFFF' }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: false, amount: 0.2 }}
    style={{ backgroundColor }}
  >
    {children}
  </motion.div>
);

// --- Reusable Form Components ---
const InputField = ({ label, id, type = 'text', required = true, placeholder, value, onChange }) => (
    <div className="mb-6">
        <label htmlFor={id} className="block text-sm font-semibold mb-2" style={{ color: '#000000' }}>
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input
            type={type}
            id={id}
            name={id}
            required={required}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full px-4 py-3 border-2 rounded-xl shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            style={{ borderColor: '#E5E7EB' }}
            onFocus={(e) => {
              e.target.style.borderColor = '#4C1D95';
              e.target.style.boxShadow = '0 0 0 3px rgba(76, 29, 149, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#E5E7EB';
              e.target.style.boxShadow = 'none';
            }}
        />
    </div>
);

const TextAreaField = ({ label, id, required = true, placeholder, value, onChange }) => (
    <div className="mb-6">
        <label htmlFor={id} className="block text-sm font-semibold mb-2" style={{ color: '#000000' }}>
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <textarea
            id={id}
            name={id}
            rows="5"
            required={required}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full px-4 py-3 border-2 rounded-xl shadow-sm transition-all duration-200 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
            style={{ borderColor: '#E5E7EB' }}
            onFocus={(e) => {
              e.target.style.borderColor = '#4C1D95';
              e.target.style.boxShadow = '0 0 0 3px rgba(76, 29, 149, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#E5E7EB';
              e.target.style.boxShadow = 'none';
            }}
        />
    </div>
);

// --- Contact Us Page Component ---
export default function ContactUsPage() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage('');

        // Placeholder for actual form submission logic (e.g., calling an API)
        console.log('Form Data Submitted:', formData);

        setTimeout(() => {
            setIsSubmitting(false);
            // Simulate success
            setMessage('Thank you for your inquiry! We will get back to you within 24 hours.');
            setFormData({ fullName: '', email: '', phone: '', company: '', message: '' });
        }, 2000);
    };

    const ContactDetailItem = ({ icon: Icon, title, content }) => (
        <motion.div 
            className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200 cursor-pointer group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ x: 5 }}
        >
            <motion.div
              className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Icon className="h-6 w-6 text-white" />
            </motion.div>
            <div className="flex-1">
                <h3 className="text-lg font-bold mb-1 group-hover:text-purple-800 transition-colors" style={{ color: '#000000' }}>
                  {title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: '#6B7280' }}>{content}</p>
            </div>
        </motion.div>
    );

    return (
        <div className="overflow-hidden" style={{ backgroundColor: '#FFFFFF', color: '#1F2937' }}>
                
           {/* HERO SECTION WITH BACKGROUND IMAGE (Further Reduced Height) */}
<div
  className="relative min-h-[25vh] flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 text-center overflow-hidden"
  style={{ backgroundColor: '#FFFFFF' }}
>
  {/* Floating Shapes */}
  <motion.div
    animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    className="absolute top-3 left-8 md:left-20 opacity-20"
  >
    <div
      className="w-12 h-12 rounded-2xl transform rotate-12"
      style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}
    />
  </motion.div>

  <motion.div
    animate={{ y: [0, 10, 0], rotate: [0, 180, 360] }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    className="absolute top-20 right-8 md:right-32 opacity-20"
  >
    <div
      className="w-10 h-10 rounded-full"
      style={{ background: 'linear-gradient(135deg, #7C3AED, #F59E0B)' }}
    />
  </motion.div>

  {/* Hero Content */}
  <div className="relative z-10 max-w-3xl mx-auto">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl sm:text-5xl md:text-6xl font-bold mb-0"
      style={{ color: '#000000' }}
    >
      <TypingText text="Get in " />
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
        <TypingText text="Touch" />
      </motion.span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mt-1"
      style={{ color: '#6B7280' }}
    >
      Let's Connect. Let's Build the Future Together.
    </motion.p>
  </div>
</div>



            {/* MAIN CONTACT CONTENT */}
            <AnimatedSection backgroundColor="#F9FAFB">
                <div className="py-20 sm:py-24 px-6 md:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto">
                        
                        {/* Introduction */}
                        <div className="text-center mb-16">
                            <motion.h2 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.5 }}
                                transition={{ duration: 0.7 }}
                                className="text-3xl md:text-5xl font-bold mb-6" 
                                style={{ color: '#000000' }}
                            >
                                We're Here to{" "}
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
                                    Help
                            </motion.span>
                            </motion.h2>
                            
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="max-w-3xl mx-auto text-lg leading-relaxed" 
                                style={{ color: '#6B7280' }}
                            >
                                Whether you have a project in mind, need consulting, or just want to say hello — 
                                our team is ready to assist you. Reach out and let's start building something amazing together.
                            </motion.p>
                        </div>

                        {/* Main Contact Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            
                            {/* Left Column: Contact Information */}
                            <motion.div 
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl border-2"
                                style={{ borderColor: '#E5E7EB' }}
                            >
                                <h3 className="text-2xl font-bold mb-2" style={{ color: '#4C1D95' }}>
                                    Contact Information
                                </h3>
                                <p className="text-base mb-8 leading-relaxed" style={{ color: '#6B7280' }}>
                                    Multiple ways to reach us — choose what works best for you.
                                </p>

                                <div className="space-y-2">
                            <ContactDetailItem
                                icon={MapPin}
                                title="Head Office"
                                content="123 Intellect Tower, Innovation Hub, New York, NY 10001"
                            />
                            <ContactDetailItem
                                icon={Phone}
                                title="Phone"
                                content="+1(919)699-1281"
                            />
                            <ContactDetailItem
                                icon={Mail}
                                title="Email"
                                content="hello@intellects.com"
                            />
                            <ContactDetailItem
                                icon={Globe}
                                title="Website"
                                content="www.intellects.com"
                            />
                            <ContactDetailItem
                                icon={Clock}
                                title="Business Hours"
                                content="Monday - Friday: 9:00 AM - 5:00 PM EST"
                            />
                        </div>

                                {/* Decorative Element */}
                                <motion.div 
                                    className="mt-8 p-6 rounded-xl"
                                    style={{ background: 'linear-gradient(135deg, rgba(76, 29, 149, 0.1), rgba(124, 58, 237, 0.05))' }}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <p className="text-sm font-semibold mb-2" style={{ color: '#4C1D95' }}>
                                        ⚡ Quick Response Guarantee
                                    </p>
                                    <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                                        We value your time. Expect a response within 24 hours on business days.
                                    </p>
                                </motion.div>
                    </motion.div>
                    
                    {/* Right Column: Send Us a Message Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                                className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl border-2"
                                style={{ borderColor: '#E5E7EB' }}
                            >
                                <h3 className="text-2xl font-bold mb-2" style={{ color: '#4C1D95' }}>
                                    Send Us a Message
                                </h3>
                                <p className="text-base mb-8 leading-relaxed" style={{ color: '#6B7280' }}>
                                    Fill out the form below and we'll get back to you shortly.
                        </p>

                        {message && (
                            <motion.div 
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                        className="p-4 mb-6 rounded-xl font-medium flex items-start gap-3"
                                        style={{ 
                                          backgroundColor: message.includes('Thank you') ? '#D1FAE5' : '#FEE2E2',
                                          color: message.includes('Thank you') ? '#065F46' : '#991B1B'
                                        }}
                                    >
                                        {message.includes('Thank you') && <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />}
                                        <span>{message}</span>
                            </motion.div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <InputField
                                label="Full Name"
                                id="fullName"
                                name="fullName"
                                        placeholder="Enter your full name"
                                value={formData.fullName}
                                onChange={handleChange}
                            />
                            <InputField
                                label="Email Address"
                                id="email"
                                name="email"
                                type="email"
                                        placeholder="Enter your email address"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <InputField
                                        label="Phone Number"
                                id="phone"
                                name="phone"
                                required={false}
                                        placeholder="Enter your phone number (optional)"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            <InputField
                                label="Company Name"
                                id="company"
                                name="company"
                                required={false}
                                        placeholder="Enter your company name (optional)"
                                value={formData.company}
                                onChange={handleChange}
                            />
                            <TextAreaField
                                        label="Message"
                                id="message"
                                name="message"
                                        placeholder="Tell us about your project, inquiry, or how we can help you..."
                                value={formData.message}
                                onChange={handleChange}
                            />

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                        whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                        className="w-full flex justify-center items-center gap-3 px-8 py-4 border border-transparent text-lg font-bold rounded-full shadow-xl text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                        style={{ 
                                          background: isSubmitting ? '#9CA3AF' : 'linear-gradient(135deg, #4C1D95, #7C3AED)',
                                          boxShadow: isSubmitting ? 'none' : '0 10px 30px rgba(76, 29, 149, 0.3)'
                                        }}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                Send Message
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* MAP OR ADDITIONAL INFO SECTION */}
            <AnimatedSection backgroundColor="#FFFFFF">
                <div className="py-20 sm:py-24 px-6 md:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto text-center">
                        <motion.h2 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.7 }}
                            className="text-3xl md:text-5xl font-bold mb-6" 
                            style={{ color: '#000000' }}
                        >
                            Visit Our{" "}
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
                                Office
                            </motion.span>
                        </motion.h2>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="max-w-3xl mx-auto text-lg leading-relaxed mb-12" 
                            style={{ color: '#6B7280' }}
                        >
                            We'd love to meet you in person. Our office is located in the heart of the innovation district, 
                            easily accessible by public transportation and with ample parking.
                        </motion.p>

                        {/* Map Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="w-full h-96 rounded-2xl shadow-2xl overflow-hidden border-2"
                            style={{ borderColor: '#E5E7EB' }}
                        >
                            <div 
                                className="w-full h-full flex items-center justify-center"
                                style={{ 
                                  background: 'linear-gradient(135deg, rgba(76, 29, 149, 0.05), rgba(124, 58, 237, 0.05))',
                                }}
                            >
                                <div className="text-center">
                                    <MapPin className="w-16 h-16 mx-auto mb-4" style={{ color: '#4C1D95' }} />
                                    <p className="text-xl font-bold mb-2" style={{ color: '#4C1D95' }}>
                                        Map Integration
                                    </p>
                                    <p className="text-base" style={{ color: '#6B7280' }}>
                                        Embed your Google Maps or location service here
                                    </p>
                                </div>
                            </div>
                    </motion.div>
                    </div>
                </div>
            </AnimatedSection>
            </div>
    );
}
