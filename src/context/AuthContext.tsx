'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { 
  User,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithPhoneNumber,
  RecaptchaVerifier,
  signOut as firebaseSignOut
} from 'firebase/auth';
import { auth } from '@/lib/firebase';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithPhone: (phoneNumber: string) => Promise<void>;
  verifyOTP: (otp: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [confirmationResult, setConfirmationResult] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Error signing in with Google:', error);
      throw error;
    }
  };

  const signInWithPhone = async (phoneNumber: string) => {
    try {
      const recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'normal',
        callback: () => {
          // reCAPTCHA solved
        },
      });

      const confirmation = await signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier);
      setConfirmationResult(confirmation);
    } catch (error) {
      console.error('Error signing in with phone:', error);
      throw error;
    }
  };

  const verifyOTP = async (otp: string) => {
    try {
      if (confirmationResult) {
        await confirmationResult.confirm(otp);
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  };

  const value = {
    user,
    loading,
    signInWithGoogle,
    signInWithPhone,
    verifyOTP,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 