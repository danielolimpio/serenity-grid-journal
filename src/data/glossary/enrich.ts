import type { GlossaryTerm, GlossaryCategory } from "./types";
import { CATEGORIES } from "./types";

// Deterministic hash for per-term variation (no randomness, SSG-stable).
const hash = (s: string) => {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h;
};
const pick = <T,>(arr: T[], seed: number, offset = 0) =>
  arr[(seed + offset) % arr.length];
const pickN = <T,>(arr: T[], seed: number, n: number): T[] => {
  const out: T[] = [];
  const used = new Set<number>();
  let i = 0;
  while (out.length < Math.min(n, arr.length) && i < arr.length * 3) {
    const idx = (seed + i * 7 + 1) % arr.length;
    if (!used.has(idx)) {
      used.add(idx);
      out.push(arr[idx]);
    }
    i++;
  }
  return out;
};

const countWords = (s: string) => s.split(/\s+/).filter(Boolean).length;

const catLabel = (c: GlossaryCategory) =>
  CATEGORIES.find((x) => x.slug === c)?.name ?? "Yoga";

// ————— Paragraph / list banks (category-aware). Written to compose unique
// prose per term by combining term name, synonyms, related and category.

const HOW_IT_WORKS: Record<GlossaryCategory, string[]> = {
  pratica: [
    "Na esteira, {term} atua sobre três camadas simultaneamente: o corpo físico (musculatura, articulações e fáscias), o corpo energético (fluxo do prana pelos nadis) e a mente (padrões de atenção e respiração). O praticante entra na experiência com uma intenção clara, alinha os apoios do corpo com o solo, ativa os bandhas conforme necessário e sustenta o foco no ritmo respiratório. A permanência progressiva permite que o sistema nervoso reconheça a postura como segura e libere tensões residuais.",
    "O funcionamento de {term} depende de uma coordenação fina entre respiração, alinhamento e presença. Ao entrar na prática, o praticante organiza a base — pés, mãos ou ísquios, conforme o caso — estabelece o eixo vertical da coluna e recruta o núcleo profundo. A respiração ujjayi conduz o ritmo, expandindo o tronco na inspiração e criando espaço interno na expiração. Cada micro-ajuste ensina o corpo a economizar esforço e ampliar consciência.",
  ],
  filosofia: [
    "Do ponto de vista filosófico, {term} organiza a experiência do praticante em torno de princípios que atravessam as escolas clássicas do yoga. A ideia central é oferecer um mapa conceitual que ajude a interpretar tanto a prática física quanto os estados internos que emergem dela. Textos como os Yoga Sutras de Patanjali, o Hatha Yoga Pradipika e a Bhagavad Gita retomam esse conceito em contextos distintos, revelando camadas complementares de sentido.",
    "{term} funciona como uma chave de leitura da realidade dentro da tradição índica. Não é apenas uma definição teórica: é um convite à investigação direta. O buscador é encorajado a testar o conceito na própria vivência — na meditação, no comportamento ético e no estudo (svadhyaya) — até que a compreensão intelectual se transforme em experiência integrada. É esse movimento que diferencia o yoga de uma filosofia meramente especulativa.",
  ],
  "bem-estar": [
    "No campo do bem-estar, {term} age de forma integrada sobre o sistema nervoso autônomo, a musculatura e o estado emocional. A prática regular estimula o ramo parassimpático, responsável por relaxamento e digestão, e reduz a ativação crônica do simpático, associada ao estresse. Ao combinar movimento consciente, respiração ampliada e atenção plena, cria-se um ambiente fisiológico favorável à regulação hormonal e à recuperação do organismo.",
    "{term} funciona como uma prática de autorregulação. Ao dedicar alguns minutos por dia à experiência proposta, o praticante ensina o corpo a sair de estados de alerta e voltar a um patamar de equilíbrio. Com o tempo, essa habilidade se generaliza: as reações do cotidiano ficam menos reativas, o sono melhora e a percepção corporal ganha nitidez, apoiando escolhas mais saudáveis.",
  ],
  ayurveda: [
    "Do ponto de vista do Ayurveda, {term} é compreendido pela interação dos três doshas (vata, pitta e kapha), dos cinco elementos e dos ciclos naturais do dia e das estações. Cada pessoa possui uma constituição única (prakriti), e o efeito de qualquer prática ou substância varia conforme esse mapa individual. Observar a resposta do corpo é o ponto de partida para ajustes personalizados.",
    "O Ayurveda enxerga {term} como parte de um sistema mais amplo de rotina (dinacharya) e alimentação (ahara) alinhado à natureza. A eficácia depende menos de intensidade e mais de consistência: pequenos gestos diários, feitos nos horários certos, produzem transformação duradoura. A observação atenta dos sinais do corpo — sono, digestão, humor e energia — orienta refinamentos progressivos.",
  ],
  meditacao: [
    "Como prática meditativa, {term} treina a atenção a se estabilizar num objeto específico — a respiração, uma imagem interna, um som ou uma sensação corporal. Ao perceber que a mente se dispersou, o praticante retorna gentilmente ao objeto, sem julgamento. Esse ciclo, repetido milhares de vezes, fortalece o músculo da presença e reduz a identificação automática com pensamentos.",
    "{term} funciona por meio da repetição consciente: postura estável, respiração natural e retorno gentil ao foco escolhido. A meditação não busca esvaziar a mente, mas mudar a relação do praticante com os próprios conteúdos mentais. Com o tempo, emerge uma qualidade de espaço interno que permite responder à vida em vez de reagir a ela.",
  ],
  programas: [
    "Programas como {term} organizam a prática em uma trilha progressiva, com objetivos, marcos e revisões periódicas. A estrutura ajuda o praticante a manter constância, medir avanços e ajustar a rota. Cada etapa combina asana, respiração e reflexão, respeitando o princípio de que o yoga se aprende no corpo e na experiência, não apenas no intelecto.",
    "{term} propõe uma sequência clara de práticas para um objetivo definido. A cada semana, o volume aumenta gradualmente, o repertório se amplia e a atenção se refina. A eficácia depende de três fatores simples: comparecer com regularidade, respeitar o próprio ritmo e registrar as percepções — em um diário curto ou apenas mentalmente — para acompanhar a evolução.",
  ],
};

