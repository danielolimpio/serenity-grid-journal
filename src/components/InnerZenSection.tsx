import womanAsset from "@/assets/hero-woman.png.asset.json";
import lotus from "@/assets/lotus-flowers.webp";

const MeditationIcon = () => (
  <svg viewBox="0 0 48 48" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="12" r="3" />
    <path d="M24 16 C 22 20 22 24 24 28 C 26 24 26 20 24 16 Z" />
    <path d="M16 26 C 14 28 14 30 16 32 L 22 30" />
    <path d="M32 26 C 34 28 34 30 32 32 L 26 30" />
    <path d="M12 38 C 16 30 32 30 36 38 Z" />
  </svg>
);
const LotusIcon = () => (
  <svg viewBox="0 0 48 48" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {[0, 45, 90, 135, 180, 225, 270, 315].map((r) => (
      <path key={r} d="M24 24 C 20 16 20 10 24 6 C 28 10 28 16 24 24 Z" transform={`rotate(${r} 24 24)`} />
    ))}
    <circle cx="24" cy="24" r="3" />
  </svg>
);
const BambooIcon = () => (
  <svg viewBox="0 0 48 48" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 6 L 14 42" />
    <path d="M24 6 L 24 42" />
    <path d="M34 6 L 34 42" />
    <path d="M10 14 L 18 14 M 10 26 L 18 26 M 10 38 L 18 38" />
    <path d="M20 20 L 28 20 M 20 32 L 28 32" />
    <path d="M30 14 L 38 14 M 30 26 L 38 26 M 30 38 L 38 38" />
    <path d="M14 6 C 16 8 12 10 14 12" />
    <path d="M24 6 C 26 8 22 10 24 12" />
    <path d="M34 6 C 36 8 32 10 34 12" />
  </svg>
);

const bullets = [
  {
    title: "Abertura & Confiança",
    desc: "Práticas suaves para restabelecer a confiança no próprio corpo e na sua respiração.",
    Icon: MeditationIcon,
  },
  {
    title: "Abordagem Holística",
    desc: "Corpo, mente e emoções tratados como um só. Cada sessão respeita o seu ritmo.",
    Icon: LotusIcon,
  },
  {
    title: "Meditação Guiada",
    desc: "Técnicas simples para acalmar a mente e cultivar clareza no dia a dia.",
    Icon: BambooIcon,
  },
];

const InnerZenSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-14">
          {/* Left: woman with circle and lotus */}
          <div className="relative flex justify-center min-h-[500px]">
            {/* Thick gradient ring — crisp SVG */}
            <svg
              aria-hidden="true"
              viewBox="0 0 500 500"
              className="absolute top-6 left-1/2 -translate-x-1/2 w-[340px] h-[340px] md:w-[440px] md:h-[440px] z-0"
            >
              <defs>
                <linearGradient id="zenRing" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(15 88% 70%)" />
                  <stop offset="50%" stopColor="hsl(325 60% 70%)" />
                  <stop offset="100%" stopColor="hsl(285 60% 70%)" />
                </linearGradient>
              </defs>
              <circle
                cx="250"
                cy="250"
                r="220"
                fill="none"
                stroke="url(#zenRing)"
                strokeWidth="34"
                strokeLinecap="round"
              />
            </svg>
            {/* Lotus flowers behind woman on the right */}
            <img
              src={lotus}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute right-0 md:-right-6 top-20 w-48 md:w-64 z-10 pointer-events-none"
            />
            {/* Big leaves at hip level behind woman */}
            <img
              src={lotus}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute -left-8 bottom-8 w-52 md:w-72 z-10 pointer-events-none scale-x-[-1] opacity-95"
            />
            {/* Woman in FRONT of everything */}
            <img
              src={womanAsset.url}
              alt="Mulher em pose de meditação"
              loading="lazy"
              className="relative z-20 max-h-[440px] md:max-h-[520px] w-auto object-contain"
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
            <ul className="space-y-5 pt-2">
              {bullets.map(({ title, desc, Icon }) => (
                <li key={title} className="flex gap-4 items-start">
                  <span className="shrink-0 w-12 h-12 rounded-full bg-coral/15 text-coral flex items-center justify-center">
                    <Icon />
                  </span>
                  <div>
                    <h4 className="font-display font-bold text-ink text-lg">{title}</h4>
                    <p className="text-sm text-muted-foreground">{desc}</p>
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