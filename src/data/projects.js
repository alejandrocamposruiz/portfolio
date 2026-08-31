export const projectsData = {
  es: {
    sectionTitle: "Proyectos & Despliegues Técnicos",
    sectionSubtitle:
      "Intervenciones técnicas en infraestructura, aprovisionamiento de servidores y puesta en operación de sistemas en producción.",
    projects: [
      {
        id: "albertus",
        name: "Panificación Albertus",
        category: "Infraestructura & Despliegue en Producción",
        role: "DevOps & Infrastructure",
        infrastructureProvider: "DonWeb (Linux)",
        attributionType: "TECHNICAL_DEPLOYMENT",
        status: "IMPLEMENTED",
        statusLabel: "IMPLEMENTED IN PRODUCTION",
        summary:
          "Despliegue, adaptación de código y puesta en operación de la plataforma web sobre infraestructura Linux alojada en DonWeb.",
        whatIDid: [
          "Aprovisionamiento y configuración integral del servidor Linux en DonWeb.",
          "Configuración del entorno de ejecución, dependencias y variables operativas de producción.",
          "Deployment de la aplicación web y refactorización/ajustes de código necesarios para su correcta ejecución en el servidor.",
          "Configuración de accesos, políticas de ingreso y seguridad básica del entorno.",
          "Resolución de incidencias de infraestructura, networking y puesta a punto operativa del servicio."
        ],
        technologies: ["Linux", "DonWeb", "DevOps", "Server Configuration", "Code Adaptation"],
        learning:
          "La puesta en producción abarca desde el aprovisionamiento de la infraestructura hasta la adaptación fina del código para garantizar estabilidad operativa."
      }
    ]
  },
  en: {
    sectionTitle: "Projects & Technical Deployments",
    sectionSubtitle:
      "Hands-on engineering interventions across infrastructure, server provisioning, and production operations.",
    projects: [
      {
        id: "albertus",
        name: "Panificación Albertus",
        category: "Infrastructure & Production Deployment",
        role: "DevOps & Infrastructure",
        infrastructureProvider: "DonWeb (Linux)",
        attributionType: "TECHNICAL_DEPLOYMENT",
        status: "IMPLEMENTED",
        statusLabel: "IMPLEMENTED IN PRODUCTION",
        summary:
          "Production deployment, codebase adaptation, and infrastructure setup on a DonWeb-hosted Linux server.",
        whatIDid: [
          "Full provisioning and configuration of the Linux production server on DonWeb.",
          "Configured runtime execution environments, dependencies, and production environment variables.",
          "Handled application deployment and codebase adaptations required for production readiness.",
          "Configured system access policies, entry points, and basic server security.",
          "Diagnosed and resolved infrastructure, networking, and deployment bottlenecks to ensure full service availability."
        ],
        technologies: ["Linux", "DonWeb", "DevOps", "Server Configuration", "Code Adaptation"],
        learning:
          "Production delivery spans from infrastructure provisioning to fine-grained code adaptations ensuring long-term runtime stability."
      }
    ]
  }
};