const WHY_IT_MATTERS: Record<GlossaryCategory, string[]> = {
  pratica: [
    "Compreender {term} em profundidade transforma a qualidade da prática. Em vez de repetir formas por imitação, o praticante começa a habitar cada postura com intenção, sentindo como o alinhamento, a respiração e a atenção se sustentam mutuamente. Esse entendimento reduz o risco de lesões, aumenta a longevidade da prática e amplia os efeitos sobre o corpo e a mente.",
    "{term} é relevante porque conecta o gesto físico a um propósito maior. Estudos contemporâneos sobre yoga mostram efeitos consistentes na mobilidade, no equilíbrio, na percepção corporal e na regulação do humor. Ao integrar {term} em uma rotina sustentável, o praticante colhe benefícios que se estendem para além do tapete — no trabalho, nos relacionamentos e no descanso.",
  ],
  filosofia: [
    "{term} importa porque oferece um vocabulário preciso para experiências internas que, sem ele, permaneceriam vagas. Nomear é o primeiro passo para investigar, e a tradição do yoga desenvolveu uma cartografia refinada do que acontece no praticante ao longo do caminho. Esse mapa evita ilusões e apressa a maturidade contemplativa.",
    "Compreender {term} amplia a autonomia do praticante frente a modismos e simplificações. Em vez de repetir clichês, quem estuda a fonte desenvolve discernimento (viveka) e consegue traduzir o essencial para a linguagem contemporânea, mantendo a raiz. Essa fidelidade à tradição é o que dá profundidade aos frutos da prática.",
  ],
  "bem-estar": [
    "{term} é importante porque endereça diretamente causas comuns de desconforto contemporâneo: sedentarismo, sobrecarga mental, sono ruim e desconexão do corpo. Ao propor uma prática viável, sem promessas milagrosas, cria bases realistas para melhoras sustentáveis de saúde e humor.",
    "Ao integrar {term} à rotina, o praticante recupera uma sensação de agência sobre o próprio bem-estar. Pequenas escolhas diárias — a hora de dormir, a respiração antes de uma reunião, a pausa consciente — se somam ao longo do tempo e produzem um estado de base mais estável.",
  ],
  ayurveda: [
    "{term} é importante porque devolve ao praticante um sentido de responsabilidade lúcida pela própria saúde. O Ayurveda ensina que prevenir é mais eficaz do que tratar, e que a alimentação, a rotina e a prática consciente formam a base do bem-estar duradouro.",
    "Estudar {term} amplia a percepção do próprio corpo como um sistema dinâmico, sensível ao clima, ao alimento e ao estado emocional. Essa leitura fina do organismo permite ajustes precoces que evitam o acúmulo de desequilíbrios.",
  ],
  meditacao: [
    "{term} importa porque a atenção se tornou um dos recursos mais disputados da vida moderna. Recuperar o poder de escolher onde a mente descansa é um ato de saúde mental, criatividade e liberdade. A meditação regular reduz sintomas de ansiedade e melhora a capacidade de foco em qualquer tarefa.",
    "Compreender {term} torna a prática sustentável a longo prazo. Sem essa base, muitos praticantes abandonam a meditação por frustração; com ela, descobrem que a inconstância da mente é normal e que o retorno ao foco é justamente onde o treinamento acontece.",
  ],
  programas: [
    "{term} é importante porque oferece direção. Sem uma estrutura, é fácil se perder em vídeos avulsos e perder a sensação de progresso. Um programa bem desenhado combina desafio e recuperação, ensina o essencial primeiro e abre caminho para práticas mais avançadas de forma segura.",
    "Ao seguir {term}, o praticante economiza tempo, reduz risco de lesão e constrói um repertório coerente. Isso libera energia mental que antes se gastava decidindo o que praticar em cada sessão.",
  ],
};

