"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import Section from "@/components/Section";

export default function AboutSection() {
    const industries = [
        { title: "LUXURY & HOROLOGY", desc: "Stealth luxury visual mood, precision emblem design, and high-contrast horology storytelling." },
        { title: "FASHION & APPAREL", desc: "E-commerce product perception, drop campaign identity, and streetwear brand elevation." },
        { title: "CULTURE & HERITAGE", desc: "Fusion of traditional Urdu calligraphy, Mughal architecture, and modern editorial grids." },
        { title: "AUTOMOTIVE & RETAIL", desc: "Scalable B2B dealership communication systems and multi-vehicle marketing frameworks." },
    ];

    const processSteps = [
        { num: "01", phase: "DISCOVER", detail: "Understanding the business, the audience, and the story before any visuals happen." },
        { num: "02", phase: "DIRECTION", detail: "Picking the colors, fonts, and layout rules that define the brand's look." },
        { num: "03", phase: "DESIGN", detail: "Creating logos, templates, and page layouts with close attention to detail." },
        { num: "04", phase: "REFINE", detail: "Checking every file carefully and making sure it works well on every screen size." },
        { num: "05", phase: "DELIVER", detail: "Handing over finished files and clear guidelines so the client's team can use them easily." },
    ];

    return (
        <section id="about" className="scroll-mt-24">
            <div className="w-full bg-gold py-2 mt-6 mb-20">
                <div className="max-w-6xl mx-auto px-6">
                    <p className="font-archivo font-black text-lg md:text-xl text-black tracking-widest uppercase">
                        About / Experience
                    </p>
                </div>
            </div>

            {/* 1. INTRO */}
            <section className="pt-24 pb-20 border-b border-[#F4F3EF]/10 relative">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-8 space-y-6"
                        >
                            <span className="font-mono text-xs text-[#D4AF37] uppercase tracking-[0.25em] block">
                                [ ABOUT // ISA ALVI ]
                            </span>

                            <div className="flex flex-col md:flex-row items-start gap-8">
                                <img
                                    src="/profile.jpg"
                                    alt="Isa Alvi"
                                    className="w-40 h-40 md:w-56 md:h-56 rounded-lg object-cover border border-[#F4F1EB]/20 shrink-0"
                                />
                                <p className="font-sans text-xl md:text-2xl text-[#F4F1EB] font-light leading-relaxed max-w-2xl">
                                    I&apos;m a Creative Director and Graphic Designer, and a student at FAST University Multan. I lead brand systems that sharpen how businesses look and communicate, built on real experience as Head Graphic Designer at Fast Media Mavericks.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#F4F3EF]/10 pt-8 lg:pt-0 lg:pl-10 space-y-6 font-mono text-xs text-[#8E8E93]"
                        >
                            <div>
                                <span className="text-[#D4AF37] block mb-1">POSITIONING</span>
                                <span className="text-[#F4F3EF] font-bold text-sm">Creative Direction &amp; Brand Systems</span>
                            </div>
                            <div>
                                <span className="text-[#D4AF37] block mb-1">LEADERSHIP RECORD</span>
                                <span className="text-[#F4F3EF] font-bold text-sm">Head Graphic Designer @ FMM</span>
                            </div>
                            <div>
                                <span className="text-[#D4AF37] block mb-1">LOCATION</span>
                                <span className="text-[#F4F3EF] font-bold text-sm">Multan, Pakistan / Global Remote</span>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* 2. DESIGN PHILOSOPHY */}
            <Section className="py-24 border-b border-[#F4F3EF]/10">
                <Container>
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="space-y-2">
                            <span className="font-mono text-xs text-[#D4AF37] uppercase tracking-[0.25em] block">
                                01 // CORE DESIGN PHILOSOPHY
                            </span>
                            <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#F4F3EF]">
                                Narrative Before Visuals. Systems Over Posters.
                            </h2>
                        </div>

                        <ul className="space-y-3 font-sans text-sm md:text-base text-[#CFC7AA] leading-relaxed list-disc list-inside">
                            <li>Every project starts with the business problem, not the visuals.</li>
                            <li>I build reusable systems, not one-off designs, so a brand stays consistent everywhere.</li>
                        </ul>
                    </div>
                </Container>
            </Section>

            {/* 3. CREATIVE LEADERSHIP */}
            <Section className="py-24 border-b border-[#F4F3EF]/10">
                <Container>
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="space-y-2">
                            <span className="font-mono text-xs text-[#D4AF37] uppercase tracking-[0.25em] block">
                                02 // CREATIVE LEADERSHIP RECORD
                            </span>
                            <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#F4F3EF]">
                                Directing Teams &amp; Protecting Vision
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 font-sans text-sm md:text-base text-[#CFC7AA] leading-relaxed">
                            <p>
                                As Head Graphic Designer at Fast Media Mavericks, I led photographers, video editors, and junior designers. I set clear standards for shoots and reels, and checked every asset before it shipped — often within a day.
                            </p>
                            <p>
                                When people wanted to cram extra logos onto an event flyer, I pushed back to protect the brand&apos;s look. Sometimes good leadership just means saying no to keep things consistent.
                            </p>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* 4. INDUSTRIES */}
            <Section className="py-24 border-b border-[#F4F3EF]/10">
                <Container>
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="space-y-2">
                            <span className="font-mono text-xs text-[#D4AF37] uppercase tracking-[0.25em] block">
                                03 // SECTOR SPECIFICITY
                            </span>
                            <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#F4F3EF]">
                                Industries I Enjoy Shaping
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {industries.map((ind, i) => (
                                <div key={ind.title} className="border border-[#F4F3EF]/10 bg-[#0D0D0E] p-8 space-y-3">
                                    <span className="font-mono text-xs text-[#D4AF37] tracking-widest block">
                                        0{i + 1}
                                    </span>
                                    <h3 className="font-display text-xl font-bold uppercase text-[#F4F3EF]">
                                        {ind.title}
                                    </h3>
                                    <p className="font-sans text-xs text-[#8E8E93] leading-relaxed">
                                        {ind.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>

            {/* 5. METHODOLOGY */}
            <Section className="py-24 border-b border-[#F4F3EF]/10">
                <Container>
                    <div className="max-w-5xl mx-auto space-y-16">
                        <div className="space-y-2">
                            <span className="font-mono text-xs text-[#D4AF37] uppercase tracking-[0.25em] block">
                                04 // THE METHODOLOGY I FOLLOW
                            </span>
                            <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#F4F3EF]">
                                The 5-Stage System Pipeline
                            </h2>
                        </div>

                        <div className="border border-[#F4F3EF]/10 bg-[#121214] p-8 md:p-12 space-y-8">
                            <div className="hidden lg:flex justify-between items-center font-mono text-xs text-[#D4AF37] border-b border-[#F4F3EF]/10 pb-4">
                                <span>STAGE 01: DISCOVER</span>
                                <span>→</span>
                                <span>STAGE 02: DIRECTION</span>
                                <span>→</span>
                                <span>STAGE 03: DESIGN</span>
                                <span>→</span>
                                <span>STAGE 04: REFINE</span>
                                <span>→</span>
                                <span>STAGE 05: DELIVER</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 font-mono text-xs">
                                {processSteps.map((step) => (
                                    <div key={step.num} className="space-y-3 border-l md:border-l-0 md:border-t border-[#D4AF37]/30 pl-4 md:pl-0 md:pt-4">
                                        <span className="text-[#D4AF37] font-bold block">{step.num} — {step.phase}</span>
                                        <p className="font-sans text-xs text-[#8E8E93] leading-relaxed">{step.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* 6. ENGAGEMENT OPPORTUNITIES */}
            <Section className="py-24">
                <Container>
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="space-y-2">
                            <span className="font-mono text-xs text-[#D4AF37] uppercase tracking-[0.25em] block">
                                05 // ENGAGEMENT OPPORTUNITIES
                            </span>
                            <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#F4F3EF]">
                                What I Am Looking For
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-xs text-[#F4F3EF]">
                            <div className="border border-[#F4F3EF]/10 bg-[#0D0D0E] p-6 space-y-2">
                                <span className="text-[#D4AF37] font-bold block">[ 01 ] CREATIVE DIRECTION</span>
                                <p className="text-[#8E8E93] font-sans text-xs">Leading brand identity campaigns, directing design teams, and managing visual output.</p>
                            </div>
                            <div className="border border-[#F4F3EF]/10 bg-[#0D0D0E] p-6 space-y-2">
                                <span className="text-[#D4AF37] font-bold block">[ 02 ] BRAND IDENTITY SYSTEMS</span>
                                <p className="text-[#8E8E93] font-sans text-xs">Architecting complete identity guidelines, vector emblems, typography, and color specs.</p>
                            </div>
                            <div className="border border-[#F4F3EF]/10 bg-[#0D0D0E] p-6 space-y-2">
                                <span className="text-[#D4AF37] font-bold block">[ 03 ] GRAPHIC DESIGN ARCHITECTURE</span>
                                <p className="text-[#8E8E93] font-sans text-xs">Building scalable social templates, print certificates, and event campaign collaterals.</p>
                            </div>
                            <div className="border border-[#F4F3EF]/10 bg-[#0D0D0E] p-6 space-y-2">
                                <span className="text-[#D4AF37] font-bold block">[ 04 ] INTERACTIVE WEB DESIGN</span>
                                <p className="text-[#8E8E93] font-sans text-xs">Designing high-impact editorial digital experiences and portfolio websites.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </section>
    );
}