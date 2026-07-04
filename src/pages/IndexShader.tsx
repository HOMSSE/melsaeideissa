import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import {
  technicalSkills,
  projects,
  certifications,
  vantagePoints,
  recommendations,
} from "@/data/profile";

/** v3 — WebGL-ish animated gradient hero (2D canvas noise field) + magnetic custom cursor. */
const IndexShader = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      t += 0.006;
      const w = canvas.width;
      const h = canvas.height;
      // base
      ctx.fillStyle = "#05131a";
      ctx.fillRect(0, 0, w, h);
      // radial blobs
      const blobs = [
        { x: 0.3 + Math.sin(t) * 0.15, y: 0.4 + Math.cos(t * 0.8) * 0.15, c: "rgba(45,212,168,0.45)" },
        { x: 0.7 + Math.cos(t * 1.1) * 0.2, y: 0.6 + Math.sin(t * 0.9) * 0.2, c: "rgba(115,255,184,0.35)" },
        { x: 0.5 + Math.sin(t * 0.6) * 0.3, y: 0.3 + Math.cos(t * 0.7) * 0.2, c: "rgba(27,67,50,0.9)" },
      ];
      for (const b of blobs) {
        const g = ctx.createRadialGradient(b.x * w, b.y * h, 0, b.x * w, b.y * h, Math.max(w, h) * 0.5);
        g.addColorStop(0, b.c);
        g.addColorStop(1, "rgba(5,19,26,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      }
      // grain
      const img = ctx.getImageData(0, 0, w, h);
      const d = img.data;
      for (let i = 0; i < d.length; i += 4) {
        const n = (Math.random() - 0.5) * 12;
        d[i] += n; d[i + 1] += n; d[i + 2] += n;
      }
      ctx.putImageData(img, 0, 0);
      raf = requestAnimationFrame(draw);
    };
    draw();

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let cx = mx, cy = my;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx}px, ${my}px)`;
      }
    };
    window.addEventListener("mousemove", onMove);

    const follow = () => {
      cx += (mx - cx) * 0.12;
      cy += (my - cy) * 0.12;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cx - 20}px, ${cy - 20}px)`;
      }
      requestAnimationFrame(follow);
    };
    follow();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div
      className="min-h-screen text-[#c7f9e5] relative overflow-hidden"
      style={{ fontFamily: "'Work Sans', sans-serif", cursor: "none" }}
    >
      <Helmet>
        <title>Mohamed Eissa — Shader Edition</title>
        <meta name="description" content="A cutting-edge shader-driven portfolio for I&C engineer Mohamed Eissa." />
      </Helmet>
      <canvas ref={canvasRef} className="fixed inset-0 -z-10" />
      {/* custom cursor */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[200] w-10 h-10 rounded-full border border-[#2dd4a8]/60 mix-blend-screen"
        style={{ transition: "width 0.2s" }}
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[200] w-1.5 h-1.5 -ml-0.5 -mt-0.5 rounded-full bg-[#73ffb8]"
      />

      <main className="relative pt-32 pb-40 px-6 max-w-7xl mx-auto" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
        {/* HERO */}
        <section className="min-h-[80vh] flex flex-col justify-center">
          <div className="text-xs tracking-[0.4em] text-[#2dd4a8] mb-6">// SIGNAL_INIT — 0x001</div>
          <h1 className="text-6xl md:text-8xl leading-[0.95] font-black mb-8">
            <span className="block">CONTROL</span>
            <span className="block text-[#73ffb8]">SYSTEMS</span>
            <span className="block opacity-40">/ ENGINEERED</span>
          </h1>
          <p className="max-w-xl text-[#c7f9e5]/70 text-lg" style={{ fontFamily: "'Work Sans', sans-serif" }}>
            Mohamed Eissa — Instrumentation & Control engineer bridging end-user pragmatism, OEM depth, and integrator craft. Ten years in DCS, SIS, and industrial data intelligence.
          </p>
          <div className="mt-10 flex gap-6 text-xs uppercase tracking-widest text-[#c7f9e5]/50">
            <span>DCS · SIS · SCADA</span>
            <span>Petrochem · Data Centers</span>
            <span>2015 → NOW</span>
          </div>
        </section>

        {/* SKILLS */}
        <section className="mt-32">
          <div className="text-xs tracking-[0.4em] text-[#2dd4a8] mb-6">// STACK.MAP</div>
          <div className="grid md:grid-cols-2 gap-px bg-[#2dd4a8]/20">
            {Object.entries(technicalSkills).map(([cat, items]) => (
              <div key={cat} className="bg-[#05131a] p-8 hover:bg-[#0b1f28] transition-colors">
                <h3 className="text-[#73ffb8] text-sm tracking-widest uppercase mb-4">{cat}</h3>
                <ul className="space-y-2 text-[#c7f9e5]/80" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                  {items.map((i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="text-[#2dd4a8]">▸</span>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="mt-32">
          <div className="text-xs tracking-[0.4em] text-[#2dd4a8] mb-6">// DEPLOYMENTS</div>
          <div className="space-y-px">
            {projects.map((p, i) => (
              <div
                key={p.title}
                className="grid md:grid-cols-[80px_1fr_1fr] gap-8 p-8 border-t border-[#2dd4a8]/20 hover:bg-[#0b1f28] transition-colors group"
              >
                <div className="text-4xl text-[#2dd4a8]/40 group-hover:text-[#73ffb8] transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-xl text-[#73ffb8] mb-3">{p.title}</h3>
                  <p className="text-[#c7f9e5]/70 text-sm" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                    {p.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 items-start">
                  {p.technologies.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-widest px-2 py-1 border border-[#2dd4a8]/40 text-[#2dd4a8]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AWARD */}
        <section className="mt-32 border border-[#2dd4a8]/30 p-12 relative">
          <div className="absolute -top-3 left-8 bg-[#05131a] px-3 text-[#2dd4a8] text-xs tracking-[0.4em]">// AWARD.2025</div>
          <div className="text-5xl md:text-7xl text-[#73ffb8] font-black">INNOVATION</div>
          <div className="text-5xl md:text-7xl opacity-40 font-black">AWARD</div>
          <p className="mt-6 text-[#c7f9e5]/70 max-w-xl" style={{ fontFamily: "'Work Sans', sans-serif" }}>
            Recognized in 2025 for pioneering process control innovations that redefined operational efficiency.
          </p>
        </section>

        {/* CERTS */}
        <section className="mt-32">
          <div className="text-xs tracking-[0.4em] text-[#2dd4a8] mb-6">// CREDENTIALS</div>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((c) => (
              <div key={c.title} className="p-6 border border-[#2dd4a8]/30">
                <div className="text-xs text-[#2dd4a8] mb-2">{c.year}</div>
                <div className="text-lg text-[#73ffb8]">{c.title}</div>
                <div className="text-sm text-[#c7f9e5]/60 mt-1" style={{ fontFamily: "'Work Sans', sans-serif" }}>{c.issuer}</div>
              </div>
            ))}
          </div>
        </section>

        {/* VANTAGE */}
        <section className="mt-32">
          <div className="text-xs tracking-[0.4em] text-[#2dd4a8] mb-6">// THREE.VANTAGE</div>
          <div className="grid md:grid-cols-3 gap-px bg-[#2dd4a8]/20">
            {vantagePoints.map((v) => (
              <div key={v.role} className="bg-[#05131a] p-8">
                <div className="text-[#73ffb8] text-lg">{v.role}</div>
                <div className="text-[#2dd4a8] text-xs tracking-widest uppercase mt-1">{v.company}</div>
                <p className="mt-4 text-[#c7f9e5]/70 text-sm" style={{ fontFamily: "'Work Sans', sans-serif" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* RECS */}
        <section className="mt-32">
          <div className="text-xs tracking-[0.4em] text-[#2dd4a8] mb-6">// PEER.SIGNAL</div>
          <div className="space-y-8">
            {recommendations.map((r) => (
              <div key={r.name} className="border-l-2 border-[#2dd4a8] pl-6 py-2">
                <div className="text-[#73ffb8]">{r.name}</div>
                <div className="text-xs text-[#c7f9e5]/50 mb-3">{r.title} · {r.date}</div>
                {r.body.map((b, i) => (
                  <p key={i} className="text-[#c7f9e5]/80 text-sm mb-2" style={{ fontFamily: "'Work Sans', sans-serif" }}>{b}</p>
                ))}
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-32 pt-8 border-t border-[#2dd4a8]/20 text-xs text-[#c7f9e5]/40 tracking-widest">
          // END_OF_TRANSMISSION — MOHAMED EISSA © 2026
        </footer>
      </main>
    </div>
  );
};

export default IndexShader;
