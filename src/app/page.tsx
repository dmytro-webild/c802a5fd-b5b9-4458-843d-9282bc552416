"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Award, Clock, Scissors } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="mediumLargeSizeMediumTitles"
        background="floatingGradient"
        cardStyle="gradient-radial"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Reviews",
          id: "reviews",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="The Barber House"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{
        variant: "gradient-bars",
      }}
      title="Timeless Style for the Modern Man"
      description="Experience professional grooming at The Barber House. From traditional cuts to modern fades, our skilled barbers deliver perfection."
      tag="Expert Grooming"
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/bearded-client-just-got-good-beardcare-from-talanted-trendy-barber_613910-21575.jpg?_wi=1",
          imageAlt: "Barber shop scene",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/bearded-client-just-got-good-beardcare-from-talanted-trendy-barber_613910-21575.jpg?_wi=2",
          imageAlt: "Professional grooming",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/bearded-client-just-got-good-beardcare-from-talanted-trendy-barber_613910-21575.jpg?_wi=3",
          imageAlt: "Modern haircut",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/bearded-client-just-got-good-beardcare-from-talanted-trendy-barber_613910-21575.jpg?_wi=4",
          imageAlt: "Detail trim",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/bearded-client-just-got-good-beardcare-from-talanted-trendy-barber_613910-21575.jpg?_wi=5",
          imageAlt: "Barber tools",
        },
      ]}
      mediaAnimation="blur-reveal"
      rating={5}
      ratingText="Over 500+ Satisfied Customers"
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          title: "Great Experience",
          quote: "The best haircut in Prague! Professional and clean service.",
          name: "Jan Svoboda",
          role: "Regular Client",
          imageSrc: "http://img.b2bpic.net/free-photo/young-businesswoman-portrait-office_1262-1506.jpg?_wi=1",
        },
        {
          id: "2",
          title: "Professional Shop",
          quote: "Fantastic attention to detail. Highly recommend The Barber House.",
          name: "Petr Novak",
          role: "Business Professional",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-attractive-young-businesswoman_329181-15813.jpg",
        },
        {
          id: "3",
          title: "Top Quality",
          quote: "I've been looking for a consistent barber, and this is the place.",
          name: "David Dvořák",
          role: "IT Consultant",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-young-male-grey-t-shirt-shaving-his-head-with-electric-razor-ice-blue_140725-33379.jpg",
        },
        {
          id: "4",
          title: "Relaxed Atmosphere",
          quote: "Very comfortable experience, great conversation and excellent cut.",
          name: "Tomáš Černý",
          role: "Student",
          imageSrc: "http://img.b2bpic.net/free-photo/barber-using-shaving-cream-contour-male-customer-s-beard_23-2148985738.jpg",
        },
        {
          id: "5",
          title: "Precision Work",
          quote: "Sharp fades and great beard care every single visit.",
          name: "Jakub Marek",
          role: "Designer",
          imageSrc: "http://img.b2bpic.net/free-photo/young-businesswoman-portrait-office_1262-1506.jpg?_wi=2",
        },
      ]}
      title="What Our Clients Say"
      description="Read authentic reviews from our satisfied gentlemen."
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="By The Numbers"
      metrics={[
        {
          icon: Scissors,
          label: "Haircuts Per Week",
          value: "200+",
        },
        {
          icon: Clock,
          label: "Years in Business",
          value: "10",
        },
        {
          icon: Award,
          label: "Awards Won",
          value: "5",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      title="Trusted Local Partner"
      description="Proudly serving the Prague community with premium grooming standards."
      names={[
        "Prague Lifestyle",
        "City Grooming Daily",
        "Czech Gentleman Weekly",
        "Urban Barber Collective",
        "Modern Man Society",
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Visit Us"
      title="Book Your Appointment"
      description="Visit us at Libušská 319, Praha, or contact us directly via email at info@thebarbershop.cz or by phone at 773 858 868."
      buttons={[
        {
          text: "Call Now",
          href: "tel:773858868",
        },
        {
          text: "Email Us",
          href: "mailto:info@thebarbershop.cz",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="The Barber House"
      columns={[
        {
          title: "Contact",
          items: [
            {
              label: "Libušská 319, Praha",
              href: "#",
            },
            {
              label: "773 858 868",
              href: "tel:773858868",
            },
            {
              label: "info@thebarbershop.cz",
              href: "mailto:info@thebarbershop.cz",
            },
          ],
        },
        {
          title: "Quick Links",
          items: [
            {
              label: "Home",
              href: "#hero",
            },
            {
              label: "Reviews",
              href: "#reviews",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
      ]}
      copyrightText="© 2025 The Barber House. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
