import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { 
  FileText, 
  Scale, 
  Shield, 
  Lock, 
  Globe, 
  Users, 
  AlertTriangle,
  Clock, 
  Mail, 
  MapPin,
  Phone,
  ChevronRight,
  Gavel,
  FileWarning,
  Ban,
  UserX,
  Edit3,
  Settings,
  Power,
  RefreshCw,
  AlertCircle,
  XCircle,
  MessageCircle,
  Database,
  Smartphone,
  FileCheck,
  List,
  BookOpen,
  Copyright,
  UserCheck,
  Activity,
  Layers,
  PenTool,
  Wrench,
  Pause,
  ArrowUp
} from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfUse = () => {
  const [activeSection, setActiveSection] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);

  const tableOfContents = [
    { id: "nossos-servicos", title: "Nossos Serviços", number: 1 },
    { id: "propriedade-intelectual", title: "Direitos de Propriedade Intelectual", number: 2 },
    { id: "representacoes", title: "Representações do Usuário", number: 3 },
    { id: "atividades-proibidas", title: "Atividades Proibidas", number: 4 },
    { id: "contribuicoes-usuario", title: "Contribuições Geradas pelo Usuário", number: 5 },
    { id: "licenca", title: "Contribuição/Licença", number: 6 },
    { id: "gestao-servicos", title: "Gestão de Serviços", number: 7 },
    { id: "vigencia", title: "Vigência e Rescisão", number: 8 },
    { id: "modificacoes", title: "Modificações e Interrupções", number: 9 },
    { id: "lei-aplicavel", title: "Lei Aplicável", number: 10 },
    { id: "controversias", title: "Resolução de Controvérsias", number: 11 },
    { id: "correcoes", title: "Correções", number: 12 },
    { id: "isencao", title: "Isenção de Responsabilidade", number: 13 },
    { id: "limitacoes", title: "Limitações de Responsabilidade", number: 14 },
    { id: "indenizacao", title: "Indenização", number: 15 },
    { id: "dados-usuario", title: "Dados do Usuário", number: 16 },
    { id: "comunicacoes", title: "Comunicações Eletrônicas", number: 17 },
    { id: "diversos", title: "Diversos", number: 18 },
    { id: "contato", title: "Contate-nos", number: 19 },
  ];

  const keyPoints = [
    {
      icon: Globe,
      title: "Nossos Serviços",
      description: "Informações sobre distribuição geográfica e acesso aos nossos serviços em diferentes jurisdições."
    },
    {
      icon: Copyright,
      title: "Propriedade Intelectual",
      description: "Seus direitos e limitações sobre o uso do nosso conteúdo, marcas e código-fonte."
    },
    {
      icon: UserCheck,
      title: "Representações do Usuário",
      description: "Suas declarações e garantias ao utilizar nossos serviços."
    },
    {
      icon: Ban,
      title: "Atividades Proibidas",
      description: "Lista de ações que você não pode realizar ao usar nossos serviços."
    },
    {
      icon: PenTool,
      title: "Contribuições do Usuário",
      description: "Regras para conteúdo que você cria, envia ou compartilha em nossos serviços."
    },
    {
      icon: Scale,
      title: "Lei Aplicável",
      description: "Estes termos são regidos pelas leis do Brasil, com jurisdição em João Pessoa, PB."
    },
    {
      icon: AlertTriangle,
      title: "Isenção de Responsabilidade",
      description: "Os serviços são fornecidos 'como estão', sem garantias expressas ou implícitas."
    },
    {
      icon: MessageCircle,
      title: "Contato",
      description: "Canais disponíveis para esclarecer dúvidas sobre estes termos de uso."
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = tableOfContents.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150;

      setShowBackToTop(window.scrollY > 400);

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(tableOfContents[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <main className="pt-32">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-muted/50 to-background animate-fade-in">
          <div className="container-editorial text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-2 animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Termos de Uso
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Estes Termos Legais constituem um acordo juridicamente vinculativo celebrado entre você e <strong>The Art of Yoga</strong>, regulando o uso dos nossos serviços.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Clock className="w-4 h-4" />
              <span>Última atualização: 17 de dezembro de 2025</span>
            </div>
          </div>
        </section>

        {/* Intro Card */}
        <section className="py-8 md:py-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="container-editorial max-w-4xl">
            <div className="bg-card rounded-lg p-6 md:p-8 shadow-soft border border-border/50">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Scale className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h2 className="font-display text-xl font-light mb-3">Aceitação dos Nossos Termos Legais</h2>
                  <div className="space-y-3 text-muted-foreground leading-relaxed text-base">
                    <p>
                      Nós somos <strong>The Art of Yoga</strong> ("Empresa", "nós", "nosso"). Operamos o site{" "}
                      <a href="https://theartofyoga.org" className="text-primary hover:underline">https://theartofyoga.org</a>, 
                      bem como quaisquer outros produtos e serviços relacionados que façam referência ou estejam vinculados 
                      a estes termos legais (os "Termos Legais") (coletivamente, os "Serviços").
                    </p>
                    <p>Você pode entrar em contato conosco por meio de:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                        <span>E-mail: <a href="mailto:contato@theartofyoga.org" className="text-primary hover:underline">contato@theartofyoga.org</a></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                        <span>Av. Júlia Freire, 1200 - Expedicionários, João Pessoa - PB, 58041-000, Brasil</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">CASO NÃO CONCORDE COM TODOS ESTES TERMOS LEGAIS</strong>, 
                    você está expressamente proibido de usar os Serviços e deve interromper o uso imediatamente. 
                    Ao acessar os Serviços, você concorda que leu, entendeu e aceitou estar vinculado a todos estes Termos Legais.
                  </p>
                </div>
              </div>

              <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                <div className="flex items-start gap-2">
                  <RefreshCw className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Reservamo-nos o direito de fazer alterações a estes Termos Legais a qualquer momento. 
                    É sua responsabilidade revisar periodicamente estes Termos para se manter informado sobre atualizações. 
                    Você será considerado cliente e terá aceitado as alterações ao continuar utilizando os Serviços 
                    após a data de publicação dos Termos revisados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Points Summary */}
        <section className="py-8 md:py-12 bg-muted/30 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="container-editorial">
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl md:text-3xl font-light mb-3">
                Resumo dos Pontos Principais
              </h2>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                Este resumo apresenta os pontos principais dos nossos Termos de Uso. Você pode obter mais detalhes sobre qualquer um desses tópicos nas seções abaixo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {keyPoints.map((point, index) => (
                <div 
                  key={index}
                  className="bg-card p-4 rounded-lg shadow-soft border border-border/30 hover:shadow-medium transition-editorial"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <point.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-medium mb-1">{point.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content with Sidebar */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex gap-8">
              {/* Sticky Sidebar */}
              <aside className="hidden lg:block w-72 flex-shrink-0 animate-fade-in-left" style={{ animationDelay: "0.5s" }}>
                <div className="sticky top-28">
                  <div className="bg-card rounded-lg p-5 shadow-soft border border-border/50 max-h-[calc(100vh-140px)] overflow-y-auto">
                    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/50">
                      <List className="w-4 h-4 text-primary" />
                      <h3 className="font-display text-sm font-medium">Índice</h3>
                    </div>
                    <nav className="space-y-1">
                      {tableOfContents.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className={`w-full text-left flex items-start gap-2 px-2 py-1.5 rounded-md text-xs transition-all ${
                            activeSection === item.id
                              ? "bg-primary/10 text-primary font-medium"
                              : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                          }`}
                        >
                          <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                            activeSection === item.id
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted"
                          }`}>
                            {item.number}
                          </span>
                          <span className="leading-tight">{item.title}</span>
                        </button>
                      ))}
                    </nav>
                  </div>
                </div>
              </aside>

              {/* Main Content */}
              <div className="flex-1 max-w-4xl space-y-8 animate-fade-in-right" style={{ animationDelay: "0.5s" }}>
                {/* Section 1 - Nossos Serviços */}
                <section id="nossos-servicos" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">1</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">Nossos Serviços</h2>
                  </div>

                  <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                    <div className="flex items-start gap-3 mb-4">
                      <Globe className="w-5 h-5 text-primary flex-shrink-0" />
                      <div className="prose-editorial space-y-3 text-base text-muted-foreground">
                        <p>
                          As informações fornecidas ao usar os Serviços não se destinam à distribuição ou uso por qualquer 
                          pessoa ou entidade em qualquer jurisdição ou país onde tal distribuição ou uso seja contrário à lei 
                          ou regulamentação, ou que nos sujeite a qualquer exigência de registro nessa jurisdição ou país.
                        </p>
                        <p>
                          Consequentemente, as pessoas que optarem por acessar os Serviços de outros locais o fazem por 
                          iniciativa própria e são as únicas responsáveis pelo cumprimento das leis locais, se, e na medida 
                          em que estas forem aplicáveis.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 2 - Propriedade Intelectual */}
                <section id="propriedade-intelectual" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">2</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">Direitos de Propriedade Intelectual</h2>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                      <div className="flex items-start gap-3 mb-4">
                        <Copyright className="w-5 h-5 text-primary flex-shrink-0" />
                        <div>
                          <h3 className="font-display text-lg font-light mb-2">Nossa propriedade intelectual</h3>
                          <div className="prose-editorial space-y-3 text-base text-muted-foreground">
                            <p>
                              Somos proprietários ou licenciados de todos os direitos de propriedade intelectual dos nossos 
                              Serviços, incluindo todo o código-fonte, bancos de dados, funcionalidades, software, design do site, 
                              áudio, vídeo, texto, fotografias e elementos gráficos presentes nos Serviços (coletivamente, o "Conteúdo"), 
                              bem como as marcas comerciais, marcas de serviço e logotipos nele contidos (as "Marcas").
                            </p>
                            <p>
                              Nosso conteúdo e nossas marcas são protegidos por leis de direitos autorais e marcas registradas 
                              (e várias outras leis de propriedade intelectual e de concorrência desleal) e tratados ao redor do mundo.
                            </p>
                            <p>
                              O Conteúdo e as Marcas são fornecidos nos ou através dos Serviços "NO ESTADO EM QUE SE ENCONTRAM" 
                              para o seu uso pessoal, não comercial ou para fins comerciais internos apenas.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                      <div className="flex items-start gap-3 mb-4">
                        <BookOpen className="w-5 h-5 text-primary flex-shrink-0" />
                        <div>
                          <h3 className="font-display text-lg font-light mb-2">Seu uso de nossos Serviços</h3>
                          <div className="prose-editorial space-y-3 text-base text-muted-foreground">
                            <p>
                              Sujeito ao seu cumprimento destes Termos Legais, incluindo a seção "ATIVIDADES PROIBIDAS" abaixo, 
                              concedemos a você uma licença não exclusiva, intransferível e revogável para:
                            </p>
                            <ul className="list-disc list-inside space-y-1 ml-4">
                              <li>acessar os Serviços; e</li>
                              <li>baixar ou imprimir uma cópia de qualquer parte do Conteúdo ao qual você tenha obtido acesso de forma adequada,</li>
                            </ul>
                            <p>exclusivamente para seu uso pessoal, não comercial ou para fins comerciais internos.</p>
                            <p>
                              Exceto conforme estabelecido nesta seção ou em outras partes dos nossos Termos Legais, nenhuma parte 
                              dos Serviços, Conteúdo ou Marcas pode ser copiada, reproduzida, agregada, republicada, carregada, 
                              publicada, exibida publicamente, codificada, traduzida, transmitida, distribuída, vendida, licenciada 
                              ou explorada de qualquer outra forma para qualquer finalidade comercial, sem nossa prévia autorização 
                              expressa por escrito.
                            </p>
                            <p>
                              Caso deseje utilizar os Serviços, o Conteúdo ou as Marcas de forma diferente da estabelecida nesta seção, 
                              envie sua solicitação para: <a href="mailto:contato@theartofyoga.org" className="text-primary hover:underline">contato@theartofyoga.org</a>.
                            </p>
                            <div className="mt-4 p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                              <p className="text-sm">
                                <strong className="text-foreground">Importante:</strong> Qualquer violação destes Direitos de Propriedade Intelectual 
                                constituirá uma violação material dos nossos Termos Legais e o seu direito de utilizar os nossos 
                                Serviços será imediatamente rescindido.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 3 - Representações do Usuário */}
                <section id="representacoes" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">3</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">Representações do Usuário</h2>
                  </div>

                  <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                    <div className="flex items-start gap-3 mb-4">
                      <UserCheck className="w-5 h-5 text-primary flex-shrink-0" />
                      <div className="prose-editorial space-y-3 text-base text-muted-foreground">
                        <p>Ao utilizar os Serviços, você declara e garante que:</p>
                        <ul className="space-y-2 ml-4">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span>Você tem capacidade legal e concorda em cumprir estes Termos Legais;</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span>Você não é menor de idade na jurisdição em que reside;</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span>Você não acessará os Serviços por meios automatizados ou não humanos, seja por meio de um bot, script ou de outra forma;</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span>Você não usará os Serviços para qualquer finalidade ilegal ou não autorizada; e</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span>Seu uso dos Serviços não violará nenhuma lei ou regulamento aplicável.</span>
                          </li>
                        </ul>
                        <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                          <p className="text-sm">
                            Caso você forneça informações falsas, imprecisas, desatualizadas ou incompletas, temos o direito 
                            de suspender ou encerrar sua conta e recusar qualquer uso atual ou futuro dos Serviços (ou qualquer parte deles).
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 4 - Atividades Proibidas */}
                <section id="atividades-proibidas" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">4</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">Atividades Proibidas</h2>
                  </div>

                  <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                    <div className="flex items-start gap-3 mb-4">
                      <Ban className="w-5 h-5 text-destructive flex-shrink-0" />
                      <div className="prose-editorial space-y-3 text-base text-muted-foreground">
                        <p>
                          Você não poderá acessar ou usar os Serviços para qualquer finalidade que não seja aquela para a qual 
                          os disponibilizamos. Os Serviços não podem ser usados em conexão com qualquer atividade comercial, 
                          exceto aquelas que sejam especificamente endossadas ou aprovadas por nós.
                        </p>
                        <p className="font-medium text-foreground">Como usuário dos Serviços, você concorda em não:</p>
                        <div className="grid grid-cols-1 gap-2 mt-3">
                          {[
                            "Extrair sistematicamente dados ou outros conteúdos dos Serviços para criar ou compilar uma coleção, compilação, banco de dados ou diretório sem nossa autorização por escrito.",
                            "Enganar, fraudar ou induzir em erro a nós e a outros usuários, especialmente em qualquer tentativa de obter informações confidenciais da conta.",
                            "Contornar, desativar ou interferir de qualquer outra forma com os recursos de segurança dos Serviços.",
                            "Desmerecer, difamar ou prejudicar de qualquer outra forma, em nossa opinião, a nós e/ou aos Serviços.",
                            "Utilizar qualquer informação obtida através dos Serviços para assediar, abusar ou prejudicar outra pessoa.",
                            "Fazer uso indevido de nossos serviços de suporte ou enviar relatos falsos de abuso ou má conduta.",
                            "Utilizar os Serviços de forma incompatível com quaisquer leis ou regulamentos aplicáveis.",
                            "Carregar ou transmitir vírus, cavalos de Tróia ou outros materiais maliciosos.",
                            "Utilizar qualquer sistema automatizado, como scripts, bots, spiders ou scrapers para acessar os Serviços.",
                            "Remover avisos de direitos autorais ou outros avisos de propriedade de qualquer conteúdo.",
                            "Tentar se passar por outro usuário ou usar o nome de usuário de outro usuário.",
                            "Interferir, interromper ou sobrecarregar indevidamente os Serviços ou redes conectadas.",
                            "Assediar, intimidar ou ameaçar nossos funcionários ou agentes.",
                            "Tentar contornar medidas de segurança ou restrição de acesso.",
                            "Copiar ou adaptar o software dos Serviços, incluindo códigos HTML, JavaScript, PHP, etc.",
                            "Realizar engenharia reversa, descompilação ou desmontagem de qualquer software dos Serviços.",
                            "Usar os Serviços como parte de qualquer esforço para competir conosco ou gerar receita sem autorização.",
                            "Coletar endereços de e-mail ou nomes de usuário para envio de e-mails não solicitados ou criar contas falsas."
                          ].map((item, index) => (
                            <div key={index} className="flex items-start gap-2 p-2 bg-muted/30 rounded-md">
                              <XCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 5 - Contribuições do Usuário */}
                <section id="contribuicoes-usuario" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">5</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">Contribuições Geradas pelo Usuário</h2>
                  </div>

                  <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                    <div className="flex items-start gap-3 mb-4">
                      <PenTool className="w-5 h-5 text-primary flex-shrink-0" />
                      <div className="prose-editorial space-y-3 text-base text-muted-foreground">
                        <p>
                          Os Serviços podem oferecer aos usuários a oportunidade de criar, enviar, publicar ou compartilhar 
                          conteúdo, incluindo texto, vídeos, áudios, fotos, comentários, sugestões ou informações pessoais 
                          (coletivamente, "Contribuições").
                        </p>
                        <p>As Contribuições podem ser visualizadas por outros usuários e por sites de terceiros.</p>
                        <p className="font-medium text-foreground">Ao criar ou disponibilizar quaisquer Contribuições, você declara e garante que:</p>
                        <ul className="space-y-2 ml-4">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span>É o único proprietário ou detém todos os direitos necessários sobre o conteúdo;</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span>O conteúdo não viola direitos de terceiros nem leis aplicáveis;</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span>O conteúdo não é difamatório, ofensivo, obsceno, ilegal ou prejudicial;</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span>Nós podemos exibir, reproduzir e usar suas Contribuições conforme descrito nestes Termos.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 6 - Licença */}
                <section id="licenca" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">6</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">Contribuição/Licença</h2>
                  </div>

                  <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                    <div className="flex items-start gap-3 mb-4">
                      <FileCheck className="w-5 h-5 text-primary flex-shrink-0" />
                      <div className="prose-editorial space-y-3 text-base text-muted-foreground">
                        <p>
                          Você mantém a propriedade integral de todas as suas Contribuições e dos direitos de propriedade 
                          intelectual associados.
                        </p>
                        <p>
                          Ao enviar Contribuições, você nos concede uma licença mundial, irrevogável, não exclusiva, isenta de 
                          royalties e sublicenciável para usar, reproduzir, modificar, distribuir, exibir publicamente e criar 
                          trabalhos derivados com base em suas Contribuições, exclusivamente para operar, promover e melhorar 
                          nossos Serviços.
                        </p>
                        <p>
                          Não reivindicamos qualquer direito de propriedade sobre suas Contribuições. No entanto, você reconhece 
                          que não somos responsáveis pelo conteúdo que você envia e que você será o único responsável por 
                          quaisquer danos decorrentes de suas Contribuições.
                        </p>
                        <p className="font-medium text-foreground">
                          Você concorda em nos isentar de toda responsabilidade relacionada às suas Contribuições.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 7 - Gestão de Serviços */}
                <section id="gestao-servicos" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">7</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">Gestão de Serviços</h2>
                  </div>

                  <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                    <div className="flex items-start gap-3 mb-4">
                      <Wrench className="w-5 h-5 text-primary flex-shrink-0" />
                      <div className="prose-editorial space-y-3 text-base text-muted-foreground">
                        <p>Reservamo-nos o direito, mas não a obrigação, de:</p>
                        <ul className="space-y-2 ml-4">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span>Monitorar os Serviços em busca de violações destes Termos;</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span>Tomar medidas legais contra usuários que violarem a lei ou estes Termos;</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span>Recusar, restringir ou desativar qualquer Contribuição;</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span>Remover conteúdos que sobrecarreguem nossos sistemas;</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span>Gerenciar os Serviços para proteger nossos direitos e garantir seu funcionamento.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 8 - Vigência e Rescisão */}
                <section id="vigencia" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">8</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">Vigência e Rescisão</h2>
                  </div>

                  <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                    <div className="flex items-start gap-3 mb-4">
                      <Power className="w-5 h-5 text-primary flex-shrink-0" />
                      <div className="prose-editorial space-y-3 text-base text-muted-foreground">
                        <p>Estes Termos permanecerão em vigor enquanto você usar os Serviços.</p>
                        <p>Reservamo-nos o direito, a nosso exclusivo critério e sem aviso prévio, de:</p>
                        <ul className="space-y-2 ml-4">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span>Recusar, suspender ou encerrar seu acesso aos Serviços;</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span>Bloquear endereços IP;</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span>Excluir suas contribuições ou dados.</span>
                          </li>
                        </ul>
                        <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                          <p className="text-sm">
                            Caso sua conta seja encerrada, você fica proibido de criar nova conta em seu nome, nome falso ou de terceiros.
                            Reservamo-nos o direito de tomar medidas legais civis, criminais ou cautelares.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 9 - Modificações e Interrupções */}
                <section id="modificacoes" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">9</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">Modificações e Interrupções</h2>
                  </div>

                  <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                    <div className="flex items-start gap-3 mb-4">
                      <Pause className="w-5 h-5 text-primary flex-shrink-0" />
                      <div className="prose-editorial space-y-3 text-base text-muted-foreground">
                        <p>Podemos alterar, modificar, suspender ou descontinuar os Serviços a qualquer momento, sem aviso prévio.</p>
                        <p>
                          Não garantimos disponibilidade contínua dos Serviços. Você concorda que não somos responsáveis por 
                          perdas ou danos decorrentes de inatividade, falhas técnicas ou manutenção.
                        </p>
                        <p>
                          Nada nestes Termos será interpretado como obrigação de fornecer suporte, atualizações ou correções.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 10 - Lei Aplicável */}
                <section id="lei-aplicavel" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">10</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">Lei Aplicável</h2>
                  </div>

                  <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                    <div className="flex items-start gap-3 mb-4">
                      <Scale className="w-5 h-5 text-primary flex-shrink-0" />
                      <div className="prose-editorial space-y-3 text-base text-muted-foreground">
                        <p>Estes Termos Legais serão regidos pelas leis do <strong>Brasil</strong>.</p>
                        <p>
                          Você concorda irrevogavelmente que os tribunais de <strong>João Pessoa, Paraíba</strong>, terão 
                          jurisdição exclusiva para resolver quaisquer disputas relativas a estes Termos.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 11 - Resolução de Controvérsias */}
                <section id="controversias" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">11</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">Resolução de Controvérsias</h2>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                      <div className="flex items-start gap-3 mb-4">
                        <MessageCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <div>
                          <h3 className="font-display text-lg font-light mb-2">Negociações informais</h3>
                          <p className="text-base text-muted-foreground">
                            As partes concordam em tentar resolver qualquer disputa por negociação informal por pelo menos 
                            30 dias antes de qualquer arbitragem.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                      <div className="flex items-start gap-3 mb-4">
                        <Gavel className="w-5 h-5 text-primary flex-shrink-0" />
                        <div>
                          <h3 className="font-display text-lg font-light mb-2">Arbitragem vinculante</h3>
                          <div className="prose-editorial space-y-3 text-base text-muted-foreground">
                            <p>
                              Qualquer disputa será resolvida por arbitragem vinculante perante o Tribunal Internacional de 
                              Arbitragem Comercial da Câmara Europeia de Arbitragem (Bruxelas, Bélgica), com:
                            </p>
                            <ul className="space-y-1 ml-4">
                              <li><strong>Sede:</strong> Bruxelas</li>
                              <li><strong>Idioma:</strong> inglês</li>
                              <li><strong>Número de árbitros:</strong> 1</li>
                              <li><strong>Lei aplicável:</strong> direito substantivo da Bélgica</li>
                            </ul>
                            <h4 className="font-medium text-foreground mt-4">Restrições:</h4>
                            <ul className="space-y-1 ml-4">
                              <li>Não há arbitragem coletiva.</li>
                              <li>Não há representação de terceiros ou classe.</li>
                              <li>Cada disputa é individual.</li>
                            </ul>
                            <h4 className="font-medium text-foreground mt-4">Exceções (não se aplica a):</h4>
                            <ul className="space-y-1 ml-4">
                              <li>Disputas sobre propriedade intelectual;</li>
                              <li>Violações de privacidade, roubo ou acesso não autorizado;</li>
                              <li>Pedidos de medidas cautelares.</li>
                            </ul>
                            <p>
                              Se alguma cláusula for invalidada, a disputa será resolvida nos tribunais de João Pessoa, PB, Brasil.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 12 - Correções */}
                <section id="correcoes" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">12</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">Correções</h2>
                  </div>

                  <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                    <div className="flex items-start gap-3 mb-4">
                      <Edit3 className="w-5 h-5 text-primary flex-shrink-0" />
                      <div className="prose-editorial space-y-3 text-base text-muted-foreground">
                        <p>
                          Podem haver erros, imprecisões ou omissões nos Serviços (incluindo preços, disponibilidade, descrições).
                        </p>
                        <p>
                          Reservamo-nos o direito de corrigir, atualizar ou alterar essas informações a qualquer momento, 
                          sem aviso prévio.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 13 - Isenção de Responsabilidade */}
                <section id="isencao" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">13</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">Isenção de Responsabilidade</h2>
                  </div>

                  <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                    <div className="flex items-start gap-3 mb-4">
                      <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0" />
                      <div className="prose-editorial space-y-3 text-base text-muted-foreground">
                        <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/20 mb-4">
                          <p className="font-medium text-foreground">
                            OS SERVIÇOS SÃO FORNECIDOS "NO ESTADO EM QUE SE ENCONTRAM" E "COMO DISPONÍVEIS".
                          </p>
                          <p className="mt-2">VOCÊ USA OS SERVIÇOS POR SUA PRÓPRIA CONTA E RISCO.</p>
                        </div>
                        <p>
                          RENUNCIAMOS A TODAS AS GARANTIAS, EXPRESSAS OU IMPLÍCITAS, INCLUINDO COMERCIABILIDADE, 
                          ADEQUAÇÃO A UMA FINALIDADE ESPECÍFICA E NÃO VIOLAÇÃO.
                        </p>
                        <p className="font-medium text-foreground">NÃO GARANTIMOS:</p>
                        <ul className="space-y-1 ml-4">
                          <li>Precisão do conteúdo;</li>
                          <li>Ausência de vírus ou falhas;</li>
                          <li>Continuidade ou segurança dos Serviços;</li>
                          <li>Resultados de práticas de yoga, meditação ou bem-estar sugeridas.</li>
                        </ul>
                        <p className="font-medium text-foreground mt-4">NÃO SOMOS RESPONSÁVEIS POR:</p>
                        <ul className="space-y-1 ml-4">
                          <li>Danos pessoais ou materiais;</li>
                          <li>Acesso não autorizado a dados;</li>
                          <li>Interrupções de serviço;</li>
                          <li>Conteúdo de sites de terceiros;</li>
                          <li>Produtos ou serviços anunciados por terceiros.</li>
                        </ul>
                        <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                          <p className="text-sm">
                            <strong>Aviso importante:</strong> O uso de informações de bem-estar é de sua única responsabilidade. 
                            Consulte sempre um profissional de saúde antes de iniciar práticas físicas ou mentais.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 14 - Limitações de Responsabilidade */}
                <section id="limitacoes" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">14</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">Limitações de Responsabilidade</h2>
                  </div>

                  <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                    <div className="flex items-start gap-3 mb-4">
                      <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                      <div className="prose-editorial space-y-3 text-base text-muted-foreground">
                        <div className="p-4 bg-muted/50 rounded-lg mb-4">
                          <p className="font-medium text-foreground">
                            EM NENHUMA HIPÓTESE SEREMOS RESPONSÁVEIS POR DANOS INDIRETOS, INCIDENTAIS, CONSEQUENCIAIS, 
                            EXEMPLARES OU PUNITIVOS, INCLUINDO LUCROS CESSANTES OU PERDA DE DADOS.
                          </p>
                        </div>
                        <p>Nossa responsabilidade total estará limitada ao menor valor entre:</p>
                        <ul className="space-y-1 ml-4">
                          <li>O valor pago por você a nós (se houver);</li>
                          <li>US$ 100,00 (cem dólares americanos).</li>
                        </ul>
                        <p className="mt-4 text-sm">
                          Certas leis (EUA, UE, etc.) podem não permitir essas limitações. Se aplicáveis a você, 
                          direitos adicionais podem existir.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 15 - Indenização */}
                <section id="indenizacao" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">15</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">Indenização</h2>
                  </div>

                  <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                    <div className="flex items-start gap-3 mb-4">
                      <FileWarning className="w-5 h-5 text-primary flex-shrink-0" />
                      <div className="prose-editorial space-y-3 text-base text-muted-foreground">
                        <p>
                          Você concorda em defender, indenizar e isentar a The Art of Yoga, suas afiliadas, diretores, 
                          agentes e funcionários de quaisquer reivindicações, perdas, danos, responsabilidades, 
                          honorários advocatícios ou despesas decorrentes de:
                        </p>
                        <ul className="space-y-2 ml-4">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span>Seu uso dos Serviços;</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span>Violação destes Termos;</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span>Violação de suas garantias;</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span>Violação de direitos de terceiros (incluindo IP);</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span>Atos prejudiciais contra outros usuários.</span>
                          </li>
                        </ul>
                        <p>
                          Reservamo-nos o direito de assumir a defesa exclusiva de qualquer reivindicação. 
                          Você deverá cooperar conosco.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 16 - Dados do Usuário */}
                <section id="dados-usuario" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">16</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">Dados do Usuário</h2>
                  </div>

                  <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                    <div className="flex items-start gap-3 mb-4">
                      <Database className="w-5 h-5 text-primary flex-shrink-0" />
                      <div className="prose-editorial space-y-3 text-base text-muted-foreground">
                        <p>Conservaremos dados transmitidos por você para operar os Serviços.</p>
                        <p><strong className="text-foreground">Você é único responsável por todos os dados que enviar.</strong></p>
                        <p>
                          Não seremos responsáveis por perda, corrupção ou indisponibilidade de seus dados. 
                          Você renuncia a qualquer direito de ação decorrente disso.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 17 - Comunicações Eletrônicas */}
                <section id="comunicacoes" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">17</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">Comunicações Eletrônicas, Transações e Assinaturas</h2>
                  </div>

                  <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                    <div className="flex items-start gap-3 mb-4">
                      <Smartphone className="w-5 h-5 text-primary flex-shrink-0" />
                      <div className="prose-editorial space-y-3 text-base text-muted-foreground">
                        <p>
                          Ao usar os Serviços, você consente com comunicações eletrônicas (e-mails, notificações, formulários).
                        </p>
                        <p>Tais comunicações cumprem qualquer exigência legal de forma escrita.</p>
                        <p>
                          Você concorda com o uso de assinaturas, contratos, pedidos e registros eletrônicos, 
                          e renuncia a exigências de assinatura física ou documentos em papel.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 18 - Diversos */}
                <section id="diversos" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">18</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">Diversos</h2>
                  </div>

                  <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                    <div className="flex items-start gap-3 mb-4">
                      <Layers className="w-5 h-5 text-primary flex-shrink-0" />
                      <div className="prose-editorial space-y-3 text-base text-muted-foreground">
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span>Estes Termos Legais constituem o acordo integral entre você e nós.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span>Nossa falha em exigir o cumprimento de qualquer cláusula não constitui renúncia.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span>Podemos ceder nossos direitos e obrigações a terceiros.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span>Se qualquer cláusula for considerada inválida, as demais permanecem válidas.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span>Não há relação de parceria, joint venture, emprego ou agência entre você e nós.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span>Estes Termos não serão interpretados contra nós apenas por termos redigido o documento.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 19 - Contato */}
                <section id="contato" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">19</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">Contate-nos</h2>
                  </div>

                  <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                    <div className="flex items-start gap-3 mb-4">
                      <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                      <div className="prose-editorial space-y-4 text-base text-muted-foreground">
                        <p>Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="p-4 bg-muted/50 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <Mail className="w-4 h-4 text-primary" />
                              <span className="font-medium text-foreground">E-mail</span>
                            </div>
                            <a href="mailto:contato@theartofyoga.org" className="text-primary hover:underline text-sm">
                              contato@theartofyoga.org
                            </a>
                          </div>
                          <div className="p-4 bg-muted/50 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <Lock className="w-4 h-4 text-primary" />
                              <span className="font-medium text-foreground">Privacidade</span>
                            </div>
                            <a href="mailto:privacidade@theartofyoga.org" className="text-primary hover:underline text-sm">
                              privacidade@theartofyoga.org
                            </a>
                          </div>
                          <div className="p-4 bg-muted/50 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <MapPin className="w-4 h-4 text-primary" />
                              <span className="font-medium text-foreground">Endereço</span>
                            </div>
                            <p className="text-sm">
                              Av. Júlia Freire, 1200 - Expedicionários<br />
                              João Pessoa - PB, 58041-000, Brasil
                            </p>
                          </div>
                          <div className="p-4 bg-muted/50 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <Phone className="w-4 h-4 text-primary" />
                              <span className="font-medium text-foreground">Telefone</span>
                            </div>
                            <a href="tel:+5511997361698" className="text-primary hover:underline text-sm">
                              (+55) 11 99736 1698
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

              </div>
            </div>
          </div>
        </section>

        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:bg-primary/90 transition-all z-50"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </main>
    );
};

export default TermsOfUse;