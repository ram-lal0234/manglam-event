'use client';

import { useState, useRef, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { User, LogOut, Settings, ChevronDown } from 'lucide-react';
import Link from 'next/link';

interface UserMenuProps {
  isMobile?: boolean;
}

export default function UserMenu({ isMobile = false }: UserMenuProps) {
  const { user, signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
      setIsOpen(false);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const menuItems = [
    {
      icon: <User className="w-4 h-4" />,
      label: 'Profile',
      href: '/profile',
    },
    {
      icon: <Settings className="w-4 h-4" />,
      label: 'Settings',
      href: '/settings',
    },
  ];

  if (isMobile) {
    return (
      <div className="px-4 py-3 border-t border-accent/20">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">
              {user?.displayName || 'User'}
            </p>
            <p className="text-xs text-foreground/60 truncate">
              {user?.email}
            </p>
          </div>
        </div>
        <div className="space-y-1">
          {/* {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center space-x-2 px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors duration-300"
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))} */}
          <button
            onClick={handleSignOut}
            className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-red-500 hover:text-red-600 hover:bg-red-500/5 rounded-lg transition-colors duration-300"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-accent/5 transition-colors duration-300"
      >
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
          <User className="w-4 h-4 text-primary" />
        </div>
        <span className="text-sm font-medium text-foreground">
          {user?.displayName || 'User'}
        </span>
        <ChevronDown className={`w-4 h-4 text-foreground/60 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-56 rounded-lg bg-background/95 backdrop-blur-lg shadow-lg border border-accent/20 py-1"
          >
            <div className="px-4 py-2 border-b border-accent/20">
              <p className="text-sm font-medium text-foreground">
                {user?.displayName || 'User'}
              </p>
              <p className="text-xs text-foreground/60 truncate">
                {user?.email}
              </p>
            </div>
            <div className="py-1">
              {/* {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-2 px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-primary/5 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))} */}
              <button
                onClick={handleSignOut}
                className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-red-500 hover:text-red-600 hover:bg-red-500/5 transition-colors duration-300"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 