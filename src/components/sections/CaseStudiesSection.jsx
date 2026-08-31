import React from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import StatusBadge from "../common/StatusBadge";
import FlowDiagram from "../common/FlowDiagram";

export default function CaseStudiesSection({ data, language }) {
  return (
    <section id="cases" className="py-20 border-b border-slate-200/80 bg-slate-50/50">
      <Container>
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">
            Selected Work
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mt-2 tracking-tight">
            {data.sectionTitle}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            {data.sectionSubtitle}
          </p>
        </div>

        <div className="space-y-12">
          {data.cases.map((cs) => (
            <motion.article
              key={cs.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45 }}
              className="bg-white rounded-xl border border-slate-200/90 shadow-xs overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 sm:p-8 border-b border-slate-100 bg-white">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-slate-500 font-semibold">{cs.tag}</span>
                  </div>
                  <StatusBadge status={cs.status} label={cs.statusLabel} />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                  {cs.title}
                </h3>

                <div className="mt-2 text-xs font-mono text-slate-600">
                  <span className="font-semibold text-slate-900">{language === "es" ? "Rol: " : "Role: "}</span>
                  {cs.role}
                </div>

                <p className="mt-4 text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                  {cs.summary}
                </p>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Context & Problem */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      {language === "es" ? "Problema / Desafío" : "Problem / Challenge"}
                    </h4>
                    <p className="text-slate-700 leading-relaxed">{cs.problem}</p>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      {language === "es" ? "Solución & Enfoque" : "Solution & Approach"}
                    </h4>
                    <p className="text-slate-700 leading-relaxed">{cs.solution}</p>
                  </div>
                </div>

                {/* Architecture Flow */}
                {cs.architectureFlow && (
                  <FlowDiagram
                    steps={cs.architectureFlow}
                    label={language === "es" ? "Arquitectura de Flujo & Componentes" : "Flow Architecture & Components"}
                  />
                )}

                {/* Feature Status for Student Portal */}
                {cs.featureStatus && (
                  <div className="space-y-4 pt-2">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                      {language === "es" ? "Desglose por Estado de Madurez" : "Maturity & Implementation Breakdown"}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {cs.featureStatus.map((cat, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-lg border border-slate-200 bg-slate-50 flex flex-col"
                        >
                          <div className="mb-3">
                            <StatusBadge status={cat.category} />
                          </div>
                          <ul className="space-y-2 text-xs text-slate-700 leading-relaxed list-disc list-inside">
                            {cat.items.map((item, itemIdx) => (
                              <li key={itemIdx} className="text-slate-600">
                                <span className="text-slate-800">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Decisions */}
                {cs.keyDecisions && (
                  <div className="pt-2">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-3">
                      {language === "es" ? "Decisiones de Arquitectura" : "Key Architectural Decisions"}
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      {cs.keyDecisions.map((dec, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="text-emerald-600 font-bold text-xs mt-1">▸</span>
                          <span className="leading-relaxed">{dec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Results & Learnings */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-100 text-xs sm:text-sm">
                  <div>
                    <span className="font-mono font-bold text-slate-900 block mb-1">
                      {language === "es" ? "Resultado Operativo:" : "Operational Outcome:"}
                    </span>
                    <p className="text-slate-600 leading-relaxed">{cs.results}</p>
                  </div>
                  <div>
                    <span className="font-mono font-bold text-slate-900 block mb-1">
                      {language === "es" ? "Aprendizaje Técnico:" : "Engineering Takeaway:"}
                    </span>
                    <p className="text-slate-600 leading-relaxed">{cs.learning}</p>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] font-mono text-slate-500 mr-1.5 font-semibold">
                    {language === "es" ? "Tecnologías:" : "Technologies:"}
                  </span>
                  {cs.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono bg-slate-100 text-slate-700 border border-slate-200 px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
