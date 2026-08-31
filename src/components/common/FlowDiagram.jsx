import React from "react";

export default function FlowDiagram({ steps, label = "Arquitectura de Flujo" }) {
  if (!steps || steps.length === 0) return null;

  return (
    <div className="my-4 p-4 rounded-lg bg-slate-900 text-slate-100 border border-slate-800 font-mono text-xs">
      <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800 text-[11px] uppercase tracking-wider text-slate-400">
        <span>{label}</span>
        <span className="text-slate-500">{steps.length} stages</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2.5">
        {steps.map((step, idx) => (
          <div key={idx} className="relative flex flex-col justify-between p-2.5 rounded bg-slate-950/80 border border-slate-800/80">
            <div>
              <div className="flex items-center justify-between gap-1 text-[10px] text-slate-500 mb-1">
                <span>0{idx + 1}</span>
                {idx < steps.length - 1 && (
                  <span className="hidden md:inline text-slate-600">→</span>
                )}
              </div>
              <div className="font-semibold text-emerald-400 text-xs mb-0.5">
                {step.label}
              </div>
            </div>
            <div className="text-[11px] text-slate-300 font-sans leading-tight mt-1">
              {step.detail}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
