import React from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";

export default function SvenSection({ data, language }) {
  return (
    <section id="sven" className="py-24 sm:py-32 border-b border-slate-200/80 bg-[#F5F2EB] text-[#1A1A1A]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
          className="sven-case-study space-y-16"
        >
          {/* Institutional Hero Banner of SVEN */}
          <div className="border-b border-[rgba(0,0,0,0.08)] pb-12">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <span className="text-xs font-mono font-bold tracking-wider sven-secondary-text uppercase">
                01 · {data.sectionTag}
              </span>
              <span className="text-xs font-mono font-bold px-3 py-1 rounded sven-accent-badge tracking-wider uppercase">
                {language === "es" ? "INICIATIVA TECNOLÓGICA" : "TECHNOLOGY VENTURE"}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight sven-primary-text sven-heading">
                    {data.title}
                  </h2>
                  <span className="w-3 h-3 rounded-full bg-[#D4A937]"></span>
                </div>
                <p className="text-lg sm:text-xl font-semibold sven-secondary-text tracking-wide mt-2">
                  {data.subtitle}
                </p>
                <p className="mt-6 text-base sm:text-lg text-[#1A1A1A] leading-relaxed max-w-2xl">
                  {data.organizationDescription}
                </p>
              </div>

              {/* Alejandro's Participation Box */}
              <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(0,0,0,0.08)] shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="sven-accent-text font-bold text-base">◆</span>
                  <h3 className="text-base font-bold sven-primary-text sven-heading">
                    {data.relationshipTitle}
                  </h3>
                </div>
                <p className="text-sm sm:text-base font-semibold text-[#1A1A1A] mb-4 leading-snug">
                  "{data.relationshipSummary}"
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[rgba(26,26,26,0.8)]">
                  {data.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="sven-secondary-text font-bold text-xs mt-1">▸</span>
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* SVEN Projects Section */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-mono font-bold tracking-wider sven-secondary-text uppercase block mb-1">
                  Projects by SVEN
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold sven-primary-text sven-heading">
                  {data.projectsSectionTitle}
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {data.projects.map((proj) => (
                <div
                  key={proj.id}
                  className={`p-8 rounded-2xl bg-white border border-[rgba(0,0,0,0.08)] shadow-xs flex flex-col justify-between ${
                    proj.id === "koko" ? "lg:col-span-7" : "lg:col-span-5"
                  }`}
                >
                  <div>
                    {/* Project Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[rgba(0,0,0,0.06)] mb-4">
                      <div>
                        <span className="text-xs font-mono font-bold sven-secondary-text block mb-1">
                          Project by SVEN
                        </span>
                        <h4 className="text-2xl sm:text-3xl font-bold sven-primary-text sven-heading">
                          {proj.name}
                        </h4>
                      </div>
                      <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded sven-badge uppercase">
                        {proj.statusLabel}
                      </span>
                    </div>

                    <div className="inline-block p-2 rounded-md bg-[rgba(31,77,58,0.05)] border border-[rgba(31,77,58,0.12)] text-xs font-mono text-[#1F4D3A] mb-4">
                      <span className="font-bold">
                        {language === "es" ? "Rol de Alejandro: " : "Alejandro's Role: "}
                      </span>
                      {proj.alejandroRole}
                    </div>

                    <p className="text-sm sm:text-base text-[#1A1A1A] leading-relaxed mb-6">
                      {proj.summary}
                    </p>

                    {/* What I Did */}
                    {proj.whatIDid && (
                      <div className="mb-6">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider sven-secondary-text block mb-2.5">
                          {language === "es" ? "Alcance & Participación:" : "Scope & Participation:"}
                        </span>
                        <ul className="space-y-2 text-xs sm:text-sm text-[rgba(26,26,26,0.85)]">
                          {proj.whatIDid.map((item, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <span className="sven-accent-text font-bold text-xs mt-1">▪</span>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Sub-developments (Streaming Server & Let's Cook for Koko) */}
                    {proj.subDevelopments && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                        {proj.subDevelopments.map((sub, sIdx) => (
                          <div key={sIdx} className="p-4 rounded-xl bg-[rgba(31,77,58,0.03)] border border-[rgba(0,0,0,0.06)]">
                            <h5 className="text-sm font-bold sven-primary-text sven-heading mb-1.5">
                              {sub.name}
                            </h5>
                            <p className="text-xs text-[rgba(26,26,26,0.7)] leading-relaxed">
                              {sub.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Technologies */}
                  <div className="pt-4 border-t border-[rgba(0,0,0,0.06)] flex flex-wrap items-center gap-2 mt-4">
                    <span className="text-xs font-mono sven-secondary-text font-bold">
                      {language === "es" ? "Tecnologías:" : "Stack:"}
                    </span>
                    {proj.technologies.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-mono bg-[rgba(31,77,58,0.06)] text-[#1F4D3A] px-2.5 py-1 rounded font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Takeaway */}
          <div className="pt-6 border-t border-[rgba(0,0,0,0.08)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm">
            <div>
              <span className="font-mono font-bold sven-primary-text block mb-1">
                {language === "es" ? "Criterio de Ingeniería:" : "Engineering Takeaway:"}
              </span>
              <p className="text-[rgba(26,26,26,0.75)] italic max-w-3xl">
                "{data.learning}"
              </p>
            </div>
            <div className="shrink-0 font-mono text-xs text-[rgba(26,26,26,0.5)]">
              SVEN Digital Ecosystem
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
