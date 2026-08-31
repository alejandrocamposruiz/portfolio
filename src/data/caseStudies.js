export const caseStudiesData = {
  es: {
    sectionTitle: "Casos de Estudio & Proyectos",
    sectionSubtitle:
      "Evidencia de trabajo técnico en arquitectura de sistemas, desarrollo de producto, integraciones, datos e infraestructura.",
    cases: [
      {
        id: "sven",
        indexNumber: "01",
        isSven: true,
        name: "SVEN",
        subtitle: "Digital Products · Systems Architecture · Technical Development",
        tag: "Proyecto Propio · Iniciativa de Producto",
        role: "Technical / Product Development",
        status: "IMPLEMENTED",
        statusLabel: "PROYECTO PROPIO · EN EVOLUCIÓN",
        summary:
          "Desarrollo e implementación de componentes y servicios para el ecosistema de SVEN, participando en soluciones orientadas a producto, datos e infraestructura.",
        whatIDid: [
          "Desarrollo e implementación de componentes y servicios backend para el equipo.",
          "Modelado y persistencia de datos utilizando Supabase y Firebase Firestore para módulos específicos del producto.",
          "Participación en decisiones de arquitectura técnica, automatización de tareas y evolución operativa del sistema.",
          "Colaboración transversal en la integración de flujos de trabajo e infraestructura de soporte."
        ],
        subProjects: [
          {
            name: "Core Data & Backend Services",
            description: "Estructuración de esquemas de datos, persistencia y servicios para la operación de la plataforma.",
            role: "Backend & Data Development",
            technologies: ["Supabase", "Firebase Firestore"]
          },
          {
            name: "Operations & Task Automation",
            description: "Automatización de procesos operativos y flujos de trabajo técnicos para soporte del equipo.",
            role: "Systems & Automation",
            technologies: ["Automation Scripting", "Cloud Workflows"]
          }
        ],
        technologies: ["Supabase", "Firebase Firestore", "Backend Services", "Data Modeling"],
        learning:
          "El desarrollo de producto requiere disciplina arquitectónica: construir sobre componentes desacoplados y servicios confiables permite iterar con rapidez sin generar deuda técnica temprana."
      },
      {
        id: "koko",
        indexNumber: "02",
        name: "Koko",
        tag: "Arquitectura de Datos & Ecosistema Digital",
        role: "Data Architecture & Strategy",
        status: "IMPLEMENTED",
        statusLabel: "IMPLEMENTED",
        summary:
          "Diseño de la estructura tecnológica y de datos necesaria para soportar los productos y servicios digitales del proyecto.",
        whatIDid: [
          "Definición y articulación de la estrategia y arquitectura de datos para el ecosistema digital de la plataforma.",
          "Diseño, implementación y puesta en operación del servidor de streaming (Streaming Server), participando en su arquitectura y construcción funcional.",
          "Diseño e implementación del servidor de soporte para el menú digital de Let's Cook (Let's Cook Menu Server), incluyendo la infraestructura para su operación."
        ],
        subDevelopments: [
          {
            name: "Streaming Server",
            description: "Diseño, implementación y puesta en operación del servidor de streaming utilizado por Koko.",
            technologies: ["Por completar"]
          },
          {
            name: "Let's Cook — Menu Server",
            description: "Diseño e implementación del servidor utilizado para soportar el menú digital de Let's Cook e infraestructura asociada.",
            technologies: ["Por completar"]
          }
        ],
        technologies: ["Data Architecture", "Server Infrastructure", "Streaming Architecture", "[Por completar]"],
        learning:
          "Diseñar servidores dedicados para funcionalidades clave garantiza estabilidad e independiza los ciclos de escalado de cada servicio."
      },
      {
        id: "albertus",
        indexNumber: "03",
        name: "Panificación Albertus",
        tag: "Infraestructura & Despliegue en Producción",
        role: "DevOps & Infrastructure",
        infrastructureProvider: "DonWeb (Linux)",
        status: "IMPLEMENTED",
        statusLabel: "IMPLEMENTED IN PRODUCTION",
        summary:
          "Despliegue, adaptación de código y puesta en operación de la plataforma web sobre infraestructura Linux alojada en DonWeb.",
        whatIDid: [
          "Aprovisionamiento y configuración integral del servidor Linux en DonWeb.",
          "Configuración del entorno de ejecución, dependencias y variables de producción.",
          "Deployment de la aplicación web y refactorización/ajustes de código necesarios para su correcta ejecución.",
          "Configuración de accesos, políticas de ingreso y seguridad básica del servidor.",
          "Resolución de problemas de infraestructura, networking y puesta a punto operativa del servicio."
        ],
        technologies: ["Linux", "DonWeb", "DevOps", "Server Configuration", "Code Adaptation", "[Por completar]"],
        learning:
          "El rol de DevOps en producción abarca desde el aprovisionamiento del servidor hasta la adaptación fina del código para su entorno real."
      },
      {
        id: "enterprise-integrations",
        indexNumber: "04",
        isConfidential: true,
        name: "Enterprise Integrations & ERP Middleware",
        tag: "Integraciones B2B & Middleware · Caso Confidencial",
        role: "Systems & Integration Engineering",
        status: "CONFIDENTIAL",
        statusLabel: "CONFIDENTIAL · IMPLEMENTED IN PROD",
        summary:
          "Determinados proyectos de integración empresarial realizados en entornos corporativos (experiencia en Uniber) no pueden exhibir código ni capturas por acuerdos de confidencialidad.",
        whatIDid: [
          "Diseño e implementación de integraciones entre SAP S/4HANA (iFlows, IDocs, APIs) y plataformas externas como VTEX y Magento.",
          "Desarrollo de servicios backend para validación, estandarización y traducción de datos transaccionales.",
          "Automatización de infraestructura con Docker y Linux para soporte operativo de integraciones críticas.",
          "Coordinación técnica transversal entre equipos de IT, consultores funcionales y áreas de negocio."
        ],
        technologies: ["SAP S/4HANA", "SAP Integration Suite", "Node.js", "VTEX APIs", "Magento", "Docker", "SQL"],
        learning:
          "En integraciones corporativas críticas, la trazabilidad de los datos y el manejo de inconsistencias son esenciales para la continuidad del negocio."
      },
      {
        id: "compliance-pipelines",
        indexNumber: "05",
        isConfidential: true,
        name: "Compliance Technology & Monitoreo Transaccional",
        tag: "Fintech & Regulatory Tech · Caso Confidencial",
        role: "Data Engineering & Compliance Systems",
        status: "CONFIDENTIAL",
        statusLabel: "CONFIDENTIAL · IMPLEMENTED IN PROD",
        summary:
          "Proyectos desarrollados en entornos fintech regulados (experiencia en Totalcoin) orientados a monitoreo transaccional y cumplimiento normativo bajo estricta confidencialidad.",
        whatIDid: [
          "Desarrollo de soluciones tecnológicas y tuberías de datos para monitoreo transaccional y alertas operativas.",
          "Automatización de procesos de Compliance mediante Python, PostgreSQL y servicios web.",
          "Desarrollo de aplicaciones y paneles web (ASP.NET, React) para seguimiento de procesos y resolución de alertas.",
          "Generación de controles automáticos, indicadores e información requerida para auditorías y procesos regulatorios."
        ],
        technologies: ["Python", "PostgreSQL", "SQL Avanzado", "ASP.NET", "React", "Power BI", "Docker"],
        learning:
          "En tecnología de Compliance, la consistencia de los datos y la trazabilidad de cada control son requisitos no negociables."
      },
      {
        id: "student-portal",
        indexNumber: "06",
        name: "Plataforma de Autogestión Estudiantil",
        tag: "Sistema Académico & PWA",
        role: "Architecture & System Design",
        status: "DESIGNED / PROPOSED",
        statusLabel: "DESIGNED & PHASED ROADMAP",
        summary:
          "Propuesta de arquitectura y diseño de sistema para transformar un portal informativo en una plataforma web de autogestión académica.",
        whatIDid: [
          "Modelado relacional de datos para materias, cursadas y árboles de correlatividades académicas.",
          "Diseño de arquitectura de servicios backend y endpoints para consulta y seguimiento del avance del estudiante.",
          "Propuesta funcional de trámites digitales y buscador de aulas y cátedras.",
          "Diseño de interfaz responsive y navegación contextual estructurada por roles."
        ],
        featureStatus: [
          {
            category: "DESIGNED / PROPOSED",
            items: [
              "Modelado de datos para grafos de correlatividades y avance académico.",
              "Arquitectura de servicios REST para trámites digitales y panel de administración.",
              "Diseño de experiencia de usuario y navegación adaptativa PWA."
            ]
          },
          {
            category: "PLANNED",
            items: [
              "Fase de implementación del motor de correlatividades.",
              "Módulo de notificaciones segmentadas por cohorte y estado académico.",
              "Tableros de analítica de cursadas y retención estudiantil."
            ]
          }
        ],
        technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "REST API Design"],
        learning:
          "Un diseño exhaustivo del modelo de datos previo a la codificación previene cuellos de botella en sistemas con dependencias complejas como las correlatividades."
      }
    ]
  },
  en: {
    sectionTitle: "Case Studies & Projects",
    sectionSubtitle:
      "Technical evidence across system architecture, product development, integrations, data engineering, and infrastructure operations.",
    cases: [
      {
        id: "sven",
        indexNumber: "01",
        isSven: true,
        name: "SVEN",
        subtitle: "Digital Products · Systems Architecture · Technical Development",
        tag: "Own Project · Product Initiative",
        role: "Technical / Product Development",
        status: "IMPLEMENTED",
        statusLabel: "OWN PROJECT · IN EVOLUTION",
        summary:
          "Development and implementation of components and services across the SVEN ecosystem, contributing to product features, data modeling, and infrastructure.",
        whatIDid: [
          "Developed and delivered backend services and software components for the team.",
          "Implemented data modeling and persistence using Supabase and Firebase Firestore for dedicated product modules.",
          "Participated in technical architecture decisions, process automation, and system reliability.",
          "Cross-functional collaboration in workflow integrations and supporting infrastructure."
        ],
        subProjects: [
          {
            name: "Core Data & Backend Services",
            description: "Structuring data schemas, persistence layers, and backend services for platform operations.",
            role: "Backend & Data Development",
            technologies: ["Supabase", "Firebase Firestore"]
          },
          {
            name: "Operations & Task Automation",
            description: "Automating operational workflows and technical tasks to streamline team execution.",
            role: "Systems & Automation",
            technologies: ["Automation Scripting", "Cloud Workflows"]
          }
        ],
        technologies: ["Supabase", "Firebase Firestore", "Backend Services", "Data Modeling"],
        learning:
          "Product engineering demands architectural discipline: building on decoupled components and reliable services enables rapid iteration without incurring early technical debt."
      },
      {
        id: "koko",
        indexNumber: "02",
        name: "Koko",
        tag: "Data Architecture & Digital Ecosystem",
        role: "Data Architecture & Strategy",
        status: "IMPLEMENTED",
        statusLabel: "IMPLEMENTED",
        summary:
          "Designing the technological and data architecture required to support the project's digital products and operational services.",
        whatIDid: [
          "Defined and structured data strategy and technical architecture for the platform's digital ecosystem.",
          "Designed, implemented, and launched Koko's dedicated streaming server, participating in its architecture and functional construction.",
          "Architected and implemented the server supporting Let's Cook digital menu (Let's Cook Menu Server), including operational infrastructure setup."
        ],
        subDevelopments: [
          {
            name: "Streaming Server",
            description: "Architecture, implementation, and production deployment of Koko's streaming server.",
            technologies: ["To be completed"]
          },
          {
            name: "Let's Cook — Menu Server",
            description: "Design and implementation of the server powering Let's Cook digital menu and underlying hosting setup.",
            technologies: ["To be completed"]
          }
        ],
        technologies: ["Data Architecture", "Server Infrastructure", "Streaming Architecture", "[To be completed]"],
        learning:
          "Designing purpose-built servers for key functionalities ensures operational resilience and decouples scaling dynamics across subsystems."
      },
      {
        id: "albertus",
        indexNumber: "03",
        name: "Panificación Albertus",
        tag: "Infrastructure & Production Deployment",
        role: "DevOps & Infrastructure",
        infrastructureProvider: "DonWeb (Linux)",
        status: "IMPLEMENTED",
        statusLabel: "IMPLEMENTED IN PRODUCTION",
        summary:
          "Production deployment, codebase adaptation, and infrastructure setup on a DonWeb-hosted Linux server.",
        whatIDid: [
          "Full provisioning and configuration of the Linux production server on DonWeb.",
          "Configured runtime execution environment, system dependencies, and environment variables.",
          "Handled application deployment and codebase adaptations required for production readiness.",
          "Configured system access policies, entry points, and basic server security.",
          "Diagnosed and resolved infrastructure, networking, and deployment issues to ensure full service availability."
        ],
        technologies: ["Linux", "DonWeb", "DevOps", "Server Configuration", "Code Adaptation", "[To be completed]"],
        learning:
          "DevOps ownership spans from infrastructure provisioning to fine-grained code adaptation for reliable production runtime."
      },
      {
        id: "enterprise-integrations",
        indexNumber: "04",
        isConfidential: true,
        name: "Enterprise Integrations & ERP Middleware",
        tag: "Enterprise B2B Integrations · Confidential Case",
        role: "Systems & Integration Engineering",
        status: "CONFIDENTIAL",
        statusLabel: "CONFIDENTIAL · IMPLEMENTED IN PROD",
        summary:
          "Selected enterprise integration projects delivered across corporate environments (Uniber experience) cannot be publicly displayed due to non-disclosure agreements.",
        whatIDid: [
          "Designed and implemented integrations connecting SAP S/4HANA (iFlows, IDocs, APIs) with external platforms like VTEX and Magento.",
          "Developed backend services for transactional data validation, standardization, and payload transformation.",
          "Standardized infrastructure automation using Docker and Linux for mission-critical integration middleware.",
          "Drove cross-functional coordination between IT engineering, ERP functional consultants, and business stakeholders."
        ],
        technologies: ["SAP S/4HANA", "SAP Integration Suite", "Node.js", "VTEX APIs", "Magento", "Docker", "SQL"],
        learning:
          "In mission-critical enterprise integrations, end-to-end data traceability and robust error handling are vital for business continuity."
      },
      {
        id: "compliance-pipelines",
        indexNumber: "05",
        isConfidential: true,
        name: "Compliance Technology & Transactional Monitoring",
        tag: "Fintech & Regulatory Tech · Confidential Case",
        role: "Data Engineering & Compliance Systems",
        status: "CONFIDENTIAL",
        statusLabel: "CONFIDENTIAL · IMPLEMENTED IN PROD",
        summary:
          "Projects delivered within regulated fintech environments (Totalcoin experience) dedicated to transactional monitoring and statutory compliance under strict confidentiality.",
        whatIDid: [
          "Developed technological solutions and data pipelines for continuous transaction monitoring and operational alert triage.",
          "Automated compliance workflows utilizing Python, PostgreSQL, and supporting web services.",
          "Built web applications and dashboards (ASP.NET, React) for case tracking and risk alert resolution.",
          "Engineered automated controls, metrics, and audit-ready data required for regulatory governance."
        ],
        technologies: ["Python", "PostgreSQL", "Advanced SQL", "ASP.NET", "React", "Power BI", "Docker"],
        learning:
          "In compliance technology, data consistency and immutable audit trails are fundamental non-negotiable requirements."
      },
      {
        id: "student-portal",
        indexNumber: "06",
        name: "Student Self-Service Platform",
        tag: "Academic System & PWA",
        role: "Architecture & System Design",
        status: "DESIGNED / PROPOSED",
        statusLabel: "DESIGNED & PHASED ROADMAP",
        summary:
          "Architectural proposal and system design to transform an informative student portal into a comprehensive self-service academic web platform.",
        whatIDid: [
          "Modeled relational database schemas for courses, schedules, and academic prerequisite trees.",
          "Designed service architecture and REST endpoints for tracking student academic progress.",
          "Structured functional blueprints for digital procedure submissions and classroom/course directory search.",
          "Created responsive interface layouts and role-based access workflows."
        ],
        featureStatus: [
          {
            category: "DESIGNED / PROPOSED",
            items: [
              "Domain data models for complex prerequisite graphs and degree tracking.",
              "REST service architecture for digital student procedures and admin management.",
              "User experience workflows and adaptive PWA layout design."
            ]
          },
          {
            category: "PLANNED",
            items: [
              "Implementation phase for the core prerequisite calculation engine.",
              "Segmented communication module for cohort and academic status notifications.",
              "Institutional analytics dashboards for course retention insights."
            ]
          }
        ],
        technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "REST API Design"],
        learning:
          "Rigorous upfront data modeling prevents architectural bottlenecks when dealing with complex relational dependency graphs like academic prerequisites."
      }
    ]
  }
};
