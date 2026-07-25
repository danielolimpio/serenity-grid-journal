import { Link } from "react-router-dom";
import practicaImg from "@/assets/meditation.jpg";
import philosophyImg from "@/assets/philosophy.jpg";
import wellnessImg from "@/assets/wellness.jpg";
import ayurvedaImg from "@/assets/asanas-costas.jpg";
import programasImg from "@/assets/yoga-maos-punhos.jpg";

const circles = [
  { name: "Prática", slug: "pratica", image: practicaImg },
  { name: "Filosofia", slug: "filosofia", image: philosophyImg },
  { name: "Bem-Estar", slug: "bem-estar", image: wellnessImg },
  { name: "Ayurveda", slug: "ayurveda", image: ayurvedaImg },
  { name: "Programas", slug: "programas", image: programasImg },
];

const CategoryCircles = () => {
  return (
    <section className="pt-24 md:pt-28 pb-4 bg-background border-b border-border/40">
      <div className="container max-w-6xl px-6">
        <ul className="flex flex-wrap items-start justify-center gap-6 md:gap-12">
          {circles.map((c) => (
            <li key={c.slug}>
              <Link
                to={`/categoria/${c.slug}`}
                className="flex flex-col items-center gap-2 group"
                aria-label={`Categoria ${c.name}`}
              >
                <span className="relative block w-20 h-20 md:w-24 md:h-24 rounded-full p-[3px] ring-2 ring-coral transition-transform group-hover:scale-105">
                  <img
                    src={c.image}
                    alt={c.name}
                    width={96}
                    height={96}
                    loading="eager"
                    decoding="async"
                    // @ts-ignore fetchpriority is a valid HTML attribute
                    fetchpriority="high"
                    className="w-full h-full object-cover rounded-full"
                  />
                </span>
                <span className="font-display font-bold text-sm md:text-base text-ink group-hover:text-coral transition-editorial">
                  {c.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CategoryCircles;