import Hero from "@/components/home/Hero";
import Quote from "@/components/home/Quote";
import FeaturedServices from "@/components/home/FeaturedServices";
import Testimonials from "@/components/home/Testimonials";
import ContactForm from "@/components/home/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Quote />
      <FeaturedServices />
      <Testimonials />
      <ContactForm />
    </>
  );
}
