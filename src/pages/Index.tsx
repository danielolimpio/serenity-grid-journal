import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ArticleCard from "@/components/ArticleCard";
import CategoryGrid from "@/components/CategoryGrid";
import Footer from "@/components/Footer";
import meditationImage from "@/assets/meditation.jpg";
import philosophyImage from "@/assets/philosophy.jpg";
import wellnessImage from "@/assets/wellness.jpg";

const featuredArticles = [
  {
    title: "A Prática Diária de Yoga: Transformando Corpo e Mente",
    excerpt: "Descubra como estabelecer uma rotina consistente de yoga pode transformar não apenas seu corpo, mas também sua mente e espírito. Exploramos as práticas essenciais para iniciantes e praticantes avançados.",
    category: "Prática",
    date: "15 de Novembro, 2024",
    image: meditationImage,
    slug: "pratica-diaria-yoga",
    featured: true,
  },
  {
    title: "Os Oito Membros do Yoga: Um Guia Completo",
    excerpt: "Os Yoga Sutras de Patanjali apresentam o caminho óctuplo do yoga. Entenda cada um dos oito membros e como aplicá-los na vida moderna para alcançar maior equilíbrio e realização.",
    category: "Filosofia",
    date: "12 de Novembro, 2024",
    image: philosophyImage,
    slug: "oito-membros-yoga",
  },
  {
    title: "Mindfulness no Cotidiano: Práticas Simples",
    excerpt: "Aprenda técnicas práticas de mindfulness que podem ser integradas facilmente ao seu dia a dia, trazendo mais presença, calma e clareza mental para cada momento.",
    category: "Bem-Estar",
    date: "10 de Novembro, 2024",
    image: wellnessImage,
    slug: "mindfulness-cotidiano",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
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

        {/* Newsletter CTA */}
        <section className="section-spacing bg-card">
          <div className="container-editorial max-w-3xl text-center space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-light">
              Receba Inspiração Semanal
            </h2>
            <p className="text-lg text-muted-foreground">
              Insights sobre yoga, meditação e bem-estar direto na sua caixa de entrada
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-4">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 bg-background border border-border/50 focus:border-primary focus:outline-none transition-editorial"
              />
              <button className="px-8 py-3 bg-primary text-primary-foreground font-body tracking-wide hover:bg-primary/90 transition-editorial">
                Inscrever
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
