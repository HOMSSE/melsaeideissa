import { useEffect, useRef, useState } from "react";
import refineryAsset from "@/assets/refinery-blueprint.jpg.asset.json";
import powerAsset from "@/assets/power-blueprint.jpg.asset.json";
import waterAsset from "@/assets/water-blueprint.png.asset.json";
import awardAsset from "@/assets/innovation-award.jpg.asset.json";
import methanexLogo from "@/assets/methanex-logo.png.asset.json";
import schneiderLogo from "@/assets/schneider-logo.png.asset.json";
import advansysLogo from "@/assets/advansys-logo.png.asset.json";
import {
  technicalSkills,
  projects,
  certifications,
  vantagePoints,
  breadth,
  recommendations,
} from "@/data/profile";
import SEO from "@/components/SEO";

/* v10 — Living Control Room
   Full-bleed dark HMI aesthetic. Cyan blueprints breathe (glow pulse + slow
   parallax). As you scroll, the hero scene crossfades between the three
   industrial scenes to literally show the breadth of Mohamed's work. Warm
   amber signal accents keep it friendly, not clinical. */

const scenes = [
  { src: refineryAsset.url, label: "Refinery — Petrochemicals" },
  { src: powerAsset.url, label: "Power — Utilities" },
  { src: waterAsset.url, label: "Process — Data Centers & Utilities" },
];

const tickerTags = [
  "DCS · Foxboro I/A",
  "SIS · Triconex",
  "SCADA · WinCC OA",
  "AVEVA System Platform",
  "AVEVA PI",
  "Bently Nevada 3500",
  "Maximo CMMS",
  "ISA/IEC 62443",
];

