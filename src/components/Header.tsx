import { useState, useEffect, memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";
import SearchAutocomplete from "@/components/SearchAutocomplete";

// Memoized logo component to prevent re-renders
const Logo = memo(() => (
  <img 
    src={logo} 
    alt="A Arte do Yoga" 
    className="h-16 w-auto"
    loading="eager"
    decoding="async"
    style={{ 
      contentVisibility: 'auto',
      minHeight: '64px',
      minWidth: '64px'
    }}
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
          isScrolled ? "bg-background/95 backdrop-blur-sm shadow-subtle" : "bg-transparent"
        )}
      >
        <div className="container-editorial">
          <nav className="flex items-center justify-between py-6">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-base font-body font-semibold tracking-wide text-foreground/80 hover:text-primary transition-editorial"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Search & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-foreground/60 hover:text-primary"
                onClick={() => setIsSearchOpen(true)}
                title="Buscar (Ctrl+K)"
              >
                <Search className="h-5 w-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-foreground/60 hover:text-primary"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-6 space-y-4 animate-fade-in">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-lg font-body font-semibold text-foreground/80 hover:text-primary transition-editorial"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate("/busca");
                }}
                className="flex items-center gap-2 text-lg font-body font-semibold text-foreground/80 hover:text-primary transition-editorial"
              >
                <Search className="h-5 w-5" />
                Buscar
              </button>
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
