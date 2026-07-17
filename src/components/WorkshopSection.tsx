import womanMat from "@/assets/woman-mat.png.asset.json";

const WorkshopSection = () => {
  return (
    <section
      className="relative text-white"
      style={{
        background:
          "linear-gradient(115deg, hsl(275 55% 42%) 0%, hsl(320 60% 62%) 55%, hsl(15 85% 72%) 100%)",
      }}
    >
      <div className="container max-w-6xl px-6 pt-16 md:pt-20 pb-0 grid grid-cols-1 md:grid-cols-2 gap-8 items-end relative">
        <div className="space-y-5 pb-16 md:pb-24">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-white/90">Por Que Nos Escolher</p>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl leading-tight text-white">
            Deixe os fios da vida se<br />conectarem com o yoga.
          </h2>
          <p className="text-white/90 max-w-md">
            Participe do nosso próximo workshop de yoga e desbloqueie todo o seu potencial. Uma
            imersão completa com práticas guiadas, filosofia e comunidade.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/25">
            <div>
              <h4 className="font-display font-bold text-lg text-white">Aulas Diversas Oferecidas</h4>
              <p className="text-sm text-white/90 mt-1">Hatha, Vinyasa, Yin e Meditação.</p>
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-white">Abordagem Holística</h4>
              <p className="text-sm text-white/90 mt-1">Corpo, mente e respiração integrados.</p>
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-white">Horário Flexível</h4>
              <p className="text-sm text-white/90 mt-1">Escolha o momento que combina com você.</p>
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-white">Comprometidos com a Excelência</h4>
              <p className="text-sm text-white/90 mt-1">Conteúdo cuidadosamente selecionado.</p>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end self-end">
          {/* Lotus lines directly behind the woman only */}
          <svg
            aria-hidden="true"
            viewBox="0 0 800 800"
            className="absolute right-0 bottom-0 w-[520px] md:w-[720px] opacity-40 pointer-events-none z-0"
          >
            <g fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              {Array.from({ length: 12 }).map((_, i) => (
                <path
                  key={`w1-${i}`}
                  d="M400 400 C 340 280 340 180 400 100 C 460 180 460 280 400 400 Z"
                  transform={`rotate(${(i * 360) / 12} 400 400)`}
                />
              ))}
              {Array.from({ length: 12 }).map((_, i) => (
                <path
                  key={`w2-${i}`}
                  d="M400 400 C 360 320 360 240 400 180 C 440 240 440 320 400 400 Z"
                  transform={`rotate(${(i * 360) / 12 + 15} 400 400)`}
                />
              ))}
              <circle cx="400" cy="400" r="70" />
            </g>
          </svg>
          <img
            src={womanMat.url}
            alt="Mulher com tapete de yoga"
            loading="lazy"
            className="relative z-10 max-h-[640px] md:max-h-[760px] w-auto object-contain drop-shadow-2xl -mt-16 md:-mt-24"
          />
        </div>
      </div>
    </section>
  );
};

export default WorkshopSection;