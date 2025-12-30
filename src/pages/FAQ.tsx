import { 
  HelpCircle,
  ChevronDown,
  BookOpen,
  Heart,
  Users,
  Shield,
  Clock,
  Mail,
  Package,
  HomeIcon,
  Wind
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqCategories = [
    {
      icon: BookOpen,
      title: "Sobre o Yoga",
      questions: [
        {
          question: "O que é yoga e qual sua origem?",
          answer: "Yoga é uma prática milenar originária da Índia que integra corpo, mente e espírito. A palavra 'yoga' vem do sânscrito e significa 'união'. Suas origens remontam a mais de 5.000 anos, com os primeiros registros encontrados nos Vedas, textos sagrados hindus. O yoga evoluiu ao longo dos milênios, incorporando diferentes escolas e estilos, mas sempre mantendo seu objetivo central de promover equilíbrio e autoconhecimento."
        },
        {
          question: "Preciso ser flexível para praticar yoga?",
          answer: "Absolutamente não! A flexibilidade é uma consequência da prática, não um pré-requisito. O yoga é para todos, independentemente do nível de flexibilidade, idade ou condição física. As posturas podem ser adaptadas às necessidades individuais, e o mais importante é respeitar os limites do seu corpo. Com a prática regular, você naturalmente desenvolverá mais flexibilidade, força e equilíbrio."
        },
        {
          question: "Qual a diferença entre os tipos de yoga?",
          answer: "Existem diversos estilos de yoga, cada um com características próprias: Hatha Yoga é mais suave e focado em posturas básicas; Vinyasa Flow conecta movimentos à respiração em sequências dinâmicas; Ashtanga é mais intenso e segue uma série fixa de posturas; Iyengar enfatiza o alinhamento preciso; Kundalini trabalha energia e espiritualidade; Yin Yoga mantém posturas por longos períodos para trabalhar tecidos profundos. Recomendamos experimentar diferentes estilos para descobrir qual ressoa melhor com você."
        },
        {
          question: "Com que frequência devo praticar yoga?",
          answer: "A frequência ideal varia conforme seus objetivos e disponibilidade. Para iniciantes, 2-3 vezes por semana já traz benefícios significativos. Praticantes intermediários podem aumentar para 4-5 vezes. Mesmo sessões curtas de 15-20 minutos diárias podem ser mais benéficas que práticas longas esporádicas. O mais importante é a consistência e ouvir seu corpo, respeitando os dias de descanso."
        },
        {
          question: "Yoga é uma religião?",
          answer: "Yoga não é uma religião, embora tenha raízes na filosofia e espiritualidade indiana. É uma prática que pode ser integrada a qualquer crença ou mesmo praticada de forma completamente secular. Muitas pessoas praticam yoga apenas pelos benefícios físicos e mentais, enquanto outras aprofundam-se nos aspectos filosóficos e espirituais. A escolha é pessoal e respeitamos todas as abordagens."
        }
      ]
    },
    {
      icon: Heart,
      title: "Benefícios e Saúde",
      questions: [
        {
          question: "Quais são os principais benefícios do yoga?",
          answer: "O yoga oferece benefícios holísticos: fisicamente, melhora flexibilidade, força, postura e equilíbrio; mentalmente, reduz estresse, ansiedade e melhora concentração; emocionalmente, promove autoconhecimento e equilíbrio emocional. Estudos científicos comprovam benefícios como redução da pressão arterial, melhora do sono, fortalecimento do sistema imunológico e alívio de dores crônicas."
        },
        {
          question: "Yoga pode ajudar com ansiedade e estresse?",
          answer: "Sim, o yoga é altamente eficaz no combate à ansiedade e estresse. As técnicas de respiração (pranayama) ativam o sistema nervoso parassimpático, promovendo relaxamento. A meditação e mindfulness treinam a mente a focar no presente, reduzindo pensamentos ansiosos. Posturas específicas liberam tensões acumuladas no corpo. Estudos mostram que a prática regular pode reduzir significativamente os níveis de cortisol, o hormônio do estresse."
        },
        {
          question: "Posso praticar yoga durante a gravidez?",
          answer: "Sim, o yoga pré-natal é seguro e benéfico quando praticado corretamente. Ele ajuda a aliviar desconfortos comuns da gravidez, fortalece músculos importantes para o parto, melhora a circulação e promove relaxamento. Porém, é essencial buscar aulas específicas para gestantes ou informar o instrutor sobre a gravidez. Algumas posturas devem ser evitadas ou modificadas, especialmente deitadas de costas após o primeiro trimestre."
        },
        {
          question: "Yoga ajuda a emagrecer?",
          answer: "O yoga pode contribuir para a perda de peso de várias formas: estilos mais dinâmicos como Vinyasa e Ashtanga queimam calorias significativas; a prática desenvolve consciência corporal que influencia escolhas alimentares; reduz o estresse, que está ligado ao ganho de peso; e melhora o metabolismo. Embora não seja tão intenso quanto exercícios aeróbicos, o yoga oferece benefícios complementares que apoiam um estilo de vida saudável."
        }
      ]
    },
    {
      icon: Users,
      title: "Sobre o Site",
      questions: [
        {
          question: "O que é The Art of Yoga?",
          answer: "The Art of Yoga é um portal dedicado a compartilhar conhecimento autêntico sobre yoga, meditação e bem-estar. Nossa missão é tornar essas práticas acessíveis a todos, oferecendo conteúdo de qualidade que honra a tradição milenar enquanto se adapta às necessidades contemporâneas. Aqui você encontra artigos, guias práticos, reflexões filosóficas e recursos para aprofundar sua jornada."
        },
        {
          question: "O conteúdo do site é gratuito?",
          answer: "Sim, todo o conteúdo do The Art of Yoga é gratuito e acessível a todos. Acreditamos que o conhecimento sobre yoga e bem-estar deve ser democratizado. Nosso objetivo é criar uma comunidade de praticantes e curiosos que possam crescer juntos em sua jornada de autoconhecimento."
        },
        {
          question: "Posso contribuir com artigos ou sugestões?",
          answer: "Adoramos receber contribuições da nossa comunidade! Se você tem experiência em yoga, meditação ou áreas relacionadas e gostaria de compartilhar seu conhecimento, entre em contato conosco através da página de Contato. Também recebemos sugestões de temas que você gostaria de ver abordados no site."
        },
        {
          question: "Como posso entrar em contato com vocês?",
          answer: "Você pode nos contatar de várias formas: através do formulário em nossa página de Contato, por e-mail em contato@theartofyoga.org, ou para questões de privacidade em privacidade@theartofyoga.org. Respondemos normalmente em 24-48 horas úteis. Estamos sempre abertos a dúvidas, sugestões e colaborações."
        }
      ]
    },
    {
      icon: Shield,
      title: "Privacidade e Termos",
      questions: [
        {
          question: "Como meus dados são protegidos?",
          answer: "Levamos sua privacidade muito a sério. Utilizamos criptografia SSL para proteger dados em trânsito, não vendemos informações pessoais a terceiros, e coletamos apenas dados necessários para melhorar sua experiência. Para detalhes completos, consulte nossa Política de Privacidade."
        },
        {
          question: "O site usa cookies?",
          answer: "Sim, utilizamos cookies para melhorar sua experiência de navegação, lembrar preferências e analisar o tráfego do site. Você pode gerenciar suas preferências de cookies a qualquer momento. Para mais informações, consulte nossa Política de Cookies."
        },
        {
          question: "Posso usar o conteúdo do site em outros lugares?",
          answer: "Nosso conteúdo é protegido por direitos autorais. Para uso pessoal e não comercial, você pode compartilhar links para nossos artigos. Para reprodução de conteúdo, citações extensas ou uso comercial, é necessário solicitar autorização prévia através de nosso e-mail de contato."
        }
      ]
    },
    {
      icon: Package,
      title: "Equipamentos e Acessórios",
      questions: [
        {
          question: "Qual tapete de yoga devo escolher?",
          answer: "O tapete ideal depende do seu estilo de prática. Para iniciantes, um tapete de 4-6mm de espessura com boa aderência é suficiente. Praticantes de estilos dinâmicos como Vinyasa devem priorizar tapetes antiderrapantes. Para Yin Yoga ou práticas restaurativas, tapetes mais grossos (6-8mm) oferecem mais conforto. Materiais como borracha natural, TPE ou PVC reciclado são boas opções. Evite tapetes muito finos se tiver sensibilidade nos joelhos."
        },
        {
          question: "Que roupa devo usar para praticar yoga?",
          answer: "Use roupas confortáveis que permitam liberdade de movimento e respirabilidade. Tecidos que absorvem suor são ideais para práticas intensas. Evite roupas muito largas que podem atrapalhar em inversões ou posturas de equilíbrio. Para mulheres, tops com bom suporte são recomendados. Cores escuras ou estampadas disfarçam o suor. O mais importante é sentir-se confortável e livre para se movimentar."
        },
        {
          question: "Preciso de blocos e cintos de yoga?",
          answer: "Blocos e cintos são acessórios muito úteis, especialmente para iniciantes. Os blocos ajudam a alcançar o chão em posturas onde a flexibilidade ainda não permite, mantendo o alinhamento correto. Cintos auxiliam em alongamentos e posturas que exigem segurar os pés. Mesmo praticantes avançados usam esses props para aprofundar posturas. Recomendamos ter pelo menos 2 blocos de cortiça ou espuma de alta densidade."
        },
        {
          question: "Vale a pena investir em um bolster?",
          answer: "Bolsters são cilindros ou almofadas alongadas essenciais para práticas restaurativas, Yin Yoga e yoga pré-natal. Eles oferecem suporte confortável em posturas relaxantes, permitindo que você permaneça mais tempo em cada posição. Se você pratica regularmente esses estilos ou busca relaxamento profundo, vale muito o investimento. Alternativamente, almofadas firmes ou cobertores dobrados podem substituir temporariamente."
        },
        {
          question: "Quais outros acessórios são úteis?",
          answer: "Além dos básicos, outros acessórios úteis incluem: cobertores de yoga para apoio e aquecimento; almofadas de meditação (zafu) para práticas sentadas; rodas de yoga para trabalhar flexibilidade da coluna; luvas e meias antiderrapantes para quem prefere não praticar descalço; spray limpador para higienizar o tapete; e bolsas para transportar seus equipamentos. Comece com o essencial e adicione conforme sua prática evolui."
        }
      ]
    },
    {
      icon: HomeIcon,
      title: "Prática em Casa",
      questions: [
        {
          question: "Como criar um espaço de prática em casa?",
          answer: "Escolha um local tranquilo, limpo e com boa ventilação. O espaço deve ter área suficiente para estender seu tapete e movimentar os braços livremente (cerca de 2m x 2m). Minimize distrações removendo eletrônicos ou virando-os de costas. Iluminação natural é ideal, mas velas ou luzes suaves também funcionam. Mantenha seus acessórios organizados e acessíveis. Um canto dedicado, mesmo que pequeno, ajuda a criar o hábito."
        },
        {
          question: "Qual o melhor horário para praticar yoga?",
          answer: "O melhor horário é aquele que você consegue manter consistentemente. Tradicionalmente, a prática matinal (antes do café) é considerada ideal pois a mente está mais calma e o corpo se beneficia do alongamento após o sono. Práticas noturnas ajudam a relaxar e melhorar o sono. Evite praticar logo após refeições pesadas. Experimente diferentes horários e observe quando você se sente mais presente e energizado."
        },
        {
          question: "Como manter a motivação praticando sozinho?",
          answer: "Estabeleça uma rotina fixa, mesmo que curta. Comece com sessões de 15-20 minutos para criar o hábito. Use aplicativos ou vídeos para guiar suas práticas. Defina metas realistas e celebre pequenas conquistas. Mantenha um diário de prática anotando como se sente antes e depois. Varie os estilos para evitar monotonia. Conecte-se com comunidades online de praticantes. Lembre-se: qualquer prática é melhor que nenhuma."
        },
        {
          question: "Posso aprender yoga apenas por vídeos online?",
          answer: "É possível começar com vídeos online, mas tem limitações. Vídeos não corrigem seu alinhamento, o que pode levar a lesões. Recomendamos combinar prática em casa com aulas presenciais ocasionais, onde um professor pode oferecer ajustes personalizados. Escolha canais de instrutores certificados e comece com vídeos para iniciantes. Preste atenção às instruções de segurança e nunca force posturas que causem dor."
        }
      ]
    },
    {
      icon: Wind,
      title: "Meditação e Respiração",
      questions: [
        {
          question: "Como começar a meditar?",
          answer: "Comece com sessões curtas de 5-10 minutos. Sente-se confortavelmente com a coluna ereta, feche os olhos e foque na respiração natural. Quando pensamentos surgirem, gentilmente retorne a atenção à respiração sem julgamento. Use aplicativos de meditação guiada para iniciantes. Pratique no mesmo horário diariamente para criar hábito. A consistência é mais importante que a duração. Com o tempo, aumente gradualmente para 15-20 minutos."
        },
        {
          question: "O que é pranayama?",
          answer: "Pranayama são técnicas de controle da respiração do yoga. 'Prana' significa energia vital e 'ayama' significa expansão ou controle. Diferentes técnicas têm efeitos distintos: Ujjayi (respiração oceânica) aquece e acalma; Nadi Shodhana (respiração alternada) equilibra os hemisférios cerebrais; Kapalabhati (respiração do fogo) energiza e purifica; Bhramari (respiração da abelha) acalma profundamente. Pratique com orientação inicial para aprender corretamente."
        },
        {
          question: "Meditação e yoga são a mesma coisa?",
          answer: "São práticas complementares mas distintas. Yoga tradicionalmente inclui 8 ramos, sendo as posturas (asanas) apenas um deles, e meditação (dhyana) outro. As posturas físicas preparam o corpo para sentar em meditação. Muitas aulas de yoga incluem momentos meditativos. Você pode praticar meditação independentemente do yoga físico. Ambas as práticas se potencializam quando combinadas, trabalhando corpo e mente de forma integrada."
        },
        {
          question: "Como lidar com a mente agitada na meditação?",
          answer: "Mente agitada é completamente normal e faz parte do processo. Não tente 'esvaziar' a mente - isso é um mito. O objetivo é observar pensamentos sem se envolver com eles, como nuvens passando no céu. Use âncoras como respiração, sons ou sensações corporais para retornar ao presente. Seja gentil consigo mesmo. A prática regular naturalmente acalma a mente com o tempo. Dias difíceis fazem parte da jornada."
        }
      ]
    }
  ];

  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-muted/50 to-background animate-fade-in">
        <div className="container-editorial text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-2 animate-scale-in" style={{ animationDelay: "0.1s" }}>
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Perguntas Frequentes
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Encontre respostas para as dúvidas mais comuns sobre yoga, nossa plataforma e como podemos ajudar em sua jornada.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="bg-card rounded-lg p-6 md:p-8 shadow-soft border border-border/50 animate-fade-in"
                style={{ animationDelay: `${0.2 + categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-light">{category.title}</h2>
                </div>

                <Accordion type="single" collapsible className="space-y-2">
                  {category.questions.map((item, questionIndex) => (
                    <AccordionItem 
                      key={questionIndex} 
                      value={`${categoryIndex}-${questionIndex}`}
                      className="border border-border/50 rounded-lg px-4 data-[state=open]:bg-muted/30"
                    >
                      <AccordionTrigger className="text-left font-display text-base md:text-lg font-medium hover:no-underline py-4">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div 
            className="mt-12 bg-primary/5 rounded-lg p-8 border border-primary/20 text-center animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-light mb-3">Não encontrou sua resposta?</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Se você tem uma pergunta que não foi respondida aqui, ficaremos felizes em ajudar. 
              Entre em contato conosco e responderemos o mais breve possível.
            </p>
            <Link 
              to="/contato"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-editorial"
            >
              <Mail className="w-4 h-4" />
              Fale Conosco
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQ;
