import React from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";

export default function ExperienceSection({ data, language }) {
  return (
    <section id="experience" className="py-24 sm:py-32 border-b border-slate-200/80 bg-slate-50/50">
      <Container>
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block mb-2">
            {language === "es" ? "03 · Respaldo de Carrera" : "03 · Career Background"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            {data.sectionTitle}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            {data.sectionSubtitle}
          </p>
        </div>

        <div className="space-y-10">
          {data.roles.map((role, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45 }}
              className="p-8 sm:p-10 rounded-2xl border border-slate-200 bg-white shadow-xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-200">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-950">
                    {role.company}
                  </h3>
                  <div className="text-sm sm:text-base font-semibold text-slate-700 font-mono mt-1">
                    {role.role}
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-xs font-mono px-3 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">
                    {role.period}
                  </span>
                  <span className="text-xs font-mono px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold">
                    {role.badge}
                  </span>
                  {role.isConfidential && (
                    <span className="text-xs font-mono px-3 py-1 rounded-md bg-slate-900 text-white font-medium">
                      CONFIDENTIAL
                    </span>
                  )}
                </div>
              </div>

              <p className="mt-6 text-base sm:text-lg text-slate-700 font-medium leading-relaxed max-w-4xl">
                {role.summary}
              </p>

              <div className="mt-8 space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                  {language === "es" ? "Contribuciones & Responsabilidades Clave" : "Key Contributions & Impact"}
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-700">
                  {role.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5 bg-slate-50/70 p-3.5 rounded-lg border border-slate-100">
                      <span className="text-slate-400 font-bold text-xs mt-1">▸</span>
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-200 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-500 font-bold">
                  {language === "es" ? "Tecnologías & Entornos:" : "Stack & Environments:"}
                </span>
                {role.technologies.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-mono bg-slate-100 text-slate-700 border border-slate-200 px-3 py-1 rounded-md"
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
