export type GlossaryCategory =
  | "pratica"
  | "filosofia"
  | "bem-estar"
  | "ayurveda"
  | "meditacao"
  | "programas";

export interface GlossaryFaq {
  q: string;
  a: string;
}

export interface GlossaryTerm {
  slug: string; // e.g. "yoga"
  term: string; // Display term
  category: GlossaryCategory;
  synonyms?: string[];
  related: string[]; // slugs
  shortDefinition: string; // 40-60 words, featured snippet
  quickSummary: string; // 1-2 sentence callout
  fullDefinition: string; // paragraph(s), can include \n\n
  howItWorks: string;
  practicalExample: string;
  whyItMatters: string;
  advantages: string[];
  disadvantages?: string[];
  commonMistakes: string[];
  curiosities: string[];
  faq: GlossaryFaq[];
  references?: string[];
  publishedAt: string; // ISO date
  updatedAt: string; // ISO date
  author: string;
  readingMinutes: number;
  featured?: boolean;
  popular?: boolean;
}

export interface CategoryInfo {
  slug: GlossaryCategory;
  name: string;
  description: string;
}

export const CATEGORIES: CategoryInfo[] = [
  { slug: "pratica", name: "Prática", description: "Posturas, sequências e técnicas de yoga na esteira." },
  { slug: "filosofia", name: "Filosofia", description: "Escrituras, conceitos e ensinamentos do yoga clássico." },
  { slug: "bem-estar", name: "Bem-Estar", description: "Práticas para saúde integral do corpo e da mente." },
  { slug: "ayurveda", name: "Ayurveda", description: "Medicina ancestral irmã do yoga: doshas, dieta e equilíbrio." },
  { slug: "meditacao", name: "Meditação", description: "Técnicas de concentração, atenção plena e silêncio interior." },
  { slug: "programas", name: "Programas", description: "Trilhas, cursos e caminhos estruturados de prática." },
];