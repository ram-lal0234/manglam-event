import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryCTA from "@/components/gallery/GalleryCTA";
import { GalleryProvider } from "@/context/GalleryContext";

export default function GalleryPage() {
  return (
    <GalleryProvider>
      {/* <GalleryHero /> */}
      <GalleryGrid />
      {/* <GalleryCTA /> */}
    </GalleryProvider>
  );
}
