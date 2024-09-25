"use client";

import { useState, useEffect } from 'react';
import { AuroraHero } from "../components/aurora";
import { HoverImageLinks } from "../components/footer";
import TrippyScroll from "../components/trippyeffect";
import { Example } from "../components/aboutus";
import VerticalAccordion from "../components/admission";
import { FacilitiesSection } from "@/components/facility";
import { ProfessionalStudentContact } from "@/components/professional-student-contact";
import { CollegeGalleryCarousel } from "@/components/college-gallery-carousel";

// Function to check if the device is mobile
const isMobile = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth < 768; // Adjust this breakpoint as needed
  }
  return false;
};

export default function Home() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    // Check if it's mobile on initial load
    setMobile(isMobile());

    // Add event listener for window resize
    const handleResize = () => {
      setMobile(isMobile());
    };
    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (mobile) {
    return (
      <div className="flex items-center justify-center h-screen bg-black p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 animate-fade-in">Welcome to Shree Manjunath School of Nursing</h1>
          <p className="text-lg animate-slide-up">
            For a better viewing experience, please switch to a desktop or a larger screen.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <AuroraHero />
      <CollegeGalleryCarousel />
      <Example />
      <VerticalAccordion />
      <FacilitiesSection />
      <ProfessionalStudentContact />
      <TrippyScroll />
      <HoverImageLinks />
    </>
  );
}
