import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Search, Sparkles, TrendingUp, Clock, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Breadcrumbs from "@/components/glossary/Breadcrumbs";
import {
  CATEGORIES,
  TERMS,
  featuredTerms,
  popularTerms,
  recentTerms,
  searchTerms,
  sortedTerms,
  termUrl,
  termsByLetter,
  categoryInfo,
} from "@/data/glossary/utils";
import type { GlossaryCategory } from "@/data/glossary/types";

const SITE = "https://theartofyoga.org";

const GlossaryIndex = () => {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<GlossaryCategory | "all">("all");
  const [activeLetter, setActiveLetter] = useState<string | "all">("all");

  const byLetter = useMemo(() => termsByLetter(), []);
  const letters = useMemo(() => Array.from(byLetter.keys()).sort(), [byLetter]);

  const filtered = useMemo(() => {
    let base = query ? searchTerms(query) : sortedTerms();
    if (activeCat !== "all") base = base.filter((t) => t.category === activeCat);
    if (activeLetter !== "all")
      base = base.filter(
        (t) =>
          t.term.normalize("NFD").replace(/[\u0300-\u036f]/g, "").charAt(0).toUpperCase() ===
          activeLetter,
      );
    return base;
  }, [query, activeCat, activeLetter]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "A Arte do Yoga",
        url: SITE,
      },
      {
        "@type": "CollectionPage",
        name: "Glossário de Yoga",
        url: `${SITE}/glossario`,
        description:
          "Glossário completo de yoga: termos essenciais de prática, filosofia, meditação, ayurveda e bem-estar explicados de forma clara e aprofundada.",
        hasPart: TERMS.map((t) => ({
          "@type": "DefinedTerm",
          name: t.term,
          url: `${SITE}${termUrl(t.slug)}`,
          description: t.shortDefinition.slice(0, 200),
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: "Glossário", item: `${SITE}/glossario` },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen pt-24 pb-20 bg-background">
      <Helmet>
        <title>Glossário de Yoga | Termos, Definições e Significados | A Arte do Yoga</title>
        <meta
          name="description"
          content="Glossário premium de yoga: mais de 50 termos essenciais de prática, filosofia, ayurveda, meditação e bem-estar explicados de forma clara, aprofundada e otimizada."
        />
        <link rel="canonical" href={`${SITE}/glossario`} />
        <meta property="og:title" content="Glossário de Yoga | A Arte do Yoga" />
        <meta property="og:description" content="Termos essenciais de yoga, filosofia, ayurveda e meditação em um hub premium." />
        <meta property="og:url" content={`${SITE}/glossario`} />
        <meta property="og:image" content="https://theartofyoga.org/assets/og-image.jpg" />
        <meta property="og:site_name" content="A Arte do Yoga" />
        <meta property="og:locale" content="pt_BR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://theartofyoga.org/assets/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="container max-w-7xl px-6">
        <Breadcrumbs items={[{ label: "Início", to: "/" }, { label: "Glossário" }]} />

        {/* Hero */}
        <header className="mt-8 mb-12 text-center max-w-3xl mx-auto">
          <Badge className="mb-4 bg-coral/10 text-coral border-coral/30 hover:bg-coral/10">
            <BookOpen className="h-3.5 w-3.5 mr-1" /> Hub de Conhecimento
          </Badge>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-navy leading-tight">
            Glossário de <span className="text-coral">Yoga</span>
          </h1>
          <p className="mt-5 text-lg text-ink/80 leading-relaxed">
            Um dicionário premium com {TERMS.length}+ termos essenciais de prática, filosofia,
            ayurveda, meditação e bem-estar. Definições claras, exemplos práticos e conexões
            entre conceitos.
          </p>

          <div className="mt-8 relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar um termo (asana, chakra, dharma...)"
              className="pl-12 h-14 text-base rounded-full border-navy/10 shadow-subtle"
              aria-label="Buscar termos no glossário"
            />
          </div>
        </header>

        <div className="grid lg:grid-cols-[220px_1fr] gap-10">
          {/* Alphabet sidebar */}
          <aside className="lg:sticky lg:top-24 self-start">
            <div className="rounded-2xl border border-navy/10 bg-white p-5 shadow-subtle">
              <h2 className="font-display text-sm font-bold text-navy uppercase tracking-wider mb-3">
                Índice A–Z
              </h2>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => setActiveLetter("all")}
                  className={`w-8 h-8 rounded-full text-xs font-semibold transition-editorial ${
                    activeLetter === "all"
                      ? "bg-coral text-white"
                      : "bg-muted text-ink hover:bg-coral/20"
                  }`}
                >
                  Tudo
                </button>
                {letters.map((l) => (
                  <button
                    key={l}
                    onClick={() => setActiveLetter(l)}
                    className={`w-8 h-8 rounded-full text-xs font-bold transition-editorial ${
                      activeLetter === l
                        ? "bg-coral text-white"
                        : "bg-muted text-ink hover:bg-coral/20"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="mt-6 rounded-2xl border border-navy/10 bg-white p-5 shadow-subtle">
              <h2 className="font-display text-sm font-bold text-navy uppercase tracking-wider mb-3">
                Categorias
              </h2>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setActiveCat("all")}
                    className={`w-full text-left text-sm px-3 py-2 rounded-lg transition-editorial ${
                      activeCat === "all" ? "bg-coral/10 text-coral font-semibold" : "hover:bg-muted"
                    }`}
                  >
                    Todas ({TERMS.length})
                  </button>
                </li>
                {CATEGORIES.map((c) => {
                  const count = TERMS.filter((t) => t.category === c.slug).length;
                  return (
                    <li key={c.slug}>
                      <button
                        onClick={() => setActiveCat(c.slug)}
                        className={`w-full text-left text-sm px-3 py-2 rounded-lg transition-editorial ${
                          activeCat === c.slug
                            ? "bg-coral/10 text-coral font-semibold"
                            : "hover:bg-muted"
                        }`}
                      >
                        {c.name} ({count})
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>

          {/* Main content */}
          <div>
            {!query && activeCat === "all" && activeLetter === "all" && (
              <>
                <Section
                  icon={<Sparkles className="h-4 w-4" />}
                  title="Termos em Destaque"
                  terms={featuredTerms()}
                />
                <Section
                  icon={<TrendingUp className="h-4 w-4" />}
                  title="Mais Pesquisados"
                  terms={popularTerms()}
                />
                <Section
                  icon={<Clock className="h-4 w-4" />}
                  title="Recém Adicionados"
                  terms={recentTerms()}
                />
              </>
            )}

            <section>
              <h2 className="font-display text-2xl font-bold text-navy mb-6">
                {query ? `Resultados para "${query}"` : "Todos os termos"}
                <span className="text-muted-foreground text-base font-normal ml-2">
                  ({filtered.length})
                </span>
              </h2>
              {filtered.length === 0 ? (
                <p className="text-muted-foreground py-12 text-center">
                  Nenhum termo encontrado. Tente outra busca.
                </p>
              ) : (
                <div className="grid sm:grid-cols-2 gap-4">
                  {filtered.map((t) => (
                    <TermCard key={t.slug} term={t} />
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

const Section = ({
  icon,
  title,
  terms,
}: {
  icon: React.ReactNode;
  title: string;
  terms: ReturnType<typeof featuredTerms>;
}) => {
  if (terms.length === 0) return null;
  return (
    <section className="mb-10">
      <h2 className="font-display text-xl font-bold text-navy mb-4 flex items-center gap-2">
        <span className="text-coral">{icon}</span>
        {title}
      </h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {terms.slice(0, 4).map((t) => (
          <TermCard key={t.slug} term={t} />
        ))}
      </div>
    </section>
  );
};

const TermCard = ({ term }: { term: (typeof TERMS)[number] }) => {
  const cat = categoryInfo(term.category);
  return (
    <Link
      to={termUrl(term.slug)}
      className="group block rounded-2xl border border-navy/10 bg-white p-5 hover:border-coral hover:shadow-subtle transition-editorial"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-coral">
          {cat.name}
        </span>
        <span className="text-xs text-muted-foreground">{term.readingMinutes} min</span>
      </div>
      <h3 className="font-display text-lg font-bold text-navy group-hover:text-coral transition-editorial">
        {term.term}
      </h3>
      <p className="mt-2 text-sm text-ink/75 leading-relaxed line-clamp-3">
        {term.shortDefinition}
      </p>
    </Link>
  );
};

export default GlossaryIndex;