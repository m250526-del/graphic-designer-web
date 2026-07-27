"use client";

import Navigation from "@/components/Navigation";
import EditorialCover from "@/components/home/EditorialCover";
import FeaturedSpreads from "@/components/home/FeaturedSpreads";
import CapabilitiesComposition from "@/components/home/CapabilitiesComposition";
import ProcessBlocks from "@/components/home/ProcessBlocks";
import ClientGrid from "@/components/home/ClientGrid";
import SkillsSection from "@/components/home/SkillsSection";
import AboutSection from "@/components/home/AboutSection";
import ClosingSection from "@/components/home/ClosingSection";

/**
 * EDITORIAL PORTFOLIO HOMEPAGE ARCHITECTURE
 * Global fixed halftone background image rendered seamlessly across all sections.
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-transparent text-[#F4F1EB] relative selection:bg-[#D4AF37] selection:text-[#0D0D0E]">
      <Navigation />

      <main>
        {/* SECTION 1: EDITORIAL COVER */}
        <EditorialCover />

        {/* SECTION 2: FEATURED WORK EDITORIAL SPREADS */}
        <FeaturedSpreads />

        {/* SECTION 3: SELECTED CAPABILITIES COMPOSITION */}
        <CapabilitiesComposition />

        {/* SECTION 4: PROCESS BLOCKS */}
        <ProcessBlocks />

        {/* SECTION 5: SELECTED CLIENTS GRID */}
        <ClientGrid />

        {/* SECTION 6: SKILLS */}
        <SkillsSection />

        {/* SECTION 7: ABOUT */}
        <AboutSection />

        {/* SECTION 8: CLOSING */}
        <ClosingSection />
      </main>
    </div>
  );
}
