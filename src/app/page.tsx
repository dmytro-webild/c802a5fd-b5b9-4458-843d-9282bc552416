"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="mediumLargeSizeMediumTitles"
        background="none"
        cardStyle="outline"
        primaryButtonStyle="flat"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
            <NavbarLayoutFloatingOverlay
              navItems={[
                { name: "Home", id: "hero" },
                { name: "Reviews", id: "reviews" },
                { name: "Contact", id: "contact" },
              ]}
              brandName="The Barber House"
            />
        </div>

        <div id="hero" data-section="hero">
            <HeroSplitDualMedia
              background={{ variant: "animated-grid" }}
              title="Timeless Style for the Modern Man"
              description="Experience professional grooming at The Barber House. From traditional cuts to modern fades, our skilled barbers deliver perfection."
              tag="Expert Grooming"
              mediaItems={[
                { imageSrc: "http://img.b2bpic.net/free-photo/bearded-client-just-got-good-beardcare-from-talanted-trendy-barber_613910-21575.jpg?_wi=1", imageAlt: "Barber shop scene" },
                { imageSrc: "http://img.b2bpic.net/free-photo/bearded-client-just-got-good-beardcare-from-talanted-trendy-barber_613910-21575.jpg?_wi=2", imageAlt: "Professional grooming" }
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
                { id: "1", title: "Great Experience", quote: "The best haircut in Prague! Professional and clean service.", name: "Jan Svoboda", role: "Regular Client" },
                { id: "2", title: "Professional Shop", quote: "Fantastic attention to detail. Highly recommend The Barber House.", name: "Petr Novak", role: "Business Professional" },
                { id: "3", title: "Top Quality", quote: "I've been looking for a consistent barber, and this is the place.", name: "David Dvořák", role: "IT Consultant" }
              ]}
              title="What Our Clients Say"
              description="Read authentic reviews from our satisfied gentlemen."
            />
        </div>

        <div id="contact" data-section="contact">
            <ContactCTA
              tag="Visit Us"
              title="Book Your Appointment"
              description="Visit us at Libušská 319, Praha, or contact us directly via email at info@thebarbershop.cz or by phone at 773 858 868."
              buttons={[
                { text: "Call Now", href: "tel:773858868" },
                { text: "Email Us", href: "mailto:info@thebarbershop.cz" }
              ]}
              background={{ variant: "animated-grid" }}
              useInvertedBackground={false}
            />
        </div>

        <div id="footer" data-section="footer">
            <FooterBaseCard
              logoText="The Barber House"
              columns={[
                {
                  title: "Contact",                  items: [
                    { label: "Libušská 319, Praha", href: "#" },
                    { label: "773 858 868", href: "tel:773858868" },
                    { label: "info@thebarbershop.cz", href: "mailto:info@thebarbershop.cz" }
                  ]
                },
                {
                  title: "Quick Links",                  items: [
                    { label: "Home", href: "#hero" },
                    { label: "Reviews", href: "#reviews" },
                    { label: "Contact", href: "#contact" }
                  ]
                }
              ]}
              copyrightText="© 2025 The Barber House. All rights reserved."
            />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}