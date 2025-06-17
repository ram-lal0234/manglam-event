"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  User,
  GoogleAuthProvider,
  signInWithPopup,
  getRedirectResult,
  signInWithPhoneNumber,
  RecaptchaVerifier,
  signOut as firebaseSignOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/lib/firebase";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signUpWithEmail: (
    email: string,
    password: string,
    name: string
  ) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
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

    // Handle redirect result
    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          // User successfully signed in
          setUser(result.user);
        }
      })
      .catch((error) => {
        console.error("Error getting redirect result:", error);
      });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      // Add custom parameters for better mobile experience
      provider.setCustomParameters({
        prompt: "select_account",
        // Force account selection even when one account is available
        auth_type: "reauthenticate",
      });

      await signInWithPopup(auth, provider);
    } catch (error: any) {
      // Handle specific error cases
      if (error.code === "auth/popup-closed-by-user") {
        throw new Error("Sign-in popup was closed. Please try again.");
      } else if (error.code === "auth/cancelled-popup-request") {
        throw new Error("Sign-in was cancelled. Please try again.");
      } else {
        console.error("Error signing in with Google:", error);
        throw error;
      }
    }
  };

  const signInWithPhone = async (phoneNumber: string) => {
    try {
      const recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "normal",
          callback: () => {
            // reCAPTCHA solved
          },
        }
      );

      const confirmation = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        recaptchaVerifier
      );
      setConfirmationResult(confirmation);
    } catch (error) {
      console.error("Error signing in with phone:", error);
      throw error;
    }
  };

  const verifyOTP = async (otp: string) => {
    try {
      if (confirmationResult) {
        await confirmationResult.confirm(otp);
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
      throw error;
    }
  };

  const signInWithEmail = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      if (error.code === "auth/user-not-found") {
        throw new Error(
          "No account found with this email. Please sign up first."
        );
      } else if (error.code === "auth/wrong-password") {
        throw new Error("Incorrect password. Please try again.");
      } else if (error.code === "auth/invalid-email") {
        throw new Error("Invalid email address.");
      } else {
        console.error("Error signing in with email:", error);
        throw error;
      }
    }
  };

  const signUpWithEmail = async (
    email: string,
    password: string,
    name: string
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Update the user's profile with their name
      await updateProfile(userCredential.user, {
        displayName: name,
      });
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        throw new Error("An account already exists with this email.");
      } else if (error.code === "auth/weak-password") {
        throw new Error("Password should be at least 6 characters long.");
      } else if (error.code === "auth/invalid-email") {
        throw new Error("Invalid email address.");
      } else {
        console.error("Error signing up with email:", error);
        throw error;
      }
    }
  };

  const resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error: any) {
      if (error.code === "auth/user-not-found") {
        throw new Error("No account found with this email.");
      } else if (error.code === "auth/invalid-email") {
        throw new Error("Invalid email address.");
      } else {
        console.error("Error sending password reset email:", error);
        throw error;
      }
    }
  };

  const value = {
    user,
    loading,
    signInWithGoogle,
    signInWithEmail,
    signUpWithEmail,
    signInWithEmailAndPassword,
    resetPassword,
    signInWithPhone,
    verifyOTP,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
