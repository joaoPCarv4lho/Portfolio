export type SkillGroup = {
  /** Rótulo curto exibido em mono no cabeçalho do grupo. */
  key: string;
  title: string;
  description: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    key: 'core',
    title: 'Back-end',
    description: 'Onde passo a maior parte do tempo: APIs, modelagem de dados e regra de negócio.',
    items: [
      'Python',
      'FastAPI',
      'SQLAlchemy (async)',
      'Pydantic V2',
      'PostgreSQL',
      'Alembic',
      'APScheduler',
      'WebSocket',
      'JWT / RBAC',
    ],
  },
  {
    key: 'front',
    title: 'Front-end',
    description: 'Interfaces que consomem esses back-ends, com foco em uso real no dia a dia.',
    items: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'Zustand', 'PySide6 / Qt'],
  },
  {
    key: 'infra',
    title: 'Infra & Dados',
    description: 'Do banco ao deploy — containerização, ambientes e observabilidade básica.',
    items: ['Docker', 'AWS', 'Git / GitHub Actions', 'Linux', 'Modelagem relacional'],
  },
  {
    key: 'ind',
    title: 'Industrial & Integrações',
    description: 'Herança da formação em mecatrônica: sistemas que conversam com o chão de fábrica.',
    items: ['LabVIEW', 'Sockets TCP', 'CLP Siemens', 'IEC-61850', 'Integração de sistemas'],
  },
];

/** Destaques exibidos como "chips" no hero. */
export const heroStack = ['python', 'fastapi', 'postgresql', 'typescript', 'react', 'docker'];
