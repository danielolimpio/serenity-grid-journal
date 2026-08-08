import { useParams } from "react-router-dom";
import ArticleCard from "@/components/ArticleCard";
import { articles as allArticles } from "@/data/searchData";
import { Helmet } from "react-helmet-async";

const categoryData: Record<string, { name: string; description: string }> = {
  pratica: {
    name: "Prática",
    description: "Asanas, sequências e técnicas para aprofundar sua prática de yoga",
  },
  filosofia: {
    name: "Filosofia",
    description: "Os princípios milenares e ensinamentos do yoga tradicional",
  },
  "bem-estar": {
    name: "Bem-Estar",
    description: "Mindfulness, meditação e práticas para uma vida mais equilibrada",
  },
  meditacao: {
    name: "Meditação",
    description: "Técnicas de meditação para acalmar a mente e encontrar paz interior",
  },
  ayurveda: {
    name: "Ayurveda",
    description: "A ciência milenar indiana da saúde e longevidade: doshas, alimentação e rotinas terapêuticas.",
  },
  programas: {
    name: "Programas",
    description: "Programas guiados de yoga e bem-estar para acompanhar sua jornada passo a passo.",
  },
};

const Category = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = categoryData[slug || ""] || categoryData.pratica;
  
  // Filter articles by category slug
  const categoryArticles = allArticles.filter(
    (article) => article.categorySlug === slug
  );

  return (
    <main className="pt-32">
      <Helmet>
        <title>{`${category.name} | Artigos de Yoga | A Arte do Yoga`}</title>
        <meta name="description" content={`${category.description}. Explore artigos da categoria ${category.name} em A Arte do Yoga.`} />
        <link rel="canonical" href={`https://theartofyoga.org/categoria/${slug ?? ""}`} />
        <meta property="og:title" content={`${category.name} | A Arte do Yoga`} />
        <meta property="og:description" content={`${category.description}. Explore artigos da categoria ${category.name} em A Arte do Yoga.`} />
        <meta property="og:url" content={`https://theartofyoga.org/categoria/${slug ?? ""}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://theartofyoga.org/assets/og-image.jpg" />
        <meta property="og:site_name" content="A Arte do Yoga" />
        <meta property="og:locale" content="pt_BR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://theartofyoga.org/assets/og-image.jpg" />
      </Helmet>
      {/* Category Header */}
      <section className="section-spacing bg-muted/30">
        <div className="container-editorial text-center space-y-4">
          <h1 className="font-display text-5xl md:text-7xl font-light">
            {category.name}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {category.description}
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-spacing">
        <div className="container-editorial">
          {categoryArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryArticles.map((article) => (
                <ArticleCard key={article.slug} {...article} featured={false} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">
              Nenhum artigo encontrado nesta categoria.
            </p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Category;
