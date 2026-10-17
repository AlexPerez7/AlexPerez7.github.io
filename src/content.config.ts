import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const proyectos = defineCollection({
  loader: glob({ base: './src/content/proyectos', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      tags: z.array(z.string()).default([]),
      repo: z.url().optional(),
      demo: z.url().optional(),
      featured: z.boolean().default(false),
      // Portada: color e ícono para la portada generada, o una imagen real opcional
      color: z.string().default('#6366f1'),
      icon: z.string().default('✦'),
      cover: image().optional(),
    }),
});

export const collections = { proyectos };
