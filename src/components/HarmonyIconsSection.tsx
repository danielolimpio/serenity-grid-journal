const items = [
  {
    title: "Atenção Plena",
    desc: "Práticas de mindfulness para acalmar a mente e trazer presença ao momento.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M24 8c4 6 4 12 0 18-4-6-4-12 0-18z" />
        <path d="M14 20c6 2 10 6 10 12-6-2-10-6-10-12z" />
        <path d="M34 20c-6 2-10 6-10 12 6-2 10-6 10-12z" />
        <circle cx="24" cy="34" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Terapia",
    desc: "Ferramentas terapêuticas para aliviar o estresse e regular as emoções.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M24 40c-8-6-14-12-14-20a8 8 0 0114-5 8 8 0 0114 5c0 8-6 14-14 20z" />
      </svg>
    ),
  },
  {
    title: "Relaxamento",
    desc: "Rotinas suaves para restaurar a energia e liberar tensões acumuladas.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M8 26c8-2 12-6 16-14 4 8 8 12 16 14-6 4-10 8-16 14-6-6-10-10-16-14z" />
        <circle cx="24" cy="26" r="2" fill="currentColor" />
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