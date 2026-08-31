import React from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";

export default function ContactSection({ contactLinks, language }) {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
          className="max-w-4xl"
        >
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block mb-2">
            {language === "es" ? "06 · Canales Directos" : "06 · Direct Channels"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            {language === "es" ? "Contacto & Enlaces Profesionales" : "Contact & Professional Links"}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            {language === "es"
              ? "Disponible para conversaciones sobre arquitectura de sistemas, ingeniería de software, integraciones complejas y tecnología de datos."
              : "Open for discussions regarding system architecture, software engineering, complex integrations, and data systems."}
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5 font-mono text-xs">
            <a
              href={`mailto:${contactLinks.email}`}
              className="p-6 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-slate-400 hover:shadow-xs transition flex flex-col justify-between"
            >
              <div>
                <span className="text-slate-400 font-bold block mb-2">EMAIL</span>
                <span className="text-slate-950 font-sans font-semibold text-sm break-all">
                  {contactLinks.email}
                </span>
              </div>
              <span className="mt-6 text-emerald-600 font-semibold font-sans text-xs">
                {language === "es" ? "Enviar correo →" : "Send email →"}
              </span>
            </a>

            <a
              href={contactLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-slate-400 hover:shadow-xs transition flex flex-col justify-between"
            >
              <div>
                <span className="text-slate-400 font-bold block mb-2">LINKEDIN</span>
                <span className="text-slate-950 font-sans font-semibold text-sm">
                  /in/dalejandrocampos
                </span>
              </div>
              <span className="mt-6 text-emerald-600 font-semibold font-sans text-xs">
                {language === "es" ? "Ver perfil →" : "View profile →"}
              </span>
            </a>

            <a
              href={contactLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-slate-400 hover:shadow-xs transition flex flex-col justify-between"
            >
              <div>
                <span className="text-slate-400 font-bold block mb-2">GITHUB</span>
                <span className="text-slate-950 font-sans font-semibold text-sm">
                  alejandrocamposruiz
                </span>
              </div>
              <span className="mt-6 text-emerald-600 font-semibold font-sans text-xs">
                {language === "es" ? "Ver repositorios →" : "View repositories →"}
              </span>
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
