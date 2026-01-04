import meditationImage from "@/assets/meditation.jpg";
import philosophyImage from "@/assets/philosophy.jpg";
import wellnessImage from "@/assets/wellness.jpg";
import asanasCostasImage from "@/assets/asanas-costas.jpg";

export interface Article {
  title: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  date: string;
  image: string;
  slug: string;
  featured?: boolean;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
}

export const articles: Article[] = [
  {
    title: "A Prática Diária de Yoga: Transformando Corpo e Mente",
    excerpt: "Descubra como estabelecer uma rotina consistente de yoga pode transformar não apenas seu corpo, mas também sua mente e espírito.",
    category: "Prática",
    categorySlug: "pratica",
    date: "15 de Novembro, 2024",
    image: meditationImage,
    slug: "pratica-diaria-yoga",
    featured: true,
  },
  {
    title: "Os Oito Membros do Yoga: Um Guia Completo",
    excerpt: "Os Yoga Sutras de Patanjali apresentam o caminho óctuplo do yoga. Entenda cada um dos oito membros e como aplicá-los na vida moderna.",
    category: "Filosofia",
    categorySlug: "filosofia",
    date: "12 de Novembro, 2024",
    image: philosophyImage,
    slug: "os-oito-membros-do-yoga",
  },
  {
    title: "Mindfulness no Cotidiano: Práticas Simples",
    excerpt: "Aprenda técnicas práticas de mindfulness que podem ser integradas facilmente ao seu dia a dia.",
    category: "Bem-Estar",
    categorySlug: "bem-estar",
    date: "10 de Novembro, 2024",
    image: wellnessImage,
    slug: "mindfulness-cotidiano",
  },
  {
    title: "Meditação para Iniciantes: Primeiros Passos",
    excerpt: "Um guia completo para quem deseja começar a meditar, com técnicas simples e eficazes.",
    category: "Meditação",
    categorySlug: "meditacao",
    date: "8 de Novembro, 2024",
    image: meditationImage,
    slug: "meditacao-para-iniciantes",
  },
  {
    title: "Despertar Através da Respiração Consciente",
    excerpt: "Explore o poder transformador da respiração consciente e como ela pode despertar uma nova percepção da vida.",
    category: "Prática",
    categorySlug: "pratica",
    date: "5 de Novembro, 2024",
    image: philosophyImage,
    slug: "despertar-atraves-da-respiracao-consciente",
  },
  {
    title: "Yoga e Alimentação Consciente",
    excerpt: "Descubra como a filosofia do yoga se estende à alimentação e como praticar uma nutrição mais consciente.",
    category: "Bem-Estar",
    categorySlug: "bem-estar",
    date: "1 de Novembro, 2024",
    image: wellnessImage,
    slug: "yoga-e-alimentacao-consciente",
  },
  {
    title: "Asanas Essenciais para Aliviar a Tensão nas Costas",
    excerpt: "Descubra as posturas de yoga mais eficazes para aliviar dores nas costas, com instruções detalhadas e dicas de segurança para praticar em casa.",
    category: "Prática",
    categorySlug: "pratica",
    date: "3 de Janeiro, 2026",
    image: asanasCostasImage,
    slug: "asanas-essenciais-para-aliviar-a-tensao-nas-costas",
  },
];

export const categories: Category[] = [
  {
    name: "Prática",
    slug: "pratica",
    description: "Posturas, sequências e técnicas para aprofundar sua prática de yoga.",
  },
  {
    name: "Filosofia",
    slug: "filosofia",
    description: "Explore os ensinamentos ancestrais e a sabedoria do yoga.",
  },
  {
    name: "Bem-Estar",
    slug: "bem-estar",
    description: "Dicas para uma vida mais equilibrada e saudável.",
  },
  {
    name: "Meditação",
    slug: "meditacao",
    description: "Técnicas de meditação para acalmar a mente e encontrar paz interior.",
  },
];

export type SearchResult = {
  type: "article" | "category";
  title: string;
  description: string;
  url: string;
  category?: string;
  image?: string;
};

export function searchContent(query: string): SearchResult[] {
  if (!query.trim()) return [];

  const normalizedQuery = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  const results: SearchResult[] = [];

  // Search articles
  articles.forEach((article) => {
    const titleNormalized = article.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const excerptNormalized = article.excerpt.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const categoryNormalized = article.category.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    if (
      titleNormalized.includes(normalizedQuery) ||
      excerptNormalized.includes(normalizedQuery) ||
      categoryNormalized.includes(normalizedQuery)
    ) {
      results.push({
        type: "article",
        title: article.title,
        description: article.excerpt,
        url: `/artigo/${article.slug}/index.html`,
        category: article.category,
        image: article.image,
      });
    }
  });

  // Search categories
  categories.forEach((category) => {
    const nameNormalized = category.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const descNormalized = category.description.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    if (nameNormalized.includes(normalizedQuery) || descNormalized.includes(normalizedQuery)) {
      results.push({
        type: "category",
        title: category.name,
        description: category.description,
        url: `/categoria/${category.slug}/`,
      });
    }
  });

  return results;
}
