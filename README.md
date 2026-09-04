<<<<<<< HEAD
# Portfolio
=======
# Portfólio — João Paulo Guedes Carvalho

Site estático de portfólio construído com **Astro + TypeScript + Tailwind CSS v4**.
Zero JavaScript de framework: só alguns scripts vanilla para tema, menu mobile e
animações de entrada.

## Comandos

| Comando           | Ação                                              |
| :---------------- | :------------------------------------------------ |
| `npm install`     | Instala as dependências                            |
| `npm run dev`     | Servidor local em `localhost:4321`                 |
| `npm run build`   | Build de produção em `./dist/`                     |
| `npm run preview` | Serve o build localmente antes do deploy           |
| `npm run check`   | Checagem de tipos (`astro check`)                  |

---

## O que preencher antes de publicar

Tudo que falta está marcado com `PLACEHOLDER` no código:

```bash
grep -rn "PLACEHOLDER" src/ public/ astro.config.mjs
```

| Arquivo                          | O que preencher                                       |
| :------------------------------- | :---------------------------------------------------- |
| `src/data/site.ts`               | E-mail, GitHub, LinkedIn, domínio, período dos cursos, emissores das certificações |
| `src/data/experience.ts`         | Histórico profissional real (empresa, cargo, período, entregas) |
| `src/content/projects/*.md`      | Links de repositório e demo, período e capa de cada projeto |
| `astro.config.mjs`               | Constante `SITE` com o domínio final                   |
| `public/robots.txt`              | Domínio no `Sitemap:`                                  |
| `public/og-image.png`            | Imagem 1200×630 para redes sociais (ainda não existe)  |
| `public/curriculo.pdf`           | Currículo em PDF (link do botão na seção Contato)      |
| `public/images/projects/*.png`   | Capas 1200×750 — depois, aponte o campo `cover` no `.md` |

---

## Estrutura

```
src/
├── components/
│   ├── layout/      Header, Footer, ThemeToggle
│   ├── sections/    Hero, About, Skills, Projects, Experience, Contact
│   └── ui/          Section, SectionHeading, Button, Tag, Icon, ProjectCard
├── content/
│   └── projects/    um .md por projeto (frontmatter validado por Zod)
├── content.config.ts
├── data/            site.ts, skills.ts, experience.ts
├── i18n/            ui.ts (strings), utils.ts — i18n dormente
├── layouts/         BaseLayout.astro (SEO, fontes, tema, JSON-LD)
├── pages/           index.astro
└── styles/          global.css (design tokens Terminal Ink)
```

### Adicionar um projeto

Crie `src/content/projects/meu-projeto.md`. O `order` define a posição na lista;
o build falha se algum campo obrigatório do frontmatter estiver faltando.

### Trocar as cores

Todas as cores são variáveis CSS em `src/styles/global.css` (`:root` para o tema
claro, `[data-theme='dark']` para o escuro). Os componentes usam só tokens
semânticos — `bg-canvas`, `text-ink`, `text-muted`, `border-line`, `text-accent` —
então trocar o acento em um lugar repinta o site inteiro.

---

## Ativar a versão em inglês (i18n)

A estrutura já existe, dormente. Para ligar:

1. Descomente o bloco `i18n` em `astro.config.mjs`.
2. Preencha/revise as strings `en` em `src/i18n/ui.ts`.
3. Crie `src/pages/en/index.astro` com o mesmo conteúdo de `src/pages/index.astro`.
4. Adicione um seletor de idioma no `Header.astro` (os utilitários `getLangFromUrl`
   e `useTranslations` já resolvem o idioma pela URL).
5. Traduza os textos dos projetos criando `src/content/projects/en/*.md` e
   filtrando a coleção por idioma.

---

## Deploy

O build gera HTML estático em `dist/` — serve em qualquer host.

### Vercel (recomendado)

1. Faça o push do repositório para o GitHub.
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório.
3. A Vercel detecta o Astro sozinha: build `npm run build`, output `dist`.
4. Deploy. Cada push na `main` publica; cada PR ganha uma preview URL.
5. Domínio próprio em **Settings → Domains** — depois atualize `SITE` em
   `astro.config.mjs` e o `Sitemap:` em `public/robots.txt`.

Pela CLI:

```bash
npx vercel --prod
```

### Netlify

Crie `netlify.toml` na raiz:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

Depois importe o repositório em [app.netlify.com](https://app.netlify.com).

### GitHub Pages

Publicando em `usuario.github.io/portfolio` (subdiretório), ajuste
`astro.config.mjs` com `base: '/portfolio'`. Em domínio próprio ou em
`usuario.github.io`, não mexa no `base`.

Crie `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: withastro/action@v3
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

Em **Settings → Pages**, selecione **GitHub Actions** como origem.

---

## Acessibilidade e performance

- Mobile-first, responsivo de 320px para cima.
- Contraste AA nos dois temas; foco visível em todos os elementos interativos.
- Link "pular para o conteúdo", landmarks semânticos e `aria-label` na navegação.
- `prefers-reduced-motion` desliga animações e o scroll suave.
- Fontes variáveis self-hosted (sem request a terceiros), `font-display: swap`.
- Sem JS de framework — o único JS é vanilla, inline e pequeno.
>>>>>>> f55c779 (create my portfolio)
