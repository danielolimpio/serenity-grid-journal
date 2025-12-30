import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
            <img src={logo} alt="A Arte do Yoga" className="h-16 w-auto" />
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
            <Button variant="ghost" size="icon" className="text-foreground/60 hover:text-primary">
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
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
