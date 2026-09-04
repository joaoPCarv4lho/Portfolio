import type { NumberLiteralType } from "typescript";

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  /** `null` = posição atual (renderiza o marcador "atual" na timeline). */
  end: string | null;
  summary: string;
  highlights: string[];
  stack: string[];
};


export const experience: ExperienceItem[] = [
  {
    role: 'Programador',
    company: 'DAQSYS | Testes e Medições',
    period: '09/2025 — atual',
    end: null,
    summary:
      'Automação e Aquisição de dados - Desenvolvimento de sistemas inteligentes para monitoramento e controle, reduzinfo falhas humanas e aumentando a integridade dos dados coletados.Consultoria Técnica e Levantamento de Soluções - Interface direta com stakeholders para transformar necessidades operacionais em especificações técnicas de alto impacto.',
    highlights: [],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'LabVIEW'],
  },
  {
    role: 'Estagiário em Desenvolvimento de Software',
    company: 'DAQSYS | Testes e Medições',
    period: '10/2023 - 15/2025',
    end: '2025',
    summary: '',
    highlights: [],
    stack: ['LabVIEW', 'SQLServer'],
  },
];
