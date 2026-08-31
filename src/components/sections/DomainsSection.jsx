import React from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";

export default function DomainsSection({ data, language }) {
  return (
    <section id="domains" className="py-20 border-b border-slate-200/80 bg-slate-50/50">
      <Container>
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">
            Competencias de Ingeniería
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mt-2 tracking-tight">
            {data.sectionTitle}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
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
              className="p-6 rounded-xl border border-slate-200 bg-white flex flex-col justify-between shadow-2xs hover:border-slate-300 transition"
            >
              <div>
                <h3 className="text-base font-bold text-slate-950 mb-2">
                  {dom.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {dom.description}
                </p>

                <div className="space-y-1.5 mb-6">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    {language === "es" ? "Capacidades Clave:" : "Key Capabilities:"}
                  </span>
                  {dom.capabilities.map((cap, idx) => (
                    <div key={idx} className="text-xs text-slate-700 flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1">
                {dom.technologies.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded"
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
