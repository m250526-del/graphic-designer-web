"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";

/**
 * SECTION 1 — Editorial Cover (Hero)
 * Transparent background layer so global halftone image shines through.
 */
export default function EditorialCover() {
  return (
    <section className="min-h-screen flex flex-col justify-between pt-32 pb-16 border-b border-[#F4F1EB]/10 bg-transparent text-[#F4F1EB]">
      <Container className="w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* LEFT 65% (8 COLUMNS): NAME, TITLE, MANIFESTO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 space-y-8"
          >
            <div className="font-mono text-xs text-[#D4AF37] uppercase tracking-[0.25em]">
              [ EDITORIAL PORTFOLIO // 2026 EDITION ]
            </div>

            <h1 className="font-display text-7xl sm:text-9xl md:text-[11vw] font-black tracking-tighter uppercase leading-[0.85] text-[#F4F1EB]">
              ISA ALVI
            </h1>

            <div className="font-mono text-sm md:text-base text-[#D4AF37] uppercase tracking-wider font-semibold">
              Creative Director and Graphic Designer
            </div>

            <div className="relative inline-block isolate -ml-[9px]">
              <span
                aria-hidden="true"
                className="absolute inset-y-0 -left-4 bg-gold"
                style={{
                  right: '-10px',
                  clipPath: 'polygon(0% 0%, calc(100% - 24px) 0%, 100% 100%, 0% 100%)',
                }}
              />
              <p className="relative z-10 !text-black font-mono font-normal text-base leading-snug tracking-tight px-4 py-2 max-w-xl">
                I build brand identities rooted in strategy, story, and restraint — the design only starts once the thinking is done.
              </p>
            </div>
          </motion.div>

          {/* RIGHT 35% (4 COLUMNS): EDITORIAL METADATA COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#F4F1EB]/10 pt-8 lg:pt-0 lg:pl-12 space-y-8 font-mono text-xs text-[#B5ADA4]"
          >
            <div className="space-y-1">
              <span className="text-[#D4AF37] uppercase block text-[10px] tracking-widest">CURRENT STATUS</span>
              <p className="text-[#F4F1EB] font-medium text-sm">Available for Remote &amp; On-Site Work</p>
            </div>

            <div className="space-y-1">
              <span className="text-[#D4AF37] uppercase block text-[10px] tracking-widest">BASED IN</span>
              <p className="text-[#F4F1EB] font-medium text-sm">Multan, Pakistan</p>
            </div>

            <div className="space-y-1">
              <span className="text-[#D4AF37] uppercase block text-[10px] tracking-widest">AVAILABLE FOR</span>
              <p className="text-[#F4F1EB] font-medium text-sm">Graphic Design</p>
              <p className="text-[#F4F1EB] font-medium text-sm">Brand Identity</p>
              <p className="text-[#F4F1EB] font-medium text-sm">Social Media Campaign Design</p>
              <p className="text-[#F4F1EB] font-medium text-sm">Creative Leadership</p>
            </div>

            <div className="space-y-1">
              <span className="text-[#D4AF37] uppercase block text-[10px] tracking-widest">DIRECT CONTACT</span>
              <a
                href="mailto:alvii3391@gmail.com"
                className="text-[#F4F1EB] font-medium text-sm hover:text-[#D4AF37] transition-colors duration-200 block underline underline-offset-4"
              >
                alvii3391@gmail.com
              </a>
              <a
                href="https://wa.me/923104403966"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F4F1EB] font-medium text-sm hover:text-[#D4AF37] transition-colors duration-200 block underline underline-offset-4"
              >
                +92 310 4403966
              </a>
            </div>

          </motion.div>

        </div>
      </Container>
    </section>
  );
}
