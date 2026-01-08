import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-yoga.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Yoga em ambiente natural sereno"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-editorial text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <p className="text-sm font-body uppercase tracking-[0.3em] text-foreground/60">
            Editorial Premium
          </p>
          <h1 className="font-display text-6xl md:text-8xl font-light text-balance">
            A Arte do Yoga
          </h1>
          <p className="text-xl md:text-2xl font-light text-foreground/80 max-w-2xl mx-auto text-balance">
            Explore a filosofia milenar, práticas transformadoras e o caminho para o bem-estar interior
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link to="/sitemap/">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-body tracking-wide">
              Explorar Artigos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/sobre">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-foreground/20 hover:bg-foreground/5 font-body tracking-wide"
            >
              Sobre o Blog
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-12 bg-gradient-to-b from-foreground/40 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
