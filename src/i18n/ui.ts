/**
 * i18n dormente. Hoje só `pt-BR` é publicado — os componentes já leem daqui,
 * então ativar o inglês é: preencher as strings `en`, descomentar o bloco i18n
 * em astro.config.mjs e criar src/pages/en/index.astro.
 */
export const defaultLang = 'pt-BR' as const;

export const languages = {
  'pt-BR': 'Português',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const ui = {
  'pt-BR': {
    'nav.skip': 'Pular para o conteúdo',
    'nav.menu': 'Menu de navegação',
    'nav.open': 'Abrir menu',
    'nav.close': 'Fechar menu',
    'theme.toggle': 'Alternar tema claro e escuro',

    'hero.greeting': 'Olá, eu sou',
    'hero.cta.projects': 'Ver projetos',
    'hero.cta.contact': 'Entrar em contato',
    'hero.scroll': 'Role para explorar',

    'about.title': 'Sobre',
    'about.education': 'Formação',
    'about.certifications': 'Certificações',

    'skills.title': 'Skills',
    'skills.subtitle': 'Ferramentas que uso para levar um problema do enunciado ao deploy.',

    'projects.title': 'Projetos',
    'projects.subtitle': 'Problema, solução e resultado de cada um.',
    'projects.problem': 'Problema',
    'projects.solution': 'Solução',
    'projects.result': 'Resultado',
    'projects.repo': 'Repositório',
    'projects.demo': 'Demo',
    'projects.soon': 'Link em breve',
    'projects.confidential': 'Cliente sob confidencialidade',

    'experience.title': 'Experiência',
    'experience.current': 'atual',

    'contact.title': 'Contato',
    'contact.subtitle': 'Aberto a conversas sobre back-end, integrações e sistemas industriais.',
    'contact.email': 'Enviar e-mail',
    'contact.copy': 'Copiar e-mail',
    'contact.copied': 'Copiado!',
    'contact.resume': 'Currículo (PDF)',

    'footer.built': 'Construído com Astro, Tailwind CSS e TypeScript.',
    'footer.rights': 'Todos os direitos reservados.',
  },

  // PLACEHOLDER: traduções em inglês. Mantenha as mesmas chaves.
  en: {
    'nav.skip': 'Skip to content',
    'nav.menu': 'Navigation menu',
    'nav.open': 'Open menu',
    'nav.close': 'Close menu',
    'theme.toggle': 'Toggle light and dark theme',

    'hero.greeting': "Hi, I'm",
    'hero.cta.projects': 'View projects',
    'hero.cta.contact': 'Get in touch',
    'hero.scroll': 'Scroll to explore',

    'about.title': 'About',
    'about.education': 'Education',
    'about.certifications': 'Certifications',

    'skills.title': 'Skills',
    'skills.subtitle': 'The tools I use to take a problem from statement to deploy.',

    'projects.title': 'Projects',
    'projects.subtitle': 'Problem, solution and outcome for each one.',
    'projects.problem': 'Problem',
    'projects.solution': 'Solution',
    'projects.result': 'Outcome',
    'projects.repo': 'Repository',
    'projects.demo': 'Demo',
    'projects.soon': 'Link coming soon',
    'projects.confidential': 'Client under NDA',

    'experience.title': 'Experience',
    'experience.current': 'current',

    'contact.title': 'Contact',
    'contact.subtitle': 'Open to conversations about back-end, integrations and industrial systems.',
    'contact.email': 'Send email',
    'contact.copy': 'Copy email',
    'contact.copied': 'Copied!',
    'contact.resume': 'Resume (PDF)',

    'footer.built': 'Built with Astro, Tailwind CSS and TypeScript.',
    'footer.rights': 'All rights reserved.',
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
