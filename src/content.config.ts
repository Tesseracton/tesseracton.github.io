import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Each section of the single page is one markdown file in src/content/sections.
// Prose lives in the markdown body; structured bits (cards, CTAs) in frontmatter.
const sections = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/sections' }),
  schema: z.object({
    section: z.enum(['hero', 'about', 'services', 'approach', 'contact']),
    order: z.number(),
    eyebrow: z.string().optional(),
    title: z.string().optional(),
    subtitle: z.string().optional(),
    email: z.string().optional(),
    cta: z
      .object({ label: z.string(), href: z.string() })
      .optional(),
    secondaryCta: z
      .object({ label: z.string(), href: z.string() })
      .optional(),
    items: z
      .array(z.object({ title: z.string(), body: z.string() }))
      .optional(),
  }),
});

export const collections = { sections };
