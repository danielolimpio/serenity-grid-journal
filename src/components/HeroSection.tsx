import heroWomanAsset from "@/assets/pink-woman.png.asset.json";

const HeroSection = () => {
  return (
    <section className="relative bg-hero-soft pt-28 md:pt-32 pb-0 overflow-hidden">
      <div className="container max-w-7xl px-6">
        <div className="relative flex items-end justify-center">
          {/* Lotus flower lines behind woman */}
          <svg
            aria-hidden="true"
            viewBox="0 0 800 800"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] md:w-[820px] opacity-80 pointer-events-none"
          >
            <g fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {Array.from({ length: 12 }).map((_, i) => (
                <path
                  key={`p1-${i}`}
                  d="M400 400 C 340 260 340 160 400 80 C 460 160 460 260 400 400 Z"
                  transform={`rotate(${(i * 360) / 12} 400 400)`}
                />
              ))}
              {Array.from({ length: 12 }).map((_, i) => (
                <path
                  key={`p2-${i}`}
                  d="M400 400 C 360 300 360 220 400 160 C 440 220 440 300 400 400 Z"
                  transform={`rotate(${(i * 360) / 12 + 15} 400 400)`}
                />
              ))}
              <circle cx="400" cy="400" r="80" />
              <circle cx="400" cy="400" r="50" />
            </g>
          </svg>

          {/* Gigantic ZEN YOGA behind the woman */}
          <h1
            aria-label="ZEN YOGA"
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-display tracking-tighter leading-none pointer-events-none select-none whitespace-nowrap px-6"
            style={{
              fontSize: "clamp(4rem, 17vw, 17rem)",
              fontWeight: 900,
              WebkitTextStroke: "2px transparent",
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
            width={800}
            height={1000}
            loading="eager"
            decoding="async"
            // @ts-ignore fetchpriority is a valid HTML attribute
            fetchpriority="high"
            className="relative z-10 max-h-[520px] md:max-h-[640px] w-auto object-contain drop-shadow-xl animate-fade-in"
          />
        </div>

        <p
          className="text-right max-w-md ml-auto -mt-6 md:-mt-10 pr-2 md:pr-8 pb-10 md:pb-16 leading-tight italic text-ink text-2xl md:text-4xl"
          style={{ fontFamily: '"Cormorant Garamond", "Playfair Display", Georgia, serif', fontWeight: 500 }}
        >
          Seu Santuário para <br />
          Bem-estar e Harmonia
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
