import React from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";

export default function DomainsSection({ data, language }) {
  return (
    <section id="domains" className="py-24 sm:py-32 border-b border-slate-200/80 bg-white">
      <Container>
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block mb-2">
            {language === "es" ? "04 · Competencias Técnicas" : "04 · Engineering Competencies"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            {data.sectionTitle}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            {data.sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.domains.map((dom) => (
            <motion.div
              key={dom.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45 }}
              className="p-8 rounded-2xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between shadow-2xs hover:border-slate-300 transition"
            >
              <div>
                <h3 className="text-lg font-bold text-slate-950 mb-2">
                  {dom.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {dom.description}
                </p>

                <div className="space-y-2 mb-6">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    {language === "es" ? "Capacidades Clave:" : "Key Capabilities:"}
                  </span>
                  {dom.capabilities.map((cap, idx) => (
                    <div key={idx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-1.5">
                {dom.technologies.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono bg-white text-slate-700 border border-slate-200/80 px-2 py-0.5 rounded"
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
