"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Why should I hire a wedding planner?",
    answer:
      "Planning a wedding takes hundreds of hours. A planner streamlines the process, presents curated options, and manages communication with vendors. Experienced planners know how to allocate your budget wisely, find cost-effective solutions, and avoid costly mistakes or hidden fees. They have established relationships with trusted vendors and can often negotiate better deals or recommend professionals that match your style and budget. They handle logistics, timelines, vendor coordination, and troubleshooting—so you don't have to. This lets you actually enjoy your engagement and the wedding day itself. A wedding planner brings peace of mind, professionalism, and polish to your big day. Whether you're short on time, unsure where to start, or simply want the day to be flawless, a planner can be a smart and supportive investment.",
  },
  {
    question: "What is a wedding planner responsible for?",
    answer:
      "A wedding planner is responsible for managing and coordinating all aspects of the wedding to ensure a smooth, stress-free, and memorable experience for the couple and their families. Their responsibilities can vary based on the level of service hired (full-service, partial planning, or day-of coordination), but generally include: Planning & Organization, Vendor Coordination, Budget Management, Design & Styling, Venue Management, Guest Management. A wedding planner is your project manager, designer, and stress buffer all in one. They handle the behind-the-scenes work so you can focus on the joy of your day, not the logistics.",
  },
  {
    question: "Can I bring my vendors, if any?",
    answer:
      "Yes, you can bring your own vendor and we will manage emails, timelines, or logistics, and coordinate with them directly so that you don't have to hassle in your own wedding.",
  },
  {
    question: "How many weddings do you coordinate per day?",
    answer:
      "At Manglam Event, if you pick your dates and confirm it with us, we will choose to work only with your wedding and not take up any other assignment on that day. We follow one wedding at a time.",
  },
  {
    question: "How important is decor for a wedding?",
    answer:
      "Whether you're going for romantic, royal, bohemian, or modern chic, your decor immediately tells guests what kind of experience they're in for. The colors, textures, and lighting create an emotional ambiance. Wedding decor is the soul of the celebration's look and feel. It transforms spaces, tells your love story without words, and makes the day visually unforgettable. While it doesn't need to be over-the-top or expensive, well-planned decor can make a big difference.",
  },
  {
    question: "What is the main goal of a wedding planner?",
    answer:
      "The main goal of a wedding planner is to ensure that the couple's wedding is stress-free, well-organized, and beautifully executed—from the first idea to the final dance. Planning a wedding can be overwhelming. A planner takes over the time-consuming tasks, solves problems, and handles all the behind-the-scenes work so you can enjoy the experience without stress. Wedding planners act as a bridge between you and your vendors, offering expert advice, negotiating contracts, and making sure everyone is aligned with your vision and budget. From backup plans for bad weather to making sure the rings are where they should be, planners sweat the small stuff, so nothing is forgotten. The main goal of a wedding planner is to create a seamless, personalized, and joyful wedding experience for the couple—one that reflects their love story and allows them to be fully present on their special day.",
  },
  {
    question: "What makes Manglam Event different?",
    answer:
      "Understanding that every love story is unique, Manglam Event specializes in creating personalized themed weddings. Whether you envision a fairytale castle, a royal palace, or a rustic garden setting, our team brings your dream wedding theme to life, ensuring an unforgettable and personalized experience. We handle all aspects of destination weddings, from travel arrangements to venue coordination, allowing you to relax and enjoy your special day. We are known for our professionalism, timely execution, and attention to detail. Our team works closely with you to understand your unique preferences, ensuring that every aspect of your wedding reflects your vision and style. At Manglam Event, we understand the depth of the connection, and we're here to transform your wedding into a luxurious, personal, and unforgettable celebration. Our young, vibrant team of designers works closely with local artists and craftsmen to custom-design every element of your functions. We're not just planners—we're storytellers, curators, and creators of endless memories. With us, you get more than just an event; you get a seamless experience. We assist you at every step of the planning process, connect you with the best service providers, and even offer thoughtful gift solutions. Our hospitality is personified from the very first hello to the final goodbye. Because we love what we do, and it shows in every detail. From concept to celebration, we're here to make your wedding less about the hassle and more about the joy—so two families can come together, and a lifetime of memories can begin.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-background via-background/95 to-background/90 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="heading-elegant-large mb-12 text-center text-elegant-gradient">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-background/80 border border-primary/20 rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg relative"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none group cursor-pointer"
                onClick={() => toggle(idx)}
                aria-expanded={openIndex === idx}
              >
                <span className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-4 text-primary"
                >
                  <ChevronDown className="w-6 h-6" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="px-6 pb-6 text-foreground/90 text-base md:text-lg leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-full h-full text-primary"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
