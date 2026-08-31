import React from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";

export default function AboutSection({ aboutData }) {
  return (
    <section id="about" className="py-20 border-b border-slate-200/80 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
        >
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">
              Enfoque Profesional
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mt-2 tracking-tight">
              {aboutData.heading}
            </h2>
            <p className="text-base sm:text-lg font-medium text-slate-700 mt-2">
              {aboutData.tagline}
            </p>

            <div className="mt-6 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              {aboutData.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {aboutData.corePrinciples.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-lg border border-slate-200 bg-slate-50/70 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-slate-400 mb-1">
                    0{idx + 1}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
