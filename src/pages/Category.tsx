import { useParams } from "react-router-dom";
import ArticleCard from "@/components/ArticleCard";
import meditationImage from "@/assets/meditation.jpg";
import philosophyImage from "@/assets/philosophy.jpg";
import wellnessImage from "@/assets/wellness.jpg";

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
};

const mockArticles = [
  {
    title: "Sequência Matinal para Energizar o Dia",
    excerpt: "Uma prática revigorante de 20 minutos para despertar o corpo e a mente com energia e clareza.",
    category: "Prática",
    date: "14 de Novembro, 2024",
    image: meditationImage,
    slug: "sequencia-matinal",
  },
  {
    title: "Yoga Restaurativo: A Arte do Descanso Profundo",
    excerpt: "Descubra como o yoga restaurativo pode ser uma ferramenta poderosa para recuperação e relaxamento profundo.",
    category: "Prática",
    date: "11 de Novembro, 2024",
    image: wellnessImage,
    slug: "yoga-restaurativo",
  },
  {
    title: "Pranayama: O Poder da Respiração Consciente",
    excerpt: "Explore técnicas avançadas de pranayama e como elas podem transformar seu estado mental e emocional.",
    category: "Prática",
    date: "8 de Novembro, 2024",
    image: philosophyImage,
    slug: "pranayama-respiracao",
  },
];

const Category = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = categoryData[slug || ""] || categoryData.pratica;

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockArticles.map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Category;
