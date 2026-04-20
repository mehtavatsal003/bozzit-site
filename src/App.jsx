import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import delnetFlyerSrc from "./delnet-flyer.pdf";
import explainerSpheresSrc from "./explainer_spheres.mp4";
import logoPng from "./logo.png";
import brokerCardPoster from "./Screenshot 2026-04-20 001229.png";
import flyerCardPoster from "./Screenshot 2026-04-20 001148.png";
import weddingCardPoster from "./Screenshot 2026-04-20 001308.png";
import {
  ArrowRight,
  BarChart3,
  ChevronRight,
  Menu,
  MousePointer2,
  Play,
  Sparkles,
  X,
  Zap,
  MoveRight,
  Expand,
} from "lucide-react";

void motion;

const services = [
  {
    title: "Performance Marketing",
    subtitle: "Campaigns engineered for measurable growth",
    desc: "Meta and paid growth systems focused on better leads, lower acquisition cost, and stronger conversion intent.",
    points: ["Meta Ads", "Creative testing", "Retargeting"],
  },
  {
    title: "Creative Strategy",
    subtitle: "Concepts that make brands impossible to ignore",
    desc: "We shape hooks, offers, narratives, and messaging frameworks that turn attention into action.",
    points: ["Ad angles", "Offer positioning", "Launch concepts"],
  },
  {
    title: "Video Editing",
    subtitle: "Premium edits made for retention and response",
    desc: "Reels, short-form ads, motion assets, and fast-cut branded content built to stop the scroll and drive clicks.",
    points: ["Short-form ads", "UGC editing", "Motion graphics"],
  },
  {
    title: "Brand Systems",
    subtitle: "Minimal identity, modern presence, stronger trust",
    desc: "A sharper visual and content language so every touchpoint looks premium, consistent, and conversion-ready.",
    points: ["Visual direction", "Content design", "Website polish"],
  },
];

const brokerReelEmbedSrc = "https://drive.google.com/file/d/1O60WJhpapq95CeG7PsnvWKnf-PAwbHwC/preview";
const weddingVideoEmbedSrc = "https://drive.google.com/file/d/17o-96h1iIcCzRzbnkRakJnQWxMs_JZMk/preview";

const reels = [
  {
    title: "DELNET workshop flyer design",
    type: "Flyer Design",
    category: "Print + Promotional",
    src: delnetFlyerSrc,
    previewType: "document",
    previewImageSrc: flyerCardPoster,
  },
  {
    title: "Independent broker promo reel",
    type: "Broker Reel",
    category: "Real Estate / Broker",
    src: brokerReelEmbedSrc,
    previewType: "embed",
    previewImageSrc: brokerCardPoster,
  },
  {
    title: "Kalamkari animated wedding invitation",
    type: "Animated Invite",
    category: "Event Management",
    src: weddingVideoEmbedSrc,
    previewType: "embed",
    previewImageSrc: weddingCardPoster,
  },
];

const caseStudies = [
  {
    client: "DELNET",
    result: "Professional event flyer system",
    summary: "Designed a clean workshop flyer for DELNET and Central Library, IIT Delhi, for the event 'Research Smarter with Elicit - an AI Tool.' The flyer presents the speaker, venue, registration link, and event details in a formal, readable, institution-ready layout.",
    detailLabel: "Layout focus",
    detailValue: "Speaker, venue, registration",
    supportLabel: "Design intent",
    supportValue: "Formal institution-ready flyer",
  },
  {
    client: "Independent Broker",
    result: "Short-form reel for lead attraction",
    summary: "Produced a promotional reel tailored for an independent broker with a premium, scroll-stopping edit style aimed at improving attention and generating inquiry-driven engagement.",
    detailLabel: "Hook system",
    detailValue: "Sharper first 3 seconds",
    supportLabel: "Offer framing",
    supportValue: "High-intent messaging",
  },
  {
    client: "Kalamkari",
    result: "Animated wedding invitation experience",
    summary: "Created an elegant animated wedding invitation for Kalamkari, an event management company, blending visual storytelling and premium motion design for a memorable event reveal.",
    detailLabel: "Reveal style",
    detailValue: "Elegant motion-led storytelling",
    supportLabel: "Experience goal",
    supportValue: "Memorable event presentation",
  },
];

