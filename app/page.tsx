"use client";

import { usePortfolioMode } from "@/context/PortfolioModeContext";

import Contact from "@/src/components/Contact";
import Hero from "@/src/components/Hero";
import Navbar from "@/src/components/Navbar";
import Skills from "@/src/components/Skills";
import About from "@/src/components/About";
import Projects from "@/src/components/Projects";
import Footer from "@/src/components/Footer";

// Academic Components (you will create these)
import ReflectiveJournal from "@/src/components/academic/ReflectiveJournal";
import CareerPlan from "@/src/components/academic/CareerPlan";
import Certificates from "@/src/components/academic/Certificates";
import CVSection from "@/src/components/academic/CVSection";

export default function Home() {
  const { mode } = usePortfolioMode();

  return (
    <>
      <Navbar />

      {/* Professional Sections */}
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />

      {/* Academic Sections (Only Visible in Academic Mode) */}
      {mode === "academic" && (
        <>
          <ReflectiveJournal />
          <CareerPlan />
          <Certificates />
          <CVSection />
        </>
      )}

      <Footer />
    </>
  );
}