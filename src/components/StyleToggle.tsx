import { Link, useLocation } from "react-router-dom";

/**
 * Fixed top toggle to switch between the two site styles.
 * Deliberately styled to sit above both palettes without clashing.
 */
export const StyleToggle = () => {
  const { pathname } = useLocation();
  const isEditorial = pathname.startsWith("/editorial");

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[100]">
      <div
        className="flex items-center gap-1 p-1 rounded-full border backdrop-blur-md"
        style={{
          background: "rgba(15, 15, 15, 0.55)",
          borderColor: "rgba(201, 168, 76, 0.35)",
          fontFamily: "'JetBrains Mono', ui-monospace, monospace",
        }}
      >
        <Link
          to="/"
          aria-current={!isEditorial ? "page" : undefined}
          className={`px-4 py-1.5 rounded-full text-[11px] uppercase tracking-widest transition-colors ${
            !isEditorial
              ? "bg-[#c9a84c] text-[#0d0d0d]"
              : "text-[#f5f0e0]/70 hover:text-[#f5f0e0]"
          }`}
        >
          Warm / v1
        </Link>
        <Link
          to="/editorial"
          aria-current={isEditorial ? "page" : undefined}
          className={`px-4 py-1.5 rounded-full text-[11px] uppercase tracking-widest transition-colors ${
            isEditorial
              ? "bg-[#c9a84c] text-[#0d0d0d]"
              : "text-[#f5f0e0]/70 hover:text-[#f5f0e0]"
          }`}
        >
          Editorial / v2
        </Link>
      </div>
    </div>
  );
};

export default StyleToggle;
