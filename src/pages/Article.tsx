import { useParams } from "react-router-dom";
import { Calendar, Clock, Share2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import meditationImage from "@/assets/meditation.jpg";

const Article = () => {
  const { slug } = useParams();

  // Mock data - em produção viria de uma API ou CMS
  const article = {
    title: "A Prática Diária de Yoga: Transformando Corpo e Mente",
    category: "Prática",
    date: "15 de Novembro, 2024",
    readTime: "8 min",
    image: meditationImage,
    content: `
      <p>A jornada do yoga não se limita ao tapete. É uma prática que permeia todos os aspectos da nossa existência, convidando-nos a despertar para a presença plena em cada momento.</p>

      <h2>O Despertar da Consciência</h2>
      <p>Estabelecer uma prática diária de yoga é como plantar uma semente de transformação. Com paciência e dedicação, essa semente floresce em maior consciência corporal, clareza mental e equilíbrio emocional.</p>

      <blockquote>
        "Yoga é a jornada do eu, através do eu, para o eu." — Bhagavad Gita
      </blockquote>

      <h2>Construindo Sua Prática</h2>
      <p>Não é necessário dedicar horas ao tapete. Mesmo 15 minutos diários podem criar mudanças profundas. O segredo está na consistência e na intenção que você traz para cada movimento, cada respiração.</p>

      <h3>Elementos Essenciais</h3>
      <p>Uma prática equilibrada integra diferentes aspectos:</p>
      <ul>
        <li><strong>Asanas:</strong> As posturas físicas que fortalecem e flexibilizam o corpo</li>
        <li><strong>Pranayama:</strong> Técnicas de respiração que acalmam a mente</li>
        <li><strong>Meditação:</strong> Momentos de quietude interior e observação</li>
        <li><strong>Intenção:</strong> O propósito que guia sua prática</li>
      </ul>

      <h2>Transformação Além do Físico</h2>
      <p>O verdadeiro poder do yoga reside não apenas nos benefícios físicos, mas na transformação sutil da consciência. À medida que sua prática se aprofunda, você começa a perceber mudanças em como responde ao estresse, como se relaciona consigo mesmo e com os outros.</p>

      <p>Esta jornada é profundamente pessoal. Não se trata de perfeição ou de alcançar posturas avançadas. Trata-se de cultivar presença, compaixão e uma conexão mais profunda com sua essência.</p>

      <h2>O Convite</h2>
      <p>Que sua prática seja um refúgio diário, um espaço sagrado onde você pode simplesmente ser. Comece onde você está, use o que você tem, faça o que você pode. O tapete sempre espera, sem julgamentos, apenas com o convite silencioso para retornar a si mesmo.</p>
    `,
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