const metrics = [
  { value: "3+", label: "Live showcase pieces", note: "Flyer, reel, and animated invitation" },
  { value: "∞", label: "Testing mindset", note: "Every asset is built to learn faster" },
  { value: "24/7", label: "Brand presence", note: "Creative built for every surface" },
];

const logoSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABDgAAAU0CAYAAABsYxJQAAAACXBIWXMAAAsSAAALEgHS3X78AAAgAElEQVR4nO3dS47jSgBFQfP//7l7m0KUVAKl2Vq5I4CJNgS2i3fXWmQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4H+2n9cPAAAAgPlr5QMAAAB4lJUPAAAAgPlr5QMAAAB4lJUPAAAAgPlr5QMAAAB4lJUPAAAAgPlr5QMAAAB4lJUPAAAAgPlr5QMAAAB4lJUPAAAAgPlr5QMAAAB4lJUPAAAAgPlr5QMAAAB4lJUPAAAAgPlr5QMAAAB4lJUPAAAAgPlr5QMAAAB4lJUPAAAAgPlr5QMAAAB4lJUPAAAAgPlr5QMAAAB4lJUPAAAAgPlr5QMAAAB4lJUPAAAAgPlr5QMAAAB4lJUPAAAAgPlr5QMAAAB4lJUPAAAAgPlr5QMAAAB4lJUPAAAAgPlr5QMAAAB4lJUPAAAAgPlr5QMAAAB4lJUPAAAAgPlr5QMAAAB4lJUPAAAAgPlr5QMAAAB4lJUPAAAAgPlr5QMAAAB4lJUPAAAAgPlr5QMAAAB4lJUPAAAAgPlr5QMAAAB4lJUPAAAAgPlr5QMAAAB4lJUPAAAAgPlr5QMAAAB4lJUPAAAAgPlr5QMAAAB4lJUPAAAAgPlr5QMAAAB4lJUPAAAAgPlr5QMAAAB4lJUPAAAAgPm7fR4AAGBq1v8f7iVw2h2nH6gGJ7Q3s7xv2f+fVn0s6h9V0+7j2K6v3w7Vv3z5+3fH4m9h8r8lH8r2Xn7c8mN9v7Zx8fP5w9s9n7h8v7b9c9z3v5m8x0Zr7mD7P8+Xn3f5s5qfK8mWJf6l8Y3j6m7b9n8r2L5Xn8n5f3n9V7o9mM6r6Yqv4Qm6H9m9mH2j+f+5n4r5m9l7U9v7i8c9t7p8x8T7h7u8n8P8+f0u9c9/3u9m+W9n+o8p7d8e9q8q7e8f9p8r7f8g9q8s7g8h9r8t7h8i9s8u7i8j9t8v7j8k9u8w7k8l9v8x7l8m9w8y7m8n9x8z7n8o9y80AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPxv/wG0n7P0q1j1JwAAAABJRU5ErkJggg==";
function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const onOver = (e) => {
      const target = e.target.closest("a, button, .cursor-hover");
      setHovered(!!target);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-4 w-4 rounded-full bg-black lg:block"
        animate={{ x: pos.x - 8, y: pos.y - 8, scale: hovered ? 0.7 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 35, mass: 0.2 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[99] hidden rounded-full border border-black/25 bg-black/[0.03] backdrop-blur-sm lg:block"
        animate={{
          x: pos.x - (hovered ? 32 : 22),
          y: pos.y - (hovered ? 32 : 22),
          width: hovered ? 64 : 44,
          height: hovered ? 64 : 44,
        }}
        transition={{ type: "spring", stiffness: 220, damping: 24, mass: 0.6 }}
      />
    </>
  );
}

function NoiseOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-multiply"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 20%, rgba(0,0,0,0.55) 0.8px, transparent 0.9px), radial-gradient(circle at 80% 40%, rgba(0,0,0,0.4) 0.8px, transparent 0.9px), radial-gradient(circle at 40% 80%, rgba(0,0,0,0.35) 0.8px, transparent 0.9px)",
        backgroundSize: "22px 22px, 28px 28px, 32px 32px",
      }}
    />
  );
}

