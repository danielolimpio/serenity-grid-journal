import HeroSection from "@/components/HeroSection";
import { Helmet } from "react-helmet-async";
import ArticleCard from "@/components/ArticleCard";
import StrengthenSection from "@/components/StrengthenSection";
import HarmonyIconsSection from "@/components/HarmonyIconsSection";
import VideoPresenceSection from "@/components/VideoPresenceSection";
import InnerZenSection from "@/components/InnerZenSection";
import OfferingsSection from "@/components/OfferingsSection";
import WorkshopSection from "@/components/WorkshopSection";
import { articles as allArticles } from "@/data/searchData";

// Featured = mais recente; grid = próximos 8 (total 9)
const sorted = [...allArticles].sort((a, b) => (a.date < b.date ? 1 : -1));
const featured = { ...sorted[0], featured: true };
const grid = sorted.slice(1, 9);

const Index = () => {
  return (
    <main>
      <Helmet>
        <title>A Arte do Yoga | Blog de Yoga, Meditação e Bem-Estar</title>
        <meta name="description" content="Explore a filosofia, prática e bem-estar através do yoga. Conteúdo editorial premium sobre mindfulness, movimento e transformação interior." />
        <link rel="canonical" href="https://theartofyoga.org/" />
        <meta property="og:title" content="A Arte do Yoga | Blog de Yoga, Meditação e Bem-Estar" />
        <meta property="og:description" content="Explore a filosofia, prática e bem-estar através do yoga. Conteúdo editorial premium sobre mindfulness, movimento e transformação interior." />
        <meta property="og:url" content="https://theartofyoga.org/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://theartofyoga.org/assets/og-image.jpg" />
        <meta property="og:site_name" content="A Arte do Yoga" />
        <meta property="og:locale" content="pt_BR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://theartofyoga.org/assets/og-image.jpg" />
      </Helmet>
      <HeroSection />

      {/* Blog — 9 miniaturas */}
      <section className="section-spacing">
        <div className="container-editorial space-y-12">
          <ArticleCard {...featured} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {grid.map((a) => (
              <ArticleCard key={a.slug} {...a} featured={false} />
            ))}
          </div>
        </div>
      </section>

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
