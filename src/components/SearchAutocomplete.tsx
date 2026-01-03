import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Search, FileText, Folder, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { searchContent, SearchResult } from "@/data/searchData";
import { cn } from "@/lib/utils";

interface SearchAutocompleteProps {
  onClose?: () => void;
  autoFocus?: boolean;
  showFullWidth?: boolean;
}

const SearchAutocomplete = ({ onClose, autoFocus = false, showFullWidth = false }: SearchAutocompleteProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim().length >= 2) {
        const searchResults = searchContent(query);
        setResults(searchResults);
        setIsOpen(true);
        setSelectedIndex(-1);
      } else {
        setResults([]);
        setIsOpen(false);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [query]);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Autofocus
  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  const handleSelect = useCallback((result: SearchResult) => {
    navigate(result.url);
    setQuery("");
    setIsOpen(false);
    onClose?.();
  }, [navigate, onClose]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || results.length === 0) {
      if (e.key === "Enter" && query.trim()) {
        navigate(`/busca?q=${encodeURIComponent(query)}`);
        setIsOpen(false);
        onClose?.();
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0 && results[selectedIndex]) {
          handleSelect(results[selectedIndex]);
        } else if (query.trim()) {
          navigate(`/busca?q=${encodeURIComponent(query)}`);
          setIsOpen(false);
          onClose?.();
        }
        break;
      case "Escape":
        setIsOpen(false);
        onClose?.();
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/busca?q=${encodeURIComponent(query)}`);
      setIsOpen(false);
      onClose?.();
    }
  };

  return (
    <div ref={containerRef} className={cn("relative", showFullWidth && "w-full")}>
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            ref={inputRef}
            type="text"
            placeholder="Buscar artigos, categorias..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => query.length >= 2 && setIsOpen(true)}
            className={cn(
              "pl-10 pr-10 bg-background border-border/50 focus:border-primary",
              showFullWidth ? "w-full h-12 text-base" : "w-64"
            )}
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setResults([]);
                setIsOpen(false);
                inputRef.current?.focus();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </form>

      {/* Autocomplete Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-lg shadow-lg overflow-hidden z-50 max-h-96 overflow-y-auto">
          {results.map((result, index) => (
            <button
              key={`${result.type}-${result.url}`}
              onClick={() => handleSelect(result)}
              className={cn(
                "w-full flex items-start gap-3 p-3 text-left transition-colors",
                selectedIndex === index ? "bg-accent" : "hover:bg-accent/50"
              )}
            >
              <div className="flex-shrink-0 mt-0.5">
                {result.type === "article" ? (
                  <FileText className="h-5 w-5 text-primary" />
                ) : (
                  <Folder className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground truncate">{result.title}</p>
                <p className="text-sm text-muted-foreground line-clamp-1">{result.description}</p>
                {result.category && (
                  <span className="inline-block mt-1 text-xs text-primary/80 bg-primary/10 px-2 py-0.5 rounded">
                    {result.category}
                  </span>
                )}
              </div>
            </button>
          ))}
          
          {/* View all results link */}
          <button
            onClick={() => {
              navigate(`/busca?q=${encodeURIComponent(query)}`);
              setIsOpen(false);
              onClose?.();
            }}
            className="w-full p-3 text-center text-sm text-primary hover:bg-accent/50 transition-colors border-t border-border"
          >
            Ver todos os resultados para "{query}"
          </button>
        </div>
      )}

      {/* No results message */}
      {isOpen && query.length >= 2 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-lg shadow-lg p-4 z-50">
          <p className="text-sm text-muted-foreground text-center">
            Nenhum resultado encontrado para "{query}"
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchAutocomplete;
