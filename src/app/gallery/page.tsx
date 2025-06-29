import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryCTA from "@/components/gallery/GalleryCTA";
import { GalleryProvider } from "@/context/GalleryContext";

export default function GalleryPage() {
  return (
    <GalleryProvider>
      <div className="min-h-screen flex flex-col bg-background">
        <GalleryHero />
        <div className="flex-1">
          <GalleryGrid />
        </div>
        {/* <GalleryCTA /> */}
      </div>
    </GalleryProvider>
  );
}
