import React from "react";

export default function StatusBadge({ status, label }) {
  const normalized = (status || "").toUpperCase();

  let styles = "bg-slate-100 text-slate-700 border-slate-300";

  if (normalized.includes("IMPLEMENTED")) {
    styles = "bg-emerald-50 text-emerald-800 border-emerald-200";
  } else if (normalized.includes("DESIGNED") || normalized.includes("PROPOSED")) {
    styles = "bg-amber-50 text-amber-900 border-amber-200";
  } else if (normalized.includes("PLANNED")) {
    styles = "bg-sky-50 text-sky-900 border-sky-200";
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold px-2.5 py-0.5 rounded border tracking-wide uppercase ${styles}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-75"></span>
      {label || status}
    </span>
  );
}
