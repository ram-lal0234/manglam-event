import AboutHero from '@/components/about/AboutHero';
import MissionSection from '@/components/about/MissionSection';
import OurStory from '@/components/about/OurStory';

export default function AboutPage() {
  return (
    <main className="relative flex flex-col min-h-screen bg-background">
      <AboutHero />
      <div className="w-full h-12 bg-gradient-to-b from-background via-transparent to-background/0" />
      <MissionSection />
      <div className="w-full h-12 bg-gradient-to-b from-background via-transparent to-background/0" />
      <OurStory />
    </main>
  );
}
