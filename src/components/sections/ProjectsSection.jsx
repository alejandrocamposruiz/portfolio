import React from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import StatusBadge from "../common/StatusBadge";

export default function ProjectsSection({ data, language }) {
  return (
    <section id="projects" className="py-20 border-b border-slate-200/80 bg-white">
      <Container>
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">
            {language === "es" ? "02 · Trabajo Técnico & Despliegues" : "02 · Technical Deployments & Work"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mt-2 tracking-tight">
            {data.sectionTitle}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            {data.sectionSubtitle}
          </p>
        </div>

        <div className="space-y-8">
          {data.projects.map((proj) => (
            <motion.article
              key={proj.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45 }}
              className="bg-slate-50/60 rounded-xl border border-slate-200 p-6 sm:p-8 shadow-2xs"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200">
                <div>
                  <h3 className="text-xl font-bold text-slate-950">
                    {proj.name}
                  </h3>
                  <div className="text-xs font-mono text-slate-600 mt-1">
                    <span className="font-bold text-slate-900">
                      {language === "es" ? "Rol: " : "Role: "}
                    </span>
                    {proj.role} · <span className="text-slate-500">{language === "es" ? "Proveedor: " : "Provider: "}</span>
                    <span className="font-semibold text-slate-800">{proj.infrastructureProvider}</span>
                  </div>
                </div>
                <StatusBadge status={proj.status} label={proj.statusLabel} />
              </div>

              <p className="mt-4 text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                {proj.summary}
              </p>

              {/* What I did */}
              {proj.whatIDid && (
                <div className="mt-5 space-y-2.5">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                    {language === "es" ? "Responsabilidades & Alcance de Despliegue" : "Deployment Scope & Responsibilities"}
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {proj.whatIDid.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-slate-400 font-bold text-xs mt-1">▸</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Learning */}
              {proj.learning && (
                <div className="mt-6 pt-4 border-t border-slate-200 text-xs sm:text-sm">
                  <span className="font-mono font-bold text-slate-900 block mb-1">
                    {language === "es" ? "Criterio de Ingeniería:" : "Engineering Takeaway:"}
                  </span>
                  <p className="text-slate-600 leading-relaxed italic">
                    "{proj.learning}"
                  </p>
                </div>
              )}

              {/* Technologies */}
              <div className="mt-5 pt-4 border-t border-slate-200 flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-mono text-slate-500 mr-1.5 font-semibold">
                  {language === "es" ? "Entorno & Herramientas:" : "Environment & Stack:"}
                </span>
                {proj.technologies.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono bg-white text-slate-700 border border-slate-200 px-2 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
