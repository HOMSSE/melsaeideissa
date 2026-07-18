import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import innovationAwardAsset from "@/assets/innovation-award.jpg.asset.json";
import {
  technicalSkills,
  projects,
  certifications,
  vantagePoints,
  breadth,
  recommendations,
  careerJourney,
} from "@/data/profile";

/* ------------------------------------------------------------------ */
/* Locked tokens (from selected design direction)                     */
/*   emerald deep  #064e3b                                            */
/*   emerald mid   #0d7a5f                                            */
/*   gold          #c9a84c                                            */
/*   cream         #f5f0e0                                            */
/*   ink           #0b1a15                                            */
/* Fonts: JetBrains Mono (display) / Work Sans (body)                 */
/* ------------------------------------------------------------------ */

const mono = { fontFamily: "'JetBrains Mono', ui-monospace, monospace" };

/** Hairline rule that draws in when it scrolls into view. */
const HairRule = ({ className = "" }: { className?: string }) => (
  <div
    aria-hidden
    className={`h-px w-full origin-left ${className}`}
    style={{ background: "#c9a84c", opacity: 0.55 }}
  />
);

/** Section marker: 01 · SECTION LABEL — rotated in the margin on desktop. */
const SectionMarker = ({ n, label }: { n: string; label: string }) => (
  <div
    className="flex items-center gap-3 text-[11px] uppercase tracking-[0.35em]"
    style={{ ...mono, color: "#c9a84c" }}
  >
    <span className="tabular-nums">{n}</span>
    <span className="h-px w-8" style={{ background: "#c9a84c" }} />
    <span className="text-[#f5f0e0]/70">{label}</span>
  </div>
);

/** Count-up numeral for hero stats. */
const CountUp = ({ to, suffix = "" }: { to: number; suffix?: string }) => {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return (
    <span ref={ref} style={mono} className="tabular-nums">
      {n}
      {suffix}
    </span>
  );
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohamed Eissa",
  url: "https://melsaeideissa.com/editorial",
  jobTitle: "Senior Control Systems Engineer",
};

