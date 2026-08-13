import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const techImages = [
  { name: "ASP.NET / .NET", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
  { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Power BI", url: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
  { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Docker", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MySQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "SAP", url: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" },
  { name: "VTEX", url: "https://upload.wikimedia.org/wikipedia/commons/7/73/VTEX_logo.png" },
  { name: "Interbanking", url: "https://prodocmsp-interbanking2020.cec.ocp.oraclecloud.com/content/published/api/v1.1/assets/CONTDEC70A27B66842708AB20A442F3A823B/Large/LogoHeader.png?format=webp&type=responsiveimage&channelToken=d3257b803a0441b6adc933fa025459d5" },
  { name: "Wise", url: "https://upload.wikimedia.org/wikipedia/commons/4/4e/TransferWise_Logo_2021.svg" },
  { name: "Fedora", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fedora/fedora-original.svg" },
  { name: "Ubuntu", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" },
  { name: "PHP", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Laravel", url: "https://partners.laravel.com/assets/images/laravel-logo-trademark.svg" },
  { name: "Magento", url: "https://magento-opensource.com/wp-content/uploads/2024/06/Logo-Magento-Open-Source-Color-1.png" },
  { name: "Zabbix", url: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Zabbix_logo_square.svg" },
  { name: "VSCode", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Windows Server", url: "https://upload.wikimedia.org/wikipedia/commons/8/87/Windows_logo_-_2021.svg" },
  { name: "Zenvia", url: "https://www.zenvia.com/wp-content/uploads/2025/02/logo_zenvia.svg" },
  { name: "Redmine", url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Redmine_logo.svg" },
  { name: "RustDesk", url: "https://rustdesk.com/_astro/logo.BKb61-he.svg" },
  { name: "AnyDesk", url: "https://anydesk.com/_static/img/logos/anydesk-logo-c0861c.png" },
  { name: "TeamViewer", url: "https://upload.wikimedia.org/wikipedia/commons/3/3c/TeamViewer_Icon.svg" },
  { name: "Office 365", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Microsoft_365_%282022%29.svg/512px-Microsoft_365_%282022%29.svg.png" }
];

export default function App() {
  const [language, setLanguage] = useState("es");
  const prefersReducedMotion = useReducedMotion();

  const tr = {
    es: {
      title: "Alejandro Campos",
      subtitle: "Especialista en Integraciones, Compliance Technology, Ingeniero de Datos & DevOps. Apasionado por diseñar soluciones reales que conectan sistemas, personas y decisiones.",
      stack: "🚀 Stack tecnológico",
      
      // Compliance Technology
      complianceTitle: "🛡️ Compliance Technology",
      complianceBadge: "Software Development + Data Engineering + Compliance",
      compliancePoints: [
        "Desarrollo y migración de soluciones tecnológicas para PDD/PDDR, monitoreo, alertas y análisis transaccional.",
        "Automatización de procesos de Compliance mediante Python, PostgreSQL y APIs.",
        "Desarrollo de aplicaciones web para gestión y seguimiento de procesos mediante ASP.NET y ReactJS.",
        "Procesamiento y análisis de grandes volúmenes de información transaccional.",
        "Generación de información, controles e indicadores orientados a procesos de Compliance y requerimientos regulatorios."
      ],
      flowLabel: "Flujo operativo de Compliance:",
      flowSteps: [
        { label: "Datos", sub: "Ingesta & fuentes" },
        { label: "Procesamiento", sub: "Sanitización & carga" },
        { label: "Reglas / Controles", sub: "Heurísticas & alertas" },
        { label: "Alertas", sub: "Despacho & gestión" },
        { label: "Reportes", sub: "Indicadores & KPIs" }
      ],
      projectsTitle: "Proyectos Conceptuales / Demostrativos",
      projectsSubtitle: "Modelos conceptuales de referencia para ilustrar capacidades técnicas aplicadas:",
      
      project1: {
        title: "Compliance Monitoring Demo",
        objective: "Monitoreo continuo de operaciones, evaluación de reglas heurísticas y despacho de alertas transaccionales con trazabilidad de auditoría.",
        flow: "Operaciones → PostgreSQL → Python → ASP.NET API → ReactJS → Alertas/Resultados",
        tech: ["ASP.NET", "ReactJS", "Python", "PostgreSQL", "Docker"],
        capabilities: "Evaluación de reglas en tiempo real (pitufeo/estructuración, ráfagas de velocidad, operaciones PEP), servicios REST de gestión y paneles de resolución."
      },
      project2: {
        title: "Compliance Data Pipeline",
        objective: "Ingesta automatizada de fuentes heterogéneas, consolidación de operaciones, detección de anomalías y cálculo de indicadores regulatorios.",
        flow: "CSV / API → Python ETL → PostgreSQL → SQL → Indicadores → Reporting",
        tech: ["Python", "PostgreSQL", "SQL", "Power BI"],
        capabilities: "Transformación y saneamiento de datos, consolidación transaccional, control de desvío de perfiles y reportería analítica lista para auditorías."
      },

      // Backend
      backendTitle: "💻 Backend Engineer",
      backendPoints: [
        "Desarrollo de APIs RESTful en Node.js para SAP, VTEX y otros sistemas.",
        "Diseño y mantenimiento de endpoints para la comunicación entre ERP y plataformas externas.",
        "Automatización de procesos con Bash, Python y scripting backend.",
        "Manejo avanzado de SQL y lógica de negocio en backend de datos.",
        "Construcción y despliegue de microservicios internos para validación y traducción masiva de datos."
      ],
      
      // Data Analysis
      dataTitle: "📊 Análisis de Datos",
      dataPoints: [
        "Tableros comerciales (SAP SD), de categorías y stock (SAP MM), y financieros/bancarios (SAP FICO).",
        "Consolidación de datos desde SAP, DL, VTEX, MySQL y PostgreSQL.",
        "Diseño de estructuras para Power BI: DAX, M, dataflows reutilizables.",
        "Optimización de vistas SQL, lógica funcional e indicadores clave (KPIs)."
      ],
      
      // Integrations & DevOps
      integrationTitle: "🔗 Integraciones, DevOps & Arquitectura de Datos",
      integrationPoints: [
        "Integraciones SAP S/4HANA: iFlows, IDocs, APIs, SAP Integration Suite.",
        "Integraciones con VTEX, Magento, Zenvia, Wise, Interbanking, TiendaNube.",
        "Automatización de infraestructura: Docker, scripting, Prometheus, Azure AD.",
        "Diseño de arquitectura de datos y orquestación de pipelines analíticos.",
        "Soporte técnico nivel 2, monitoreo, trazabilidad y gobernanza de integraciones."
      ],
      
      footerNote: "Portfolio construido con React + Tailwind CSS + Framer Motion. Código ofuscado para producción."
    },
    en: {
      title: "Alejandro Campos",
      subtitle: "Integration Specialist, Compliance Technology, Data Engineer & DevOps. Passionate about designing real solutions that connect systems, people, and decisions.",
      stack: "🚀 Tech Stack",
      
      // Compliance Technology
      complianceTitle: "🛡️ Compliance Technology",
      complianceBadge: "Software Development + Data Engineering + Compliance",
      compliancePoints: [
        "Development and migration of technology solutions for PDD/PDDR, monitoring, alerts, and transactional analysis.",
        "Compliance process automation using Python, PostgreSQL, and APIs.",
        "Web application development for process tracking and case management using ASP.NET and ReactJS.",
        "Processing and analysis of high-volume transactional data.",
        "Generation of risk controls, metrics, and indicators oriented toward Compliance processes and regulatory requirements."
      ],
      flowLabel: "Compliance Operational Flow:",
      flowSteps: [
        { label: "Data", sub: "Ingestion & sources" },
        { label: "Processing", sub: "Sanitization & load" },
        { label: "Rules / Controls", sub: "Heuristics & checks" },
        { label: "Alerts", sub: "Dispatch & triage" },
        { label: "Reports", sub: "Indicators & KPIs" }
      ],
      projectsTitle: "Conceptual / Demonstrative Projects",
      projectsSubtitle: "Reference conceptual models illustrating applied technical capabilities:",
      
      project1: {
        title: "Compliance Monitoring Demo",
        objective: "Continuous transaction monitoring, heuristic rule evaluation, and transactional alert dispatch with complete audit traceability.",
        flow: "Operations → PostgreSQL → Python → ASP.NET API → ReactJS → Alerts/Results",
        tech: ["ASP.NET", "ReactJS", "Python", "PostgreSQL", "Docker"],
        capabilities: "Real-time rule evaluation (smurfing/structuring, velocity bursts, PEP accounts), management REST APIs, and analyst resolution UI."
      },
      project2: {
        title: "Compliance Data Pipeline",
        objective: "Automated ingestion from heterogeneous sources, transaction consolidation, anomaly detection, and regulatory indicator calculation.",
        flow: "CSV / API → Python ETL → PostgreSQL → SQL → Indicators → Reporting",
        tech: ["Python", "PostgreSQL", "SQL", "Power BI"],
        capabilities: "Data transformation and cleansing, transaction consolidation, profile drift monitoring, and audit-ready analytics reporting."
      },

      // Backend
      backendTitle: "💻 Backend Engineer",
      backendPoints: [
        "RESTful API development in Node.js for SAP, VTEX, and other systems.",
        "Design and maintenance of endpoints for ERP and external platform communication.",
        "Automation of processes using Bash, Python, and backend scripting.",
        "Advanced SQL handling and backend business logic.",
        "Building and deploying internal microservices for validation and massive data translation."
      ],
      
      // Data Analysis
      dataTitle: "📊 Data Analysis",
      dataPoints: [
        "Business dashboards (SAP SD), category/stock dashboards (SAP MM), and financial/banking dashboards (SAP FICO).",
        "Data consolidation from SAP, DL, VTEX, MySQL, and PostgreSQL.",
        "Power BI structure design: DAX, M, reusable dataflows.",
        "SQL view optimization, functional logic, and KPI definition."
      ],
      
      // Integrations & DevOps
      integrationTitle: "🔗 Integraciones, DevOps & Arquitectura de Datos",
      integrationPoints: [
        "SAP S/4HANA Integrations: iFlows, IDocs, APIs, SAP Integration Suite.",
        "Integrations with VTEX, Magento, Zenvia, Wise, Interbanking, TiendaNube.",
        "Infrastructure automation: Docker, scripting, Prometheus, Azure AD.",
        "Data architecture design and orchestration of analytics pipelines.",
        "Level 2 technical support, monitoring, traceability, and integration governance."
      ],
      
      footerNote: "Portfolio built with React + Tailwind CSS + Framer Motion. Code obfuscated for production."
    }
  };

  const t = tr[language];
  const isDark = language === "en";

  // Subtle scroll animation respecting reduced-motion
  const cardAnimation = prefersReducedMotion
    ? { initial: { opacity: 1 }, whileInView: { opacity: 1 } }
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-40px" },
        transition: { duration: 0.45, ease: "easeOut" }
      };

  return (
    <main className={`transition-all duration-500 ${isDark ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-800"} min-h-screen font-sans`}>
      {/* Header */}
      <header className={`transition-all duration-500 ${isDark ? "bg-gray-800 border-b border-gray-700" : "bg-white border-b border-gray-100"} shadow-sm p-6 mb-8`}>
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight">{t.title}</h1>
            <p className={`text-base sm:text-lg mt-2 ${isDark ? "text-gray-400" : "text-gray-600"} leading-relaxed max-w-2xl`}>
              {t.subtitle}
            </p>
          </div>
          <button
            onClick={() => setLanguage(language === "es" ? "en" : "es")}
            className="self-end sm:self-auto py-2 px-4 rounded bg-blue-600 hover:bg-blue-700 text-white font-medium transition shadow-sm"
            aria-label="Toggle language"
          >
            {language === "es" ? "English" : "Español"}
          </button>
        </div>
      </header>

      <section className="max-w-4xl mx-auto px-4 grid gap-8">
        {/* Tech Stack Carousel */}
        <motion.div {...cardAnimation} className={`transition-all duration-500 ${isDark ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-100"} overflow-x-auto py-4 px-3 shadow rounded-xl`}>
          <h2 className="text-2xl font-semibold mb-4 text-center">{t.stack}</h2>
          <div className="flex gap-6 items-center justify-start overflow-x-auto pb-2 scrollbar-thin">
            {techImages.map((tech, index) => (
              <div key={index} className="flex-shrink-0 w-24 h-24 flex flex-col items-center justify-center p-2 rounded-lg">
                <img src={tech.url} alt={tech.name} className="w-14 h-14 object-contain" />
                <span className="text-xs mt-1 text-center font-medium text-gray-500 dark:text-gray-400 truncate w-full">{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* SECTION: Compliance Technology */}
        <motion.div
          {...cardAnimation}
          className={`transition-all duration-500 ${isDark ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-100"} rounded-xl shadow p-6 sm:p-7`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <h2 className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
              {t.complianceTitle}
            </h2>
            <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 w-fit">
              {t.complianceBadge}
            </span>
          </div>

          <ul className="list-disc list-inside space-y-2 mb-6">
            {t.compliancePoints.map((p, i) => (
              <li key={i} className={`${isDark ? "text-gray-200" : "text-gray-700"}`}>{p}</li>
            ))}
          </ul>

          {/* Animated Flow Representation */}
          <div className={`p-4 rounded-lg mb-6 ${isDark ? "bg-gray-900/60 border border-gray-700" : "bg-gray-50 border border-gray-200"}`}>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
              {t.flowLabel}
            </p>
            <div className="flex flex-wrap items-center justify-between gap-2">
              {t.flowSteps.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex-1 min-w-[120px] p-2.5 rounded bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 text-center">
                    <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{step.label}</div>
                    <div className="text-[11px] text-gray-500 dark:text-gray-400">{step.sub}</div>
                  </div>
                  {idx < t.flowSteps.length - 1 && (
                    <span className="text-gray-400 font-bold hidden sm:inline">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Demonstrative Conceptual Projects */}
          <div className="pt-2 border-t border-gray-100 dark:border-gray-700">
            <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-1">
              {t.projectsTitle}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
              {t.projectsSubtitle}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Project 1: Compliance Monitoring Demo */}
              <div className={`p-4 rounded-lg border ${isDark ? "bg-gray-900/40 border-gray-700" : "bg-gray-50 border-gray-200"} flex flex-col justify-between`}>
                <div>
                  <h4 className="text-base font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                    {t.project1.title}
                  </h4>
                  <div className={`p-1.5 rounded font-mono text-[11px] mb-2.5 ${isDark ? "bg-gray-950 text-gray-300" : "bg-white text-gray-700 border border-gray-200"}`}>
                    {t.project1.flow}
                  </div>
                  <p className={`text-xs mb-2 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    <strong className="font-semibold">{language === "es" ? "Objetivo: " : "Objective: "}</strong>
                    {t.project1.objective}
                  </p>
                  <p className={`text-xs mb-3 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    <strong className="font-semibold">{language === "es" ? "Capacidades: " : "Capabilities: "}</strong>
                    {t.project1.capabilities}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1 pt-2 border-t border-gray-200 dark:border-gray-800">
                  {t.project1.tech.map((tech, i) => (
                    <span key={i} className={`text-[11px] px-2 py-0.5 rounded font-medium ${isDark ? "bg-gray-800 text-gray-300" : "bg-gray-200 text-gray-700"}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project 2: Compliance Data Pipeline */}
              <div className={`p-4 rounded-lg border ${isDark ? "bg-gray-900/40 border-gray-700" : "bg-gray-50 border-gray-200"} flex flex-col justify-between`}>
                <div>
                  <h4 className="text-base font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                    {t.project2.title}
                  </h4>
                  <div className={`p-1.5 rounded font-mono text-[11px] mb-2.5 ${isDark ? "bg-gray-950 text-gray-300" : "bg-white text-gray-700 border border-gray-200"}`}>
                    {t.project2.flow}
                  </div>
                  <p className={`text-xs mb-2 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    <strong className="font-semibold">{language === "es" ? "Objetivo: " : "Objective: "}</strong>
                    {t.project2.objective}
                  </p>
                  <p className={`text-xs mb-3 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    <strong className="font-semibold">{language === "es" ? "Capacidades: " : "Capabilities: "}</strong>
                    {t.project2.capabilities}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1 pt-2 border-t border-gray-200 dark:border-gray-800">
                  {t.project2.tech.map((tech, i) => (
                    <span key={i} className={`text-[11px] px-2 py-0.5 rounded font-medium ${isDark ? "bg-gray-800 text-gray-300" : "bg-gray-200 text-gray-700"}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Existing Section: Backend Engineer */}
        <motion.div {...cardAnimation} className={`transition-all duration-500 ${isDark ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-100"} rounded-xl shadow p-6`}>
          <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-4">{t.backendTitle}</h2>
          <ul className="list-disc list-inside space-y-2">
            {t.backendPoints.map((p, i) => (
              <li key={i} className={`${isDark ? "text-gray-200" : "text-gray-700"}`}>{p}</li>
            ))}
          </ul>
        </motion.div>

        {/* Existing Section: Data Analysis */}
        <motion.div {...cardAnimation} className={`transition-all duration-500 ${isDark ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-100"} rounded-xl shadow p-6`}>
          <h2 className="text-3xl font-bold text-green-700 dark:text-green-400 mb-4">{t.dataTitle}</h2>
          <ul className="list-disc list-inside space-y-2">
            {t.dataPoints.map((p, i) => (
              <li key={i} className={`${isDark ? "text-gray-200" : "text-gray-700"}`}>{p}</li>
            ))}
          </ul>
        </motion.div>

        {/* Existing Section: Integrations & DevOps */}
        <motion.div {...cardAnimation} className={`transition-all duration-500 ${isDark ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-100"} rounded-xl shadow p-6`}>
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">{t.integrationTitle}</h2>
          <ul className="list-disc list-inside space-y-2">
            {t.integrationPoints.map((p, i) => (
              <li key={i} className={`${isDark ? "text-gray-200" : "text-gray-700"}`}>{p}</li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className={`transition-all duration-500 ${isDark ? "bg-gray-950 text-gray-400 border-t border-gray-800" : "bg-gray-900 text-gray-300"} text-sm py-6 mt-12`}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>📧 danielalejandro.camposr@gmail.com</p>
          <p>
            🌐 <a href="https://linkedin.com/in/dalejandrocampos" target="_blank" rel="noopener noreferrer" className="underline text-blue-400">LinkedIn</a>
          </p>
          <p className="mt-2 text-xs text-gray-400">{t.footerNote}</p>
        </div>
      </footer>
    </main>
  );
}
