'use client';

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import LoginForm from './LoginForm';
import { X } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[100]" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-background/80 backdrop-blur-lg" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-background/95 backdrop-blur-lg p-6 text-left align-middle shadow-xl transition-all border border-accent/20">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-lg text-foreground/60 hover:text-foreground hover:bg-accent/5 transition-colors duration-300"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="text-center mb-8">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold leading-6 text-foreground"
                  >
                    Welcome Back
                  </Dialog.Title>
                  <p className="mt-2 text-sm text-foreground/60">
                    Sign in to access your account
                  </p>
                </div>

                <LoginForm onSuccess={onClose} />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
} 