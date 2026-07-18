import { useEffect, useState } from "react";
import refineryAsset from "@/assets/refinery-plant-blueprint.png.asset.json";
import powerAsset from "@/assets/power-plant-blueprint.png.asset.json";
import waterAsset from "@/assets/datacenter-blueprint-labeled.png.asset.json";
import awardAsset from "@/assets/innovation-award.jpg.asset.json";
import methanexLogo from "@/assets/methanex-logo-original.png.asset.json";
import schneiderLogo from "@/assets/schneider-logo.png.asset.json";
import advansysLogo from "@/assets/advansys-logo.png.asset.json";
import {
  technicalSkills,
  projects,
  certifications,
  recommendations,
} from "@/data/profile";
import SEO from "@/components/SEO";

/* v11 — Three Hats
   The page morphs palette + scene per role as you scroll. Product logos
   orbit each hat as constellations. Warm, cinematic, memorable. */

type Hat = {
  key: string;
  role: string;
  company: string;
  companyDetail: string;
  logo: string;
  blueprint: string;
  bg: string;
  accent: string;
  accentSoft: string;
  narrative: string;
  products: string[];
};

const hats: Hat[] = [
  {
    key: "enduser",
    role: "End User",
    company: "Methanex",
    companyDetail: "World's largest methanol producer",
    logo: methanexLogo.url,
    blueprint: refineryAsset.url,
    bg: "radial-gradient(1200px 800px at 30% 20%, #1a2a3a 0%, #0a1420 55%, #050a12 100%)",
    accent: "#5eead4",
    accentSoft: "rgba(94,234,212,0.15)",
    narrative:
      "Ran DCS, SIS and rotating-machinery systems from inside the plant. Felt uptime as revenue, not as a KPI. Owned Foxboro I/A, Triconex ESD and Bently Nevada 3500 through daily operations, shutdowns and turnarounds.",
    products: ["Foxboro I/A DCS", "Triconex ESD", "Bently Nevada 3500", "AVEVA PI"],
  },
  {
    key: "vendor",
    role: "Global Vendor",
    company: "Schneider Electric",
    companyDetail: "Expert Customer Support · Global team",
    logo: schneiderLogo.url,
    blueprint: powerAsset.url,
    bg: "radial-gradient(1200px 800px at 70% 20%, #0f2818 0%, #06180f 55%, #030a08 100%)",
    accent: "#7ee6a8",
    accentSoft: "rgba(126,230,168,0.15)",
    narrative:
      "Moved to the source. As an Expert Customer Support engineer on the global team, resolved DCS and SIS issues for customers on multiple continents. Deep-mastered the platforms I once operated.",
    products: ["Foxboro Evo", "Triconex Tristation", "AVEVA System Platform", "Global CSE Team"],
  },
  {
    key: "integrator",
    role: "System Integrator",
    company: "Advansys Intelligent Solutions",
    companyDetail: "Senior Application Design Engineer",
    logo: advansysLogo.url,
    blueprint: waterAsset.url,
    bg: "radial-gradient(1200px 800px at 50% 30%, #0a1030 0%, #05081c 55%, #02030a 100%)",
    accent: "#22d3ee",
    accentSoft: "rgba(34,211,238,0.15)",
    narrative:
      "Now designing SCADA systems for hyperscale data centers. Bridging vendor technology with real-world client needs — and this year, recognized with an Innovation Award for that work.",
    products: ["WinCC OA SCADA", "AVEVA System Platform", "Data Center SCADA", "Custom Applications"],
  },
];

