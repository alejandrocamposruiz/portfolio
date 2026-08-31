export const caseStudiesData = {
  es: {
    sectionTitle: "Casos de Estudio & Arquitectura",
    sectionSubtitle:
      "Desglose técnico de problemas reales y modelos de referencia: contexto, arquitectura, decisiones técnicas y aprendizajes.",
    cases: [
      {
        id: "sven",
        title: "SVEN — Plataforma Operativa & Arquitectura de Sistema",
        tag: "Iniciativa Propia / Startup",
        role: "Technical, Product & Systems Leadership",
        status: "IMPLEMENTED",
        statusLabel: "IMPLEMENTED & IN EVOLUTION",
        summary:
          "Diseño de arquitectura, orquestación tecnológica y automatización de operaciones para una plataforma de producto integral.",
        problem:
          "Necesidad de estructurar una plataforma capaz de coordinar flujos de trabajo, automatización operativa y gestión de datos sin incurrir en deuda técnica temprana ni sobrecargar la capacidad operativa del equipo.",
        context:
          "Proyecto propio en fase activa de desarrollo y validación, donde las decisiones de tecnología deben balancear velocidad de entrega con escalabilidad a largo plazo.",
        solution:
          "Diseño modular que articula servicios backend, interfaces de usuario orientadas a tareas, tuberías de datos automatizadas y monitoreo de procesos.",
        architectureFlow: [
          { label: "Frontend / App", detail: "UI modular y flujos de usuario" },
          { label: "API Gateway / Backend", detail: "Lógica de negocio & validación" },
          { label: "Data Layer", detail: "PostgreSQL & esquemas normalizados" },
          { label: "Automation & Worker", detail: "Jobs programados & orquestación" },
          { label: "Telemetry & Logs", detail: "Monitoreo y trazabilidad" }
        ],
        keyDecisions: [
          "Adopción de una arquitectura modular desacoplada para permitir evolución independiente de componentes.",
          "Automatización de tareas repetitivas mediante workers y scripts controlados para maximizar eficiencia.",
          "Definición estricta de contratos de API para facilitar futuras integraciones externas sin reescribir la base."
        ],
        technologies: ["Node.js / Python", "PostgreSQL", "Docker", "REST APIs", "Automation Scripting", "CI/CD"],
        results:
          "Base tecnológica sólida y mantenible, reducción de fricción operativa y un roadmap técnico estructurado para las próximas fases de adopción.",
        learning:
          "En etapas tempranas de producto, la disciplina arquitectónica y la simplicidad son más valiosas que la adopción prematura de patrones hipercomplejos."
      },
      {
        id: "student-portal",
        title: "Plataforma de Autogestión Estudiantil",
        tag: "Sistema Académico & PWA",
        role: "Architecture & Fullstack Engineering",
        status: "DESIGNED / PROPOSED",
        statusLabel: "DESIGNED & PHASED ROADMAP",
        summary:
          "Evolución de un portal informativo estático hacia una plataforma web/mobile PWA de autogestión académica con soporte para correlativas y trámites.",
        problem:
          "La dispersión de información académica y la falta de un canal unificado de autogestión generaban sobrecarga administrativa y fricción en la trayectoria de los estudiantes.",
        context:
          "Iniciativa para modernizar la experiencia del estudiante universitario, estructurando desde los modelos de datos de correlatividades hasta la experiencia PWA.",
        solution:
          "Arquitectura orientada a servicios con base de datos relacional modelada para grafos de correlatividades, autenticación por roles, módulo de trámites digitales y panel de administración.",
        architectureFlow: [
          { label: "PWA Client", detail: "React / PWA offline-ready" },
          { label: "Auth & Security", detail: "JWT & Roles (Estudiante / Admin)" },
          { label: "Academic Engine", detail: "Motor de correlativas & trámites" },
          { label: "Relational DB", detail: "PostgreSQL (Materias, Cursadas, Trámites)" },
          { label: "Analytics & Comms", detail: "Segmentación & reportería" }
        ],
        featureStatus: [
          {
            category: "IMPLEMENTED",
            items: [
              "Modelado relacional de materias, cátedras, cursadas y árbol de correlatividades.",
              "Estructura base de backend con endpoints REST para consulta de avance académico.",
              "Diseño de interfaz responsive y navegación contextual del estudiante."
            ]
          },
          {
            category: "DESIGNED / PROPOSED",
            items: [
              "Motor de resolución y validación de reglas de correlatividades académicas.",
              "Módulo digital de generación y seguimiento de trámites con trazabilidad de estados.",
              "Buscador de aulas, horarios e información de cátedra en tiempo real.",
              "Panel administrativo con control de accesos basado en roles (RBAC)."
            ]
          },
          {
            category: "PLANNED",
            items: [
              "Modo offline completo con Service Workers para PWA en dispositivos móviles.",
              "Canal de comunicación segmentada por carrera, año y estado académico.",
              "Tablero analítico institucional sobre tasas de retención y cuellos de botella en materias."
            ]
          }
        ],
        technologies: ["React / PWA", "Node.js", "PostgreSQL", "Tailwind CSS", "REST API", "Docker"],
        results:
          "Blueprint técnico completo y validado, eliminando ambigüedad en los requerimientos y estableciendo una ruta de implementación modular por fases.",
        learning:
          "Modelar adecuadamente las dependencias de datos (como árboles de correlatividades) en la base de datos previene reescrituras críticas en etapas avanzadas."
      },
      {
        id: "enterprise-integrations",
        title: "Integraciones Empresariales & Ecosistemas ERP",
        tag: "Integraciones B2B & Middleware",
        role: "Systems & Integration Specialist",
        status: "IMPLEMENTED",
        statusLabel: "IMPLEMENTED IN PRODUCTION",
        summary:
          "Diseño, construcción y gobernanza de middleware para conectar SAP S/4HANA con plataformas externas de e-commerce, finanzas y logística.",
        problem:
          "Inconsistencia transaccional, latencia en sincronización de catálogos/pedidos y falta de visibilidad operativa al interconectar sistemas corporativos heterogéneos.",
        context:
          "Entornos corporativos de alta demanda donde fallas en la sincronización impactan directamente en ventas, facturación y despacho de pedidos.",
        solution:
          "Desarrollo de pipelines de integración mediante iFlows, IDocs, Webhooks y microservicios REST de traducción masiva con reintentos automáticos y auditoría.",
        architectureFlow: [
          { label: "Sistemas Externos", detail: "VTEX / Magento / Bancos" },
          { label: "API Gateway / Webhooks", detail: "Ingesta segura & validación" },
          { label: "Integration Layer", detail: "SAP Integration Suite / iFlows" },
          { label: "SAP S/4HANA", detail: "IDocs & BAPIs transaccionales" },
          { label: "Telemetry & Dead-Letter", detail: "Monitoreo & alertas de error" }
        ],
        keyDecisions: [
          "Implementación de mecanismos de reintento con backoff exponencial y colas de dead-letter para evitar pérdida de mensajes.",
          "Estandarización de modelos canónicos de datos intermedios para desacoplar el ERP de los formatos propietarios de cada plataforma.",
          "Monitoreo centralizado y registro de eventos para auditoría y soporte técnico nivel 2/3."
        ],
        technologies: ["SAP S/4HANA", "SAP Integration Suite / iFlows", "IDocs / RFC", "Node.js", "VTEX APIs", "Magento", "Docker", "SQL"],
        results:
          "Sincronización bidireccional estable de órdenes y stock, reducción sustancial de incidencias manuales y visibilidad total del ciclo de vida de los datos.",
        learning:
          "En integraciones críticas, la tolerancia a fallos y la idempotencia son tan importantes como el throughput de datos."
      },
      {
        id: "compliance-pipelines",
        title: "Compliance Technology & Pipelines de Monitoreo Transaccional",
        tag: "Fintech & Regulatory Tech",
        role: "Developer Compliance & Data Engineering",
        status: "IMPLEMENTED",
        statusLabel: "IMPLEMENTED IN PRODUCTION",
        summary:
          "Sistemas de monitoreo transaccional continuo, detección heurística de anomalías y generación de indicadores regulatorios auditables.",
        problem:
          "Volúmenes crecientes de transacciones financieras requerían detección oportuna de patrones de riesgo (estructuración, desvío de perfiles, operaciones PEP) y reportes regulatorios precisos.",
        context:
          "Entorno fintech regulado donde el error técnico o la falta de linaje en los datos impacta en cumplimiento normativo y sanciones.",
        solution:
          "Tuberías automatizadas de ingesta, transformación y cálculo de reglas en PostgreSQL/Python, complementadas con servicios web para gestión de alertas y tableros analíticos.",
        architectureFlow: [
          { label: "Fuentes Transaccionales", detail: "APIs / Core Transaccional" },
          { label: "Python ETL / Sanitización", detail: "Limpieza & consolidación" },
          { label: "Rules Engine (SQL/Py)", detail: "Heurísticas & evaluación PEP" },
          { label: "Alerting & App Service", detail: "ASP.NET / React UI de analistas" },
          { label: "Regulatory Reporting", detail: "Power BI & matrices de riesgo" }
        ],
        keyDecisions: [
          "Separación estricta entre la capa de ingestión transaccional y el motor de evaluación de reglas para garantizar consistencia.",
          "Diseño de modelos de datos con trazabilidad completa de auditoría (quién evaluó qué alerta, bajo qué regla y en qué timestamp).",
          "Optimización de consultas SQL y vistas analíticas para soportar auditorías sin degradar la operación transaccional."
        ],
        technologies: ["Python", "PostgreSQL", "SQL Avanzado", "ASP.NET", "React", "Power BI", "Docker"],
        results:
          "Automatización integral de reportes regulatorios (PDD/PDDR), despacho oportuno de alertas y paneles de control transparentes para auditoría.",
        learning:
          "En tecnología de Compliance, la explicabilidad del dato y la inmutabilidad de la auditoría son requisitos no negociables."
      }
    ]
  },
  en: {
    sectionTitle: "Case Studies & Architecture",
    sectionSubtitle:
      "Technical deep dives into real-world systems and reference models: context, architecture, engineering decisions, and takeaways.",
    cases: [
      {
        id: "sven",
        title: "SVEN — Operational Platform & System Architecture",
        tag: "Independent Venture / Startup",
        role: "Technical, Product & Systems Leadership",
        status: "IMPLEMENTED",
        statusLabel: "IMPLEMENTED & IN EVOLUTION",
        summary:
          "Architecture design, technical orchestration, and operational automation for an integrated digital product platform.",
        problem:
          "Building a robust foundation capable of coordinating complex workflows, operational tasks, and data management without incurring early technical debt or over-extending team bandwidth.",
        context:
          "Self-driven venture in active development and validation, requiring technology choices that balance speed-to-delivery with long-term maintainability.",
        solution:
          "Modular architecture connecting backend services, task-driven user interfaces, automated data workers, and continuous system monitoring.",
        architectureFlow: [
          { label: "Frontend / App", detail: "Modular UI & user workflows" },
          { label: "API Gateway / Backend", detail: "Business logic & validation" },
          { label: "Data Layer", detail: "PostgreSQL & normalized schemas" },
          { label: "Automation & Worker", detail: "Scheduled jobs & orchestration" },
          { label: "Telemetry & Logs", detail: "Monitoring & audit trail" }
        ],
        keyDecisions: [
          "Decoupled modular architecture allowing independent scaling and iteration across subsystems.",
          "Worker-based task automation to eliminate manual operational overhead.",
          "Strict API contracts to enable future external integrations without breaking core domain logic."
        ],
        technologies: ["Node.js / Python", "PostgreSQL", "Docker", "REST APIs", "Automation Scripting", "CI/CD"],
        results:
          "Stable and maintainable core infrastructure, minimized operational friction, and a structured technical roadmap for future scaling.",
        learning:
          "In early-stage systems, architectural discipline and operational simplicity provide far higher leverage than prematurely adopting complex distributed patterns."
      },
      {
        id: "student-portal",
        title: "Student Academic Self-Management Platform",
        tag: "Academic System & PWA",
        role: "Architecture & Fullstack Engineering",
        status: "DESIGNED / PROPOSED",
        statusLabel: "DESIGNED & PHASED ROADMAP",
        summary:
          "Transformation of a static information portal into a comprehensive PWA web/mobile academic self-management platform.",
        problem:
          "Fragmented academic information and the absence of a unified self-service channel created excessive administrative overhead and friction for students.",
        context:
          "Modernization initiative designed to streamline university student life, spanning prerequisite graph modeling to mobile PWA experiences.",
        solution:
          "Service-oriented architecture featuring a relational schema for complex academic prerequisite trees, role-based security, digital procedure workflows, and administrative control panels.",
        architectureFlow: [
          { label: "PWA Client", detail: "React / PWA offline-ready" },
          { label: "Auth & Security", detail: "JWT & Roles (Student / Admin)" },
          { label: "Academic Engine", detail: "Prerequisites & workflow engine" },
          { label: "Relational DB", detail: "PostgreSQL (Courses, Grades, Requests)" },
          { label: "Analytics & Comms", detail: "Cohort metrics & alerts" }
        ],
        featureStatus: [
          {
            category: "IMPLEMENTED",
            items: [
              "Relational modeling for courses, schedules, enrollments, and academic prerequisite trees.",
              "Core backend API endpoints for tracking academic progress and standing.",
              "Responsive UI design for student contextual dashboards."
            ]
          },
          {
            category: "DESIGNED / PROPOSED",
            items: [
              "Algorithmic validation engine for complex course prerequisite dependencies.",
              "Digital academic procedure submission and status tracking workflow.",
              "Real-time classroom, schedule, and faculty directory search.",
              "Role-based administrative portal with granular permissions (RBAC)."
            ]
          },
          {
            category: "PLANNED",
            items: [
              "Full offline service worker caching for reliable mobile PWA usage.",
              "Segmented notifications based on program, cohort, and academic status.",
              "Institutional analytics dashboard surfacing curriculum bottleneck trends."
            ]
          }
        ],
        technologies: ["React / PWA", "Node.js", "PostgreSQL", "Tailwind CSS", "REST API", "Docker"],
        results:
          "Complete architectural blueprint validated against domain requirements, eliminating implementation ambiguity and enabling phased execution.",
        learning:
          "Investing upfront in relational modeling for complex dependency graphs (like academic prerequisites) prevents painful schema migrations down the road."
      },
      {
        id: "enterprise-integrations",
        title: "Enterprise Integrations & ERP Middleware",
        tag: "B2B Integrations & Middleware",
        role: "Systems & Integration Specialist",
        status: "IMPLEMENTED",
        statusLabel: "IMPLEMENTED IN PRODUCTION",
        summary:
          "Architecture, development, and governance of middleware connecting SAP S/4HANA with external e-commerce, banking, and logistics systems.",
        problem:
          "Transactional inconsistencies, catalog/order sync latency, and zero operational visibility across legacy enterprise systems.",
        context:
          "High-volume enterprise environments where synchronization failures directly disrupt sales fulfillment, invoicing, and supply chain logistics.",
        solution:
          "Robust integration pipelines utilizing iFlows, IDocs, Webhooks, and data translation REST microservices with automated retries and audit logging.",
        architectureFlow: [
          { label: "External Platforms", detail: "VTEX / Magento / Banking APIs" },
          { label: "API Gateway / Webhooks", detail: "Secure ingestion & validation" },
          { label: "Integration Layer", detail: "SAP Integration Suite / iFlows" },
          { label: "SAP S/4HANA", detail: "IDocs & transactional BAPIs" },
          { label: "Telemetry & Dead-Letter", detail: "Monitoring & error alerting" }
        ],
        keyDecisions: [
          "Implemented exponential backoff retries and dead-letter queues to ensure zero message loss.",
          "Standardized intermediate canonical data models to decouple core ERP logic from proprietary third-party payload formats.",
          "Centralized transaction telemetry for Level 2/3 operational observability and rapid triage."
        ],
        technologies: ["SAP S/4HANA", "SAP Integration Suite / iFlows", "IDocs / RFC", "Node.js", "VTEX APIs", "Magento", "Docker", "SQL"],
        results:
          "Resilient bidirectional catalog and order synchronization, significant reduction in manual support tickets, and total visibility across the integration lifecycle.",
        learning:
          "In mission-critical enterprise middleware, fault tolerance and idempotency are just as vital as raw data throughput."
      },
      {
        id: "compliance-pipelines",
        title: "Compliance Technology & Transactional Monitoring Pipelines",
        tag: "Fintech & Regulatory Tech",
        role: "Developer Compliance & Data Engineering",
        status: "IMPLEMENTED",
        statusLabel: "IMPLEMENTED IN PRODUCTION",
        summary:
          "Continuous transaction monitoring systems, heuristic anomaly detection engines, and audit-ready regulatory reporting pipelines.",
        problem:
          "Surging transaction volumes required real-time risk pattern detection (smurfing/structuring, PEP screening, velocity spikes) and defensible compliance filings.",
        context:
          "Strictly regulated fintech environments where technical errors or data lineage gaps directly incur compliance penalties and audit risks.",
        solution:
          "Automated ETL ingestion pipelines, rule evaluation engines in PostgreSQL/Python, and fullstack analyst triage tools with audit-ready reporting.",
        architectureFlow: [
          { label: "Transactional Sources", detail: "Core APIs & Transaction Feeds" },
          { label: "Python ETL / Cleansing", detail: "Staging & normalization" },
          { label: "Rules Engine (SQL/Py)", detail: "Heuristic checks & PEP scoring" },
          { label: "Alerting & App Service", detail: "ASP.NET / React triage UI" },
          { label: "Regulatory Reporting", detail: "Power BI & risk matrices" }
        ],
        keyDecisions: [
          "Strict decoupling between high-throughput data staging and analytical rule evaluation engines.",
          "End-to-end audit traceability baked into database schemas (who triaged which alert, under which rule, at what timestamp).",
          "Optimized analytical views and indexes to service regulatory inquiries without impacting transactional performance."
        ],
        technologies: ["Python", "PostgreSQL", "Advanced SQL", "ASP.NET", "React", "Power BI", "Docker"],
        results:
          "End-to-end automation of statutory filings (PDD/PDDR), prompt anomaly alerting, and clear, auditable risk management dashboards.",
        learning:
          "In compliance technology, data lineage clarity and immutable audit trails are absolute requirements, not optional features."
      }
    ]
  }
};
