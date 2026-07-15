import React, { useState, useEffect } from "react";
import { NAV_ITEMS, BOTTOM_ITEMS, AVATAR_COLORS, BRAND } from "../../const/sidebarItems";
import { PanelLeft, ArrowRight, Box, User } from "lucide-react";

// Controlled from the outside (Dashboard.jsx) so other parts of the layout
// can react to the collapsed state if needed. Falls back to internal state
// when used standalone.
export default function Sidebar({ expanded: expandedProp, onToggle } = {}) {
  const [expandedState, setExpandedState] = useState(true);
  const expanded = expandedProp !== undefined ? expandedProp : expandedState;
  const setExpanded = onToggle || setExpandedState;

  const [active, setActive] = useState("dashboard");
  const [tooltip, setTooltip] = useState(null);

  useEffect(() => {
    if (expanded) setTooltip(null);
  }, [expanded]);

  const showTooltip = (e, label) => {
    if (expanded) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltip({ label, top: rect.top + rect.height / 2, left: rect.right + 12 });
  };

  const hideTooltip = () => setTooltip(null);

  return (
    <>
      <style>{`
        @keyframes sidebarTooltipIn {
          from { opacity: 0; transform: translate(-6px, -50%); }
          to   { opacity: 1; transform: translate(0, -50%); }
        }
      `}</style>

      <aside
        className={`relative h-full flex flex-col bg-maingbcolor dark:bg-zinc-900 rounded-[28px] shadow-xl shadow-zinc-200/70 dark:shadow-black/20
          border border-zinc-100 dark:border-zinc-800 transition-all duration-300 ease-in-out shrink-0
          ${expanded ? "w-72" : "w-20"}`}
      >
        {/* Logo / Brand */}
        <div className="flex items-center h-20 px-5 shrink-0">
          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-600 shrink-0">
            <Box size={18} className="text-white" strokeWidth={2.25} />
          </div>
          <span
            className={`ml-2.5 text-maintextcolor dark:text-white font-bold text-lg whitespace-nowrap
              transition-all duration-300 ease-in-out
              ${expanded ? "opacity-100 max-w-[160px]" : "opacity-0 max-w-0 ml-0"}`}
          >
            {BRAND.name}
          </span>

          <button
            onClick={() => setExpanded(!expanded)}
            className={`flex items-center justify-center w-8 h-8 rounded-lg border border-zinc-200 dark:border-zinc-700
              text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors duration-200 shrink-0
              ${expanded ? "ml-auto" : "mx-auto"}`}
          >
            <PanelLeft
              size={15}
              className={`transition-transform duration-300 ${expanded ? "" : "rotate-180"}`}
            />
          </button>
        </div>

        {/* Menu label */}
        <div
          className={`px-6 shrink-0 overflow-hidden transition-all duration-300 ease-in-out
            ${expanded ? "max-h-8 opacity-100 pt-1 pb-3" : "max-h-0 opacity-0 pt-0 pb-0"}`}
        >
          <span className="text-xs font-medium text-maintextcolor dark:text-zinc-500 whitespace-nowrap">Menu</span>
        </div>

        {/* Nav items */}
        <nav className="flex-1 px-4 space-y-2 overflow-y-auto overflow-x-hidden">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                onMouseEnter={(e) => showTooltip(e, item.label)}
                onMouseLeave={hideTooltip}
                className={`relative w-full flex items-center h-12 rounded-2xl
                  transition-colors duration-200
                  ${expanded ? "px-3.5" : "px-0 justify-center"}
                  ${
                    isActive
                      ? "bg-orange-50 dark:bg-orange-500/10 text-accent dark:text-accent"
                      : "text-maintextcolor dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                  }`}
              >
                <Icon size={19} strokeWidth={isActive ? 2.4 : 2} className="shrink-0" />

                <span
                  className={`ml-3 text-sm font-medium whitespace-nowrap
                    transition-all duration-300 ease-in-out
                    ${expanded ? "opacity-100 max-w-[160px]" : "opacity-0 max-w-0 ml-0"}`}
                >
                  {item.label}
                </span>

                {isActive && expanded && (
                  <ArrowRight size={16} className="ml-auto text-accent shrink-0" />
                )}
              </button>
            );
          })}

          {/* Promo card */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out
              ${expanded ? "max-h-72 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"}`}
          >
            <div className="rounded-2xl p-4 bg-gradient-to-br from-orange-300 via-accent to-emerald-500 shadow-sm">
              <div className="flex items-center -space-x-3 mb-3">
                {AVATAR_COLORS.map((c, i) => (
                  <div
                    key={i}
                    className={`w-9 h-9 rounded-full ring-2 ring-white flex items-center justify-center ${c}`}
                  >
                    <User size={16} className="text-white/90" />
                  </div>
                ))}
                <div className="w-9 h-9 rounded-full ring-2 ring-white bg-maingbcolor flex items-center justify-center text-[11px] font-semibold text-zinc-700">
                  +10
                </div>
              </div>
              <p className="text-white text-sm font-medium leading-snug mb-4">
                Request for join teacher, need approval for access.
              </p>
              <div className="flex gap-2">
                <button className="flex-1 h-9 rounded-xl text-sm font-medium text-white border border-white/50 hover:bg-white/10 transition-colors duration-200">
                  Decline
                </button>
                <button className="flex-1 h-9 rounded-xl text-sm font-medium bg-white text-zinc-800 hover:bg-zinc-50 transition-colors duration-200">
                  Approve
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Settings / Logout */}
        <div className="px-4 pb-6 pt-3 space-y-2 shrink-0">
          {BOTTOM_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onMouseEnter={(e) => showTooltip(e, item.label)}
                onMouseLeave={hideTooltip}
                className={`w-full flex items-center h-12 rounded-2xl text-maintextcolor dark:text-zinc-400
                  hover:text-zinc-800 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors duration-200
                  ${expanded ? "px-3.5" : "px-0 justify-center"}`}
              >
                <Icon size={19} className="shrink-0" />
                <span
                  className={`ml-3 text-sm font-medium whitespace-nowrap
                    transition-all duration-300 ease-in-out
                    ${expanded ? "opacity-100 max-w-[160px]" : "opacity-0 max-w-0 ml-0"}`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </aside>

      {tooltip && !expanded && (
        <div
          className="fixed z-[100] pointer-events-none whitespace-nowrap rounded-md bg-zinc-800
            px-3 py-1.5 text-xs font-medium text-white shadow-lg shadow-black/20"
          style={{ top: tooltip.top, left: tooltip.left, animation: "sidebarTooltipIn 150ms ease-out" }}
        >
          {tooltip.label}
          <span className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-zinc-800" />
        </div>
      )}
    </>
  );
}