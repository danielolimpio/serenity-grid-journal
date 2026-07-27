import { useParams } from "react-router-dom";
import { Calendar, Clock, Share2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { articles } from "@/data/searchData";
import { articleContent } from "@/data/articleContent";
import NotFound from "./NotFound";

const Article = () => {
  const { slug } = useParams();

  const meta = articles.find((a) => a.slug === slug);
  if (!meta) return <NotFound />;

  const content = articleContent[slug ?? ""] ?? `
    <p>${meta.excerpt}</p>
    <p>Este artigo faz parte da nossa coleção editorial sobre <strong>${meta.category}</strong>. Continue explorando outros artigos relacionados no blog A Arte do Yoga.</p>
  `;

  const words = content.replace(/<[^>]+>/g, " ").trim().split(/\s+/).length;
  const readTime = `${Math.max(3, Math.ceil(words / 200))} min`;

  const article = {
    title: meta.title,
    category: meta.category,
    date: meta.date,
    readTime,
    image: meta.image,
    content,
  };

  return (
    <main className="pt-24">
      <Helmet>
        <title>{`${article.title} | A Arte do Yoga`}</title>
        <meta name="description" content={`${article.title} — artigo sobre ${article.category.toLowerCase()} em A Arte do Yoga. Leitura de ${article.readTime}.`} />
        <link rel="canonical" href={`https://theartofyoga.org/artigo/${slug ?? ""}`} />
        <meta property="og:title" content={article.title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://theartofyoga.org/artigo/${slug ?? ""}`} />
      </Helmet>
      {/* Hero Image */}
      <div className="relative h-[60vh] min-h-[500px]">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Article Content */}
      <article className="prose-editorial -mt-32 relative z-10">
        <div className="bg-background/95 backdrop-blur-sm p-8 md:p-12 max-w-4xl mx-auto shadow-medium">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <span className="px-3 py-1 bg-primary/10 text-primary font-body uppercase tracking-wider">
              {article.category}
            </span>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time>{article.date}</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{article.readTime} de leitura</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-6xl font-light mb-8 text-balance">
            {article.title}
          </h1>

          {/* Share */}
          <div className="flex items-center gap-4 pb-8 mb-8 border-b border-border/50">
            <Button variant="outline" size="sm" className="gap-2">
              <Share2 className="h-4 w-4" />
              Compartilhar
            </Button>
          </div>

          {/* Content */}
          <div 
            className="space-y-6 text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </article>

      {/* Related Articles CTA */}
      <section className="section-spacing">
        <div className="container-editorial text-center">
          <h2 className="font-display text-3xl md:text-4xl font-light mb-4">
            Continue Explorando
          </h2>
          <Button size="lg" variant="outline">
            Ver Mais Artigos
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Article;
