import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Search as SearchIcon, FileText, Folder } from "lucide-react";
import { Link } from "react-router-dom";
import SearchAutocomplete from "@/components/SearchAutocomplete";
import { searchContent, SearchResult } from "@/data/searchData";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return searchContent(query);
  }, [query]);

  const articleResults = results.filter((r) => r.type === "article");
  const categoryResults = results.filter((r) => r.type === "category");

  return (
    <main className="pt-32 pb-16 min-h-screen">
      <Helmet>
        <title>{query ? `Busca: ${query} | A Arte do Yoga` : "Buscar | A Arte do Yoga"}</title>
        <meta name="description" content={query ? `Resultados de busca para "${query}" em A Arte do Yoga: artigos e categorias sobre yoga, meditação e bem-estar.` : "Busque artigos e categorias de A Arte do Yoga sobre yoga, filosofia, meditação e bem-estar integral."} />
        <link rel="canonical" href="https://theartofyoga.org/busca" />
        <meta name="robots" content="noindex,follow" />
      </Helmet>
      <div className="container-editorial">
        {/* Search Header */}
        <div className="max-w-2xl mx-auto mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-light text-center mb-8">
            Buscar
          </h1>
          <SearchAutocomplete autoFocus showFullWidth />
        </div>

        {/* Results */}
        {query ? (
          <div className="space-y-12">
            {/* Results Summary */}
            <div className="text-center">
              <p className="text-lg text-muted-foreground">
                {results.length === 0 ? (
                  <>Nenhum resultado encontrado para "<span className="text-foreground font-medium">{query}</span>"</>
                ) : (
                  <>
                    {results.length} resultado{results.length !== 1 && "s"} para "
                    <span className="text-foreground font-medium">{query}</span>"
                  </>
                )}
              </p>
            </div>

            {/* Category Results */}
            {categoryResults.length > 0 && (
              <section>
                <h2 className="font-display text-2xl font-light mb-6 flex items-center gap-2">
                  <Folder className="h-5 w-5 text-muted-foreground" />
                  Categorias
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {categoryResults.map((result) => (
                    <Link
                      key={result.url}
                      to={result.url.replace(/\/$/, "")}
                      className="group p-6 bg-card border border-border/50 rounded-lg hover:border-primary/50 transition-all"
                    >
                      <h3 className="font-display text-xl font-medium group-hover:text-primary transition-colors">
                        {result.title}
                      </h3>
                      <p className="mt-2 text-muted-foreground line-clamp-2">
                        {result.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Article Results */}
            {articleResults.length > 0 && (
              <section>
                <h2 className="font-display text-2xl font-light mb-6 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Artigos
                </h2>
                <div className="space-y-6">
                  {articleResults.map((result) => (
                    <a
                      key={result.url}
                      href={result.url}
                      className="group flex gap-6 p-4 bg-card border border-border/50 rounded-lg hover:border-primary/50 transition-all"
                      aria-label={`Ler artigo: ${result.title}`}
                    >
                      {result.image && (
                        <div className="flex-shrink-0 w-32 h-24 overflow-hidden rounded-md">
                          <img
                            src={result.image}
                            alt={`Capa do artigo: ${result.title}`}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        {result.category && (
                          <span className="inline-block text-xs text-primary/80 bg-primary/10 px-2 py-0.5 rounded mb-2">
                            {result.category}
                          </span>
                        )}
                        <h3 className="font-display text-lg font-medium group-hover:text-primary transition-colors line-clamp-1">
                          {result.title}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                          {result.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            )}


            {/* No Results State */}
            {results.length === 0 && (
              <div className="text-center py-12">
                <SearchIcon className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                <h2 className="font-display text-2xl font-light mb-2">Nenhum resultado</h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Tente buscar por termos mais genéricos ou explore nossas categorias abaixo.
                </p>
                <div className="flex flex-wrap justify-center gap-3 mt-6">
                  <Link
                    to="/categoria/pratica"
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
                  >
                    Prática
                  </Link>
                  <Link
                    to="/categoria/filosofia"
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
                  >
                    Filosofia
                  </Link>
                  <Link
                    to="/categoria/bem-estar"
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
                  >
                    Bem-Estar
                  </Link>
                  <Link
                    to="/categoria/meditacao"
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
                  >
                    Meditação
                  </Link>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Empty State - No Query */
          <div className="text-center py-12">
            <SearchIcon className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
            <h2 className="font-display text-2xl font-light mb-2">O que você procura?</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Digite acima para buscar artigos, categorias e conteúdos sobre yoga, meditação e bem-estar.
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Search;
