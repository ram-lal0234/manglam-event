'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "../common/ThemeToggle";
import { useAuth } from "@/context/AuthContext";
import LoginModal from "../auth/LoginModal";
import UserMenu from "../auth/UserMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const { user } = useAuth();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (isOpen) {
        // Animate menu items
        gsap.from('.nav-item', {
          opacity: 0,
          y: 20,
          duration: 0.4,
          stagger: 0.1,
          ease: 'power2.out'
        });

        // Animate menu background
        gsap.from(menuRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.4,
          ease: 'power2.out'
        });
      }
    }, navRef);

    return () => ctx.revert();
  }, [isOpen]);

  return (
    <>
      <nav ref={navRef} className="fixed w-full z-50 h-20">
        <div
          className={`absolute inset-0 transition-all duration-300 ${
            isScrolled
              ? "bg-background/90 backdrop-blur-lg shadow-lg"
              : "bg-transparent"
          }`}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link
              href="/"
              className="relative w-32 h-12 transition-transform duration-300 hover:scale-105"
            >
              <Image
                src="/images/logo.png"
                alt="Manglam Event Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`nav-item relative text-sm font-medium transition-all duration-300 ${
                    pathname === item.path
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                  {pathname === item.path && (
                    <motion.div
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
                      layoutId="navbar-indicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Right side items */}
            <div className="flex items-center space-x-4">
              <div
                className={`transition-colors duration-300 ${
                  isScrolled
                    ? "bg-background/95 backdrop-blur-lg rounded-lg shadow-lg"
                    : ""
                }`}
              >
                <ThemeToggle />
              </div>

              {/* Auth Buttons */}
              <div className="hidden md:flex items-center space-x-4">
                {user ? (
                  <UserMenu />
                ) : (
                  <button
                    onClick={() => setShowLoginModal(true)}
                    className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors duration-300"
                  >
                    Sign In
                  </button>
                )}
              </div>

              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 rounded-lg text-foreground hover:text-primary focus:outline-none transition-colors duration-300 bg-background/95 hover:bg-background border border-accent/20 hover:border-accent/30 shadow-lg hover:shadow-xl"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                <div className="flex items-center justify-center w-6 h-6 relative">
                  <span
                    className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                      isOpen ? "rotate-45 top-3" : "top-1"
                    }`}
                  />
                  <span
                    className={`absolute h-0.5 w-6 bg-current top-3 transition-all duration-300 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                      isOpen ? "-rotate-45 top-3" : "top-5"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 z-[100]"
            >
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-background/80 backdrop-blur-lg"
                onClick={() => setIsOpen(false)}
              />

              {/* Menu Content */}
              <motion.div
                className="absolute top-20 left-0 w-full"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                <div className="bg-background/95 backdrop-blur-lg shadow-lg border-t border-accent/20">
                  <div className="px-4 py-3 space-y-1">
                    {navItems.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        className={`nav-item block px-4 py-4 rounded-lg text-base font-medium transition-all duration-300 ${
                          pathname === item.path
                            ? "text-primary bg-primary/10"
                            : "text-foreground hover:text-primary hover:bg-primary/5"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                    
                    {/* Mobile Auth Section */}
                    {user ? (
                      <UserMenu isMobile />
                    ) : (
                      <button
                        onClick={() => {
                          setShowLoginModal(true);
                          setIsOpen(false);
                        }}
                        className="w-full px-4 py-4 text-base font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors duration-300"
                      >
                        Sign In
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Login Modal */}
      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
      />
    </>
  );
};

export default Navbar; 