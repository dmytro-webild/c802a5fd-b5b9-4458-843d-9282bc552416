"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';

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
            <NavbarStyleFullscreen
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
                { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AiJU1e2jhOFKhLWY9tVwfVdNYC/uploaded-1775566344707-6f6675n6.jpg", imageAlt: "Barber shop scene" },
                { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AiJU1e2jhOFKhLWY9tVwfVdNYC/uploaded-1775566350512-oeknqx9d.jpg", imageAlt: "Professional grooming" }
              ]}
              mediaAnimation="blur-reveal"
              rating={5}
              ratingText="Over 500+ Satisfied Customers"
            />
        </div>

        <div id="reviews" data-section="reviews">
            <TestimonialCardThirteen
              animationType="blur-reveal"
              title="What Our Clients Say"
              description="Read authentic reviews from our satisfied gentlemen."
              textboxLayout="default"
              useInvertedBackground={true}
              showRating={true}
              testimonials={[
                { id: "1", name: "Nam Le-Hoang", handle: "", testimonial: "Barbeři se vyznají v práci! Naprostá spokojenost.", rating: 5 },
                { id: "2", name: "Radovan Jansa", handle: "", testimonial: "Skvělé služby a střih vlasů. Teď také výrazně rozšířili a zmodernizovali prostory holičství. Určitě doporučuji 👍💈✂️💇‍♂️
", rating: 5 },
                { id: "3", name: "Nam Trương", handle: "", testimonial: "Zkušení barbeři. Vřele doporučuji.", rating: 5 }
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
              imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AiJU1e2jhOFKhLWY9tVwfVdNYC/uploaded-1775566359711-2krn9i6j.jpg"
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