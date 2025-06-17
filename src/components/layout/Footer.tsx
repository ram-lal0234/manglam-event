"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { FaPinterest } from "react-icons/fa";
import { ReactNode, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { services } from "../services/ServicesList";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import toast from "react-hot-toast";

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
  const [isSubscribing, setIsSubscribing] = useState(false);

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
      color: "hover:bg-[#1877F2]",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/manglamevents/",
      icon: <Instagram className="w-5 h-5" />,
      color:
        "hover:bg-gradient-to-tr from-[#F9CE34] via-[#EE2A7B] to-[#6228D7]",
    },
    {
      name: "Pinterest",
      url: "https://in.pinterest.com/manglamevent_jodhpur/",
      icon: <FaPinterest className="w-5 h-5" />,
      color: "hover:bg-[#E60023]",
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

        {/* Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-accent/10 hover:border-accent/20 transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold  mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
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
                      className="flex items-start text-muted-foreground hover:text-primary transition-colors group"
                    >
                      {link.icon && (
                        <span className="text-primary">{link.icon}</span>
                      )}
                      <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">
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
            className="bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-accent/10 hover:border-accent/20 transition-all duration-300 hover:shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Subscribe to Newsletter
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Get updates about events, trends & inspirations.
            </p>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setIsSubscribing(true);
                try {
                  await addDoc(collection(db, "newsletter_subscribers"), {
                    email,
                    createdAt: serverTimestamp(),
                  });
                  toast.success("Successfully subscribed to newsletter!");
                  setEmail("");
                } catch (error) {
                  console.error("Error subscribing to newsletter:", error);
                  toast.error("Failed to subscribe. Please try again.");
                } finally {
                  setIsSubscribing(false);
                }
              }}
              className="flex flex-col space-y-4"
            >
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-background/80 text-sm border border-accent/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 placeholder:text-muted-foreground/60"
                  disabled={isSubscribing}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <Mail className="w-4 h-4 text-muted-foreground/60" />
                </div>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white py-3.5 rounded-xl text-sm font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 disabled:shadow-none"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubscribing}
              >
                {isSubscribing ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Subscribing...
                  </span>
                ) : (
                  "Subscribe Now"
                )}
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
              className={`flex items-center justify-center w-12 h-12 rounded-full bg-background/40 backdrop-blur-sm border border-accent/20 transition-all duration-300 group ${card.color}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-foreground/80 group-hover:text-white transition-colors duration-300">
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
