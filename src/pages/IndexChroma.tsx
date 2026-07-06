import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  technicalSkills,
  projects,
  certifications,
  recommendations,
} from "@/data/profile";
import methanexLogo from "@/assets/methanex-logo.png.asset.json";
import schneiderLogo from "@/assets/schneider-logo.png.asset.json";
import advansysLogo from "@/assets/advansys-logo.png.asset.json";

/**
 * v8 — CHROMA EDITION
 * A scroll-driven brand journey. The entire page palette morphs between the
 * three employers Mohamed has worked with. Each chapter owns its color system;
 * colors interpolate smoothly as you scroll from one to the next.
 *
 * Methanex  →  Schneider Electric  →  Advansys Intelligent Solutions
 */

type Brand = {
  key: string;
  name: string;
  role: string;
  years: string;
  tagline: string;
  narrative: string;
  bullets: string[];
  logo: string;
  logoBg: string; // background behind the logo plate
  // color system (rgb triplets)
  bg: [number, number, number];
  surface: [number, number, number];
  ink: [number, number, number];
  mute: [number, number, number];
  accent: [number, number, number];
  accent2: [number, number, number];
};

const brands: Brand[] = [
  {
    key: "methanex",
    name: "METHANEX",
    role: "Instrument & Control Engineer",
    years: "2015 — 2023",
    tagline: "The power of agility.",
    narrative:
      "Eight years operating and maintaining mission-critical control systems at the world's largest methanol producer. Reliability wasn't a slide — it was the shift.",
    bullets: [
      "Foxboro IA / Archestra",
      "Triconex SIS",
      "Alarm rationalization -75%",
      "SIL-3 ESD implementation",
    ],
    logo: methanexLogo.url,
    logoBg: "#ffffff",
    // Methanex teal-on-navy
    bg: [4, 40, 60],
    surface: [8, 60, 82],
    ink: [230, 246, 250],
    mute: [150, 200, 215],
    accent: [0, 156, 166],      // Methanex teal
    accent2: [120, 210, 220],
  },
  {
    key: "schneider",
    name: "SCHNEIDER ELECTRIC",
    role: "Expert Customer Support Engineer",
    years: "2023 — 2024",
    tagline: "Life Is On.",
    narrative:
      "Global L3 support at a $30B automation powerhouse. Mastered the platforms at their source — and supported customers on every continent.",
    bullets: [
      "Global L3 escalation",
      "Foxboro depth",
      "Cross-region customer base",
      "Product-level expertise",
    ],
    logo: schneiderLogo.url,
    logoBg: "#ffffff",
    // Schneider green-on-dark
    bg: [12, 14, 12],
    surface: [22, 26, 22],
    ink: [245, 250, 245],
    mute: [170, 180, 170],
    accent: [61, 205, 88],      // Schneider green
    accent2: [140, 230, 160],
  },
  {
    key: "advansys",
    name: "ADVANSYS",
    role: "Senior Application Design Engineer",
    years: "2024 — Present",
    tagline: "Intelligent Solutions.",
    narrative:
      "Vendor-agnostic architectures for petrochem and hyperscale data centers. Bridging OEM technologies with the operational realities I lived at Methanex.",
    bullets: [
      "Tailored automation design",
      "SCADA & AVEVA PI",
      "IEC 62443 cybersecurity",
      "End-to-end delivery",
    ],
    logo: advansysLogo.url,
    logoBg: "#000000",
    // Advansys black + electric blue
    bg: [4, 6, 10],
    surface: [14, 18, 26],
    ink: [240, 244, 255],
    mute: [150, 165, 190],
    accent: [43, 123, 255],     // Advansys electric blue
    accent2: [180, 200, 255],
  },
];

const rgb = (c: [number, number, number], a = 1) =>
  `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${a})`;

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const lerpColor = (
  a: [number, number, number],
  b: [number, number, number],
  t: number
): [number, number, number] => [
  Math.round(lerp(a[0], b[0], t)),
  Math.round(lerp(a[1], b[1], t)),
  Math.round(lerp(a[2], b[2], t)),
];

