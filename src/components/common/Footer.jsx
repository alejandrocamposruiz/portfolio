import React from "react";
import Container from "../ui/Container";

export default function Footer({ footerData, contactLinks }) {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600 py-12">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs">
        <div>
          <p className="font-semibold text-slate-900">{footerData.rights}</p>
          <p className="mt-1 text-slate-500 max-w-md">{footerData.builtWith}</p>
        </div>

        <div className="flex items-center gap-5 text-slate-700 font-mono">
          <a
            href={contactLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-950 underline underline-offset-4"
          >
            GitHub
          </a>
          <a
            href={contactLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-950 underline underline-offset-4"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${contactLinks.email}`}
            className="hover:text-slate-950 underline underline-offset-4"
          >
            Email
          </a>
        </div>
      </Container>
    </footer>
  );
}
