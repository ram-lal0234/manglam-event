"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Loader2, AlertCircle } from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { z } from "zod";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  partnerName: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\+?[1-9]\d{9,14}$/, "Invalid phone number"),
  eventType: z.string().min(1, "Please select an event type"),
  expectedGuests: z.string().regex(/^\d+$/, "Must be a number").min(1, "Required"),
  tentativeYear: z.string().min(1, "Please select a year"),
  tentativeMonth: z.string().min(1, "Please select a month"),
  weddingDate: z.string().optional(),
  preferredLocation: z.string().min(1, "Please enter a location"),
  numberOfNights: z.string().regex(/^\d+$/, "Must be a number").min(1, "Required"),
  potentialItinerary: z.string().min(1, "Please provide some details"),
  estimatedBudget: z.string().min(1, "Please provide an estimated budget"),
  aboutYourself: z.string().min(1, "Please tell us about yourself")
});

interface FormData {
  name: string;
  partnerName: string;
  email: string;
  phone: string;
  eventType: string;
  expectedGuests: string;
  tentativeYear: string;
  tentativeMonth: string;
  weddingDate: string;
  preferredLocation: string;
  numberOfNights: string;
  potentialItinerary: string;
  estimatedBudget: string;
  aboutYourself: string;
}

interface FormErrors {
  [key: string]: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    partnerName: "",
    email: "",
    phone: "",
    eventType: "",
    expectedGuests: "",
    tentativeYear: "",
    tentativeMonth: "",
    weddingDate: "",
    preferredLocation: "",
    numberOfNights: "",
    potentialItinerary: "",
    estimatedBudget: "",
    aboutYourself: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Indian wedding seasons
  const weddingSeasons = {
    winter: ['November', 'December', 'January', 'February'],
    summer: ['March', 'April', 'May', 'June'],
    monsoon: ['July', 'August', 'September', 'October']
  };

  const eventTypes = [
    { id: "wedding", label: "Wedding" },
    { id: "engagement", label: "Engagement" },
    { id: "birthday", label: "Birthday" },
    { id: "corporate", label: "Corporate" },
    { id: "other", label: "Other" },
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = Array.from({ length: 5 }, (_, i) =>
    (new Date().getFullYear() + i).toString()
  );

  // Get min and max dates based on tentative month and year
  const getDateConstraints = () => {
    if (!formData.tentativeYear || !formData.tentativeMonth) {
      return {
        min: new Date().toISOString().split('T')[0],
        max: new Date(new Date().getFullYear() + 5, 11, 31).toISOString().split('T')[0]
      };
    }

    const year = parseInt(formData.tentativeYear);
    const monthIndex = months.indexOf(formData.tentativeMonth);
    
    // Get the season of the selected month
    const season = Object.entries(weddingSeasons).find(([_, months]) => 
      months.includes(formData.tentativeMonth)
    )?.[0];

    if (!season) return null;

    // Set date range based on season
    let startMonth, endMonth;
    switch (season) {
      // case 'winter':
      //   startMonth = 10; // November
      //   endMonth = 1;    // February
      //   break;
      // case 'summer':
      //   startMonth = 2;  // March
      //   endMonth = 5;    // June
      //   break;
      // case 'monsoon':
      //   startMonth = 6;  // July
      //   endMonth = 9;    // October
      //   break;
      default:
        return null;
    }

    // If the selected month is in the next year
    const isNextYear = monthIndex < new Date().getMonth();
    const targetYear = isNextYear ? year + 1 : year;

    const startDate = new Date(targetYear, startMonth, 1);
    const endDate = new Date(targetYear, endMonth + 1, 0); // Last day of the month

    return {
      min: startDate.toISOString().split('T')[0],
      max: endDate.toISOString().split('T')[0]
    };
  };

  const dateConstraints = getDateConstraints();

  // Update wedding date when tentative month/year changes
  const handleTentativeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    validateField(name, value);

    // Clear wedding date if it's outside the new season range
    if (formData.weddingDate && dateConstraints) {
      const weddingDate = new Date(formData.weddingDate);
      const minDate = new Date(dateConstraints.min);
      const maxDate = new Date(dateConstraints.max);

      if (weddingDate < minDate || weddingDate > maxDate) {
        setFormData(prev => ({ ...prev, weddingDate: '' }));
      }
    }
  };