export default function IndexControlRoom() {
  const [sceneIdx, setSceneIdx] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  // Auto-crossfade scenes every 6s
  useEffect(() => {
    const t = setInterval(() => setSceneIdx((i) => (i + 1) % scenes.length), 6000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="min-h-screen text-[#e6f7ff]"
      style={{
        background:
          "radial-gradient(1200px 800px at 50% -10%, #0b2230 0%, #050b12 55%, #02060a 100%)",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <SEO
        title="Mohamed Eissa — Control Systems Engineer | DCS · SIS · SCADA"
        description="A decade engineering DCS, SIS and SCADA systems across petrochemicals and data centers — as end user, vendor and system integrator."
      />

      {/* Global HMI grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(94,234,212,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(94,234,212,.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at 50% 30%, #000 40%, transparent 85%)",
        }}
      />

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-[100vh] overflow-hidden pt-20"
      >
        {/* Blueprint stack */}
        <div className="absolute inset-0">
          {scenes.map((s, i) => (
            <img
              key={s.src}
              src={s.src}
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full object-contain object-center transition-opacity duration-[2000ms] ease-in-out"
              style={{
                opacity: i === sceneIdx ? 0.85 : 0,
                transform: `translateY(${scrollY * -0.15}px) scale(${1 + scrollY * 0.0003})`,
                filter:
                  "drop-shadow(0 0 40px rgba(94,234,212,0.35)) drop-shadow(0 0 12px rgba(94,234,212,0.5))",
                mixBlendMode: "screen",
              }}
            />
          ))}
        </div>

        {/* Scan-line sweep */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(94,234,212,0.08) 50%, transparent 100%)",
            backgroundSize: "100% 6px",
            animation: "hmiScan 8s linear infinite",
          }}
        />

        {/* Vignette */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, transparent 30%, rgba(2,6,10,0.75) 85%)",
          }}
        />

        {/* Hero copy */}
        <div className="relative z-10 mx-auto flex min-h-[100vh] max-w-6xl flex-col justify-center px-6 pb-24">
          <div
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] uppercase tracking-[0.25em]"
            style={{
              borderColor: "rgba(94,234,212,0.35)",
              background: "rgba(5,19,26,0.6)",
              color: "#5eead4",
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
            }}
          >
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{
                background: "#5eead4",
                boxShadow: "0 0 10px #5eead4",
                animation: "hmiPulse 1.6s ease-in-out infinite",
              }}
            />
            Live · Control Systems Engineer
          </div>

          <h1
            className="text-[clamp(2.6rem,7vw,5.5rem)] font-semibold leading-[1.02] tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Mohamed Eissa
            <br />
            <span
              style={{
                background:
                  "linear-gradient(90deg, #5eead4 0%, #e6f7ff 50%, #f5b642 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "200% 100%",
                animation: "hmiShimmer 14s ease-in-out infinite",
              }}
            >
              engineers the invisible layer
            </span>
            <br />
            of industry.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-[#c7f9e5]/80">
            A decade at the console, in the panel room and in the design office
            — building DCS, SIS and SCADA systems that keep methanol plants,
            power stations and data centers running.
          </p>

          {/* Scene indicator */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            {scenes.map((s, i) => (
              <button
                key={s.label}
                onClick={() => setSceneIdx(i)}
                className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] transition-colors"
                style={{
                  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                  color: i === sceneIdx ? "#f5b642" : "rgba(199,249,229,0.5)",
                }}
              >
                <span
                  className="h-[2px] transition-all duration-500"
                  style={{
                    width: i === sceneIdx ? 40 : 16,
                    background:
                      i === sceneIdx ? "#f5b642" : "rgba(199,249,229,0.35)",
                    boxShadow:
                      i === sceneIdx ? "0 0 10px #f5b642" : "none",
                  }}
                />
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom ticker */}
        <div
          className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden border-y py-3 backdrop-blur-sm"
          style={{
            borderColor: "rgba(94,234,212,0.2)",
            background: "rgba(2,6,10,0.75)",
          }}
        >
          <div
            className="flex whitespace-nowrap"
            style={{
              animation: "hmiMarquee 45s linear infinite",
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
            }}
          >
            {[...tickerTags, ...tickerTags, ...tickerTags].map((t, i) => (
              <span
                key={i}
                className="mx-8 text-[11px] uppercase tracking-[0.25em] text-[#5eead4]/70"
              >
                ◆ {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* THREE HATS */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-32">
        <SectionLabel n="01" text="Three vantage points" />
        <h2 className="mt-4 text-4xl font-semibold sm:text-5xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Same industry.<br />
          <span style={{ color: "#5eead4" }}>Three sides of the panel.</span>
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {vantagePoints.map((v, i) => {
            const logo =
              i === 0 ? methanexLogo.url : i === 1 ? schneiderLogo.url : advansysLogo.url;
            return (
              <div
                key={v.role}
                className="group relative overflow-hidden rounded-2xl border p-7 transition-transform duration-500 hover:-translate-y-1"
                style={{
                  borderColor: "rgba(94,234,212,0.2)",
                  background:
                    "linear-gradient(160deg, rgba(94,234,212,0.06), rgba(5,19,26,0.6))",
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(400px circle at 50% 0%, rgba(245,182,66,0.15), transparent 60%)",
                  }}
                />
                <div className="relative flex h-14 items-center">
                  <img src={logo} alt={v.company} className="max-h-10 max-w-[140px] object-contain" />
                </div>
                <div
                  className="relative mt-6 text-[10px] uppercase tracking-[0.25em] text-[#5eead4]"
                  style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}
                >
                  Role · {v.role}
                </div>
                <p className="relative mt-3 text-sm leading-relaxed text-[#c7f9e5]/75">
                  {v.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* BREADTH GRID */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <SectionLabel n="02" text="Breadth of practice" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {breadth.map((b) => (
            <div
              key={b.title}
              className="rounded-xl border p-5"
              style={{
                borderColor: "rgba(94,234,212,0.18)",
                background: "rgba(5,19,26,0.55)",
              }}
            >
              <b.icon className="h-6 w-6" style={{ color: "#f5b642" }} />
              <div className="mt-3 text-xs uppercase tracking-widest text-[#5eead4]" style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}>
                {b.title}
              </div>
              <ul className="mt-3 space-y-1 text-sm text-[#e6f7ff]/90">
                {b.items.map((it) => (
                  <li key={it}>· {it}</li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-[#c7f9e5]/55">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <SectionLabel n="03" text="Instrumentation stack" />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {Object.entries(technicalSkills).map(([cat, items]) => (
            <div
              key={cat}
              className="rounded-xl border p-6"
              style={{
                borderColor: "rgba(94,234,212,0.18)",
                background:
                  "linear-gradient(140deg, rgba(94,234,212,0.05), rgba(5,19,26,0.6))",
              }}
            >
              <div className="text-lg font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {cat}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((it) => (
                  <span
                    key={it}
                    className="rounded-full border px-3 py-1 text-xs"
                    style={{
                      borderColor: "rgba(94,234,212,0.25)",
                      color: "#c7f9e5",
                      background: "rgba(94,234,212,0.06)",
                      fontFamily: "'JetBrains Mono', ui-monospace, monospace",
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

      {/* PROJECTS */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <SectionLabel n="04" text="Field-tested projects" />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="rounded-xl border p-6"
              style={{
                borderColor: "rgba(94,234,212,0.18)",
                background: "rgba(5,19,26,0.55)",
              }}
            >
              <h3 className="text-xl font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#c7f9e5]/75">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-widest"
                    style={{
                      borderColor: "rgba(245,182,66,0.35)",
                      color: "#f5b642",
                      fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-xs text-[#c7f9e5]/55">{p.contributions}</p>
            </article>
          ))}
        </div>
      </section>

      {/* AWARD */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <SectionLabel n="05" text="Recognition" />
        <div
          className="mt-10 grid gap-8 rounded-2xl border p-8 md:grid-cols-[280px_1fr] md:items-center"
          style={{
            borderColor: "rgba(245,182,66,0.35)",
            background:
              "linear-gradient(135deg, rgba(245,182,66,0.1), rgba(5,19,26,0.6))",
          }}
        >
          <img
            src={awardAsset.url}
            alt="Innovation Award 2025"
            className="w-full rounded-xl object-cover"
            style={{ boxShadow: "0 0 40px rgba(245,182,66,0.35)" }}
          />
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#f5b642]" style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}>
              Innovation Award · 2025
            </div>
            <h3 className="mt-3 text-3xl font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Advansys Intelligent Solutions
            </h3>
            <p className="mt-4 max-w-xl text-[#c7f9e5]/80">
              Recognized for original thinking applied to real-world control
              system challenges — turning field experience into repeatable,
              engineered solutions.
            </p>
          </div>
        </div>
      </section>

      {/* CERTS */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <SectionLabel n="06" text="Certifications" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {certifications.map((c) => (
            <div
              key={c.title}
              className="flex items-center gap-4 rounded-xl border p-5"
              style={{
                borderColor: "rgba(94,234,212,0.2)",
                background: "rgba(5,19,26,0.55)",
              }}
            >
              <c.icon className="h-8 w-8" style={{ color: "#5eead4" }} />
              <div>
                <div className="font-semibold">{c.title}</div>
                <div className="text-xs text-[#c7f9e5]/60">
                  {c.issuer} · {c.year}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RECOMMENDATIONS */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <SectionLabel n="07" text="Recommendations" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {recommendations.map((r) => (
            <blockquote
              key={r.name}
              className="rounded-xl border p-6"
              style={{
                borderColor: "rgba(94,234,212,0.2)",
                background: "rgba(5,19,26,0.55)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold"
                  style={{
                    background:
                      "linear-gradient(135deg, #5eead4, #f5b642)",
                    color: "#02060a",
                  }}
                >
                  {r.initials}
                </div>
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-xs text-[#c7f9e5]/60">{r.title}</div>
                </div>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#e6f7ff]/85">
                {r.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-4 text-[10px] uppercase tracking-widest text-[#c7f9e5]/50" style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}>
                {r.date} · {r.relation}
              </div>
            </blockquote>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t py-10 text-center text-xs text-[#c7f9e5]/50" style={{ borderColor: "rgba(94,234,212,0.15)", fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}>
        SYSTEM · MOHAMED EISSA · UPTIME 10+ YEARS · v10 CONTROL ROOM
      </footer>

      <style>{`
        @keyframes hmiPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.85)} }
        @keyframes hmiScan { 0%{background-position:0 -100vh} 100%{background-position:0 100vh} }
        @keyframes hmiShimmer { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes hmiMarquee { 0%{transform:translateX(0)} 100%{transform:translateX(-33.333%)} }
      `}</style>
    </div>
  );
}

function SectionLabel({ n, text }: { n: string; text: string }) {
  return (
    <div
      className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#5eead4]"
      style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}
    >
      <span>[{n}]</span>
      <span className="h-px flex-1 max-w-[80px]" style={{ background: "rgba(94,234,212,0.4)" }} />
      <span>{text}</span>
    </div>
  );
}
