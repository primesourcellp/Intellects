import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const SocialMediaSidebar = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Social media links - Update these with your actual social media URLs
  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebook,
      url: "https://www.facebook.com/intellects",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      url: "https://twitter.com/intellects",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/company/intellects",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/intellects",
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      url: "https://wa.me/1234567890",
    },
  ];

  // Show/hide on scroll (optional - you can remove this if you want it always visible)
  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="flex flex-col items-center gap-3 p-2"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.2, x: -5 }}
                whileTap={{ scale: 0.9 }}
                className="
                  w-12 h-12 rounded-l-2xl rounded-r-sm
                  text-purple-600
                  flex items-center justify-center
                  shadow-lg
                  transition-all duration-300
                  group
                  relative
                  bg-transparent
                "
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                
                {/* Tooltip */}
                <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
                  {social.name}
                  <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
                </div>
              </motion.a>
            ))}

            {/* Vertical line decoration */}
            <div className="w-1 h-16 bg-gradient-to-b from-purple-600 to-indigo-600 rounded-full mt-2"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SocialMediaSidebar;

