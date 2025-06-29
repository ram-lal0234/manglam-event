"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import UserMenu from "../auth/UserMenu";
import { FaBars, FaHashtag, FaTimes } from "react-icons/fa";
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
        className="fixed w-full z-50 top-0"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Enhanced Background with better visibility */}
        <div className="absolute inset-0">
          <div
            className={`w-full h-full transition-all duration-500 ${
              isScrolled
                ? "bg-white/95 backdrop-blur-xl shadow-lg"
                : "bg-white/80 backdrop-blur-lg"
            }`}
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
        </div>

        {/* Main Navbar Container */}
        <div className="relative px-4 sm:px-6 lg:px-8 py-3">
          <motion.div
            className={`max-w-7xl mx-auto transition-all duration-500 ease-out rounded-2xl overflow-hidden ${
              isScrolled ? "shadow-xl" : "shadow-lg"
            }`}
            style={{
              background: isScrolled
                ? "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.95) 100%)"
                : "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(215, 38, 56, 0.15)",
              boxShadow: isScrolled
                ? "0 20px 40px -12px rgba(215, 38, 56, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.4) inset"
                : "0 10px 30px -5px rgba(215, 38, 56, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.3) inset",
            }}
            whileHover={{
              scale: 1.002,
              transition: { duration: 0.3 },
            }}
          >
            {/* Enhanced Flower Decorations */}
            <div className="absolute top-3 left-6 flower-decoration">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-primary/60">
                <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M12,18C13.1,18 14,18.9 14,20C14,21.1 13.1,22 12,22C10.9,22 10,21.1 10,20C10,18.9 10.9,18 12,18M12,8C13.1,8 14,8.9 14,10C14,11.1 13.1,12 12,12C10.9,12 10,11.1 10,10C10,8.9 10.9,8 12,8M12,14C13.1,14 14,14.9 14,16C14,17.1 13.1,18 12,18C10.9,18 10,17.1 10,16C10,14.9 10.9,14 12,14Z" />
              </svg>
            </div>

            <div className="absolute top-3 right-6 flower-decoration">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-primary/60">
                <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M12,18C13.1,18 14,18.9 14,20C14,21.1 13.1,22 12,22C10.9,22 10,21.1 10,20C10,18.9 10.9,18 12,18M12,8C13.1,8 14,8.9 14,10C14,11.1 13.1,12 12,12C10.9,12 10,11.1 10,10C10,8.9 10.9,8 12,8M12,14C13.1,14 14,14.9 14,16C14,17.1 13.1,18 12,18C10.9,18 10,17.1 10,16C10,14.9 10.9,14 12,14Z" />
              </svg>
            </div>

            <div className="relative px-6 py-3">
              <div className="flex items-center justify-between">
                {/* Enhanced Logo */}
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link href="/" className="relative w-36 h-14 block group">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                    <Image
                      src="/images/logo.png"
                      alt="Manglam Event Logo"
                      fill
                      className="object-contain relative z-10 transition-all duration-300 hover:brightness-110"
                      priority
                    />
                  </Link>
                </motion.div>

                {/* Desktop Navigation with Enhanced Styling */}
                <div className="hidden md:flex items-center space-x-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                    >
                      <Link
                        href={item.path}
                        className={`nav-item relative px-6 py-3 text-base font-large font-semibold font-playfair transition-all duration-400 group rounded-xl overflow-hidden ${
                          pathname === item.path
                            ? "text-primary bg-primary/10"
                            : "text-foreground hover:text-primary hover:bg-primary/5"
                        }`}
                      >
                        {/* Enhanced background effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />

                        {/* Text with enhanced hover */}
                        <motion.span
                          className="relative z-10 block"
                          whileHover={{
                            scale: 1.05,
                            textShadow: "0 0 8px rgba(215, 38, 56, 0.3)",
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                          }}
                        >
                          {item.name}
                        </motion.span>

                        {/* Enhanced active indicator */}
                        {pathname === item.path && (
                          <motion.div
                            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-light"
                            layoutId="activeTab"
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 30,
                            }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center space-x-4">
                  {/* Hashtag Generator Button */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <Link
                      href="/hashtag-generator"
                      className={`nav-item relative px-4 py-2 text-sm font-large font-semibold font-playfair transition-all duration-400 group flex items-center space-x-2 rounded-xl overflow-hidden ${
                        pathname === "/hashtag-generator"
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                      <FaHashtag className="relative z-10 w-4 h-4" />
                      <span className="relative z-10">Hashtag</span>
                    </Link>
                  </motion.div>

                  {/* Auth/User Section - Hidden for now */}
                  {/* <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    {user ? (
                      <UserMenu />
                    ) : (
                      <motion.button
                        onClick={() => {
                          setAuthMode("login");
                          setShowAuthModal(true);
                        }}
                        className="px-6 py-2 bg-gradient-to-r from-primary to-primary-light text-white font-playfair rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Login
                      </motion.button>
                    )}
                  </motion.div> */}

                  {/* Mobile Menu Button */}
                  <motion.button
                    className="md:hidden p-2 rounded-xl hover:bg-primary/10 transition-colors duration-300"
                    onClick={() => setIsOpen(!isOpen)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <AnimatePresence mode="wait">
                      {isOpen ? (
                        <motion.div
                          key="close"
                          initial={{ rotate: -90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FaTimes className="w-6 h-6 text-primary" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="menu"
                          initial={{ rotate: 90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: -90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FaBars className="w-6 h-6 text-primary" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={menuRef}
              className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-primary/10 shadow-xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.path}
                      className={`nav-item flex px-6 py-4 rounded-2xl text-lg font-large font-semibold font-playfair transition-all duration-400 group relative overflow-hidden ${
                        pathname === item.path
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:text-primary hover:bg-primary/5"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                      <span className="relative z-10">{item.name}</span>
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Hashtag Generator */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <Link
                    href="/hashtag-generator"
                    className={`nav-item px-6 py-4 rounded-2xl text-lg font-large font-semibold font-playfair transition-all duration-400 group flex items-center space-x-3 relative overflow-hidden ${
                      pathname === "/hashtag-generator"
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:text-primary hover:bg-primary/5"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                    <FaHashtag className="relative z-10 w-5 h-5" />
                    <span className="relative z-10">Hashtag Generator</span>
                  </Link>
                </motion.div>

                {/* Mobile Auth Button */}
                {/* {!user && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    className="pt-4"
                  >
                    <motion.button
                      onClick={() => {
                        setAuthMode("login");
                        setShowAuthModal(true);
                        setIsOpen(false);
                      }}
                      className="w-full px-6 py-4 bg-gradient-to-r from-primary to-primary-light text-white font-playfair rounded-2xl hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Login / Sign Up
                    </motion.button>
                  </motion.div>
                )} */}
              </div>
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
