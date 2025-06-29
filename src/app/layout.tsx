import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Preloader from "@/components/layout/Preloader";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { 
  Geist, 
  Inter, 
  Roboto, 
  Dancing_Script, 
  Playfair_Display, 
  Cormorant_Garamond,
  Great_Vibes,
  Pacifico,
  Satisfy
} from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from 'react-hot-toast';
import RootLayoutWrapper from "@/components/layout/RootLayoutWrapper";
import { SpeedInsights } from '@vercel/speed-insights/next';

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

const playfairDisplay = Playfair_Display({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
});

const greatVibes = Great_Vibes({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-great-vibes',
});

const pacifico = Pacifico({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
});

const satisfy = Satisfy({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-satisfy',
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
        className={`${GeistSans.variable} ${GeistMono.variable} ${inter.className} ${roboto.className} ${dancingScript.variable} ${playfairDisplay.variable} ${cormorantGaramond.variable} ${greatVibes.variable} ${pacifico.variable} ${satisfy.variable} bg-background text-foreground transition-colors duration-200`}
      >
        <ThemeProvider>
          <AuthProvider>
            <Preloader />
            <RootLayoutWrapper>
              {children}
              <SpeedInsights />
            </RootLayoutWrapper>
            <WhatsAppButton />
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
