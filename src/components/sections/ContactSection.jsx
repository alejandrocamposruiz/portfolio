import React from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";

export default function ContactSection({ contactLinks, language }) {
  return (
    <section id="contact" className="py-20 bg-slate-50/50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl"
        >
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">
            {language === "es" ? "Canales Directos" : "Direct Channels"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mt-2 tracking-tight">
            {language === "es" ? "Contacto & Enlaces Profesionales" : "Contact & Professional Links"}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            {language === "es"
              ? "Disponible para conversaciones sobre arquitectura de sistemas, liderazgo técnico, integraciones complejas e ingeniería de software."
              : "Open for discussions regarding system architecture, technical leadership, complex integrations, and software engineering."}
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
            <a
              href={`mailto:${contactLinks.email}`}
              className="p-5 rounded-lg border border-slate-200 bg-white hover:border-slate-400 hover:shadow-2xs transition flex flex-col justify-between"
            >
              <div>
                <span className="text-slate-400 font-bold block mb-1">EMAIL</span>
                <span className="text-slate-950 font-sans font-semibold text-sm break-all">
                  {contactLinks.email}
                </span>
              </div>
              <span className="mt-4 text-emerald-600 font-semibold font-sans text-xs">
                {language === "es" ? "Enviar correo →" : "Send email →"}
              </span>
            </a>

            <a
              href={contactLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-lg border border-slate-200 bg-white hover:border-slate-400 hover:shadow-2xs transition flex flex-col justify-between"
            >
              <div>
                <span className="text-slate-400 font-bold block mb-1">LINKEDIN</span>
                <span className="text-slate-950 font-sans font-semibold text-sm">
                  /in/dalejandrocampos
                </span>
              </div>
              <span className="mt-4 text-emerald-600 font-semibold font-sans text-xs">
                {language === "es" ? "Ver perfil →" : "View profile →"}
              </span>
            </a>

            <a
              href={contactLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-lg border border-slate-200 bg-white hover:border-slate-400 hover:shadow-2xs transition flex flex-col justify-between"
            >
              <div>
                <span className="text-slate-400 font-bold block mb-1">GITHUB</span>
                <span className="text-slate-950 font-sans font-semibold text-sm">
                  alejandrocamposruiz
                </span>
              </div>
              <span className="mt-4 text-emerald-600 font-semibold font-sans text-xs">
                {language === "es" ? "Ver repositorios →" : "View repositories →"}
              </span>
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
