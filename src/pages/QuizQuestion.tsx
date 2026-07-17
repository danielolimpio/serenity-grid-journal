import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getQuestion } from "@/data/quizData";

const QuizQuestion = () => {
  const { quizSlug = "", questionSlug = "" } = useParams();
  const navigate = useNavigate();
  const data = getQuestion(quizSlug, questionSlug);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    setSelected(null);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [quizSlug, questionSlug]);

  if (!data) {
    return (
      <main className="pt-32 pb-20 container max-w-3xl px-6 text-center">
        <h1 className="font-display text-3xl">Pergunta não encontrada</h1>
        <Link to="/quizz" className="text-coral underline mt-4 inline-block">Voltar ao quizz</Link>
      </main>
    );
  }

  const { quiz, question } = data;
  const total = quiz.questions.length;
  const progress = (question.order / total) * 100;
  const currentIndex = quiz.questions.findIndex((q) => q.slug === question.slug);
  const next = quiz.questions[currentIndex + 1];
  const prev = quiz.questions[currentIndex - 1];
  const canonical = `https://theartofyoga.org/quizz/${quiz.slug}/${question.slug}`;

  const handleNext = () => {
    if (next) navigate(`/quizz/${quiz.slug}/${next.slug}`);
    else navigate("/quizz");
  };

  return (
    <main className="pt-32 pb-20">
      <Helmet>
        <title>{question.metaTitle}</title>
        <meta name="description" content={question.metaDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={question.metaTitle} />
        <meta property="og:description" content={question.metaDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: question.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          })}
        </script>
      </Helmet>

      <article className="container max-w-3xl px-6 space-y-8">
        <p className="text-xs font-bold tracking-[0.3em] text-coral uppercase">
          {quiz.title} · Pergunta {question.order} de {total}
        </p>
        <h1 className="font-display font-extrabold text-3xl md:text-5xl text-ink leading-tight">
          {question.question}
        </h1>
        <p className="text-muted-foreground text-lg">{question.metaDescription}</p>

        {/* Progress bar */}
        <div>
          <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-coral to-primary transition-all"
              style={{ width: `${progress}%` }}
              role="progressbar"
              aria-valuenow={question.order}
              aria-valuemin={1}
              aria-valuemax={total}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-right">{Math.round(progress)}% concluído</p>
        </div>

        {/* Answers */}
        <fieldset className="space-y-3">
          <legend className="sr-only">Escolha uma resposta</legend>
          {question.answers.map((ans, i) => (
            <label
              key={i}
              className={`flex items-center gap-3 border rounded-xl px-5 py-4 cursor-pointer transition ${
                selected === i
                  ? "border-coral bg-coral/5 shadow-subtle"
                  : "border-border hover:border-coral/60 bg-card"
              }`}
            >
              <input
                type="radio"
                name={question.slug}
                value={i}
                checked={selected === i}
                onChange={() => setSelected(i)}
                className="w-4 h-4 accent-coral"
              />
              <span className="text-base text-ink">{ans}</span>
            </label>
          ))}
        </fieldset>

        <div className="flex items-center justify-between gap-4 pt-4">
          {prev ? (
            <Link
              to={`/quizz/${quiz.slug}/${prev.slug}`}
              className="px-5 py-3 rounded-full border border-border text-ink hover:bg-muted transition text-sm font-semibold"
            >
              ← Anterior
            </Link>
          ) : (
            <span />
          )}
          <button
            onClick={handleNext}
            disabled={selected === null}
            className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {next ? "Próxima →" : "Finalizar"}
          </button>
        </div>

        {/* Long description */}
        <section className="pt-10 border-t border-border/60 space-y-4">
          <h2 className="font-display font-bold text-2xl text-ink">Sobre esta pergunta</h2>
          {question.description.split(/\n\s*\n/).map((para, i) => (
            <p key={i} className="text-base leading-relaxed text-ink/80">
              {para.trim()}
            </p>
          ))}
        </section>

        {/* FAQ */}
        <section className="pt-10 border-t border-border/60 space-y-6">
          <h2 className="font-display font-bold text-2xl text-ink">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {question.faq.map((f, i) => (
              <details
                key={i}
                className="group bg-card border border-border rounded-xl p-5"
              >
                <summary className="cursor-pointer font-semibold text-ink flex justify-between items-center">
                  {f.q}
                  <span className="text-coral group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
};

export default QuizQuestion;