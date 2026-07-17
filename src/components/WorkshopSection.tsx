import womanMat from "@/assets/woman-mat.png.asset.json";

const WorkshopSection = () => {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(115deg, hsl(275 55% 42%) 0%, hsl(320 60% 62%) 55%, hsl(15 85% 72%) 100%)",
      }}
    >
      {/* Lotus outline background */}
      <svg
        aria-hidden="true"
        viewBox="0 0 800 800"
        className="absolute right-[35%] top-1/2 -translate-y-1/2 w-[900px] opacity-25 pointer-events-none"
      >
        <g fill="none" stroke="white" strokeWidth="1.2">
          {Array.from({ length: 12 }).map((_, i) => (
            <path
              key={i}
              d="M400 400 C 340 280 340 180 400 100 C 460 180 460 280 400 400 Z"
              transform={`rotate(${(i * 360) / 12} 400 400)`}
            />
          ))}
          <circle cx="400" cy="400" r="60" />
        </g>
      </svg>

      <div className="container max-w-6xl px-6 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
        <div className="space-y-5">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-white/85">Workshop</p>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl leading-tight">
            Deixe os fios da vida se<br />conectarem com o yoga.
          </h2>
          <p className="text-white/85 max-w-md">
            Participe do nosso próximo workshop de yoga e desbloqueie todo o seu potencial. Uma
            imersão completa com práticas guiadas, filosofia e comunidade.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/20">
            <div>
              <h4 className="font-display font-bold text-lg">Aulas Diversas Oferecidas</h4>
              <p className="text-sm text-white/80 mt-1">Hatha, Vinyasa, Yin e Meditação.</p>
            </div>
            <div>
              <h4 className="font-display font-bold text-lg">Abordagem Holística</h4>
              <p className="text-sm text-white/80 mt-1">Corpo, mente e respiração integrados.</p>
            </div>
            <div>
              <h4 className="font-display font-bold text-lg">Horário Flexível</h4>
              <p className="text-sm text-white/80 mt-1">Escolha o momento que combina com você.</p>
            </div>
            <div>
              <h4 className="font-display font-bold text-lg">Comprometidos com a Excelência</h4>
              <p className="text-sm text-white/80 mt-1">Conteúdo cuidadosamente selecionado.</p>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <img
            src={womanMat.url}
            alt="Mulher com tapete de yoga"
            loading="lazy"
            className="max-h-[520px] w-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default WorkshopSection;