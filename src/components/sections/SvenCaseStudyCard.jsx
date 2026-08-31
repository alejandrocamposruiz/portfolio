import React from "react";
import { motion } from "framer-motion";

export default function SvenCaseStudyCard({ cs, language }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45 }}
      className="sven-case-study rounded-2xl border shadow-sm overflow-hidden p-6 sm:p-8 relative"
    >
      {/* Header Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 sven-primary-bg"></div>

      {/* Top Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[rgba(0,0,0,0.06)]">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-xs font-bold sven-secondary-text">
            {cs.indexNumber}
          </span>
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded sven-badge">
            {cs.tag}
          </span>
        </div>
        <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded sven-accent-badge tracking-wide uppercase">
          {cs.statusLabel}
        </span>
      </div>

      {/* Hero Header of SVEN */}
      <div className="pt-6 pb-4">
        <div className="flex items-center gap-3 mb-1">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight sven-primary-text sven-heading">
            {cs.name}
          </h3>
          <span className="w-2 h-2 rounded-full bg-[#D4A937]"></span>
        </div>
        <p className="text-sm font-semibold sven-secondary-text tracking-wide">
          {cs.subtitle}
        </p>
        <div className="mt-2 text-xs font-mono text-[rgba(26,26,26,0.65)]">
          <span className="font-bold text-[#1A1A1A]">
            {language === "es" ? "Rol: " : "Role: "}
          </span>
          {cs.role}
        </div>
      </div>

      {/* Summary */}
      <p className="text-sm sm:text-base leading-relaxed text-[#1A1A1A] font-medium my-4">
        {cs.summary}
      </p>

      {/* Responsibilities / What I did */}
      <div className="mt-6 pt-4 border-t border-[rgba(0,0,0,0.06)]">
        <h4 className="text-xs font-mono font-bold uppercase tracking-wider sven-secondary-text mb-3">
          {language === "es" ? "Contribución Técnica & Desarrollo" : "Technical Contribution & Development"}
        </h4>
        <ul className="space-y-2 text-sm text-[rgba(26,26,26,0.85)]">
          {cs.whatIDid.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="sven-accent-text font-bold text-xs mt-1">◆</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Sub-Projects / Components within SVEN */}
      {cs.subProjects && (
        <div className="mt-6 pt-4 border-t border-[rgba(0,0,0,0.06)]">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider sven-secondary-text mb-3">
            {language === "es" ? "Desarrollos & Componentes en SVEN" : "Developments & Components in SVEN"}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cs.subProjects.map((sub, idx) => (
              <div key={idx} className="sven-subcard p-4 rounded-xl">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h5 className="text-sm font-bold sven-primary-text sven-heading">
                    {sub.name}
                  </h5>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded sven-badge">
                    {sub.role}
                  </span>
                </div>
                <p className="text-xs text-[rgba(26,26,26,0.7)] leading-relaxed mb-3">
                  {sub.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {sub.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[rgba(31,77,58,0.06)] text-[#1F4D3A] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Engineering Takeaway */}
      {cs.learning && (
        <div className="mt-6 pt-4 border-t border-[rgba(0,0,0,0.06)] text-xs sm:text-sm">
          <span className="font-mono font-bold sven-primary-text block mb-1">
            {language === "es" ? "Criterio de Ingeniería:" : "Engineering Takeaway:"}
          </span>
          <p className="text-[rgba(26,26,26,0.75)] leading-relaxed italic">
            "{cs.learning}"
          </p>
        </div>
      )}

      {/* Verified Stack footer */}
      <div className="mt-6 pt-4 border-t border-[rgba(0,0,0,0.06)] flex flex-wrap items-center gap-1.5">
        <span className="text-[11px] font-mono sven-secondary-text mr-1.5 font-bold">
          {language === "es" ? "Tecnologías utilizadas:" : "Technologies used:"}
        </span>
        {cs.technologies.map((t, idx) => (
          <span
            key={idx}
            className="text-[11px] font-mono bg-white text-[#1F4D3A] border border-[rgba(31,77,58,0.2)] px-2.5 py-0.5 rounded-md font-semibold"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
