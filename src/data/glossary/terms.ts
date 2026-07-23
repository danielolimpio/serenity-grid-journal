import type { GlossaryTerm } from "./types";

// Helper to reduce boilerplate: fills sensible defaults.
const t = (data: Partial<GlossaryTerm> & Pick<GlossaryTerm,
  "slug" | "term" | "category" | "shortDefinition" | "fullDefinition"
>): GlossaryTerm => ({
  synonyms: [],
  related: [],
  quickSummary: data.shortDefinition,
  howItWorks: data.fullDefinition,
  practicalExample: "",
  whyItMatters: "",
  advantages: [],
  commonMistakes: [],
  curiosities: [],
  faq: [],
  references: [
    "Patanjali. Yoga Sutras. Tradução comentada por Swami Satchidananda.",
    "Iyengar, B.K.S. Luz sobre o Yoga. Editora Cultrix.",
    "Feuerstein, Georg. A Tradição do Yoga. Editora Pensamento.",
  ],
  publishedAt: "2026-01-15",
  updatedAt: "2026-01-20",
  author: "Equipe A Arte do Yoga",
  readingMinutes: 5,
  ...data,
});

export const TERMS: GlossaryTerm[] = [
  t({
    slug: "yoga",
    term: "Yoga",
    category: "filosofia",
    featured: true,
    popular: true,
    synonyms: ["Ioga", "União"],
    related: ["asana", "pranayama", "meditacao", "samadhi", "patanjali"],
    shortDefinition:
      "Yoga é uma tradição indiana milenar que integra corpo, respiração e mente por meio de posturas, respiração consciente, ética e meditação. A palavra vem do sânscrito yuj (unir) e descreve tanto o caminho quanto o estado de união entre a consciência individual e a totalidade da existência.",
    quickSummary:
      "Sistema completo de práticas físicas, éticas e meditativas originado na Índia há mais de 3.000 anos.",
    fullDefinition:
      "Yoga é um dos seis darshanas (sistemas filosóficos) clássicos da Índia. Vai muito além da ginástica moderna: é um caminho de autoconhecimento que combina posturas (asanas), respiração (pranayama), disciplina ética (yamas e niyamas), retração dos sentidos (pratyahara), concentração (dharana), meditação (dhyana) e absorção (samadhi). Codificado por Patanjali nos Yoga Sutras por volta do século II a.C., o yoga se desdobra em diversas escolas — Hatha, Raja, Bhakti, Karma, Jnana e Tantra — cada uma enfatizando um aspecto do mesmo caminho.",
    howItWorks:
      "A prática integra três dimensões: corpo (asanas fortalecem, alinham e purificam), respiração (pranayama regula o sistema nervoso) e mente (meditação acalma flutuações mentais). Ao trabalhar essas camadas de forma sistemática, o praticante desenvolve estabilidade, clareza e sensibilidade sutil.",
    practicalExample:
      "Uma sessão típica de 60 minutos começa com alguns minutos de respiração consciente, avança para uma sequência de aquecimento como Surya Namaskar, aprofunda-se em posturas em pé e no chão, passa por respirações específicas como Nadi Shodhana e termina em Savasana com meditação silenciosa.",
    whyItMatters:
      "Estudos apontam benefícios do yoga na redução de ansiedade, dor lombar crônica, pressão arterial e insônia. Do ponto de vista existencial, oferece ferramentas concretas para lidar com estresse, autoconhecimento e propósito.",
    advantages: [
      "Melhora flexibilidade, força e postura",
      "Reduz estresse e melhora o sono",
      "Aumenta a consciência corporal e emocional",
      "É acessível a praticamente todas as idades e condições",
    ],
    disadvantages: [
      "Posturas avançadas exigem orientação para evitar lesões",
      "Resultados profundos surgem apenas com prática consistente",
    ],
    commonMistakes: [
      "Comparar-se com outros praticantes",
      "Buscar apenas o aspecto físico e ignorar respiração e ética",
      "Forçar posturas sem escutar o corpo",
    ],
    curiosities: [
      "A palavra 'yoga' aparece pela primeira vez nos Upanishads (~800 a.C.)",
      "O Dia Internacional do Yoga é celebrado em 21 de junho",
    ],
    faq: [
      { q: "Yoga é uma religião?", a: "Não. Yoga é uma disciplina filosófica e prática compatível com qualquer crença. Existem influências hindus, budistas e jainistas, mas o núcleo é experiencial." },
      { q: "Qual estilo de yoga é melhor para iniciantes?", a: "Hatha Yoga clássico e Yin Yoga são ótimas portas de entrada por seu ritmo mais lento, foco em alinhamento e tempo de permanência nas posturas." },
      { q: "Quanto tempo por dia devo praticar?", a: "Vinte minutos diários de prática consistente trazem mais resultado que uma aula longa por semana. Comece pequeno e sustentável." },
    ],
    readingMinutes: 8,
  }),
  t({
    slug: "asana",
    term: "Asana",
    category: "pratica",
    featured: true,
    popular: true,
    synonyms: ["Postura de yoga", "Posição"],
    related: ["yoga", "hatha-yoga", "vinyasa", "savasana", "surya-namaskar"],
    shortDefinition:
      "Asana é a postura física do yoga, executada com estabilidade e conforto, como definido por Patanjali no aforismo 'sthira sukham asanam'. É a terceira etapa do caminho óctuplo e prepara o corpo e a mente para a respiração e a meditação prolongadas.",
    quickSummary: "Postura corporal firme e confortável praticada no yoga.",
    fullDefinition:
      "Originalmente asana significava 'assento' — a posição estável em que o yogi sentava para meditar. Com o desenvolvimento do Hatha Yoga, o termo passou a designar centenas de posturas que trabalham força, flexibilidade, equilíbrio e circulação de prana. Cada asana tem alinhamentos, contraindicações e efeitos energéticos específicos.",
    practicalExample:
      "Em Tadasana (postura da montanha), o praticante fica em pé com os pés paralelos, calcanhares alinhados, quadril neutro, coluna alongada e ombros relaxados, respirando profundamente por 5 a 10 ciclos.",
    whyItMatters:
      "Asanas mantêm o corpo saudável e sem tensões que atrapalhem a meditação. Também reeducam padrões posturais, aliviam dores e cultivam presença encarnada.",
    advantages: [
      "Melhora postura, força e mobilidade articular",
      "Estimula órgãos internos e circulação",
      "Prepara o corpo para práticas meditativas longas",
    ],
    commonMistakes: [
      "Priorizar profundidade em vez de alinhamento",
      "Reter a respiração durante a execução",
      "Comparar-se visualmente com outros praticantes",
    ],
    curiosities: [
      "O texto Gheranda Samhita cita 84 asanas clássicas",
      "Existem mais de 900 asanas catalogadas no yoga moderno",
    ],
    faq: [
      { q: "Qual a diferença entre asana e postura de ginástica?", a: "Asana é praticada com respiração consciente, permanência e intenção meditativa; ginástica busca performance e repetição." },
      { q: "Quanto tempo devo permanecer em cada asana?", a: "De 5 respirações (fluxo dinâmico) a vários minutos (Yin/Restaurativo), conforme o objetivo da prática." },
    ],
  }),
  t({
    slug: "pranayama",
    term: "Pranayama",
    category: "pratica",
    featured: true,
    popular: true,
    synonyms: ["Controle da respiração", "Respiração yóguica"],
    related: ["prana", "nadi", "ida", "pingala", "sushumna"],
    shortDefinition:
      "Pranayama é o conjunto de técnicas respiratórias do yoga que expandem e regulam o prana, a energia vital. A palavra une prana (energia) e ayama (extensão, controle) e forma o quarto degrau do Ashtanga de Patanjali, ligando o corpo físico ao campo mental e sutil.",
    quickSummary: "Controle consciente da respiração para regular energia vital e acalmar a mente.",
    fullDefinition:
      "O pranayama trabalha as quatro fases do ciclo respiratório: puraka (inspiração), antara kumbhaka (retenção com pulmões cheios), rechaka (expiração) e bahya kumbhaka (retenção com pulmões vazios). Diferentes técnicas — como Nadi Shodhana, Kapalabhati, Bhastrika, Ujjayi e Bhramari — produzem efeitos específicos no sistema nervoso, na temperatura corporal e no estado mental.",
    practicalExample:
      "Nadi Shodhana (respiração alternada): sente-se ereto, feche a narina direita com o polegar, inspire pela esquerda, feche a esquerda com o anelar, expire pela direita, inspire pela direita, feche e expire pela esquerda. Faça 5 a 10 ciclos.",
    whyItMatters:
      "A respiração é a ponte entre corpo e mente. Regular o ritmo respiratório modula o sistema nervoso autônomo, reduz cortisol e amplia a capacidade de foco.",
    advantages: [
      "Reduz ansiedade e ativa o sistema parassimpático",
      "Melhora capacidade pulmonar e concentração",
      "Prepara para meditação profunda",
    ],
    disadvantages: [
      "Retenções longas requerem orientação de professor experiente",
      "Algumas técnicas são contraindicadas em hipertensão e gravidez",
    ],
    commonMistakes: [
      "Forçar retenções muito longas no início",
      "Elevar os ombros ao inspirar",
      "Praticar de estômago cheio",
    ],
    curiosities: [
      "O Hatha Yoga Pradipika lista oito pranayamas principais (Ashta Kumbhaka)",
      "A respiração média humana é de 15 ciclos/min; yogis avançados praticam com 4-6",
    ],
    faq: [
      { q: "Posso fazer pranayama todos os dias?", a: "Sim, técnicas suaves como Nadi Shodhana e Ujjayi são seguras para prática diária de 5 a 15 minutos." },
      { q: "Qual o melhor horário para praticar?", a: "Ao amanhecer, de estômago vazio, é o horário clássico. À noite, prefira técnicas calmantes." },
    ],
  }),
  t({
    slug: "chakra",
    term: "Chakra",
    category: "filosofia",
    featured: true,
    popular: true,
    synonyms: ["Centro energético", "Roda de energia"],
    related: ["prana", "kundalini", "nadi", "sushumna"],
    shortDefinition:
      "Chakras são centros sutis de energia descritos pelo yoga e pelo tantra, distribuídos ao longo do eixo central do corpo. A palavra em sânscrito significa 'roda' e cada um dos sete chakras principais governa aspectos físicos, emocionais e espirituais da vida do praticante.",
    quickSummary: "Sete centros energéticos alinhados ao longo da coluna, associados a corpo, emoções e consciência.",
    fullDefinition:
      "Os sete chakras principais são: Muladhara (base, segurança), Svadhisthana (sacro, criatividade e prazer), Manipura (plexo solar, poder pessoal), Anahata (coração, amor), Vishuddha (garganta, expressão), Ajna (terceiro olho, intuição) e Sahasrara (coroa, transcendência). Cada um vibra em uma frequência sutil e se relaciona a elementos, cores, mantras bija e órgãos.",
    practicalExample:
      "Para equilibrar Anahata, o chakra cardíaco, pratique Bhujangasana (cobra), respire profundamente na região peitoral e entoe o mantra bija 'YAM' por 108 vezes.",
    whyItMatters:
      "Trabalhar os chakras oferece um mapa simbólico e experiencial para identificar bloqueios emocionais, padrões repetitivos e áreas de crescimento pessoal.",
    advantages: [
      "Integra corpo, emoção e espiritualidade em uma linguagem clara",
      "Guia práticas de asana, mantra e meditação",
      "Auxilia na compreensão de bloqueios pessoais",
    ],
    commonMistakes: [
      "Interpretar os chakras de forma literal e anatômica",
      "Buscar 'abrir' chakras sem preparação",
    ],
    curiosities: [
      "O sistema clássico de sete chakras foi popularizado pelo texto Sat-Chakra-Nirupana (séc. XVI)",
      "Existem tradições que descrevem 12, 21 ou até 114 chakras",
    ],
    faq: [
      { q: "Os chakras existem fisicamente?", a: "Não como órgãos, mas correspondem a plexos nervosos e regiões corporais reais. São modelos sutis, não anatômicos." },
      { q: "Como saber se um chakra está bloqueado?", a: "Padrões emocionais crônicos, tensões físicas na região e desequilíbrios repetitivos são indícios comuns." },
    ],
  }),
  t({
    slug: "mantra",
    term: "Mantra",
    category: "meditacao",
    popular: true,
    synonyms: ["Fórmula sagrada", "Som meditativo"],
    related: ["om", "japa", "meditacao", "bhakti-yoga"],
    shortDefinition:
      "Mantra é uma sílaba, palavra ou frase em sânscrito repetida com atenção para focar a mente, elevar o estado vibratório e evocar qualidades espirituais. A palavra une manas (mente) e trana (proteção): aquilo que protege e liberta a mente de padrões dispersivos.",
    quickSummary: "Som sagrado repetido para concentrar a mente e transformar estados internos.",
    fullDefinition:
      "Existem mantras bija (sementes, como OM, HAM, YAM), mantras de invocação (como 'Om Namah Shivaya') e mantras longos (Gayatri, Mahamrityunjaya). Podem ser recitados em voz alta, sussurrados ou mentalizados. A repetição contínua chama-se japa, frequentemente contada em um mala de 108 contas.",
    practicalExample:
      "Sente-se confortavelmente, feche os olhos e repita 'So Ham' — 'So' na inspiração, 'Ham' na expiração — por 10 a 20 minutos.",
    whyItMatters:
      "Mantras oferecem um objeto sutil de concentração, útil quando a mente é agitada. A vibração sonora produz efeitos comprovados sobre a atividade cerebral e o tônus vagal.",
    advantages: [
      "Ancora a mente com facilidade",
      "Pode ser praticado em qualquer lugar",
      "Cultiva estados emocionais elevados",
    ],
    commonMistakes: [
      "Recitar mecanicamente sem atenção",
      "Trocar de mantra a cada semana",
    ],
    curiosities: [
      "OM é considerado o pranava, som primordial do universo",
      "Malas tradicionais têm 108 contas — número simbólico central no yoga",
    ],
    faq: [
      { q: "Preciso saber sânscrito para praticar mantras?", a: "Não. Basta pronunciar com respeito e intenção; o efeito vibratório atua independentemente do domínio linguístico." },
      { q: "Posso usar frases em português como mantra?", a: "Sim. Afirmações curtas repetidas com foco funcionam como mantras práticos, embora careçam da carga vibracional sânscrita clássica." },
    ],
  }),
  t({
    slug: "meditacao",
    term: "Meditação",
    category: "meditacao",
    featured: true,
    popular: true,
    synonyms: ["Dhyana"],
    related: ["mindfulness", "samadhi", "mantra", "trataka"],
    shortDefinition:
      "Meditação é a prática deliberada de estabilizar a atenção em um objeto — respiração, mantra, sensação ou consciência aberta — cultivando presença, clareza e equilíbrio emocional. No yoga é o sétimo degrau (dhyana), fluxo contínuo de atenção que conduz à absorção meditativa (samadhi).",
    quickSummary: "Treinamento sistemático da atenção que gera clareza, calma e autoconhecimento.",
    fullDefinition:
      "Meditação abrange técnicas de concentração (samatha), atenção plena (vipassana/mindfulness), visualização, mantra japa, meditação em movimento e presença sem objeto (dzogchen, jnana). Todas cultivam a capacidade de observar a experiência sem se identificar com pensamentos e reações.",
    practicalExample:
      "Sente-se com a coluna ereta, feche os olhos e siga a respiração no ventre por 10 minutos. Sempre que a mente se distrair, note gentilmente e retorne à sensação da barriga subindo e descendo.",
    whyItMatters:
      "Meta-análises científicas mostram redução de ansiedade, depressão, dor crônica e inflamação em praticantes regulares, além de mudanças estruturais em áreas cerebrais ligadas a atenção e empatia.",
    advantages: [
      "Reduz ruminação mental e ansiedade",
      "Melhora foco, memória e regulação emocional",
      "Aumenta empatia e sensação de bem-estar",
    ],
    commonMistakes: [
      "Tentar 'esvaziar a mente'",
      "Julgar-se pelos pensamentos que surgem",
      "Praticar apenas quando se sente mal",
    ],
    curiosities: [
      "10 minutos diários já produzem alterações mensuráveis no EEG após 8 semanas",
      "A palavra dhyana originou 'chan' no chinês e 'zen' no japonês",
    ],
    faq: [
      { q: "Quanto tempo devo meditar por dia?", a: "Comece com 5 a 10 minutos diários e cresça gradualmente. Consistência supera duração." },
      { q: "Meditar é o mesmo que relaxar?", a: "Não. Relaxamento é um efeito colateral; o objetivo da meditação é presença lúcida, não sonolência." },
    ],
    readingMinutes: 7,
  }),
  t({
    slug: "mindfulness",
    term: "Mindfulness",
    category: "meditacao",
    popular: true,
    synonyms: ["Atenção plena", "Sati"],
    related: ["meditacao", "vipassana", "zen"],
    shortDefinition:
      "Mindfulness é a prática de manter a atenção intencional no momento presente, sem julgamento. Deriva do termo pali sati e foi sistematizada em programas clínicos como o MBSR de Jon Kabat-Zinn, tornando-se hoje uma das intervenções psicológicas mais estudadas do mundo.",
    quickSummary: "Consciência aberta e sem julgamento do momento presente.",
    fullDefinition:
      "Diferente da meditação concentrativa, mindfulness cultiva uma atenção espaçosa que reconhece pensamentos, emoções e sensações à medida que surgem. Programas como MBSR (redução de estresse) e MBCT (prevenção de recaída em depressão) usam 8 semanas de treinamento formal e informal para desenvolver essa habilidade.",
    practicalExample:
      "Ao lavar louça, sinta a temperatura da água, o cheiro do sabão, o movimento das mãos. Sempre que a mente vagar, volte para essas sensações. Isso é mindfulness informal.",
    whyItMatters:
      "Ajuda a interromper o piloto automático, reduz reatividade emocional e melhora relacionamentos, sono e desempenho profissional.",
    advantages: [
      "Aumenta clareza mental e criatividade",
      "Reduz reatividade e melhora empatia",
      "Pode ser integrado a atividades cotidianas",
    ],
    commonMistakes: [
      "Achar que é preciso 'não pensar'",
      "Praticar tensionando o corpo",
    ],
    curiosities: [
      "MBSR nasceu em 1979 no Hospital da Universidade de Massachusetts",
      "Google, Apple e SAP oferecem programas internos de mindfulness",
    ],
    faq: [
      { q: "Mindfulness é religioso?", a: "Não. Embora tenha raízes budistas, é praticado em contextos laicos, clínicos, escolares e corporativos." },
      { q: "Existe idade mínima?", a: "Crianças a partir de 4 anos podem praticar versões adaptadas de mindfulness." },
    ],
  }),
  t({
    slug: "ayurveda",
    term: "Ayurveda",
    category: "ayurveda",
    featured: true,
    popular: true,
    synonyms: ["Medicina indiana", "Ciência da vida"],
    related: ["dosha", "vata", "pitta", "kapha", "yoga"],
    shortDefinition:
      "Ayurveda é o sistema tradicional indiano de medicina, com mais de cinco mil anos, que integra alimentação, ervas, rotina diária, yoga e meditação para promover saúde e longevidade. A palavra une ayus (vida) e veda (conhecimento) e propõe cuidado personalizado segundo a constituição individual.",
    quickSummary: "Medicina tradicional indiana que cuida da saúde a partir da constituição pessoal.",
    fullDefinition:
      "O Ayurveda descreve três humores biológicos — Vata, Pitta e Kapha — que combinam os cinco elementos e determinam a constituição (prakriti) de cada pessoa. O tratamento equilibra esses doshas através de dieta, rotina (dinacharya), rotina sazonal (ritucharya), massagens (abhyanga), ervas, panchakarma e práticas espirituais.",
    practicalExample:
      "Uma pessoa de constituição Vata é orientada a manter horários regulares, priorizar alimentos quentes, cozidos e temperados, evitar excesso de crus e frios, e praticar yoga suave e restaurativo.",
    whyItMatters:
      "Oferece um cuidado preventivo e individualizado, complementar à medicina moderna, com foco em estilo de vida e causa raiz dos desequilíbrios.",
    advantages: [
      "Aborda saúde de forma preventiva e integral",
      "Personaliza recomendações por constituição",
      "Integra corpo, mente e espiritualidade",
    ],
    disadvantages: [
      "Deve complementar, não substituir tratamentos médicos",
      "Requer profissional formado para prescrever ervas",
    ],
    commonMistakes: [
      "Autoprescrição de ervas sem orientação",
      "Aplicar recomendações genéricas ignorando constituição",
    ],
    curiosities: [
      "É reconhecido pela OMS como sistema tradicional de medicina",
      "Os textos clássicos Charaka Samhita e Sushruta Samhita têm mais de 2.000 anos",
    ],
    faq: [
      { q: "Qual a relação entre Ayurveda e Yoga?", a: "São ciências irmãs: Yoga cuida da consciência, Ayurveda cuida do corpo e da vitalidade. Juntos formam um sistema completo." },
      { q: "Preciso ser vegetariano no Ayurveda?", a: "Não é obrigatório, mas a dieta preferencialmente lacto-vegetariana é a mais recomendada para maioria das constituições." },
    ],
    readingMinutes: 7,
  }),
  t({
    slug: "dosha",
    term: "Dosha",
    category: "ayurveda",
    synonyms: ["Humor biológico", "Bioenergia"],
    related: ["ayurveda", "vata", "pitta", "kapha"],
    shortDefinition:
      "Doshas são os três princípios funcionais do Ayurveda — Vata, Pitta e Kapha — que combinam os cinco elementos e governam todas as funções do corpo e da mente. A constituição pessoal (prakriti) é definida pela proporção entre eles no momento da concepção.",
    quickSummary: "Vata, Pitta e Kapha: as três bioenergias que estruturam a constituição no Ayurveda.",
    fullDefinition:
      "Vata (éter e ar) governa movimento; Pitta (fogo e água) governa transformação; Kapha (terra e água) governa estrutura. O equilíbrio dinâmico entre eles mantém a saúde; o desequilíbrio (vikriti) origina doenças. Alimentação, clima, emoções e rotina afetam continuamente essa balança.",
    practicalExample:
      "Em dias frios e ventosos, Vata tende a aumentar. Compensar com bebidas quentes, alimentos untuosos, banhos mornos e uma prática de yoga lenta e enraizadora.",
    whyItMatters:
      "Conhecer o próprio dosha permite escolher alimentos, exercícios e rotinas que sustentam vitalidade e prevenir desequilíbrios recorrentes.",
    advantages: [
      "Fornece um mapa individual de saúde",
      "Orienta escolhas alimentares e de estilo de vida",
    ],
    commonMistakes: [
      "Confundir prakriti (constituição) com vikriti (desequilíbrio atual)",
      "Descobrir o dosha apenas por testes online sem consulta",
    ],
    curiosities: [
      "A maioria das pessoas é bidoshica (dois doshas dominantes)",
    ],
    faq: [
      { q: "Meu dosha muda com o tempo?", a: "A prakriti é fixa; o que varia é a vikriti — o estado atual, afetado por rotina, estação e emoções." },
    ],
  }),
  t({
    slug: "vata",
    term: "Vata",
    category: "ayurveda",
    related: ["dosha", "ayurveda", "pitta", "kapha"],
    shortDefinition:
      "Vata é o dosha do movimento no Ayurveda, formado pelos elementos éter e ar. Governa a respiração, a circulação, os impulsos nervosos e a eliminação. Quando equilibrado, gera criatividade e agilidade; em excesso causa ansiedade, insônia e ressecamento.",
    quickSummary: "Dosha do movimento — leve, seco, frio e móvel.",
    fullDefinition:
      "Pessoas Vata tendem a ser magras, ágeis, criativas e sensíveis. Sentem frio com facilidade, têm pele seca e digestão irregular. O desequilíbrio de Vata é a raiz da maioria das disfunções, segundo textos clássicos.",
    practicalExample:
      "Para pacificar Vata: rotina consistente, alimentos quentes e untuosos, ghee, massagem com óleo de gergelim morno (abhyanga) e yoga restaurativo.",
    whyItMatters:
      "Regular Vata previne quadros modernos comuns: ansiedade, insônia, dor lombar e prisão de ventre.",
    advantages: ["Criatividade, entusiasmo e adaptabilidade quando em equilíbrio"],
    commonMistakes: ["Excesso de alimentos crus, secos ou frios", "Rotinas erráticas"],
    faq: [
      { q: "Vata precisa mesmo de rotina rígida?", a: "Sim. Regularidade em sono, refeições e prática é o remédio primordial para Vata." },
    ],
  }),
  t({
    slug: "pitta",
    term: "Pitta",
    category: "ayurveda",
    related: ["dosha", "ayurveda", "vata", "kapha"],
    shortDefinition:
      "Pitta é o dosha da transformação no Ayurveda, formado por fogo e água. Governa digestão, metabolismo, temperatura e inteligência. Em equilíbrio, produz clareza e liderança; em excesso, gera irritabilidade, azia e inflamações.",
    quickSummary: "Dosha do fogo — quente, intenso, penetrante.",
    fullDefinition:
      "Pessoas Pitta têm compleição média, fome intensa, temperamento decidido e tendência a inflamações. São bons líderes e comunicadores quando equilibrados.",
    practicalExample:
      "Para acalmar Pitta: alimentos frescos e doces naturais, coco, coentro, menta, evitar excesso de picante e álcool, e praticar yoga em ambiente arejado.",
    whyItMatters:
      "Manejar Pitta previne gastrite, inflamações crônicas, dermatites e sobrecarga emocional.",
    advantages: ["Clareza mental, capacidade de liderança e boa digestão em equilíbrio"],
    commonMistakes: ["Comer com pressa e sob estresse", "Excesso de café e picantes"],
    faq: [
      { q: "Pitta pode praticar Bikram/hot yoga?", a: "Em geral não é recomendado — o calor externo agrava o dosha. Prefira estilos moderados." },
    ],
  }),
  t({
    slug: "kapha",
    term: "Kapha",
    category: "ayurveda",
    related: ["dosha", "ayurveda", "vata", "pitta"],
    shortDefinition:
      "Kapha é o dosha da estrutura no Ayurveda, formado por terra e água. Governa lubrificação, imunidade, estabilidade emocional e massa corporal. Equilibrado, oferece calma e resistência; em excesso, produz letargia, retenção e ganho de peso.",
    quickSummary: "Dosha da estrutura — estável, denso, úmido, frio.",
    fullDefinition:
      "Pessoas Kapha têm compleição robusta, pele suave, memória duradoura e temperamento afetuoso. Digerem devagar e tendem a acumular peso e catarro.",
    practicalExample:
      "Para estimular Kapha: alimentos leves e picantes, gengibre, movimento vigoroso, prática de yoga dinâmica como Vinyasa ou Ashtanga.",
    whyItMatters:
      "Manejar Kapha previne sedentarismo, obesidade, congestão respiratória e apego.",
    advantages: ["Estabilidade, força e afetividade em equilíbrio"],
    commonMistakes: ["Comer em excesso e dormir de dia", "Praticar apenas yoga lento"],
    faq: [
      { q: "Kapha precisa mesmo se exercitar todos os dias?", a: "Sim. Movimento diário é essencial para prevenir estagnação típica desse dosha." },
    ],
  }),
  t({
    slug: "prana",
    term: "Prana",
    category: "filosofia",
    synonyms: ["Energia vital", "Chi"],
    related: ["pranayama", "chakra", "nadi", "kundalini"],
    shortDefinition:
      "Prana é a energia vital que anima todos os seres, permeando o universo e circulando pelo corpo sutil por meio de canais chamados nadis. Corresponde ao chi chinês e ao ki japonês, e é o princípio que a respiração yóguica busca cultivar, purificar e direcionar.",
    quickSummary: "Energia vital que sustenta a vida, cultivada por respiração e alimentação.",
    fullDefinition:
      "O yoga descreve cinco subdivisões (vayus): Prana Vayu (peito), Apana Vayu (baixo abdômen), Samana Vayu (umbigo), Udana Vayu (garganta) e Vyana Vayu (corpo todo). Cada uma governa funções fisiológicas e sutis específicas.",
    practicalExample:
      "Respirações profundas ao amanhecer, alimentos frescos, contato com a natureza e prática de pranayama aumentam a disponibilidade de prana no organismo.",
    whyItMatters:
      "A percepção sutil de prana torna a prática de yoga uma experiência energética, não apenas física.",
    advantages: ["Explica a dimensão energética do corpo"],
    commonMistakes: ["Confundir prana apenas com oxigênio"],
    curiosities: ["Prana é considerado 'o fio da vida' nos Upanishads"],
    faq: [
      { q: "Comida industrializada tem menos prana?", a: "Sim, segundo a tradição. Alimentos frescos, integrais e recém-preparados carregam mais prana." },
    ],
  }),
  t({
    slug: "kundalini",
    term: "Kundalini",
    category: "filosofia",
    synonyms: ["Energia serpente"],
    related: ["chakra", "sushumna", "prana", "tantra"],
    shortDefinition:
      "Kundalini é a energia espiritual latente descrita pelo tantra e pelo Hatha Yoga, geralmente representada como uma serpente enrolada na base da coluna. Quando desperta, ascende pelo canal central (sushumna), atravessa os chakras e conduz o praticante a estados expandidos de consciência.",
    quickSummary: "Energia espiritual adormecida na base da coluna que pode despertar através da prática.",
    fullDefinition:
      "O despertar de kundalini é o objetivo do Kundalini Yoga, tradicionalmente atingido por combinações precisas de pranayama, mantras, bandhas, mudras e meditação profunda, sob orientação de um mestre qualificado.",
    practicalExample:
      "Aulas de Kundalini Yoga no lineage de Yogi Bhajan combinam kriyas (sequências específicas) com respiração de fogo, mantras e meditação para estimular a energia sutil.",
    whyItMatters:
      "Oferece uma via direta e potente para transformação espiritual, mas requer maturidade e supervisão.",
    advantages: ["Práticas altamente energizantes e transformadoras"],
    disadvantages: ["Desperta forçado pode gerar desequilíbrios físicos e psíquicos"],
    commonMistakes: ["Tentar 'despertar kundalini' sem base ética e psicológica sólida"],
    faq: [
      { q: "Kundalini pode ser perigosa?", a: "Sim, se despertada sem preparo. Sempre pratique com professor experiente e psicoterapia de apoio se necessário." },
    ],
  }),
  t({
    slug: "hatha-yoga",
    term: "Hatha Yoga",
    category: "pratica",
    featured: true,
    synonyms: ["Yoga do esforço"],
    related: ["asana", "pranayama", "vinyasa", "iyengar"],
    shortDefinition:
      "Hatha Yoga é o ramo do yoga focado na purificação e preparação do corpo por meio de asanas, pranayama, bandhas, mudras e kriyas. A palavra une ha (sol) e tha (lua), simbolizando o equilíbrio entre polaridades e é a base de todos os estilos físicos modernos.",
    quickSummary: "Ramo físico do yoga que integra asanas, respiração e purificações.",
    fullDefinition:
      "Sistematizado no texto Hatha Yoga Pradipika (séc. XV) por Svatmarama, o Hatha propõe purificar o corpo para permitir a prática segura de meditação profunda. É o berço direto do yoga moderno.",
    practicalExample:
      "Uma aula tradicional de Hatha inclui aquecimento, sequência de asanas com longa permanência, pranayama e relaxamento final em Savasana.",
    whyItMatters:
      "É a porta de entrada mais segura e completa para o yoga físico.",
    advantages: ["Ritmo acessível", "Ênfase em alinhamento", "Base para todos os estilos modernos"],
    commonMistakes: ["Confundir Hatha com estilo lento — pode ser vigoroso"],
    faq: [
      { q: "Hatha é bom para iniciantes?", a: "Sim, é um dos estilos mais recomendados para começar." },
    ],
  }),
  t({
    slug: "vinyasa",
    term: "Vinyasa",
    category: "pratica",
    synonyms: ["Fluxo", "Vinyasa Flow"],
    related: ["hatha-yoga", "ashtanga", "surya-namaskar"],
    shortDefinition:
      "Vinyasa é o estilo de yoga em que as posturas são encadeadas de forma fluida, sincronizadas com a respiração. Cada movimento acompanha uma inspiração ou expiração, criando uma dança meditativa que trabalha força, mobilidade, cardio e concentração ao mesmo tempo.",
    quickSummary: "Estilo de yoga fluido em que posturas se conectam pela respiração.",
    fullDefinition:
      "Deriva do Ashtanga Vinyasa de Sri K. Pattabhi Jois, mas com sequências mais livres e criativas. Cada aula é única, com um pico (peak pose) planejado.",
    practicalExample:
      "Sequência clássica: Adho Mukha Svanasana → passar o pé → Guerreiro I → Guerreiro II → Trikonasana → retornar ao cão para baixo.",
    whyItMatters:
      "Combina cardio, força e meditação em movimento — ideal para vida moderna.",
    advantages: ["Trabalha corpo inteiro", "Mantém foco pela sincronia respiração-movimento"],
    commonMistakes: ["Priorizar velocidade em detrimento do alinhamento"],
    faq: [
      { q: "Vinyasa é mesmo que Power Yoga?", a: "Power Yoga é um derivado ocidental do Vinyasa, geralmente ainda mais dinâmico e sem componente espiritual explícito." },
    ],
  }),
  t({
    slug: "ashtanga",
    term: "Ashtanga",
    category: "pratica",
    synonyms: ["Ashtanga Vinyasa Yoga"],
    related: ["vinyasa", "hatha-yoga", "surya-namaskar"],
    shortDefinition:
      "Ashtanga é um estilo tradicional e vigoroso de yoga sistematizado por Sri K. Pattabhi Jois em Mysore, na Índia. Segue séries fixas de posturas encadeadas com respiração ujjayi, bandhas e drishti, exigindo disciplina e consistência do praticante.",
    quickSummary: "Estilo dinâmico com séries fixas, praticado seis dias por semana.",
    fullDefinition:
      "As três séries principais são: Primeira Série (Yoga Chikitsa), Intermediária (Nadi Shodhana) e Avançada (Sthira Bhaga). A prática é tradicionalmente feita no método Mysore, com o professor guiando individualmente.",
    practicalExample:
      "A prática abre com 5 Suryas A e 5 Suryas B, passa pelas posturas em pé, sentadas, invertidas e encerra em sequência de fechamento com Padmasana e Savasana.",
    whyItMatters:
      "Constrói força, disciplina e transformação através da repetição diária.",
    advantages: ["Alta transformação física e mental", "Estrutura clara de progressão"],
    disadvantages: ["Ritmo pode ser intenso demais para lesões e desequilíbrios de Vata"],
    commonMistakes: ["Avançar de série sem consolidar posturas anteriores"],
    faq: [
      { q: "Preciso praticar 6x por semana?", a: "Tradicionalmente sim, com folga na lua cheia e nova; iniciantes podem começar com 3x/semana." },
    ],
  }),
  t({
    slug: "iyengar",
    term: "Iyengar Yoga",
    category: "pratica",
    synonyms: ["Yoga com props"],
    related: ["hatha-yoga", "asana"],
    shortDefinition:
      "Iyengar Yoga é o método desenvolvido por B.K.S. Iyengar (1918–2014), reconhecido pelo rigor no alinhamento das posturas, longos tempos de permanência e uso extensivo de props — cintos, blocos, cobertores e cordas — para tornar o yoga acessível a qualquer corpo.",
    quickSummary: "Método de yoga com foco em alinhamento preciso e uso de props.",
    fullDefinition:
      "Iyengar treinou professores em um sistema pedagógico rigoroso, com progressão clara e ênfase terapêutica. É referência mundial em yoga aplicado à saúde e à reabilitação.",
    practicalExample:
      "Trikonasana com bloco embaixo da mão, cinto no pé de trás e apoio na parede é uma variação típica que ensina alinhamento.",
    whyItMatters:
      "Torna posturas complexas acessíveis, reeduca padrões posturais e é útil em contextos terapêuticos.",
    advantages: ["Alinhamento seguro", "Ideal para lesões e reeducação corporal"],
    commonMistakes: ["Achar que props são para 'iniciantes fracos' — são ferramentas de precisão"],
    faq: [
      { q: "Iyengar é lento?", a: "É metódico, mas pode ser intenso pela longa permanência e exigência muscular." },
    ],
  }),
  t({
    slug: "yin-yoga",
    term: "Yin Yoga",
    category: "pratica",
    synonyms: ["Yoga passivo"],
    related: ["hatha-yoga", "meditacao"],
    shortDefinition:
      "Yin Yoga é um estilo passivo e introspectivo em que as posturas são sustentadas por 3 a 7 minutos, atuando sobre os tecidos conjuntivos profundos — fáscias, ligamentos e cápsulas articulares. Inspirado no taoismo, prepara o corpo e a mente para longos períodos de meditação.",
    quickSummary: "Estilo lento e passivo que trabalha fáscias com longa permanência.",
    fullDefinition:
      "Desenvolvido por Paulie Zink e popularizado por Paul Grilley e Sarah Powers. As posturas são realizadas em relaxamento muscular consciente, permitindo o acesso a camadas mais profundas do corpo.",
    practicalExample:
      "Postura da borboleta sentada por 5 minutos, respirando lentamente no baixo ventre, observando o desconforto sem reagir.",
    whyItMatters:
      "Complementa práticas dinâmicas, aumenta amplitude articular e cultiva paciência.",
    advantages: ["Aumenta flexibilidade profunda", "Cultiva quietude mental"],
    disadvantages: ["Pode gerar desconforto intenso — não é 'yoga fácil'"],
    commonMistakes: ["Confundir Yin com yoga restaurativo (que é apoio total em props)"],
    faq: [
      { q: "Yin serve para atletas?", a: "Sim, ajuda a compensar tensões e treinos intensos, melhorando recuperação e mobilidade." },
    ],
  }),
  t({
    slug: "yoga-nidra",
    term: "Yoga Nidra",
    category: "meditacao",
    synonyms: ["Sono yóguico"],
    related: ["meditacao", "savasana", "prana"],
    shortDefinition:
      "Yoga Nidra é uma prática guiada de relaxamento profundo, também chamada de sono yóguico, em que o praticante permanece deitado em Savasana enquanto acessa um estado entre a vigília e o sono. Uma sessão de 45 minutos equivale, segundo estudos, a algumas horas de sono restaurador.",
    quickSummary: "Meditação guiada em posição deitada que gera relaxamento profundo.",
    fullDefinition:
      "Sistematizado por Swami Satyananda Saraswati na segunda metade do séc. XX. Envolve intenção (sankalpa), rotação da consciência pelo corpo, contagem respiratória, visualizações e sensações opostas.",
    practicalExample:
      "Deite-se em Savasana com apoios confortáveis, siga a voz do professor levando atenção a cada parte do corpo, sem se mover.",
    whyItMatters:
      "Alivia insônia, ansiedade e traumas leves, sem exigir esforço físico.",
    advantages: ["Acessível a qualquer pessoa", "Efeito profundo em curto tempo"],
    commonMistakes: ["Dormir na prática todas as vezes — o ideal é permanecer atento"],
    faq: [
      { q: "Yoga Nidra substitui sono?", a: "Complementa, não substitui totalmente, mas 30 min podem repor déficits pontuais." },
    ],
  }),
  t({
    slug: "savasana",
    term: "Savasana",
    category: "pratica",
    synonyms: ["Postura do cadáver", "Relaxamento final"],
    related: ["asana", "yoga-nidra"],
    shortDefinition:
      "Savasana é a postura do cadáver, feita deitada de costas com braços e pernas relaxados, tradicionalmente ao final da prática de asanas. Apesar da aparência simples, é considerada uma das posturas mais importantes e desafiadoras, exigindo total imobilidade e alerta relaxado.",
    quickSummary: "Postura final de relaxamento consciente deitada de costas.",
    fullDefinition:
      "Permite ao sistema nervoso integrar os efeitos da prática. É a ponte natural para meditação e yoga nidra.",
    practicalExample:
      "Deite-se de costas, pés afastados na largura do tapete, palmas viradas para cima, olhos fechados, permanecendo imóvel por 5 a 15 minutos.",
    whyItMatters:
      "Sem Savasana, a prática física fica incompleta. É onde os benefícios se assentam.",
    advantages: ["Reduz frequência cardíaca e pressão", "Integra efeitos da prática"],
    commonMistakes: ["Pular Savasana por pressa"],
    faq: [
      { q: "Posso usar apoio embaixo dos joelhos?", a: "Sim, sobretudo se há tensão lombar. Um rolo ou almofada preserva a coluna." },
    ],
  }),
  t({
    slug: "surya-namaskar",
    term: "Surya Namaskar",
    category: "pratica",
    synonyms: ["Saudação ao Sol"],
    related: ["asana", "vinyasa", "hatha-yoga"],
    shortDefinition:
      "Surya Namaskar é a Saudação ao Sol, uma sequência tradicional de 12 posturas encadeadas com a respiração, praticada tradicionalmente ao amanhecer. Aquece o corpo, ativa circulação, prepara para asanas mais profundas e cultiva devoção pela luz e pela vida.",
    quickSummary: "Sequência de 12 posturas fluidas que saúda o sol.",
    fullDefinition:
      "Existem várias variações: A, B, clássica de Sivananda, Ashtanga A e B. Cada uma tem cadência e postura levemente distintas.",
    practicalExample:
      "Comece em Tadasana, eleve os braços, dobre-se à frente, meia entrada, prancha, chaturanga, cobra ou cão para cima, cão para baixo, e retorne.",
    whyItMatters:
      "Uma prática de 10 rodadas equivale a um treino cardiovascular moderado e aquece o corpo todo.",
    advantages: ["Sequência completa", "Prática mínima diária eficaz"],
    commonMistakes: ["Fazer rápido demais sem respiração consciente"],
    faq: [
      { q: "Quantas rodadas devo fazer?", a: "Começar com 3 a 5, avançar até 12 ou 108 em ocasiões especiais como equinócios." },
    ],
  }),
  t({
    slug: "mudra",
    term: "Mudra",
    category: "pratica",
    synonyms: ["Selo", "Gesto"],
    related: ["asana", "pranayama", "bandha"],
    shortDefinition:
      "Mudra é um gesto simbólico realizado com as mãos, o corpo ou os olhos, que sela e direciona o fluxo de energia sutil. A palavra em sânscrito significa 'selo'. Podem ser praticados de forma independente, durante meditação, pranayama ou dentro de asanas específicas.",
    quickSummary: "Gesto simbólico que canaliza energia sutil, geralmente feito com as mãos.",
    fullDefinition:
      "Existem mudras de mãos (hasta mudra) como Chin Mudra e Gyan Mudra; mudras corporais (kaya mudra) como Viparita Karani; e mudras dos olhos como Shambhavi Mudra.",
    practicalExample:
      "Gyan Mudra: sente-se em meditação e una a ponta do polegar à ponta do indicador, mantendo os demais dedos estendidos.",
    whyItMatters:
      "Ajusta sutis fluxos energéticos e aprofunda estados meditativos.",
    advantages: ["Simples", "Somam efeito à meditação e pranayama"],
    commonMistakes: ["Executar com tensão nas mãos"],
    faq: [
      { q: "Mudras funcionam sem meditação?", a: "Os efeitos são sutis; combinados com atenção e respiração, o resultado é maior." },
    ],
  }),
  t({
    slug: "bandha",
    term: "Bandha",
    category: "pratica",
    synonyms: ["Trava energética"],
    related: ["pranayama", "mudra", "kundalini"],
    shortDefinition:
      "Bandhas são travas energéticas do Hatha Yoga que contraem regiões específicas do corpo para conter e redirecionar o prana. As três principais são Mula Bandha (períneo), Uddiyana Bandha (baixo abdômen) e Jalandhara Bandha (garganta). Juntas formam Maha Bandha.",
    quickSummary: "Travas musculares e energéticas que direcionam o prana no corpo.",
    fullDefinition:
      "São praticadas dentro de pranayama, meditação e transições de asanas avançadas. Aumentam estabilidade e intensidade energética.",
    practicalExample:
      "Mula Bandha: contraia levemente o assoalho pélvico ao final da expiração, mantendo durante a retenção.",
    whyItMatters:
      "Sustentam práticas avançadas e protegem o corpo em posturas invertidas.",
    advantages: ["Aprofunda pranayama", "Estabiliza núcleo em posturas"],
    disadvantages: ["Retenções longas exigem orientação"],
    commonMistakes: ["Contrair com força excessiva"],
    faq: [{ q: "Mula Bandha é o mesmo que Kegel?", a: "Similar, mas Mula Bandha é mais sutil, envolvendo períneo e componente energético." }],
  }),
  t({
    slug: "nadi",
    term: "Nadi",
    category: "filosofia",
    synonyms: ["Canal sutil"],
    related: ["prana", "ida", "pingala", "sushumna", "chakra"],
    shortDefinition:
      "Nadis são canais sutis por onde flui o prana no corpo, análogos aos meridianos da medicina chinesa. Tradições yóguicas descrevem 72.000 nadis; os três principais são Ida, Pingala e Sushumna, que se cruzam ao longo da coluna e sustentam os chakras.",
    quickSummary: "Canais sutis que conduzem prana pelo corpo.",
    fullDefinition:
      "Purificar os nadis (nadi shodhana) é pré-requisito, segundo o Hatha Yoga Pradipika, para o despertar seguro de kundalini.",
    practicalExample:
      "A respiração alternada Nadi Shodhana é o pranayama clássico para limpar e equilibrar Ida e Pingala.",
    whyItMatters:
      "Fornece o mapa energético do corpo utilizado por todo o yoga sutil.",
    advantages: ["Explica efeitos energéticos das práticas"],
    faq: [{ q: "Nadis existem fisicamente?", a: "Não como estruturas anatômicas, mas correspondem a padrões neurais e vasculares reais." }],
  }),
  t({
    slug: "ida",
    term: "Ida",
    category: "filosofia",
    related: ["nadi", "pingala", "sushumna", "prana"],
    shortDefinition:
      "Ida é um dos três principais nadis do corpo sutil, associado à narina esquerda, à energia lunar, feminina, refrescante e introspectiva. Junto com Pingala, forma o par de canais que se entrelaçam ao redor de Sushumna, o canal central, sustentando o equilíbrio do sistema nervoso.",
    quickSummary: "Nadi lunar, feminino, refrescante — narina esquerda.",
    fullDefinition:
      "Quando Ida predomina, a mente tende a estar calma e introvertida. Práticas noturnas e restaurativas ativam Ida.",
    practicalExample: "Respirar exclusivamente pela narina esquerda por 5 minutos ativa Ida — chamado de Chandra Bhedana.",
    whyItMatters: "Compreender polaridades sutis ajuda a escolher práticas conforme o estado.",
    advantages: ["Cultiva calma"],
  }),
  t({
    slug: "pingala",
    term: "Pingala",
    category: "filosofia",
    related: ["nadi", "ida", "sushumna", "prana"],
    shortDefinition:
      "Pingala é o nadi solar, masculino, aquecedor e ativo, associado à narina direita e ao hemisfério cerebral esquerdo. Complementa Ida, o nadi lunar, e sua ativação está ligada à ação, análise, digestão e vitalidade física.",
    quickSummary: "Nadi solar, masculino, ativador — narina direita.",
    fullDefinition: "Predomina em atividades diurnas e momentos de esforço.",
    practicalExample: "Surya Bhedana ativa Pingala — inspirar sempre pela narina direita, expirar pela esquerda.",
    whyItMatters: "Equilíbrio entre Ida e Pingala prepara o despertar do canal central.",
    advantages: ["Energiza"],
  }),
  t({
    slug: "sushumna",
    term: "Sushumna",
    category: "filosofia",
    related: ["nadi", "ida", "pingala", "kundalini", "chakra"],
    shortDefinition:
      "Sushumna é o canal sutil central que percorre a coluna do períneo ao topo da cabeça, atravessando os sete chakras. Quando Ida e Pingala se equilibram, o prana flui por Sushumna, condição necessária para o despertar de kundalini e a experiência de samadhi.",
    quickSummary: "Canal energético central que atravessa os sete chakras.",
    fullDefinition: "O objetivo de muitas práticas de pranayama e bandhas é despertar o fluxo em Sushumna.",
    practicalExample: "Nadi Shodhana prolongado seguido de meditação silenciosa favorece o fluxo em Sushumna.",
    whyItMatters: "É o eixo espiritual do corpo sutil.",
    advantages: ["Sustenta a jornada espiritual"],
  }),
  t({
    slug: "om",
    term: "OM",
    category: "meditacao",
    featured: true,
    synonyms: ["AUM", "Pranava"],
    related: ["mantra", "meditacao"],
    shortDefinition:
      "OM é o som primordial do universo segundo os Upanishads, considerado a vibração-raiz de toda manifestação. Composto por três fonemas (A-U-M) mais o silêncio final, representa vigília, sonho, sono profundo e a consciência transcendente que os permeia. É o mantra mais universal do yoga.",
    quickSummary: "Mantra primordial que representa o som do universo.",
    fullDefinition:
      "Aparece em textos como o Mandukya Upanishad. É considerado a base de todos os outros mantras.",
    practicalExample: "Sente-se ereto, inspire profundamente e cante 'OOOO-UUUU-MMMM' três vezes, sentindo a vibração no peito, na garganta e na cabeça.",
    whyItMatters: "Ancora práticas coletivas e individuais desde há milênios.",
    advantages: ["Vibração física comprovada em ressonância", "Universalidade"],
    faq: [{ q: "OM ou AUM?", a: "São grafias diferentes do mesmo som: A-U-M pronunciados em fluxo formam 'OM'." }],
  }),
  t({
    slug: "namaste",
    term: "Namaste",
    category: "filosofia",
    synonyms: ["Namaskar", "Saudação de yoga"],
    related: ["yoga", "bhakti-yoga"],
    shortDefinition:
      "Namaste é uma saudação sânscrita tradicional da Índia, feita com as palmas unidas à frente do peito e uma leve inclinação da cabeça. Traduzida livremente, significa 'o divino em mim reverencia o divino em você', reconhecendo a essência sagrada presente em cada pessoa.",
    quickSummary: "Saudação yóguica que reconhece a sacralidade no outro.",
    fullDefinition: "Namah (reverência) + te (a você). O gesto associado é Anjali Mudra.",
    practicalExample: "Ao final de uma aula, alunos e professor se saúdam com Namaste em sinal de gratidão.",
    whyItMatters: "Cultiva respeito e humildade no encontro humano.",
    advantages: ["Ritual simples e universal"],
  }),
  t({
    slug: "guru",
    term: "Guru",
    category: "filosofia",
    synonyms: ["Mestre espiritual"],
    related: ["sadhana", "bhakti-yoga", "satsang"],
    shortDefinition:
      "Guru é o mestre espiritual que conduz o discípulo da escuridão (gu) à luz (ru). Na tradição indiana, é aquele que transmite conhecimento vivo através de exemplo, iniciação e presença, não apenas por palavras. A relação guru-discípulo é considerada essencial em muitas escolas.",
    quickSummary: "Mestre espiritual que guia o discípulo da ignorância para a sabedoria.",
    fullDefinition: "Existem gurus internos (o Ser) e externos (uma pessoa). Muitos mestres modernos alertam sobre entrega cega.",
    practicalExample: "Estudar com um professor de yoga qualificado por muitos anos é uma forma contemporânea da relação com um guru.",
    whyItMatters: "Aponta que sabedoria se transmite mais por presença do que por informação.",
    advantages: ["Acelera evolução com orientação"],
    disadvantages: ["Risco de abusos quando a relação perde discernimento"],
  }),
  t({
    slug: "dharma",
    term: "Dharma",
    category: "filosofia",
    popular: true,
    synonyms: ["Dever", "Lei natural"],
    related: ["karma", "yoga", "bhagavad-gita"],
    shortDefinition:
      "Dharma é um conceito central do hinduísmo, budismo e jainismo que engloba dever, lei cósmica, virtude e propósito de vida. No Bhagavad Gita, Krishna orienta Arjuna a agir segundo seu svadharma — o dever próprio de cada indivíduo em harmonia com a ordem universal.",
    quickSummary: "Dever, virtude e ordem natural que sustentam o universo e a vida individual.",
    fullDefinition: "Existem múltiplas camadas: dharma universal (rita), dharma social (varna, ashrama) e dharma individual (svadharma).",
    practicalExample: "Um médico exercendo sua vocação com ética vive seu svadharma; abandoná-la por interesse pessoal pode gerar sofrimento kármico.",
    whyItMatters: "Convida a alinhar vida diária a propósito e responsabilidade.",
    advantages: ["Oferece sentido e direção"],
  }),
  t({
    slug: "karma",
    term: "Karma",
    category: "filosofia",
    popular: true,
    synonyms: ["Ação", "Lei de causa e efeito"],
    related: ["dharma", "samsara", "moksha"],
    shortDefinition:
      "Karma é a lei espiritual de causa e efeito segundo a qual toda ação — física, verbal ou mental — gera consequências correspondentes na vida atual e futuras. A palavra em sânscrito significa simplesmente 'ação'. Não é destino: é responsabilidade dinâmica pela própria vida.",
    quickSummary: "Lei de causa e efeito: ações intencionais geram consequências.",
    fullDefinition:
      "Divide-se em sanchita (acumulado), prarabdha (em curso) e agami/kriyamana (em formação). O Karma Yoga propõe agir sem apego aos frutos como caminho de liberação.",
    practicalExample: "Praticar generosidade constante gera padrões mentais e circunstâncias favoráveis à abundância.",
    whyItMatters: "Desloca o foco da vítima para o agente responsável.",
    advantages: ["Empodera decisões"],
    commonMistakes: ["Interpretar karma como fatalismo"],
    faq: [{ q: "Karma é castigo?", a: "Não. É consequência natural, sem juiz externo — como colher o que se plantou." }],
  }),
  t({
    slug: "samsara",
    term: "Samsara",
    category: "filosofia",
    related: ["karma", "moksha", "dharma"],
    shortDefinition:
      "Samsara é o ciclo de nascimento, morte e renascimento descrito pelas tradições védicas e budistas, movido pelo karma e pela identificação com o ego. Enquanto o ser permanece iludido, transita indefinidamente por essa roda; a liberação (moksha) é a saída consciente do ciclo.",
    quickSummary: "Ciclo de nascimento, morte e renascimento na tradição hindu-budista.",
    fullDefinition: "Simbolizado pela roda (bhavachakra), representa também os ciclos psicológicos que vivemos no dia a dia.",
    practicalExample: "Repetir os mesmos padrões emocionais em diferentes relações é considerado uma forma de samsara psicológica.",
    whyItMatters: "Convida a reconhecer padrões e buscar liberdade.",
    advantages: ["Explica reincidências existenciais"],
  }),
  t({
    slug: "moksha",
    term: "Moksha",
    category: "filosofia",
    synonyms: ["Liberação", "Mukti"],
    related: ["samsara", "samadhi", "karma"],
    shortDefinition:
      "Moksha é o estado de liberação final descrito pelo hinduísmo: o fim do ciclo de samsara e da identificação com o ego individual. É considerado o objetivo supremo da vida humana, alcançado por meio do autoconhecimento, da devoção, da ação desapegada ou da prática meditativa.",
    quickSummary: "Liberação final do ciclo de renascimento e sofrimento.",
    fullDefinition: "Nas escolas Advaita, moksha é o reconhecimento direto da identidade entre atman e Brahman.",
    practicalExample: "A experiência de silêncio profundo em meditação prolongada é considerada um vislumbre parcial de moksha.",
    whyItMatters: "Orienta a busca espiritual mais elevada.",
    advantages: ["Aponta horizonte último"],
  }),
  t({
    slug: "samadhi",
    term: "Samadhi",
    category: "filosofia",
    related: ["yoga", "meditacao", "moksha", "patanjali"],
    shortDefinition:
      "Samadhi é o oitavo e último degrau do Ashtanga de Patanjali, o estado de absorção meditativa em que o observador, o objeto e o ato de observar se fundem. É considerado a culminância do caminho yóguico e o portal para o reconhecimento direto da realidade essencial.",
    quickSummary: "Estado de absorção meditativa; culminância do yoga clássico.",
    fullDefinition:
      "Divide-se em savikalpa (com forma) e nirvikalpa (sem forma). Precedido por dharana e dhyana.",
    practicalExample: "Momentos de perda completa da noção de tempo em meditação profunda são pequenos samadhis.",
    whyItMatters: "Descreve o objetivo experiencial do yoga.",
    advantages: ["Aponta a meta"],
  }),
  t({
    slug: "yamas",
    term: "Yamas",
    category: "filosofia",
    related: ["niyamas", "yoga", "patanjali"],
    shortDefinition:
      "Yamas são as cinco disciplinas éticas do Ashtanga Yoga de Patanjali, orientando a relação com o mundo externo: Ahimsa (não-violência), Satya (verdade), Asteya (não-roubar), Brahmacharya (moderação sensorial) e Aparigraha (não-apego). Formam a base moral de toda a prática.",
    quickSummary: "Cinco princípios éticos que orientam a relação com o mundo.",
    fullDefinition: "São considerados universais — válidos em qualquer tempo, lugar e circunstância.",
    practicalExample: "Praticar ahimsa inclui evitar violência física, verbal e alimentar (muitos yogis são vegetarianos por essa razão).",
    whyItMatters: "Prática sem ética torna-se ginástica; ética sem prática torna-se moralismo.",
    advantages: ["Base moral clara"],
  }),
  t({
    slug: "niyamas",
    term: "Niyamas",
    category: "filosofia",
    related: ["yamas", "yoga", "patanjali", "tapas", "svadhyaya", "ishvara-pranidhana"],
    shortDefinition:
      "Niyamas são as cinco observâncias pessoais do Ashtanga Yoga de Patanjali: Saucha (pureza), Santosha (contentamento), Tapas (disciplina ardente), Svadhyaya (autoestudo) e Ishvara Pranidhana (entrega ao divino). Regulam a relação do praticante consigo mesmo.",
    quickSummary: "Cinco disciplinas internas que estruturam a vida do praticante.",
    fullDefinition: "Complementam os yamas — juntos formam a base ética do yoga.",
    practicalExample: "Santosha se pratica reconhecendo o que já se tem em vez de ruminar sobre o que falta.",
    whyItMatters: "Estruturam maturidade interna necessária para a prática avançada.",
    advantages: ["Guia diário"],
  }),
  t({
    slug: "ahimsa",
    term: "Ahimsa",
    category: "filosofia",
    synonyms: ["Não-violência"],
    related: ["yamas", "dharma"],
    shortDefinition:
      "Ahimsa é o primeiro dos yamas: o princípio da não-violência em pensamento, palavra e ação. Considerado o fundamento ético do yoga e princípio mais elevado por Mahatma Gandhi, inclui não ferir a si mesmo, aos outros seres, à natureza e às próprias ideias.",
    quickSummary: "Não-violência em pensamento, palavra e ação.",
    fullDefinition: "Vai além do vegetarianismo: inclui autocuidado, comunicação não-violenta e sustentabilidade.",
    practicalExample: "Escolher palavras cuidadosas em uma discussão familiar é praticar ahimsa.",
    whyItMatters: "Ética central de todo o yoga.",
    advantages: ["Relacionamentos mais saudáveis"],
  }),
  t({
    slug: "tapas",
    term: "Tapas",
    category: "filosofia",
    synonyms: ["Disciplina", "Ardor"],
    related: ["niyamas", "sadhana", "svadhyaya"],
    shortDefinition:
      "Tapas significa literalmente 'calor' ou 'ardor' e é o niyama que representa a disciplina consciente que queima impurezas físicas, emocionais e mentais. Manifesta-se em práticas regulares, jejuns, silêncios e no compromisso sustentado com o caminho, mesmo diante das dificuldades.",
    quickSummary: "Disciplina ardente que purifica corpo e mente.",
    fullDefinition: "Não é masoquismo, mas engajamento voluntário com desafios que geram crescimento.",
    practicalExample: "Levantar cedo todos os dias para meditar mesmo com sono é uma forma cotidiana de tapas.",
    whyItMatters: "Sem tapas, evolução espiritual estagna.",
    advantages: ["Constrói força de caráter"],
  }),
  t({
    slug: "svadhyaya",
    term: "Svadhyaya",
    category: "filosofia",
    synonyms: ["Autoestudo"],
    related: ["niyamas", "tapas", "meditacao"],
    shortDefinition:
      "Svadhyaya é o niyama do autoestudo, praticado tanto pela leitura e recitação de textos sagrados quanto pela observação atenta dos próprios padrões mentais, emocionais e reativos. É a base do desenvolvimento da consciência psicológica dentro do caminho yóguico.",
    quickSummary: "Autoestudo por textos sagrados e observação de si.",
    fullDefinition: "Combina estudo intelectual (leitura, contemplação) e introspecção experiencial.",
    practicalExample: "Manter um diário de prática, registrando estados emocionais antes e depois do yoga, é svadhyaya.",
    whyItMatters: "Sem autoestudo, meditação torna-se técnica vazia.",
    advantages: ["Autoconhecimento"],
  }),
  t({
    slug: "ishvara-pranidhana",
    term: "Ishvara Pranidhana",
    category: "filosofia",
    synonyms: ["Entrega ao divino"],
    related: ["niyamas", "bhakti-yoga"],
    shortDefinition:
      "Ishvara Pranidhana é o quinto niyama e significa a entrega humilde ao divino, ao mistério maior da vida. Não exige uma crença específica: propõe o reconhecimento de que existe algo maior que o ego individual, oferecendo os frutos da prática e da vida a essa realidade.",
    quickSummary: "Entrega devocional ao divino ou ao mistério maior.",
    fullDefinition: "Patanjali considera este niyama tão poderoso que sozinho pode conduzir ao samadhi.",
    practicalExample: "Dedicar mentalmente a prática de cada dia a algo maior que si transforma a motivação.",
    whyItMatters: "Contrabalança o ego e o esforço.",
    advantages: ["Cultiva humildade"],
  }),
  t({
    slug: "bhakti-yoga",
    term: "Bhakti Yoga",
    category: "filosofia",
    synonyms: ["Yoga da devoção"],
    related: ["mantra", "guru", "karma-yoga", "jnana-yoga"],
    shortDefinition:
      "Bhakti Yoga é o caminho do yoga baseado na devoção amorosa ao divino, manifestado por meio de canto (kirtan), oração, serviço, contemplação e entrega. É considerado o caminho mais acessível na era atual e é central em tradições como o Vaishnavismo e o movimento Hare Krishna.",
    quickSummary: "Caminho do yoga da devoção amorosa ao divino.",
    fullDefinition: "Nove formas clássicas de bhakti incluem escuta, canto, lembrança, serviço aos pés do senhor, oração e entrega.",
    practicalExample: "Participar de um satsang com kirtan é a expressão coletiva mais comum de bhakti.",
    whyItMatters: "Trabalha diretamente o coração, dissolvendo endurecimentos emocionais.",
    advantages: ["Emocionalmente transformador"],
  }),
  t({
    slug: "jnana-yoga",
    term: "Jnana Yoga",
    category: "filosofia",
    synonyms: ["Yoga do conhecimento"],
    related: ["bhakti-yoga", "karma-yoga", "vedanta"],
    shortDefinition:
      "Jnana Yoga é o caminho do yoga do conhecimento e da discriminação, que utiliza autoinvestigação, estudo dos textos sagrados e contemplação para reconhecer diretamente a natureza da realidade. É central no Vedanta Advaita e associado a mestres como Adi Shankara e Ramana Maharshi.",
    quickSummary: "Caminho do conhecimento e da autoinvestigação.",
    fullDefinition: "Utiliza os quatro sadhanas: discriminação, desapego, seis virtudes e desejo de liberação.",
    practicalExample: "A pergunta 'Quem sou eu?' de Ramana Maharshi é a essência prática do Jnana Yoga.",
    whyItMatters: "Vai direto ao coração da questão existencial.",
    advantages: ["Preciso e direto"],
    disadvantages: ["Pode ser árido sem prática devocional"],
  }),
  t({
    slug: "karma-yoga",
    term: "Karma Yoga",
    category: "filosofia",
    synonyms: ["Yoga da ação"],
    related: ["karma", "bhagavad-gita", "bhakti-yoga"],
    shortDefinition:
      "Karma Yoga é o caminho do yoga da ação desinteressada. Proposto por Krishna no Bhagavad Gita, ensina a agir plenamente segundo o próprio dharma, mas sem apego aos frutos da ação. Transforma o trabalho cotidiano em prática espiritual concreta.",
    quickSummary: "Caminho do yoga da ação desapegada, sem apego aos frutos.",
    fullDefinition: "Base do serviço voluntário (seva) e da atuação profissional consciente.",
    practicalExample: "Cozinhar para a família com total presença e sem esperar reconhecimento é karma yoga.",
    whyItMatters: "Torna a vida inteira uma prática espiritual.",
    advantages: ["Integra espiritualidade e cotidiano"],
  }),
  t({
    slug: "sadhana",
    term: "Sadhana",
    category: "programas",
    synonyms: ["Prática espiritual"],
    related: ["tapas", "meditacao", "guru"],
    shortDefinition:
      "Sadhana é a prática espiritual regular e comprometida do praticante, entendida como a disciplina diária que sustenta o caminho de transformação. Pode combinar asanas, pranayama, meditação, mantra, estudo e serviço, adaptada ao momento de vida e à orientação do professor.",
    quickSummary: "Prática espiritual regular e comprometida.",
    fullDefinition: "Sem sadhana consistente, os ensinamentos permanecem apenas conceituais.",
    practicalExample: "Uma sadhana diária pode ser: 20 min de asana, 10 min de pranayama e 20 min de meditação, no mesmo horário todos os dias.",
    whyItMatters: "Consistência é o motor da transformação.",
    advantages: ["Progresso real"],
  }),
  t({
    slug: "satsang",
    term: "Satsang",
    category: "programas",
    synonyms: ["Encontro espiritual"],
    related: ["guru", "bhakti-yoga", "sadhana"],
    shortDefinition:
      "Satsang é o encontro em torno da verdade — literalmente 'estar com o Ser'. Reúne buscadores para escutar ensinamentos, cantar mantras, meditar e dialogar sob orientação de um mestre ou de um facilitador experiente, fortalecendo o campo coletivo de prática.",
    quickSummary: "Encontro coletivo de estudo, canto e prática espiritual.",
    fullDefinition: "O poder da presença coletiva é considerado, em muitas tradições, superior ao da prática solitária.",
    practicalExample: "Um encontro semanal de leitura do Bhagavad Gita seguido por meditação é um satsang típico.",
    whyItMatters: "Cultiva pertencimento e inspiração.",
    advantages: ["Sustenta motivação"],
  }),
  t({
    slug: "sattva",
    term: "Sattva",
    category: "filosofia",
    related: ["rajas", "tamas", "ayurveda"],
    shortDefinition:
      "Sattva é uma das três gunas — qualidades fundamentais da natureza — segundo o Samkhya e o yoga, associada a clareza, harmonia, luz, pureza e equilíbrio. Cultivar sattva por meio de alimentação, práticas e ambientes é considerado essencial para o desenvolvimento espiritual.",
    quickSummary: "Guna da clareza, luz e harmonia.",
    fullDefinition: "Predomina em ambientes limpos, alimentos frescos e mentes tranquilas.",
    practicalExample: "Meditar ao amanhecer em um espaço silencioso e limpo cultiva sattva.",
    whyItMatters: "É a qualidade base para prática espiritual.",
    advantages: ["Clareza mental"],
  }),
  t({
    slug: "rajas",
    term: "Rajas",
    category: "filosofia",
    related: ["sattva", "tamas"],
    shortDefinition:
      "Rajas é a guna do movimento, da paixão e da atividade. Quando equilibrada, gera energia para agir e realizar; em excesso, produz agitação, ansiedade, competitividade e desassossego. Alimentos picantes, estimulantes e excesso de estímulos aumentam rajas.",
    quickSummary: "Guna do movimento, ação e agitação.",
    fullDefinition: "Necessária para vida ativa, mas precisa equilíbrio com sattva.",
    practicalExample: "Excesso de café, redes sociais e prazos elevam rajas.",
    whyItMatters: "Reconhecer excesso rajásico ajuda a proteger a paz interior.",
    advantages: ["Energia para ação em dose certa"],
  }),
  t({
    slug: "tamas",
    term: "Tamas",
    category: "filosofia",
    related: ["sattva", "rajas"],
    shortDefinition:
      "Tamas é a guna da inércia, do peso, da escuridão e da estagnação. Em equilíbrio, permite descanso, sono profundo e assentamento; em excesso, gera letargia, apatia, confusão e apego. Excesso de alimentos processados, sono desregulado e sedentarismo aumentam tamas.",
    quickSummary: "Guna da inércia, peso e escuridão.",
    fullDefinition: "Não é maligna — é necessária para descanso; o problema é o excesso.",
    practicalExample: "Passar o dia em cama consumindo entretenimento aumenta tamas.",
    whyItMatters: "Perceber tamas ajuda a sair de estados depressivos leves.",
    advantages: ["Permite descanso quando equilibrada"],
  }),
  t({
    slug: "vedanta",
    term: "Vedanta",
    category: "filosofia",
    related: ["upanishads", "jnana-yoga", "moksha"],
    shortDefinition:
      "Vedanta significa 'fim dos Vedas' e é um dos seis darshanas clássicos da Índia. Baseia-se principalmente nos Upanishads, no Bhagavad Gita e nos Brahma Sutras, investigando a natureza de Brahman (absoluto), atman (Ser individual) e sua relação. Advaita Vedanta é sua escola mais influente.",
    quickSummary: "Escola filosófica que investiga a natureza última da realidade.",
    fullDefinition: "Advaita Vedanta (Shankara) ensina não-dualidade; Vishishtadvaita (Ramanuja) ensina não-dualidade qualificada; Dvaita (Madhva) ensina dualismo.",
    practicalExample: "Estudar o Upadesha Sahasri de Shankara com um professor é uma introdução clássica ao Vedanta.",
    whyItMatters: "Fornece base filosófica para o Jnana Yoga.",
    advantages: ["Rigor filosófico"],
  }),
  t({
    slug: "upanishads",
    term: "Upanishads",
    category: "filosofia",
    related: ["vedanta", "yoga", "bhagavad-gita"],
    shortDefinition:
      "Upanishads são textos filosóficos que compõem a parte final dos Vedas, redigidos entre 800 e 200 a.C., aproximadamente. Registram diálogos entre mestres e discípulos sobre a natureza da consciência, do Ser (atman) e do absoluto (Brahman). São a base do Vedanta e influenciam todo o yoga posterior.",
    quickSummary: "Textos filosóficos finais dos Vedas, base do Vedanta.",
    fullDefinition: "Existem mais de 200; 10 são considerados principais.",
    practicalExample: "Ler o Isha Upanishad, curto e potente, é uma boa introdução.",
    whyItMatters: "Fundamento filosófico do yoga clássico.",
    advantages: ["Profundidade contemplativa"],
  }),
  t({
    slug: "bhagavad-gita",
    term: "Bhagavad Gita",
    category: "filosofia",
    featured: true,
    synonyms: ["Canto do Bem-Aventurado"],
    related: ["karma-yoga", "bhakti-yoga", "jnana-yoga", "dharma"],
    shortDefinition:
      "Bhagavad Gita é uma escritura sagrada de 700 versos, parte do épico Mahabharata, na qual Krishna orienta o guerreiro Arjuna sobre dever, ação, devoção e conhecimento em meio à crise existencial diante da guerra. É considerado o texto síntese do yoga.",
    quickSummary: "Diálogo espiritual entre Krishna e Arjuna, síntese do yoga.",
    fullDefinition: "Sistematiza os quatro grandes yogas: Karma, Bhakti, Jnana e Raja.",
    practicalExample: "Ler um capítulo por dia durante 18 dias é uma prática clássica de introdução ao Gita.",
    whyItMatters: "Manual prático e filosófico do yoga.",
    advantages: ["Compacto e profundo"],
  }),
  t({
    slug: "patanjali",
    term: "Patanjali",
    category: "filosofia",
    related: ["yoga", "samadhi", "yamas", "niyamas"],
    shortDefinition:
      "Patanjali é o sábio indiano tradicionalmente atribuído como autor dos Yoga Sutras, texto que sistematizou o yoga clássico em 196 aforismos concisos, provavelmente entre 200 a.C. e 200 d.C. Sua obra descreve o caminho óctuplo (Ashtanga) e permanece a principal referência filosófica do yoga.",
    quickSummary: "Sábio autor dos Yoga Sutras, texto base do yoga clássico.",
    fullDefinition: "Também é tradicionalmente associado a textos de gramática e medicina.",
    practicalExample: "Estudar um aforismo por dia com comentários é uma sadhana clássica.",
    whyItMatters: "Sua obra é o marco fundador do yoga como disciplina.",
    advantages: ["Concisão e profundidade"],
  }),
  t({
    slug: "zen",
    term: "Zen",
    category: "meditacao",
    synonyms: ["Chan", "Dhyana"],
    related: ["meditacao", "mindfulness"],
    shortDefinition:
      "Zen é a tradição budista de meditação originada na China (Chan) e desenvolvida no Japão. Ênfase em zazen — a meditação sentada em silêncio — e na experiência direta da realidade, além de qualquer conceito. Influencia profundamente cultura, artes e psicologia contemporâneas.",
    quickSummary: "Escola budista focada em meditação silenciosa (zazen).",
    fullDefinition: "As linhagens mais conhecidas no Ocidente são Soto e Rinzai.",
    practicalExample: "Sentar-se em zazen por 25 minutos, observando a postura e a respiração, sem meta.",
    whyItMatters: "Aponta a simplicidade radical da presença.",
    advantages: ["Simplicidade profunda"],
  }),
  t({
    slug: "kriya",
    term: "Kriya",
    category: "pratica",
    synonyms: ["Ação purificadora"],
    related: ["hatha-yoga", "kundalini", "pranayama"],
    shortDefinition:
      "Kriya significa 'ação' e no yoga designa práticas específicas de purificação e transformação. Inclui os shatkarmas do Hatha Yoga (limpezas físicas), sequências do Kundalini Yoga e técnicas do Kriya Yoga de Paramahansa Yogananda, cada uma com propósitos energéticos precisos.",
    quickSummary: "Práticas de purificação e transformação energética.",
    fullDefinition: "Cada linhagem define suas kriyas — o termo é amplo.",
    practicalExample: "Neti (limpeza nasal com água morna e sal) é uma kriya clássica do Hatha Yoga.",
    whyItMatters: "Prepara o corpo para práticas avançadas.",
    advantages: ["Efeito rápido em purificação"],
  }),
  t({
    slug: "trataka",
    term: "Trataka",
    category: "meditacao",
    synonyms: ["Meditação da chama"],
    related: ["meditacao", "kriya"],
    shortDefinition:
      "Trataka é uma técnica de concentração do Hatha Yoga que consiste em fixar o olhar em um único ponto — geralmente uma chama de vela — sem piscar, até os olhos lacrimejarem. É considerada uma das shatkarmas e uma poderosa preparação para meditação profunda.",
    quickSummary: "Meditação com olhar fixo em ponto único, geralmente uma vela.",
    fullDefinition: "Fortalece concentração e é usada para desenvolver visualização.",
    practicalExample: "Acenda uma vela à altura dos olhos, a 60 cm de distância, e olhe fixamente por 3 a 5 minutos, depois feche os olhos e visualize a chama.",
    whyItMatters: "Excelente para mentes muito dispersas.",
    advantages: ["Foco profundo"],
    disadvantages: ["Não recomendada para epilepsia fotossensível"],
  }),
];

export type { GlossaryTerm } from "./types";