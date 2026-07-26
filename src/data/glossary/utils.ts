import { TERMS as RAW_TERMS } from "./terms";
import { CATEGORIES } from "./types";
import type { GlossaryTerm, GlossaryCategory, CategoryInfo } from "./types";
import { enrichTerm } from "./enrich";

// Enrich every term once at module load so all pages render 300+ words
// of unique, category-aware content (Google AdSense content policy).
export const TERMS: GlossaryTerm[] = RAW_TERMS.map(enrichTerm);

export { CATEGORIES };
export type { GlossaryTerm, GlossaryCategory, CategoryInfo };

export const termBySlug = (slug: string): GlossaryTerm | undefined =>
  TERMS.find((t) => t.slug === slug);

export const categoryInfo = (slug: GlossaryCategory): CategoryInfo =>
  CATEGORIES.find((c) => c.slug === slug)!;

export const termUrl = (slug: string) => `/glossario/o-que-e-${slug}`;

export const sortedTerms = () =>
  [...TERMS].sort((a, b) => a.term.localeCompare(b.term, "pt-BR"));

export const termsByLetter = () => {
  const map = new Map<string, GlossaryTerm[]>();
  for (const t of sortedTerms()) {
    const letter = t.term
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .charAt(0)
      .toUpperCase();
    if (!map.has(letter)) map.set(letter, []);
    map.get(letter)!.push(t);
  }
  return map;
};

export const featuredTerms = () => TERMS.filter((t) => t.featured);
export const popularTerms = () => TERMS.filter((t) => t.popular);
export const recentTerms = () =>
  [...TERMS]
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
    .slice(0, 8);

export const termsInCategory = (cat: GlossaryCategory) =>
  TERMS.filter((t) => t.category === cat);

const norm = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

export const searchTerms = (q: string): GlossaryTerm[] => {
  const query = norm(q.trim());
  if (!query) return [];
  return TERMS.filter((t) => {
    const hay = [
      t.term,
      ...(t.synonyms ?? []),
      t.shortDefinition,
      t.category,
    ]
      .map(norm)
      .join(" ");
    return hay.includes(query);
  });
};

export const prevNextTerm = (slug: string) => {
  const sorted = sortedTerms();
  const i = sorted.findIndex((t) => t.slug === slug);
  return {
    prev: i > 0 ? sorted[i - 1] : sorted[sorted.length - 1],
    next: i < sorted.length - 1 ? sorted[i + 1] : sorted[0],
  };
};

export const readingTime = (t: GlossaryTerm) => {
  const text = [
    t.fullDefinition,
    t.howItWorks,
    t.practicalExample,
    t.whyItMatters,
    ...(t.advantages ?? []),
    ...(t.disadvantages ?? []),
    ...(t.commonMistakes ?? []),
    ...(t.curiosities ?? []),
    ...t.faq.flatMap((f) => [f.q, f.a]),
  ].join(" ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(3, Math.round(words / 200));
};