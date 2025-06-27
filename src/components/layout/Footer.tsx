"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { FaPinterest } from "react-icons/fa";
import { ReactNode, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { services } from "../services/ServicesList";

interface FooterLink {
  name: string;
  href: string;
  icon?: ReactNode;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const footerLinks: FooterSection[] = [
    {
      title: "Company Info",
      links: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Our Services", href: "/services" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact Us", href: "/contact" },
        { name: "#hashtag generator", href: "/hashtag-generator" },
      ],
    },
    {
      title: "Our Services",
      links: services
        .slice(0, 10)
        .map((service) => ({
          name: service.title,
          href: `/services?service=${encodeURIComponent(
            service.title.toLowerCase()
          )}`,
        }))
        .concat([{ name: "View All Services", href: "/services" }]),
    },
    {
      title: "Contact Us",
      links: [
        {
          name: "First Floor, Khasra No. 101, DPS Circle, above HDFC Bank, Pal, Jodhpur, Rajasthan 342008",
          href: "https://maps.app.goo.gl/xxRJfJyx2g2qYnEN8",
          icon: <MapPin className="w-4 h-4 inline-block mr-2" />,
        },
        {
          name: "+91 82399 99000",
          href: "tel:+918239999000",
          icon: <Phone className="w-4 h-4 inline-block mr-2" />,
        },
        {
          name: "info@manglamevent.com",
          href: "mailto:info@manglamevent.com",
          icon: <Mail className="w-4 h-4 inline-block mr-2" />,
        },
      ],
    },
  ];

  const socialCards = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/ManglamEventJodhpur/",
      icon: <Facebook className="w-5 h-5" />,
      color: "hover:bg-[#1877F2] transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/manglamevents/",
      icon: <Instagram className="w-5 h-5" />,
      color:
        "hover:bg-gradient-to-tr from-[#F9CE34] via-[#EE2A7B] to-[#6228D7] transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
    },
    {
      name: "Pinterest",
      url: "https://in.pinterest.com/manglamevent_jodhpur/",
      icon: <FaPinterest className="w-5 h-5" />,
      color: "hover:bg-[#E60023] transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
    },
  ];

  return (
    <motion.footer
      className="bg-gradient-to-br from-background to-accent/10 backdrop-blur-sm border-t border-accent/20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="relative w-48 h-16 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-105 hover:brightness-110 hover:shadow-lg"
          >
            <Image
              src="/images/logo.png"
              alt="Manglam Event Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </motion.div>

        {/* Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-accent/10 hover:border-accent/20 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:shadow-lg hover:shadow-accent/10"
            >
              <h3 className="heading-elegant-small mb-6 text-elegant-gradient">
                {section.title}
              </h3>
              <ul
                className={`space-y-4 ${
                  section.title === "Our Services"
                    ? "max-h-48 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-accent scrollbar-track-transparent"
                    : ""
                }`}
              >
                {section.links.map((link) => (
                  <motion.li
                    key={link.name}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-start text-muted-foreground hover:text-primary transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group"
                    >
                      {link.icon && (
                        <span className="text-primary transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">{link.icon}</span>
                      )}
                      <span className="text-sm transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:translate-x-1">
                        {link.name}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter */}
          <motion.div
            className="bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-accent/10 hover:border-accent/20 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:shadow-lg hover:shadow-accent/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="heading-elegant-small mb-4 text-elegant-gradient">
              Subscribe to Newsletter
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Get updates about events, trends & inspirations.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(`Subscribed: ${email}`);
                setEmail("");
              }}
              className="flex flex-col space-y-4"
            >
              <input
                type="email"
                placeholder="Your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 rounded-lg bg-accent/10 text-sm border border-accent/30 focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-accent/50 focus:border-primary/50"
              />
              <motion.button
                type="submit"
                className="bg-primary cursor-pointer hover:bg-accent text-white hover:text-primary py-3 rounded-lg text-sm transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] font-medium hover:shadow-lg hover:shadow-primary/20 border border-transparent hover:border-primary/30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Social Cards */}
        <div className="flex justify-center gap-4 mb-12">
          {socialCards.map((card, index) => (
            <motion.a
              key={card.name}
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-icon flex items-center justify-center w-14 h-14 rounded-full bg-background/40 backdrop-blur-sm border border-accent/20 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${card.color}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-foreground/80 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:text-white">
                {card.icon}
              </span>
              <span className="sr-only">{card.name}</span>
            </motion.a>
          ))}
        </div>

        {/* Bottom */}
        <motion.div
          className="pt-6 border-t border-accent/20 text-center text-sm text-foreground/70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          © {currentYear} Manglam Event. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
