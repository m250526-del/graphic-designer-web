"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";

/**
 * SECTION 3 — Selected Capabilities
 * Transparent background layer so global halftone image shines through.
 */
export default function CapabilitiesComposition() {
  return (
    <section className="py-28 md:py-40 border-b border-[#F4F1EB]/10 bg-transparent text-[#F4F1EB] relative">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-12"
        >
          <div className="flex justify-between items-center border-b border-[#F4F1EB]/10 pb-4 font-mono text-xs text-[#D4AF37]">
            <span>[ SELECTED CAPABILITIES ]</span>
            <span>DISCIPLINARY ARCHITECTURE</span>
          </div>

          {/* Interlocking Typography Composition */}
          <div className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-[7.5vw] font-black uppercase tracking-tighter leading-none text-[#F4F1EB] space-y-2 md:space-y-4 select-none">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="hover:text-[#D4AF37] transition-colors duration-300">GRAPHIC DESIGN</span>
              <span className="font-mono text-xs text-[#B5ADA4] tracking-widest font-normal">[ 01 ]</span>
              <span className="hover:text-[#D4AF37] transition-colors duration-300">BRAND IDENTITY</span>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[#B5ADA4]">
              <span className="font-mono text-xs text-[#D4AF37] tracking-widest font-normal">[ 02 ]</span>
              <span className="text-[#F4F1EB] hover:text-[#D4AF37] transition-colors duration-300">CREATIVE DIRECTION</span>
              <span>•</span>
              <span className="hover:text-[#F4F1EB] transition-colors duration-300">INTERACTIVE WEB DESIGN</span>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="hover:text-[#D4AF37] transition-colors duration-300">MOTION DESIGN</span>
              <span className="font-mono text-xs text-[#B5ADA4] tracking-widest font-normal">[ 03 ]</span>
              <span className="text-[#B5ADA4] hover:text-[#D4AF37] transition-colors duration-300">EDITORIAL DESIGN</span>
            </div>
          </div>

          <div className="pt-8 border-t border-[#F4F1EB]/10 font-sans text-xs md:text-sm text-[#B5ADA4] max-w-xl">
            Every capability is executed with deep strategic intent—unifying visual aesthetics, layout rhythm, and brand narrative.
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
