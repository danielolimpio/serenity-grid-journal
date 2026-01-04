import { useParams } from "react-router-dom";
import ArticleCard from "@/components/ArticleCard";
import { articles as allArticles } from "@/data/searchData";

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
