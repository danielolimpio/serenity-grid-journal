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
    <section className="section-spacing bg-muted/30">
      <div className="container-editorial">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-light">
            Explore por Categoria
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra conteúdos cuidadosamente organizados para sua jornada no yoga
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.slug}
              to={`/categoria/${category.slug}`}
              className="group"
            >
              <article className="h-full flex flex-col bg-card overflow-hidden transition-editorial hover:shadow-medium">
                <div className="relative h-[300px] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-editorial group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                
                <div className="flex-1 p-8 space-y-3">
                  <h3 className="font-display text-3xl font-light group-hover:text-primary transition-editorial">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
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
