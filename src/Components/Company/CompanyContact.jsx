import React, { useState, useCallback } from 'react';
import { Mail, MapPin, Phone, Clock, Globe } from 'lucide-react';

// --- Reusable Form Components ---

const InputField = ({ label, id, type = 'text', required = true, placeholder, value, onChange }) => (
    <div className="mb-4">
        <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-1">
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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150"
        />
    </div>
);

const TextAreaField = ({ label, id, required = true, placeholder, value, onChange }) => (
    <div className="mb-4">
        <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-1">
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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150 resize-none"
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
        <div className="flex items-start space-x-4">
            <Icon className="h-6 w-6 text-primary-medium flex-shrink-0 mt-1" />
            <div>
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                <p className="text-slate-600">{content}</p>
            </div>
        </div>
    );

    return (
        <main className="min-h-screen bg-gray-50 py-16 font-sans">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight">
                        Contact Us
                    </h1>
                    <p className="text-xl text-primary-medium font-medium">
                        Let’s Connect. Let’s Build the Future Together.
                    </p>
                </div>

                {/* Main Contact Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    
                    {/* Left Column: Contact Information */}
                    <div className="bg-white p-8 md:p-10 rounded-xl shadow-2xl border-l-4 border-blue-500 h-fit">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">
                            Get In Touch
                        </h2>
                        <p className="text-lg text-slate-700 mb-8">
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
                    </div>
                    
                    {/* Right Column: Send Us a Message Form */}
                    <div className="bg-white p-8 md:p-10 rounded-xl shadow-2xl border-t-4 border-blue-500">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">
                            Send Us a Message
                        </h2>
                        <p className="text-md text-slate-600 mb-6">
                            We value your time and inquiries. Please fill out the form below — our team will get back to you within 24 hours.
                        </p>

                        {message && (
                            <div className={`p-4 mb-4 rounded-lg font-medium ${message.includes('Thank you') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {message}
                            </div>
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

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-primary-medium hover:bg-primary-dark transition duration-300 disabled:bg-blue-400 disabled:cursor-not-allowed mt-4"
                            >
                                {isSubmitting ? (
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                ) : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
