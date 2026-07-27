"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";

/**
 * SECTION 6 — Closing
 * Transparent background layer so global halftone image shines through.
 */
export default function ClosingSection() {
  return (
    <section className="relative min-h-screen text-[#F4F1EB] flex flex-col justify-between py-24 overflow-hidden bg-transparent">
      <Container className="my-auto text-center max-w-5xl mx-auto space-y-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          <span className="font-mono text-xs text-[#D4AF37] uppercase tracking-[0.3em] block">
            [ DESIGNING EXCELLENCE ]
          </span>

          <h2 className="font-display text-5xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter text-[#F4F1EB] leading-none">
            AVAILABLE FOR SELECTED PROJECTS.
          </h2>

          <div className="space-y-6 pt-8">
            <div>
              <a
                href="mailto:alvii3391@gmail.com"
                className="font-mono text-xl sm:text-3xl font-bold text-[#D4AF37] hover:text-[#F4F1EB] transition-colors duration-200 underline underline-offset-8"
              >
                alvii3391@gmail.com
              </a>
            </div>

          </div>
        </motion.div>
      </Container>

      <footer className="border-t border-[#F4F1EB]/10 py-8 font-mono text-xs text-[#F4F1EB]/80 relative z-10">
        <Container className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>© {new Date().getFullYear()} ISA ALVI — EDITORIAL ARCHIVE</span>
          <span>CREATIVE DIRECTION &amp; BRAND IDENTITY</span>
        </Container>
      </footer>
    </section>
  );
}
