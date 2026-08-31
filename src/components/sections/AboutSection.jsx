import React from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";

export default function AboutSection({ aboutData }) {
  return (
    <section id="about" className="py-24 sm:py-28 border-b border-slate-200/80 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Editorial Column */}
          <div className="lg:col-span-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block mb-3">
              Perfil Profesional
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-[1.15]">
              {aboutData.heading}
            </h2>
            <p className="text-base sm:text-lg font-semibold text-slate-700 mt-4 leading-snug">
              {aboutData.tagline}
            </p>

            <div className="mt-8 space-y-5 text-slate-600 text-base sm:text-lg leading-relaxed">
              {aboutData.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          {/* Right Principles Column */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block mb-3">
              Principios de Ingeniería
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aboutData.corePrinciples.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl border border-slate-200 bg-slate-50/70 flex flex-col justify-between hover:border-slate-300 transition shadow-2xs"
                >
                  <div>
                    <div className="text-xs font-mono font-bold text-slate-400 mb-2">
                      0{idx + 1}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
