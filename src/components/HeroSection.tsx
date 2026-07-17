import heroWomanAsset from "@/assets/hero-woman.png.asset.json";

const HeroSection = () => {
  return (
    <section className="relative bg-hero-soft pt-28 md:pt-32 pb-0 overflow-hidden">
      <div className="container max-w-7xl px-6">
        <p className="text-lg md:text-xl text-ink/70 font-body ml-2 md:ml-8 mb-2 md:mb-4 animate-fade-in">
          Bem-vindo à
        </p>

        <div className="relative flex items-end justify-center">
          {/* Decorative mandala */}
          <svg
            aria-hidden="true"
            viewBox="0 0 600 600"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] md:w-[720px] opacity-40 pointer-events-none"
          >
            <g fill="none" stroke="hsl(15 82% 82%)" strokeWidth="1.2">
              {Array.from({ length: 16 }).map((_, i) => (
                <ellipse
                  key={i}
                  cx="300"
                  cy="300"
                  rx="120"
                  ry="260"
                  transform={`rotate(${(i * 360) / 16} 300 300)`}
                />
              ))}
              <circle cx="300" cy="300" r="90" />
              <circle cx="300" cy="300" r="60" />
            </g>
          </svg>

          {/* Gigantic ZEN YOGA behind the woman */}
          <h1
            aria-label="ZEN YOGA"
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-display font-black tracking-tight leading-none pointer-events-none select-none"
            style={{
              fontSize: "clamp(6rem, 20vw, 20rem)",
            }}
          >
            <span
              style={{
                background:
                  "linear-gradient(90deg, hsl(15 85% 72%) 0%, hsl(340 65% 78%) 50%, hsl(285 55% 78%) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              ZEN&nbsp;YOGA
            </span>
          </h1>

          {/* Woman */}
          <img
            src={heroWomanAsset.url}
            alt="Mulher em pose de yoga"
            loading="eager"
            className="relative z-10 max-h-[520px] md:max-h-[640px] w-auto object-contain drop-shadow-xl animate-fade-in"
          />
        </div>

        <p className="text-right text-lg md:text-2xl text-ink/80 max-w-md ml-auto -mt-6 md:-mt-10 pr-2 md:pr-8 pb-10 md:pb-16 leading-snug">
          Seu Santuário para <br />
          Bem-estar e Harmonia
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
