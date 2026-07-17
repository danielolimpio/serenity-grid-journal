import { ChevronRight } from "lucide-react";

const stroke = "hsl(320 55% 62%)";
const common = {
  viewBox: "0 0 64 64",
  className: "w-14 h-14",
  fill: "none",
  stroke,
  strokeWidth: 1.3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// Anxiety Relief — Om inside 8-point star + lotus petals
const Icon1 = () => (
  <svg {...common}>
    {[0, 45, 90, 135, 180, 225, 270, 315].map((r) => (
      <path key={`s-${r}`} d="M32 8 L 34 26 L 32 32 L 30 26 Z" transform={`rotate(${r} 32 32)`} />
    ))}
    {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((r) => (
      <path key={`p-${r}`} d="M32 32 C 30 22 30 16 32 12 C 34 16 34 22 32 32 Z" transform={`rotate(${r} 32 32)`} />
    ))}
    <circle cx="32" cy="32" r="8" />
    <text x="32" y="36" textAnchor="middle" fontSize="10" fill={stroke} stroke="none" fontFamily="serif" fontWeight="bold">ॐ</text>
  </svg>
);
// Life Balancing — layered lotus
const Icon2 = () => (
  <svg {...common}>
    <path d="M32 46 C 20 46 12 38 12 30 C 20 30 26 34 32 46 Z" />
    <path d="M32 46 C 44 46 52 38 52 30 C 44 30 38 34 32 46 Z" />
    <path d="M32 46 C 24 44 18 36 20 24 C 26 28 30 34 32 46 Z" />
    <path d="M32 46 C 40 44 46 36 44 24 C 38 28 34 34 32 46 Z" />
    <path d="M32 46 C 28 40 26 28 30 16 C 32 22 34 32 32 46 Z" />
    <path d="M32 46 C 36 40 38 28 34 16 C 32 22 30 32 32 46 Z" />
    <path d="M14 46 L 50 46" />
  </svg>
);
// Reduce Stress — meditating woman with candle
const Icon3 = () => (
  <svg {...common}>
    <circle cx="22" cy="20" r="3" />
    <path d="M22 23 C 20 27 20 31 22 34" />
    <path d="M16 32 C 14 34 14 36 16 38 L 20 36" />
    <path d="M12 44 C 16 38 26 38 30 44 Z" />
    <path d="M38 44 L 46 44 L 44 30 L 40 30 Z" />
    <path d="M42 30 C 42 26 41 24 42 22 C 43 24 42 26 42 30" />
  </svg>
);
// Flexible Time — coffee cup with steam
const Icon4 = () => (
  <svg {...common}>
    <path d="M14 26 L 14 40 C 14 46 20 50 26 50 L 34 50 C 40 50 46 46 46 40 L 46 26 Z" />
    <path d="M46 30 C 52 30 54 34 54 38 C 54 42 52 46 46 46" />
    <path d="M14 26 L 46 26" />
    <path d="M22 20 C 24 18 22 14 24 12" />
    <path d="M30 20 C 32 18 30 14 32 12" />
    <path d="M38 20 C 40 18 38 14 40 12" />
  </svg>
);
// Ayurveda — bowl with herbs
const Icon5 = () => (
  <svg {...common}>
    <path d="M10 34 L 54 34 C 52 44 44 50 32 50 C 20 50 12 44 10 34 Z" />
    <path d="M8 34 L 56 34" />
    <path d="M24 32 C 20 26 20 20 24 14 C 28 20 28 26 24 32 Z" />
    <path d="M32 32 C 28 26 28 18 32 10 C 36 18 36 26 32 32 Z" />
    <path d="M40 32 C 36 26 36 20 40 14 C 44 20 44 26 40 32 Z" />
  </svg>
);
// Health Tips — stacked stones with leaf
const Icon6 = () => (
  <svg {...common}>
    <ellipse cx="32" cy="46" rx="18" ry="4" />
    <path d="M16 42 C 16 36 22 34 32 34 C 42 34 48 36 48 42" />
    <ellipse cx="32" cy="30" rx="12" ry="3" />
    <path d="M20 28 C 20 24 24 22 32 22 C 40 22 44 24 44 28" />
    <ellipse cx="32" cy="18" rx="8" ry="2.5" />
    <path d="M38 14 C 40 10 44 8 48 8 C 48 12 46 16 42 18" />
  </svg>
);

const services = [
  { title: "Alívio da Ansiedade", desc: "Práticas para acalmar o sistema nervoso e reduzir a ansiedade no dia a dia.", icon: <Icon1 /> },
  { title: "Equilíbrio da Vida", desc: "Encontre harmonia entre trabalho, descanso e cuidado pessoal.", icon: <Icon2 />, highlight: true },
  { title: "Reduzir o Estresse", desc: "Técnicas de respiração e movimento para dissolver a tensão acumulada.", icon: <Icon3 /> },
  { title: "Tempo Flexível", desc: "Sequências curtas e adaptáveis para qualquer hora do seu dia.", icon: <Icon4 /> },
  { title: "Ayurveda", desc: "Sabedoria milenar sobre alimentação, sono e ritmo natural do corpo.", icon: <Icon5 /> },
  { title: "Dicas de Saúde", desc: "Hábitos simples e eficazes para uma vida mais leve e consciente.", icon: <Icon6 /> },
];

const OfferingsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/50 relative overflow-hidden">
      <div className="container max-w-6xl px-6">
        <div className="text-center mb-14 space-y-2">
          <p className="text-xs font-bold tracking-[0.3em] text-coral uppercase">O Que Oferecemos</p>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-ink leading-tight">
            Deixe os fios da vida<br />se conectarem com o yoga.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <article
              key={s.title}
              className={`rounded-2xl p-8 text-center transition-editorial shadow-subtle hover:shadow-medium ${
                s.highlight ? "text-white" : "bg-card text-ink"
              }`}
              style={
                s.highlight
                  ? {
                      background:
                        "linear-gradient(135deg, hsl(15 85% 72%) 0%, hsl(320 55% 72%) 55%, hsl(285 55% 70%) 100%)",
                    }
                  : undefined
              }
            >
              <div className={`mx-auto mb-4 flex justify-center ${s.highlight ? "text-white [&_svg]:stroke-white [&_text]:!fill-white" : ""}`}>
                {s.icon}
              </div>
              <h3 className={`font-display font-bold text-xl mb-2 ${s.highlight ? "text-white" : "text-ink"}`}>
                {s.title}
              </h3>
              <p className={`text-sm mb-5 ${s.highlight ? "text-white/85" : "text-muted-foreground"}`}>
                {s.desc}
              </p>
              <a
                href="#"
                className={`inline-flex items-center gap-1 text-xs font-bold tracking-[0.2em] uppercase border-b-2 pb-1 ${
                  s.highlight ? "text-white border-white/70" : "text-primary border-primary/40 hover:border-primary"
                }`}
              >
                Ler Mais <ChevronRight className="h-3 w-3" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
