import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import FAQ from "@/components/contact/FAQ";
import EnquiryForm from "@/components/contact/EnquiryForm";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <EnquiryForm />
      <FAQ />
      <ContactMap />
    </main>
  );
}
