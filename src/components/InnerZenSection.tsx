import { Check } from "lucide-react";
import womanAsset from "@/assets/hero-woman.png.asset.json";
import lotus from "@/assets/lotus-flowers.png";

const bullets = [
  {
    title: "Abertura & Confiança",
    desc: "Práticas suaves para restabelecer a confiança no próprio corpo e na sua respiração.",
  },
  {
    title: "Abordagem Holística",
    desc: "Corpo, mente e emoções tratados como um só. Cada sessão respeita o seu ritmo.",
  },
  {
    title: "Meditação Guiada",
    desc: "Técnicas simples para acalmar a mente e cultivar clareza no dia a dia.",
  },
];

const InnerZenSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-14">
          {/* Left: woman with circle and lotus */}
          <div className="relative flex justify-center">
            {/* Gradient ring */}
            <div
              aria-hidden="true"
              className="absolute top-6 left-1/2 -translate-x-1/2 w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full"
              style={{
                background:
                  "conic-gradient(from 220deg, hsl(15 85% 78%), hsl(320 55% 78%), hsl(285 60% 78%), hsl(15 85% 78%))",
                mask: "radial-gradient(circle, transparent 58%, black 60%)",
                WebkitMask: "radial-gradient(circle, transparent 58%, black 60%)",
              }}
            />
            <img
              src={lotus}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute -right-2 top-24 w-40 md:w-52 z-20 pointer-events-none"
            />
            <img
              src={womanAsset.url}
              alt="Mulher em pose de meditação"
              loading="lazy"
              className="relative z-10 max-h-[420px] md:max-h-[480px] w-auto object-contain"
            />
          </div>

          {/* Right */}
          <div className="space-y-6">
            <p className="text-xs font-bold tracking-[0.3em] text-coral uppercase">Nossa Missão</p>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl leading-tight text-ink">
              Encontre seu Zen Interior,<br />
              Abrace sua Força Interior.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Um espaço para reconectar corpo e mente. Aqui, você encontra conteúdos práticos e
              filosóficos para transformar a maneira como você respira, se move e se relaciona
              consigo mesmo.
            </p>
            <ul className="space-y-4 pt-2">
              {bullets.map((b) => (
                <li key={b.title} className="flex gap-4">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-coral text-white flex items-center justify-center">
                    <Check className="h-4 w-4" />
                  </span>
                  <div>
                    <h4 className="font-display font-bold text-ink">{b.title}</h4>
                    <p className="text-sm text-muted-foreground">{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerZenSection;