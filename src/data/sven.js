export const svenData = {
  es: {
    sectionTag: "Iniciativa Tecnológica Propia",
    title: "SVEN",
    subtitle: "Technology & Digital Solutions",
    organizationDescription:
      "SVEN es una iniciativa tecnológica orientada al desarrollo de productos, plataformas y soluciones digitales. Cuenta con identidad propia y desarrolla sistemas para diferentes necesidades operativas.",
    relationshipTitle: "Participación de Alejandro en SVEN",
    relationshipSummary:
      "Participación técnica en desarrollo de productos, arquitectura de datos, infraestructura y automatización.",
    highlights: [
      "Desarrollo e implementación de componentes y servicios backend para el ecosistema de la iniciativa.",
      "Modelado y persistencia de datos relacionales y documentales utilizando Supabase y Firebase Firestore.",
      "Participación en decisiones de arquitectura técnica, automatización de tareas y evolución operativa de los sistemas.",
      "Integración de flujos de trabajo técnicos y soporte a la infraestructura de los proyectos."
    ],
    confirmedTechnologies: ["Supabase", "Firebase Firestore", "Backend Services", "Data Modeling"],
    projectsSectionTitle: "Proyectos Desarrollados bajo SVEN",
    projects: [
      {
        id: "koko",
        name: "Koko",
        category: "Ecosistema Digital & Arquitectura de Datos",
        organization: "SVEN",
        alejandroRole: "Data Architecture & Strategy",
        status: "IMPLEMENTED",
        statusLabel: "IMPLEMENTED",
        summary:
          "Diseño de la estructura tecnológica y de datos necesaria para soportar los productos y servicios digitales del proyecto.",
        whatIDid: [
          "Definición y articulación de la estrategia y arquitectura de datos para el ecosistema digital.",
          "Diseño, implementación y puesta en operación del servidor de streaming (Streaming Server), participando en su arquitectura y construcción funcional.",
          "Diseño e implementación del servidor de soporte para el menú digital de Let's Cook (Let's Cook Menu Server), incluyendo la infraestructura para su operación."
        ],
        subDevelopments: [
          {
            name: "Streaming Server",
            description: "Diseño, implementación y puesta en operación del servidor de streaming utilizado por Koko."
          },
          {
            name: "Let's Cook — Menu Server",
            description: "Diseño e implementación del servidor utilizado para soportar el menú digital de Let's Cook e infraestructura asociada."
          }
        ],
        technologies: ["Data Architecture", "Server Infrastructure", "Streaming Architecture"]
      },
      {
        id: "sven-core",
        name: "Servicios Core & Persistencia de Datos",
        category: "Infraestructura & Datos de la Plataforma",
        organization: "SVEN",
        alejandroRole: "Backend & Data Development",
        status: "IMPLEMENTED",
        statusLabel: "IMPLEMENTED & IN EVOLUTION",
        summary:
          "Estructuración de esquemas de datos, persistencia y servicios para la operación técnica de los módulos del equipo.",
        whatIDid: [
          "Implementación de esquemas de datos y persistencia utilizando Supabase y Firebase Firestore.",
          "Automatización de procesos operativos y flujos de trabajo técnicos para soporte del equipo.",
          "Construcción de servicios desacoplados para la evolución continua de la plataforma."
        ],
        technologies: ["Supabase", "Firebase Firestore", "Automation Scripting"]
      }
    ],
    learning:
      "El desarrollo de productos dentro de una iniciativa tecnológica exige construir sobre componentes desacoplados y servicios confiables para iterar con agilidad sin comprometer la estabilidad futura."
  },
  en: {
    sectionTag: "Own Technology Venture",
    title: "SVEN",
    subtitle: "Technology & Digital Solutions",
    organizationDescription:
      "SVEN is a technology initiative focused on building digital products, platforms, and software solutions. It holds its own identity and develops systems tailored to distinct operational needs.",
    relationshipTitle: "Alejandro's Technical Role at SVEN",
    relationshipSummary:
      "Technical participation in product development, data architecture, infrastructure, and automation.",
    highlights: [
      "Development and implementation of backend services and software components across the initiative's ecosystem.",
      "Relational and document data modeling and persistence using Supabase and Firebase Firestore for dedicated modules.",
      "Participation in system architecture choices, operational task automation, and technical reliability.",
      "Cross-functional technical integration and infrastructure support across projects."
    ],
    confirmedTechnologies: ["Supabase", "Firebase Firestore", "Backend Services", "Data Modeling"],
    projectsSectionTitle: "Projects Developed under SVEN",
    projects: [
      {
        id: "koko",
        name: "Koko",
        category: "Digital Ecosystem & Data Architecture",
        organization: "SVEN",
        alejandroRole: "Data Architecture & Strategy",
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
            description: "Architecture, implementation, and production deployment of Koko's streaming server."
          },
          {
            name: "Let's Cook — Menu Server",
            description: "Design and implementation of the server powering Let's Cook digital menu and underlying hosting setup."
          }
        ],
        technologies: ["Data Architecture", "Server Infrastructure", "Streaming Architecture"]
      },
      {
        id: "sven-core",
        name: "Core Services & Data Persistence",
        category: "Platform Data & Infrastructure",
        organization: "SVEN",
        alejandroRole: "Backend & Data Development",
        status: "IMPLEMENTED",
        statusLabel: "IMPLEMENTED & IN EVOLUTION",
        summary:
          "Structuring data schemas, persistence layers, and backend services to support technical operations across team modules.",
        whatIDid: [
          "Implemented data schemas and persistence models using Supabase and Firebase Firestore.",
          "Automated operational workflows and technical tasks to streamline team execution.",
          "Engineered decoupled backend services to enable continuous platform evolution."
        ],
        technologies: ["Supabase", "Firebase Firestore", "Automation Scripting"]
      }
    ],
    learning:
      "Product engineering within a technology venture demands architectural discipline: building on decoupled components and reliable services enables rapid iteration without compromising system stability."
  }
};
