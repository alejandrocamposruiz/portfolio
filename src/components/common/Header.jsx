import React, { useState } from "react";
import Container from "../ui/Container";

export default function Header({ language, setLanguage, navData }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: "#about", label: navData.about },
    { href: "#cases", label: navData.cases },
    { href: "#experience", label: navData.experience },
    { href: "#domains", label: navData.domains },
    { href: "#how-i-work", label: navData.howIWork },
    { href: "#contact", label: navData.contact }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <Container className="flex items-center justify-between h-16">
        <a href="#hero" className="flex items-center gap-2 text-slate-900 font-semibold tracking-tight hover:text-slate-700 transition">
          <span className="w-8 h-8 rounded bg-slate-900 text-white font-mono font-bold text-xs flex items-center justify-center">
            AC
          </span>
          <span className="hidden sm:inline font-bold text-sm">Alejandro Campos Ruiz</span>
        </a>

        <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-slate-600">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-slate-950 transition py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex items-center bg-slate-100 p-0.5 rounded border border-slate-200 text-xs font-mono">
            <button
              onClick={() => setLanguage("es")}
              className={`px-2 py-1 rounded transition font-medium ${
                language === "es"
                  ? "bg-white text-slate-950 shadow-xs"
                  : "text-slate-500 hover:text-slate-900"
              }`}
              aria-label="Cambiar idioma a Español"
            >
              ES
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-1 rounded transition font-medium ${
                language === "en"
                  ? "bg-white text-slate-950 shadow-xs"
                  : "text-slate-500 hover:text-slate-900"
              }`}
              aria-label="Switch language to English"
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            aria-label="Toggle Navigation Menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-slate-700 hover:text-slate-950 border-b border-slate-100"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
