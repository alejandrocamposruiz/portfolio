import React from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";

export default function HowIWorkSection({ data }) {
  return (
    <section id="how-i-work" className="py-20 border-b border-slate-200/80 bg-white">
      <Container>
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">
            Metodología & Criterio
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mt-2 tracking-tight">
            {data.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
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
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="p-5 rounded-lg border border-slate-200 bg-slate-50/70 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-slate-400 block mb-2">
                  0{idx + 1}
                </span>
                <h3 className="text-sm font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
          className="mt-12 p-6 rounded-xl bg-slate-950 text-white text-center border border-slate-800 font-mono"
        >
          <p className="text-sm sm:text-base font-medium tracking-tight text-slate-200">
            "{data.quote}"
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
