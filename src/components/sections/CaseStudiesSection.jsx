import React from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import StatusBadge from "../common/StatusBadge";
import SvenCaseStudyCard from "./SvenCaseStudyCard";

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
          {data.cases.map((cs) => {
            // Case 01: SVEN with dedicated visual identity island
            if (cs.isSven) {
              return <SvenCaseStudyCard key={cs.id} cs={cs} language={language} />;
            }

            // General Standard Cases (02 to 05)
            return (
              <motion.article
                key={cs.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45 }}
                className="bg-white rounded-xl border border-slate-200/90 shadow-2xs overflow-hidden"
              >
                {/* Header */}
                <div className="p-6 sm:p-8 border-b border-slate-100 bg-white">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs font-bold text-slate-400">
                        {cs.indexNumber}
                      </span>
                      <span className="text-xs font-mono text-slate-600 font-semibold bg-slate-100 px-2 py-0.5 rounded">
                        {cs.tag}
                      </span>
                    </div>
                    <StatusBadge status={cs.status} label={cs.statusLabel} />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                    {cs.name}
                  </h3>

                  <div className="mt-2 text-xs font-mono text-slate-600">
                    <span className="font-semibold text-slate-900">
                      {language === "es" ? "Rol: " : "Role: "}
                    </span>
                    {cs.role}
                    {cs.infrastructureProvider && (
                      <span className="ml-3 text-slate-500">
                        • {language === "es" ? "Infraestructura: " : "Infrastructure: "}
                        <span className="font-semibold text-slate-800">{cs.infrastructureProvider}</span>
                      </span>
                    )}
                  </div>

                  <p className="mt-4 text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                    {cs.summary}
                  </p>
                </div>

                {/* Body */}
                <div className="p-6 sm:p-8 space-y-6">
                  {/* What I did */}
                  {cs.whatIDid && (
                    <div>
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-3">
                        {language === "es" ? "Responsabilidades & Alcance Real" : "Key Responsibilities & Scope"}
                      </h4>
                      <ul className="space-y-2 text-sm text-slate-700">
                        {cs.whatIDid.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="text-slate-400 font-bold text-xs mt-1">▸</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Sub-Developments (e.g. Koko Streaming Server & Menu Server) */}
                  {cs.subDevelopments && (
                    <div className="pt-2">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-3">
                        {language === "es" ? "Desarrollos Individuales" : "Individual Developments"}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {cs.subDevelopments.map((sub, idx) => (
                          <div key={idx} className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                            <h5 className="text-sm font-bold text-slate-900 mb-1">
                              {sub.name}
                            </h5>
                            <p className="text-xs text-slate-600 leading-relaxed mb-3">
                              {sub.description}
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {sub.technologies.map((t, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="text-[10px] font-mono bg-white text-slate-600 border border-slate-200 px-1.5 py-0.5 rounded"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Learning / Engineering Takeaway */}
                  {cs.learning && (
                    <div className="pt-4 border-t border-slate-100 text-xs sm:text-sm">
                      <span className="font-mono font-bold text-slate-900 block mb-1">
                        {language === "es" ? "Criterio de Ingeniería:" : "Engineering Takeaway:"}
                      </span>
                      <p className="text-slate-600 leading-relaxed italic">
                        "{cs.learning}"
                      </p>
                    </div>
                  )}

                  {/* Technologies */}
                  {cs.technologies && (
                    <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
                      <span className="text-[11px] font-mono text-slate-500 mr-1.5 font-semibold">
                        {language === "es" ? "Tecnologías & Entornos:" : "Stack & Environments:"}
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
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
