import { Helmet } from "react-helmet-async";
import meditationImage from "@/assets/meditation.webp";

const About = () => {
  return (
    <main className="pt-32">
      <Helmet>
        <title>Sobre | A Arte do Yoga</title>
        <meta name="description" content="Conheça A Arte do Yoga: um espaço dedicado à exploração profunda do yoga como filosofia de vida, prática e caminho para o bem-estar integral." />
        <link rel="canonical" href="https://theartofyoga.org/sobre" />
        <meta property="og:title" content="Sobre | A Arte do Yoga" />
        <meta property="og:url" content="https://theartofyoga.org/sobre" />
      </Helmet>
      {/* Hero */}
      <section className="section-spacing">
        <div className="container-editorial text-center space-y-6">
          <h1 className="font-display text-5xl md:text-7xl font-light">
            Sobre A Arte do Yoga
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Um espaço dedicado à exploração profunda do yoga como filosofia de vida, prática transformadora e caminho para o bem-estar integral.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-spacing bg-muted/30">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg leading-relaxed">
              <h2 className="font-display text-3xl md:text-4xl font-light">
                Nossa Visão
              </h2>
              <p>
                A Arte do Yoga nasceu da intenção de criar um refúgio digital onde a sabedoria milenar do yoga encontra a vida contemporânea. Acreditamos que o yoga é muito mais que posturas físicas — é uma filosofia completa de vida, um caminho para o autoconhecimento e uma ferramenta poderosa de transformação.
              </p>
              <p>
                Aqui, você encontrará conteúdo editorial cuidadosamente curado, que respeita a profundidade da tradição enquanto reconhece os desafios e necessidades do mundo moderno. Cada artigo é uma porta de entrada para uma prática mais consciente, intencional e transformadora.
              </p>
            </div>
            
            <div className="relative h-[500px]">
              <img
                src={meditationImage}
                alt="Prática de yoga"
                className="w-full h-full object-cover shadow-medium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-spacing">
        <div className="container-editorial">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-light mb-4">
              Nossos Valores
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Os princípios que guiam nossa criação de conteúdo e nossa comunidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4 text-center">
              <h3 className="font-display text-2xl font-light">Autenticidade</h3>
              <p className="text-muted-foreground leading-relaxed">
                Comprometimento com a verdadeira essência do yoga, respeitando suas raízes e tradições milenares.
              </p>
            </div>
            
            <div className="space-y-4 text-center">
              <h3 className="font-display text-2xl font-light">Clareza</h3>
              <p className="text-muted-foreground leading-relaxed">
                Conteúdo informativo e acessível, sem sensacionalismo, focado em educação e empoderamento.
              </p>
            </div>
            
            <div className="space-y-4 text-center">
              <h3 className="font-display text-2xl font-light">Transformação</h3>
              <p className="text-muted-foreground leading-relaxed">
                Inspirar mudanças reais através de práticas que integram corpo, mente e espírito.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="section-spacing bg-card">
        <div className="container-editorial max-w-3xl text-center space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Todo o conteúdo publicado em A Arte do Yoga é informativo e educacional. Não fazemos alegações médicas nem substituímos orientação profissional de saúde. Sempre consulte profissionais qualificados para questões relacionadas à sua saúde física ou mental.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
