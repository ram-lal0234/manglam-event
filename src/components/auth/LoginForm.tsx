'use client';

import { useState, useEffect, useRef } from 'react';
import { useAuth } from '@/context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Loader2, RefreshCw } from 'lucide-react';
import { RecaptchaVerifier, signInWithPhoneNumber, getAuth } from 'firebase/auth';
import { auth } from '@/lib/firebase';

interface LoginFormProps {
  onClose: () => void;
}

export default function LoginForm({ onClose }: LoginFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const recaptchaVerifierRef = useRef<RecaptchaVerifier | null>(null);
  const confirmationResultRef = useRef<any>(null);
  const { signInWithGoogle } = useAuth();

  // Set language code for reCAPTCHA and SMS
  useEffect(() => {
    auth.languageCode = 'en'; // or use auth.useDeviceLanguage() for browser preference
  }, []);

  const setupRecaptcha = async () => {
    try {
      // Clear any existing reCAPTCHA
      if (recaptchaVerifierRef.current) {
        await recaptchaVerifierRef.current.clear();
      }

      // Create new reCAPTCHA verifier with explicit configuration
      recaptchaVerifierRef.current = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'normal',
        callback: () => {
          console.log('reCAPTCHA verified');
        },
        'expired-callback': () => {
          setError('reCAPTCHA expired. Please try again.');
          setIsLoading(false);
        },
        'error-callback': () => {
          setError('reCAPTCHA error. Please try again.');
          setIsLoading(false);
        }
      });

      // Pre-render the reCAPTCHA
      await recaptchaVerifierRef.current.render();
    } catch (error) {
      console.error('Error setting up reCAPTCHA:', error);
      setError('Failed to initialize reCAPTCHA. Please refresh the page and try again.');
    }
  };

  useEffect(() => {
    // Initialize reCAPTCHA after a short delay to ensure DOM is ready
    const timer = setTimeout(() => {
      setupRecaptcha();
    }, 1000);

    return () => {
      clearTimeout(timer);
      if (recaptchaVerifierRef.current) {
        recaptchaVerifierRef.current.clear();
      }
    };
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      setError(null);
      await signInWithGoogle();
      onClose();
    } catch (error) {
      console.error('Error signing in with Google:', error);
      setError('Failed to sign in with Google. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const formatPhoneNumber = (number: string) => {
    // Remove all non-digit characters
    const digits = number.replace(/\D/g, '');
    
    // If the number starts with 0, remove it
    const withoutLeadingZero = digits.startsWith('0') ? digits.slice(1) : digits;
    
    // If the number doesn't start with 91, add it
    const withCountryCode = withoutLeadingZero.startsWith('91') 
      ? withoutLeadingZero 
      : `91${withoutLeadingZero}`;
    
    // Add the + prefix
    return `+${withCountryCode}`;
  };

  const handlePhoneSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) {
      setError('Please enter a phone number');
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      // Format phone number to E.164 format
      const formattedPhoneNumber = formatPhoneNumber(phoneNumber);

      if (!recaptchaVerifierRef.current) {
        throw new Error('reCAPTCHA not initialized');
      }

      // Ensure reCAPTCHA is rendered
      if (!document.querySelector('#recaptcha-container iframe')) {
        await setupRecaptcha();
      }

      const confirmationResult = await signInWithPhoneNumber(
        auth,
        formattedPhoneNumber,
        recaptchaVerifierRef.current
      );
      
      // Store the confirmation result
      confirmationResultRef.current = confirmationResult;
      setIsVerifying(true);
    } catch (error: any) {
      console.error('Error sending verification code:', error);
      if (error.code === 'auth/invalid-phone-number') {
        setError('Invalid phone number format. Please enter a valid phone number.');
      } else if (error.code === 'auth/too-many-requests') {
        setError('Too many attempts. Please try again later.');
      } else if (error.code === 'auth/internal-error') {
        setError('An error occurred. Please try again or refresh the page.');
        // Reset reCAPTCHA on internal error
        await setupRecaptcha();
      } else {
        setError(error.message || 'Failed to send verification code. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!verificationCode || !confirmationResultRef.current) {
      setError('Please enter the verification code');
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      // Confirm the verification code
      const result = await confirmationResultRef.current.confirm(verificationCode);
      // User signed in successfully
      console.log('User signed in successfully:', result.user);
      onClose();
    } catch (error: any) {
      console.error('Error verifying code:', error);
      if (error.code === 'auth/invalid-verification-code') {
        setError('Invalid verification code. Please try again.');
      } else {
        setError(error.message || 'Failed to verify code. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetRecaptcha = async () => {
    try {
      setIsLoading(true);
      setError(null);
      await setupRecaptcha();
    } catch (error) {
      console.error('Error resetting reCAPTCHA:', error);
      setError('Failed to reset reCAPTCHA. Please refresh the page.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <div className="space-y-6">
        {/* Google Sign In Button */}
        <button
          onClick={handleGoogleSignIn}
          disabled={isLoading}
          className="w-full flex items-center justify-center space-x-2 px-4 py-3 text-sm font-medium text-foreground bg-background border border-accent/20 rounded-lg hover:bg-accent/5 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Mail className="w-5 h-5" />
          )}
          <span>Continue with Google</span>
        </button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-accent/20" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-background text-foreground/60">or</span>
          </div>
        </div>

        {/* Phone Sign In Form */}
        <form onSubmit={isVerifying ? handleVerifyCode : handlePhoneSignIn} className="space-y-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
              Phone Number
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground/60" />
              <input
                type="tel"
                id="phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your phone number (e.g., 9876543210)"
                className="w-full pl-10 pr-4 py-2 text-sm bg-background border border-accent/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-colors duration-300"
                disabled={isVerifying || isLoading}
              />
            </div>
            <p className="mt-1 text-xs text-foreground/60">
              Enter your 10-digit phone number without any spaces or special characters
            </p>
          </div>

          {isVerifying && (
            <div>
              <label htmlFor="code" className="block text-sm font-medium text-foreground mb-1">
                Verification Code
              </label>
              <input
                type="text"
                id="code"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                placeholder="Enter 6-digit verification code"
                className="w-full px-4 py-2 text-sm bg-background border border-accent/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-colors duration-300"
                disabled={isLoading}
                maxLength={6}
              />
            </div>
          )}

          {error && (
            <div className="text-sm text-red-500 bg-red-500/10 px-4 py-2 rounded-lg">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center space-x-2 px-4 py-3 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Phone className="w-5 h-5" />
            )}
            <span>{isVerifying ? 'Verify Code' : 'Send Code'}</span>
          </button>
        </form>

        {/* reCAPTCHA container and reset button */}
        <div className="space-y-2">
          <div id="recaptcha-container" className="mt-4 flex justify-center" />
          <button
            type="button"
            onClick={handleResetRecaptcha}
            disabled={isLoading}
            className="flex items-center justify-center space-x-2 text-sm text-foreground/60 hover:text-foreground transition-colors duration-300"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Reset reCAPTCHA</span>
          </button>
        </div>
      </div>
    </div>
  );
} 