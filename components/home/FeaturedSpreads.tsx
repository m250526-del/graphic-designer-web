"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import Container from "@/components/Container";
import Section from "@/components/Section";

const ROW_HEIGHT = 280;

type Photo = {
  src: string;
  type: "image" | "video";
  width: number;
  height: number;
  caption: string;
  story: string[];
};

type Campaign = {
  slug: string;
  name: string;
  summary: string;
  photos: Photo[];
};

const campaigns: Campaign[] = [
  {
    slug: "changan-motors",
    name: "CHANGAN MULTAN MOTORS",
    summary: "Reusable post and reel templates for a multi-vehicle dealership network",
    photos: [
      { src: "/portfolio-assets/car_dealership_potfolio_(example work)/car_dealershhip_instagram_post_templates/alsvin-temp(pic).png", type: "image", width: 1080, height: 1080, caption: "Alsvin Template", story: ["insert summary text here"] },
      { src: "/portfolio-assets/car_dealership_potfolio_(example work)/car_dealershhip_instagram_post_templates/karvaan-temp(pic).png", type: "image", width: 1080, height: 1080, caption: "Karvaan Template", story: ["insert summary text here"] },
      { src: "/portfolio-assets/car_dealership_potfolio_(example work)/car_dealershhip_instagram_post_templates/X7-temp(pic).png", type: "image", width: 1080, height: 1080, caption: "X7 Template", story: ["insert summary text here"] },
      { src: "/portfolio-assets/car_dealership_potfolio_(example work)/car_dealershhip_instagram_reel_templates/alsvin reel template.png", type: "image", width: 1080, height: 1920, caption: "Alsvin Reel Template", story: ["insert summary text here"] },
    ],
  },
  {
    slug: "fast-media-mavericks",
    name: "FAST MEDIA MAVERICKS",
    summary: "One visual identity system across events, print, and sponsor campaigns",
    photos: [
      { src: "/portfolio-assets/fast_media_mavericks--branding & identity(client work)/fmm-events/bayanxfmm.png", type: "image", width: 4559, height: 1520, caption: "Bayan x FMM", story: ["insert summary text here"] },
      { src: "/portfolio-assets/fast_media_mavericks--branding & identity(client work)/fmm-events/fmm-event-certificate.png", type: "image", width: 2000, height: 1414, caption: "FMM Event Certificate", story: ["insert summary text here"] },
      { src: "/portfolio-assets/fast_media_mavericks--branding & identity(client work)/fmm-events/fmm-exe.png", type: "image", width: 3456, height: 4199, caption: "FMM Executive", story: ["insert summary text here"] },
      { src: "/portfolio-assets/fast_media_mavericks--branding & identity(client work)/fmm-events/fmmxnikon.png", type: "image", width: 1080, height: 1350, caption: "FMM x Nikon", story: ["insert summary text here"] },
      { src: "/portfolio-assets/fast_media_mavericks--branding & identity(client work)/fmm-events/fmmxwelcomeparty.png", type: "image", width: 2000, height: 1600, caption: "FMM x Welcome Party", story: ["insert summary text here"] },
      { src: "/portfolio-assets/fast_media_mavericks--branding & identity(client work)/fmm-events/softecxfmm.png", type: "image", width: 3100, height: 1350, caption: "Softec x FMM", story: ["insert summary text here"] },
      { src: "/portfolio-assets/fast_media_mavericks--branding & identity(client work)/logo-branding/fmm-facebpook-banner.png", type: "image", width: 851, height: 315, caption: "FMM Facebook Banner", story: ["insert summary text here"] },
      { src: "/portfolio-assets/fast_media_mavericks--branding & identity(client work)/logo-branding/fmm-logo-monotone.png", type: "image", width: 500, height: 500, caption: "FMM Logo (Monotone)", story: ["insert summary text here"] },
      { src: "/portfolio-assets/fast_media_mavericks--branding & identity(client work)/logo-branding/fmm-logo.png", type: "image", width: 500, height: 500, caption: "FMM Logo", story: ["insert summary text here"] },
    ],
  },
  {
    slug: "frenzy",
    name: "FRENZY STORE & WATCH",
    summary: "Dark-mode brand mood to sell watches as luxury, not streetwear",
    photos: [
      { src: "/portfolio-assets/frenzy-store(client work)/posts/frenzy.shop-socialmedia-post1.png", type: "image", width: 1080, height: 1080, caption: "Frenzy Shop Post 1", story: ["insert summary text here"] },
      { src: "/portfolio-assets/frenzy-store(client work)/posts/frenzy.shop-socialmedia-post2.png", type: "image", width: 1080, height: 1080, caption: "Frenzy Shop Post 2", story: ["insert summary text here"] },
      { src: "/portfolio-assets/frenzy-store(client work)/posts/frenzy.shop-socialmedia-post3.png", type: "image", width: 1080, height: 1080, caption: "Frenzy Shop Post 3", story: ["insert summary text here"] },
      { src: "/portfolio-assets/frenzy-store(client work)/posts/frenzy.shop-socialmedia-post4.png", type: "image", width: 1080, height: 1350, caption: "Frenzy Shop Post 4", story: ["insert summary text here"] },
      { src: "/portfolio-assets/frenzy-store(client work)/posts/frenzy.watch-logo.png", type: "image", width: 1024, height: 1536, caption: "Frenzy Watch Logo", story: ["insert summary text here"] },
      { src: "/portfolio-assets/frenzy-store(client work)/reels/frenzy.shop-animated-reel.mp4", type: "video", width: 1080, height: 1920, caption: "Frenzy Shop Reel", story: ["insert summary text here"] },
    ],
  },
  {
    slug: "zeanora",
    name: "ZEANORA STUDIO",
    summary: "Hand-traced Mughal arch crest with luxury Didone typography",
    photos: [
      { src: "/portfolio-assets/zeanora_studio_brand-(client work)/logo..png", type: "image", width: 500, height: 500, caption: "Zeanora Logo", story: ["insert summary text here"] },
    ],
  },
];

