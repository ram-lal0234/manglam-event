'use client';

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function RootLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isGalleryView = pathname?.startsWith('/gallery/');

  return (
    <>
      {!isGalleryView && <Navbar />}
      <main className="min-h-screen">{children}</main>
      {!isGalleryView && <Footer />}
    </>
  );
} 