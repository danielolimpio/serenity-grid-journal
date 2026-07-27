import HeroSection from "@/components/HeroSection";
import { Helmet } from "react-helmet-async";
import ArticleCard from "@/components/ArticleCard";
import CategoryCircles from "@/components/CategoryCircles";
import CategoryGrid from "@/components/CategoryGrid";
import StrengthenSection from "@/components/StrengthenSection";
import HarmonyIconsSection from "@/components/HarmonyIconsSection";
import VideoPresenceSection from "@/components/VideoPresenceSection";
import InnerZenSection from "@/components/InnerZenSection";
import OfferingsSection from "@/components/OfferingsSection";
import WorkshopSection from "@/components/WorkshopSection";
import meditationImage from "@/assets/meditation.webp";
import philosophyImage from "@/assets/philosophy.webp";
import asanasCostasImage from "@/assets/asanas-costas.webp";

const featuredArticles = [
  {
    title: "Asanas Essenciais para Aliviar a Tensão nas Costas",
    excerpt: "Descubra as posturas de yoga mais eficazes para aliviar dores nas costas, com instruções detalhadas e dicas de segurança para praticar em casa.",
    category: "Prática",
    date: "3 de Janeiro, 2026",
    image: asanasCostasImage,
    slug: "asanas-essenciais-para-aliviar-a-tensao-nas-costas",
    featured: true,
  },
  {
    title: "Os Oito Membros do Yoga: Um Guia Completo",
    excerpt: "Os Yoga Sutras de Patanjali apresentam o caminho óctuplo do yoga. Entenda cada um dos oito membros e como aplicá-los na vida moderna para alcançar maior equilíbrio e realização.",
    category: "Filosofia",
    date: "12 de Novembro, 2024",
    image: philosophyImage,
    slug: "os-oito-membros-do-yoga",
  },
  {
    title: "Meditação para Iniciantes: Primeiros Passos",
    excerpt: "Um guia completo para quem deseja começar a meditar, com técnicas simples e eficazes para encontrar paz interior.",
    category: "Meditação",
    date: "8 de Novembro, 2024",
    image: meditationImage,
    slug: "meditacao-para-iniciantes",
  },
];

const Index = () => {
  return (
    <main>
      <Helmet>
        <title>A Arte do Yoga | Blog de Yoga, Meditação e Bem-Estar</title>
        <meta name="description" content="Explore a filosofia, prática e bem-estar através do yoga. Conteúdo editorial premium sobre mindfulness, movimento e transformação interior." />
        <link rel="canonical" href="https://theartofyoga.org/" />
        <meta property="og:title" content="A Arte do Yoga | Blog de Yoga, Meditação e Bem-Estar" />
        <meta property="og:url" content="https://theartofyoga.org/" />
      </Helmet>
      <CategoryCircles />
      <HeroSection />

      {/* Featured Articles */}
      <section className="section-spacing">
        <div className="container-editorial space-y-12">
          {/* Main Featured */}
          <ArticleCard {...featuredArticles[0]} />

          {/* Secondary Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredArticles.slice(1).map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>
        </div>
      </section>

      <CategoryGrid />

      <StrengthenSection />
      <HarmonyIconsSection />
      <VideoPresenceSection />
      <InnerZenSection />
      <OfferingsSection />
      <WorkshopSection />
    </main>
  );
};

export default Index;
