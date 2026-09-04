import { defaultLang, ui, type Lang, type UIKey } from './ui';

/** Extrai o idioma da URL (`/en/...`). Cai no padrão enquanto o i18n está dormente. */
export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split('/');
  return segment in ui ? (segment as Lang) : defaultLang;
}

/** Tradutor com chaves tipadas: `t('hero.cta.projects')`. */
export function useTranslations(lang: Lang = defaultLang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}