  const validateField = (name: string, value: string) => {
    try {
      formSchema.shape[name as keyof typeof formSchema.shape].parse(value);
      setErrors(prev => ({ ...prev, [name]: "" }));
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(prev => ({ ...prev, [name]: error.errors[0].message }));
      }
      return false;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Validate all fields
      const validationResult = formSchema.safeParse(formData);
      if (!validationResult.success) {
        const newErrors: FormErrors = {};
        validationResult.error.errors.forEach(error => {
          const field = error.path[0] as string;
          newErrors[field] = error.message;
        });
        setErrors(newErrors);
        throw new Error("Validation failed");
      }

      // Add to Firebase
      const inquiriesRef = collection(db, "inquiries");
      await addDoc(inquiriesRef, {
        ...formData,
        createdAt: serverTimestamp(),
        status: "new"
      });

      setSubmitStatus("success");
      setFormData({
        name: "",
        partnerName: "",
        email: "",
        phone: "",
        eventType: "",
        expectedGuests: "",
        tentativeYear: "",
        tentativeMonth: "",
        weddingDate: "",
        preferredLocation: "",
        numberOfNights: "",
        potentialItinerary: "",
        estimatedBudget: "",
        aboutYourself: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderError = (fieldName: string) => {
    if (errors[fieldName]) {
      return (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center text-red-500 text-sm mt-1"
        >
          <AlertCircle className="w-4 h-4 mr-1" />
          {errors[fieldName]}
        </motion.div>
      );
    }
    return null;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background via-accent/5 to-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.form
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-background/95 to-background/90 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-accent/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Plan Your Special Day
            </h2>
            <p className="text-foreground/70 text-sm md:text-base max-w-2xl mx-auto">
              Fill out the form below and we'll help you create an unforgettable celebration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg bg-background/50 border ${
                    errors.name ? "border-red-500" : "border-accent/20"
                  } focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 placeholder:text-foreground/40`}
                  placeholder="Enter your full name"
                />
                {renderError("name")}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <label className="block text-sm font-medium text-foreground mb-2">
                  Partner's Name
                </label>
                <input
                  type="text"
                  name="partnerName"
                  value={formData.partnerName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-accent/20 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 placeholder:text-foreground/40"
                  placeholder="Enter partner's name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg bg-background/50 border ${
                    errors.email ? "border-red-500" : "border-accent/20"
                  } focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 placeholder:text-foreground/40`}
                  placeholder="Enter your email address"
                />
                {renderError("email")}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg bg-background/50 border ${
                    errors.phone ? "border-red-500" : "border-accent/20"
                  } focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 placeholder:text-foreground/40`}
                  placeholder="Enter your phone number"
                />
                {renderError("phone")}
              </motion.div>
            </div>

            {/* Event Details */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <label className="block text-sm font-medium text-foreground mb-2">
                  Type of Event *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {eventTypes.map((type) => (
                    <label
                      key={type.id}
                      className={`flex items-center space-x-2 p-3 rounded-lg bg-background/50 border ${
                        errors.eventType ? "border-red-500" : "border-accent/20"
                      } cursor-pointer hover:border-primary/50 transition-all duration-300`}
                    >
                      <input
                        type="radio"
                        name="eventType"
                        value={type.id}
                        checked={formData.eventType === type.id}
                        onChange={handleChange}
                        className="w-4 h-4 text-primary focus:ring-primary/50"
                      />
                      <span className="text-sm text-foreground">{type.label}</span>
                    </label>
                  ))}
                </div>
                {renderError("eventType")}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <label className="block text-sm font-medium text-foreground mb-2">
                  Expected Number of Guests *
                </label>
                <input
                  type="number"
                  name="expectedGuests"
                  value={formData.expectedGuests}
                  onChange={handleChange}
                  min="1"
                  className={`w-full px-4 py-3 rounded-lg bg-background/50 border ${
                    errors.expectedGuests ? "border-red-500" : "border-accent/20"
                  } focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 placeholder:text-foreground/40`}
                  placeholder="Enter expected number of guests"
                />
                {renderError("expectedGuests")}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <label className="block text-sm font-medium text-foreground mb-2">
                  Tentative Year *
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {years.map((year) => (
                    <label
                      key={year}
                      className={`flex items-center space-x-2 p-3 rounded-lg bg-background/50 border ${
                        errors.tentativeYear ? "border-red-500" : "border-accent/20"
                      } cursor-pointer hover:border-primary/50 transition-all duration-300`}
                    >
                      <input
                        type="radio"
                        name="tentativeYear"
                        value={year}
                        checked={formData.tentativeYear === year}
                        onChange={handleTentativeChange}
                        className="w-4 h-4 text-primary focus:ring-primary/50"
                      />
                      <span className="text-sm text-foreground">{year}</span>
                    </label>
                  ))}
                </div>
                {renderError("tentativeYear")}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label className="block text-sm font-medium text-foreground mb-2">
                  Tentative Month *
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {months.map((month) => (
                    <label
                      key={month}
                      className={`flex items-center space-x-2 p-3 rounded-lg bg-background/50 border ${
                        errors.tentativeMonth ? "border-red-500" : "border-accent/20"
                      } cursor-pointer hover:border-primary/50 transition-all duration-300`}
                    >
                      <input
                        type="radio"
                        name="tentativeMonth"
                        value={month}
                        checked={formData.tentativeMonth === month}
                        onChange={handleTentativeChange}
                        className="w-4 h-4 text-primary focus:ring-primary/50"
                      />
                      <span className="text-sm text-foreground">{month}</span>
                    </label>
                  ))}
                </div>
                {renderError("tentativeMonth")}
              </motion.div>
            </div>
          </div>

          {/* Additional Details */}
          <div className="mt-8 space-y-6">
            {/* Wedding Date Input */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <label className="block text-sm font-medium text-foreground mb-2">
                Wedding Date (if finalized)
              </label>
              <div className="relative">
                <input
                  type="date"
                  name="weddingDate"
                  value={formData.weddingDate}
                  onChange={handleChange}
                  min={dateConstraints?.min}
                  max={dateConstraints?.max}
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-accent/20 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 appearance-none"
                />
                <button
                  type="button"
                  onClick={() => {
                    const input = document.querySelector('input[name="weddingDate"]') as HTMLInputElement;
                    input?.showPicker();
                  }}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 hover:bg-accent/10 rounded-lg transition-colors"
                >
                  {/* <Calendar className="w-5 h-5 text-foreground/50" /> */}
                </button>
              </div>
              {formData.tentativeMonth && formData.tentativeYear && (
                <p className="mt-2 text-sm text-foreground/70">
                  Available dates for {formData.tentativeMonth} {formData.tentativeYear} wedding season
                </p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <label className="block text-sm font-medium text-foreground mb-2">
                Preferred Location/Venue *
              </label>
              <input
                type="text"
                name="preferredLocation"
                value={formData.preferredLocation}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-background/50 border ${
                  errors.preferredLocation ? "border-red-500" : "border-accent/20"
                } focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 placeholder:text-foreground/40`}
                placeholder="Enter preferred location or venue"
              />
              {renderError("preferredLocation")}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label className="block text-sm font-medium text-foreground mb-2">
                Number of Nights *
              </label>
              <input
                type="number"
                name="numberOfNights"
                value={formData.numberOfNights}
                onChange={handleChange}
                min="1"
                className={`w-full px-4 py-3 rounded-lg bg-background/50 border ${
                  errors.numberOfNights ? "border-red-500" : "border-accent/20"
                } focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 placeholder:text-foreground/40`}
                placeholder="Enter number of nights"
              />
              {renderError("numberOfNights")}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label className="block text-sm font-medium text-foreground mb-2">
                Potential Itinerary/Functions *
              </label>
              <textarea
                name="potentialItinerary"
                value={formData.potentialItinerary}
                onChange={handleChange}
                rows={3}
                className={`w-full px-4 py-3 rounded-lg bg-background/50 border ${
                  errors.potentialItinerary ? "border-red-500" : "border-accent/20"
                } focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 placeholder:text-foreground/40`}
                placeholder="Describe your potential itinerary or functions"
              />
              {renderError("potentialItinerary")}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <label className="block text-sm font-medium text-foreground mb-2">
                Estimated Budget *
              </label>
              <input
                type="text"
                name="estimatedBudget"
                value={formData.estimatedBudget}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-background/50 border ${
                  errors.estimatedBudget ? "border-red-500" : "border-accent/20"
                } focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 placeholder:text-foreground/40`}
                placeholder="Enter your estimated budget"
              />
              {renderError("estimatedBudget")}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <label className="block text-sm font-medium text-foreground mb-2">
                Tell us a little bit about yourself *
              </label>
              <textarea
                name="aboutYourself"
                value={formData.aboutYourself}
                onChange={handleChange}
                rows={4}
                className={`w-full px-4 py-3 rounded-lg bg-background/50 border ${
                  errors.aboutYourself ? "border-red-500" : "border-accent/20"
                } focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 placeholder:text-foreground/40`}
                placeholder="Share some details about yourself and your vision"
              />
              {renderError("aboutYourself")}
            </motion.div>
          </div>

          {/* Submit Button */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </motion.div>

          {/* Status Messages */}
          <AnimatePresence>
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-500 text-center"
              >
                Thank you for your message! We'll get back to you soon.
              </motion.div>
            )}
            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-center"
              >
                Oops! Something went wrong. Please try again.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
      <style jsx>{`
        input , textarea {
          background-color: #f0f0f0;
        }
      `}</style>
    </section>
  );
};

export default ContactForm; 
