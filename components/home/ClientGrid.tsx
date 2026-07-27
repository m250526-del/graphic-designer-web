"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";

/**
 * SECTION 5 — Selected Clients
 * Transparent background layer so global halftone image shines through.
 */
export default function ClientGrid() {
  const clients = [
    { name: "Changan Multan Motors", category: "Automotive Retail Franchise" },
    { name: "Fast Media Mavericks", category: "University Media Body" },
    { name: "Frenzy Store & Watch", category: "E-Commerce Luxury & Fashion" },
    { name: "Zeanora Studio", category: "Fine Art Couture Studio" },
    { name: "Nikon Pakistan", category: "Corporate Event Partner" },
    { name: "Softec Festival", category: "National Tech & Design Event" },
  ];

  return (
    <section className="relative py-28 md:py-36 border-b border-[#F4F1EB]/10 text-[#F4F1EB] bg-transparent overflow-hidden">
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-16"
        >
          <div className="flex justify-between items-center border-b border-[#F4F1EB]/10 pb-4 font-mono text-xs text-[#D4AF37]">
            <span>[ SELECTED CLIENTS &amp; PARTNERS ]</span>
            <span>COMMISSIONED WORK &amp; COLLABORATIONS</span>
          </div>

          {/* Typography Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 border-t border-[#F4F1EB]/10 pt-12">
            {clients.map((c, i) => (
              <div
                key={c.name}
                className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#F4F1EB]/10 pb-6 gap-2 group"
              >
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-[#D4AF37] tracking-widest block">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#F4F1EB] group-hover:text-[#D4AF37] transition-colors duration-200">
                    {c.name}
                  </h3>
                </div>
                <span className="font-mono text-xs text-[#F4F1EB]/80 uppercase tracking-wider">
                  {c.category}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
