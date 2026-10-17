// Experiencia, formación y certificaciones (desde el perfil de LinkedIn).
export const experience = [
  {
    role: 'Cybersecurity Consultant',
    company: 'Assertiva S.A.',
    period: 'Sep 2024 – actualidad',
    location: 'Santiago, Chile',
    highlights: [
      'Administración de soluciones PAM (CyberArk): accesos privilegiados, cuentas y políticas de seguridad en entornos corporativos.',
      'Gestión centralizada de soluciones EDR: políticas, exclusiones y respuesta a incidentes.',
      'Análisis y monitoreo de eventos de seguridad con SIEM.',
      'Proyectos internos de hardening orientados al cumplimiento de ISO 27001.',
      'Gestión de vulnerabilidades para fortalecer la postura de seguridad.',
      'Consultoría y documentación técnica, diseñando procesos de seguridad estandarizados.',
      'Automatizaciones y consumo de APIs para optimizar tareas recurrentes en herramientas de seguridad.',
    ],
  },
  {
    role: 'Analista de Datos y Gestión de Información Junior',
    company: 'CCU',
    period: 'Oct 2023 – Ene 2024',
    location: 'Chile',
    highlights: [
      'Análisis de bases de datos en SAP y dashboards en Power BI y Google Data Studio para dar visibilidad a los inventarios de repuestos entre plantas.',
      'Detección de oportunidades de mejora para redistribuir recursos entre plantas.',
      'Automatización de reportes con Google Apps Script y Excel avanzado.',
    ],
  },
  {
    role: 'Ayudante de Electricista y Soporte TI',
    company: 'Municipalidad de Pumanque',
    period: 'Dic 2019 – Feb 2020',
    location: "Pumanque, O'Higgins",
    highlights: [
      'Instalación, mantenimiento y reparación de sistemas eléctricos municipales.',
      'Configuración y mantenimiento de hardware y software municipal.',
    ],
  },
];

export const education: {
  title: string;
  school: string;
  period: string;
  note?: string;
  /** Enlace opcional de la nota (p. ej. al proyecto de título, si tiene página) */
  noteHref?: string;
}[] = [
  {
    title: 'Ingeniería en Informática',
    school: 'Duoc UC',
    period: '2020 – 2024',
    note: 'Proyecto de título: Pandas-AI',
  },
  {
    title: 'Técnico de Nivel Medio en Electrónica',
    school: 'Liceo Bicentenario Instituto Politécnico Santa Cruz',
    period: '2018 – 2019',
  },
];

export const certifications = [
  'Privileged Access Management (PAM) Install and Configure for Partners',
  'XM Cyber CUE – Certified User Expert',
  'Conexión y protección: Redes y seguridad de redes',
  'Ve a lo seguro: Gestiona los riesgos de seguridad',
  'Fundamentos del desarrollo web: Full Stack o Front-end',
];

export const languages = [{ name: 'Inglés', level: 'Profesional' }];
