"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Instagram, Clock, MessageCircle } from "lucide-react";
import { FaPinterest, FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";
import Squares from "./Squares";

const ContactInfo = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const contactInfo = [
    {
      id: 1,
      title: "Visit Us",
      content: "First Floor, Khasra No. 101, DPS Circle, No 4/D, above HDFC Bank, Branch, Pal, Jodhpur, Rajasthan 342008",
      subtitle: "By appointment only",
      href: "https://maps.app.goo.gl/xxRJfJyx2g2qYnEN8",
      icon: <MapPin className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      title: "Call Us",
      content: "+91 82399 99000",
      subtitle: "Available 24/7",
      href: "tel:+918239999000",
      icon: <Phone className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
    },
    {
      id: 3,
      title: "Email Us",
      content: "info@manglamevent.com",
      subtitle: "Quick response guaranteed",
      href: "mailto:info@manglamevent.com",
      icon: <Mail className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 4,
      title: "WhatsApp",
      content: "+91 82399 99000",
      subtitle: "Instant messaging",
      href: "https://wa.me/918239999000",
      icon: <FaWhatsapp className="w-6 h-6" />,
      color: "from-green-400 to-green-500",
    },
  ];

  const socialLinks = [
    {
      id: 1,
      name: "Facebook",
      url: "https://www.facebook.com/ManglamEventJodhpur/",
      icon: <Facebook className="w-6 h-6" />,
      color: "from-blue-600 to-blue-700",
    },
    {
      id: 2,
      name: "Instagram",
      url: "https://www.instagram.com/manglamevents/",
      icon: <Instagram className="w-6 h-6" />,
      color: "from-pink-500 to-purple-600",
    },
    {
      id: 3,
      name: "Pinterest",
      url: "https://in.pinterest.com/manglamevent_jodhpur/",
      icon: <FaPinterest className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
    },
  ];

  // Floating particles data
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <section className="py-20 bg-gradient-to-b from-background via-accent/5 to-background relative overflow-hidden">
      {/* Animated Squares Background */}
      <div className="absolute inset-0 opacity-20">
        <Squares 
          speed={0.3} 
          squareSize={60}
          direction='diagonal'
          borderColor='rgba(59, 130, 246, 0.3)'
          hoverFillColor='rgba(59, 130, 246, 0.1)'
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-primary/20 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10,
          }}
        />

        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }} />
        </div>

        {/* Wave Effect */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/10 to-transparent"
          style={{
            background: `linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)`,
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Mouse Follow Effect */}
      <motion.div
        className="fixed w-96 h-96 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none z-0"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          >
            <motion.div
              className="w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <MessageCircle className="text-3xl text-white relative z-10" />
            </motion.div>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent tracking-tight"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: '200% 200%',
            }}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-foreground/70 text-lg max-w-2xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to start your journey? Reach out to us through any of these channels and let's create something magical together.
          </motion.p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.id}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="bg-gradient-to-br from-background/95 to-background/90 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-accent/20 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl relative overflow-hidden"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                />
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute top-2 right-2 w-2 h-2 bg-primary/30 rounded-full"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />
                
                <div className="relative">
                  <motion.div
                    className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, type: "spring", delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                    <div className="text-white relative z-10">
                      {info.icon}
                    </div>
                  </motion.div>
                  
                  <motion.h3
                    className="text-xl font-bold text-foreground mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    {info.title}
                  </motion.h3>
                  
                  <motion.p
                    className="text-foreground/80 font-medium mb-1 cursor-pointer hover:text-primary transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    onClick={() => {
                      window.open(info.href, "_blank");
                    }}
                  >
                    {info.content}
                  </motion.p>
                  
                  <motion.p
                    className="text-sm text-foreground/50 font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    {info.subtitle}
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Social Links Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.h4
            className="text-2xl font-bold text-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Follow Our Journey
          </motion.h4>
          
          <motion.p
            className="text-foreground/70 text-lg mb-8 font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Stay connected with us on social media for the latest updates and inspiration
          </motion.p>
          
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-16 h-16 bg-gradient-to-br ${link.color} rounded-2xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -3, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />
                <span className="sr-only">{link.name}</span>
                <div className="group-hover:scale-110 transition-transform duration-300 relative z-10">
                  {link.icon}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Business Hours */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.div
            className="bg-gradient-to-br from-background/95 to-background/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-accent/20 max-w-2xl mx-auto relative overflow-hidden"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-yellow-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            />
            
            <motion.div
              className="inline-block mb-4 relative"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <Clock className="w-6 h-6 text-white relative z-10" />
              </motion.div>
            </motion.div>
            
            <h5 className="text-xl font-bold text-foreground mb-2 relative z-10">Business Hours</h5>
            <p className="text-foreground/70 font-medium relative z-10">Monday - Sunday: 9:00 AM - 8:00 PM</p>
            <p className="text-sm text-foreground/50 font-medium mt-1 relative z-10">Available for emergency consultations 24/7</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;
