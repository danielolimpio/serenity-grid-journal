import { Calendar, MessageSquare } from "lucide-react";
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
          "h-full flex flex-col rounded-2xl overflow-hidden bg-card shadow-subtle hover:shadow-medium transition-editorial",
          featured ? "md:flex-row" : ""
        )}
      >
        <div
          className={cn(
            "relative overflow-hidden bg-muted",
            featured ? "md:w-1/2 h-[320px] md:h-auto" : "h-[240px]"
          )}
        >
          <img
            src={image}
            alt={`Capa do artigo: ${title}`}
            loading="lazy"
            className="w-full h-full object-cover transition-editorial group-hover:scale-105"
          />
          <div className="absolute top-4 right-4">
            <span className="inline-block px-3 py-1 text-[11px] font-semibold uppercase tracking-wider rounded-md bg-coral text-coral-foreground shadow-subtle">
              {category}
            </span>
          </div>
        </div>

        <div
          className={cn(
            "flex-1 flex flex-col justify-between p-6 md:p-7",
            featured ? "md:w-1/2 md:p-10" : ""
          )}
        >
          <div className="space-y-3">
            <h2
              className={cn(
                "font-display font-bold leading-snug text-ink text-balance group-hover:text-primary transition-editorial",
                featured ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
              )}
            >
              {title}
            </h2>

            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
              {excerpt}
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs text-muted-foreground mt-6 pt-4 border-t border-border">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-coral" />
              <time dateTime={date}>{date}</time>
            </span>
            <span className="flex items-center gap-1.5">
              <MessageSquare className="h-3.5 w-3.5 text-coral" />
              No Comments
            </span>
          </div>
        </div>
      </article>
    </a>
  );
};

export default ArticleCard;

