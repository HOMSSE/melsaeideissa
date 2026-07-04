import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  technicalSkills,
  projects,
  certifications,
  vantagePoints,
  recommendations,
  careerJourney,
} from "@/data/profile";

/** v5 — Terminal boot-up with HUD dashboard layout. */
const bootLines = [
  "[  0.001 ] initializing melsaeideissa.os v3.2.5-mint",
  "[  0.014 ] loading kernel modules: dcs, sis, scada, pi ................. OK",
  "[  0.087 ] mounting /vantage: end_user + vendor + integrator .......... OK",
  "[  0.201 ] handshake with foxboro-archestra ............................. OK",
  "[  0.298 ] handshake with triconex-tristation ............................ OK",
  "[  0.412 ] verifying certifications (exida, ISA/IEC 62443) .............. OK",
  "[  0.550 ] loading innovation_award_2025.sig ............................ OK",
  "[  0.612 ] > system ready. type `help` or scroll for interactive readout.",
];

const IndexTerminal = () => {
  const [visible, setVisible] = useState(0);
  const [booted, setBooted] = useState(false);
  const [cmd, setCmd] = useState("");
  const [log, setLog] = useState<string[]>([]);
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    if (visible >= bootLines.length) {
      setTimeout(() => setBooted(true), 400);
      return;
    }
    const t = setTimeout(() => setVisible((v) => v + 1), 220);
    return () => clearTimeout(t);
  }, [visible]);

  useEffect(() => {
    const id = setInterval(() => setClock(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const runCmd = (c: string) => {
    const responses: Record<string, string> = {
      help: "commands: about · skills · projects · award · certs · clear",
      about: "Mohamed Eissa — I&C engineer. 10y across End User, Vendor, Integrator.",
      skills: Object.keys(technicalSkills).join(" · "),
      projects: projects.map((p) => "▸ " + p.title).join("\n"),
      award: "★ Innovation Award 2025 — for pioneering process control innovations.",
      certs: certifications.map((c) => `${c.year} — ${c.title} (${c.issuer})`).join("\n"),
      clear: "__clear__",
    };
    const r = responses[c.trim().toLowerCase()];
    if (r === "__clear__") setLog([]);
    else setLog((l) => [...l, `> ${c}`, r ?? `command not found: ${c}`]);
  };

  return (
    <div
      className="min-h-screen bg-[#05131a] text-[#73ffb8] relative"
      style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}
    >
      <Helmet>
        <title>Mohamed Eissa — Terminal Edition</title>
        <meta name="description" content="Terminal HUD dashboard for I&C engineer Mohamed Eissa." />
      </Helmet>

      {/* CRT scanlines */}
      <div
        className="fixed inset-0 pointer-events-none z-[50] opacity-[0.06]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, #73ffb8 0px, #73ffb8 1px, transparent 1px, transparent 3px)",
        }}
      />

      <main className="pt-24 pb-20 px-4 md:px-8 max-w-[1600px] mx-auto">
        {/* Boot */}
        <section className="border border-[#2dd4a8]/40 p-6 mb-8 relative">
          <div className="absolute -top-3 left-4 bg-[#05131a] px-2 text-xs text-[#2dd4a8]">[ BOOT.LOG ]</div>
          <pre className="text-xs md:text-sm text-[#c7f9e5]/90 whitespace-pre-wrap leading-relaxed">
{bootLines.slice(0, visible).join("\n")}
{!booted && visible < bootLines.length ? "\n▊" : ""}
          </pre>

          {booted && (
            <div className="mt-4 border-t border-[#2dd4a8]/30 pt-3">
              <pre className="text-xs text-[#c7f9e5]/70 whitespace-pre-wrap">
{log.join("\n")}
              </pre>
              <div className="flex items-center gap-2 mt-2 text-sm">
                <span className="text-[#2dd4a8]">eissa@mint:~$</span>
                <input
                  value={cmd}
                  onChange={(e) => setCmd(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && cmd.trim()) {
                      runCmd(cmd);
                      setCmd("");
                    }
                  }}
                  className="flex-1 bg-transparent outline-none text-[#73ffb8] caret-[#73ffb8]"
                  placeholder="try: about, skills, projects, award, certs"
                />
              </div>
            </div>
          )}
        </section>

        {/* HUD grid */}
        <div className="grid md:grid-cols-12 gap-4">
          {/* Sidebar STATUS */}
          <aside className="md:col-span-3 space-y-4">
            <Panel title="SYS.CLOCK">
              <div className="text-3xl text-[#73ffb8]">{clock.toLocaleTimeString([], { hour12: false })}</div>
              <div className="text-[10px] text-[#c7f9e5]/50 mt-1">{clock.toDateString()}</div>
            </Panel>
            <Panel title="OPERATOR">
              <div className="text-lg">MOHAMED EISSA</div>
              <div className="text-[10px] text-[#c7f9e5]/60 mt-1">I&C Engineer / Systems</div>
            </Panel>
            <Panel title="UPTIME">
              <div className="text-3xl text-[#73ffb8]">10.9y</div>
              <div className="text-[10px] text-[#c7f9e5]/60">since 2015</div>
            </Panel>
            <Panel title="THREE.VANTAGE">
              <ul className="text-xs space-y-2 text-[#c7f9e5]/80">
                {vantagePoints.map((v) => (
                  <li key={v.role}>
                    <span className="text-[#2dd4a8]">[{v.role}]</span> {v.company}
                  </li>
                ))}
              </ul>
            </Panel>
          </aside>

          {/* Main */}
          <div className="md:col-span-6 space-y-4">
            <Panel title="MISSION">
              <div className="text-2xl md:text-3xl font-black text-[#73ffb8] leading-tight">
                CONTROL SYSTEMS,<br />ENGINEERED FOR REALITY.
              </div>
              <p className="mt-4 text-sm text-[#c7f9e5]/80" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                Ten years across DCS, SIS, SCADA and industrial data intelligence — moving fluently between end-user operations, global OEM engineering, and system integration.
              </p>
            </Panel>
            <Panel title="STACK.MAP">
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(technicalSkills).map(([cat, items]) => (
                  <div key={cat} className="border border-[#2dd4a8]/20 p-3">
                    <div className="text-[10px] text-[#2dd4a8] tracking-widest">{cat.toUpperCase()}</div>
                    <div className="text-xs text-[#c7f9e5]/80 mt-1" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                      {items.join(", ")}
                    </div>
                  </div>
                ))}
              </div>
            </Panel>
            <Panel title="DEPLOYMENTS">
              <div className="space-y-3">
                {projects.map((p, i) => (
                  <div key={p.title} className="border-l-2 border-[#2dd4a8] pl-3">
                    <div className="text-xs text-[#2dd4a8]">PROJ.{String(i + 1).padStart(3, "0")}</div>
                    <div className="text-[#73ffb8]">{p.title}</div>
                    <div className="text-xs text-[#c7f9e5]/70 mt-1" style={{ fontFamily: "'Work Sans', sans-serif" }}>{p.description}</div>
                  </div>
                ))}
              </div>
            </Panel>
          </div>

          {/* Right column */}
          <aside className="md:col-span-3 space-y-4">
            <Panel title="AWARD.2025" pulse>
              <div className="text-xl text-[#73ffb8] font-black">INNOVATION AWARD</div>
              <div className="text-[10px] text-[#c7f9e5]/60 mt-1" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                For pioneering process control innovations reshaping operational efficiency.
              </div>
            </Panel>
            <Panel title="CERTS">
              {certifications.map((c) => (
                <div key={c.title} className="mb-3 last:mb-0">
                  <div className="text-[10px] text-[#2dd4a8]">{c.year}</div>
                  <div className="text-xs text-[#73ffb8]">{c.title}</div>
                  <div className="text-[10px] text-[#c7f9e5]/60">{c.issuer}</div>
                </div>
              ))}
            </Panel>
            <Panel title="TIMELINE">
              <ol className="text-[10px] text-[#c7f9e5]/80 space-y-2">
                {careerJourney.map((j, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-[#2dd4a8]">▸</span>
                    <span>{j}</span>
                  </li>
                ))}
              </ol>
            </Panel>
          </aside>
        </div>

        {/* Recommendations */}
        <section className="mt-8">
          <Panel title="PEER.SIGNAL">
            <div className="grid md:grid-cols-2 gap-4">
              {recommendations.map((r) => (
                <div key={r.name} className="border-l-2 border-[#2dd4a8] pl-4">
                  <div className="text-[#73ffb8]">{r.name}</div>
                  <div className="text-[10px] text-[#c7f9e5]/50 mb-2">{r.title} · {r.date}</div>
                  {r.body.map((b, i) => (
                    <p key={i} className="text-xs text-[#c7f9e5]/80 mb-2" style={{ fontFamily: "'Work Sans', sans-serif" }}>{b}</p>
                  ))}
                </div>
              ))}
            </div>
          </Panel>
        </section>

        <footer className="mt-8 text-[10px] text-[#c7f9e5]/40 tracking-widest text-center">
          [ EOF ] TERMINAL EDITION · MOHAMED EISSA © 2026
        </footer>
      </main>
    </div>
  );
};

const Panel = ({ title, children, pulse }: { title: string; children: React.ReactNode; pulse?: boolean }) => (
  <div className={`relative border border-[#2dd4a8]/40 bg-[#05131a] p-4 ${pulse ? "shadow-[0_0_30px_rgba(115,255,184,0.25)]" : ""}`}>
    <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-[#73ffb8]" />
    <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-[#73ffb8]" />
    <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-[#73ffb8]" />
    <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-[#73ffb8]" />
    <div className="text-[10px] text-[#2dd4a8] tracking-[0.3em] mb-3">▐ {title}</div>
    {children}
  </div>
);

export default IndexTerminal;
