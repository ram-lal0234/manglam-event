'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

const ThemeToggle = () => {
  // const { theme, toggleTheme } = useTheme();

  // return (
  //   <motion.button
  //     onClick={toggleTheme}
  //     className="relative w-10 h-10 rounded-lg bg-background/95 hover:bg-background border border-accent/20 hover:border-accent/30 p-2 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-accent/40 focus:ring-offset-2 focus:ring-offset-background shadow-lg hover:shadow-xl"
  //     whileHover={{ scale: 1.05 }}
  //     whileTap={{ scale: 0.95 }}
  //     aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
  //   >
  //     <motion.div
  //       className="absolute inset-0 flex items-center justify-center"
  //       initial={false}
  //       animate={{
  //         rotate: theme === 'dark' ? 180 : 0,
  //         scale: theme === 'dark' ? 1 : 0.9,
  //       }}
  //       transition={{ duration: 0.3, ease: "easeInOut" }}
  //     >
  //       {theme === 'dark' ? (
  //         <svg
  //           className="w-5 h-5 text-foreground"
  //           fill="none"
  //           viewBox="0 0 24 24"
  //           stroke="currentColor"
  //         >
  //           <path
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //             strokeWidth={2}
  //             d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
  //           />
  //         </svg>
  //       ) : (
  //         <svg
  //           className="w-5 h-5 text-foreground"
  //           fill="none"
  //           viewBox="0 0 24 24"
  //           stroke="currentColor"
  //         >
  //           <path
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //             strokeWidth={2}
  //             d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
  //           />
  //         </svg>
  //       )}
  //     </motion.div>
  //   </motion.button>
  // );
};

export default ThemeToggle; 