import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

// Footer Link Component with hover animation
const FooterLink = ({ to, children }) => (
    <motion.div
        whileHover={{ x: 6 }}
        transition={{ type: "spring", stiffness: 300 }}
    >
        <Link
            to={to}
            className="text-sm transition-colors"
            style={{ color: '#9CA3AF' }}
            onMouseEnter={e => e.currentTarget.style.color = '#4C1D95'}
            onMouseLeave={e => e.currentTarget.style.color = '#9CA3AF'}
        >
            {children}
        </Link>
    </motion.div>
);

export default function Footer() {
    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <motion.footer
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="relative border-t"
            style={{
                background: 'linear-gradient(135deg, #1F2937 0%, #111827 100%)',
                borderColor: '#374151'
            }}
        >
            {/* Decorative Top Border */}
            <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, #4C1D95, #7C3AED, #4C1D95)' }} />

            <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24 py-16 md:py-20">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Company Info */}
                    <motion.div variants={fadeInUp} className="lg:col-span-1">
                        <Link to="/" className="inline-block mb-6">
                            <motion.h3 
                                className="text-3xl font-bold"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <span style={{ color: '#FFFFFF' }}>Intell</span>
                                <span style={{ color: '#4C1D95' }}>ects</span>
                            </motion.h3>
                        </Link>
                        <p className="text-sm mb-6 leading-relaxed" style={{ color: '#9CA3AF' }}>
                            Driving innovation through expert software, marketing, and HR consulting services worldwide.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <FaEnvelope style={{ color: '#4C1D95' }} />
                                <span className="text-sm" style={{ color: '#9CA3AF' }}>hello@intellects.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaPhone style={{ color: '#4C1D95' }} />
                                <span className="text-sm" style={{ color: '#9CA3AF' }}>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <FaMapMarkerAlt className="mt-1" style={{ color: '#4C1D95' }} />
                                <span className="text-sm" style={{ color: '#9CA3AF' }}>123 Intellect Tower, NY</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Company Links */}
                    <motion.div variants={fadeInUp} className="flex flex-col gap-4">
                        <h4 className="text-lg font-bold mb-2" style={{ color: '#FFFFFF' }}>
                            Company
                        </h4>
                        <div className="flex flex-col space-y-3">
                            <FooterLink to="/company">About Us</FooterLink>
                            <FooterLink to="/methodology">Methodology</FooterLink>
                            <FooterLink to="/career">Careers</FooterLink>
                            <FooterLink to="/testimonials">Testimonials</FooterLink>
                            <FooterLink to="/contact">Contact Us</FooterLink>
                        </div>
                    </motion.div>

                    {/* Services Links */}
                    <motion.div variants={fadeInUp} className="flex flex-col gap-4">
                        <h4 className="text-lg font-bold mb-2" style={{ color: '#FFFFFF' }}>
                            Services
                        </h4>
                        <div className="flex flex-col space-y-3">
                            <FooterLink to="/services/custom-software-development">Custom Software</FooterLink>
                            <FooterLink to="/services/website-development">Website Development</FooterLink>
                            <FooterLink to="/services/mobile-application">Mobile Apps</FooterLink>
                            <FooterLink to="/services/seo">SEO Services</FooterLink>
                            <FooterLink to="/services/smm">Social Media Marketing</FooterLink>
                            <FooterLink to="/services/recruiter">HR Consulting</FooterLink>
                        </div>
                    </motion.div>

                    {/* Newsletter & Social */}
                    <motion.div variants={fadeInUp} className="flex flex-col gap-4">
                        <h4 className="text-lg font-bold mb-2" style={{ color: '#FFFFFF' }}>
                            Stay Connected
                        </h4>
                        <p className="text-sm mb-4" style={{ color: '#9CA3AF' }}>
                            Subscribe to our newsletter for updates and insights.
                        </p>
                        
                        {/* Newsletter Input */}
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 px-4 py-2 rounded-lg text-sm border-2 focus:outline-none transition-colors"
                                style={{ 
                                    backgroundColor: '#374151', 
                                    borderColor: '#4B5563',
                                    color: '#FFFFFF'
                                }}
                                onFocus={e => e.target.style.borderColor = '#4C1D95'}
                                onBlur={e => e.target.style.borderColor = '#4B5563'}
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-4 py-2 rounded-lg font-semibold text-sm text-white"
                                style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}
                            >
                                Subscribe
                            </motion.button>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-4 mt-4">
                            {[
                                { Icon: FaLinkedin, href: "#", label: "LinkedIn" },
                                { Icon: FaTwitter, href: "#", label: "Twitter" },
                                { Icon: FaFacebook, href: "#", label: "Facebook" },
                                { Icon: FaInstagram, href: "#", label: "Instagram" },
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    aria-label={social.label}
                                    whileHover={{ scale: 1.2, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                                    style={{ backgroundColor: '#374151', color: '#9CA3AF' }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.background = 'linear-gradient(135deg, #4C1D95, #7C3AED)';
                                        e.currentTarget.style.color = '#FFFFFF';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.backgroundColor = '#374151';
                                        e.currentTarget.style.color = '#9CA3AF';
                                    }}
                                >
                                    <social.Icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    variants={fadeInUp}
                    className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
                    style={{ borderColor: '#374151' }}
                >
                    <p className="text-sm" style={{ color: '#6B7280' }}>
                        &copy; {new Date().getFullYear()} Intellects. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link 
                            to="/privacy" 
                            className="text-sm transition-colors"
                            style={{ color: '#6B7280' }}
                            onMouseEnter={e => e.currentTarget.style.color = '#4C1D95'}
                            onMouseLeave={e => e.currentTarget.style.color = '#6B7280'}
                        >
                            Privacy Policy
                        </Link>
                        <Link 
                            to="/terms" 
                            className="text-sm transition-colors"
                            style={{ color: '#6B7280' }}
                            onMouseEnter={e => e.currentTarget.style.color = '#4C1D95'}
                            onMouseLeave={e => e.currentTarget.style.color = '#6B7280'}
                        >
                            Terms of Service
                        </Link>
                    </div>
                </motion.div>
            </div>
        </motion.footer>
    );
}
