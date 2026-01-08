import { Calendar, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  slug: string;
  featured?: boolean;
}

const ArticleCard = ({
  title,
  excerpt,
  category,
  date,
  image,
  slug,
  featured = false,
}: ArticleCardProps) => {
  const articleUrl = `/artigo/${slug}/`;

  return (
    <a href={articleUrl} className="group" aria-label={`Ler artigo: ${title}`}>
      <article
        className={cn(
          "h-full flex flex-col transition-editorial hover:scale-[1.02]",
          featured ? "md:flex-row md:gap-8" : ""
        )}
      >
        {/* Image */}
        <div
          className={cn(
            "relative overflow-hidden bg-muted",
            featured ? "md:w-1/2 h-[400px]" : "h-[300px]"
          )}
        >
          <img
            src={image}
            alt={`Capa do artigo: ${title}`}
            loading="lazy"
            className="w-full h-full object-cover transition-editorial group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-block px-3 py-1 text-xs font-body uppercase tracking-wider bg-background/90 backdrop-blur-sm text-foreground">
              {category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div
          className={cn(
            "flex-1 flex flex-col justify-between p-6 bg-card",
            featured ? "md:w-1/2 md:p-8" : ""
          )}
        >
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <time dateTime={date}>{date}</time>
            </div>

            <h2
              className={cn(
                "font-display font-light leading-tight text-balance group-hover:text-primary transition-editorial",
                featured ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"
              )}
            >
              {title}
            </h2>

            <p className="text-muted-foreground leading-relaxed line-clamp-3">
              {excerpt}
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm font-body text-primary mt-6 group-hover:gap-4 transition-editorial">
            Ler artigo
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </article>
    </a>
  );
};

export default ArticleCard;

