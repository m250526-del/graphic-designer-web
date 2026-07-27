import type { Metadata } from "next";
import { Archivo, Cinzel, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import GlobalBackground from "@/components/GlobalBackground";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Isa Alvi | Creative Direction & Visual Systems",
  description:
    "Portfolio of Isa Alvi — Creative Direction, Brand Identity, Campaign Systems, Interactive Web Design, Editorial Design, and Visual Storytelling.",
  openGraph: {
    title: "Isa Alvi | Creative Direction & Visual Systems",
    description: "Creative Direction, Brand Identity, Campaign Systems, and Visual Storytelling.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${cinzel.variable} ${geistMono.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-transparent text-[#F4F1EB] font-sans selection:bg-[#D4AF37] selection:text-[#0D0D0E] relative">
        <GlobalBackground />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
