"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import UserMenu from "../auth/UserMenu";
import { FaBars, FaHashtag } from "react-icons/fa";
import AuthModal from "../auth/AuthModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const { user } = useAuth();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        ref={navRef}
        className="fixed w-full z-50 px-4 sm:px-6 lg:px-8"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.8, 
          ease: [0.23, 1, 0.32, 1],
          delay: 0.2 
        }}
      >
        <motion.div
          className={`mx-auto mt-6 max-w-7xl transition-all duration-700 ease-out ${
            isScrolled
              ? "scale-[0.98] shadow-2xl shadow-primary/5"
              : "scale-100 shadow-xl shadow-black/5"
          }`}
          style={{
            background: isScrolled 
              ? "rgba(255, 255, 255, 0.95)" 
              : "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: `1px solid ${isScrolled ? "rgba(215, 38, 56, 0.2)" : "rgba(255, 255, 255, 0.3)"}`,
            borderRadius: "24px",
          }}
          whileHover={{
            scale: isScrolled ? 0.985 : 1.005,
            transition: { duration: 0.3 }
          }}
          animate={{
            y: isScrolled ? [0, -1, 0] : [0, -0.5, 0],
          }}
          transition={{
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 rounded-3xl opacity-0"
            style={{
              background: "linear-gradient(135deg, rgba(215, 38, 56, 0.1), rgba(215, 38, 56, 0.05))",
              filter: "blur(20px)",
            }}
            animate={{
              opacity: isScrolled ? 0.6 : 0.3,
            }}
            transition={{ duration: 0.5 }}
          />
          
          <div className="relative px-6 sm:px-8">
            <div className="flex items-center justify-between h-18 py-3">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Link
                  href="/"
                  className="relative block w-36 h-12 group"
                >
                  <motion.div
                    className="relative w-full h-full"
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Image
                      src="/images/logo.png"
                      alt="Manglam Event Logo"
                      fill
                      className="object-contain transition-all duration-300 group-hover:brightness-110"
                      priority
                    />
                    
                    {/* Logo Glow Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100"
                      style={{
                        background: "linear-gradient(135deg, rgba(215, 38, 56, 0.1), transparent)",
                        filter: "blur(8px)",
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </Link>
              </motion.div>

              {/* Desktop Navigation */}
              <motion.div 
                className="hidden md:flex items-center space-x-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: 0.6 + (index * 0.1),
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }}
                  >
                    <Link
                      href={item.path}
                      className="nav-item relative group"
                    >
                      <motion.div
                        className={`relative px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                          pathname === item.path
                            ? "text-white"
                            : "text-foreground hover:text-primary"
                        }`}
                        whileHover={{ 
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {/* Active background */}
                        {pathname === item.path && (
                          <motion.div
                            layoutId="navbar-active-bg"
                            className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-full shadow-lg"
                            style={{
                              boxShadow: "0 4px 20px rgba(215, 38, 56, 0.3)"
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 500,
                              damping: 30,
                            }}
                          />
                        )}
                        
                        {/* Hover background */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full opacity-0"
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                        
                        {/* Text */}
                        <span className="relative z-10">{item.name}</span>
                        
                        {/* Glow effect for active item */}
                        {pathname === item.path && (
                          <motion.div
                            className="absolute inset-0 bg-primary/30 rounded-full blur-md -z-10"
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                        )}
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}

                {/* Hashtag Generator Link */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.6 + (navItems.length * 0.1) + 0.1,
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                >
                  <Link
                    href="/hashtag-generator"
                    className="nav-item relative group"
                  >
                    <motion.div
                      className={`relative px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                        pathname === "/hashtag-generator"
                          ? "text-white"
                          : "text-foreground hover:text-primary"
                      }`}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Active background for hashtag */}
                      {pathname === "/hashtag-generator" && (
                        <motion.div
                          layoutId="navbar-active-bg"
                          className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-full shadow-lg"
                          style={{
                            boxShadow: "0 4px 20px rgba(215, 38, 56, 0.3)"
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }}
                        />
                      )}
                      
                      {/* Hover background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full opacity-0"
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                      
                      <FaHashtag className="w-4 h-4 relative z-10" />
                      <span className="relative z-10">Hashtags</span>
                    </motion.div>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right side items */}
              <motion.div 
                className="flex items-center space-x-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {/* Auth Buttons */}
                <div className="hidden md:flex items-center space-x-3">
                  {user ? (
                    <UserMenu />
                  ) : (
                    <motion.div
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                    >
                      {/* CTA Button */}
                      <motion.button
                        className="px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-primary to-primary/90 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                        style={{
                          boxShadow: "0 4px 20px rgba(215, 38, 56, 0.3)"
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 6px 25px rgba(215, 38, 56, 0.4)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          setAuthMode("signup");
                          setShowAuthModal(true);
                        }}
                      >
                        Get Started
                      </motion.button>
                    </motion.div>
                  )}
                </div>

                {/* Mobile menu button */}
                <motion.button
                  className="md:hidden relative w-12 h-12 flex items-center justify-center rounded-full text-foreground hover:text-primary focus:outline-none transition-all duration-300"
                  style={{
                    background: "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)"
                  }}
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Toggle menu"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.9)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="relative flex items-center justify-center w-6 h-6"
                    animate={isOpen ? "open" : "closed"}
                    variants={{
                      open: { rotate: 90 },
                      closed: { rotate: 0 }
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaBars className="w-5 h-5" />
                  </motion.div>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="md:hidden fixed inset-0 z-[100]"
            >
              {/* Enhanced Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0"
                style={{
                  background: "rgba(0, 0, 0, 0.4)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)"
                }}
                onClick={() => setIsOpen(false)}
              />

              {/* Floating Menu Content */}
              <motion.div
                className="absolute top-32 left-6 right-6"
                initial={{ opacity: 0, y: -30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.9 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.1,
                  type: "spring",
                  stiffness: 300,
                  damping: 25 
                }}
              >
                <motion.div
                  className="overflow-hidden"
                  style={{
                    background: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(25px)",
                    WebkitBackdropFilter: "blur(25px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    borderRadius: "24px",
                    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)"
                  }}
                  whileHover={{
                    boxShadow: "0 25px 70px rgba(0, 0, 0, 0.2)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="px-4 py-3 space-y-2">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Link
                          href={item.path}
                          className={`nav-item block px-4 py-4 rounded-xl text-base font-medium transition-all duration-300 ${
                            pathname === item.path
                              ? "text-primary bg-gradient-to-r from-primary/10 to-accent/5"
                              : "text-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          <motion.span
                            className="relative inline-block"
                            whileHover={{ x: 4 }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 20,
                            }}
                          >
                            {item.name}
                          </motion.span>
                        </Link>
                      </motion.div>
                    ))}

                    {/* Hashtag Generator Link (Mobile) */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: navItems.length * 0.1,
                      }}
                    >
                      <Link
                        href="/hashtag-generator"
                        className={`nav-item block px-4 py-4 rounded-xl text-base font-medium transition-all duration-300 flex items-center space-x-2 ${
                          pathname === "/hashtag-generator"
                            ? "text-primary bg-gradient-to-r from-primary/10 to-accent/5"
                            : "text-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <FaHashtag className="w-5 h-5" />
                        <span>Hashtag Generator</span>
                      </Link>
                    </motion.div>

                    {/* Mobile Auth Section */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: (navItems.length + 1) * 0.1,
                      }}
                      className="pt-2 space-y-2"
                    >
                      {user ? (
                        <UserMenu isMobile />
                      ) : (
                        <>
                          {/* <button
                            onClick={() => {
                              setAuthMode("login");
                              setShowAuthModal(true);
                              setIsOpen(false);
                            }}
                            className="w-full px-4 py-3 text-base font-medium text-primary border border-primary rounded-lg hover:bg-primary/5 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
                          >
                            Login
                          </button>
                          <button
                            onClick={() => {
                              setAuthMode("signup");
                              setShowAuthModal(true);
                              setIsOpen(false);
                            }}
                            className="w-full px-4 py-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
                          >
                            Sign Up
                          </button> */}
                        </>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        initialMode={authMode}
      />
    </>
  );
};

export default Navbar;