const PRACTICAL_EXAMPLE: Record<GlossaryCategory, string[]> = {
  pratica: [
    "Reserve dez minutos ao final do dia. Estenda o tapete em um espaço tranquilo, sente-se em posição confortável e faça três respirações profundas para sinalizar ao sistema nervoso que é hora de desacelerar. Em seguida, entre em {term} com atenção ao alinhamento e respiração fluida. Permaneça de cinco a oito ciclos respiratórios, saia devagar e observe as sensações corporais antes de repetir do outro lado, quando aplicável.",
    "Ao acordar, antes de qualquer estímulo digital, dedique cinco minutos a experimentar {term}. Comece com uma respiração calma, aqueça as articulações essenciais e sinta como o corpo responde. Preste atenção ao que muda: o ritmo cardíaco, a temperatura das mãos, a clareza mental. Encerre com uma pausa em pé, olhos fechados, integrando a experiência.",
  ],
  filosofia: [
    "Depois de ler um trecho clássico sobre {term}, feche o livro e permaneça em silêncio por cinco minutos. Sem tentar entender racionalmente cada palavra, observe como o conceito ressoa no corpo e nas emoções. Anote no diário três perguntas honestas que o texto despertou e leve-as para a prática da semana como objetos de contemplação.",
    "Escolha uma situação recente do cotidiano — uma conversa difícil, uma escolha em aberto, um gatilho emocional — e a reinterprete à luz de {term}. Como esse conceito reorganizaria sua leitura do episódio? Que ação surgiria dessa nova perspectiva? Esse exercício de aplicação transforma teoria em vivência.",
  ],
  "bem-estar": [
    "Ao chegar em casa depois do trabalho, antes de abrir qualquer aplicativo, dedique dez minutos a {term}. Coloque uma música tranquila, dilua as luzes e siga uma sequência simples de respiração e movimento suave. Ao final, note como a qualidade do resto da noite muda — o jantar, a conversa em casa, o sono.",
    "Programe um lembrete a cada duas horas de trabalho para uma pausa de três minutos com {term}. Levante-se, alongue-se, respire fundo três vezes e volte à tarefa. Essa rotina simples reduz dores musculoesqueléticas típicas de quem passa horas sentado e melhora o desempenho cognitivo.",
  ],
  ayurveda: [
    "Durante uma semana, incorpore um único gesto ayurvédico ligado a {term} — como um chá específico, uma automassagem com óleo morno ou um horário fixo para dormir. Observe diariamente três marcadores: qualidade do sono, digestão e humor ao acordar. Ao final da semana, avalie se faz sentido manter ou refinar o ritual.",
    "Prepare uma refeição simples alinhada ao princípio de {term}. Sente-se para comer sem telas, mastigue bem cada garfada e agradeça em silêncio antes de começar. Preste atenção às sensações do corpo trinta minutos depois da refeição. Esse experimento revela o quanto o modo de comer influencia mais que o que se come.",
  ],
  meditacao: [
    "Escolha um horário fixo — logo ao acordar funciona bem — e sente-se por oito minutos para praticar {term}. Coluna longa, olhos fechados, mãos apoiadas. Ao perceber que a mente se distraiu, apenas volte gentilmente ao objeto de foco. Não julgue a qualidade da sessão: comparecer todos os dias é o que constrói o hábito.",
    "Antes de reuniões importantes, faça uma versão curta de {term}: três minutos de olhos fechados, respiração natural e atenção às sensações do corpo. Essa mini-prática reduz a reatividade e melhora a escuta durante a conversa que virá.",
  ],
  programas: [
    "Comprometa-se com {term} por vinte e um dias consecutivos, com sessões curtas de quinze a vinte minutos. Anote em um caderno três palavras que descrevam como você se sentiu antes e depois de cada prática. Ao final do ciclo, releia as anotações para perceber padrões e ajustar o próximo mês.",
    "Combine com um amigo de fazer {term} juntos, ainda que remotamente. Marquem três horários semanais fixos, façam a prática e troquem impressões breves depois. O compromisso mútuo dobra a chance de manter a constância.",
  ],
};

