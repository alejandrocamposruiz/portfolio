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
          "Diseño e implementación de servicios backend, lógica de negocio y APIs con foco en mantenibilidad, validación y rendimiento.",
        capabilities: [
          "APIs RESTful y servicios desacoplados",
          "Manejo de reglas de negocio y validación de datos",
          "Desarrollo backend en Node.js y Python",
          "Estructuración de código limpio y mantenible"
        ],
        technologies: ["Node.js", "Python", "JavaScript", "REST APIs", "SQL"]
      },
      {
        id: "systems-integration",
        title: "Systems & Enterprise Integration",
        description:
          "Interconexión de plataformas corporativas heterogéneas, middleware y traducción de datos transaccionales entre sistemas.",
        capabilities: [
          "Integraciones SAP S/4HANA (iFlows, IDocs, APIs)",
          "Conexión con plataformas de e-commerce (VTEX, Magento)",
          "Webhooks y protocolos de intercambio de información",
          "Trazabilidad de mensajes y monitoreo de comunicación"
        ],
        technologies: ["SAP S/4HANA", "IDocs / RFC", "VTEX APIs", "Magento", "REST / Webhooks"]
      },
      {
        id: "data-engineering",
        title: "Data Engineering & Modelado",
        description:
          "Modelado de datos relacionales y documentales, canalizaciones de datos y estructuras preparadas para trazabilidad y auditoría.",
        capabilities: [
          "Esquemas relacionales normalizados en PostgreSQL y MySQL",
          "Persistencia con Supabase y Firebase Firestore",
          "Pipelines automatizados de ingesta y consolidación",
          "Consultas SQL complejas y optimización de datos"
        ],
        technologies: ["PostgreSQL", "MySQL", "Supabase", "Firebase Firestore", "SQL Avanzado", "Python (ETL)"]
      },
      {
        id: "devops-infra",
        title: "DevOps & Infrastructure",
        description:
          "Aislamiento de entornos, reproducibilidad de despliegues y automatización operativa en Linux y contenedores.",
        capabilities: [
          "Contenedorización consistente con Docker",
          "Aprovisionamiento y administración de servidores Linux (DonWeb, entornos productivos)",
          "Scripting para automatización de tareas y despliegues",
          "Puesta en producción y configuración de variables operativas"
        ],
        technologies: ["Docker", "Linux (Fedora, Ubuntu)", "Bash / Shell Scripting", "DonWeb Server Admin"]
      },
      {
        id: "system-architecture",
        title: "Architecture & System Design",
        description:
          "Definición de fronteras de sistemas, contratos de interfaces y diseño orientado a resiliencia y operación real.",
        capabilities: [
          "Arquitectura de integración y desacoplamiento de componentes",
          "Diseño de modelos de datos consistentes",
          "Observabilidad y trazabilidad operativa",
          "Diseño orientado al ciclo de vida en producción"
        ],
        technologies: ["System Design", "API Contracts", "Decoupled Architecture", "Operational Traceability"]
      },
      {
        id: "compliance-tech",
        title: "Compliance Technology",
        description:
          "Desarrollo especializado para monitoreo transaccional, automatización de controles y soporte a requerimientos regulatorios.",
        capabilities: [
          "Monitoreo continuo de operaciones y análisis transaccional",
          "Automatización de reglas de control y alertas operativas",
          "Generación de reportes e información para auditorías",
          "Herramientas web para gestión de procesos de riesgo"
        ],
        technologies: ["Transaction Monitoring", "Regulatory Automation", "Audit Trails", "Python", "PostgreSQL"]
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
          "Architecting robust backend services, domain business logic, and APIs with an emphasis on maintainability and performance.",
        capabilities: [
          "RESTful APIs and decoupled services",
          "Business validation and domain logic handling",
          "Backend development in Node.js and Python",
          "Maintainable and modular code structures"
        ],
        technologies: ["Node.js", "Python", "JavaScript", "REST APIs", "SQL"]
      },
      {
        id: "systems-integration",
        title: "Systems & Enterprise Integration",
        description:
          "Connecting heterogeneous enterprise platforms, middleware orchestration, and cross-system transaction translation.",
        capabilities: [
          "SAP S/4HANA integrations (iFlows, IDocs, APIs)",
          "E-commerce connections (VTEX, Magento)",
          "Webhooks and secure data exchange protocols",
          "Message-level traceability and operational monitoring"
        ],
        technologies: ["SAP S/4HANA", "IDocs / RFC", "VTEX APIs", "Magento", "REST / Webhooks"]
      },
      {
        id: "data-engineering",
        title: "Data Engineering & Modeling",
        description:
          "Relational and document schema modeling, automated ETL pipelines, and data architectures built for auditability and stability.",
        capabilities: [
          "Normalized relational schemas in PostgreSQL and MySQL",
          "Persistence layer design with Supabase and Firebase Firestore",
          "Automated ingestion, validation, and staging pipelines",
          "Complex SQL query optimization and analytical structures"
        ],
        technologies: ["PostgreSQL", "MySQL", "Supabase", "Firebase Firestore", "Advanced SQL", "Python (ETL)"]
      },
      {
        id: "devops-infra",
        title: "DevOps & Infrastructure",
        description:
          "Environment isolation, reproducible deployment workflows, and operational automation across Linux and container ecosystems.",
        capabilities: [
          "Consistent containerization with Docker",
          "Linux server provisioning and administration (DonWeb, production servers)",
          "Automated operational tasks, cron jobs, and shell scripting",
          "Production deployment and environment configuration"
        ],
        technologies: ["Docker", "Linux (Fedora, Ubuntu)", "Bash / Shell Scripting", "DonWeb Server Admin"]
      },
      {
        id: "system-architecture",
        title: "Architecture & System Design",
        description:
          "Defining system boundaries, interface contracts, and resilient designs tailored for real-world production operations.",
        capabilities: [
          "Integration architecture and decoupling patterns",
          "Reliable schema and API contract specifications",
          "Operational observability and auditable execution",
          "Production lifecycle and maintainability design"
        ],
        technologies: ["System Design", "API Contracts", "Decoupled Architecture", "Operational Traceability"]
      },
      {
        id: "compliance-tech",
        title: "Compliance Technology",
        description:
          "Specialized engineering for transaction monitoring, automated risk checks, and statutory regulatory filings.",
        capabilities: [
          "Continuous transaction monitoring and heuristic data checks",
          "Automated risk controls and operational alert dispatch",
          "Audit-ready reporting and statutory metrics generation",
          "Web tooling for risk and compliance case triage"
        ],
        technologies: ["Transaction Monitoring", "Regulatory Automation", "Audit Trails", "Python", "PostgreSQL"]
      }
    ]
  }
};
