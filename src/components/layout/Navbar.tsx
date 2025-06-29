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
        className="fixed w-full z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* SVG Wave Background */}
        <div className="absolute inset-0 overflow-hidden">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="fill-primary"
            />
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="fill-primary"
            />
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="fill-primary"
            />
          </svg>
        </div>

        {/* Main Navbar Container */}
        <div className="px-4 sm:px-6 lg:px-8 pt-4">
          <motion.div
            className={`max-w-7xl mx-auto transition-all duration-1000 ease-out rounded-3xl overflow-hidden ${
              isScrolled ? 'floating' : ''
            }`}
            style={{
              background: isScrolled 
                ? "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)"
                : "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(215, 38, 56, 0.1)",
              boxShadow: isScrolled 
                ? "0 25px 50px -12px rgba(215, 38, 56, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.3) inset"
                : "0 10px 25px -5px rgba(215, 38, 56, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.2) inset"
            }}
            whileHover={{
              scale: 1.005,
              transition: { duration: 0.3 }
            }}
          >
            {/* Flower Decorations */}
            <div className="absolute top-2 left-4 flower-decoration">
              <svg viewBox="0 0 24 24">
                <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M12,18C13.1,18 14,18.9 14,20C14,21.1 13.1,22 12,22C10.9,22 10,21.1 10,20C10,18.9 10.9,18 12,18M12,8C13.1,8 14,8.9 14,10C14,11.1 13.1,12 12,12C10.9,12 10,11.1 10,10C10,8.9 10.9,8 12,8M12,14C13.1,14 14,14.9 14,16C14,17.1 13.1,18 12,18C10.9,18 10,17.1 10,16C10,14.9 10.9,14 12,14Z"/>
              </svg>
            </div>
            
            <div className="absolute top-2 right-4 flower-decoration">
              <svg viewBox="0 0 24 24">
                <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M12,18C13.1,18 14,18.9 14,20C14,21.1 13.1,22 12,22C10.9,22 10,21.1 10,20C10,18.9 10.9,18 12,18M12,8C13.1,8 14,8.9 14,10C14,11.1 13.1,12 12,12C10.9,12 10,11.1 10,10C10,8.9 10.9,8 12,8M12,14C13.1,14 14,14.9 14,16C14,17.1 13.1,18 12,18C10.9,18 10,17.1 10,16C10,14.9 10.9,14 12,14Z"/>
              </svg>
            </div>

            <div className="relative px-6 py-4">
              <div className="flex items-center justify-between">
                {/* Enhanced Logo */}
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link
                    href="/"
                    className="relative w-32 h-12 block group"
                  >
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

                {/* Desktop Navigation with Smooth Animations */}
                <div className="hidden md:flex items-center space-x-1">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.1,
                        ease: "easeOut"
                      }}
                    >
                      <Link
                        href={item.path}
                        className={`nav-item relative px-6 py-3 text-sm font-medium font-great-vibes transition-all duration-400 group rounded-2xl overflow-hidden ${
                          pathname === item.path
                            ? "text-primary"
                            : "text-foreground hover:text-primary"
                        }`}
                      >
                        {/* Smooth background effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                        
                        {/* Text with smooth hover */}
                        <motion.span
                          className="relative z-10 block"
                          whileHover={{ 
                            scale: 1.05,
                            textShadow: "0 0 8px rgba(215, 38, 56, 0.3)"
                          }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          {item.name}
                        </motion.span>
                        
                        {/* Smooth active indicator */}
                        {pathname === item.path && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-primary/15 via-primary/10 to-transparent rounded-2xl"
                            layoutId="navbar-active"
                            transition={{
                              type: "spring",
                              stiffness: 500,
                              damping: 30,
                            }}
                          />
                        )}
                        
                        {/* Floating dot indicator */}
                        {pathname === item.path && (
                          <motion.div
                            className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full"
                            layoutId="navbar-dot"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 500,
                              damping: 30,
                            }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  ))}

                  {/* Enhanced Hashtag Generator Link */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: navItems.length * 0.1,
                      ease: "easeOut"
                    }}
                  >
                    <Link
                      href="/hashtag-generator"
                      className={`nav-item relative px-6 py-3 text-sm font-medium font-great-vibes transition-all duration-400 group flex items-center space-x-2 rounded-2xl overflow-hidden ${
                        pathname === "/hashtag-generator"
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                      }`}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div
                        whileHover={{ rotate: 180, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className="relative z-10"
                      >
                        <FaHashtag className="w-4 h-4" />
                      </motion.div>
                      <span className="relative z-10">Hashtags</span>
                    </Link>
                  </motion.div>
                </div>

                {/* Right side items */}
                <div className="flex items-center space-x-4">
                  {/* Auth Buttons */}
                  <div className="hidden md:flex items-center space-x-4">
                    {user ? (
                      <UserMenu />
                    ) : (
                      <>
                        {/* Auth buttons commented out as in original */}
                      </>
                    )}
                  </div>

                  {/* Smooth Mobile menu button */}
                  <motion.button
                    className="md:hidden relative w-12 h-12 flex items-center justify-center rounded-2xl text-foreground hover:text-primary focus:outline-none transition-all duration-400 overflow-hidden group"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(215, 38, 56, 0.1)",
                      boxShadow: "0 8px 16px -4px rgba(215, 38, 56, 0.15)"
                    }}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Smooth background effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-light/10 opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                    
                    <motion.div
                      className="relative flex items-center justify-center w-6 h-6 z-10"
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
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
                            <FaTimes className="w-5 h-5" />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="menu"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <FaBars className="w-5 h-5" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="md:hidden fixed inset-0 z-[100] pt-24"
            >
              {/* Smooth backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, rgba(215, 38, 56, 0.1) 0%, rgba(0, 0, 0, 0.6) 100%)",
                  backdropFilter: "blur(20px)"
                }}
                onClick={() => setIsOpen(false)}
              />

              {/* Smooth Menu Content */}
              <motion.div
                className="relative px-4"
                initial={{ opacity: 0, y: -30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div 
                  className="max-w-sm mx-auto overflow-hidden rounded-3xl shadow-2xl"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)",
                    backdropFilter: "blur(25px)",
                    border: "1px solid rgba(215, 38, 56, 0.2)",
                    boxShadow: "0 25px 50px -12px rgba(215, 38, 56, 0.3)"
                  }}
                >
                  {/* Creative header pattern */}
                  <div className="relative h-2 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-light to-primary animate-pulse" />
                  </div>

                  <div className="px-6 py-8 space-y-2">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.path}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: index * 0.1,
                          ease: "easeOut"
                        }}
                      >
                        <Link
                          href={item.path}
                          className={`nav-item flex px-6 py-4 rounded-2xl text-lg font-medium font-great-vibes transition-all duration-400 group relative overflow-hidden ${
                            pathname === item.path
                              ? "text-primary"
                              : "text-foreground hover:text-primary"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {/* Smooth background */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-primary/15 via-primary/8 to-transparent opacity-0 group-hover:opacity-100"
                            transition={{ duration: 0.3 }}
                          />
                          
                          <motion.span
                            className=" flex items-center justify-center z-10"
                            whileHover={{ x: 8, scale: 1.02 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 20,
                            }}
                          >
                            {item.name}
                          </motion.span>
                          
                          {/* Active indicator */}
                          {pathname === item.path && (
                            <motion.div
                              className="absolute left-2 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-primary rounded-full"
                              layoutId="mobile-active"
                              transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 30,
                              }}
                            />
                          )}
                        </Link>
                      </motion.div>
                    ))}

                    {/* Enhanced Hashtag Generator Link (Mobile) */}
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: navItems.length * 0.1,
                        ease: "easeOut"
                      }}
                    >
                      <Link
                        href="/hashtag-generator"
                        className={`nav-item  px-6 py-4 rounded-2xl text-lg font-medium font-great-vibes transition-all duration-400 group flex items-center space-x-3 relative overflow-hidden ${
                          pathname === "/hashtag-generator"
                            ? "text-primary"
                            : "text-foreground hover:text-primary"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-primary/15 via-primary/8 to-transparent opacity-0 group-hover:opacity-100"
                          transition={{ duration: 0.3 }}
                        />
                        
                        <motion.div
                          whileHover={{ rotate: 180, scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                          className="relative z-10"
                        >
                          <FaHashtag className="w-5 h-5" />
                        </motion.div>
                        <span className="relative z-10">Hashtag Generator</span>
                      </Link>
                    </motion.div>

                    {/* Mobile Auth Section */}
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: (navItems.length + 1) * 0.1,
                        ease: "easeOut"
                      }}
                      className="pt-4 space-y-3"
                    >
                      {user ? (
                        <UserMenu isMobile />
                      ) : (
                        <>
                          {/* Auth buttons commented out as in original */}
                        </>
                      )}
                    </motion.div>
                  </div>
                </div>
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