const ADVANTAGES: Record<GlossaryCategory, string[]> = {
  pratica: [
    "Aumenta força, mobilidade e consciência corporal",
    "Melhora postura, alinhamento e capacidade respiratória",
    "Reduz tensões acumuladas e favorece a recuperação muscular",
    "Ensina o praticante a escutar sinais sutis do corpo",
    "Amplia a concentração e a presença no dia a dia",
  ],
  filosofia: [
    "Oferece um vocabulário preciso para experiências internas",
    "Conecta prática física a uma visão de mundo integrada",
    "Fortalece o discernimento diante de modismos",
    "Amplia a compreensão da tradição em suas fontes originais",
    "Nutre reflexão ética e propósito de vida",
  ],
  "bem-estar": [
    "Reduz níveis percebidos de estresse e ansiedade",
    "Melhora a qualidade do sono e o descanso",
    "Aumenta energia disponível ao longo do dia",
    "Favorece hábitos alimentares mais conscientes",
    "Apoia a regulação emocional em momentos desafiadores",
  ],
  ayurveda: [
    "Personaliza cuidados de acordo com a constituição individual",
    "Fortalece o poder digestivo (agni)",
    "Alinha a rotina aos ciclos naturais do dia e das estações",
    "Previne desequilíbrios antes que se tornem sintomas",
    "Integra alimentação, sono e prática em uma visão coerente",
  ],
  meditacao: [
    "Aumenta a capacidade de foco e atenção sustentada",
    "Reduz reatividade emocional e impulsividade",
    "Melhora clareza mental e tomada de decisão",
    "Cria maior senso de espaço interno frente aos pensamentos",
    "Contribui para redução de sintomas de ansiedade",
  ],
  programas: [
    "Estrutura clara e progressão sustentável",
    "Economia de tempo e energia mental na hora de praticar",
    "Menor risco de lesão por avanço gradual",
    "Maior sensação de conquista e engajamento",
    "Permite acompanhar a evolução com marcos objetivos",
  ],
};

const MISTAKES: Record<GlossaryCategory, string[]> = {
  pratica: [
    "Comparar-se com colegas e forçar o corpo além do ponto seguro",
    "Ignorar a respiração e prender o ar durante o esforço",
    "Passar rapidamente pelas transições sem cuidar do alinhamento",
    "Priorizar estética da postura em vez da experiência interna",
  ],
  filosofia: [
    "Ler textos clássicos como se fossem manuais de autoajuda",
    "Tomar conceitos fora de contexto e simplificá-los demais",
    "Confundir concordância intelectual com compreensão vivida",
    "Descartar tradições paralelas sem estudá-las de perto",
  ],
  "bem-estar": [
    "Esperar resultados imediatos e desistir na primeira semana",
    "Substituir orientação profissional por conteúdo genérico",
    "Praticar sempre no limite máximo, sem espaço para recuperação",
    "Ignorar sinais de desconforto persistente",
  ],
  ayurveda: [
    "Adotar receitas prontas sem considerar a própria constituição",
    "Mudar tudo ao mesmo tempo em vez de avançar por camadas",
    "Trocar remédios prescritos por sugestões lidas na internet",
    "Comer com pressa ou distraído, minando o próprio agni",
  ],
  meditacao: [
    "Buscar 'esvaziar a mente' e frustrar-se por não conseguir",
    "Praticar apenas quando surge motivação",
    "Julgar cada sessão em termos de sucesso ou fracasso",
    "Sentar-se em posturas desconfortáveis e desistir por dor",
  ],
  programas: [
    "Pular etapas para chegar mais rápido às práticas avançadas",
    "Não registrar o progresso, perdendo referência de evolução",
    "Interromper o programa por longos períodos sem plano de retorno",
    "Iniciar vários programas em paralelo e não concluir nenhum",
  ],
};