export default function IndexThreeHats() {
  const [activeHat, setActiveHat] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const sections = hats.map((h) => document.getElementById(`hat-${h.key}`));
      const mid = window.innerHeight * 0.4;
      let bestIdx = 0;
      let bestDist = Infinity;
      sections.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const d = Math.abs(rect.top + rect.height / 2 - mid - window.innerHeight * 0.1);
        if (d < bestDist) {
          bestDist = d;
          bestIdx = i;
        }
      });
      setActiveHat(bestIdx);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const hat = hats[activeHat];

  return (
    <div
      className="min-h-screen text-white transition-[background] duration-[1500ms] ease-out"
      style={{
        background: hat.bg,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <SEO
        title="Mohamed Eissa — End User · Vendor · Integrator"
        description="One control systems engineer, three vantage points: Methanex end-user, Schneider Electric global vendor, Advansys system integrator."
      />

      {/* Ambient blueprint that changes with the active hat */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        {hats.map((h, i) => (
          <img
            key={h.key}
            src={h.blueprint}
            alt=""
            className="absolute top-1/2 right-0 h-[130vh] w-auto max-w-none -translate-y-1/2 translate-x-[12%] transition-opacity duration-[1500ms]"
            style={{
              opacity: i === activeHat ? 0.85 : 0,
              mixBlendMode: "screen",
              filter: `drop-shadow(0 0 40px ${h.accent}55) brightness(1.05) contrast(1.05)`,
              WebkitMaskImage:
                "radial-gradient(ellipse 60% 65% at 55% 50%, #000 40%, rgba(0,0,0,0.65) 65%, transparent 90%)",
              maskImage:
                "radial-gradient(ellipse 60% 65% at 55% 50%, #000 40%, rgba(0,0,0,0.65) 65%, transparent 90%)",
            }}
          />
        ))}
      </div>


      {/* Fixed side stepper */}
      <nav className="fixed left-4 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-4 md:flex">
        {hats.map((h, i) => (
          <a
            key={h.key}
            href={`#hat-${h.key}`}
            className="group flex items-center gap-3"
            style={{
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
            }}
          >
            <span
              className="h-[2px] transition-all duration-500"
              style={{
                width: i === activeHat ? 32 : 12,
                background: i === activeHat ? h.accent : "rgba(255,255,255,0.3)",
                boxShadow: i === activeHat ? `0 0 10px ${h.accent}` : "none",
              }}
            />
            <span
              className="text-[10px] uppercase tracking-widest transition-opacity"
              style={{
                color: i === activeHat ? h.accent : "rgba(255,255,255,0.4)",
                opacity: i === activeHat ? 1 : 0.6,
              }}
            >
              {h.role}
            </span>
          </a>
        ))}
      </nav>

      {/* HERO */}
      <section className="relative z-10 flex min-h-[92vh] items-center px-6 pt-24">
        <div className="mx-auto max-w-5xl">
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] transition-colors duration-1000"
            style={{
              borderColor: hat.accent + "66",
              color: hat.accent,
              background: "rgba(0,0,0,0.4)",
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
            }}
          >
            <span
              className="inline-block h-2 w-2 rounded-full transition-colors duration-1000"
              style={{ background: hat.accent, boxShadow: `0 0 10px ${hat.accent}` }}
            />
            Currently viewing · {hat.role}
          </div>

          <h1
            className="text-[clamp(2.8rem,8vw,6rem)] font-semibold leading-[1]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            One engineer.
            <br />
            <span
              className="transition-colors duration-1000"
              style={{ color: hat.accent }}
            >
              Three hats.
            </span>
            <br />
            Eleven years.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/75">
            Mohamed Eissa has run the plant, supported the vendor, and now
            designs the systems. Same instrumentation. Three vantage points.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {hats.map((h, i) => (
              <a
                key={h.key}
                href={`#hat-${h.key}`}
                className="rounded-full border px-4 py-2 text-xs uppercase tracking-widest transition-all"
                style={{
                  borderColor: i === activeHat ? hat.accent : "rgba(255,255,255,0.2)",
                  color: i === activeHat ? hat.accent : "rgba(255,255,255,0.7)",
                  background: i === activeHat ? hat.accentSoft : "transparent",
                  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                }}
              >
                {h.role}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* HAT SECTIONS */}
      {hats.map((h, i) => (
        <section
          key={h.key}
          id={`hat-${h.key}`}
          className="relative z-10 min-h-[90vh] px-6 py-32"
        >
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            {/* Left: role card */}
            <div>
              <div
                className="text-[10px] uppercase tracking-[0.3em]"
                style={{ color: h.accent, fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}
              >
                Hat · 0{i + 1} of 03
              </div>
              <div className="mt-6 inline-flex h-24 items-center rounded-xl bg-white px-2 py-1.5 shadow-lg">
                <img src={h.logo} alt={h.company} className="h-full w-auto max-w-[320px] object-contain" />
              </div>
              <h2 className="mt-6 text-4xl font-semibold sm:text-5xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                As{" "}
                {h.key === "enduser" ? (
                  <span style={{ color: "rgb(0,167,205)" }}>{h.role}</span>
                ) : (
                  <span style={{ color: h.accent }}>{h.role}</span>
                )}
              </h2>
              <div className="mt-1 text-sm text-white/60">{h.companyDetail}</div>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80">
                {h.narrative}
              </p>
            </div>

            {/* Right: product constellation */}
            <div className="relative min-h-[400px]">
              <div
                className="absolute inset-0 rounded-3xl border backdrop-blur-sm"
                style={{
                  borderColor: h.accent + "40",
                  background: `linear-gradient(160deg, ${h.accentSoft}, rgba(0,0,0,0.3))`,
                }}
              />
              <div className="relative p-8">
                <div className="text-[10px] uppercase tracking-widest text-white/50" style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}>
                  Products & platforms
                </div>
                <ul className="mt-6 space-y-3">
                  {h.products.map((p, j) => (
                    <li
                      key={p}
                      className="flex items-center gap-3 rounded-xl border p-4 transition-transform hover:translate-x-1"
                      style={{
                        borderColor: h.accent + "33",
                        background: "rgba(0,0,0,0.35)",
                        animation: `hatFloat ${4 + j * 0.5}s ease-in-out ${j * 0.3}s infinite`,
                      }}
                    >
                      <span
                        className="inline-block h-2 w-2 rounded-full"
                        style={{ background: h.accent, boxShadow: `0 0 8px ${h.accent}` }}
                      />
                      <span className="font-medium">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CONVERGENCE */}
      <section className="relative z-10 px-6 py-32">
        <div className="mx-auto max-w-5xl text-center">
          <div className="flex justify-center gap-4">
            {hats.map((h) => (
              <div
                key={h.key}
                className="h-2 w-2 rounded-full"
                style={{ background: h.accent, boxShadow: `0 0 12px ${h.accent}` }}
              />
            ))}
          </div>
          <h2 className="mt-8 text-4xl font-semibold sm:text-5xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            The three hats compound.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/75">
            Operator instinct. Vendor depth. Integrator design sense. Together
            they produce control systems that hold up in the field — because the
            field is where they were born.
          </p>
        </div>
      </section>

      {/* AWARD */}
      <section className="relative z-10 px-6 py-24">
        <div
          className="mx-auto grid max-w-5xl gap-8 rounded-3xl border p-8 md:grid-cols-[280px_1fr] md:items-center"
          style={{
            borderColor: "rgba(245,182,66,0.4)",
            background: "linear-gradient(135deg, rgba(245,182,66,0.15), rgba(0,0,0,0.4))",
          }}
        >
          <img
            src={awardAsset.url}
            alt="Innovation Award 2025"
            className="w-full rounded-2xl"
            style={{ boxShadow: "0 0 50px rgba(245,182,66,0.4)" }}
          />
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#f5b642]" style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}>
              Innovation Award · 2025
            </div>
            <h3 className="mt-3 text-3xl font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Advansys Intelligent Solutions
            </h3>
            <p className="mt-4 text-white/80">
              Recognized for turning a decade of field experience into original,
              engineered solutions.
            </p>
          </div>
        </div>
      </section>

      {/* TECH & PROJECTS */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-3xl font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Instrumentation stack
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {Object.entries(technicalSkills).map(([cat, items]) => (
            <div
              key={cat}
              className="rounded-xl border p-6"
              style={{ borderColor: "rgba(255,255,255,0.12)", background: "rgba(0,0,0,0.4)" }}
            >
              <div className="text-lg font-semibold">{cat}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((it) => (
                  <span
                    key={it}
                    className="rounded-full border px-3 py-1 text-xs"
                    style={{
                      borderColor: "rgba(255,255,255,0.2)",
                      color: "rgba(255,255,255,0.85)",
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

        <h2 className="mt-20 text-3xl font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Projects
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="rounded-xl border p-6"
              style={{ borderColor: "rgba(255,255,255,0.12)", background: "rgba(0,0,0,0.4)" }}
            >
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm text-white/75">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-widest text-[#f5b642]"
                    style={{
                      borderColor: "rgba(245,182,66,0.4)",
                      fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-xs text-white/55">{p.contributions}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CERTS */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-3xl font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Certifications
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {certifications.map((c) => (
            <div
              key={c.title}
              className="flex items-center gap-4 rounded-xl border p-5"
              style={{ borderColor: "rgba(255,255,255,0.12)", background: "rgba(0,0,0,0.4)" }}
            >
              <c.icon className="h-8 w-8" style={{ color: "#5eead4" }} />
              <div>
                <div className="font-semibold">{c.title}</div>
                <div className="text-xs text-white/60">
                  {c.issuer} · {c.year}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RECS */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-3xl font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Recommendations
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {recommendations.map((r) => (
            <blockquote
              key={r.name}
              className="rounded-xl border p-6"
              style={{ borderColor: "rgba(255,255,255,0.12)", background: "rgba(0,0,0,0.4)" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold"
                  style={{
                    background: "linear-gradient(135deg, #5eead4, #f5b642)",
                    color: "#0a0a0a",
                  }}
                >
                  {r.initials}
                </div>
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-xs text-white/60">{r.title}</div>
                </div>
              </div>
              <div className="mt-4 space-y-3 text-sm text-white/85">
                {r.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </blockquote>
          ))}
        </div>
      </section>

      <footer
        className="relative z-10 border-t py-10 text-center text-xs text-white/50"
        style={{
          borderColor: "rgba(255,255,255,0.1)",
          fontFamily: "'JetBrains Mono', ui-monospace, monospace",
        }}
      >
        v11 · THREE HATS · MOHAMED EISSA
      </footer>

      <style>{`
        @keyframes hatFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
      `}</style>
    </div>
  );
}