function PhotoCard({ photo, onExpand }: { photo: Photo; onExpand: (photo: Photo) => void }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative flex flex-col mx-6"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div
        style={{ height: ROW_HEIGHT, aspectRatio: `${photo.width} / ${photo.height}` }}
        className="cursor-pointer"
        onClick={() => onExpand(photo)}
      >
        {photo.type === "video" ? (
          <video src={photo.src} autoPlay loop muted playsInline className="w-full h-full object-cover" />
        ) : (
          <img src={photo.src} alt={photo.caption} className="w-full h-full object-cover" />
        )}
      </div>

      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full bg-[#14171A] text-alabaster py-3 flex flex-col items-center gap-1"
      >
        <span className="font-mono text-xs text-center px-2">{photo.caption}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} className="text-gold">
          <ChevronDown size={14} />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-[#14171A] text-alabaster absolute top-full left-0 w-full z-20"
          >
            <div className="px-4 py-3 space-y-1 font-mono text-xs">
              {photo.story.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CampaignBlock({ campaign, onExpand }: { campaign: Campaign; onExpand: (photo: Photo) => void }) {
  return (
    <div id={campaign.slug} className="scroll-mt-24 mb-40">
      <div className="mb-6 text-left">
        <h3 className="font-archivo font-black uppercase tracking-tight text-3xl md:text-4xl text-alabaster">
          {campaign.name}
        </h3>
        <div className="relative inline-block isolate mt-3">
          <span
            aria-hidden="true"
            className="absolute inset-y-0 -left-2 bg-gold"
            style={{
              right: "-8px",
              clipPath: "polygon(0% 0%, calc(100% - 16px) 0%, 100% 100%, 0% 100%)",
            }}
          />
          <p className="relative z-10 !text-black font-mono text-sm px-3 py-1">
            {campaign.summary}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-y-12">
        {campaign.photos.map((photo, i) => (
          <PhotoCard key={i} photo={photo} onExpand={onExpand} />
        ))}
      </div>
    </div>
  );
}

export default function FeaturedSpreads() {
  const [lightboxPhoto, setLightboxPhoto] = useState<Photo | null>(null);

  return (
    <section id="work">
      <div className="w-full bg-gold py-2 mt-6 mb-20">
        <Container>
          <p className="font-archivo font-black text-lg md:text-xl text-black tracking-widest uppercase">
            Selected Work
          </p>
        </Container>
      </div>
      <Container>
        <Section>
          {campaigns.map((c) => (
            <CampaignBlock key={c.slug} campaign={c} onExpand={setLightboxPhoto} />
          ))}
        </Section>
      </Container>

      <AnimatePresence>
        {lightboxPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
            onClick={() => setLightboxPhoto(null)}
          >
            {lightboxPhoto.type === "video" ? (
              <video
                src={lightboxPhoto.src}
                autoPlay
                loop
                muted
                playsInline
                controls
                className="max-w-[90vw] max-h-[90vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <img
                src={lightboxPhoto.src}
                alt={lightboxPhoto.caption}
                className="max-w-[90vw] max-h-[90vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            )}
            <button
              onClick={() => setLightboxPhoto(null)}
              className="absolute top-6 right-6 text-alabaster"
              aria-label="Close"
            >
              <X size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
