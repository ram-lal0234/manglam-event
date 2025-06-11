"use client";

import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import ForgotPasswordForm from "./ForgotPasswordForm";

type AuthMode = "login" | "signup" | "forgot-password";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: AuthMode;
}

export default function AuthModal({ isOpen, onClose, initialMode = "login" }: AuthModalProps) {
  const [mode, setMode] = useState<AuthMode>(initialMode);

  // Update mode when initialMode changes
  useEffect(() => {
    setMode(initialMode);
  }, [initialMode]);

  const handleModeChange = (newMode: AuthMode) => {
    setMode(newMode);
  };

  const renderForm = () => {
    switch (mode) {
      case "login":
        return <LoginForm onSuccess={onClose} onModeChange={handleModeChange} />;
      case "signup":
        return <SignUpForm onSuccess={onClose} onModeChange={handleModeChange} />;
      case "forgot-password":
        return <ForgotPasswordForm onSuccess={onClose} onModeChange={handleModeChange} />;
      default:
        return null;
    }
  };

  const getTitle = () => {
    switch (mode) {
      case "login":
        return "Welcome Back";
      case "signup":
        return "Create Account";
      case "forgot-password":
        return "Reset Password";
      default:
        return "";
    }
  };

  const getSubtitle = () => {
    switch (mode) {
      case "login":
        return "Sign in to continue your journey with Manglam Event";
      case "signup":
        return "Join us to start creating unforgettable moments";
      case "forgot-password":
        return "Enter your email to receive a password reset link";
      default:
        return "";
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[100]" onClose={onClose}>
        {/* Overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
        </Transition.Child>

        {/* Dialog Container */}
        <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-6">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-md transform rounded-2xl bg-background/95 backdrop-blur-xl shadow-2xl relative border border-accent/30 flex flex-col h-[calc(100vh-2rem)] sm:h-[calc(100vh-3rem)]">
              {/* Close Button */}
              <motion.button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full text-foreground/80 hover:text-foreground hover:bg-accent/20 transition-all duration-300 z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5" />
              </motion.button>

              {/* Content Container */}
              <div className="flex flex-col h-full">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-center p-6 pb-4"
                >
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold text-foreground"
                  >
                    {getTitle()}
                  </Dialog.Title>
                  <p className="mt-2 text-sm text-foreground/80">
                    {getSubtitle()}
                  </p>
                </motion.div>

                {/* Form */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="flex-1 overflow-y-auto px-6"
                >
                  {renderForm()}
                </motion.div>

                {/* Footer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="p-6 pt-4 text-center border-t border-accent/10"
                >
                  <p className="text-sm text-foreground/80">
                    By continuing, you agree to our{" "}
                    <a href="/terms" className="text-primary hover:text-primary/80 hover:underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="/privacy" className="text-primary hover:text-primary/80 hover:underline">
                      Privacy Policy
                    </a>
                  </p>
                </motion.div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
} 