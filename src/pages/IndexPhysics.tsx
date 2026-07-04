import { useRef, useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import {
  technicalSkills,
  projects,
  certifications,
  vantagePoints,
  recommendations,
} from "@/data/profile";

/** v6 — Bento grid where tiles are draggable with spring physics. */

type TilePos = { x: number; y: number; vx: number; vy: number };

const DraggableTile = ({
  children,
  className = "",
  colSpan = "md:col-span-1",
  rowSpan = "md:row-span-1",
}: {
  children: React.ReactNode;
  className?: string;
  colSpan?: string;
  rowSpan?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<TilePos>({ x: 0, y: 0, vx: 0, vy: 0 });
  const dragging = useRef(false);
  const start = useRef({ mx: 0, my: 0, x: 0, y: 0, lx: 0, ly: 0, t: 0 });

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      if (!dragging.current) {
        setPos((p) => {
          const k = 0.12; // spring
          const d = 0.75; // damping
          const ax = -p.x * k;
          const ay = -p.y * k;
          const vx = (p.vx + ax) * d;
          const vy = (p.vy + ay) * d;
          const nx = p.x + vx;
          const ny = p.y + vy;
          if (Math.abs(nx) < 0.1 && Math.abs(ny) < 0.1 && Math.abs(vx) < 0.1 && Math.abs(vy) < 0.1) {
            return { x: 0, y: 0, vx: 0, vy: 0 };
          }
          return { x: nx, y: ny, vx, vy };
        });
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const onDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    start.current = {
      mx: e.clientX, my: e.clientY,
      x: pos.x, y: pos.y,
      lx: pos.x, ly: pos.y,
      t: performance.now(),
    };
  };
  const onMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    const nx = start.current.x + (e.clientX - start.current.mx);
    const ny = start.current.y + (e.clientY - start.current.my);
    const now = performance.now();
    const dt = Math.max(1, now - start.current.t);
    const vx = (nx - start.current.lx) / dt * 16;
    const vy = (ny - start.current.ly) / dt * 16;
    start.current.lx = nx; start.current.ly = ny; start.current.t = now;
    setPos({ x: nx, y: ny, vx, vy });
  };
  const onUp = () => { dragging.current = false; };

  return (
    <div
      ref={ref}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
      className={`${colSpan} ${rowSpan} relative select-none touch-none cursor-grab active:cursor-grabbing bg-[#0b1f28] border border-[#2dd4a8]/30 hover:border-[#73ffb8] transition-colors p-6 ${className}`}
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px) rotate(${pos.x * 0.02}deg)`,
        transition: dragging.current ? "none" : "border-color 0.2s",
        willChange: "transform",
        boxShadow: dragging.current ? "0 20px 60px rgba(115,255,184,0.25)" : "none",
      }}
    >
      <div className="absolute top-2 right-2 flex gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4a8]/50" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4a8]/50" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4a8]/50" />
      </div>
      {children}
    </div>
  );
};

const IndexPhysics = () => {
  return (
    <div
      className="min-h-screen bg-[#05131a] text-[#c7f9e5]"
      style={{ fontFamily: "'Work Sans', sans-serif" }}
    >
      <Helmet>
        <title>Mohamed Eissa — Playground Edition</title>
        <meta name="description" content="Interactive bento playground portfolio for I&C engineer Mohamed Eissa." />
      </Helmet>

      <main className="pt-24 pb-20 px-4 md:px-8 max-w-[1500px] mx-auto" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
        <div className="text-center mb-6">
          <div className="text-[10px] tracking-[0.4em] text-[#2dd4a8]">// GRAB · TOSS · SNAP-BACK</div>
          <p className="text-xs text-[#c7f9e5]/50 mt-1" style={{ fontFamily: "'Work Sans', sans-serif" }}>
            Every tile is draggable. Release to see the spring pull it home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 auto-rows-[minmax(160px,auto)] gap-4">
          {/* Hero */}
          <DraggableTile colSpan="md:col-span-4" rowSpan="md:row-span-2" className="!bg-gradient-to-br from-[#1b4332] to-[#0d1b2a]">
            <div className="h-full flex flex-col justify-between">
              <div className="text-[10px] tracking-[0.4em] text-[#2dd4a8]">// OPERATOR</div>
              <div>
                <h1 className="text-4xl md:text-6xl font-black text-[#73ffb8] leading-none">MOHAMED<br />EISSA</h1>
                <p className="mt-4 text-sm text-[#c7f9e5]/80 max-w-lg" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                  I&C engineer bridging end-user pragmatism, OEM depth, and integrator craft.
                </p>
              </div>
            </div>
          </DraggableTile>

          {/* Uptime */}
          <DraggableTile colSpan="md:col-span-2">
            <div className="text-[10px] tracking-[0.4em] text-[#2dd4a8]">// UPTIME</div>
            <div className="text-5xl font-black text-[#73ffb8] mt-2">10.9y</div>
            <div className="text-xs text-[#c7f9e5]/50">since 2015</div>
          </DraggableTile>

          {/* Award */}
          <DraggableTile colSpan="md:col-span-2" className="!bg-[#1b4332]">
            <div className="text-[10px] tracking-[0.4em] text-[#c7f9e5]/80">★ AWARD.2025</div>
            <div className="text-lg font-black text-[#73ffb8] mt-2 leading-tight">INNOVATION<br />AWARD</div>
            <div className="text-[10px] text-[#c7f9e5]/60 mt-2" style={{ fontFamily: "'Work Sans', sans-serif" }}>
              Pioneering process control innovation.
            </div>
          </DraggableTile>

          {/* Skills tiles */}
          {Object.entries(technicalSkills).map(([cat, items]) => (
            <DraggableTile key={cat} colSpan="md:col-span-2">
              <div className="text-[10px] tracking-[0.3em] text-[#2dd4a8]">{cat.toUpperCase()}</div>
              <ul className="mt-2 text-xs space-y-1 text-[#c7f9e5]/85" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                {items.slice(0, 4).map((i) => (
                  <li key={i} className="flex gap-2"><span className="text-[#73ffb8]">▸</span>{i}</li>
                ))}
              </ul>
            </DraggableTile>
          ))}

          {/* Vantage */}
          <DraggableTile colSpan="md:col-span-3" rowSpan="md:row-span-1">
            <div className="text-[10px] tracking-[0.3em] text-[#2dd4a8]">// THREE.VANTAGE</div>
            <div className="grid grid-cols-3 gap-3 mt-2">
              {vantagePoints.map((v) => (
                <div key={v.role}>
                  <div className="text-[#73ffb8] text-xs">{v.role}</div>
                  <div className="text-[10px] text-[#c7f9e5]/60">{v.company}</div>
                </div>
              ))}
            </div>
          </DraggableTile>

          {/* Certs */}
          <DraggableTile colSpan="md:col-span-3">
            <div className="text-[10px] tracking-[0.3em] text-[#2dd4a8]">// CERTS</div>
            <div className="mt-2 space-y-2">
              {certifications.map((c) => (
                <div key={c.title}>
                  <div className="text-xs text-[#73ffb8]">{c.title}</div>
                  <div className="text-[10px] text-[#c7f9e5]/60" style={{ fontFamily: "'Work Sans', sans-serif" }}>{c.issuer} · {c.year}</div>
                </div>
              ))}
            </div>
          </DraggableTile>

          {/* Projects */}
          {projects.map((p, i) => (
            <DraggableTile key={p.title} colSpan="md:col-span-3">
              <div className="text-[10px] text-[#2dd4a8]">PROJ.{String(i + 1).padStart(2, "0")}</div>
              <div className="text-sm text-[#73ffb8] mt-1">{p.title}</div>
              <p className="text-xs text-[#c7f9e5]/70 mt-2" style={{ fontFamily: "'Work Sans', sans-serif" }}>{p.description}</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {p.technologies.map((t) => (
                  <span key={t} className="text-[9px] uppercase tracking-widest px-1.5 py-0.5 border border-[#2dd4a8]/40 text-[#2dd4a8]">{t}</span>
                ))}
              </div>
            </DraggableTile>
          ))}

          {/* Recs */}
          {recommendations.map((r) => (
            <DraggableTile key={r.name} colSpan="md:col-span-3">
              <div className="text-[10px] text-[#2dd4a8]">// PEER.SIGNAL</div>
              <div className="text-sm text-[#73ffb8] mt-1">{r.name}</div>
              <div className="text-[10px] text-[#c7f9e5]/50 mb-2">{r.title}</div>
              <p className="text-xs text-[#c7f9e5]/80 line-clamp-4" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                {r.body[0]}
              </p>
            </DraggableTile>
          ))}
        </div>

        <footer className="mt-10 text-[10px] text-[#c7f9e5]/40 tracking-widest text-center">
          // PLAYGROUND EDITION · MOHAMED EISSA © 2026
        </footer>
      </main>
    </div>
  );
};

export default IndexPhysics;
