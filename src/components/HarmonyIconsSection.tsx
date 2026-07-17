const items = [
  {
    title: "Atenção Plena",
    desc: "Práticas de mindfulness para acalmar a mente e trazer presença ao momento.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((r) => (
          <path key={r} d="M24 24 C 20 16 20 10 24 6 C 28 10 28 16 24 24 Z" transform={`rotate(${r} 24 24)`} />
        ))}
        <circle cx="24" cy="24" r="3.5" />
      </svg>
    ),
  },
  {
    title: "Terapia",
    desc: "Ferramentas terapêuticas para aliviar o estresse e regular as emoções.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        {/* Cupped hands */}
        <path d="M8 26 C 10 34 18 38 24 38 C 30 38 38 34 40 26 C 38 24 34 24 32 26 L 24 30 L 16 26 C 14 24 10 24 8 26 Z" />
        <path d="M16 26 L 20 22" />
        <path d="M32 26 L 28 22" />
        {/* Stones */}
        <ellipse cx="20" cy="20" rx="4" ry="2.5" />
        <ellipse cx="27" cy="16" rx="4" ry="2.5" />
        <ellipse cx="24" cy="24" rx="3" ry="2" />
      </svg>
    ),
  },
  {
    title: "Relaxamento",
    desc: "Rotinas suaves para restaurar a energia e liberar tensões acumuladas.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        {/* Head */}
        <circle cx="24" cy="12" r="3" />
        {/* Body meditation */}
        <path d="M24 16 C 22 20 22 24 24 28 C 26 24 26 20 24 16 Z" />
        {/* Arms */}
        <path d="M16 26 C 14 28 14 30 16 32 L 22 30" />
        <path d="M32 26 C 34 28 34 30 32 32 L 26 30" />
        {/* Crossed legs */}
        <path d="M12 38 C 16 30 32 30 36 38 Z" />
        {/* Rays */}
        <path d="M8 12 L 12 14" />
        <path d="M40 12 L 36 14" />
        <path d="M6 20 L 10 20" />
        <path d="M42 20 L 38 20" />
      </svg>
    ),
  },
];

const HarmonyIconsSection = () => {
  return (
    <section className="bg-muted/60 py-16 md:py-20">
      <div className="container max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 text-center">
          {items.map((it) => (
            <div key={it.title} className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-coral/15 text-coral flex items-center justify-center ring-1 ring-coral/30">
                {it.icon}
              </div>
              <h3 className="font-display font-bold text-lg text-ink">{it.title}</h3>
              <p className="text-sm text-muted-foreground max-w-xs">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HarmonyIconsSection;