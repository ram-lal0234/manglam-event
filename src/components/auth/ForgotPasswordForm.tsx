"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Loader2, Mail } from "lucide-react";
import { motion } from "framer-motion";

interface ForgotPasswordFormProps {
  onSuccess: () => void;
  onModeChange: (mode: "login") => void;
}

export default function ForgotPasswordForm({ onSuccess, onModeChange }: ForgotPasswordFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const { resetPassword } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      setError(null);
      await resetPassword(email);
      onSuccess();
    } catch (error: any) {
      setError(error.message || "Failed to send reset email");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground/80">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-background/50 border border-accent/20 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center justify-center space-x-2 px-4 py-3 text-sm font-medium bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Send Reset Link"}
        </button>
      </form>

      <p className="text-center text-sm text-foreground/60">
        Remember your password?{" "}
        <button
          onClick={() => onModeChange("login")}
          className="text-primary hover:underline"
        >
          Sign in
        </button>
      </p>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-red-500 text-center bg-red-500/10 p-4 rounded-lg"
        >
          {error}
        </motion.div>
      )}
    </div>
  );
} 