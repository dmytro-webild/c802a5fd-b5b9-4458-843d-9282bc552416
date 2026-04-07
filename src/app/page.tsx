"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';

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
            <NavbarStyleCentered
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
              background={{ variant: "sparkles-gradient" }}
              title="The Barber House"
              description="Experience professional grooming at The Barber House. From traditional cuts to modern fades, our skilled barbers deliver perfection."
              tag="Expert Grooming"
              mediaItems={[
                { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AiJU1e2jhOFKhLWY9tVwfVdNYC/uploaded-1775565880878-ua9xs0yj.jpg", imageAlt: "Barber shop scene" },
                { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AiJU1e2jhOFKhLWY9tVwfVdNYC/uploaded-1775565953362-27x8ieir.jpg", imageAlt: "Professional grooming" }
              ]}
              mediaAnimation="blur-reveal"
              rating={5}
              ratingText="Over 500+ Satisfied Customers"
            />
        </div>

        <div id="reviews" data-section="reviews">
            <TestimonialCardSix
              animationType="blur-reveal"
              title="What Our Clients Say"
              description="Read authentic reviews from our satisfied gentlemen."
              textboxLayout="default"
              useInvertedBackground={true}
              testimonials={[
                { id: "1", name: "Jan Svoboda", handle: "@jan_s", testimonial: "The best haircut in Prague! Professional and clean service." },
                { id: "2", name: "Petr Novak", handle: "@petr_n", testimonial: "Fantastic attention to detail. Highly recommend The Barber House." },
                { id: "3", name: "David Dvořák", handle: "@david_d", testimonial: "I've been looking for a consistent barber, and this is the place." }
              ]}
            />
        </div>

        <div id="contact" data-section="contact">
            <ContactSplitForm
              title="Book Your Appointment"
              description="Visit us at Libušská 319, Praha. Fill in your details below and we will get back to you shortly to confirm your booking."
              inputs={[
                { name: "name", type: "text", placeholder: "Full Name", required: true },
                { name: "email", type: "email", placeholder: "Email Address", required: true }
              ]}
              textarea={{ name: "message", placeholder: "How can we help?", rows: 4 }}
              buttonText="Submit Request"
              useInvertedBackground={true}
              imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AiJU1e2jhOFKhLWY9tVwfVdNYC/uploaded-1775565926960-mx6hlut7.jpg"
              imageAlt="Contact Us"
              mediaPosition="right"
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
