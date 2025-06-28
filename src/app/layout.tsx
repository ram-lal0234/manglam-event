import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Preloader from "@/components/layout/Preloader";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Geist, Inter, Roboto, Playfair_Display, Poppins, Crimson_Text } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from 'react-hot-toast';
import RootLayoutWrapper from "@/components/layout/RootLayoutWrapper";
import { SpeedInsights } from '@vercel/speed-insights/next';
import AnimationProvider from "@/components/common/AnimationProvider";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Premium fonts for enhanced typography
const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

const crimson = Crimson_Text({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-crimson',
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
        className={`${GeistSans.variable} ${GeistMono.variable} ${inter.className} ${roboto.className} ${playfair.variable} ${poppins.variable} ${crimson.variable} bg-background text-foreground transition-colors duration-200`}
      >
        <ThemeProvider>
          <AuthProvider>
            {/* <AnimationProvider> */}
              <Preloader />
              <RootLayoutWrapper>
                {children}
                <SpeedInsights />
              </RootLayoutWrapper>
              <WhatsAppButton />
              <Toaster />
            {/* </AnimationProvider> */}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
