export const domainsData = {
  es: {
    sectionTitle: "Dominios Técnicos & Especialización",
    sectionSubtitle:
      "Capacidades organizadas por áreas de competencia en ingeniería. Las tecnologías concretas sirven como herramientas para resolver problemas de dominio.",
    domains: [
      {
        id: "software-engineering",
        title: "Software Engineering & Backend",
        description:
          "Diseño e implementación de servicios robustos, lógica de negocio y APIs escalables con foco en mantenibilidad y rendimiento.",
        capabilities: [
          "APIs RESTful y servicios desacoplados",
          "Manejo avanzado de concurrencia y validaciones",
          "Arquitecturas modulares y microservicios",
          "Testing e integración continua"
        ],
        technologies: ["Node.js", "Python", "ASP.NET / .NET Core", "React", "TypeScript / JavaScript"]
      },
      {
        id: "systems-integration",
        title: "Systems & Enterprise Integration",
        description:
          "Interconexión de plataformas corporativas heterogéneas, middleware y traducción de datos transaccionales en tiempo real.",
        capabilities: [
          "Integraciones SAP S/4HANA (iFlows, IDocs, APIs)",
          "Conexión con e-commerce (VTEX, Magento) y pasarelas",
          "Webhooks, brokers y tolerancia a fallos",
          "Trazabilidad de mensajes y políticas de reintento"
        ],
        technologies: ["SAP Integration Suite", "SAP S/4HANA", "IDocs / RFC", "VTEX API", "REST / Webhooks"]
      },
      {
        id: "data-engineering",
        title: "Data Engineering & Analytics",
        description:
          "Modelado relacional, canalizaciones de datos (ETL/ELT) y estructuras preparadas para auditorías y analítica de alto nivel.",
        capabilities: [
          "Esquemas relacionales normalizados y optimizados",
          "Pipelines automatizados de ingesta y saneamiento",
          "Modelado analítico y DAX/M para Power BI",
          "Cálculo de métricas complejas e indicadores clave"
        ],
        technologies: ["PostgreSQL", "MySQL", "Advanced SQL", "Power BI", "Python (ETL)", "Data Modeling"]
      },
      {
        id: "devops-infra",
        title: "DevOps & Infrastructure",
        description:
          "Aislamiento de entornos, reproducibilidad de despliegues y automatización operativa en Linux y contenedores.",
        capabilities: [
          "Contenedorización consistente y composición de servicios",
          "Administración de servidores y entornos Linux",
          "Scripting para automatización de tareas y respaldos",
          "Monitoreo de procesos y telemetría de fallos"
        ],
        technologies: ["Docker", "Docker Compose", "Linux (Fedora, Ubuntu)", "Bash / Shell", "CI/CD Workflows"]
      },
      {
        id: "system-architecture",
        title: "Architecture & System Design",
        description:
          "Definición de fronteras de sistemas, contratos de interfaces, resiliencia y linaje de datos de extremo a extremo.",
        capabilities: [
          "Arquitectura de integración y patrones de desacoplamiento",
          "Diseño de modelos de datos e interfaces consistentes",
          "Observabilidad, auditoría e inmutabilidad",
          "Evolución modular y mitigación de deuda técnica"
        ],
        technologies: ["System Design", "Event-Driven Patterns", "API Contracts", "Audit Trails", "Clean Architecture"]
      },
      {
        id: "compliance-tech",
        title: "Compliance Technology & RegTech",
        description:
          "Desarrollo especializado para detección de riesgos financieros, monitoreo transaccional y cumplimiento normativo.",
        capabilities: [
          "Monitoreo continuo de operaciones y detección de anomalías",
          "Evaluación de reglas heurísticas (pitufeo, PEP, desvíos)",
          "Automatización de reportes regulatorios (PDD/PDDR)",
          "Paneles de resolución y trazabilidad de auditoría"
        ],
        technologies: ["AML Rules Engines", "Heuristic Anomaly Detection", "Audit Lineage", "Regulatory Filing Tech"]
      }
    ]
  },
  en: {
    sectionTitle: "Technical Domains & Core Competencies",
    sectionSubtitle:
      "Engineering capabilities categorized by domain. Specific technologies serve as tools to solve fundamental systems challenges.",
    domains: [
      {
        id: "software-engineering",
        title: "Software Engineering & Backend",
        description:
          "Architecting robust backend services, domain business logic, and scalable APIs with an emphasis on maintainability and performance.",
        capabilities: [
          "RESTful APIs and decoupled service architectures",
          "Advanced data validation and business rules",
          "Modular services and clean layering",
          "Automated testing and CI workflows"
        ],
        technologies: ["Node.js", "Python", "ASP.NET / .NET Core", "React", "TypeScript / JavaScript"]
      },
      {
        id: "systems-integration",
        title: "Systems & Enterprise Integration",
        description:
          "Connecting heterogeneous enterprise platforms, middleware orchestration, and real-time cross-system transaction translation.",
        capabilities: [
          "SAP S/4HANA integrations (iFlows, IDocs, APIs)",
          "E-commerce (VTEX, Magento) and payment gateway bridges",
          "Webhooks, queues, and fault-tolerant ingestion",
          "Message-level traceability and retry mechanisms"
        ],
        technologies: ["SAP Integration Suite", "SAP S/4HANA", "IDocs / RFC", "VTEX API", "REST / Webhooks"]
      },
      {
        id: "data-engineering",
        title: "Data Engineering & Analytics",
        description:
          "Relational schema modeling, automated ETL/ELT pipelines, and data architectures built for auditability and executive analytics.",
        capabilities: [
          "Normalized, high-performance relational schemas",
          "Automated ingestion, validation, and staging pipelines",
          "Analytical data modeling and DAX/M in Power BI",
          "Complex metric computation and KPI governance"
        ],
        technologies: ["PostgreSQL", "MySQL", "Advanced SQL", "Power BI", "Python (ETL)", "Data Modeling"]
      },
      {
        id: "devops-infra",
        title: "DevOps & Infrastructure",
        description:
          "Environment isolation, reproducible deployment workflows, and operational automation across Linux and container ecosystems.",
        capabilities: [
          "Consistent containerization and service composition",
          "Linux system administration and shell scripting",
          "Automated operational tasks, cron jobs, and backups",
          "Process monitoring, telemetry, and uptime observability"
        ],
        technologies: ["Docker", "Docker Compose", "Linux (Fedora, Ubuntu)", "Bash / Shell", "CI/CD Workflows"]
      },
      {
        id: "system-architecture",
        title: "Architecture & System Design",
        description:
          "Defining system boundaries, interface contracts, failure resilience, and end-to-end data lineage across production stacks.",
        capabilities: [
          "Integration architecture and decoupling patterns",
          "Reliable schema and API contract specifications",
          "Observability, auditable events, and data immutability",
          "Modular evolution and proactive technical debt management"
        ],
        technologies: ["System Design", "Event-Driven Patterns", "API Contracts", "Audit Trails", "Clean Architecture"]
      },
      {
        id: "compliance-tech",
        title: "Compliance Technology & RegTech",
        description:
          "Specialized engineering for financial risk detection, automated transaction monitoring, and statutory regulatory filings.",
        capabilities: [
          "Continuous transaction monitoring and anomaly triage",
          "Heuristic rule evaluation (structuring, PEP screening, velocity)",
          "End-to-end automation of statutory filings (PDD/PDDR)",
          "Auditable case resolution interfaces and evidence logging"
        ],
        technologies: ["AML Rules Engines", "Heuristic Anomaly Detection", "Audit Lineage", "Regulatory Filing Tech"]
      }
    ]
  }
};
