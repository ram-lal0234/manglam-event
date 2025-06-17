import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Preloader from "@/components/layout/Preloader";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Geist, Inter, Roboto } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from 'react-hot-toast';
import RootLayoutWrapper from "@/components/layout/RootLayoutWrapper";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Manglam Event - Wedding Planning & Event Management",
  description:
    "Premium wedding planning and event management services. Creating unforgettable moments and turning dreams into reality.",
  keywords:
    "wedding planning, event management, corporate events, birthday celebrations, event decoration",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${inter.className} ${roboto.className} bg-background text-foreground transition-colors duration-200`}
      >
        <ThemeProvider>
          <AuthProvider>
            <Preloader />
            <RootLayoutWrapper>
              {children}
            </RootLayoutWrapper>
            <WhatsAppButton />
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
