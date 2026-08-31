import React from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";

export default function ExperienceSection({ data, language }) {
  return (
    <section id="experience" className="py-20 border-b border-slate-200/80 bg-white">
      <Container>
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">
            Trayectoria Profesional
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mt-2 tracking-tight">
            {data.sectionTitle}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            {data.sectionSubtitle}
          </p>
        </div>

        <div className="space-y-8">
          {data.roles.map((role, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45 }}
              className="p-6 sm:p-8 rounded-xl border border-slate-200 bg-slate-50/50"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200">
                <div>
                  <h3 className="text-xl font-bold text-slate-950">
                    {role.company}
                  </h3>
                  <div className="text-sm font-semibold text-slate-700 font-mono mt-0.5">
                    {role.role}
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-200/80 text-slate-700 font-medium">
                    {role.period}
                  </span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-medium">
                    {role.badge}
                  </span>
                </div>
              </div>

              <p className="mt-4 text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                {role.summary}
              </p>

              <div className="mt-5 space-y-2.5">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                  {language === "es" ? "Contribuciones & Responsabilidades Clave" : "Key Contributions & Impact"}
                </h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  {role.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5">
                      <span className="text-slate-400 font-bold text-xs mt-1">▸</span>
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-mono text-slate-500 mr-1.5 font-semibold">
                  {language === "es" ? "Tecnologías & Entornos:" : "Stack & Environments:"}
                </span>
                {role.technologies.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-mono bg-white text-slate-700 border border-slate-200 px-2 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
