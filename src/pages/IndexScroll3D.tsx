import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  technicalSkills,
  projects,
  certifications,
  vantagePoints,
  recommendations,
} from "@/data/profile";

/** v4 — CSS 3D scroll scene: wireframe icosahedron rotates with scroll, broken-grid overlays. */
const IndexScroll3D = () => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const rot = scroll * 0.15;

  // Icosahedron-ish: 12 triangle faces via CSS 3D transforms (simplified)
  const faces = Array.from({ length: 20 }).map((_, i) => {
    const a = (i / 20) * Math.PI * 2;
    return {
      transform: `rotateY(${(a * 180) / Math.PI}deg) rotateX(${i * 18}deg) translateZ(140px)`,
    };
  });

  return (
    <div
      className="min-h-screen bg-[#05131a] text-[#c7f9e5] relative"
      style={{ fontFamily: "'Work Sans', sans-serif" }}
    >
      <Helmet>
        <title>Mohamed Eissa — Kinetic Edition</title>
        <meta name="description" content="Kinetic 3D scroll experience for I&C engineer Mohamed Eissa." />
      </Helmet>

      {/* Fixed 3D scene */}
      <div className="fixed inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div
          className="w-[300px] h-[300px] relative"
          style={{
            transformStyle: "preserve-3d",
            perspective: "1000px",
            transform: `rotateX(${rot}deg) rotateY(${rot * 1.3}deg) rotateZ(${rot * 0.5}deg)`,
          }}
        >
          {faces.map((f, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-40 h-40 -mt-20 -ml-20 border border-[#2dd4a8]/50"
              style={{
                ...f,
                background: `linear-gradient(135deg, rgba(45,212,168,${0.03 + (i % 3) * 0.02}), transparent)`,
              }}
            />
          ))}
        </div>
      </div>
      {/* radial vignette */}
      <div className="fixed inset-0 pointer-events-none" style={{
        background: "radial-gradient(circle at center, transparent 30%, #05131a 80%)"
      }} />

      <main className="relative z-10 pt-32 pb-40 px-6 max-w-7xl mx-auto" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
        {/* HERO — broken grid */}
        <section className="min-h-[90vh] relative">
          <div className="absolute top-0 left-0 max-w-md">
            <div className="text-[#2dd4a8] text-xs tracking-[0.4em] mb-4">CH.01 — INTRODUCTION</div>
            <h1 className="text-5xl md:text-7xl font-black leading-none">MOHAMED</h1>
          </div>
          <div className="absolute top-32 right-0 max-w-md text-right">
            <h1 className="text-5xl md:text-7xl font-black leading-none text-[#73ffb8]">EISSA</h1>
            <div className="text-xs tracking-[0.4em] mt-4 text-[#c7f9e5]/60">I&C ENGINEER · KINETIC EDITION</div>
          </div>
          <div className="absolute bottom-10 left-1/4 max-w-lg text-sm text-[#c7f9e5]/70" style={{ fontFamily: "'Work Sans', sans-serif" }}>
            A control systems engineer moving between end-user reality, OEM depth, and integrator craft. Scroll — the object turns with you.
          </div>
        </section>

        {/* SKILLS — offset panels */}
        <section className="mt-32 relative">
          <div className="text-[#2dd4a8] text-xs tracking-[0.4em] mb-10">CH.02 — STACK</div>
          <div className="space-y-8">
            {Object.entries(technicalSkills).map(([cat, items], idx) => (
              <div
                key={cat}
                className="max-w-lg backdrop-blur-sm bg-[#05131a]/70 border border-[#2dd4a8]/30 p-6"
                style={{ marginLeft: `${(idx % 4) * 15}%` }}
              >
                <h3 className="text-[#73ffb8] text-sm tracking-widest uppercase mb-3">{cat}</h3>
                <div className="flex flex-wrap gap-2" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                  {items.map((i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-[#1b4332]/60 rounded text-[#c7f9e5]/90">{i}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS — floating cards */}
        <section className="mt-40">
          <div className="text-[#2dd4a8] text-xs tracking-[0.4em] mb-10">CH.03 — DEPLOYMENTS</div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <div
                key={p.title}
                className="backdrop-blur-sm bg-[#05131a]/70 border border-[#2dd4a8]/30 p-6 hover:border-[#73ffb8] transition-all hover:-translate-y-1"
                style={{ transform: `translateY(${(i % 2) * 40}px)` }}
              >
                <div className="text-[#2dd4a8]/60 text-xs mb-2">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="text-[#73ffb8] text-lg mb-3">{p.title}</h3>
                <p className="text-[#c7f9e5]/70 text-sm mb-4" style={{ fontFamily: "'Work Sans', sans-serif" }}>{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.technologies.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-widest text-[#2dd4a8]">· {t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AWARD */}
        <section className="mt-40 relative">
          <div className="max-w-2xl backdrop-blur-sm bg-[#1b4332]/40 border border-[#c7f9e5]/20 p-10">
            <div className="text-[#73ffb8] text-xs tracking-[0.4em] mb-4">CH.04 — RECOGNITION</div>
            <h2 className="text-5xl font-black text-[#73ffb8]">INNOVATION AWARD 2025</h2>
            <p className="mt-4 text-[#c7f9e5]/80" style={{ fontFamily: "'Work Sans', sans-serif" }}>
              Awarded for pioneering process control innovations that reshaped operational efficiency.
            </p>
          </div>
        </section>

        {/* VANTAGE */}
        <section className="mt-40">
          <div className="text-[#2dd4a8] text-xs tracking-[0.4em] mb-10">CH.05 — VANTAGE</div>
          <div className="grid md:grid-cols-3 gap-6">
            {vantagePoints.map((v, i) => (
              <div
                key={v.role}
                className="backdrop-blur-sm bg-[#05131a]/70 border border-[#2dd4a8]/30 p-6"
                style={{ transform: `translateY(${i * 30}px)` }}
              >
                <div className="text-[#73ffb8] text-lg">{v.role}</div>
                <div className="text-xs text-[#2dd4a8] tracking-widest uppercase mt-1">{v.company}</div>
                <p className="mt-3 text-sm text-[#c7f9e5]/70" style={{ fontFamily: "'Work Sans', sans-serif" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CERTS */}
        <section className="mt-40">
          <div className="text-[#2dd4a8] text-xs tracking-[0.4em] mb-10">CH.06 — CREDENTIALS</div>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((c) => (
              <div key={c.title} className="backdrop-blur-sm bg-[#05131a]/70 border border-[#2dd4a8]/30 p-6">
                <div className="text-xs text-[#2dd4a8] mb-1">{c.year}</div>
                <div className="text-[#73ffb8]">{c.title}</div>
                <div className="text-xs text-[#c7f9e5]/60 mt-1" style={{ fontFamily: "'Work Sans', sans-serif" }}>{c.issuer}</div>
              </div>
            ))}
          </div>
        </section>

        {/* RECS */}
        <section className="mt-40">
          <div className="text-[#2dd4a8] text-xs tracking-[0.4em] mb-10">CH.07 — SIGNAL</div>
          {recommendations.map((r, i) => (
            <div
              key={r.name}
              className="max-w-2xl mb-8 backdrop-blur-sm bg-[#05131a]/70 border-l-2 border-[#2dd4a8] p-6"
              style={{ marginLeft: `${(i % 2) * 30}%` }}
            >
              <div className="text-[#73ffb8]">{r.name}</div>
              <div className="text-xs text-[#c7f9e5]/50 mb-3">{r.title} · {r.date}</div>
              {r.body.map((b, j) => (
                <p key={j} className="text-sm text-[#c7f9e5]/80 mb-2" style={{ fontFamily: "'Work Sans', sans-serif" }}>{b}</p>
              ))}
            </div>
          ))}
        </section>

        <footer className="mt-32 pt-8 border-t border-[#2dd4a8]/20 text-xs text-[#c7f9e5]/40 tracking-widest">
          KINETIC EDITION · MOHAMED EISSA © 2026
        </footer>
      </main>
    </div>
  );
};

export default IndexScroll3D;