const IndexChroma = () => {
  const chaptersRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState(0); // 0 .. brands.length-1 (float)
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = chaptersRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const p = total > 0 ? scrolled / total : 0;
      const raw = p * (brands.length - 1);
      setPhase(raw);
      setActiveIdx(Math.round(raw));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Interpolated theme
  const i = Math.min(brands.length - 2, Math.floor(phase));
  const t = Math.max(0, Math.min(1, phase - i));
  const a = brands[i];
  const b = brands[i + 1] ?? brands[i];
  const theme = {
    bg: lerpColor(a.bg, b.bg, t),
    surface: lerpColor(a.surface, b.surface, t),
    ink: lerpColor(a.ink, b.ink, t),
    mute: lerpColor(a.mute, b.mute, t),
    accent: lerpColor(a.accent, b.accent, t),
    accent2: lerpColor(a.accent2, b.accent2, t),
  };

  const active = brands[activeIdx];

  return (
    <>
      <Helmet>
        <title>Mohamed Eissa — Chroma Edition</title>
        <meta
          name="description"
          content="Scroll-driven brand journey through Methanex, Schneider Electric, and Advansys."
        />
      </Helmet>

      {/* Fixed background that morphs */}
      <div
        className="fixed inset-0 -z-10 transition-colors duration-300"
        style={{
          background: `radial-gradient(circle at 20% 20%, ${rgb(theme.accent, 0.18)}, transparent 55%), radial-gradient(circle at 80% 80%, ${rgb(theme.accent2, 0.1)}, transparent 60%), ${rgb(theme.bg)}`,
        }}
      />
      <div
        className="fixed inset-0 -z-10 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(${rgb(theme.ink)} 1px, transparent 1px), linear-gradient(90deg, ${rgb(theme.ink)} 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
        }}
      />

      <div
        style={{
          color: rgb(theme.ink),
          fontFamily: "'Work Sans', sans-serif",
        }}
      >
        {/* Fixed brand HUD */}
        <div
          className="fixed top-20 left-4 md:left-8 z-40 text-[10px] tracking-[0.4em]"
          style={{ color: rgb(theme.accent), fontFamily: "'JetBrains Mono', monospace" }}
        >
          <div>CHROMA / v8</div>
          <div className="mt-1" style={{ color: rgb(theme.mute) }}>
            {String(activeIdx + 1).padStart(2, "0")} · {active.key.toUpperCase()}
          </div>
        </div>

        {/* Fixed brand indicator dots */}
        <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
          {brands.map((br, idx) => {
            const on = idx === activeIdx;
            return (
              <div key={br.key} className="flex items-center gap-2 justify-end">
                <span
                  className="text-[9px] tracking-[0.3em] transition-opacity"
                  style={{
                    color: rgb(theme.ink),
                    opacity: on ? 1 : 0.3,
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {br.name}
                </span>
                <span
                  className="block rounded-full transition-all"
                  style={{
                    width: on ? 10 : 6,
                    height: on ? 10 : 6,
                    background: rgb(on ? theme.accent : theme.mute, on ? 1 : 0.5),
                    boxShadow: on ? `0 0 12px ${rgb(theme.accent, 0.8)}` : "none",
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Hero */}
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 pt-32 pb-16">
          <div
            className="text-[10px] tracking-[0.5em] mb-6"
            style={{ color: rgb(theme.accent), fontFamily: "'JetBrains Mono', monospace" }}
          >
            ONE ENGINEER · THREE VANTAGE POINTS
          </div>
          <h1
            className="text-5xl md:text-8xl leading-[0.9] font-black"
            style={{ fontFamily: "'Work Sans', sans-serif", letterSpacing: "-0.03em" }}
          >
            MOHAMED
            <br />
            <span style={{ color: rgb(theme.accent) }}>EISSA</span>
          </h1>
          <p
            className="mt-8 max-w-2xl text-lg md:text-xl"
            style={{ color: rgb(theme.mute) }}
          >
            An instrumentation & control career told through the colors of the
            companies that shaped it. Scroll — the page becomes each brand.
          </p>
          <div
            className="mt-16 text-[10px] tracking-[0.4em] animate-pulse"
            style={{ color: rgb(theme.accent), fontFamily: "'JetBrains Mono', monospace" }}
          >
            ▼ SCROLL TO ENTER METHANEX
          </div>
        </section>

        {/* Chapters — one per brand */}
        <div ref={chaptersRef} style={{ height: `${brands.length * 100}vh` }} className="relative">
          <div className="sticky top-0 h-screen w-full flex items-center px-6 md:px-20">
            <div className="w-full grid md:grid-cols-[1fr_1fr] gap-10 md:gap-16 items-center">
              {/* Left — real brand logo plate */}
              <div key={`mark-${activeIdx}`} className="animate-fade-in">
                <div
                  className="text-[10px] tracking-[0.5em] mb-4"
                  style={{ color: rgb(theme.accent), fontFamily: "'JetBrains Mono', monospace" }}
                >
                  CHAPTER {String(activeIdx + 1).padStart(2, "0")} / 03 · {active.years}
                </div>

                {/* Logo plate — uses the brand's own background color for authenticity */}
                <div
                  className="relative w-full max-w-md aspect-[16/9] flex items-center justify-center overflow-hidden border"
                  style={{
                    background: active.logoBg,
                    borderColor: rgb(theme.accent, 0.5),
                    boxShadow: `0 20px 60px ${rgb(theme.accent, 0.25)}, inset 0 0 0 1px rgba(255,255,255,0.04)`,
                  }}
                >
                  {/* corner ticks */}
                  <span className="absolute top-2 left-2 w-3 h-3 border-t border-l" style={{ borderColor: rgb(theme.accent) }} />
                  <span className="absolute top-2 right-2 w-3 h-3 border-t border-r" style={{ borderColor: rgb(theme.accent) }} />
                  <span className="absolute bottom-2 left-2 w-3 h-3 border-b border-l" style={{ borderColor: rgb(theme.accent) }} />
                  <span className="absolute bottom-2 right-2 w-3 h-3 border-b border-r" style={{ borderColor: rgb(theme.accent) }} />
                  <img
                    src={active.logo}
                    alt={`${active.name} logo`}
                    className="max-h-[70%] max-w-[80%] object-contain"
                    loading="lazy"
                  />
                </div>

                <div
                  className="mt-6 text-2xl md:text-3xl font-black"
                  style={{ color: rgb(theme.accent), letterSpacing: "-0.02em" }}
                >
                  {active.tagline}
                </div>
                <div
                  className="mt-2 text-sm tracking-widest uppercase"
                  style={{ color: rgb(theme.mute), fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {active.role}
                </div>

                {/* Color bar - signature of this brand */}
                <div className="mt-6 flex gap-1 h-2 max-w-md">
                  {[active.bg, active.surface, active.accent, active.accent2].map((c, ci) => (
                    <div
                      key={ci}
                      className="flex-1 transition-all"
                      style={{ background: rgb(c) }}
                    />
                  ))}
                </div>
              </div>

              {/* Right — narrative panel */}
              <div
                key={`panel-${activeIdx}`}
                className="animate-fade-in p-6 md:p-10 backdrop-blur-md border"
                style={{
                  background: rgb(theme.surface, 0.55),
                  borderColor: rgb(theme.accent, 0.4),
                  boxShadow: `0 30px 80px ${rgb(theme.accent, 0.15)}`,
                }}
              >
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: rgb(theme.ink) }}
                >
                  {active.narrative}
                </p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {active.bullets.map((bl) => (
                    <div
                      key={bl}
                      className="text-[11px] tracking-widest uppercase pl-3 py-2 border-l-2"
                      style={{
                        borderColor: rgb(theme.accent),
                        color: rgb(theme.ink, 0.9),
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {bl}
                    </div>
                  ))}
                </div>

                {/* progress bar for chapter */}
                <div
                  className="mt-8 h-[2px] relative overflow-hidden"
                  style={{ background: rgb(theme.ink, 0.15) }}
                >
                  <div
                    className="absolute inset-y-0 left-0 transition-all"
                    style={{
                      width: `${(phase / (brands.length - 1)) * 100}%`,
                      background: rgb(theme.accent),
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Toolbox */}
        <section className="px-6 md:px-20 py-32 max-w-7xl mx-auto">
          <div
            className="text-[10px] tracking-[0.5em] mb-4"
            style={{ color: rgb(theme.accent), fontFamily: "'JetBrains Mono', monospace" }}
          >
            / TOOLBOX
          </div>
          <h2
            className="text-4xl md:text-6xl font-black mb-12"
            style={{ letterSpacing: "-0.02em", color: rgb(theme.ink) }}
          >
            The stack, brand-agnostic.
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(technicalSkills).map(([cat, items], idx) => (
              <div
                key={cat}
                className="p-6 border transition-all hover:-translate-y-1"
                style={{
                  background: rgb(theme.surface, 0.5),
                  borderColor: rgb(theme.accent, 0.3),
                }}
              >
                <div
                  className="text-[10px] tracking-widest"
                  style={{ color: rgb(theme.accent), fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {String(idx + 1).padStart(2, "0")} / 04
                </div>
                <div className="text-xl mt-1 font-bold" style={{ color: rgb(theme.ink) }}>
                  {cat}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((it) => (
                    <span
                      key={it}
                      className="text-[11px] px-2 py-1 rounded-sm"
                      style={{
                        background: rgb(theme.accent, 0.15),
                        color: rgb(theme.ink, 0.9),
                        border: `1px solid ${rgb(theme.accent, 0.3)}`,
                      }}
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="px-6 md:px-20 py-24 max-w-7xl mx-auto">
          <div
            className="text-[10px] tracking-[0.5em] mb-4"
            style={{ color: rgb(theme.accent), fontFamily: "'JetBrains Mono', monospace" }}
          >
            / DEPLOYMENTS
          </div>
          <h2
            className="text-4xl md:text-6xl font-black mb-12"
            style={{ letterSpacing: "-0.02em", color: rgb(theme.ink) }}
          >
            Projects.
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((p, i) => (
              <article
                key={p.title}
                className="p-6 border transition-all hover:-translate-y-1"
                style={{
                  background: rgb(theme.surface, 0.5),
                  borderColor: rgb(theme.accent, 0.3),
                }}
              >
                <div
                  className="text-[10px] tracking-widest"
                  style={{ color: rgb(theme.accent), fontFamily: "'JetBrains Mono', monospace" }}
                >
                  PRJ_{String(i + 1).padStart(3, "0")}
                </div>
                <h3 className="text-xl mt-1 font-bold" style={{ color: rgb(theme.ink) }}>
                  {p.title}
                </h3>
                <p className="mt-3 text-sm" style={{ color: rgb(theme.ink, 0.8) }}>
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
                  {p.technologies.map((tc) => (
                    <span
                      key={tc}
                      className="text-[10px] uppercase tracking-widest"
                      style={{ color: rgb(theme.accent), fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      · {tc}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Award + Certs */}
        <section className="px-6 md:px-20 py-24 max-w-7xl mx-auto grid md:grid-cols-[1fr_2fr] gap-8">
          <div>
            <div
              className="text-[10px] tracking-[0.5em] mb-4"
              style={{ color: rgb(theme.accent), fontFamily: "'JetBrains Mono', monospace" }}
            >
              / RECOGNITION
            </div>
            <h2 className="text-4xl md:text-5xl font-black leading-none" style={{ color: rgb(theme.ink) }}>
              Innovation
              <br />
              Award 2025
            </h2>
          </div>
          <div
            className="p-8 border"
            style={{
              background: rgb(theme.surface, 0.5),
              borderColor: rgb(theme.accent, 0.4),
              boxShadow: `0 0 80px ${rgb(theme.accent, 0.15)}`,
            }}
          >
            <p className="leading-relaxed" style={{ color: rgb(theme.ink, 0.9) }}>
              Awarded for pioneering process-control innovations that reshaped
              operational efficiency and reliability at scale.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {certifications.map((c) => (
                <div key={c.title} className="p-3 border" style={{ borderColor: rgb(theme.accent, 0.3) }}>
                  <div
                    className="text-[10px]"
                    style={{ color: rgb(theme.accent), fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {c.year}
                  </div>
                  <div className="text-sm mt-1 font-semibold" style={{ color: rgb(theme.ink) }}>
                    {c.title}
                  </div>
                  <div className="text-[10px] mt-1" style={{ color: rgb(theme.mute) }}>
                    {c.issuer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recommendations */}
        <section className="px-6 md:px-20 py-24 max-w-7xl mx-auto">
          <div
            className="text-[10px] tracking-[0.5em] mb-4"
            style={{ color: rgb(theme.accent), fontFamily: "'JetBrains Mono', monospace" }}
          >
            / SIGNAL
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-12" style={{ color: rgb(theme.ink) }}>
            Recommendations.
          </h2>
          <div className="space-y-6">
            {recommendations.map((r) => (
              <div
                key={r.name}
                className="border-l-2 p-6 max-w-3xl"
                style={{
                  borderColor: rgb(theme.accent),
                  background: rgb(theme.surface, 0.4),
                }}
              >
                <div className="flex items-baseline justify-between flex-wrap gap-4">
                  <div className="font-semibold" style={{ color: rgb(theme.ink) }}>{r.name}</div>
                  <div className="text-[10px]" style={{ color: rgb(theme.mute) }}>{r.date}</div>
                </div>
                <div className="text-[10px] mb-3 tracking-wide" style={{ color: rgb(theme.mute) }}>
                  {r.title}
                </div>
                {r.body.map((bd, j) => (
                  <p key={j} className="text-sm mb-2 leading-relaxed" style={{ color: rgb(theme.ink, 0.9) }}>
                    {bd}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </section>

        <footer
          className="px-6 md:px-20 py-12 border-t text-[10px] tracking-[0.4em]"
          style={{
            borderColor: rgb(theme.accent, 0.25),
            color: rgb(theme.mute),
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          CHROMA EDITION · MOHAMED EISSA © 2026 · METHANEX → SCHNEIDER → ADVANSYS
        </footer>
      </div>
    </>
  );
};

export default IndexChroma;
