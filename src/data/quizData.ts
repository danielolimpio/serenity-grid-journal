export interface QuizFaq {
  q: string;
  a: string;
}

export interface QuizQuestion {
  slug: string;
  order: number;
  question: string;
  metaTitle: string;
  metaDescription: string;
  answers: string[];
  description: string;
  faq: QuizFaq[];
}

export interface Quiz {
  slug: string;
  title: string;
  intro: string;
  questions: QuizQuestion[];
}

const p = (text: string) => text.trim();

export const quizzes: Quiz[] = [
  {
    slug: "descubra-seu-caminho-no-yoga",
    title: "Descubra Seu Caminho no Yoga",
    intro:
      "Responda 10 perguntas e receba orientações personalizadas sobre o estilo de yoga, a filosofia e as práticas de bem-estar que mais combinam com o seu momento de vida.",
    questions: [
      {
        order: 1,
        slug: "qual-seu-principal-objetivo-com-o-yoga",
        question: "Qual é o seu principal objetivo com o yoga?",
        metaTitle: "Qual é o seu principal objetivo com o yoga? | Quizz A Arte do Yoga",
        metaDescription:
          "Descubra o que o yoga pode oferecer a você: alívio do estresse, mais flexibilidade, força, espiritualidade ou autoconhecimento profundo.",
        answers: [
          "Reduzir o estresse e a ansiedade",
          "Ganhar flexibilidade e mobilidade",
          "Fortalecer corpo e postura",
          "Aprofundar espiritualidade e meditação",
          "Autoconhecimento e equilíbrio emocional",
        ],
        description: p(`
O primeiro passo para uma prática de yoga transformadora é entender por que você está começando (ou recomeçando) essa jornada. O yoga é uma tradição milenar que abraça o ser humano em sua totalidade — corpo, mente, respiração e consciência — e por isso pode ser vivido de formas muito diferentes conforme sua intenção. Para quem busca reduzir o estresse e a ansiedade, técnicas de respiração (pranayama), Yin Yoga e Yoga Restaurativo são especialmente eficazes, pois ativam o sistema nervoso parassimpático e ajudam o corpo a soltar tensões acumuladas.

Se o seu foco é ganhar flexibilidade e mobilidade, sequências suaves de Hatha e Vinyasa realizadas com regularidade produzem resultados consistentes ao longo das semanas. Já quem procura fortalecer o corpo e melhorar a postura pode se beneficiar de Ashtanga, Power Yoga e sequências centradas no core, que constroem estabilidade e integridade estrutural. Para quem sente um chamado espiritual, o yoga oferece toda a riqueza dos Yoga Sutras de Patanjali, dos mantras, da meditação e do estudo dos oito membros (Ashtanga Yoga clássico).

Por fim, se o objetivo é autoconhecimento e equilíbrio emocional, a combinação de prática física consciente, journaling e meditação diária cria uma escuta interna que revela padrões antigos e abre espaço para novas escolhas. Não existe resposta errada — todas as portas de entrada levam ao mesmo lugar quando percorridas com regularidade e presença. Identificar sua motivação principal ajuda a montar uma rotina realista, sustentável e alinhada com o que seu corpo e sua alma pedem neste momento da vida.
        `),
        faq: [
          { q: "Preciso ter um único objetivo no yoga?", a: "Não. Objetivos podem coexistir e mudar com o tempo. O importante é ter clareza do que é prioridade agora." },
          { q: "Yoga é eficaz para ansiedade?", a: "Sim. Estudos mostram que práticas regulares reduzem cortisol e melhoram a regulação emocional." },
          { q: "Quanto tempo até sentir resultados?", a: "Benefícios sutis aparecem em dias; mudanças estruturais em 8 a 12 semanas de prática consistente." },
          { q: "Posso mudar meu objetivo ao longo da jornada?", a: "Sim, e é natural. A prática amadurece junto com o praticante." },
          { q: "Yoga substitui atividade física?", a: "Estilos vigorosos como Ashtanga sim; estilos suaves complementam, mas não substituem exercícios cardiorrespiratórios." },
        ],
      },
      {
        order: 2,
        slug: "qual-seu-nivel-de-experiencia-em-yoga",
        question: "Qual é o seu nível de experiência em yoga?",
        metaTitle: "Qual é o seu nível de experiência em yoga? | Quizz A Arte do Yoga",
        metaDescription:
          "Iniciante, intermediário ou avançado? Descubra o estilo de aula e a intensidade ideal para o seu momento na prática de yoga.",
        answers: [
          "Nunca pratiquei",
          "Fiz algumas aulas experimentais",
          "Pratico ocasionalmente há meses",
          "Pratico semanalmente há mais de um ano",
          "Sou praticante avançado ou professor",
        ],
        description: p(`
Reconhecer honestamente o seu nível é essencial para evitar frustração, lesões e o abandono da prática. Iniciantes absolutos beneficiam-se de aulas de Hatha suave, com foco em alinhamento, respiração e vocabulário básico dos asanas. Nesse estágio, a prioridade é criar familiaridade com o próprio corpo, aprender a respirar pelo nariz de forma profunda e desenvolver paciência com processos que não são lineares.

Quem já experimentou algumas aulas geralmente está no momento perfeito para estabelecer uma rotina fixa — mesmo que curta, de 15 a 20 minutos diários. A consistência supera a intensidade em qualquer nível. Praticantes ocasionais que já entendem posturas fundamentais podem se aventurar em Vinyasa Flow, começar pranayama estruturado e experimentar meditações mais longas.

Praticantes semanais consolidados costumam pedir ao corpo mais desafios: inversões, torções profundas, sequências criativas e imersões em filosofia. É também o momento em que muitos descobrem estilos complementares como Yin, Restaurativa ou práticas terapêuticas. Já praticantes avançados e professores encontram no estudo dos textos clássicos, no aprofundamento em pranayama, mudras, bandhas e meditação silenciosa uma continuação natural da caminhada.

Independente do nível, o yoga ensina que não existe destino final — cada dia é um novo tapete estendido. Escutar o corpo, respeitar limites e adaptar a prática ao momento é o que diferencia uma jornada saudável de uma corrida por performance. Comece de onde você está, não de onde acha que deveria estar.
        `),
        faq: [
          { q: "Iniciantes podem praticar em casa sozinhos?", a: "Sim, com vídeos confiáveis e atenção ao alinhamento. Aulas presenciais ajudam a corrigir hábitos." },
          { q: "Preciso ser flexível para começar?", a: "Não. Flexibilidade é resultado da prática, não pré-requisito." },
          { q: "Quantos dias por semana devo praticar?", a: "Duas a três vezes já traz benefícios; cinco a sete acelera evolução." },
          { q: "Qual estilo é mais indicado para iniciantes?", a: "Hatha, Yoga Integral e Yoga Restaurativa oferecem base segura." },
          { q: "Como saber se estou evoluindo?", a: "Observe respiração, foco e como reage a estresse — sinais chegam antes das posturas avançadas." },
        ],
      },
      {
        order: 3,
        slug: "quanto-tempo-voce-tem-para-praticar-por-dia",
        question: "Quanto tempo você tem para praticar por dia?",
        metaTitle: "Quanto tempo dedicar ao yoga por dia? | Quizz A Arte do Yoga",
        metaDescription:
          "Descubra como criar uma rotina de yoga realista para o seu tempo disponível, de 10 minutos a mais de uma hora diária.",
        answers: [
          "Menos de 15 minutos",
          "Entre 15 e 30 minutos",
          "Entre 30 e 45 minutos",
          "Entre 45 e 60 minutos",
          "Mais de uma hora",
        ],
        description: p(`
A pergunta sobre o tempo disponível é uma das mais estratégicas do quiz porque revela o que é realmente sustentável para você. Muita gente desiste do yoga por planejar sessões idealizadas de 90 minutos que nunca acontecem. A verdade é que 10 minutos praticados todo dia geram mais transformação do que uma aula de 90 minutos por semana feita quando “sobra tempo”.

Para quem tem menos de 15 minutos, uma rotina micro é perfeitamente possível: alguns ciclos de respiração alternada (nadi shodhana), três a cinco asanas conectados por respiração e uma meditação curta. Entre 15 e 30 minutos, cabe uma sequência completa de saudação ao sol, alongamentos-chave e um savasana breve — combinação ideal para começar bem o dia.

Na faixa de 30 a 45 minutos, é possível trabalhar um foco específico por sessão: mobilidade de quadril, força de core, aberturas de peito, torções ou inversões. Sessões de 45 a 60 minutos permitem estrutura completa de aula: aquecimento, sequência principal, resfriamento e meditação. Já quem consegue mais de uma hora pode integrar pranayama extenso, mantras, filosofia e savasana longo, aproveitando o formato tradicional dos ashrams.

A dica de ouro: comece pelo menor tempo possível, prove que sua rotina se sustenta por 30 dias e só depois amplie. Consistência gera identidade — quem pratica todo dia, mesmo que pouco, se torna “um praticante de yoga” e essa identidade transforma escolhas de vida muito além do tapete.
        `),
        faq: [
          { q: "Práticas curtas realmente funcionam?", a: "Sim. Neurociência e estudos comportamentais mostram que consistência supera duração." },
          { q: "Melhor prática longa 3x/semana ou curta diária?", a: "Diária vence quase sempre, principalmente para iniciantes." },
          { q: "Posso dividir a prática em blocos ao longo do dia?", a: "Sim. Micro-práticas de respiração e alongamento são eficazes." },
          { q: "Preciso praticar sempre no mesmo horário?", a: "Ajuda a criar hábito, mas não é obrigatório. O importante é fazer." },
          { q: "Devo pular a prática se estiver cansado?", a: "Não. Faça uma versão restaurativa: 10 minutos de respiração e alongamento suave." },
        ],
      },
      {
        order: 4,
        slug: "como-esta-seu-nivel-de-estresse-atualmente",
        question: "Como está o seu nível de estresse atualmente?",
        metaTitle: "Yoga para estresse: qual seu nível? | Quizz A Arte do Yoga",
        metaDescription:
          "Avalie seu nível de estresse e descubra as práticas de yoga, respiração e meditação mais indicadas para restaurar seu equilíbrio.",
        answers: [
          "Muito baixo, sinto-me equilibrado",
          "Ocasional, momentos pontuais",
          "Moderado, sinto quase toda semana",
          "Alto, afeta meu sono e humor",
          "Muito alto, quase esgotamento",
        ],
        description: p(`
O estresse crônico é uma das principais razões pelas quais pessoas modernas procuram o yoga. Ele afeta sono, digestão, humor, memória e a capacidade de estar presente com quem amamos. Reconhecer honestamente o próprio nível de estresse permite escolher práticas realmente terapêuticas em vez de sobrecarregar ainda mais um sistema nervoso já pressionado.

Quem se sente equilibrado pode usar o yoga como manutenção preventiva: sequências dinâmicas, pranayama energizante como kapalabhati e meditações de gratidão. Estresse ocasional responde muito bem a rotinas semanais de Vinyasa moderado, com alongamentos e uma meditação guiada de 10 minutos.

Se o estresse é moderado, o corpo pede uma combinação de esforço e descanso: uma prática de Hatha três vezes por semana, respiração alternada diária e higiene do sono estruturada. Já quem convive com estresse alto, com impacto em sono e humor, precisa priorizar Yin Yoga, Yoga Restaurativo, Yoga Nidra e respirações longas (como 4-7-8 e Bhramari) que ativam o sistema parassimpático.

Em casos de quase esgotamento (burnout), a orientação principal é reduzir estímulos, buscar acompanhamento profissional (médico e psicológico) e adotar práticas ultra-suaves: apenas respiração, posturas restaurativas com apoios e Yoga Nidra diária. O yoga não substitui tratamento médico, mas é um pilar de recuperação comprovado. Cuide do sistema nervoso primeiro; o resto vem depois.
        `),
        faq: [
          { q: "Yoga é eficaz mesmo em estresse severo?", a: "Sim, quando bem escolhido. Práticas restaurativas apoiam recuperação do sistema nervoso." },
          { q: "Qual a melhor respiração para acalmar rápido?", a: "Nadi Shodhana e Bhramari são altamente eficazes em minutos." },
          { q: "Meditação piora ansiedade em alguns casos?", a: "Pode. Comece com meditações guiadas curtas e evite silêncios longos no início." },
          { q: "Yoga Nidra ajuda mesmo?", a: "Sim. Uma sessão equivale, em descanso, a cerca de 2 horas de sono profundo." },
          { q: "Preciso parar exercícios intensos?", a: "Nem sempre; ajuste a dose. Yoga restaurativa complementa treinos fortes." },
        ],
      },
      {
        order: 5,
        slug: "qual-parte-do-corpo-mais-pede-atencao",
        question: "Qual parte do seu corpo mais pede atenção hoje?",
        metaTitle: "Yoga por região do corpo | Quizz A Arte do Yoga",
        metaDescription:
          "Coluna, quadris, ombros, joelhos ou pescoço: descubra sequências de yoga específicas para a região do corpo que mais precisa de cuidado.",
        answers: [
          "Coluna e lombar",
          "Quadris e pelve",
          "Ombros e pescoço",
          "Joelhos e pernas",
          "Sinto o corpo equilibrado",
        ],
        description: p(`
O corpo fala através de tensões, dores e limitações que se acumulam ao longo do dia. O yoga oferece uma linguagem prática para escutar essa fala e responder com movimentos específicos. Identificar a região que mais pede atenção permite montar uma prática que devolve mobilidade e conforto, em vez de repetir sequências genéricas.

Para coluna e lombar, torções suaves, gato-vaca, esfinge, cobra e postura da criança são fundamentais. Muita dor lombar vem de quadris rígidos e core fraco — vale investigar a origem antes de forçar alongamentos. Quadris e pelve respondem bem a lunge baixo, pombo, borboleta, agachamento profundo (malasana) e Yin Yoga, que trabalha o tecido conjuntivo.

Ombros e pescoço, sobrecarregados por horas de tela e celular, precisam de aberturas de peito, cachorro olhando para cima, sequências com garudasana (águia) e alongamentos passivos com apoio. Joelhos e pernas exigem cuidado com alinhamento em posturas em pé (guerreiros, triângulo) e fortalecimento de quadríceps, glúteos e pés — muitas dores de joelho vêm da fraqueza dessas cadeias.

Se o corpo se sente equilibrado, o momento é ideal para práticas integrativas que mantêm todas as regiões ativas e para incluir inversões, backbends mais profundos e meditação em movimento. Escutar o corpo diariamente evita lesões e faz do yoga uma prática que amadurece com você ao longo dos anos, sem forçar padrões estéticos que não pertencem à sua estrutura óssea.
        `),
        faq: [
          { q: "Yoga alivia dor lombar crônica?", a: "Sim, com prática guiada e regular. Casos agudos exigem avaliação médica antes." },
          { q: "Posso fazer yoga com hérnia de disco?", a: "Sim, mas com adaptações e supervisão profissional." },
          { q: "Alongar todo dia é seguro?", a: "Sim, respeitando amplitude e evitando dor aguda." },
          { q: "Preciso alongar antes ou depois de treinar?", a: "Alongamentos dinâmicos antes; longos e passivos, depois." },
          { q: "Yoga fortalece ou só flexibiliza?", a: "Ambos. Estilos como Ashtanga e Power Yoga desenvolvem força considerável." },
        ],
      },
      {
        order: 6,
        slug: "voce-tem-interesse-em-meditacao",
        question: "Você tem interesse em incluir meditação na sua rotina?",
        metaTitle: "Meditação diária: por onde começar? | Quizz A Arte do Yoga",
        metaDescription:
          "Descubra qual estilo de meditação combina com você: mindfulness, mantra, Yoga Nidra, meditação guiada ou silenciosa.",
        answers: [
          "Sim, quero começar do zero",
          "Já meditei algumas vezes",
          "Medito ocasionalmente",
          "Já tenho prática regular",
          "Prefiro focar só nos asanas",
        ],
        description: p(`
A meditação é o coração do yoga tradicional. Enquanto os asanas preparam o corpo para permanecer imóvel com conforto, a meditação (dhyana) treina a mente para permanecer estável e clara. Não existe forma única de meditar — existem estilos diferentes para temperamentos diferentes, e escolher o certo aumenta muito a chance de manter a prática.

Para iniciantes absolutos, meditações guiadas em áudio são a porta de entrada ideal, porque oferecem estrutura e reduzem a ansiedade do “estou fazendo certo?”. Mindfulness — observar a respiração e sensações sem julgar — é acessível e cientificamente validado. Meditação com mantra (japa) usa a repetição silenciosa ou audível de um som (como “So Ham” ou “Om”) para dar à mente um ponto de apoio.

Yoga Nidra, a “meditação para dormir sem dormir”, é ótima para quem tem mente muito ativa: você deita, escuta uma voz guiada e mergulha em relaxamento profundo. Para praticantes regulares, meditações mais longas em silêncio, técnicas de Vipassana e visualizações tântricas ampliam a percepção de si.

Se você prefere focar apenas em asanas, tudo bem — o próprio movimento consciente com respiração é uma forma de meditação em movimento. Com o tempo, muitos praticantes descobrem que a meditação surge naturalmente quando o corpo se acalma. O importante é não forçar. Meditar não é esvaziar a mente, é observar o que aparece com gentileza e voltar, sempre que possível, para o ponto de âncora escolhido.
        `),
        faq: [
          { q: "Preciso sentar em lótus para meditar?", a: "Não. Cadeira, banquinho de meditação ou almofada funcionam." },
          { q: "Quanto tempo devo meditar por dia?", a: "Comece com 5 minutos. Muitos benefícios aparecem entre 10 e 20 minutos." },
          { q: "Preciso parar de pensar?", a: "Não. Meditação é observar pensamentos sem se identificar com eles." },
          { q: "Aplicativos ajudam?", a: "Sim, especialmente no início. Insight Timer e outros oferecem meditações guiadas gratuitas." },
          { q: "Existe meditação errada?", a: "Só a que machuca. Se algo desperta desconforto emocional forte, procure orientação." },
        ],
      },
      {
        order: 7,
        slug: "como-esta-sua-alimentacao-atualmente",
        question: "Como está a sua alimentação atualmente?",
        metaTitle: "Alimentação consciente e yoga | Quizz A Arte do Yoga",
        metaDescription:
          "Entenda como sua alimentação impacta a prática de yoga e descubra princípios sáttvicos e ayurvédicos para mais energia e clareza.",
        answers: [
          "Muito processada e irregular",
          "Tento comer bem, mas oscilo",
          "Alimentação equilibrada em geral",
          "Cuido bastante, com escolhas conscientes",
          "Sigo dieta específica (veg, ayurvédica, etc.)",
        ],
        description: p(`
No yoga tradicional, alimentação é parte inseparável da prática. Os textos clássicos descrevem os alimentos em três qualidades: sáttvicos (que trazem clareza e leveza), rajásicos (que estimulam e agitam) e tamásicos (que embotam e pesam). Cultivar uma dieta mais sáttvica — rica em vegetais frescos, frutas, grãos integrais, legumes, sementes e água pura — apoia a meditação, o sono e a estabilidade emocional.

Se sua alimentação está muito processada e irregular, o primeiro passo é criar horários fixos para as refeições e reduzir ultraprocessados sem culpa. Pequenas mudanças acumuladas superam dietas radicais. Quem tenta comer bem mas oscila costuma se beneficiar de meal prep semanal e da regra “80/20”, permitindo prazer sem descontrole.

Uma alimentação equilibrada em geral pode ser refinada com princípios ayurvédicos: comer conforme sua constituição (dosha), respeitar horários (o fogo digestivo é mais forte ao meio-dia), evitar comer entre refeições e mastigar profundamente. Quem já cuida bastante pode explorar jejuns leves ocasionais, chás terapêuticos e temperos digestivos como gengibre, cominho e coentro.

Praticantes que já seguem dietas específicas (vegetariana, vegana, ayurvédica) encontram no yoga um contexto ideal para refinar escolhas com base na experiência corporal, não em ideologia. O princípio da ahimsa (não violência) inspira muitos a repensar consumo, mas a decisão precisa ser consciente e sustentável. O corpo bem alimentado transforma qualquer prática — no tapete e fora dele.
        `),
        faq: [
          { q: "Preciso ser vegetariano para praticar yoga?", a: "Não. Muitos praticantes são; o essencial é ahimsa em suas próprias escolhas." },
          { q: "Posso praticar de estômago cheio?", a: "Não. Idealmente 2 a 3 horas após refeição principal." },
          { q: "Café atrapalha o yoga?", a: "Em excesso sim; moderado costuma ser tolerado bem." },
          { q: "O que é dieta sáttvica?", a: "Alimentos frescos, leves, integrais e minimamente processados que promovem clareza." },
          { q: "Ayurveda combina com yoga?", a: "Sim, são disciplinas irmãs dentro da tradição indiana." },
        ],
      },
      {
        order: 8,
        slug: "como-esta-a-qualidade-do-seu-sono",
        question: "Como está a qualidade do seu sono?",
        metaTitle: "Yoga para dormir melhor | Quizz A Arte do Yoga",
        metaDescription:
          "Sono ruim, agitado ou reparador? Descubra práticas de yoga, respiração e Yoga Nidra para transformar suas noites.",
        answers: [
          "Muito ruim, quase sempre insone",
          "Irregular, acordo várias vezes",
          "Razoável, mas cansada ao acordar",
          "Bom na maioria das noites",
          "Excelente e reparador",
        ],
        description: p(`
O sono é um pilar de saúde tão importante quanto alimentação e movimento. Sem sono de qualidade, o corpo não se regenera, o sistema imunológico enfraquece, hormônios se desregulam e o humor despenca. O yoga oferece ferramentas concretas para melhorar o sono em praticamente qualquer contexto — de insônia crônica a apenas “dormir profundamente sempre que possível”.

Para quem sofre com insônia frequente, o mais eficaz é criar um ritual noturno anti-estímulo: reduzir luz azul 1 hora antes, tomar um chá calmante (camomila, mulungu, lavanda), fazer 10 minutos de posturas restaurativas com apoio (viparita karani, pernas na parede) e escutar Yoga Nidra até adormecer. Bhramari e respiração diafragmática lenta acalmam o sistema nervoso em minutos.

Sono irregular com múltiplos despertares muitas vezes reflete jantar tardio, uso de tela na cama ou preocupações mentais não processadas. Journaling breve antes de dormir descarrega o mental. Quem dorme razoavelmente mas acorda cansado pode investigar apneia, hidratação e horário de sono — dormir das 22h às 6h é fisiologicamente superior a dormir das 1h às 9h.

Se o sono já é bom, práticas suaves à noite ajudam a manter esse padrão e a integrar dias mais estressantes. Excelente sono reparador é um privilégio a proteger. Trate o quarto como santuário: escuro, fresco, silencioso e sem telas. O sono é a meditação mais longa do dia e o corpo agradece cada gesto que a favorece.
        `),
        faq: [
          { q: "Yoga antes de dormir tira o sono?", a: "Estilos vigorosos sim. Práticas restaurativas favorecem o sono." },
          { q: "Yoga Nidra substitui sono?", a: "Não substitui, mas é ferramenta poderosa de descanso complementar." },
          { q: "Qual melhor horário para praticar?", a: "Manhã energiza; noite acalma. Escolha o que sustenta." },
          { q: "Melatonina é indicada?", a: "Consulte médico. Yoga e higiene do sono devem vir primeiro." },
          { q: "Insônia crônica pede terapia?", a: "Sim. TCC-I e acompanhamento profissional são altamente eficazes." },
        ],
      },
      {
        order: 9,
        slug: "voce-tem-interesse-em-estudar-filosofia-do-yoga",
        question: "Você tem interesse em estudar a filosofia do yoga?",
        metaTitle: "Filosofia do yoga: por onde começar | Quizz A Arte do Yoga",
        metaDescription:
          "Yoga Sutras, Bhagavad Gita, oito membros e mais: descubra por onde começar a estudar a filosofia por trás da prática.",
        answers: [
          "Muito, quero aprofundar",
          "Curiosidade moderada",
          "Só o essencial para praticar",
          "Prefiro o lado prático",
          "Não sei se me interessa",
        ],
        description: p(`
A prática física do yoga é apenas a superfície visível de um oceano filosófico com milhares de anos. Os Yoga Sutras de Patanjali, a Bhagavad Gita, os Upanishads e o Hatha Yoga Pradipika oferecem um mapa detalhado da mente, do sofrimento humano e das ferramentas para o autoconhecimento. Estudar essa filosofia enriquece profundamente a prática no tapete e a vida fora dele.

Para quem quer aprofundar muito, uma boa sequência é começar pelos Yoga Sutras (com um comentário claro), passar para a Bhagavad Gita e depois explorar os Upanishads principais. Ler poucos versos por dia, com reflexão, é mais transformador do que devorar volumes. Cursos guiados e leituras em grupo aceleram compreensão.

Curiosidade moderada se satisfaz muito bem com resumos dos oito membros (yamas, niyamas, asana, pranayama, pratyahara, dharana, dhyana, samadhi) e com podcasts introdutórios. Praticantes que querem apenas o essencial para praticar podem se contentar com yamas e niyamas — os princípios éticos que orientam relação consigo e com o mundo, como ahimsa, satya, aparigraha, saucha e santosha.

Quem prefere o lado prático se beneficia mesmo sem estudo formal: a filosofia se revela na esteira, no respirar em uma postura difícil, no responder em vez de reagir. E se você ainda não sabe se se interessa, comece assistindo uma palestra curta sobre a Bhagavad Gita — muitas vidas mudam a partir dessa primeira faísca de interesse.
        `),
        faq: [
          { q: "Preciso estudar filosofia para praticar?", a: "Não, mas ela profunda e enriquece a experiência." },
          { q: "Yoga é religião?", a: "Não. É filosofia prática compatível com diferentes crenças." },
          { q: "Qual livro começar?", a: "Yoga Sutras com comentário acessível ou Bhagavad Gita." },
          { q: "Yamas e niyamas mudam minha vida?", a: "Sim, quando aplicados diariamente com sinceridade." },
          { q: "Filosofia serve para o dia a dia?", a: "Muito. Ela oferece resposta para estresse, decisões e sofrimento cotidiano." },
        ],
      },
      {
        order: 10,
        slug: "onde-voce-prefere-praticar-yoga",
        question: "Onde você prefere praticar yoga?",
        metaTitle: "Onde praticar yoga: em casa, estúdio ou online? | Quizz",
        metaDescription:
          "Casa, estúdio, ar livre, online ou retiro: descubra qual ambiente favorece mais sua prática de yoga e como combinar formatos.",
        answers: [
          "Em casa, sozinho(a)",
          "Em estúdio presencial",
          "Ao ar livre / natureza",
          "Online, em aulas ao vivo",
          "Em retiros e imersões",
        ],
        description: p(`
O ambiente onde você pratica influencia diretamente sua constância, qualidade da atenção e resultados. Não existe formato universalmente melhor — o certo é aquele que se encaixa no seu tempo, personalidade e fase de vida. Reconhecer sua preferência natural ajuda a construir uma prática que dura anos.

Praticar em casa oferece flexibilidade, economia e intimidade. É ideal para introvertidos e para quem tem rotina apertada. Requer disciplina, um tapete confiável e, no início, apoio de vídeos ou apps para manter alinhamento. Reservar um cantinho fixo — mesmo pequeno — cria uma âncora que facilita começar todo dia.

Estúdio presencial oferece correção profissional, energia coletiva e comprometimento com o horário. É insubstituível para iniciantes que precisam sentir o alinhamento no corpo e para quem se motiva com comunidade. Vale procurar um professor com formação sólida, não apenas o mais próximo de casa.

Praticar ao ar livre conecta com elementos, respiração profunda e presença sensorial ampliada. Cuidados com sol, chuva e piso valem a experiência transformadora. Aulas online ao vivo unem o melhor de dois mundos: acompanhamento humano em tempo real, sem deslocamento. Retiros e imersões, por sua vez, são acelerações profundas: dias inteiros de silêncio, filosofia, alimentação sáttvica e prática constante costumam produzir mudanças duradouras.

O ideal, para muitos praticantes maduros, é combinar formatos: base diária em casa, aula semanal em estúdio ou online e uma imersão anual. Assim, a prática nunca estagna e continua respondendo ao momento que você vive.
        `),
        faq: [
          { q: "Casa ou estúdio: qual é melhor para iniciar?", a: "Estúdio, se possível. Alinhamento presencial evita vícios." },
          { q: "Aulas online funcionam bem?", a: "Sim, especialmente ao vivo e com professor atento." },
          { q: "Vale a pena fazer um retiro?", a: "Muito. Acelera experiência e cria vínculos com a prática." },
          { q: "Preciso de equipamento caro?", a: "Não. Tapete decente, bloco e cinto resolvem por anos." },
          { q: "Posso praticar em qualquer horário?", a: "Sim. O melhor horário é o que se sustenta na sua rotina." },
        ],
      },
    ],
  },
];

export const getQuiz = (slug: string) => quizzes.find((q) => q.slug === slug);
export const getQuestion = (quizSlug: string, questionSlug: string) => {
  const quiz = getQuiz(quizSlug);
  if (!quiz) return null;
  const question = quiz.questions.find((q) => q.slug === questionSlug);
  return question ? { quiz, question } : null;
};