const CURIOSITIES: Record<GlossaryCategory, string[]> = {
  pratica: [
    "Muitas posturas clássicas têm nomes inspirados em animais e sábios da mitologia indiana",
    "Praticar por dez minutos diários costuma trazer resultados mais consistentes que uma aula longa por semana",
    "A permanência prolongada em uma postura ativa fáscias profundas que raramente são trabalhadas em outras atividades",
  ],
  filosofia: [
    "Os Yoga Sutras de Patanjali contêm apenas 196 aforismos, mas geraram milhares de páginas de comentários ao longo dos séculos",
    "Muitos conceitos do yoga foram preservados em cânticos orais antes de serem registrados por escrito",
    "Palavras sânscritas raramente têm tradução exata: cada termo carrega múltiplas camadas de sentido",
  ],
  "bem-estar": [
    "A OMS reconhece práticas contemplativas como aliadas na promoção de saúde mental",
    "Pequenas doses diárias de prática costumam superar sessões longas e esporádicas em resultados percebidos",
    "A respiração consciente é uma das poucas funções autônomas que também podemos regular voluntariamente",
  ],
  ayurveda: [
    "O Ayurveda é considerado um dos sistemas médicos mais antigos ainda em uso ativo no mundo",
    "A palavra 'ayurveda' significa literalmente 'ciência da vida'",
    "Os textos clássicos como Charaka Samhita descrevem detalhadamente rotinas sazonais para cada tipo de constituição",
  ],
  meditacao: [
    "Estudos com ressonância magnética mostram alterações estruturais no cérebro após oito semanas de prática regular",
    "Diferentes tradições budistas, hindus e cristãs desenvolveram técnicas meditativas com estruturas semelhantes",
    "A prática de atenção plena não exige postura especial: pode ser feita sentado, em pé ou caminhando",
  ],
  programas: [
    "A adesão a programas guiados costuma ser maior do que a de práticas totalmente autônomas",
    "Ciclos de vinte e um dias são frequentemente usados como base para novos hábitos",
    "Registrar a prática em um diário simples aumenta significativamente a chance de manter a constância",
  ],
};

