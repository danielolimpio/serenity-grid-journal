import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroPose from "@/assets/hero-yoga-pose.png.asset.json";

const HeroSection = () => {
  return (
    <section className="relative bg-hero-soft pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="container max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div className="space-y-6 text-center md:text-left animate-fade-in">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-coral">
              Bem-vindo
            </p>
            <h1 className="font-display font-extrabold text-5xl md:text-7xl leading-[1.05]">
              <span className="text-gradient-coral">A ARTE</span>
              <br />
              <span className="text-ink">DO YOGA</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mx-auto md:mx-0">
              Seu santuário para bem-estar, filosofia e harmonia através da prática milenar do yoga.
            </p>
            <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 pt-2">
              <Link to="/sitemap/">
                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
                  Explorar Artigos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/sobre">
                <Button size="lg" variant="outline" className="rounded-full border-primary/30 text-primary hover:bg-primary/5 font-semibold px-8">
                  Sobre o Blog
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center animate-fade-in">
            <img
              src={heroPose.url}
              alt="Prática de yoga - pose de meditação"
              className="max-h-[520px] w-auto object-contain"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
