"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaHeart, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Wedding Planning", href: "/services" },
      { name: "Corporate Events", href: "/services" },
      { name: "Birthday Celebrations", href: "/services" },
      { name: "Destination Weddings", href: "/services" },
      { name: "Vendor Management", href: "/services" }
    ],
    company: [
        { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/about" },
        { name: "Gallery", href: "/gallery" },
      { name: "Testimonials", href: "/#testimonials" },
      { name: "Contact", href: "/contact" }
    ],
    support: [
      { name: "FAQ", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Refund Policy", href: "/refund" },
      { name: "Support", href: "/contact" }
    ]
  };

  const socialLinks = [
    { name: "Facebook", icon: FaFacebook, href: "#", color: "hover:text-blue-600" },
    { name: "Instagram", icon: FaInstagram, href: "#", color: "hover:text-pink-600" },
    { name: "Twitter", icon: FaTwitter, href: "#", color: "hover:text-blue-400" },
    { name: "LinkedIn", icon: FaLinkedin, href: "#", color: "hover:text-blue-700" }
  ];

  const contactInfo = [
    { icon: FaPhone, text: "+91 98765 43210", href: "tel:+919876543210" },
    { icon: FaEnvelope, text: "info@manglam-event.com", href: "mailto:info@manglam-event.com" },
    { icon: FaMapMarkerAlt, text: "Jodhpur, Rajasthan, India", href: "#" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-background overflow-hidden">
      {/* SVG Wave Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(215, 38, 56, 0.08)" />
              <stop offset="50%" stopColor="rgba(215, 38, 56, 0.04)" />
              <stop offset="100%" stopColor="rgba(215, 38, 56, 0.1)" />
            </linearGradient>
          </defs>
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="url(#footerGradient)"
            opacity="0.7"
          />
        </svg>
      </div>

      {/* Floating Flower Decorations */}
      <div className="absolute top-20 left-20 flower-decoration floating">
        <svg viewBox="0 0 24 24">
          <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M12,18C13.1,18 14,18.9 14,20C14,21.1 13.1,22 12,22C10.9,22 10,21.1 10,20C10,18.9 10.9,18 12,18M12,8C13.1,8 14,8.9 14,10C14,11.1 13.1,12 12,12C10.9,12 10,11.1 10,10C10,8.9 10.9,8 12,8M12,14C13.1,14 14,14.9 14,16C14,17.1 13.1,18 12,18C10.9,18 10,17.1 10,16C10,14.9 10.9,14 12,14Z"/>
        </svg>
      </div>
      
      <div className="absolute bottom-20 right-20 flower-decoration floating-delayed">
        <svg viewBox="0 0 24 24">
          <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M12,18C13.1,18 14,18.9 14,20C14,21.1 13.1,22 12,22C10.9,22 10,21.1 10,20C10,18.9 10.9,18 12,18M12,8C13.1,8 14,8.9 14,10C14,11.1 13.1,12 12,12C10.9,12 10,11.1 10,10C10,8.9 10.9,8 12,8M12,14C13.1,14 14,14.9 14,16C14,17.1 13.1,18 12,18C10.9,18 10,17.1 10,16C10,14.9 10.9,14 12,14Z"/>
        </svg>
      </div>

      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 geometric-pattern opacity-8" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Logo */}
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
                    boxShadow: "0 10px 30px rgba(215, 38, 56, 0.3)"
                  }}
                >
                  <span className="text-white font-bold text-xl">M</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground font-playfair">Manglam Event</h3>
                  <p className="text-muted-foreground font-cormorant">Creating Magic Moments</p>
                </div>
              </motion.div>

              {/* Description */}
              <p className="text-muted-foreground font-cormorant leading-relaxed">
                We specialize in creating unforgettable events that bring your vision to life. 
                From intimate gatherings to grand celebrations, we make every moment magical.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${social.color}`}
                    style={{
                      background: "linear-gradient(135deg, rgba(215, 38, 56, 0.1) 0%, rgba(215, 38, 56, 0.05) 100%)",
                      border: "1px solid rgba(215, 38, 56, 0.2)"
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      background: "linear-gradient(135deg, rgba(215, 38, 56, 0.2) 0%, rgba(215, 38, 56, 0.1) 100%)"
                    }}
                  >
                    <social.icon className="w-5 h-5 text-primary" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Services Links */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-foreground font-playfair">Our Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="text-muted-foreground font-cormorant hover:text-primary transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <motion.div
                        className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.5 }}
                      />
                      <span>{link.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Company Links */}
          <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-foreground font-playfair">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="text-muted-foreground font-cormorant hover:text-primary transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <motion.div
                        className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.5 }}
                      />
                      <span>{link.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
          </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-foreground font-playfair">Contact Info</h4>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={contact.text}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{
                        background: "linear-gradient(135deg, rgba(215, 38, 56, 0.1) 0%, rgba(215, 38, 56, 0.05) 100%)",
                        border: "1px solid rgba(215, 38, 56, 0.2)"
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <contact.icon className="w-4 h-4 text-primary" />
                    </motion.div>
                    <a
                      href={contact.href}
                      className="text-muted-foreground font-cormorant hover:text-primary transition-colors duration-300"
                    >
                      {contact.text}
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-primary/10 py-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              className="flex items-center space-x-2 text-muted-foreground font-cormorant"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span>© {currentYear} Manglam Event. All rights reserved.</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaHeart className="w-4 h-4 text-primary" />
              </motion.div>
              <span>Made with love</span>
            </motion.div>

            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
                boxShadow: "0 10px 30px rgba(215, 38, 56, 0.3)"
              }}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <FaArrowUp className="w-5 h-5 text-white" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Top Wave Divider */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          className="w-full h-16"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-background"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-background"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
