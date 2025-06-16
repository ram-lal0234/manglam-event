import Hero from "@/components/home/Hero";
import Quote from "@/components/home/Quote";
import FeaturedServices from "@/components/home/FeaturedServices";
import Testimonials from "@/components/home/Testimonials";
import OurFootprint from "@/components/home/OurFootprint";
import EnquiryForm from "@/components/home/EnquiryForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Quote />
      <FeaturedServices />
      <Testimonials />
      <OurFootprint />
      {/* <EnquiryForm /> */}
    </>
  );
}
