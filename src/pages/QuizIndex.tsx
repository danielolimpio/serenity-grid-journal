import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { quizzes } from "@/data/quizData";

const QuizIndex = () => {
  return (
    <main className="pt-32 pb-20">
      <Helmet>
        <title>Quizz de Yoga: descubra seu caminho | A Arte do Yoga</title>
        <meta
          name="description"
          content="Faça nosso quizz de yoga com 10 perguntas e receba orientações personalizadas de estilo de prática, filosofia e bem-estar."
        />
        <link rel="canonical" href="https://theartofyoga.org/quizz" />
      </Helmet>
      <div className="container max-w-3xl px-6 text-center space-y-6">
        <p className="text-xs font-bold tracking-[0.3em] text-coral uppercase">Quizz</p>
        <h1 className="font-display font-extrabold text-4xl md:text-6xl text-ink">
          Descubra o Seu Caminho no Yoga
        </h1>
        <p className="text-lg text-muted-foreground">
          Um quizz gratuito com 10 perguntas para orientar a sua prática, alimentação, meditação e estudo da filosofia.
        </p>
        <div className="space-y-4 pt-8 text-left">
          {quizzes.map((quiz) => (
            <div key={quiz.slug} className="bg-card border border-border rounded-2xl p-6 shadow-subtle">
              <h2 className="font-display font-bold text-2xl text-ink mb-2">{quiz.title}</h2>
              <p className="text-sm text-muted-foreground mb-4">{quiz.intro}</p>
              <Link
                to={`/quizz/${quiz.slug}/${quiz.questions[0].slug}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition"
              >
                Começar Quizz
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default QuizIndex;