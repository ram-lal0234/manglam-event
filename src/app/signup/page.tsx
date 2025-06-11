"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import SignUpForm from "@/components/auth/SignUpForm";

export default function SignUpPage() {
  const router = useRouter();
  const { user } = useAuth();

  // Redirect if user is already logged in
  if (user) {
    router.push("/");
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="w-full max-w-md">
        <SignUpForm onSuccess={() => router.push("/")} />
      </div>
    </div>
  );
} 