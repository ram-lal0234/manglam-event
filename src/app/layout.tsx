import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Preloader from "@/components/layout/Preloader";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Geist, Inter, Roboto, Dancing_Script } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import { AuthProvider } from "@/context/AuthContext";
import { PreloaderProvider } from "@/context/PreloaderContext";
import { Toaster } from 'react-hot-toast';
import RootLayoutWrapper from "@/components/layout/RootLayoutWrapper";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const dancingScript = Dancing_Script({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dancing-script',
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
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Sevillana&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${inter.className} ${roboto.className} ${dancingScript.variable} bg-background text-foreground transition-colors duration-200`}
      >
        <ThemeProvider>
          <AuthProvider>
            <PreloaderProvider>
              <Preloader />
              <RootLayoutWrapper>
                {children}
              </RootLayoutWrapper>
              <WhatsAppButton />
              <Toaster />
            </PreloaderProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
