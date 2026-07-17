import { Helmet } from "react-helmet-async";
import {
  Rocket,
  Zap,
  ArrowRight,
  Cpu,
  ShieldCheck,
  Layers,
  Factory,
  Building2,
  Server,
  Award,
  Mail,
  Linkedin,
  MapPin,
  Send,
} from "lucide-react";
import {
  technicalSkills,
  projects,
  certifications,
  recommendations,
  vantagePoints,
} from "@/data/profile";
import methanexLogo from "@/assets/methanex-logo.png.asset.json";
import schneiderLogo from "@/assets/schneider-logo.png.asset.json";
import advansysLogo from "@/assets/advansys-logo.png.asset.json";
import awardImg from "@/assets/innovation-award.jpg.asset.json";
import neonPlant from "@/assets/spark-neon-plant.jpg";


/**
 * v9 — SPARK EDITION (refined)
 * Restrained, professional palette — deep navy canvas with a single warm
 * gold accent. Company logos appear in the vantage-point section.
 */

// Palette — one accent, disciplined
const C = {
  bg: "#0a1628",        // deep navy
  bg2: "#0f1e35",       // slightly lifted panel
  ink: "#eef3fb",       // near-white
  mute: "#8b9bb5",      // muted slate
  primary: "#1e3a5f",   // navy tone for surfaces
  primaryGlow: "#c9a961", // warm gold (subdued)
  secondary: "#e0b64a",  // warm gold accent (single hero color)
  accent: "#c9a961",     // same gold family — no color soup
};

const brandLogos = [methanexLogo.url, schneiderLogo.url, advansysLogo.url];

