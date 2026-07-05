import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  technicalSkills,
  projects,
  certifications,
  vantagePoints,
  recommendations,
} from "@/data/profile";

/**
 * v7 — CUBE EDITION
 * A fixed 3D cube dominates the viewport. Six faces represent the six dimensions
 * of Mohamed's practice. Scroll drives rotation: each "stage" snaps the cube to
 * a new face while a synchronized info panel updates on the right.
 *
 * Palette: Neon Mint Terminal (#05131a / #2dd4a8 / #73ffb8)
 */

type Face = {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  body: string;
  bullets: string[];
  // rotation to bring this face to the front
  rx: number;
  ry: number;
  // face transform (position on cube)
  faceTransform: string;
};

const SIZE = 260; // cube edge in px
const HALF = SIZE / 2;

const faces: Face[] = [
  {
    id: "identity",
    tag: "FACE 01 · IDENTITY",
    title: "MOHAMED EISSA",
    subtitle: "Instrumentation & Control Engineer",
    body:
      "One engineer, six vantage points. Scroll the cube — each face is a dimension of the practice.",
    bullets: ["10+ years I&C", "3 vantage points", "2 industries", "4 platforms"],
    rx: 0,
    ry: 0,
    faceTransform: `translateZ(${HALF}px)`,
  },
  {
    id: "enduser",
    tag: "FACE 02 · END USER",
    title: "METHANEX",
    subtitle: "From the plant floor",
    body: vantagePoints[0].desc,
    bullets: ["Live process ownership", "Reliability-first mindset", "Root-cause discipline"],
    rx: 0,
    ry: -90,
    faceTransform: `rotateY(90deg) translateZ(${HALF}px)`,
  },
  {
    id: "vendor",
    tag: "FACE 03 · GLOBAL VENDOR",
    title: "SCHNEIDER ELECTRIC",
    subtitle: "Inside the OEM",
    body: vantagePoints[1].desc,
    bullets: ["Foxboro / Triconex depth", "Global L3 support", "Product-level expertise"],
    rx: 0,
    ry: -180,
    faceTransform: `rotateY(180deg) translateZ(${HALF}px)`,
  },
  {
    id: "integrator",
    tag: "FACE 04 · SYSTEM INTEGRATOR",
    title: "ADVANSYS",
    subtitle: "Designing to fit",
    body: vantagePoints[2].desc,
    bullets: ["Tailored architectures", "Vendor-agnostic design", "Delivery ownership"],
    rx: 0,
    ry: -270,
    faceTransform: `rotateY(270deg) translateZ(${HALF}px)`,
  },
  {
    id: "petrochem",
    tag: "FACE 05 · DOMAIN",
    title: "PETROCHEMICALS",
    subtitle: "Where uptime is non-negotiable",
    body:
      "Mission-critical process control across DCS, SIS, and SCADA. From alarm rationalization to SIL-3 ESD.",
    bullets: ["Foxboro Archestra", "Triconex SIS", "Alarm philosophy", "SIL validation"],
    rx: -90,
    ry: 0,
    faceTransform: `rotateX(90deg) translateZ(${HALF}px)`,
  },
  {
    id: "datacenter",
    tag: "FACE 06 · DOMAIN",
    title: "DATA CENTERS",
    subtitle: "Reliability at hyperscale",
    body:
      "Control-system engineering meets 24/7 infrastructure. Real-time operational data, safety, and continuity.",
    bullets: ["SCADA design", "AVEVA PI", "Cybersecurity (IEC 62443)", "Integration"],
    rx: 90,
    ry: 0,
    faceTransform: `rotateX(-90deg) translateZ(${HALF}px)`,
  },
];

