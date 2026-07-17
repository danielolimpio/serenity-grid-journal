import { useState, useEffect, memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Search, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";
import SearchAutocomplete from "@/components/SearchAutocomplete";

// Memoized logo component to prevent re-renders
const Logo = memo(() => (
  <img 
    src={logo} 
    alt="A Arte do Yoga" 
    className="h-12 w-auto"
    loading="eager"
    decoding="async"
    style={{ contentVisibility: 'auto', minHeight: '48px', minWidth: '48px' }}
  />
));

Logo.displayName = 'Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close search on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
      }
      // Open search with Ctrl+K or Cmd+K
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { name: "Início", path: "/" },
    { name: "Prática", path: "/categoria/pratica" },
    { name: "Filosofia", path: "/categoria/filosofia" },
    { name: "Bem-Estar", path: "/categoria/bem-estar" },
    { name: "Sobre", path: "/sobre" },
    { name: "FAQ", path: "/faq" },
    { name: "Contato", path: "/contato" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-editorial",
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-subtle" : "bg-transparent"
        )}
      >
        <div className="container max-w-7xl px-6">
          <nav className="flex items-center justify-between py-4">
            <Link to="/" className="flex items-center">
              <Logo />
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm font-body font-semibold text-ink hover:text-primary transition-editorial"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <div className="hidden lg:flex items-center gap-2 mr-2">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-8 h-8 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-editorial"
                    aria-label="social"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-ink hover:text-primary"
                onClick={() => setIsSearchOpen(true)}
                title="Buscar (Ctrl+K)"
              >
                <Search className="h-5 w-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-ink hover:text-primary"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </nav>

          {isMenuOpen && (
            <div className="md:hidden pb-6 space-y-4 animate-fade-in bg-background rounded-b-2xl px-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-base font-body font-semibold text-ink hover:text-primary transition-editorial"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Search Modal Overlay */}
      {isSearchOpen && (
        <div 
          className="fixed inset-0 z-[60] bg-background/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsSearchOpen(false)}
        >
          <div 
            className="container-editorial pt-24 md:pt-32"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-w-2xl mx-auto">
              <SearchAutocomplete 
                autoFocus 
                showFullWidth 
                onClose={() => setIsSearchOpen(false)} 
              />
              <p className="text-center text-sm text-muted-foreground mt-4">
                Pressione <kbd className="px-2 py-1 bg-muted rounded text-xs">Esc</kbd> para fechar
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