const IndexEditorial = () => {
  return (
    <div
      className="min-h-screen selection:bg-[#c9a84c] selection:text-[#064e3b]"
      style={{
        background: "#064e3b",
        color: "#f5f0e0",
        fontFamily: "'Work Sans', system-ui, sans-serif",
      }}
    >
      <SEO
        title="Mohamed Eissa — Editorial Monograph | Control Systems Engineer"
        description="An editorial view of Mohamed Eissa's control systems practice — DCS, SIS, SCADA, AVEVA PI. Petrochemicals & data centers."
        canonical="https://melsaeideissa.com/editorial"
        jsonLd={personJsonLd}
      />

      {/* ============================================================ */}
      {/* HERO — Deep Emerald Cover (from selected direction)          */}
      {/* ============================================================ */}
      <section
        aria-label="Introduction"
        className="relative min-h-screen w-full flex items-center justify-center px-6 md:px-12 py-24 overflow-hidden"
      >
        {/* Broken grid decoratives */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-12 -left-12 w-64 h-96 border border-[#c9a84c]/20 hidden md:block" />
          <div className="absolute -bottom-8 right-12 w-80 h-40 border-r border-b border-[#0d7a5f]" />
          <div className="absolute top-1/3 left-1/2 w-px h-64 bg-[#c9a84c]/20 hidden lg:block" />
        </div>

        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 relative gap-y-12">
          {/* Innovation badge */}
          <div className="col-span-full z-10">
            <div
              className="inline-flex items-center gap-3 bg-[#c9a84c] text-[#064e3b] px-4 py-1.5 text-[11px] font-bold uppercase"
              style={{ ...mono, letterSpacing: "-0.02em" }}
            >
              <span className="animate-pulse text-base leading-none">●</span>
              Innovation Award 2025 · Advansys Intelligent Solutions
            </div>
          </div>

          {/* Title */}
          <div className="col-span-full md:col-span-9 z-10 relative">
            <h1
              className="text-5xl md:text-8xl font-bold leading-[0.9] uppercase tracking-tighter"
              style={{ ...mono, color: "#f5f0e0" }}
            >
              Mohamed
              <br />
              Eissa
            </h1>

            <div className="mt-10 flex flex-col md:flex-row md:items-end gap-6">
              <div className="w-px h-24 bg-[#c9a84c] hidden md:block" />
              <div>
                <p
                  className="text-[#c9a84c] text-sm tracking-widest uppercase mb-3"
                  style={mono}
                >
                  Senior Control Systems Engineer
                </p>
                <h2 className="text-2xl md:text-3xl text-[#f5f0e0] font-light max-w-xl leading-snug">
                  Architecting resilient automation for{" "}
                  <span className="text-[#c9a84c] italic">
                    petrochemical complexes
                  </span>{" "}
                  and{" "}
                  <span className="text-[#c9a84c] italic">
                    hyperscale data centers
                  </span>
                  .
                </h2>
              </div>
            </div>

            {/* Numeral stats */}
            <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
              {[
                { n: 10, s: "+", l: "Years" },
                { n: 3, s: "", l: "Vantage points" },
                { n: 75, s: "%", l: "Alarm reduction" },
              ].map((x) => (
                <div key={x.l}>
                  <div
                    className="text-4xl md:text-5xl font-bold text-[#f5f0e0]"
                    style={mono}
                  >
                    <CountUp to={x.n} suffix={x.s} />
                  </div>
                  <div
                    className="text-[10px] uppercase tracking-[0.3em] text-[#f5f0e0]/50 mt-2"
                    style={mono}
                  >
                    {x.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Stack sidebar */}
          <div className="col-span-full md:col-span-3 mt-4 md:mt-0 z-10 flex flex-col justify-between">
            <div className="border-t border-[#0d7a5f] pt-6">
              <h3
                className="text-[10px] uppercase tracking-widest text-[#c9a84c] mb-6"
                style={mono}
              >
                Core Stack
              </h3>
              <ul className="space-y-4 text-[#f5f0e0] text-sm">
                {[
                  ["DCS", "Distributed Control"],
                  ["SIS", "Safety Instrumented"],
                  ["SCADA", "Supervisory Systems"],
                  ["PI", "AVEVA Data Infra."],
                ].map(([k, v]) => (
                  <li
                    key={k}
                    className="flex justify-between border-b border-[#0d7a5f]/40 pb-2"
                  >
                    <span className="opacity-60">{k}</span>
                    <span style={mono} className="text-[#f5f0e0]">
                      {v}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 bg-[#0d7a5f]/20 p-6 border-l-2 border-[#c9a84c] relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#c9a84c]/5 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              <p
                className="text-[10px] uppercase tracking-widest text-[#c9a84c] mb-2 relative"
                style={mono}
              >
                Perspective
              </p>
              <p className="text-[#f5f0e0] text-xs leading-relaxed uppercase relative">
                Bridging{" "}
                <span className="text-[#c9a84c]">End User</span> operational
                integrity, <span className="text-[#c9a84c]">Vendor</span>{" "}
                capability, and{" "}
                <span className="text-[#c9a84c]">Integrator</span> precision.
              </p>
            </div>
          </div>

          {/* Floating gold line */}
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent opacity-40" />
        </div>
      </section>

      {/* ============================================================ */}
      {/* 01 · ABOUT / DOSSIER                                         */}
      {/* ============================================================ */}
      <section className="relative px-6 md:px-12 py-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <div className="sticky top-24">
              <SectionMarker n="01" label="Dossier" />
              <h2
                className="mt-8 text-4xl md:text-5xl font-bold leading-none text-[#f5f0e0]"
                style={mono}
              >
                About<br />
                <span className="text-[#c9a84c]">the file.</span>
              </h2>
            </div>
          </div>

          <div className="md:col-span-8 space-y-8">
            <p className="text-lg md:text-xl leading-relaxed text-[#f5f0e0]/90 max-w-2xl">
              Certified Functional Safety Professional with a decade of
              hands-on lifecycle experience across control systems — from
              greenfield engineering and commissioning to alarm rationalization
              and long-term maintenance of industrial automation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div>
                <div
                  className="text-[10px] uppercase tracking-[0.3em] text-[#c9a84c] mb-4"
                  style={mono}
                >
                  Career Journey
                </div>
                <ul className="space-y-3">
                  {careerJourney.map((line) => (
                    <li
                      key={line}
                      className="text-sm text-[#f5f0e0]/80 flex gap-3"
                    >
                      <span
                        className="text-[#c9a84c] flex-shrink-0"
                        style={mono}
                      >
                        →
                      </span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div
                  className="text-[10px] uppercase tracking-[0.3em] text-[#c9a84c] mb-4"
                  style={mono}
                >
                  Core Expertise
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "DCS",
                    "SIS",
                    "SCADA",
                    "Functional Safety",
                    "Alarm Mgmt",
                    "Integration",
                    "Asset Mgmt",
                    "OT Cybersecurity",
                  ].map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 border border-[#c9a84c]/40 text-[11px] text-[#f5f0e0]/90"
                      style={mono}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 02 · THREE VANTAGE POINTS                                    */}
      {/* ============================================================ */}
      <section className="relative px-6 md:px-12 py-28 bg-[#053b2d]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div>
              <SectionMarker n="02" label="Vantage Points" />
              <h2
                className="mt-8 text-4xl md:text-5xl font-bold leading-none"
                style={mono}
              >
                A 360° <span className="text-[#c9a84c]">perspective.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm text-[#f5f0e0]/70 leading-relaxed">
              A decade of working every side of the control systems world — end
              user, global vendor, and system integrator — across industries,
              phases, and specialized teams.
            </p>
          </div>

          <HairRule />

          <div className="grid grid-cols-1 md:grid-cols-3">
            {vantagePoints.map((v, i) => (
              <div
                key={v.role}
                className={`p-8 md:p-10 border-b md:border-b-0 md:border-r border-[#c9a84c]/25 last:border-r-0 group relative overflow-hidden`}
              >
                <div
                  className="absolute -top-4 -right-2 text-[7rem] font-bold text-[#c9a84c]/10 leading-none pointer-events-none select-none"
                  style={mono}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                <v.icon
                  className="w-6 h-6 text-[#c9a84c] mb-6"
                  strokeWidth={1.25}
                />
                <div
                  className="text-[10px] uppercase tracking-[0.3em] text-[#c9a84c] mb-2"
                  style={mono}
                >
                  {v.role}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#f5f0e0]">
                  {v.company}
                </h3>
                <p className="text-sm text-[#f5f0e0]/70 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Breadth grid */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-px bg-[#c9a84c]/25">
            {breadth.map((b) => (
              <div key={b.title} className="bg-[#053b2d] p-8">
                <div className="flex items-start gap-4">
                  <b.icon
                    className="w-6 h-6 text-[#c9a84c] flex-shrink-0 mt-1"
                    strokeWidth={1.25}
                  />
                  <div>
                    <h4 className="text-lg text-[#f5f0e0] mb-1" style={mono}>
                      {b.title}
                    </h4>
                    <p className="text-sm text-[#f5f0e0]/65 mb-3">{b.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {b.items.map((it) => (
                        <span
                          key={it}
                          className="text-[11px] border border-[#c9a84c]/40 px-2 py-0.5 text-[#f5f0e0]/85"
                          style={mono}
                        >
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 03 · TECHNICAL EXPERTISE                                     */}
      {/* ============================================================ */}
      <section className="relative px-6 md:px-12 py-28">
        <div className="max-w-6xl mx-auto">
          <SectionMarker n="03" label="Technical Expertise" />
          <h2
            className="mt-8 mb-16 text-4xl md:text-5xl font-bold leading-none"
            style={mono}
          >
            Instruments of <span className="text-[#c9a84c]">the craft.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {Object.entries(technicalSkills).map(([cat, skills], idx) => (
              <div key={cat} className="group">
                <div className="flex items-baseline justify-between mb-4">
                  <h3 className="text-xl text-[#f5f0e0]" style={mono}>
                    {cat}
                  </h3>
                  <span
                    className="text-[11px] text-[#c9a84c]/70"
                    style={mono}
                  >
                    ({String(idx + 1).padStart(2, "0")}/04)
                  </span>
                </div>
                <div className="h-px w-full bg-[#c9a84c]/25 mb-6" />
                <ul className="space-y-2">
                  {skills.map((s) => (
                    <li
                      key={s}
                      className="flex items-center justify-between text-sm text-[#f5f0e0]/80 py-1.5 border-b border-[#f5f0e0]/5"
                    >
                      <span>{s}</span>
                      <span
                        className="text-[10px] text-[#c9a84c]/70"
                        style={mono}
                      >
                        ●
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 04 · SELECTED PROJECTS                                       */}
      {/* ============================================================ */}
      <section className="relative px-6 md:px-12 py-28 bg-[#053b2d]">
        <div className="max-w-6xl mx-auto">
          <SectionMarker n="04" label="Selected Projects" />
          <h2
            className="mt-8 mb-16 text-4xl md:text-5xl font-bold leading-none"
            style={mono}
          >
            Field <span className="text-[#c9a84c]">record.</span>
          </h2>

          <div className="space-y-0">
            {projects.map((p, i) => (
              <article
                key={p.title}
                className="group grid grid-cols-12 gap-6 py-10 border-t border-[#c9a84c]/25 last:border-b hover:bg-[#064e3b]/40 transition-colors"
              >
                <div
                  className="col-span-12 md:col-span-1 text-[#c9a84c] text-sm"
                  style={mono}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="col-span-12 md:col-span-4">
                  <h3
                    className="text-2xl text-[#f5f0e0] group-hover:text-[#c9a84c] transition-colors"
                    style={mono}
                  >
                    {p.title}
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-5">
                  <p className="text-sm text-[#f5f0e0]/75 leading-relaxed mb-4">
                    {p.description}
                  </p>
                  <p className="text-xs text-[#f5f0e0]/55">
                    <span
                      className="text-[#c9a84c] uppercase tracking-widest mr-2"
                      style={mono}
                    >
                      Contribution
                    </span>
                    {p.contributions}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-2 flex flex-wrap gap-1.5 md:justify-end content-start">
                  {p.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] border border-[#c9a84c]/40 px-2 py-0.5 text-[#f5f0e0]/85 h-fit"
                      style={mono}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 05 · INNOVATION AWARD (Broken grid overlap)                  */}
      {/* ============================================================ */}
      <section className="relative px-6 md:px-12 py-32">
        <div className="max-w-6xl mx-auto grid grid-cols-12 gap-8 relative">
          <div className="col-span-12 md:col-span-5 relative">
            <div className="absolute -top-4 -left-4 w-full h-full border border-[#c9a84c]/40 pointer-events-none" />
            <img
              src={innovationAwardAsset.url}
              alt="Innovation Award 2025 — Advansys Intelligent Solutions"
              className="relative w-full h-auto object-cover grayscale-[15%]"
              loading="lazy"
            />
          </div>

          <div className="col-span-12 md:col-span-7 md:pl-8 flex flex-col justify-center">
            <SectionMarker n="05" label="Honors" />
            <h2
              className="mt-6 text-5xl md:text-6xl font-bold leading-[0.95]"
              style={mono}
            >
              Innovation<br />
              Award{" "}
              <span className="text-[#c9a84c] tabular-nums">2025.</span>
            </h2>
            <p
              className="mt-6 text-[#c9a84c] text-sm uppercase tracking-widest"
              style={mono}
            >
              Advansys Intelligent Solutions
            </p>
            <blockquote className="mt-8 text-lg md:text-xl italic text-[#f5f0e0]/85 leading-relaxed max-w-xl border-l-2 border-[#c9a84c] pl-6">
              "Celebrating your revolutionary ideas & innovative spirit."
            </blockquote>
            <p className="mt-6 text-sm text-[#f5f0e0]/65 max-w-xl leading-relaxed">
              Recognized for driving innovation and bringing transformative
              solutions to industrial automation challenges.
            </p>

            {/* Certifications strip */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((c) => (
                <div
                  key={c.title}
                  className="border border-[#c9a84c]/30 p-5 hover:border-[#c9a84c] transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <c.icon
                      className="w-5 h-5 text-[#c9a84c]"
                      strokeWidth={1.25}
                    />
                    <span
                      className="text-[10px] uppercase tracking-[0.3em] text-[#c9a84c]"
                      style={mono}
                    >
                      Certificate · {c.year}
                    </span>
                  </div>
                  <h4 className="text-sm text-[#f5f0e0] leading-snug mb-1">
                    {c.title}
                  </h4>
                  <div className="text-xs text-[#f5f0e0]/55" style={mono}>
                    {c.issuer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 06 · RECOMMENDATIONS                                         */}
      {/* ============================================================ */}
      <section className="relative px-6 md:px-12 py-28 bg-[#053b2d]">
        <div className="max-w-6xl mx-auto">
          <SectionMarker n="06" label="On the record" />
          <h2
            className="mt-8 mb-16 text-4xl md:text-5xl font-bold leading-none"
            style={mono}
          >
            Words from <span className="text-[#c9a84c]">the field.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recommendations.map((r) => (
              <figure
                key={r.name}
                className="border border-[#c9a84c]/25 p-8 relative bg-[#064e3b]/40"
              >
                <div
                  className="absolute -top-3 left-6 bg-[#053b2d] px-3 text-[10px] uppercase tracking-[0.3em] text-[#c9a84c]"
                  style={mono}
                >
                  {r.date}
                </div>
                <blockquote className="space-y-3 text-[#f5f0e0]/85 text-sm leading-relaxed italic">
                  {r.body.map((p, i) => (
                    <p key={i}>"{p}"</p>
                  ))}
                </blockquote>
                <figcaption className="mt-6 pt-4 border-t border-[#c9a84c]/25 flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-full bg-[#c9a84c] text-[#064e3b] flex items-center justify-center font-bold"
                    style={mono}
                  >
                    {r.initials}
                  </div>
                  <div>
                    <div className="text-[#f5f0e0]" style={mono}>
                      {r.name}
                    </div>
                    <div className="text-xs text-[#f5f0e0]/60">{r.title}</div>
                    <div className="text-[10px] text-[#f5f0e0]/45 mt-0.5">
                      {r.relation}
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 07 · CONTACT / COLOPHON                                      */}
      {/* ============================================================ */}
      <section className="relative px-6 md:px-12 py-32 border-t border-[#c9a84c]/25">
        <div className="max-w-6xl mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7">
            <SectionMarker n="07" label="Correspondence" />
            <h2
              className="mt-8 text-5xl md:text-7xl font-bold leading-[0.9]"
              style={mono}
            >
              Get in<br />
              <span className="text-[#c9a84c] italic font-light">touch.</span>
            </h2>
            <p className="mt-8 max-w-md text-[#f5f0e0]/70 text-sm leading-relaxed">
              For control systems consulting, engineering, or partnership
              inquiries — I read every message personally.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="mailto:mohamed.eissa@email.com"
                className="inline-flex items-center gap-3 bg-[#c9a84c] text-[#064e3b] px-6 py-3 hover:bg-[#f5f0e0] transition-colors text-sm uppercase tracking-widest font-bold"
                style={mono}
              >
                Send Message →
              </a>
              <a
                href="https://www.linkedin.com/in/mohamedeeissa"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 border border-[#c9a84c]/50 text-[#f5f0e0] px-6 py-3 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors text-sm uppercase tracking-widest"
                style={mono}
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <aside className="col-span-12 md:col-span-5 md:pl-8 md:border-l border-[#c9a84c]/25">
            <div
              className="text-[10px] uppercase tracking-[0.3em] text-[#c9a84c] mb-6"
              style={mono}
            >
              Colophon
            </div>
            <dl className="space-y-4 text-sm">
              {[
                ["Set in", "JetBrains Mono / Work Sans"],
                ["Palette", "Emerald · Gold · Cream"],
                ["Base", "Cairo, Egypt"],
                ["Status", "Available for Q3 projects"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between border-b border-[#f5f0e0]/10 pb-2"
                >
                  <dt className="text-[#f5f0e0]/55" style={mono}>
                    {k}
                  </dt>
                  <dd className="text-[#f5f0e0]" style={mono}>
                    {v}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 text-[10px] uppercase tracking-[0.3em] text-[#f5f0e0]/40" style={mono}>
              <div className="flex justify-between">
                <span>© 2025 M. Eissa</span>
                <Link
                  to="/"
                  className="text-[#c9a84c]/70 hover:text-[#c9a84c]"
                >
                  ← Warm edition
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default IndexEditorial;
