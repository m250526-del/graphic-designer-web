"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Container from "./Container";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle, Mail } from "lucide-react";

/**
 * Editorial navigation header with semi-transparent backdrop blur.
 */
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const workItems = [
    { label: "Changan Multan Motors", href: "/#changan-motors" },
    { label: "Fast Media Mavericks", href: "/#fast-media-mavericks" },
    { label: "Frenzy Store & Watch", href: "/#frenzy" },
    { label: "Zeanora Studio", href: "/#zeanora" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[#F4F1EB]/10 bg-black/40 backdrop-blur-md ${scrolled ? "py-3 shadow-md" : "py-4"
          }`}
      >
        <Container className="relative z-10">
          <div className="flex items-center justify-between">
            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 font-mono text-xs text-[#F4F1EB]/80 uppercase tracking-wider">
              <Link href="/" className="hover:text-[#F4F1EB] transition-colors duration-200">
                HOME
              </Link>
              <div
                className="relative"
                onMouseEnter={() => setWorkOpen(true)}
                onMouseLeave={() => setWorkOpen(false)}
              >
                <button
                  type="button"
                  className="hover:text-[#F4F1EB] transition-colors duration-200"
                  aria-expanded={workOpen}
                  aria-haspopup="true"
                >
                  WORK
                </button>

                {workOpen && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-black/90 border border-[#F4F1EB]/10 backdrop-blur-md py-2 min-w-[220px]">
                      {workItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 hover:text-[#F4F1EB] transition-colors duration-200 normal-case tracking-normal"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link href="/#skills" className="hover:text-[#F4F1EB] transition-colors duration-200">
                SKILLS
              </Link>

              <Link
                href="/#about"
                className="hover:text-[#F4F1EB] transition-colors duration-200"
              >
                ABOUT / EXPERIENCE
              </Link>
            </nav>

            {/* Right Status Badge & Contact Action */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2 px-3 py-1 bg-[#F4F1EB]/10 border border-[#F4F1EB]/15 rounded-full font-mono text-[10px] uppercase text-[#F4F1EB]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                <span>Available for Remote &amp; On-Site Work</span>
              </div>

              <div className="flex items-center gap-4">
                <Link href="/#about" aria-label="About Isa Alvi">
                  <img
                    src="/profile.jpg"
                    alt="Isa Alvi"
                    className="w-9 h-9 rounded-full object-cover border border-[#F4F1EB]/20 hover:border-[#D4AF37] transition-colors duration-200 cursor-pointer"
                  />
                </Link>

                <a
                  href="https://wa.me/923104403966"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-[#F4F1EB]/20 text-[#D4AF37] hover:text-[#F4F1EB] hover:border-[#F4F1EB]/40 transition-colors duration-200 cursor-pointer"
                >
                  <MessageCircle size={18} />
                </a>
                <a
                  href="mailto:alvii3391@gmail.com"
                  aria-label="Email"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-[#F4F1EB]/20 text-[#D4AF37] hover:text-[#F4F1EB] hover:border-[#F4F1EB]/40 transition-colors duration-200 cursor-pointer"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex md:hidden items-center gap-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#F4F1EB] focus:outline-none p-1"
                aria-label="Toggle navigation drawer"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl flex flex-col justify-center items-center p-8 border-b border-[#F4F1EB]/10 md:hidden"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-[#F4F1EB] p-2 focus:outline-none z-10"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>

            <nav className="flex flex-col items-center gap-8 mb-12 font-display text-2xl font-bold uppercase tracking-widest text-[#F4F1EB]/80 relative z-10">
              <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-[#F4F1EB] transition-colors duration-200">
                HOME
              </Link>

              <div className="flex flex-col items-center gap-4">
                <span>WORK</span>
                <div className="flex flex-col items-center gap-3 font-mono text-sm font-normal normal-case tracking-normal">
                  {workItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="hover:text-[#F4F1EB] transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/#skills"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#F4F1EB] transition-colors duration-200"
              >
                SKILLS
              </Link>

              <Link
                href="/#about"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#F4F1EB] transition-colors duration-200"
              >
                ABOUT / EXPERIENCE
              </Link>
            </nav>

            <div className="relative z-10 flex items-center justify-center gap-6">
              <a
                href="https://wa.me/923104403966"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                aria-label="WhatsApp"
                className="w-12 h-12 flex items-center justify-center rounded-full border border-[#F4F1EB]/20 text-[#D4AF37] hover:text-[#F4F1EB] hover:border-[#F4F1EB]/40 transition-colors duration-200 cursor-pointer"
              >
                <MessageCircle size={22} />
              </a>
              <a
                href="mailto:alvii3391@gmail.com"
                onClick={() => setIsOpen(false)}
                aria-label="Email"
                className="w-12 h-12 flex items-center justify-center rounded-full border border-[#F4F1EB]/20 text-[#D4AF37] hover:text-[#F4F1EB] hover:border-[#F4F1EB]/40 transition-colors duration-200 cursor-pointer"
              >
                <Mail size={22} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
