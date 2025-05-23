import ServiceCategories from "@/components/services/ServiceCategories";
import ServiceCTA from "@/components/services/ServiceCTA";
import ServiceList from "@/components/services/ServicesList";
import ServicesHero from "@/components/services/ServicesHero";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <ServicesHero />
      <div className="relative z-10">
        <ServiceList />
        <ServiceCTA />
      </div>
    </main>
  );
} 