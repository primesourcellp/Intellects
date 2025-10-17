import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";

// Define Custom Accent Colors for Navy/White Theme
const COLOR_NAVY_BG = 'rgb(30 58 138)';     // Deep Navy Blue (Tailwind: blue-800)
const COLOR_ACCENT_HOVER = 'rgb(59 130 246)'; // Bright Blue for hover/accent (Tailwind: blue-500)
const COLOR_TEXT_LIGHT = 'rgb(249 250 251)'; // Very Light Gray/Off-White (Tailwind: gray-50)
const COLOR_TEXT_MUTED = 'rgb(209 213 219)'; // Lighter Gray for body/link text (Tailwind: gray-300)
const COLOR_TEXT_DIM = 'rgb(156 163 175)';   // Muted gray for copyright (Tailwind: gray-400)


// Footer Link Component with hover animation
const FooterLink = ({ to, children }) => (
  <motion.div
    whileHover={{ x: 6 }} 
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Link
      to={to}
      // Base text is light gray, hover accent is the bright blue
      className="text-sm transition-colors"
      style={{ 
        color: COLOR_TEXT_MUTED, // Light gray text
      }}
      // Custom hover effect using the bright blue ACCENT color
      onMouseEnter={e => e.currentTarget.style.color = COLOR_ACCENT_HOVER}
      onMouseLeave={e => e.currentTarget.style.color = COLOR_TEXT_MUTED} 
    >
      {children}
    </Link>
  </motion.div>
);

export default function Footer() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const socialIcons = [
    {
      label: "LinkedIn",
      href: "#",
      svgPath:
        "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.518-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
    },
    {
      label: "Twitter",
      href: "#",
      svgPath:
        "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.795-1.574 2.164-2.722-.951.555-2.005.959-3.127 1.184-.897-.957-2.178-1.555-3.594-1.555-3.594 0-5.188 3.011-4.743 5.437-4.102-.207-7.733-2.179-10.169-5.174-.423.72-.66 1.564-.66 2.46 0 1.696.865 3.2 2.18 4.086-.807-.025-1.565-.247-2.23-.615v.075c0 3.267 2.31 5.99 5.347 6.643-.574.15-1.178.225-1.794.225-.44 0-.87-.043-1.288-.125.857 2.661 3.315 4.606 6.257 4.665-2.298 1.8-5.18 2.573-8.243 2.573-.538 0-1.066-.031-1.583-.092 3.09 1.902 6.772 2.992 10.71 2.992 12.853 0 19.95-10.598 19.95-19.96 0-.306-.007-.611-.019-.915.823-.593 1.535-1.33 2.1-2.172z",
    },
    {
      label: "Facebook",
      href: "#",
      svgPath:
        "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.046v-3.469h3.046v-2.625c0-3.003 1.792-4.66 4.532-4.66 1.313 0 2.686.234 2.686.234v2.953h-1.516c-1.493 0-1.956.925-1.956 1.874v2.245h3.329l-.532 3.469h-2.797v8.385c5.736-.9 10.124-5.864 10.124-11.854z",
    },
  ];

  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      // Apply the Navy Blue background and ensure text is white/light
      className="border-t text-white" 
      style={{ 
        backgroundColor: COLOR_NAVY_BG, 
        borderColor: COLOR_ACCENT_HOVER // Use the brighter blue for a top border highlight
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-12">
          
          {/* Logo + Info */}
          <motion.div variants={fadeInUp} className="col-span-2 md:col-span-1 lg:col-span-2 flex flex-col gap-4">
            <Link to="/" className="text-2xl font-bold" style={{ color: COLOR_TEXT_LIGHT }}>
              {/* Accent part of the logo is the brighter blue */}
              <span style={{ color: COLOR_ACCENT_HOVER }}>Intellects</span>
            </Link>
            <p className="text-sm pr-8" style={{ color: COLOR_TEXT_MUTED }}>
              Driving innovation through expert software, marketing, and HR consulting services worldwide.
            </p>
            
            {/* Social Icons - base color DIM, hover ACCENT */}
            <div className="flex space-x-4 mt-2">
              {socialIcons.map((icon, i) => (
                <motion.a
                  key={i}
                  href={icon.href}
                  aria-label={icon.label}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  className="transition-colors"
                  style={{ color: COLOR_TEXT_DIM }} // Base color is a muted gray
                  onMouseEnter={e => e.currentTarget.style.color = COLOR_ACCENT_HOVER}
                  onMouseLeave={e => e.currentTarget.style.color = COLOR_TEXT_DIM}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d={icon.svgPath} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-3">
            <h4 className="text-base font-semibold mb-1" style={{ color: COLOR_ACCENT_HOVER }}>Company</h4>
            <div className="flex flex-col space-y-2">
              <FooterLink to="/company">About Us</FooterLink>
              <FooterLink to="/methodology">Methodology</FooterLink>
              <FooterLink to="/career">Careers</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </div>
          </motion.div>

          {/* Services Links */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-3">
            <h4 className="text-base font-semibold mb-1" style={{ color: COLOR_ACCENT_HOVER }}>Services</h4>
            <div className="flex flex-col space-y-2">
              <FooterLink to="/services/custom-software-development">Custom Software</FooterLink>
              <FooterLink to="/services/mobile-application">Mobile Apps</FooterLink>
              <FooterLink to="/services/seo">SEO & Marketing</FooterLink>
              <FooterLink to="/services/hr-consulting">HR Consulting</FooterLink>
            </div>
          </motion.div>

          {/* Resources Links */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-3">
            <h4 className="text-base font-semibold mb-1" style={{ color: COLOR_ACCENT_HOVER }}>Resources</h4>
            <div className="flex flex-col space-y-2">
              <FooterLink to="/blog">Blog & Insights</FooterLink>
              <FooterLink to="/testimonials">Testimonials</FooterLink>
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
              <FooterLink to="/terms">Terms of Service</FooterLink>
            </div>
          </motion.div>
        </div>

        {/* Divider + Copyright */}
        <motion.div 
          variants={fadeInUp} 
          // Use a subtle gray border for the divider
          className="mt-12 pt-8 border-t text-center"
          style={{ borderColor: 'rgb(55 65 81)' }} // Tailwind gray-700 equivalent
        >
          <p className="text-sm" style={{ color: COLOR_TEXT_DIM }}>&copy; {new Date().getFullYear()} Intellects. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}