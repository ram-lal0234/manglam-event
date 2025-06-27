'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';
import UserMenu from '../auth/UserMenu';
import { FaBars, FaHashtag } from 'react-icons/fa';
import AuthModal from '../auth/AuthModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        ref={navRef}
        className="fixed w-full z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className={`mx-4 mt-4 transition-all duration-500 ${
            isScrolled
              ? 'bg-background/80 backdrop-blur-xl shadow-lg border border-accent/10 rounded-2xl'
              : 'bg-background/50 backdrop-blur-md border border-accent/5 rounded-2xl'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link
                href="/"
                className="relative w-32 h-12 transition-all duration-300 hover:scale-105 hover:brightness-110"
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
                    className={`nav-item relative text-base font-semibold font-dancing transition-all duration-300 group ${
                      pathname === item.path
                        ? 'text-primary'
                        : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
                    {pathname === item.path && (
                      <motion.div
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent"
                        layoutId="navbar-indicator"
                        transition={{
                          type: 'spring',
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                ))}

                {/* Hashtag Generator Link */}
                <Link
                  href="/hashtag-generator"
                  className={`nav-item relative text-base font-semibold font-dancing transition-all duration-300 group flex items-center space-x-2 ${
                    pathname === '/hashtag-generator'
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  <FaHashtag className="w-4 h-4" />
                  <span className="font-dancing">Hashtags</span>
                </Link>
              </div>

              {/* Right side items */}
              <div className="flex items-center space-x-4">
                {/* Auth Buttons */}
                <div className="hidden md:flex items-center space-x-4">
                  {user ? (
                    <UserMenu />
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          setAuthMode('login');
                          setShowAuthModal(true);
                        }}
                        className="cursor-pointer px-4 py-2 text-base font-semibold font-dancing text-primary border border-primary rounded-lg hover:bg-primary/5 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
                      >
                        Login
                      </button>
                      <button
                        onClick={() => {
                          setAuthMode('signup');
                          setShowAuthModal(true);
                        }}
                        className="cursor-pointer px-4 py-2 text-base font-semibold font-dancing text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
                      >
                        Sign Up
                      </button>
                    </>
                  )}
                </div>

                {/* Mobile menu button */}
                <motion.button
                  className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl text-foreground hover:text-primary focus:outline-none transition-all duration-300 bg-gradient-to-br from-background/95 to-background/80 hover:from-background hover:to-background/95 border border-accent/20 hover:border-accent/30 shadow-lg hover:shadow-xl"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Toggle menu"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative flex items-center justify-center w-6 h-6">
                    <FaBars className="object-contain" />
                  </div>
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed inset-0 z-[100]"
            >
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-background/90 backdrop-blur-xl"
                onClick={() => setIsOpen(false)}
              />

              {/* Menu Content */}
              <motion.div
                className="absolute top-24 left-4 right-4"
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <div className="bg-gradient-to-br from-background/95 to-background/90 backdrop-blur-xl shadow-2xl border border-accent/10 rounded-2xl overflow-hidden">
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
                          className={`nav-item block px-4 py-4 rounded-xl text-lg font-semibold font-dancing transition-all duration-300 ${
                            pathname === item.path
                              ? 'text-primary bg-gradient-to-r from-primary/10 to-accent/5'
                              : 'text-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5'
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          <motion.span
                            className="relative inline-block"
                            whileHover={{ x: 4 }}
                            transition={{
                              type: 'spring',
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
                        className={`nav-item block px-4 py-4 rounded-xl text-lg font-semibold font-dancing transition-all duration-300 flex items-center space-x-2 ${
                          pathname === '/hashtag-generator'
                            ? 'text-primary bg-gradient-to-r from-primary/10 to-accent/5'
                            : 'text-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <FaHashtag className="w-5 h-5" />
                        <span className="font-dancing">Hashtag Generator</span>
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
                          <button
                            onClick={() => {
                              setAuthMode('login');
                              setShowAuthModal(true);
                              setIsOpen(false);
                            }}
                            className="w-full px-4 py-3 text-lg font-semibold font-dancing text-primary border border-primary rounded-lg hover:bg-primary/5 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
                          >
                            Login
                          </button>
                          <button
                            onClick={() => {
                              setAuthMode('signup');
                              setShowAuthModal(true);
                              setIsOpen(false);
                            }}
                            className="w-full px-4 py-3 text-lg font-semibold font-dancing text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
                          >
                            Sign Up
                          </button>
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
