import { Button } from "@/components/ui/button";
import { MessageSquare, Star } from "lucide-react";
import womanYoga from "@/assets/woman-doing-yoga.jpg.asset.json";
import leaves from "@/assets/green-leaves.webp";

const StrengthenSection = () => {
  return (
    <section className="relative pt-20 md:pt-28 pb-0 bg-background overflow-hidden">
      <div className="container max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 items-center">
          {/* Left: text */}
          <div className="space-y-6">
            <p className="text-xs font-bold tracking-[0.3em] text-coral uppercase">Quem Somos</p>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl leading-tight text-ink">
              Fortaleça seu<br />Núcleo, Fortaleça<br />sua Alma.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Uma jornada consciente pelo corpo e pela mente. Descubra sequências guiadas,
              filosofia acessível e práticas que se encaixam na sua rotina — do primeiro respiro
              ao equilíbrio profundo.
            </p>
            <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-6 font-semibold">
              <MessageSquare className="mr-2 h-4 w-4" />
              Consulta Gratuita
            </Button>
          </div>

          {/* Center: image with leaves */}
          <div className="relative flex justify-center">
            <img
              src={leaves}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute -top-12 -left-6 md:-left-10 w-40 md:w-56 z-10 pointer-events-none"
            />
            <div className="relative w-full max-w-sm aspect-[4/5] overflow-hidden shadow-medium"
                 style={{ borderRadius: "60% 40% 40% 60% / 40% 50% 50% 60%" }}>
              <img
                src={womanYoga.url}
                alt="Mulher praticando yoga em casa"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: rating */}
          <div className="space-y-5">
            <svg viewBox="0 0 64 64" className="w-14 h-14" aria-hidden="true">
              <g fill="none" stroke="hsl(320 55% 75%)" strokeWidth="1.5">
                {[0, 60, 120, 180, 240, 300].map((r) => (
                  <path
                    key={r}
                    d="M32 32 C 26 20, 26 12, 32 6 C 38 12, 38 20, 32 32 Z"
                    transform={`rotate(${r} 32 32)`}
                  />
                ))}
                <circle cx="32" cy="32" r="4" fill="hsl(15 82% 76%)" stroke="none" />
              </g>
            </svg>
            <h3 className="font-display font-bold text-2xl md:text-3xl text-ink leading-snug">
              Sem promessas mágicas, apenas prática consciente para corpo e mente.
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Conteúdo baseado em tradições milenares do yoga, adaptado para a vida moderna, com
              respeito ao seu corpo, ao seu tempo e à sua evolução pessoal.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <span className="text-4xl font-display font-bold text-ink">4.7</span>
              <div>
                <div className="flex text-coral">
                  {[1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-coral" />
                  ))}
                  <Star className="h-4 w-4" />
                </div>
                <p className="text-xs text-muted-foreground mt-1">Avaliações dos leitores</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* Discover Harmony giant caption sitting on the section edge */}
      <div className="relative mt-24 md:mt-32 text-center overflow-hidden">
        <h2
          className="font-display font-black text-ink/[0.07] tracking-tighter leading-[0.85] select-none whitespace-nowrap px-4 -mb-[0.15em]"
          style={{ fontSize: "clamp(3rem, 13vw, 13rem)" }}
        >
          Descubra Harmonia
        </h2>
      </div>
    </section>
  );
};

export default StrengthenSection;