function LogoMark() {
  return (
    <div className="relative flex items-center gap-3 cursor-hover">
      <img src={logoPng || logoSrc} alt="Bozzit Studio" className="h-16 w-auto object-contain md:h-20" />
    </div>
  );
}

function NavLink({ href, children }) {
  return (
    <a href={href} className="group relative cursor-hover text-sm text-black/60 transition hover:text-black">
      {children}
      <span className="absolute -bottom-1 left-0 h-px w-0 bg-black/70 transition-all duration-300 group-hover:w-full" />
    </a>
  );
}

function MagneticButton({ children, href = "#contact", secondary = false }) {
  return (
    <a
      href={href}
      className={`group cursor-hover inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 ${
        secondary
          ? "border border-black/10 bg-white text-black hover:bg-black/[0.03]"
          : "bg-black text-white hover:scale-[1.02] hover:shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
      }`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}

function FloatingOrbs() {
  return (
    <>
      <motion.div
        animate={{ y: [0, -18, 0], x: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute left-[10%] top-24 h-52 w-52 rounded-full bg-[#d9d9d9] blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 22, 0], x: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute right-[8%] top-40 h-72 w-72 rounded-full bg-[#e7e7e7] blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -12, 0], x: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#efefef] blur-3xl"
      />
    </>
  );
}

function ServiceCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      className="group cursor-hover relative overflow-hidden rounded-[28px] border border-black/10 bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.04),transparent_28%)] opacity-70" />
      <div className="relative">
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <div className="mb-2 text-xs uppercase tracking-[0.28em] text-black/40">0{index + 1}</div>
            <h3 className="text-2xl font-semibold text-black">{item.title}</h3>
            <p className="mt-2 text-sm text-black/60">{item.subtitle}</p>
          </div>
          <div className="rounded-2xl border border-black/10 bg-black/[0.03] p-3 text-black/80 transition duration-300 group-hover:rotate-6 group-hover:scale-105">
            <Sparkles className="h-5 w-5" />
          </div>
        </div>
        <p className="max-w-sm text-sm leading-6 text-black/70">{item.desc}</p>
        <div className="mt-8 flex flex-wrap gap-2">
          {item.points.map((point) => (
            <span key={point} className="rounded-full border border-black/10 bg-[#f5f5f5] px-3 py-1.5 text-xs text-black/70">
              {point}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function SectionHeading({ eyebrow, title, desc }) {
  return (
    <div className="mb-12 max-w-2xl">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5 text-[11px] uppercase tracking-[0.3em] text-black/60 shadow-[0_4px_18px_rgba(0,0,0,0.04)]">
        <span className="h-1.5 w-1.5 rounded-full bg-black" />
        {eyebrow}
      </div>
      <h2 className="text-4xl font-semibold tracking-tight text-black md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-black/65 md:text-lg">{desc}</p>
    </div>
  );
}

function PortfolioPoster({ item }) {
  return (
    <div
      className="relative h-full w-full overflow-hidden bg-[#091c31]"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(4,15,28,0.12), rgba(4,15,28,0.58)), url(${item.previewImageSrc})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_30%)]" />
    </div>
  );
}

function ReelCard({ item, index, onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group cursor-hover relative overflow-hidden rounded-[30px] border border-black/10 bg-white p-3 shadow-[0_14px_40px_rgba(0,0,0,0.06)]"
      onClick={() => onOpen(item)}
    >
      <div className="relative h-[420px] overflow-hidden rounded-[24px] bg-[linear-gradient(180deg,#f7f7f7,#e9e9e9)]">
        <PortfolioPoster item={item} />

        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

        <div className="absolute inset-0 hidden items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100 sm:flex">
          <div className="flex items-center gap-3 rounded-full border border-white/30 bg-white/90 px-4 py-3 text-black shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
            <Play className="h-4 w-4 fill-black text-black" />
            <span className="text-sm font-medium">Preview</span>
          </div>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpen(item);
          }}
          className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/90 text-black shadow-[0_10px_26px_rgba(0,0,0,0.1)] transition hover:scale-105"
          aria-label={`Open ${item.title}`}
        >
          <Expand className="h-4 w-4" />
        </button>

        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="rounded-full bg-black px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white">{item.type}</span>
          <span className="hidden rounded-full border border-black/10 bg-white/80 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-black/60 sm:inline-flex">
            Hover preview
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-5 pb-5 pt-12 text-white">
          <div className="text-[11px] uppercase tracking-[0.28em] text-white/65">{item.category}</div>
          <div className="mt-2 text-xl font-medium leading-tight">{item.title}</div>
          <div className="mt-2 text-sm text-white/75">Real project by Bozzit Studio</div>
        </div>
      </div>
    </motion.div>
  );
}

function PortfolioModal({ item, onClose }) {
  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[120] flex items-center justify-center bg-black/75 p-4 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-5xl overflow-hidden rounded-[28px] bg-white shadow-[0_30px_90px_rgba(0,0,0,0.3)]"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/90 text-black shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="grid lg:grid-cols-[1.3fr_0.7fr]">
            <div className="bg-black">
              {item.previewType === "video" ? (
                <video src={item.src} className="h-full w-full object-cover" autoPlay muted loop playsInline controls />
              ) : item.previewType === "embed" ? (
                <iframe
                  src={item.src}
                  title={item.title}
                  className="h-[70vh] w-full bg-black"
                  allow="autoplay; fullscreen"
                />
              ) : (
                <iframe src={item.src} title={item.title} className="h-[70vh] w-full bg-white" />
              )}
            </div>
            <div className="flex flex-col justify-between p-8">
              <div>
                <div className="text-[11px] uppercase tracking-[0.28em] text-black/45">{item.category}</div>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-black">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-black/65">
                  This fullscreen modal is designed for premium portfolio presentation. Use it to showcase video work, flyer previews, or high-impact project highlights in a focused environment.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-black/10 bg-[#f5f5f5] px-4 py-2 text-xs uppercase tracking-[0.2em] text-black/60">{item.type}</span>
                <span className="rounded-full border border-black/10 bg-[#f5f5f5] px-4 py-2 text-xs uppercase tracking-[0.2em] text-black/60">Fullscreen view</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function CaseStudyModal({ item, onClose }) {
  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[120] flex items-center justify-center bg-black/75 p-4 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl overflow-hidden rounded-[28px] bg-white shadow-[0_30px_90px_rgba(0,0,0,0.3)]"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/90 text-black shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="p-8 md:p-10">
            <div className="text-[11px] uppercase tracking-[0.28em] text-black/45">{item.client}</div>
            <h3 className="mt-3 text-4xl font-semibold tracking-tight text-black">{item.result}</h3>
            <p className="mt-5 max-w-3xl text-base leading-8 text-black/68">{item.summary}</p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="rounded-[24px] border border-black/10 bg-[#fafafa] p-5">
                <div className="text-[10px] uppercase tracking-[0.22em] text-black/45">Challenge</div>
                <div className="mt-3 text-sm leading-6 text-black/72">Needed a stronger presentation system that looked premium and made the brand easier to trust instantly.</div>
              </div>
              <div className="rounded-[24px] border border-black/10 bg-[#fafafa] p-5">
                <div className="text-[10px] uppercase tracking-[0.22em] text-black/45">Approach</div>
                <div className="mt-3 text-sm leading-6 text-black/72">Focused on clean visual hierarchy, sharper storytelling, and a result-oriented creative structure.</div>
              </div>
              <div className="rounded-[24px] border border-black/10 bg-[#fafafa] p-5">
                <div className="text-[10px] uppercase tracking-[0.22em] text-black/45">Outcome</div>
                <div className="mt-3 text-sm leading-6 text-black/72">Delivered a polished asset that feels modern, premium, and aligned with audience attention patterns.</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ScrollVideoReveal() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 20%"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.84, 1]);
  const radius = useTransform(scrollYProgress, [0, 1], [40, 22]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <section ref={ref} className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <SectionHeading
        eyebrow="Showreel"
        title="Motion that helps people feel the brand before they read the pitch."
        desc="This reel brings movement, depth, and rhythm into the page so the brand feels more premium, more intentional, and easier to remember."
      />
      <motion.div
        style={{ scale, borderRadius: radius, y }}
        className="relative overflow-hidden border border-black/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#0f2137] text-white sm:aspect-[16/9]">
          <video
            src={explainerSpheresSrc}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,17,31,0.12),rgba(8,17,31,0.1)_45%,rgba(8,17,31,0.72))]" />
          <div className="absolute left-6 top-6 rounded-full bg-black px-4 py-2 text-[11px] uppercase tracking-[0.32em] text-white">
            Motion graphics reel
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent px-5 pb-5 pt-12 text-white sm:px-6 sm:pb-6 sm:pt-16 md:px-8 md:pb-8">
            <div className="hidden flex-wrap gap-3 text-[11px] uppercase tracking-[0.24em] text-white/60 sm:flex">
              <span>Attention</span>
              <span>Emotion</span>
              <span>Recall</span>
            </div>
            <div className="max-w-[250px] text-xl font-semibold leading-tight sm:mt-3 sm:max-w-3xl sm:text-2xl md:text-4xl">
              Good motion makes a brand feel sharper, more confident, and easier to trust in the first few seconds.
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default function BozzitStudioPremiumSite() {
  const [activePortfolioItem, setActivePortfolioItem] = useState(null);
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  const headlineWords = useMemo(() => ["Creative", "Performance", "Motion", "Growth"], []);
  const [activeWord, setActiveWord] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveWord((p) => (p + 1) % headlineWords.length);
    }, 2200);
    return () => clearInterval(id);
  }, [headlineWords.length]);

  return (
    <div className="min-h-screen bg-[#f4f4f2] text-black selection:bg-black selection:text-white">
      <CustomCursor />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.055),transparent_30%),linear-gradient(to_bottom,#ffffff,#f3f3f1_58%,#ececeb)]" />
      <NoiseOverlay />

      <header className="sticky top-0 z-50 border-b border-black/8 bg-white/70 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <LogoMark />

          <nav className="hidden items-center gap-8 md:flex">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#portfolio">Portfolio</NavLink>
            <NavLink href="#case-studies">Case Studies</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <div className="hidden md:block">
            <MagneticButton href="#contact">Book a discovery call</MagneticButton>
          </div>

          <button
            className="rounded-full border border-black/10 bg-white p-3 text-black shadow-[0_4px_18px_rgba(0,0,0,0.05)] md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="border-t border-black/8 bg-white/95 px-5 py-5 md:hidden"
            >
              <div className="flex flex-col gap-4">
                <NavLink href="#services">Services</NavLink>
                <NavLink href="#portfolio">Portfolio</NavLink>
                <NavLink href="#case-studies">Case Studies</NavLink>
                <NavLink href="#contact">Contact</NavLink>
                <div className="pt-2">
                  <MagneticButton href="#contact">Book a discovery call</MagneticButton>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section ref={heroRef} className="relative overflow-hidden">
          <FloatingOrbs />
          <motion.div style={{ y, opacity }} className="mx-auto max-w-7xl px-5 pb-16 pt-20 md:px-8 md:pb-24 md:pt-28">
            <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="mb-6 inline-flex items-center rounded-full border border-black/10 bg-white px-5 py-2.5 text-xs uppercase tracking-[0.34em] text-black/60 shadow-[0_8px_24px_rgba(0,0,0,0.04)]"
                >
                  Scroll-stopping creative for modern brands
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.08 }}
                  className="max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.05em] text-black sm:text-6xl md:text-7xl lg:text-[96px]"
                >
                  <span className="block">We build</span>
                  <span className="relative mt-3 block min-h-[0.95em] min-w-[170px] sm:min-h-[1em] sm:min-w-[320px] lg:min-w-[360px]">
                    <motion.span
                      key={headlineWords[activeWord]}
                      initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ duration: 0.55 }}
                      className="inline-block whitespace-nowrap pr-[0.08em] bg-gradient-to-r from-black via-black/85 to-black/45 bg-clip-text text-transparent"
                    >
                      {headlineWords[activeWord]}
                    </motion.span>
                  </span>
                  <span className="mt-2 block">systems for brands that want to look premium and grow faster.</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.16 }}
                  className="mt-8 max-w-2xl text-base leading-8 text-black/62 md:text-lg"
                >
                  Bozzit Studio blends performance marketing, premium design, and sharp video editing into a modern growth experience that feels minimal, cinematic, and conversion-ready.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.22 }}
                  className="mt-10 flex flex-wrap gap-4"
                >
                  <MagneticButton href="#contact">Start your project</MagneticButton>
                  <MagneticButton href="#portfolio" secondary>
                    View selected work
                  </MagneticButton>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.3 }}
                  className="mt-12 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3"
                >
                  {metrics.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[24px] border border-black/10 bg-white p-4 shadow-[0_8px_28px_rgba(0,0,0,0.04)]"
                    >
                      <div className="text-3xl font-semibold tracking-tight text-black">{item.value}</div>
                      <div className="mt-2 text-sm text-black/82">{item.label}</div>
                      <div className="mt-1 text-xs leading-5 text-black/45">{item.note}</div>
                    </div>
                  ))}
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.14 }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-[34px] border border-black/10 bg-[linear-gradient(180deg,#fbfbfb,#f1f1ef)] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.08)]">
                  <div className="mb-4 flex items-center justify-between rounded-[24px] border border-black/10 bg-white/80 px-4 py-3 backdrop-blur-md">
                    <div>
                      <div className="text-xs uppercase tracking-[0.28em] text-black/45">Why brands choose Bozzit</div>
                      <div className="mt-1 text-sm text-black/82">Premium creative, sharper positioning, and better first impressions</div>
                    </div>
                    <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs text-black/60">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      Ready
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="overflow-hidden rounded-[28px] border border-black/10 bg-[linear-gradient(135deg,#0e1520,#17314d_58%,#244d70)] p-3 shadow-[0_10px_26px_rgba(0,0,0,0.04)]">
                      <div className="relative overflow-hidden rounded-[24px] px-6 py-6 text-white">
                        <motion.div
                          animate={{ y: [0, -16, 0], x: [0, 10, 0] }}
                          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute -left-14 top-10 h-40 w-40 rounded-full bg-sky-300/18 blur-3xl"
                        />
                        <motion.div
                          animate={{ y: [0, 20, 0], x: [0, -12, 0] }}
                          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute -right-10 bottom-10 h-44 w-44 rounded-full bg-white/10 blur-3xl"
                        />
                        <div className="relative">
                          <div className="flex items-center justify-between">
                            <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.26em] text-white/85">
                              Studio position
                            </div>
                            <div className="rounded-full border border-white/12 bg-white/8 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white/70">
                              Creative x growth
                            </div>
                          </div>
                          <div className="mt-8 max-w-sm text-[11px] uppercase tracking-[0.28em] text-white/55">Bozzit Studio framework</div>
                          <div className="mt-3 max-w-md text-3xl font-semibold leading-tight">
                            Premium design systems built to convert attention into action.
                          </div>
                          <div className="mt-8 grid gap-3 sm:grid-cols-3">
                            {[
                              ["Visuals", "Minimal, cinematic, premium"],
                              ["Motion", "Short-form edits with retention"],
                              ["Performance", "Creative shaped for response"],
                            ].map(([label, value]) => (
                              <div key={label} className="rounded-[20px] border border-white/12 bg-white/8 p-4 backdrop-blur-md">
                                <div className="text-[10px] uppercase tracking-[0.22em] text-white/50">{label}</div>
                                <div className="mt-2 text-sm leading-6 text-white/92">{value}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-[28px] border border-black/10 bg-white p-5 shadow-[0_10px_26px_rgba(0,0,0,0.04)]">
                        <div className="text-xs uppercase tracking-[0.28em] text-black/45">Offer</div>
                        <div className="mt-3 text-lg font-medium text-black">Flyers, reels, invites, and performance creative.</div>
                      </div>
                      <div className="rounded-[28px] border border-black/10 bg-white p-5 shadow-[0_10px_26px_rgba(0,0,0,0.04)]">
                        <div className="text-xs uppercase tracking-[0.28em] text-black/45">Approach</div>
                        <div className="mt-3 text-lg font-medium text-black">Clear messaging, premium presentation, faster trust.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28" id="services">
          <SectionHeading
            eyebrow="Services"
            title="A refined marketing stack built for modern brands."
            desc="We keep the system focused: attention-grabbing creative, premium video execution, and performance-driven campaigns that move a brand forward without making the experience feel noisy or generic."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((item, i) => (
              <ServiceCard item={item} index={i} key={item.title} />
            ))}
          </div>
        </section>

        <ScrollVideoReveal />

        <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28" id="portfolio">
          <SectionHeading
            eyebrow="Portfolio"
            title="Selected work from Bozzit Studio."
            desc="A selection of recent work across flyer design, short-form video, and animated event creatives made for real clients and real use cases."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {reels.map((item, i) => (
              <ReelCard key={item.title} item={item} index={i} onOpen={setActivePortfolioItem} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28" id="case-studies">
          <SectionHeading
            eyebrow="Case studies"
            title="Proof-driven work that helps clients trust your studio faster."
            desc="Each case study shows the kind of work Bozzit handles, how it was shaped for the client, and why the final piece feels polished and purposeful."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {caseStudies.map((item, i) => (
              <motion.div
                key={item.client}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                onClick={() => setActiveCaseStudy(item)}
                className="group cursor-hover rounded-[30px] border border-black/10 bg-white p-6 shadow-[0_14px_40px_rgba(0,0,0,0.05)]"
              >
                <div className="text-xs uppercase tracking-[0.28em] text-black/42">{item.client}</div>
                <div className="mt-4 text-3xl font-semibold tracking-tight text-black">{item.result}</div>
                <p className="mt-4 text-sm leading-6 text-black/62">{item.summary}</p>
                <div className="mt-8 flex items-center gap-2 text-sm font-medium text-black">
                  View case study
                  <MoveRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
                <div className="mt-8 rounded-[24px] border border-black/10 bg-[linear-gradient(180deg,#fafafa,#efefef)] p-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-white p-4 shadow-[0_6px_18px_rgba(0,0,0,0.04)]">
                      <div className="text-[10px] uppercase tracking-[0.22em] text-black/45">{item.detailLabel}</div>
                      <div className="mt-2 text-sm text-black">{item.detailValue}</div>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-[0_6px_18px_rgba(0,0,0,0.04)]">
                      <div className="text-[10px] uppercase tracking-[0.22em] text-black/45">{item.supportLabel}</div>
                      <div className="mt-2 text-sm text-black">{item.supportValue}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-28" id="contact">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative overflow-hidden rounded-[36px] border border-black/10 bg-white px-6 py-10 shadow-[0_20px_60px_rgba(0,0,0,0.07)] md:px-10 md:py-14"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.04),transparent_28%)] opacity-70" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#fafafa] px-3 py-1.5 text-[11px] uppercase tracking-[0.3em] text-black/55">
                  Let’s build
                </div>
                <h3 className="max-w-3xl text-4xl font-semibold tracking-tight text-black md:text-5xl">
                  Need creative that looks premium and feels worth clicking?
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-7 text-black/62 md:text-lg">
                  Reach out for flyers, reels, animated invites, premium edits, and campaign-ready creative built to make your brand look sharper from the first impression.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <MagneticButton href="mailto:bozzit.studio@gmail.com">bozzit.studio@gmail.com</MagneticButton>
                <MagneticButton href="https://wa.me/919898860309" secondary>
                  WhatsApp: 9898860309
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </section>

        <PortfolioModal item={activePortfolioItem} onClose={() => setActivePortfolioItem(null)} />
        <CaseStudyModal item={activeCaseStudy} onClose={() => setActiveCaseStudy(null)} />
      </main>
    </div>
  );
}
