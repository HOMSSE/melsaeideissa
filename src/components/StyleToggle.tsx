import { Link, useLocation } from "react-router-dom";

const editions = [
  { to: "/", label: "v1 Warm" },
  { to: "/editorial", label: "v2 Editorial" },
  { to: "/shader", label: "v3 Shader" },
  { to: "/scroll3d", label: "v4 3D Scroll" },
  { to: "/terminal", label: "v5 Terminal" },
  { to: "/physics", label: "v6 Physics" },
  { to: "/cube", label: "v7 Cube" },
  { to: "/chroma", label: "v8 Chroma" },
  { to: "/spark", label: "v9 Spark" },
];

export const StyleToggle = () => {
  const { pathname } = useLocation();
  return (
    <div className="fixed top-3 left-1/2 -translate-x-1/2 z-[100] max-w-[95vw]">
      <div
        className="flex items-center gap-1 p-1 rounded-full border backdrop-blur-md overflow-x-auto no-scrollbar"
        style={{
          background: "rgba(8, 12, 20, 0.7)",
          borderColor: "rgba(45, 212, 168, 0.35)",
          fontFamily: "'JetBrains Mono', ui-monospace, monospace",
        }}
      >
        {editions.map((e) => {
          const active =
            e.to === "/" ? pathname === "/" : pathname.startsWith(e.to);
          return (
            <Link
              key={e.to}
              to={e.to}
              aria-current={active ? "page" : undefined}
              className={`px-3 py-1.5 rounded-full text-[10px] uppercase tracking-widest whitespace-nowrap transition-colors ${
                active
                  ? "bg-[#2dd4a8] text-[#05131a]"
                  : "text-[#c7f9e5]/70 hover:text-[#c7f9e5]"
              }`}
            >
              {e.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default StyleToggle;
