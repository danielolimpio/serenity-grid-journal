import { ChevronRight } from "lucide-react";

const stroke = "hsl(320 55% 65%)";

const Icon1 = () => (
  <svg viewBox="0 0 64 64" className="w-14 h-14" fill="none" stroke={stroke} strokeWidth="1.4">
    {[0, 45, 90, 135, 180, 225, 270, 315].map((r) => (
      <path key={r} d="M32 32 C 28 22 28 14 32 8 C 36 14 36 22 32 32 Z" transform={`rotate(${r} 32 32)`} />
    ))}
    <circle cx="32" cy="32" r="7" />
    <text x="32" y="35" textAnchor="middle" fontSize="7" fill={stroke} stroke="none" fontFamily="serif">ॐ</text>
  </svg>
);
const Icon2 = () => (
  <svg viewBox="0 0 64 64" className="w-14 h-14" fill="none" stroke={stroke} strokeWidth="1.4">
    <path d="M32 12c-5 6-9 12-9 18a9 9 0 0018 0c0-6-4-12-9-18z" />
    <path d="M14 34c4-2 10-2 14 2M50 34c-4-2-10-2-14 2" />
    <path d="M18 46c6-2 22-2 28 0" />
  </svg>
);
const Icon3 = () => (
  <svg viewBox="0 0 64 64" className="w-14 h-14" fill="none" stroke={stroke} strokeWidth="1.4">
    <rect x="16" y="14" width="20" height="24" rx="10" />
    <path d="M36 20c6 0 8 4 8 8s-2 8-8 8" />
    <path d="M20 42c-2 4-2 8 6 8h12c8 0 8-4 6-8" />
    <path d="M22 12c1-3 3-3 4 0M28 12c1-3 3-3 4 0" />
  </svg>
);
const Icon4 = () => (
  <svg viewBox="0 0 64 64" className="w-14 h-14" fill="none" stroke={stroke} strokeWidth="1.4">
    <circle cx="32" cy="32" r="20" />
    <path d="M32 18v14l10 6" strokeLinecap="round" />
  </svg>
);
const Icon5 = () => (
  <svg viewBox="0 0 64 64" className="w-14 h-14" fill="none" stroke={stroke} strokeWidth="1.4">
    <path d="M18 40c4-6 10-8 14-8s10 2 14 8" />
    <path d="M22 40c2-4 6-6 10-6s8 2 10 6" />
    <ellipse cx="32" cy="32" rx="6" ry="3" />
    <path d="M18 44h28" />
  </svg>
);
const Icon6 = () => (
  <svg viewBox="0 0 64 64" className="w-14 h-14" fill="none" stroke={stroke} strokeWidth="1.4">
    <path d="M22 40c-2 0-4-2-4-4s2-4 4-4h20c2 0 4 2 4 4s-2 4-4 4z" />
    <path d="M24 40v6c0 2 2 4 4 4h8c2 0 4-2 4-4v-6" />
    <path d="M28 30c-2-4 0-8 4-10 4 2 6 6 4 10" />
    <path d="M30 20c-1-3-4-3-5 0M34 20c1-3 4-3 5 0" />
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
                s.highlight
                  ? "text-white"
                  : "bg-card text-ink"
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
              <div className={`mx-auto mb-4 flex justify-center ${s.highlight ? "text-white [&_svg]:stroke-white" : ""}`}>
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
                  s.highlight
                    ? "text-white border-white/70"
                    : "text-primary border-primary/40 hover:border-primary"
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