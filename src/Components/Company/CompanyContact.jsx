import React, { useState, useCallback } from 'react';
import { Mail, MapPin, Phone, Clock, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

// --- Reusable Form Components ---

const InputField = ({ label, id, type = 'text', required = true, placeholder, value, onChange }) => (
    <div className="mb-4">
        <label htmlFor={id} className="block text-sm font-medium mb-1" style={{ color: '#1F2937' }}>
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
            className="w-full px-4 py-2 border-2 rounded-lg shadow-sm transition duration-150"
            style={{ borderColor: '#E5E7EB' }}
            onFocus={(e) => e.target.style.borderColor = '#4C1D95'}
            onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
        />
    </div>
);

const TextAreaField = ({ label, id, required = true, placeholder, value, onChange }) => (
    <div className="mb-4">
        <label htmlFor={id} className="block text-sm font-medium mb-1" style={{ color: '#1F2937' }}>
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <textarea
            id={id}
            name={id}
            rows="4"
            required={required}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full px-4 py-2 border-2 rounded-lg shadow-sm transition duration-150 resize-none"
            style={{ borderColor: '#E5E7EB' }}
            onFocus={(e) => e.target.style.borderColor = '#4C1D95'}
            onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
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
            className="flex items-start space-x-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <Icon className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#4C1D95' }} />
            <div>
                <h3 className="text-lg font-semibold" style={{ color: '#000000' }}>{title}</h3>
                <p style={{ color: '#6B7280' }}>{content}</p>
            </div>
        </motion.div>
    );

    return (
        <main className="min-h-screen py-16 font-sans" style={{ backgroundColor: '#F9FAFB' }}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                
                {/* Header Section */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 tracking-tight" style={{ color: '#000000' }}>
                        Contact{" "}
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
                            Us
                        </motion.span>
                    </h1>
                    <p className="text-xl font-medium" style={{ color: '#4C1D95' }}>
                        Let's Connect. Let's Build the Future Together.
                    </p>
                </motion.div>

                {/* Main Contact Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    
                    {/* Left Column: Contact Information */}
                    <motion.div 
                        className="bg-white p-8 md:p-10 rounded-xl shadow-2xl border-l-4 h-fit"
                        style={{ borderColor: '#4C1D95' }}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold mb-6" style={{ color: '#4C1D95' }}>
                            Get In{" "}
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
                                Touch
                            </motion.span>
                        </h2>
                        <p className="text-lg mb-8" style={{ color: '#6B7280' }}>
                            We make it easy to connect with us. You can reach our team through phone, email, or by filling out the quick contact form below.
                        </p>

                        <div className="space-y-6">
                            <ContactDetailItem
                                icon={MapPin}
                                title="Head Office"
                                content="123 Intellect Tower, Innovation Hub, New York, NY 10001"
                            />
                            <ContactDetailItem
                                icon={Phone}
                                title="Phone"
                                content="+1 (555) 123-4567"
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
                    </motion.div>
                    
                    {/* Right Column: Send Us a Message Form */}
                    <motion.div 
                        className="bg-white p-8 md:p-10 rounded-xl shadow-2xl border-t-4"
                        style={{ borderColor: '#4C1D95' }}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold mb-6" style={{ color: '#4C1D95' }}>
                            Send Us a{" "}
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
                                Message
                            </motion.span>
                        </h2>
                        <p className="text-md mb-6" style={{ color: '#6B7280' }}>
                            We value your time and inquiries. Please fill out the form below — our team will get back to you within 24 hours.
                        </p>

                        {message && (
                            <motion.div 
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`p-4 mb-4 rounded-lg font-medium ${message.includes('Thank you') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
                            >
                                {message}
                            </motion.div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <InputField
                                label="Full Name"
                                id="fullName"
                                name="fullName"
                                placeholder="Jane Doe"
                                value={formData.fullName}
                                onChange={handleChange}
                            />
                            <InputField
                                label="Email Address"
                                id="email"
                                name="email"
                                type="email"
                                placeholder="name@example.com"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <InputField
                                label="Phone Number (optional)"
                                id="phone"
                                name="phone"
                                required={false}
                                placeholder="(555) 555-5555"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            <InputField
                                label="Company Name"
                                id="company"
                                name="company"
                                required={false}
                                placeholder="Your Company Inc."
                                value={formData.company}
                                onChange={handleChange}
                            />
                            <TextAreaField
                                label="Message / Project Details"
                                id="message"
                                name="message"
                                placeholder="Tell us about your project or inquiry..."
                                value={formData.message}
                                onChange={handleChange}
                            />

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                animate={{
                                    boxShadow: [
                                        '0 0 20px rgba(76, 29, 149, 0)',
                                        '0 0 30px rgba(76, 29, 149, 0.4)',
                                        '0 0 20px rgba(76, 29, 149, 0)'
                                    ]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                                style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}
                            >
                                {isSubmitting ? (
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                ) : 'Send Message'}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
