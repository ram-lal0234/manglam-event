import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactMap from "@/components/contact/ContactMap";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
    </>
  );
}