const FAQ_BANK: Record<GlossaryCategory, { q: string; a: string }[]> = {
  pratica: [
    { q: "Preciso ser flexível para praticar {term}?", a: "Não. A flexibilidade é consequência da prática, não pré-requisito. {term} pode ser adaptado com blocos, cintas e variações para qualquer nível." },
    { q: "Com que frequência devo praticar {term}?", a: "Três a cinco vezes por semana, mesmo em sessões curtas, geram resultados perceptíveis em quatro a oito semanas de prática consistente." },
    { q: "Posso praticar {term} sozinho em casa?", a: "Sim, especialmente após uma base inicial com um professor. Vídeos e sequências guiadas ajudam a manter alinhamento e progressão segura." },
  ],
  filosofia: [
    { q: "Preciso conhecer sânscrito para entender {term}?", a: "Não. Boas traduções e comentários em português tornam o estudo acessível. Aprender alguns termos-chave, porém, enriquece muito a leitura." },
    { q: "{term} tem relação com religião?", a: "As raízes do yoga estão em tradições indianas, mas os conceitos podem ser estudados e aplicados de forma laica, respeitando a origem." },
    { q: "Por onde começar a estudar {term}?", a: "Comece por uma introdução acessível, avance para os textos-fonte com comentários e retorne aos originais depois de alguma vivência prática." },
  ],
  "bem-estar": [
    { q: "{term} substitui tratamento médico?", a: "Não. É uma prática complementar. Continue com o acompanhamento médico e informe seu profissional de saúde sobre a rotina que você adota." },
    { q: "Em quanto tempo sinto os efeitos de {term}?", a: "Muitos praticantes relatam melhora no sono e no humor já nas primeiras semanas. Mudanças mais estruturais aparecem em dois a três meses de prática regular." },
    { q: "{term} serve para quem tem pouco tempo?", a: "Sim. Sessões curtas e frequentes tendem a ser mais eficazes que sessões longas e esporádicas." },
  ],
  ayurveda: [
    { q: "Como saber se {term} combina com meu dosha?", a: "Uma consulta com um terapeuta ayurveda ajuda a mapear sua constituição. Enquanto isso, observe como o corpo responde e ajuste conforme necessário." },
    { q: "Posso combinar {term} com outros hábitos de saúde?", a: "Sim, desde que integrados de forma coerente. O Ayurveda valoriza a simplicidade e a regularidade acima do acúmulo de práticas." },
    { q: "{term} tem contraindicações?", a: "Como qualquer prática, pode haver situações em que precise ser adaptada. Gestantes, pessoas em tratamento e portadores de condições específicas devem buscar orientação." },
  ],
  meditacao: [
    { q: "Preciso sentar no chão para praticar {term}?", a: "Não. Uma cadeira firme, com pés no chão e coluna longa, funciona muito bem. O essencial é uma postura estável e confortável." },
    { q: "É normal a mente vagar durante {term}?", a: "Sim, isso é a própria natureza da mente. A prática consiste justamente em perceber a distração e retornar gentilmente ao objeto de foco." },
    { q: "Quanto tempo devo dedicar a {term}?", a: "Comece com cinco a dez minutos por dia. É melhor uma prática curta e diária do que sessões longas e ocasionais." },
  ],
  programas: [
    { q: "{term} funciona para iniciantes absolutos?", a: "Sim, quando o programa oferece variações e uma introdução aos fundamentos. Comece pelo módulo inicial e avance conforme o corpo se adapta." },
    { q: "Preciso de equipamentos para seguir {term}?", a: "Um tapete e roupas confortáveis costumam bastar. Alguns programas sugerem blocos, cintas e uma almofada de meditação para maior conforto." },
    { q: "Posso pausar {term} e retomar depois?", a: "Sim. O ideal é retomar do ponto de conforto atual, sem cobranças, respeitando o corpo após um período de pausa." },
  ],
};

const CLOSING: Record<GlossaryCategory, string[]> = {
  pratica: [
    "No conjunto, {term} é um convite a habitar o corpo com mais inteireza. Aos poucos, o que começa como uma técnica se transforma em uma forma de estar no mundo — mais atenta, mais estável e mais generosa consigo mesma.",
    "Levar {term} a sério significa fazer da esteira um laboratório diário de escuta. Cada sessão é uma oportunidade de descobrir algo novo sobre limites, potências e ritmos internos.",
  ],
  filosofia: [
    "Encarar {term} como um objeto vivo de estudo — e não como uma definição fechada — mantém acesa a curiosidade que move todo praticante. É essa curiosidade que preserva a tradição viva.",
    "Quanto mais se convive com {term}, mais camadas se revelam. A profundidade da tradição do yoga se abre apenas para quem retorna, ano após ano, ao mesmo texto e à mesma prática, com olhar renovado.",
  ],
  "bem-estar": [
    "Integrar {term} à rotina não exige grandes reformas de vida. Começa com uma pequena decisão diária, sustentada com carinho por semanas, até que o novo padrão se torne natural.",
    "O maior ganho de {term} talvez não esteja em resultados mensuráveis, mas na sensação silenciosa de estar mais em casa dentro do próprio corpo e do próprio dia.",
  ],
  ayurveda: [
    "Refletir sobre {term} é lembrar que saúde é uma construção diária, feita de escolhas simples repetidas com atenção. O Ayurveda oferece a linguagem para reconhecer essas escolhas.",
    "{term}, no espírito do Ayurveda, é um caminho de reaproximação com os ritmos naturais — do corpo, do dia, das estações — que a vida moderna facilmente esquece.",
  ],
  meditacao: [
    "Praticar {term} regularmente é oferecer à mente um lugar seguro para pousar. Com o tempo, essa qualidade de pouso passa a estar disponível também fora dos minutos formais de meditação.",
    "{term} ensina, silenciosamente, que a mudança mais profunda não vem de forçar a mente, mas de acompanhá-la com paciência até que ela mesma se assente.",
  ],
  programas: [
    "Comprometer-se com {term} é um exercício de continuidade. O verdadeiro benefício aparece quando o programa deixa de ser uma novidade e se torna parte natural da semana.",
    "{term} tem valor porque respeita o tempo de cada praticante. Ao seguir o mapa proposto, sobra energia para o que realmente importa: viver a prática.",
  ],
};

