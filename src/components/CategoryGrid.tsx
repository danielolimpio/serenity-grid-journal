import { Link } from "react-router-dom";
import meditationImage from "@/assets/meditation.jpg";
import philosophyImage from "@/assets/philosophy.jpg";
import wellnessImage from "@/assets/wellness.jpg";

const categories = [
  {
    name: "Prática",
    description: "Asanas, sequências e técnicas para aprofundar sua prática de yoga",
    image: meditationImage,
    slug: "pratica",
  },
  {
    name: "Filosofia",
    description: "Os princípios milenares e ensinamentos do yoga tradicional",
    image: philosophyImage,
    slug: "filosofia",
  },
  {
    name: "Bem-Estar",
    description: "Mindfulness, meditação e práticas para uma vida mais equilibrada",
    image: wellnessImage,
    slug: "bem-estar",
  },
];

const CategoryGrid = () => {
  return (
    <section className="py-16 md:py-24 bg-blush">
      <div className="container max-w-7xl px-6">
        <div className="text-center space-y-3 mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-coral">Categorias</p>
          <h2 className="font-display font-bold text-3xl md:text-5xl">
            Explore por <span className="text-gradient-coral">Categoria</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Descubra conteúdos cuidadosamente organizados para sua jornada no yoga
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.slug} to={`/categoria/${category.slug}`} className="group">
              <article className="h-full flex flex-col bg-card rounded-2xl overflow-hidden shadow-subtle hover:shadow-medium transition-editorial">
                <div className="relative h-[240px] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-editorial group-hover:scale-105"
                  />
                  <span className="absolute top-4 right-4 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider rounded-md bg-coral text-coral-foreground">
                    Explorar
                  </span>
                </div>
                <div className="flex-1 p-7 space-y-2">
                  <h3 className="font-display font-bold text-2xl text-ink group-hover:text-primary transition-editorial">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
