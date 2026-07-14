import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Each section of the home page is one markdown file in src/content/sections/.
// Prose (paragraphs) lives in the markdown body; structured bits (headings,
// cards, calls-to-action) live in the frontmatter below.
const card = z.object({
  title: z.string(),
  body: z.string(),
});

const link = z.object({
  label: z.string(),
  href: z.string(),
});

// A capability card with a coloured accent bar (used by the evidence section).
const pillar = z.object({
  title: z.string(),
  body: z.string(),
  accent: z.enum(['teal', 'blue', 'orange', 'violet']),
});

// An icon-tile feature card (used by the features section).
const feature = z.object({
  title: z.string(),
  body: z.string(),
  icon: z.enum(['activity', 'box', 'alert', 'server']),
});

const sections = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/sections' }),
  schema: z.object({
    order: z.number(), // controls top-to-bottom order and nav order
    navLabel: z.string().optional(), // if set, the section appears in the top nav
    eyebrow: z.string().optional(), // small uppercase label above the heading
    heading: z.string().optional(),
    tagline: z.string().optional(), // hero lead line
    intro: z.string().optional(), // single lead paragraph under the heading
    cards: z.array(card).optional(),
    dashboardLabel: z.string().optional(),
    dashboardIntro: z.string().optional(),
    chainTitle: z.string().optional(), // evidence-chain panel heading
    chain: z.array(z.string()).optional(), // ordered flow steps (Monitor → … → Report)
    pillars: z.array(pillar).optional(), // accent-barred capability cards
    features: z.array(feature).optional(), // icon-tile feature cards
    ctaPrimary: link.optional(),
    ctaSecondary: link.optional(),
    email: z.string().optional(),
    emailButton: z.string().optional(),
    newsletter: z
      .object({
        eyebrow: z.string(),
        heading: z.string(),
        blurb: z.string(),
        placeholder: z.string(),
        button: z.string(),
      })
      .optional(),
  }),
});

export const collections = { sections };