// ————— Composition

const compose = (template: string, term: GlossaryTerm) =>
  template.split("{term}").join(term.term);

const composeParagraphs = (banks: string[], term: GlossaryTerm, seed: number, n = 2) =>
  pickN(banks, seed, n).map((p) => compose(p, term)).join("\n\n");

export const enrichTerm = (term: GlossaryTerm): GlossaryTerm => {
  const seed = hash(term.slug);
  const cat = term.category;
  const catName = catLabel(cat);

  // Expanded fullDefinition: keep original + add contextual paragraphs.
  const originalFull = term.fullDefinition?.trim() ?? "";
  const relatedList =
    term.related && term.related.length > 0
      ? term.related.slice(0, 4).join(", ")
      : "";
  const synonymLine =
    term.synonyms && term.synonyms.length > 0
      ? `Também referido como ${term.synonyms.join(", ")}, `
      : "";
  const contextParagraph =
    `${synonymLine}${term.term} ocupa um lugar próprio dentro da categoria ${catName} do yoga. ` +
    `Ao estudar este verbete, o leitor encontra uma introdução acessível, exemplos práticos e um panorama das conexões com outros conceitos da tradição. ` +
    (relatedList
      ? `Termos como ${relatedList} ajudam a compor uma visão mais ampla e evitam interpretações isoladas. `
      : `A leitura de outros verbetes relacionados amplia essa visão e evita interpretações isoladas. `) +
    `Todo o conteúdo desta página foi redigido pela equipe editorial de A Arte do Yoga com base em fontes clássicas e na experiência direta de professores da casa.`;

  const fullDefinition =
    originalFull + (originalFull ? "\n\n" : "") + contextParagraph;

  const howItWorks =
    term.howItWorks && countWords(term.howItWorks) > 40 && term.howItWorks !== term.fullDefinition
      ? term.howItWorks
      : composeParagraphs(HOW_IT_WORKS[cat], term, seed, 2);

  const practicalExample =
    term.practicalExample && countWords(term.practicalExample) > 30
      ? term.practicalExample
      : compose(pick(PRACTICAL_EXAMPLE[cat], seed, 1), term);

  const whyItMatters =
    term.whyItMatters && countWords(term.whyItMatters) > 30
      ? term.whyItMatters
      : composeParagraphs(WHY_IT_MATTERS[cat], term, seed, 1);

  const advantages =
    term.advantages && term.advantages.length >= 4
      ? term.advantages
      : pickN(ADVANTAGES[cat], seed, 5);

  const commonMistakes =
    term.commonMistakes && term.commonMistakes.length >= 3
      ? term.commonMistakes
      : pickN(MISTAKES[cat], seed, 4);

  const curiosities =
    term.curiosities && term.curiosities.length >= 2
      ? term.curiosities
      : pickN(CURIOSITIES[cat], seed, 3);

  // FAQ: preserve originals, then top up with generic-but-substituted ones.
  const generatedFaq = FAQ_BANK[cat].map((f) => ({
    q: compose(f.q, term),
    a: compose(f.a, term),
  }));
  const existingQs = new Set((term.faq ?? []).map((f) => f.q.toLowerCase()));
  const faq = [
    ...(term.faq ?? []),
    ...generatedFaq.filter((f) => !existingQs.has(f.q.toLowerCase())),
  ].slice(0, 5);

  // Closing paragraph appended to whyItMatters for extra unique prose.
  const closing = compose(pick(CLOSING[cat], seed, 2), term);
  const whyFinal = whyItMatters + "\n\n" + closing;

  const enriched: GlossaryTerm = {
    ...term,
    fullDefinition,
    howItWorks,
    practicalExample,
    whyItMatters: whyFinal,
    advantages,
    commonMistakes,
    curiosities,
    faq,
  };

  // Recompute reading time from the enriched body.
  const totalWords = countWords(
    [
      enriched.shortDefinition,
      enriched.fullDefinition,
      enriched.howItWorks,
      enriched.practicalExample,
      enriched.whyItMatters,
      ...(enriched.advantages ?? []),
      ...(enriched.commonMistakes ?? []),
      ...(enriched.curiosities ?? []),
      ...enriched.faq.flatMap((f) => [f.q, f.a]),
    ].join(" ")
  );
  enriched.readingMinutes = Math.max(3, Math.round(totalWords / 200));
  return enriched;
};