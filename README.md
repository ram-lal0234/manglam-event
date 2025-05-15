Manglam Event - Wedding Planning & Event Management Website
Project Overview
Create a modern, elegant Next.js application for Manglam Event, a premium wedding planning and event management company. The website should showcase their services, highlight their expertise, and convey the luxury and personalized experience they offer to clients.
Tech Stack

Framework: Next.js 15 with App Router
Language: TypeScript
Styling: Tailwind CSS 4 (using the provided custom theme)
Animation Libraries:

GSAP for page transitions and scroll animations
Swiper for carousels and sliders


Preloader: Custom animated preloader using GSAP
UI Components: Custom components with animations
State Management: React Context API or Zustand
Forms: React Hook Form with Zod validation
Deployment: Vercel

Project Structure
manglam-event/src
├── app/
│   ├── about/
│   ├── services/
│   ├── gallery/
│   ├── testimonials/
│   ├── contact/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Preloader.tsx
│   ├── home/
│   ├── services/
│   └── about/
├── lib/
│   ├── animations.ts
│   ├── hooks/
│   └── utils/
├── public/
│   ├── images/
│   └── videos/
├── styles/
│   └── globals.css
├── types/
├── tsconfig.json
└── package.json
Key Features & Pages
1. Home Page

Animated preloader with Manglam Event logo using GSAP
Hero section featuring a full-width video slider (using Swiper) with parallax effects
Elegant quote display with subtle text animations (GSAP SplitText)
Featured services section (showing 3 primary services with "View More" button) with scroll-triggered animations
Testimonials carousel using Swiper with custom navigation
Contact form with animated feedback
Footer with company information and animated elements

2. About Us Page

Animated timeline of founder story featuring Naveen Rajpurohit, Mansi and Aakash Maheshwari
Company mission and values with parallax scrolling effects
Team showcase with hover animations and bio modals
Interactive timeline of company journey using GSAP ScrollTrigger
The meaning behind "Manglam" with animated text reveal
Particle background effects on key sections

3. Services Page

Comprehensive listing of all 16 services with beautiful imagery
Each service should feature:

Elegant headline with animated text reveals
Descriptive paragraph with fade-in animations
Representative image with parallax and hover effects
Call-to-action button with micro-interactions


Filter and sort options with smooth transition animations
Service comparison feature with animated transitions

4. Gallery Page

Filterable portfolio of past events with animated filter transitions
Masonry image grid with custom hover effects and animations
Advanced lightbox for image viewing with GSAP animations
Categories with counter animations: Weddings, Corporate Events, Birthdays, etc.
Lazy loading of images with placeholder animations
Video gallery section with custom video player

5. Contact Page

Interactive contact form with animated validation feedback
3D map location using Three.js or interactive Google Maps integration
Direct contact information with click-to-action animations
Service inquiry section with dynamic form fields
Real-time chat option with animated notifications
Availability calendar with booking request functionality

Animation Components & Features
Preloader

Custom animated preloader that displays before the site content loads
Logo animation using GSAP with SVG path animations
Loading progress indicator
Smooth transition to the main content once loaded

Page Transitions

Smooth page transitions using GSAP and Next.js 15 navigation features
Custom exit and enter animations for different page types
Persistent elements that animate between page changes

Scroll Animations

ScrollTrigger-powered animations for content reveal
Parallax effects on images and backgrounds
Text animations including character-by-character reveals
Timeline-based animations for complex sequences

Micro-Interactions

Button hover and click animations
Form field focus states with animated feedback
Custom cursor effects for interactive elements
Animated notifications and toast messages

Carousels & Sliders

Custom Swiper implementations for:

Hero section image/video slider
Testimonial carousel with pagination
Gallery lightbox with swipe gestures
Before/after image comparisons



3D & Special Effects

Subtle 3D card effects using GSAP and CSS
Particle effects for background elements
Image distortion effects on hover
Confetti animations for celebratory sections

Components to Develop
Navigation

Responsive navbar with dropdown for services
Mobile hamburger menu
Smooth scroll navigation
Dark/Light mode toggle

Hero Section

Full-screen video/image slider
Overlay text with animation
Call-to-action button

Service Cards

Elegant cards showcasing each service
Hover effects
Read more functionality

Testimonial Carousel

Client reviews with images
Auto-scrolling with pause on hover
Rating indicators

Contact Form

Styled input fields
Form validation
Success/error messages
File upload for event requirements

Footer

Company information
Quick links
Social media icons
Newsletter signup

Responsive Design

Fully responsive across all devices
Mobile-first approach
Custom breakpoints as needed
Optimized images for different screen sizes

Performance Optimization

Next.js Image component for optimized images
Lazy loading for off-screen content
Component code splitting
Proper font loading strategy

Animations & Interactions

Subtle page transitions
Scroll-triggered animations
Hover effects on interactive elements
Loading states for forms and data fetching

Content Requirements

Professional wedding and event photographs
Team member photos and bios
Service descriptions (provided in the text file)
Client testimonials and reviews
Company story and values

Additional Features

Dark/Light mode toggle
Multi-language support (Hindi/English)
WhatsApp direct contact button
Image gallery with filtering
Blog section for wedding tips and trends
Booking/consultation scheduling system

Accessibility

Semantic HTML structure
ARIA attributes where necessary
Keyboard navigation support
Color contrast compliance
Screen reader friendly

SEO Considerations

Next.js metadata optimization
Structured data for events and services
Sitemap generation
robots.txt configuration
Page speed optimization

Development Instructions

Set up a new Next.js project with Tailwind CSS
Implement the provided custom CSS variables
Create reusable components based on the design system
Develop page layouts following the content structure
Implement responsive design and interactions
Add form functionality and validation
Optimize for performance and SEO
Test across multiple devices and browsers

Deployment

Configure for Vercel deployment
Set up environment variables
Implement analytics tracking
Configure domain settings