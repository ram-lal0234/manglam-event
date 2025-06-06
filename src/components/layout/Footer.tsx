"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { FaPinterest } from "react-icons/fa";
import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

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

  const footerLinks: FooterSection[] = [
    {
      title: "Company Info",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Services", href: "/services" },
        { name: "Contact Us", href: "/contact" },
        { name: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Our Services",
      links: [
        { name: "Event Planning", href: "/services/planning" },
        { name: "Venue Selection", href: "/services/venue" },
        { name: "Catering", href: "/services/catering" },
        { name: "Decoration", href: "/services/decoration" },
      ],
    },
    {
      title: "Contact Us",
      links: [
        {
          name: "First Floor, Khasra No. 101, DPS Circle, No 4/D, above HDFC Bank, Branch, Pal, Jodhpur, Rajasthan 342008",
          href: "https://maps.google.com",
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

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/ManglamEventJodhpur/",
      icon: <Facebook className="w-5 h-5" />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/manglamevents/",
      icon: <Instagram className="w-5 h-5" />,
    },
    {
      name: "Pinterest",
      url: "https://in.pinterest.com/manglamevent_jodhpur/",
      icon: <FaPinterest className="w-5 h-5" />,
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
        {/* Logo Section */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="relative w-48 h-16 transition-all duration-300 hover:scale-105 hover:brightness-110"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-accent/10 hover:border-accent/20 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <a
                      href={link.href}
                      className="text-foreground/70 hover:text-primary transition-colors flex items-center group"
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {link.icon}
                      <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-accent/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              className="text-foreground/70 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              © {currentYear} Manglam Event. All rights reserved.
            </motion.p>
            <motion.div
              className="flex space-x-6 mt-4 md:mt-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors bg-background/50 backdrop-blur-sm p-2 rounded-lg hover:bg-accent/5"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <span className="sr-only">{link.name}</span>
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
