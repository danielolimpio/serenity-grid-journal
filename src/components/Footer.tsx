import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Twitter, Mail, Phone, MapPin, Clock } from "lucide-react";
import logoAsset from "@/assets/logo-zen.png.asset.json";

const Footer = () => {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img src={logoAsset.url} alt="A Arte do Yoga" className="h-12 w-auto" />
            </Link>
            <p className="text-sm text-white/90 leading-relaxed">
              Explorando a jornada interior através da prática milenar do yoga. Filosofia, prática e bem-estar.
            </p>
          </div>

          {/* Yoga Studio */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-bold text-coral">Navegação</h4>
            <ul className="space-y-3 text-sm text-white/90">
              <li><Link to="/" className="hover:text-coral transition-editorial">Início</Link></li>
              <li><Link to="/sobre" className="hover:text-coral transition-editorial">Sobre</Link></li>
              <li><Link to="/contato" className="hover:text-coral transition-editorial">Contato</Link></li>
              <li><Link to="/faq" className="hover:text-coral transition-editorial">FAQ</Link></li>
              <li><Link to="/busca" className="hover:text-coral transition-editorial">Buscar</Link></li>
            </ul>
          </div>

          {/* Categorias */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-bold text-coral">Categorias</h4>
            <ul className="space-y-3 text-sm text-white/90">
              <li><Link to="/categoria/pratica" className="hover:text-coral transition-editorial">Prática</Link></li>
              <li><Link to="/categoria/filosofia" className="hover:text-coral transition-editorial">Filosofia</Link></li>
              <li><Link to="/categoria/bem-estar" className="hover:text-coral transition-editorial">Bem-Estar</Link></li>
              <li><Link to="/categoria/meditacao" className="hover:text-coral transition-editorial">Meditação</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-bold text-coral">Contato</h4>
            <ul className="space-y-3 text-sm text-white/90">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-coral shrink-0 mt-0.5" />
                <span>contato@theartofyoga.org</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-coral shrink-0 mt-0.5" />
                <span>Seg – Sáb: 10h às 17h</span>
              </li>
            </ul>
            <div className="flex items-center gap-2 pt-2">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-coral hover:text-navy text-white flex items-center justify-center transition-editorial"
                  aria-label="social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/85">
          <p>© 2025 A Arte do Yoga. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <Link to="/politica-privacidade" className="hover:text-coral transition-editorial">Privacidade</Link>
            <Link to="/termos" className="hover:text-coral transition-editorial">Termos</Link>
            <Link to="/cookies" className="hover:text-coral transition-editorial">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
