import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Sparkles,
  Share2,
  Link as LinkIcon,
  Printer,
  Calendar,
  Clock,
  User,
} from "lucide-react";
import Breadcrumbs from "@/components/glossary/Breadcrumbs";
import {
  termBySlug,
  categoryInfo,
  prevNextTerm,
  termUrl,
  TERMS,
} from "@/data/glossary/utils";

const SITE = "https://theartofyoga.org";

const GlossaryTerm = () => {
  const { slug = "" } = useParams();
  const clean = slug.replace(/^o-que-e-/, "");
  const term = termBySlug(clean);

  if (!term) return <Navigate to="/glossario" replace />;

  const cat = categoryInfo(term.category);
  const url = `${SITE}${termUrl(term.slug)}`;
  const { prev, next } = prevNextTerm(term.slug);
  const related = term.related
    .map((s) => TERMS.find((t) => t.slug === s))
    .filter(Boolean) as typeof TERMS;

  const title = `O que é ${term.term}? Significado, Origem e Prática | A Arte do Yoga`;
  const description = term.shortDefinition.slice(0, 158);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "DefinedTerm",
        name: term.term,
        description: term.shortDefinition,
        url,
        inDefinedTermSet: `${SITE}/glossario`,
        termCode: term.slug,
      },
      {
        "@type": "Article",
        headline: `O que é ${term.term}?`,
        description,
        author: { "@type": "Person", name: term.author },
        publisher: {
          "@type": "Organization",
          name: "A Arte do Yoga",
          url: SITE,
        },
        datePublished: term.publishedAt,
        dateModified: term.updatedAt,
        mainEntityOfPage: url,
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["[data-speakable]"],
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: term.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: "Glossário", item: `${SITE}/glossario` },
          { "@type": "ListItem", position: 3, name: cat.name, item: `${SITE}/glossario?cat=${cat.slug}` },
          { "@type": "ListItem", position: 4, name: term.term, item: url },
        ],
      },
    ],
  };

  const copyLink = () => navigator.clipboard?.writeText(url);
  const print = () => window.print();
  const share = () => {
    if (navigator.share) navigator.share({ title, text: description, url });
    else copyLink();
  };

  return (
    <main className="min-h-screen pt-24 pb-20 bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="container max-w-4xl px-6">
        <Breadcrumbs
          items={[
            { label: "Início", to: "/" },
            { label: "Glossário", to: "/glossario" },
            { label: cat.name, to: `/categoria/${cat.slug}` },
            { label: term.term },
          ]}
        />

        <article className="mt-8">
          <header className="mb-8">
            <Badge className="mb-4 bg-coral/10 text-coral border-coral/30 hover:bg-coral/10">
              <BookOpen className="h-3.5 w-3.5 mr-1" /> {cat.name}
            </Badge>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-navy leading-tight">
              {term.term}
            </h1>
            {term.synonyms && term.synonyms.length > 0 && (
              <p className="mt-3 text-sm text-muted-foreground italic">
                Também conhecido como: {term.synonyms.join(", ")}
              </p>
            )}
            <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5"><User className="h-3.5 w-3.5" /> {term.author}</span>
              <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> Atualizado em {new Date(term.updatedAt).toLocaleDateString("pt-BR")}</span>
              <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {term.readingMinutes} min de leitura</span>
            </div>
          </header>

          {/* Definição principal - snippet */}
          <section aria-labelledby="def" className="mb-10">
            <h2 id="def" className="font-display text-2xl md:text-3xl font-bold text-navy mb-4">
              O que é {term.term}?
            </h2>
            <p data-speakable className="text-lg leading-relaxed text-ink">
              {term.shortDefinition}
            </p>
          </section>

          {/* Resumo rápido */}
          <aside className="my-8 rounded-2xl border-l-4 border-coral bg-coral/5 p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-coral mb-2">
              Resumo Rápido
            </p>
            <p className="text-base text-ink">{term.quickSummary}</p>
          </aside>

          {/* Definição completa */}
          <Section title="Definição Completa">
            {term.fullDefinition.split("\n\n").map((p, i) => (
              <p key={i} className="mb-4 leading-relaxed text-ink/90">{p}</p>
            ))}
          </Section>

          {term.howItWorks && term.howItWorks !== term.fullDefinition && (
            <Section title="Como Funciona">
              <p className="leading-relaxed text-ink/90">{term.howItWorks}</p>
            </Section>
          )}

          {term.practicalExample && (
            <Section title="Exemplo Prático">
              <div className="rounded-xl bg-lavender/40 p-6">
                <p className="leading-relaxed text-ink">{term.practicalExample}</p>
              </div>
            </Section>
          )}

          {term.whyItMatters && (
            <Section title="Por que isso é importante">
              <p className="leading-relaxed text-ink/90">{term.whyItMatters}</p>
            </Section>
          )}

          {term.advantages && term.advantages.length > 0 && (
            <Section title="Principais Vantagens">
              <ul className="space-y-3">
                {term.advantages.map((a, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-coral shrink-0 mt-0.5" />
                    <span className="text-ink/90">{a}</span>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {term.disadvantages && term.disadvantages.length > 0 && (
            <Section title="Possíveis Desvantagens">
              <ul className="space-y-3">
                {term.disadvantages.map((a, i) => (
                  <li key={i} className="flex gap-3">
                    <AlertTriangle className="h-5 w-5 text-navy shrink-0 mt-0.5" />
                    <span className="text-ink/90">{a}</span>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {term.commonMistakes && term.commonMistakes.length > 0 && (
            <Section title="Erros Comuns">
              <ul className="space-y-3">
                {term.commonMistakes.map((a, i) => (
                  <li key={i} className="flex gap-3">
                    <Lightbulb className="h-5 w-5 text-coral shrink-0 mt-0.5" />
                    <span className="text-ink/90">{a}</span>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {term.curiosities && term.curiosities.length > 0 && (
            <Section title="Curiosidades">
              <ul className="space-y-3">
                {term.curiosities.map((a, i) => (
                  <li key={i} className="flex gap-3">
                    <Sparkles className="h-5 w-5 text-coral shrink-0 mt-0.5" />
                    <span className="text-ink/90">{a}</span>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {term.faq && term.faq.length > 0 && (
            <Section title="Perguntas Frequentes">
              <Accordion type="single" collapsible className="w-full">
                {term.faq.map((f, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left font-semibold text-navy">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-ink/90 leading-relaxed">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Section>
          )}

          {related.length > 0 && (
            <Section title="Termos Relacionados">
              <div className="grid sm:grid-cols-2 gap-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={termUrl(r.slug)}
                    className="rounded-xl border border-navy/10 bg-white p-4 hover:border-coral transition-editorial"
                  >
                    <p className="font-display font-bold text-navy">{r.term}</p>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {r.shortDefinition}
                    </p>
                  </Link>
                ))}
              </div>
            </Section>
          )}

          {term.references && term.references.length > 0 && (
            <Section title="Referências">
              <ul className="space-y-2 text-sm text-muted-foreground">
                {term.references.map((r, i) => (
                  <li key={i}>• {r}</li>
                ))}
              </ul>
            </Section>
          )}

          {/* Share */}
          <div className="mt-10 pt-8 border-t border-navy/10 flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold text-navy mr-2">Compartilhar:</span>
            <Button size="sm" variant="outline" onClick={share}>
              <Share2 className="h-4 w-4 mr-1" /> Compartilhar
            </Button>
            <Button size="sm" variant="outline" onClick={copyLink}>
              <LinkIcon className="h-4 w-4 mr-1" /> Copiar link
            </Button>
            <Button size="sm" variant="outline" onClick={print}>
              <Printer className="h-4 w-4 mr-1" /> Imprimir
            </Button>
          </div>

          {/* Prev / Next */}
          <nav className="mt-10 grid sm:grid-cols-2 gap-4" aria-label="Navegação de verbetes">
            <Link
              to={termUrl(prev.slug)}
              className="rounded-2xl border border-navy/10 bg-white p-5 hover:border-coral transition-editorial"
            >
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <ArrowLeft className="h-3.5 w-3.5" /> Termo anterior
              </p>
              <p className="font-display font-bold text-navy mt-1">{prev.term}</p>
            </Link>
            <Link
              to={termUrl(next.slug)}
              className="rounded-2xl border border-navy/10 bg-white p-5 hover:border-coral transition-editorial text-right"
            >
              <p className="text-xs text-muted-foreground flex items-center justify-end gap-1">
                Próximo termo <ArrowRight className="h-3.5 w-3.5" />
              </p>
              <p className="font-display font-bold text-navy mt-1">{next.term}</p>
            </Link>
          </nav>

          <div className="mt-10 text-center">
            <Link
              to="/glossario"
              className="inline-flex items-center gap-2 text-coral font-semibold hover:underline"
            >
              <ArrowLeft className="h-4 w-4" /> Voltar ao Glossário
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-8">
    <h2 className="font-display text-2xl font-bold text-navy mb-4">{title}</h2>
    {children}
  </section>
);

export default GlossaryTerm;