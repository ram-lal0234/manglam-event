"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
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
        <LoginForm onSuccess={() => router.push("/")} onModeChange={function (mode: "signup" | "forgot-password"): void {
          throw new Error("Function not implemented.");
        } } />
      </div>
    </div>
  );
} 