const IndexSpark = () => {
  return (
    <>
      <Helmet>
        <title>Mohamed Eissa — Spark Edition</title>
        <meta
          name="description"
          content="Animated, gradient-mesh portfolio for Mohamed Eissa — instrumentation & control engineer bridging end-user, vendor, and integrator perspectives."
        />
      </Helmet>

      {/* Scoped styles + keyframes so this page is fully self-contained */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap');
        .spark-root {
          --p: ${C.primary};
          --pg: ${C.primaryGlow};
          --s: ${C.secondary};
          --a: ${C.accent};
          --bg: ${C.bg};
          --ink: ${C.ink};
          --mute: ${C.mute};
          color: var(--ink);
          font-family: 'Plus Jakarta Sans', 'Inter', system-ui, sans-serif;
          background: var(--bg);
        }
        .spark-mesh {
          background:
            radial-gradient(circle at 20% 30%, ${C.primary}88 0%, transparent 55%),
            radial-gradient(circle at 82% 18%, ${C.secondary}22 0%, transparent 45%),
            radial-gradient(circle at 40% 85%, ${C.primary}66 0%, transparent 55%);
        }
        .spark-hero-grad {
          background: linear-gradient(135deg, ${C.bg} 0%, ${C.primary} 55%, ${C.bg2} 100%);
          background-size: 300% 300%;
          animation: spark-shift 18s ease infinite;
        }
        .spark-text-grad {
          background: linear-gradient(90deg, ${C.ink} 0%, ${C.secondary} 25%, ${C.ink} 50%, ${C.secondary} 75%, ${C.ink} 100%);
          background-size: 300% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: spark-text-flow 18s linear infinite;
        }
        @keyframes spark-text-flow {
          0% { background-position: 0% 50%; }
          100% { background-position: 300% 50%; }
        }
        .spark-glass {
          background: linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02));
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,0.14);
        }
        .spark-card {
          background: linear-gradient(145deg, rgba(30,58,95,0.55), rgba(15,30,53,0.35));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(201,169,97,0.18);
          transition: transform .35s ease, box-shadow .35s ease, border-color .35s ease;
        }
        .spark-card:hover {
          transform: translateY(-4px);
          border-color: ${C.secondary}80;
          box-shadow: 0 30px 80px -20px rgba(0,0,0,0.6), 0 0 0 1px ${C.secondary}30;
        }
        .spark-btn-primary {
          background: ${C.secondary};
          transition: background .3s ease, transform .3s ease, box-shadow .3s ease;
          box-shadow: 0 20px 50px -12px ${C.secondary}66;
        }
        .spark-btn-primary:hover {
          background: ${C.primaryGlow};
          transform: translateY(-2px);
        }
        .spark-shadow-glow { box-shadow: 0 20px 60px -10px ${C.primary}66; }
        .spark-shadow-hero { box-shadow: 0 40px 90px -20px ${C.primary}88; }

        @keyframes spark-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes spark-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }
        @keyframes spark-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: .55; transform: scale(1.08); }
        }
        @keyframes spark-fade {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spark-scale {
          from { opacity: 0; transform: scale(.92); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes spark-slide {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spark-drift {
          0%, 100% { transform: translateY(0) translateX(0); }
          33% { transform: translateY(-18px) translateX(10px); }
          66% { transform: translateY(10px) translateX(-12px); }
        }
        @keyframes spark-tech-pulse {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 0.45; }
        }
        @keyframes spark-neon-flicker {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.55; }
          75% { opacity: 0.42; }
        }
        .spark-neon-flicker { animation: spark-neon-flicker 5s ease-in-out infinite; }
        .spark-float { animation: spark-float 4s ease-in-out infinite; }
        .spark-pulse { animation: spark-pulse 2.4s ease-in-out infinite; }
        .spark-fade  { animation: spark-fade .8s ease-out both; }
        .spark-scale { animation: spark-scale .6s ease-out both; }
        .spark-slide { animation: spark-slide .9s ease-out both; }
        .spark-drift { animation: spark-drift 10s ease-in-out infinite; }
        .spark-tech-pulse { animation: spark-tech-pulse 6s ease-in-out infinite; }
        .d-100 { animation-delay: .1s; }
        .d-200 { animation-delay: .2s; }
        .d-300 { animation-delay: .3s; }
        .d-500 { animation-delay: .5s; }
        .d-700 { animation-delay: .7s; }
        .industrial-blend {
          mix-blend-mode: luminosity;
          filter: contrast(1.05) brightness(0.55) saturate(0.6);
        }
        .spark-tech-grid {
          background-image: radial-gradient(circle at 1px 1px, rgba(224, 182, 74, 0.22) 1px, transparent 0);
          background-size: 60px 60px;
        }
        .spark-hero-vignette {
          background:
            radial-gradient(circle at center, transparent 0%, rgba(10, 22, 40, 0.32) 78%),
            linear-gradient(180deg, rgba(10, 22, 40, 0.08) 0%, transparent 42%, rgba(10, 22, 40, 0.18) 100%);
        }
        .spark-plant-line {
          opacity: 0.96;
          filter: contrast(1.75) brightness(1.45) saturate(1.08) drop-shadow(0 0 10px rgba(224, 182, 74, 0.34));
        }
        .spark-plant-glow {
          opacity: 0.46;
          filter: blur(2px) contrast(2) brightness(1.8) saturate(1.1);
          mix-blend-mode: screen;
        }
        .spark-plant-readability {
          background:
            linear-gradient(180deg, rgba(10, 22, 40, 0.12) 0%, rgba(10, 22, 40, 0.06) 45%, rgba(10, 22, 40, 0.2) 100%),
            radial-gradient(ellipse at 50% 62%, transparent 0%, transparent 58%, rgba(10, 22, 40, 0.44) 100%);
        }
        .spark-mono {
          font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        }
      `}</style>

      <div className="spark-root min-h-screen">
        {/* ================= HERO ================= */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: C.bg }}>
          {/* neon petrochemical plant illustration */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src={neonPlant}
              alt=""
              aria-hidden="true"
              className="spark-plant-glow absolute inset-0 w-full h-full object-cover object-bottom"
            />
            <img
              src={neonPlant}
              alt=""
              aria-hidden="true"
              className="spark-plant-line absolute inset-0 w-full h-full object-cover object-bottom"
            />
            <div className="spark-plant-readability absolute inset-0" />
          </div>


          {/* subtle gradient overlay */}
          <div className="absolute inset-0 z-[5] pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(10,22,40,0.42) 0%, rgba(10,22,40,0.08) 42%, rgba(10,22,40,0.34) 100%)" }} />

          {/* ambient gold orbs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-[6]">
            <div
              className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full spark-drift"
              style={{
                background: C.secondary,
                filter: "blur(120px)",
                opacity: 0.08,
                mixBlendMode: "screen",
              }}
            />
            <div
              className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full spark-drift d-500"
              style={{
                background: C.secondary,
                filter: "blur(100px)",
                opacity: 0.06,
                mixBlendMode: "screen",
                animationDelay: "-4s",
              }}
            />
            <div
              className="absolute top-2/3 left-[12%] w-3 h-3 rounded-full spark-float"
              style={{ background: `${C.secondary}aa`, boxShadow: `0 0 24px ${C.secondary}` }}
            />
            <div
              className="absolute top-1/3 right-[18%] w-2.5 h-2.5 rounded-full spark-float d-500"
              style={{ background: `${C.secondary}66`, boxShadow: `0 0 26px ${C.secondary}` }}
            />
          </div>

          {/* dark vignette to center focus on content */}
          <div className="absolute inset-0 spark-hero-vignette z-[7]" />

          <div className="relative z-10 text-center px-4 max-w-6xl mx-auto spark-fade">
            <div
              className="text-[11px] tracking-[0.5em] uppercase mb-6 spark-fade d-100"
              style={{ color: C.primaryGlow }}
            >
              End User · Global Vendor · System Integrator
            </div>


            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-8 spark-scale">
              <span className="spark-text-grad">MOHAMED EISSA</span>
            </h1>

            <p
              className="text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed spark-slide d-200"
              style={{ color: `${C.ink}dd` }}
            >
              Instrumentation &amp; Control engineer engineering reliability across{" "}
              <span style={{ color: C.secondary }}>petrochemicals</span> and{" "}
              <span style={{ color: C.accent }}>hyperscale data centers</span> — from
              the plant floor to global vendor L3 to integrator architectures.
            </p>

            {/* Brand logo strip */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 spark-fade d-300">
              {brandLogos.map((url, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center px-2"
                  style={{ minWidth: 140, height: 48 }}
                >
                  <img
                    src={url}
                    alt="brand logo"
                    className="max-h-full max-w-full object-contain opacity-90 hover:opacity-100 transition-opacity"
                  />

                </div>
              ))}
            </div>


            {/* CTA */}
            <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center items-center spark-slide d-300">
              <a
                href="#work"
                className="group relative overflow-hidden rounded-full px-9 py-4 text-lg font-semibold spark-btn-primary spark-shadow-hero"
                style={{ color: "#04121a" }}
              >
                <span className="relative z-10 flex items-center">
                  <Rocket className="h-5 w-5 mr-3 group-hover:animate-pulse" />
                  Explore My Work
                </span>
              </a>
              <a
                href="#contact"
                className="group spark-glass rounded-full px-8 py-4 text-lg font-medium transition-transform hover:scale-105"
              >
                <span className="flex items-center" style={{ color: C.ink }}>
                  <Mail className="h-5 w-5 mr-2" />
                  Get in Touch
                </span>
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 spark-float">
            <div
              className="w-6 h-10 border-2 rounded-full flex justify-center"
              style={{ borderColor: `${C.ink}55` }}
            >
              <div
                className="w-1 h-3 mt-2 rounded-full spark-pulse"
                style={{ background: C.secondary }}
              />
            </div>
          </div>

          {/* bottom neon accent line */}
          <div
            className="absolute bottom-0 left-0 w-full h-px z-10 pointer-events-none"
            style={{
              background: `linear-gradient(90deg, transparent 0%, ${C.secondary} 50%, transparent 100%)`,
              opacity: 0.3,
            }}
          />
        </section>

        {/* ================= VANTAGE POINTS ================= */}
        <section id="work" className="relative py-28 px-4 overflow-hidden">
          <div className="absolute inset-0 spark-mesh opacity-[0.08]" />
          <div className="relative max-w-6xl mx-auto">
            <div className="text-center mb-20 spark-fade">
              <div
                className="text-[11px] tracking-[0.5em] uppercase mb-4"
                style={{ color: C.accent }}
              >
                / Three vantage points
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-6">
                <span className="spark-text-grad">One engineer. Three lenses.</span>
              </h2>
              <p className="text-lg max-w-3xl mx-auto" style={{ color: C.mute }}>
                A rare career arc through the operator's shift, the OEM's global
                support desk, and the integrator's architecture room.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {vantagePoints.map((v, i) => (
                <div
                  key={v.role}
                  className="spark-card rounded-2xl p-8 spark-slide flex flex-col"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  {/* Real logo — transparent, original brand colors */}
                  <div className="mb-6 flex items-center justify-center h-20 px-4">
                    <img
                      src={brandLogos[i]}
                      alt={`${v.company} logo`}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>


                  <div
                    className="text-[10px] tracking-[0.4em] uppercase mb-2"
                    style={{ color: C.secondary }}
                  >
                    0{i + 1} / 03 · {v.role}
                  </div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: C.ink }}>
                    {v.company}
                  </h3>
                  <p className="leading-relaxed" style={{ color: `${C.ink}c0` }}>
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= TOOLBOX ================= */}
        <section className="relative py-28 px-4 overflow-hidden">
          <div className="relative max-w-6xl mx-auto">
            <div className="text-center mb-16 spark-fade">
              <div
                className="text-[11px] tracking-[0.5em] uppercase mb-4"
                style={{ color: C.secondary }}
              >
                / Toolbox
              </div>
              <h2 className="text-4xl md:text-6xl font-black">
                <span className="spark-text-grad">The stack behind the shift.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(technicalSkills).map(([cat, items], i) => {
                const IconMap = [Cpu, ShieldCheck, Layers, Server];
                const Icon = IconMap[i % 4];
                return (
                  <div
                    key={cat}
                    className="spark-card rounded-2xl p-8 spark-slide"
                    style={{ animationDelay: `${i * 0.12}s` }}
                  >
                    <div className="flex items-center gap-4 mb-5">
                      <div className="spark-glass rounded-xl p-3">
                        <Icon className="h-6 w-6" style={{ color: C.primaryGlow }} />
                      </div>
                      <div>
                        <div
                          className="text-[10px] tracking-[0.4em] uppercase"
                          style={{ color: C.accent }}
                        >
                          0{i + 1} / 04
                        </div>
                        <div className="text-xl font-bold" style={{ color: C.ink }}>
                          {cat}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {items.map((it) => (
                        <span
                          key={it}
                          className="text-xs px-3 py-1.5 rounded-full"
                          style={{
                            background: `${C.primary}22`,
                            border: `1px solid ${C.primary}55`,
                            color: `${C.ink}e6`,
                          }}
                        >
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section className="relative py-28 px-4 overflow-hidden">
          <div className="absolute inset-0 spark-mesh opacity-[0.08]" />
          <div className="relative max-w-6xl mx-auto">
            <div className="text-center mb-16 spark-fade">
              <div
                className="text-[11px] tracking-[0.5em] uppercase mb-4"
                style={{ color: C.accent }}
              >
                / Deployments
              </div>
              <h2 className="text-4xl md:text-6xl font-black">
                <span className="spark-text-grad">Projects.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((p, i) => (
                <article
                  key={p.title}
                  className="spark-card rounded-2xl p-8 spark-slide relative overflow-hidden group"
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  <div
                    className="absolute -right-16 -top-16 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                    style={{ background: C.secondary }}
                  />
                  <div
                    className="text-[10px] tracking-[0.4em] uppercase mb-2"
                    style={{ color: C.secondary }}
                  >
                    PRJ_{String(i + 1).padStart(3, "0")}
                  </div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: C.ink }}>
                    {p.title}
                  </h3>
                  <p className="mb-5 leading-relaxed" style={{ color: `${C.ink}c0` }}>
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded"
                        style={{
                          color: C.primaryGlow,
                          border: `1px solid ${C.primary}44`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div
                    className="mt-6 flex items-center text-sm font-semibold group-hover:translate-x-1 transition-transform"
                    style={{ color: C.secondary }}
                  >
                    {p.contributions}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= AWARD + CERTS ================= */}
        <section className="relative py-28 px-4 overflow-hidden">
          <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_2fr] gap-10 items-start">
            <div className="spark-fade">
              <div
                className="text-[11px] tracking-[0.5em] uppercase mb-4"
                style={{ color: C.secondary }}
              >
                / Recognition
              </div>
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
                <span className="spark-text-grad">Innovation Award 2025</span>
              </h2>
              <div className="relative rounded-2xl overflow-hidden spark-shadow-hero group">
                <div
                  className="absolute -inset-4 rounded-3xl blur-2xl opacity-60 spark-pulse -z-10"
                  style={{ background: `${C.secondary}55` }}
                />
                <img
                  src={awardImg.url}
                  alt="Mohamed Eissa — Advansys Innovation Award 2025 trophy"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `linear-gradient(180deg, transparent 55%, ${C.bg}dd 100%)`,
                  }}
                />
                <div className="absolute bottom-4 left-5 flex items-center gap-2">
                  <Award className="h-5 w-5" style={{ color: C.secondary }} />
                  <span
                    className="text-[10px] tracking-[0.4em] uppercase font-semibold"
                    style={{ color: C.ink }}
                  >
                    Advansys · 2025
                  </span>
                </div>
              </div>
              <p className="mt-4" style={{ color: C.mute }}>
                For pioneering process-control innovations reshaping operational
                efficiency at scale.
              </p>
            </div>


            <div className="spark-card rounded-2xl p-8 spark-slide d-200">
              <h3 className="text-xl font-bold mb-6" style={{ color: C.ink }}>
                Certifications
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {certifications.map((c) => (
                  <div
                    key={c.title}
                    className="spark-glass rounded-xl p-5"
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="rounded-lg p-2"
                        style={{ background: `${C.primary}33` }}
                      >
                        <c.icon
                          className="h-5 w-5"
                          style={{ color: C.primaryGlow }}
                        />
                      </div>
                      <div>
                        <div
                          className="text-[10px] tracking-widest uppercase"
                          style={{ color: C.secondary }}
                        >
                          {c.year}
                        </div>
                        <div className="font-semibold mt-1" style={{ color: C.ink }}>
                          {c.title}
                        </div>
                        <div className="text-xs mt-1" style={{ color: C.mute }}>
                          {c.issuer}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= RECOMMENDATIONS ================= */}
        <section className="relative py-28 px-4 overflow-hidden">
          <div className="absolute inset-0 spark-mesh opacity-[0.08]" />
          <div className="relative max-w-6xl mx-auto">
            <div className="text-center mb-16 spark-fade">
              <div
                className="text-[11px] tracking-[0.5em] uppercase mb-4"
                style={{ color: C.accent }}
              >
                / Signal
              </div>
              <h2 className="text-4xl md:text-6xl font-black">
                <span className="spark-text-grad">Recommendations.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {recommendations.map((r, i) => (
                <div
                  key={r.name}
                  className="spark-card rounded-2xl p-8 spark-slide"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center font-bold spark-shadow-glow"
                      style={{
                        background: `linear-gradient(135deg, ${C.primary}, ${C.secondary})`,
                        color: "#04121a",
                      }}
                    >
                      {r.initials}
                    </div>
                    <div>
                      <div className="font-bold" style={{ color: C.ink }}>
                        {r.name}
                      </div>
                      <div className="text-xs" style={{ color: C.mute }}>
                        {r.title}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {r.body.map((b, j) => (
                      <p key={j} className="text-sm leading-relaxed" style={{ color: `${C.ink}cc` }}>
                        {b}
                      </p>
                    ))}
                  </div>
                  <div className="mt-4 text-[10px] tracking-widest uppercase" style={{ color: C.secondary }}>
                    {r.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="relative py-28 px-4 overflow-hidden">
          <div className="absolute inset-0 spark-hero-grad opacity-60" />
          <div className="absolute inset-0 spark-mesh opacity-70" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, transparent 0%, rgba(4,18,26,0.7) 85%)",
            }}
          />

          <div className="relative max-w-4xl mx-auto text-center spark-fade">
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-full blur-xl spark-pulse"
                  style={{ background: `${C.secondary}66` }}
                />
                <div className="relative spark-glass rounded-full p-4">
                  <Zap className="h-8 w-8" style={{ color: C.secondary }} />
                </div>
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="spark-text-grad">Let's build something reliable.</span>
            </h2>
            <p className="text-lg md:text-xl mb-12" style={{ color: `${C.ink}dd` }}>
              Ready to talk automation, safety systems, or your next data-center
              or petrochem project? Reach out and let's connect.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {[
                { icon: Mail, label: "Email", value: "mohamed@eissa.dev", href: "mailto:hello@example.com" },
                { icon: Linkedin, label: "LinkedIn", value: "mohamed-eissa", href: "https://www.linkedin.com" },
                { icon: MapPin, label: "Based in", value: "Egypt", href: null as string | null },
              ].map((c, i) => {
                const Wrap: any = c.href ? "a" : "div";
                return (
                  <Wrap
                    key={c.label}
                    href={c.href || undefined}
                    target={c.href ? "_blank" : undefined}
                    rel={c.href ? "noopener noreferrer" : undefined}
                    className="spark-glass rounded-2xl p-6 block spark-slide"
                    style={{ animationDelay: `${i * 0.12}s` }}
                  >
                    <div className="flex justify-center mb-3">
                      <div
                        className="rounded-full p-3"
                        style={{ background: `${C.primary}33` }}
                      >
                        <c.icon className="h-6 w-6" style={{ color: C.secondary }} />
                      </div>
                    </div>
                    <div className="text-[10px] tracking-widest uppercase" style={{ color: C.accent }}>
                      {c.label}
                    </div>
                    <div className="font-semibold mt-1" style={{ color: C.ink }}>
                      {c.value}
                    </div>
                  </Wrap>
                );
              })}
            </div>

            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-lg font-bold spark-btn-primary spark-shadow-hero"
              style={{ color: "#04121a" }}
            >
              <Send className="h-5 w-5" />
              Start the conversation
            </a>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer
          className="py-10 px-4 border-t text-center"
          style={{
            borderColor: `${C.primary}33`,
            color: C.mute,
            fontSize: 12,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
          }}
        >
          Spark Edition · Mohamed Eissa © {new Date().getFullYear()}
        </footer>
      </div>
    </>
  );
};

export default IndexSpark;
