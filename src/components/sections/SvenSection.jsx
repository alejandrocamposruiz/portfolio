import React from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";

export default function SvenSection({ data, language }) {
  return (
    <section id="sven" className="py-20 border-b border-slate-200/80 bg-[#FAF9F5]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
          className="sven-case-study rounded-2xl border shadow-sm p-6 sm:p-10 relative overflow-hidden"
        >
          {/* Top Brand Stripe */}
          <div className="absolute top-0 left-0 right-0 h-1.5 sven-primary-bg"></div>

          {/* Section Tag & Badges */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[rgba(0,0,0,0.06)]">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-mono font-bold sven-secondary-text tracking-wider uppercase">
                01 · {data.sectionTag}
              </span>
            </div>
            <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded sven-accent-badge tracking-wide uppercase">
              {language === "es" ? "INICIATIVA TECNOLÓGICA" : "TECHNOLOGY VENTURE"}
            </span>
          </div>

          {/* Institutional Header */}
          <div className="pt-6 pb-6">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight sven-primary-text sven-heading">
                {data.title}
              </h2>
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4A937]"></span>
            </div>
            <p className="text-sm sm:text-base font-semibold sven-secondary-text tracking-wide mt-1">
              {data.subtitle}
            </p>
            <p className="mt-4 text-sm sm:text-base text-[#1A1A1A] leading-relaxed max-w-3xl">
              {data.organizationDescription}
            </p>
          </div>

          {/* Alejandro's Participation Box */}
          <div className="p-5 sm:p-6 rounded-xl bg-white border border-[rgba(0,0,0,0.06)] my-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="sven-accent-text font-bold text-sm">◆</span>
              <h3 className="text-sm sm:text-base font-bold sven-primary-text sven-heading">
                {data.relationshipTitle}
              </h3>
            </div>
            <p className="text-sm font-semibold text-[#1A1A1A] mb-4">
              "{data.relationshipSummary}"
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-[rgba(26,26,26,0.8)]">
              {data.highlights.map((h, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="sven-secondary-text font-bold text-xs mt-1">▸</span>
                  <span className="leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects under SVEN */}
          <div className="mt-8 pt-6 border-t border-[rgba(0,0,0,0.06)]">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider sven-secondary-text mb-4">
              {data.projectsSectionTitle}
            </h3>

            <div className="space-y-6">
              {data.projects.map((proj) => (
                <div key={proj.id} className="sven-subcard p-6 rounded-xl">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2.5">
                      <h4 className="text-lg sm:text-xl font-bold sven-primary-text sven-heading">
                        {proj.name}
                      </h4>
                      <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded sven-badge">
                        {proj.category}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded sven-accent-badge uppercase">
                      {proj.statusLabel}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-[rgba(26,26,26,0.6)] mb-3">
                    <span className="font-bold text-[#1A1A1A]">
                      {language === "es" ? "Rol de Alejandro: " : "Alejandro's Role: "}
                    </span>
                    {proj.alejandroRole} · <span className="sven-secondary-text font-semibold">{language === "es" ? "Organización: SVEN" : "Organization: SVEN"}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#1A1A1A] leading-relaxed mb-4">
                    {proj.summary}
                  </p>

                  {/* What I did */}
                  {proj.whatIDid && (
                    <div className="mb-4">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider sven-secondary-text block mb-2">
                        {language === "es" ? "Alcance & Participación:" : "Scope & Participation:"}
                      </span>
                      <ul className="space-y-1.5 text-xs text-[rgba(26,26,26,0.8)]">
                        {proj.whatIDid.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="sven-accent-text font-bold text-xs mt-0.5">▪</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Sub-developments (Streaming Server & Let's Cook for Koko) */}
                  {proj.subDevelopments && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
                      {proj.subDevelopments.map((sub, sIdx) => (
                        <div key={sIdx} className="p-3.5 rounded-lg bg-[rgba(31,77,58,0.03)] border border-[rgba(0,0,0,0.05)]">
                          <h5 className="text-xs font-bold sven-primary-text sven-heading mb-1">
                            {sub.name}
                          </h5>
                          <p className="text-[11px] text-[rgba(26,26,26,0.7)] leading-relaxed">
                            {sub.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-[rgba(0,0,0,0.06)]">
                    <span className="text-[10px] font-mono sven-secondary-text mr-1 font-bold">
                      {language === "es" ? "Tecnologías:" : "Technologies:"}
                    </span>
                    {proj.technologies.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono bg-white text-[#1F4D3A] border border-[rgba(31,77,58,0.15)] px-2 py-0.5 rounded font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Takeaway */}
          <div className="mt-8 pt-4 border-t border-[rgba(0,0,0,0.06)] text-xs sm:text-sm">
            <span className="font-mono font-bold sven-primary-text block mb-1">
              {language === "es" ? "Criterio de Ingeniería:" : "Engineering Takeaway:"}
            </span>
            <p className="text-[rgba(26,26,26,0.75)] leading-relaxed italic">
              "{data.learning}"
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
