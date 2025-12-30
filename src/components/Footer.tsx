import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card">
      <div className="container-editorial section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/">
              <img src={logo} alt="A Arte do Yoga" className="h-20 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Explorando a filosofia, prática e bem-estar através do yoga. Conteúdo editorial premium sobre mindfulness e transformação.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-body text-sm font-medium uppercase tracking-wider text-foreground/80">
              Navegação
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-editorial">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/categoria/pratica" className="text-sm text-muted-foreground hover:text-primary transition-editorial">
                  Prática
                </Link>
              </li>
              <li>
                <Link to="/categoria/filosofia" className="text-sm text-muted-foreground hover:text-primary transition-editorial">
                  Filosofia
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-sm text-muted-foreground hover:text-primary transition-editorial">
                  Sobre
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-body text-sm font-medium uppercase tracking-wider text-foreground/80">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/politica-privacidade" className="text-sm text-muted-foreground hover:text-primary transition-editorial">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos" className="text-sm text-muted-foreground hover:text-primary transition-editorial">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-editorial">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-sm text-muted-foreground hover:text-primary transition-editorial">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-body text-sm font-medium uppercase tracking-wider text-foreground/80">
              Newsletter
            </h4>
            <p className="text-sm text-muted-foreground">
              Receba insights semanais sobre yoga e bem-estar.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="seu@email.com" 
                className="text-sm"
              />
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Inscrever
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2025 | The Art of Yoga | Todos os direitos reservados | Desenvolvido por{" "}
            <a 
              href="https://danielolimpio.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-editorial underline"
            >
              DanielOlimpio
            </a>
          </p>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-editorial"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-editorial"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-editorial"
            >
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
