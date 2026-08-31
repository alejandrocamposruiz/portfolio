import React from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";

export default function HowIWorkSection({ data }) {
  return (
    <section id="how-i-work" className="py-24 sm:py-32 border-b border-slate-200/80 bg-slate-50/50">
      <Container>
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block mb-2">
            05 · Metodología & Criterio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            {data.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            {data.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.04 }}
              className="p-8 rounded-2xl border border-slate-200 bg-white flex flex-col justify-between shadow-2xs"
            >
              <div>
                <span className="text-xs font-mono font-bold text-slate-400 block mb-3">
                  0{idx + 1}
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guiding Quote Box */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 p-8 rounded-2xl bg-slate-950 text-white text-center border border-slate-800 font-mono shadow-md"
        >
          <p className="text-base sm:text-lg font-medium tracking-tight text-slate-200">
            "{data.quote}"
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
