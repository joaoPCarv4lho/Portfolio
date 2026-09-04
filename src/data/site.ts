/**
 * Fonte única de verdade para dados pessoais e links.
 * Tudo marcado com PLACEHOLDER precisa ser preenchido antes do deploy.
 */

export const site = {
  name: 'João Paulo Guedes Carvalho',
  shortName: 'João Paulo',
  initials: 'JP',
  role: 'Desenvolvedor de software · Back-end & Full-stack',
  location: 'Joinville, SC — Brasil',
  domain: 'joaopauloguedes.dev', // PLACEHOLDER
  url: 'https://joaopauloguedes.dev', // PLACEHOLDER
  description:
    'Desenvolvedor back-end e full-stack em Joinville/SC. Python, FastAPI e PostgreSQL aplicados a sistemas industriais, integrações e plataformas de dados.',
  availability: 'Aberto a novas oportunidades', // ou 'Indisponível no momento'
} as const;

export const contact = {
  email: 'joaopaullogcarvalho@gmail.com',
  whatsapp: '(47)99651-7488', // PLACEHOLDER
  github: 'https://github.com/joaoPCarv4lho', // PLACEHOLDER
  linkedin: 'https://www.linkedin.com/in/joao-paulo-guedes/', // PLACEHOLDER
  resume: '/curriculo.pdf', // PLACEHOLDER: coloque o PDF em public/
} as const;

export const nav = [
  { id: 'sobre', label: 'Sobre', index: '01' },
  { id: 'skills', label: 'Skills', index: '02' },
  { id: 'projetos', label: 'Projetos', index: '03' },
  { id: 'experiencia', label: 'Experiência', index: '04' },
  { id: 'contato', label: 'Contato', index: '05' },
] as const;

export const education = [
  {
    course: 'Bacharel em Engenharia de Software',
    institution: 'Univille Campus Joinville',
    period: '07/2026 - atual'
  },
  {
    course: 'CST em Mecatrônica Industrial',
    institution: 'Unisenai SC',
    period: '03/2023 — 12/2025',
  },
  {
    course: 'Técnico em Informática para Internet',
    institution: 'Senac SC',
    period: '05/2023 — 08/2024',
  },
] as const;

export const certifications = [
  {name: '[PCEP-30-02] PCEP - Certified Entry-Level Python Programmer', issuer: 'OpenEDG Python Institute', year: '07/2026'},
  { name: 'Cibersegurança', issuer: 'Cisco Networking Academy', year: '07/2023' },
  { name: 'Python Essentials 1', issuer: 'Cisco Networking Academy', year: '05/2023' },
  { name: 'Algoritmos e Lógica de Programação', issuer: 'Curso em Vídeo', year: '03/2023' },
] as const;
