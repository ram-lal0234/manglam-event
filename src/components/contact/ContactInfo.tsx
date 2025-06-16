"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { FaPinterest } from "react-icons/fa";

const ContactInfo = () => {
  const contactInfo = [
    {
      id: 1,
      title: "Visit Us",
      content:
        "First Floor, Khasra No. 101, DPS Circle, No 4/D, above HDFC Bank, Branch, Pal, Jodhpur, Rajasthan 342008",
      href: "https://maps.app.goo.gl/xxRJfJyx2g2qYnEN8",
      icon: <MapPin className="w-8 h-8" />,
    },
    {
      id: 2,
      title: "Call Us",
      content: "+91 82399 99000",
      href: "tel:+918239999000",
      icon: <Phone className="w-8 h-8" />,
    },
    {
      id: 3,
      title: "Email Us",
      content: "info@manglamevent.com",
      href: "mailto:info@manglamevent.com",
      icon: <Mail className="w-8 h-8" />,
    },
  ];

  const socialLinks = [
    {
      id: 1,
      name: "Facebook",
      url: "https://www.facebook.com/ManglamEventJodhpur/",
      icon: <Facebook className="w-6 h-6" />,
    },
    {
      id: 2,
      name: "Instagram",
      url: "https://www.instagram.com/manglamevents/",
      icon: <Instagram className="w-6 h-6" />,
    },
    {
      id: 3,
      name: "Pinterest",
      url: "https://in.pinterest.com/manglamevent_jodhpur/",
      icon: <FaPinterest className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background via-accent/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.id}
              className="bg-gradient-to-br from-background to-accent/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-accent/20 hover:border-primary/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <motion.div
                className="text-primary mb-6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "spring" }}
              >
                {info.icon}
              </motion.div>
              <motion.h3
                className="text-xl font-semibold text-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {info.title}
              </motion.h3>
              <motion.p
                className="text-foreground/80 cursor-pointer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                onClick={() => {
                  window.open(info.href, "_self");
                }}
              >
                {info.content}
              </motion.p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.h4
            className="text-xl font-semibold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Connect With Us
          </motion.h4>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="sr-only">{link.name}</span>
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
