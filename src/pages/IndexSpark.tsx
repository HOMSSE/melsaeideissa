import { Helmet } from "react-helmet-async";
import {
  Sparkles,
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
          background: linear-gradient(90deg, ${C.ink} 0%, ${C.secondary} 55%, ${C.ink} 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .spark-glass {
          background: linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02));
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,0.14);
        }
        .spark-card {
          background: linear-gradient(145deg, rgba(20,184,166,0.10), rgba(34,211,238,0.04));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(94,234,212,0.18);
          transition: transform .35s ease, box-shadow .35s ease, border-color .35s ease;
        }
        .spark-card:hover {
          transform: translateY(-6px) scale(1.02);
          border-color: ${C.secondary}80;
          box-shadow: 0 30px 80px -20px ${C.primary}66, 0 0 0 1px ${C.secondary}30;
        }
        .spark-btn-primary {
          background: linear-gradient(90deg, ${C.primary}, ${C.accent}, ${C.secondary});
          background-size: 200% 100%;
          transition: background-position .5s ease, transform .3s ease, box-shadow .3s ease;
          box-shadow: 0 20px 50px -12px ${C.primary}88;
        }
        .spark-btn-primary:hover {
          background-position: 100% 0;
          transform: translateY(-2px) scale(1.03);
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
        .spark-float { animation: spark-float 4s ease-in-out infinite; }
        .spark-pulse { animation: spark-pulse 2.4s ease-in-out infinite; }
        .spark-fade  { animation: spark-fade .8s ease-out both; }
        .spark-scale { animation: spark-scale .6s ease-out both; }
        .spark-slide { animation: spark-slide .9s ease-out both; }
        .d-100 { animation-delay: .1s; }
        .d-200 { animation-delay: .2s; }
        .d-300 { animation-delay: .3s; }
        .d-500 { animation-delay: .5s; }
        .d-700 { animation-delay: .7s; }
      `}</style>

      <div className="spark-root min-h-screen">
        {/* ================= HERO ================= */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* animated gradient */}
          <div className="absolute inset-0 spark-hero-grad opacity-70" />
          {/* mesh overlay */}
          <div className="absolute inset-0 spark-mesh opacity-90" />
          {/* dark vignette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, transparent 0%, rgba(4,18,26,0.75) 80%)",
            }}
          />

          {/* floating orbs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="absolute top-1/4 left-[12%] w-4 h-4 rounded-full spark-float"
              style={{ background: `${C.secondary}aa`, boxShadow: `0 0 30px ${C.secondary}` }}
            />
            <div
              className="absolute top-2/3 right-[18%] w-6 h-6 rounded-full spark-float d-500"
              style={{ background: `${C.accent}88`, boxShadow: `0 0 40px ${C.accent}` }}
            />
            <div
              className="absolute top-1/2 left-3/4 w-3 h-3 rounded-full spark-float d-300"
              style={{ background: `${C.primaryGlow}aa`, boxShadow: `0 0 25px ${C.primaryGlow}` }}
            />
            <div
              className="absolute top-[15%] right-1/3 w-5 h-5 rounded-full spark-float d-700"
              style={{ background: `${C.primary}88`, boxShadow: `0 0 30px ${C.primary}` }}
            />
          </div>

          <div className="relative z-10 text-center px-4 max-w-6xl mx-auto spark-fade">
            {/* Icon */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-2xl blur-xl spark-pulse"
                  style={{ background: `${C.secondary}55` }}
                />
                <div className="relative spark-glass p-4 rounded-2xl spark-shadow-glow">
                  <Sparkles className="h-12 w-12 spark-float" style={{ color: C.secondary }} />
                </div>
              </div>
            </div>

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
                  className="spark-card rounded-2xl p-8 spark-slide"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className="mb-6 relative w-fit">
                    <div
                      className="absolute inset-0 rounded-2xl blur-xl"
                      style={{ background: `${C.primary}44` }}
                    />
                    <div className="relative spark-glass p-4 rounded-2xl">
                      <v.icon className="h-8 w-8" style={{ color: C.secondary }} />
                    </div>
                  </div>
                  <div
                    className="text-[10px] tracking-[0.4em] uppercase mb-2"
                    style={{ color: C.accent }}
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
              <div className="relative w-fit mb-6">
                <div
                  className="absolute inset-0 rounded-2xl blur-2xl spark-pulse"
                  style={{ background: `${C.secondary}77` }}
                />
                <div className="relative spark-glass rounded-2xl p-5">
                  <Award className="h-10 w-10" style={{ color: C.secondary }} />
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                <span className="spark-text-grad">Innovation Award 2025</span>
              </h2>
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