const IndexCube = () => {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0); // 0..1 within current face
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = scrollRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const p = total > 0 ? scrolled / total : 0;
      const idx = Math.min(faces.length - 1, Math.floor(p * faces.length));
      const local = (p * faces.length) - idx;
      setActive(idx);
      setProgress(local);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Interpolate rotation smoothly between current and next face
  const cur = faces[active];
  const nxt = faces[Math.min(faces.length - 1, active + 1)];
  const rx = cur.rx + (nxt.rx - cur.rx) * progress;
  const ry = cur.ry + (nxt.ry - cur.ry) * progress;

  return (
    <div
      className="bg-[#05131a] text-[#c7f9e5] relative"
      style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}
    >
      <Helmet>
        <title>Mohamed Eissa — Cube Edition</title>
        <meta
          name="description"
          content="Six-faced interactive cube portfolio for I&C engineer Mohamed Eissa."
        />
      </Helmet>

      {/* Ambient grid + scanlines */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(#2dd4a8 1px, transparent 1px), linear-gradient(90deg, #2dd4a8 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 40%, rgba(45,212,168,0.12), transparent 55%), radial-gradient(circle at 80% 70%, rgba(115,255,184,0.08), transparent 60%)",
        }}
      />

      {/* Scroll-driven stage: takes 6 × 100vh so each face has a scroll segment */}
      <div ref={scrollRef} style={{ height: `${faces.length * 100}vh` }} className="relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* HUD top-left */}
          <div className="absolute top-24 left-6 md:left-10 z-20 text-[10px] tracking-[0.4em] text-[#2dd4a8]/80">
            <div>SYS://EISSA.CUBE</div>
            <div className="mt-1 text-[#c7f9e5]/50">
              FACE {String(active + 1).padStart(2, "0")} / {String(faces.length).padStart(2, "0")}
            </div>
            <div className="mt-4 flex flex-col gap-1">
              {faces.map((f, i) => (
                <div
                  key={f.id}
                  className={`flex items-center gap-2 transition-opacity ${
                    i === active ? "opacity-100" : "opacity-40"
                  }`}
                >
                  <span
                    className={`inline-block w-2 h-2 ${
                      i === active ? "bg-[#73ffb8]" : "bg-[#2dd4a8]/40"
                    }`}
                  />
                  <span className="text-[9px]">{f.id.toUpperCase()}</span>
                </div>
              ))}
            </div>
          </div>

          {/* HUD top-right — live readouts */}
          <div className="absolute top-24 right-6 md:right-10 z-20 text-right text-[10px] tracking-[0.3em] text-[#2dd4a8]/70">
            <div>ROT.X {rx.toFixed(1)}°</div>
            <div>ROT.Y {ry.toFixed(1)}°</div>
            <div className="mt-2 text-[#c7f9e5]/40">SCROLL TO ROTATE</div>
          </div>

          {/* Cube stage */}
          <div className="absolute inset-0 flex items-center justify-center md:justify-start md:pl-[8%]">
            <div style={{ perspective: "1400px" }} className="w-[260px] h-[260px]">
              <div
                className="relative w-full h-full transition-transform duration-500 ease-out"
                style={{
                  transformStyle: "preserve-3d",
                  transform: `rotateX(${rx}deg) rotateY(${ry}deg)`,
                }}
              >
                {faces.map((f, i) => (
                  <div
                    key={f.id}
                    className="absolute inset-0 border border-[#2dd4a8]/60 flex flex-col justify-between p-4"
                    style={{
                      transform: f.faceTransform,
                      background:
                        i === active
                          ? "linear-gradient(135deg, rgba(45,212,168,0.18), rgba(5,19,26,0.85))"
                          : "linear-gradient(135deg, rgba(45,212,168,0.06), rgba(5,19,26,0.9))",
                      boxShadow:
                        i === active
                          ? "0 0 60px rgba(45,212,168,0.4), inset 0 0 40px rgba(45,212,168,0.15)"
                          : "inset 0 0 20px rgba(45,212,168,0.08)",
                      backfaceVisibility: "hidden",
                    }}
                  >
                    {/* corner ticks */}
                    <div className="absolute top-1 left-1 w-3 h-3 border-t border-l border-[#73ffb8]" />
                    <div className="absolute top-1 right-1 w-3 h-3 border-t border-r border-[#73ffb8]" />
                    <div className="absolute bottom-1 left-1 w-3 h-3 border-b border-l border-[#73ffb8]" />
                    <div className="absolute bottom-1 right-1 w-3 h-3 border-b border-r border-[#73ffb8]" />

                    <div className="text-[9px] tracking-[0.3em] text-[#73ffb8]">{f.tag}</div>
                    <div>
                      <div className="text-[#73ffb8] text-lg leading-tight font-black">
                        {f.title}
                      </div>
                      <div className="text-[10px] text-[#c7f9e5]/60 mt-1">{f.subtitle}</div>
                    </div>
                    <div className="text-[9px] text-[#2dd4a8]/70">
                      {String(i + 1).padStart(2, "0")}/06
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Info panel — right side */}
          <div className="absolute right-0 top-0 bottom-0 md:w-[42%] w-full flex items-center pointer-events-none">
            <div
              key={active}
              className="mx-6 md:mx-12 p-6 md:p-8 backdrop-blur-md bg-[#05131a]/60 border border-[#2dd4a8]/30 max-w-lg animate-fade-in"
              style={{
                boxShadow: "0 20px 80px rgba(45,212,168,0.15)",
              }}
            >
              <div className="text-[10px] tracking-[0.4em] text-[#2dd4a8] mb-3">
                {cur.tag}
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-[#73ffb8] leading-none">
                {cur.title}
              </h2>
              <div className="text-xs text-[#c7f9e5]/70 mt-2 tracking-widest uppercase">
                {cur.subtitle}
              </div>
              <p
                className="mt-5 text-sm text-[#c7f9e5]/85 leading-relaxed"
                style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                {cur.body}
              </p>
              <div className="mt-6 grid grid-cols-2 gap-2">
                {cur.bullets.map((b) => (
                  <div
                    key={b}
                    className="text-[10px] tracking-widest text-[#c7f9e5]/80 border-l border-[#2dd4a8]/50 pl-2 py-1"
                  >
                    · {b}
                  </div>
                ))}
              </div>

              {/* progress bar */}
              <div className="mt-6 h-[2px] bg-[#2dd4a8]/15 relative overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-[#73ffb8]"
                  style={{ width: `${((active + progress) / faces.length) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* bottom scroll hint */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] text-[#2dd4a8]/60 z-20">
            ▼ SCROLL · ROTATE ▼
          </div>
        </div>
      </div>

      {/* Post-cube: dynamic supporting sections */}
      <section className="relative z-10 px-6 md:px-16 py-32 max-w-7xl mx-auto">
        <div className="text-[10px] tracking-[0.4em] text-[#2dd4a8] mb-4">
          / STACK MATRIX
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-[#73ffb8] mb-12">
          THE TOOLBOX
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {Object.entries(technicalSkills).map(([cat, items], idx) => (
            <div
              key={cat}
              className="group relative border border-[#2dd4a8]/30 bg-[#05131a]/60 p-6 hover:border-[#73ffb8] transition-all overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(45,212,168,0.1), transparent)",
                }}
              />
              <div className="relative">
                <div className="text-[10px] text-[#2dd4a8] tracking-widest">
                  {String(idx + 1).padStart(2, "0")} / 04
                </div>
                <div className="text-[#73ffb8] text-lg mt-1">{cat}</div>
                <div
                  className="mt-4 flex flex-wrap gap-2"
                  style={{ fontFamily: "'Work Sans', sans-serif" }}
                >
                  {items.map((i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2 py-1 bg-[#1b4332]/60 rounded-sm text-[#c7f9e5]/90"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 px-6 md:px-16 py-24 max-w-7xl mx-auto">
        <div className="text-[10px] tracking-[0.4em] text-[#2dd4a8] mb-4">
          / DEPLOYMENTS
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-[#73ffb8] mb-12">
          PROJECTS
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="border border-[#2dd4a8]/30 bg-[#05131a]/60 p-6 hover:-translate-y-1 hover:border-[#73ffb8] transition-all"
            >
              <div className="text-[10px] text-[#2dd4a8] tracking-widest">
                PRJ_{String(i + 1).padStart(3, "0")}
              </div>
              <h3 className="text-[#73ffb8] text-xl mt-1">{p.title}</h3>
              <p
                className="mt-3 text-sm text-[#c7f9e5]/75"
                style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
                {p.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] uppercase tracking-widest text-[#2dd4a8]"
                  >
                    · {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 px-6 md:px-16 py-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-8">
          <div>
            <div className="text-[10px] tracking-[0.4em] text-[#2dd4a8] mb-4">
              / RECOGNITION
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#73ffb8] leading-none">
              INNOVATION
              <br />
              AWARD 2025
            </h2>
          </div>
          <div
            className="border border-[#c7f9e5]/20 bg-[#1b4332]/30 p-8"
            style={{ boxShadow: "0 0 80px rgba(115,255,184,0.15)" }}
          >
            <p
              className="text-[#c7f9e5]/85 leading-relaxed"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              Awarded for pioneering process-control innovations that reshaped
              operational efficiency and reliability at scale.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {certifications.map((c) => (
                <div
                  key={c.title}
                  className="border border-[#2dd4a8]/30 p-3"
                >
                  <div className="text-[10px] text-[#2dd4a8]">{c.year}</div>
                  <div className="text-sm text-[#73ffb8] leading-tight mt-1">
                    {c.title}
                  </div>
                  <div
                    className="text-[10px] text-[#c7f9e5]/60 mt-1"
                    style={{ fontFamily: "'Work Sans', sans-serif" }}
                  >
                    {c.issuer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 md:px-16 py-24 max-w-7xl mx-auto">
        <div className="text-[10px] tracking-[0.4em] text-[#2dd4a8] mb-4">
          / SIGNAL
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-[#73ffb8] mb-12">
          RECOMMENDATIONS
        </h2>
        <div className="space-y-6">
          {recommendations.map((r) => (
            <div
              key={r.name}
              className="border-l-2 border-[#2dd4a8] bg-[#05131a]/60 p-6 max-w-3xl"
            >
              <div className="flex items-baseline justify-between gap-4 flex-wrap">
                <div className="text-[#73ffb8]">{r.name}</div>
                <div className="text-[10px] text-[#c7f9e5]/50">{r.date}</div>
              </div>
              <div className="text-[10px] text-[#c7f9e5]/60 mb-3 tracking-wide">
                {r.title}
              </div>
              {r.body.map((b, j) => (
                <p
                  key={j}
                  className="text-sm text-[#c7f9e5]/85 mb-2 leading-relaxed"
                  style={{ fontFamily: "'Work Sans', sans-serif" }}
                >
                  {b}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <footer className="relative z-10 px-6 md:px-16 py-12 border-t border-[#2dd4a8]/20 text-[10px] tracking-[0.4em] text-[#c7f9e5]/40">
        CUBE EDITION · MOHAMED EISSA © 2026 · SIX FACES, ONE ENGINEER
      </footer>
    </div>
  );
};

export default IndexCube;
