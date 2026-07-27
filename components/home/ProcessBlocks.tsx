"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/Container";

/**
 * SECTION 4 — Process (4 Horizontal Editorial Blocks)
 * Transparent background layer so global halftone image shines through.
 */
export default function ProcessBlocks() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      text: "Deconstructing business objectives, target audience emotion, and brand narrative before drafting visuals.",
      image: "/portfolio-assets/car_dealership_potfolio_(example work)/car_dealershhip_instagram_post_templates/alsvin-temp(pic).png",
    },
    {
      num: "02",
      title: "Direction",
      text: "Architecting visual mood, grid rules, typography pairings, and color tokens that define the brand voice.",
      image: "/portfolio-assets/frenzy-store(client work)/posts/frenzy.watch-logo.png",
    },
    {
      num: "03",
      title: "Design",
      text: "Engineering modular layouts, hand-crafted vector marks, and kinetic motion trailers with precision.",
      image: "/portfolio-assets/zeanora_studio_brand-(client work)/logo..png",
    },
    {
      num: "04",
      title: "Deliver",
      text: "Packaging scalable template systems, asset guidelines, and production-ready deliverables for team execution.",
      image: "/portfolio-assets/fast_media_mavericks--branding & identity(client work)/fmm-events/fmm-event-certificate.png",
    },
  ];

  return (
    <section className="py-28 md:py-36 border-b border-[#F4F1EB]/10 bg-transparent text-[#F4F1EB]">
      <Container className="relative z-10">
        <div className="space-y-16">
          <div className="flex justify-between items-center border-b border-[#F4F1EB]/10 pb-4 font-mono text-xs text-[#D4AF37]">
            <span>[ WORKFLOW METHODOLOGY ]</span>
            <span>SYSTEMATIC EXECUTION</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative border border-[#F4F1EB]/20 bg-black/40 backdrop-blur-md p-8 flex flex-col justify-between space-y-8 overflow-hidden"
              >
                {/* Top Number & Title */}
                <div className="relative z-10 space-y-4">
                  <span className="font-mono text-4xl sm:text-5xl md:text-6xl font-black text-[#D4AF37] block">
                    {step.num}
                  </span>

                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-[#F4F1EB]">
                    {step.title}
                  </h3>

                  <p className="font-sans text-xs text-[#F4F1EB]/80 leading-relaxed">
                    {step.text}
                  </p>
                </div>

                {/* Supporting Portfolio Artwork */}
                <div className="relative z-10 aspect-[4/3] w-full bg-black/40 border border-[#F4F1EB]/10 overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    loading="lazy"
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
