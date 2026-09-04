import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Projetos vivem em Markdown para facilitar a edição.
 * O frontmatter é validado no build — se faltar campo, o build quebra.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    /** Subtítulo de uma linha, exibido sob o título. */
    tagline: z.string(),
    /** Narrativa curta: problema → solução → resultado. */
    problem: z.string(),
    solution: z.string(),
    result: z.string(),
    stack: z.array(z.string()),
    /** Ordem de exibição (1 = primeiro). */
    order: z.number(),
    featured: z.boolean().default(false),
    period: z.string().optional(),
    /** PLACEHOLDER: preencha quando os links existirem. null = botão desabilitado. */
    repo: z.url().nullable().default(null),
    demo: z.url().nullable().default(null),
    /** Caminho em /public. null = card sem imagem (fallback tipográfico). */
    cover: z.string().nullable().default(null),
    confidential: z.boolean().default(false),
  }),
});

export const collections = { projects };
