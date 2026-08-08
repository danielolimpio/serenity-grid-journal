import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { 
  Cookie, 
  Shield, 
  Settings, 
  BarChart3,
  Target,
  Clock, 
  Mail, 
  MapPin,
  ChevronRight,
  Globe,
  Smartphone,
  Eye,
  Zap,
  RefreshCw,
  ExternalLink,
  CheckCircle,
  XCircle,
  AlertCircle,
  List,
  ArrowUp,
  Monitor,
  FileText,
  Users,
  Lock
} from "lucide-react";
import { Link } from "react-router-dom";

const CookiesPolicy = () => {
  const [activeSection, setActiveSection] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);

  const tableOfContents = [
    { id: "o-que-sao", title: "O que são cookies?", number: 1 },
    { id: "por-que-usamos", title: "Por que usamos cookies?", number: 2 },
    { id: "como-controlar", title: "Como posso controlar os cookies?", number: 3 },
    { id: "cookies-utilizados", title: "Cookies específicos utilizados", number: 4 },
    { id: "outras-tecnologias", title: "Outras tecnologias de rastreamento", number: 5 },
    { id: "cookies-flash", title: "Cookies Flash", number: 6 },
    { id: "publicidade", title: "Publicidade direcionada", number: 7 },
    { id: "atualizacoes", title: "Atualizações desta política", number: 8 },
    { id: "contato", title: "Onde obter mais informações?", number: 9 },
  ];

  const cookieTypes = [
    {
      icon: Shield,
      title: "Cookies Essenciais",
      description: "Indispensáveis para o funcionamento básico do site. Sem eles, recursos como navegação entre páginas, carregamento de conteúdo ou acesso a áreas seguras não funcionariam adequadamente.",
      color: "bg-green-500/10 text-green-600"
    },
    {
      icon: Settings,
      title: "Cookies de Desempenho e Funcionalidade",
      description: "Melhoram sua experiência, lembrando preferências (como idioma ou layout), mantendo sua sessão ativa ou personalizando partes do site.",
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      icon: BarChart3,
      title: "Cookies de Análise e Personalização",
      description: "Coletam dados agregados e anônimos sobre como os visitantes usam o site. Essas informações nos ajudam a entender o comportamento dos usuários e otimizar o conteúdo.",
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      icon: Target,
      title: "Cookies de Publicidade",
      description: "Usados por terceiros para exibir anúncios relevantes com base nos seus interesses, limitar a repetição de anúncios e medir a eficácia de campanhas.",
      color: "bg-orange-500/10 text-orange-600"
    }
  ];

  const specificCookies = [
    {
      category: "Desempenho e Funcionalidade",
      cookies: [
        { name: "rc::h", provider: "Google", purpose: "Melhoria da performance e funcionalidade do site.", expiration: "Persistente" }
      ]
    },
    {
      category: "Análise (Google Analytics)",
      cookies: [
        { name: "_ga", provider: "Google Analytics", purpose: "Distinguir usuários individuais e coletar dados sobre o uso do site.", expiration: "1 ano, 1 mês e 4 dias" },
        { name: "_ga_#", provider: "Google Analytics", purpose: "Distinguir usuários individuais e coletar dados sobre o uso do site.", expiration: "1 ano, 1 mês e 4 dias" }
      ]
    },
    {
      category: "Publicidade (DoubleClick / Google)",
      cookies: [
        { name: "test_cookie", provider: "DoubleClick (Google)", purpose: "Verificar se o navegador aceita cookies e permitir a exibição de anúncios personalizados.", expiration: "15 minutos" }
      ]
    }
  ];

  const browsers = [
    { name: "Google Chrome", url: "https://support.google.com/chrome/answer/95647" },
    { name: "Mozilla Firefox", url: "https://support.mozilla.org/pt-BR/kb/cookies-informacoes-sites-armazenam-no-computador" },
    { name: "Safari (macOS/iOS)", url: "https://support.apple.com/pt-br/guide/safari/sfri11471/mac" },
    { name: "Microsoft Edge", url: "https://support.microsoft.com/pt-br/microsoft-edge/excluir-cookies-no-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" },
    { name: "Opera", url: "https://help.opera.com/en/latest/web-preferences/#cookies" }
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
        <Helmet>
          <title>Política de Cookies | A Arte do Yoga</title>
          <meta name="description" content="Política de Cookies do A Arte do Yoga. Saiba como utilizamos cookies e tecnologias semelhantes para melhorar sua experiência." />
          <link rel="canonical" href="https://theartofyoga.org/cookies" />
          <meta property="og:title" content="Política de Cookies | A Arte do Yoga" />
          <meta property="og:url" content="https://theartofyoga.org/cookies" />
          <meta property="og:image" content="https://theartofyoga.org/assets/og-image.jpg" />
          <meta property="og:site_name" content="A Arte do Yoga" />
          <meta property="og:locale" content="pt_BR" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="https://theartofyoga.org/assets/og-image.jpg" />
        </Helmet>
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-muted/50 to-background animate-fade-in">
          <div className="container-editorial text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-2 animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <Cookie className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Política de Cookies
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Esta Política de Cookies explica como <strong>The Art of Yoga</strong> utiliza cookies e tecnologias 
              semelhantes para reconhecê-lo quando você visita nosso site.
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
                  <FileText className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h2 className="font-display text-xl font-light mb-3">Sobre esta Política</h2>
                  <div className="space-y-3 text-muted-foreground leading-relaxed text-base">
                    <p>
                      Esta política detalha o que são essas tecnologias, por que as usamos e quais são seus direitos 
                      sobre o uso delas ao visitar{" "}
                      <a href="https://theartofyoga.org" className="text-primary hover:underline">https://theartofyoga.org</a>.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Informação importante:</strong> Em alguns casos, podemos usar 
                    cookies para coletar informações que, quando combinadas com outros dados que possuímos sobre você, 
                    podem se qualificar como informações pessoais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Types Summary */}
        <section className="py-8 md:py-12 bg-muted/30 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="container-editorial">
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl md:text-3xl font-light mb-3">
                Tipos de Cookies que Utilizamos
              </h2>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                Utilizamos diferentes categorias de cookies para diferentes finalidades. Conheça cada uma delas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cookieTypes.map((type, index) => (
                <div 
                  key={index}
                  className="bg-card p-4 rounded-lg shadow-soft border border-border/30 hover:shadow-medium transition-editorial"
                >
                  <div className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${type.color} flex items-center justify-center`}>
                      <type.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-medium mb-1">{type.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{type.description}</p>
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
                {/* Section 1 - O que são cookies */}
                <section id="o-que-sao" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">1</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">O que são cookies?</h2>
                  </div>

                  <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                    <div className="flex items-start gap-3 mb-4">
                      <Cookie className="w-5 h-5 text-primary flex-shrink-0" />
                      <div className="prose-editorial space-y-3 text-base text-muted-foreground">
                        <p>
                          Cookies são pequenos arquivos de dados armazenados no seu computador, smartphone ou outro 
                          dispositivo quando você visita um site. Eles são amplamente utilizados por proprietários de 
                          sites para garantir o funcionamento adequado das páginas, melhorar a experiência do usuário 
                          e coletar dados para análise e otimização.
                        </p>
                        <p className="font-medium text-foreground">Existem dois tipos principais:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <div className="p-4 bg-muted/50 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <Globe className="w-4 h-4 text-primary" />
                              <span className="font-medium text-foreground">Cookies Próprios</span>
                            </div>
                            <p className="text-sm">
                              Criados pelo próprio site que você está visitando — no caso, https://theartofyoga.org.
                            </p>
                          </div>
                          <div className="p-4 bg-muted/50 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <Users className="w-4 h-4 text-primary" />
                              <span className="font-medium text-foreground">Cookies de Terceiros</span>
                            </div>
                            <p className="text-sm">
                              Criados por empresas externas (como provedores de análise, redes sociais ou plataformas de publicidade).
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 2 - Por que usamos cookies */}
                <section id="por-que-usamos" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">2</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">Por que usamos cookies?</h2>
                  </div>

                  <div className="space-y-4">
                    {cookieTypes.map((type, index) => (
                      <div key={index} className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                        <div className="flex items-start gap-3">
                          <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${type.color} flex items-center justify-center`}>
                            <type.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-display text-lg font-light mb-2">{index + 1}. {type.title}</h3>
                            <p className="text-base text-muted-foreground">{type.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section 3 - Como controlar cookies */}
                <section id="como-controlar" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">3</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">Como posso controlar os cookies?</h2>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                      <div className="flex items-start gap-3 mb-4">
                        <Settings className="w-5 h-5 text-primary flex-shrink-0" />
                        <div>
                          <h3 className="font-display text-lg font-light mb-2">1. Gerenciador de Consentimento de Cookies</h3>
                          <div className="prose-editorial space-y-3 text-base text-muted-foreground">
                            <p>
                              Quando você acessa nosso site pela primeira vez, um banner de notificação exibe o 
                              Gerenciador de Consentimento de Cookies, onde você pode:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
                              <div className="flex items-center gap-2 p-3 bg-green-500/10 rounded-lg">
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                <span className="text-sm font-medium text-foreground">Aceitar todos os cookies</span>
                              </div>
                              <div className="flex items-center gap-2 p-3 bg-red-500/10 rounded-lg">
                                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                                <span className="text-sm font-medium text-foreground">Rejeitar todos (exceto essenciais)</span>
                              </div>
                              <div className="flex items-center gap-2 p-3 bg-blue-500/10 rounded-lg">
                                <Settings className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                <span className="text-sm font-medium text-foreground">Personalizar preferências</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                      <div className="flex items-start gap-3 mb-4">
                        <Monitor className="w-5 h-5 text-primary flex-shrink-0" />
                        <div>
                          <h3 className="font-display text-lg font-light mb-2">2. Configurações do navegador</h3>
                          <div className="prose-editorial space-y-3 text-base text-muted-foreground">
                            <p>
                              Você também pode gerenciar ou bloquear cookies nas configurações do seu navegador. 
                              Abaixo estão os links diretos para os principais navegadores:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-3">
                              {browsers.map((browser, idx) => (
                                <a 
                                  key={idx}
                                  href={browser.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-editorial"
                                >
                                  <ExternalLink className="w-4 h-4 text-primary flex-shrink-0" />
                                  <span className="text-sm font-medium text-foreground">{browser.name}</span>
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">
                          <strong className="text-foreground">Atenção:</strong> Recusar certos cookies pode limitar 
                          funcionalidades do site ou afetar negativamente sua experiência de navegação.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 4 - Cookies específicos */}
                <section id="cookies-utilizados" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">4</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">Cookies específicos utilizados</h2>
                  </div>

                  <div className="space-y-4">
                    {specificCookies.map((category, catIdx) => (
                      <div key={catIdx} className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                        <h3 className="font-display text-lg font-light mb-4">{category.category}</h3>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b border-border/50">
                                <th className="text-left py-2 px-3 font-medium text-foreground">Nome</th>
                                <th className="text-left py-2 px-3 font-medium text-foreground">Fornecedor</th>
                                <th className="text-left py-2 px-3 font-medium text-foreground">Finalidade</th>
                                <th className="text-left py-2 px-3 font-medium text-foreground">Expiração</th>
                              </tr>
                            </thead>
                            <tbody>
                              {category.cookies.map((cookie, cookieIdx) => (
                                <tr key={cookieIdx} className="border-b border-border/30 last:border-0">
                                  <td className="py-2 px-3 font-mono text-xs text-primary">{cookie.name}</td>
                                  <td className="py-2 px-3 text-muted-foreground">{cookie.provider}</td>
                                  <td className="py-2 px-3 text-muted-foreground">{cookie.purpose}</td>
                                  <td className="py-2 px-3 text-muted-foreground">{cookie.expiration}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ))}
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Nota:</strong> A lista acima pode ser atualizada conforme 
                        mudamos nossos provedores ou funcionalidades. Sempre nos esforçamos para manter esta política atualizada.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 5 - Outras tecnologias */}
                <section id="outras-tecnologias" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">5</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">Outras tecnologias de rastreamento</h2>
                  </div>

                  <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                    <div className="flex items-start gap-3 mb-4">
                      <Eye className="w-5 h-5 text-primary flex-shrink-0" />
                      <div className="prose-editorial space-y-3 text-base text-muted-foreground">
                        <p>Sim, além dos cookies, podemos utilizar tecnologias semelhantes, como:</p>
                        <ul className="space-y-2 ml-4">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span><strong>Web beacons</strong> (também chamados de "pixels de rastreamento" ou "gifs transparentes")</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span><strong>Tags de script</strong></span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span><strong>Pixels de evento</strong></span>
                          </li>
                        </ul>
                        <p className="font-medium text-foreground mt-4">Essas tecnologias nos ajudam a:</p>
                        <ul className="space-y-2 ml-4">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span>Saber se um e-mail foi aberto;</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span>Medir a eficácia de campanhas de marketing;</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span>Entender como os usuários interagem com anúncios ou conteúdos específicos.</span>
                          </li>
                        </ul>
                        <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                          <p className="text-sm">
                            Essas ferramentas geralmente dependem de cookies para funcionar corretamente, e sua eficácia 
                            pode ser reduzida se você bloquear ou excluir cookies.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 6 - Cookies Flash */}
                <section id="cookies-flash" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">6</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">Cookies Flash</h2>
                  </div>

                  <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                    <div className="flex items-start gap-3 mb-4">
                      <Zap className="w-5 h-5 text-primary flex-shrink-0" />
                      <div className="prose-editorial space-y-3 text-base text-muted-foreground">
                        <p>
                          Atualmente, <strong>não utilizamos cookies Flash</strong> (também conhecidos como Local Shared 
                          Objects – LSOs) em nosso site.
                        </p>
                        <p>
                          No entanto, caso passemos a usá-los no futuro (por exemplo, em aplicações interativas ou 
                          vídeos legados), esta política será atualizada e você poderá gerenciá-los por meio do{" "}
                          <a 
                            href="https://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager.html" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            Painel de Configurações do Adobe Flash Player
                          </a>.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 7 - Publicidade direcionada */}
                <section id="publicidade" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">7</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">Publicidade direcionada</h2>
                  </div>

                  <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                    <div className="flex items-start gap-3 mb-4">
                      <Target className="w-5 h-5 text-primary flex-shrink-0" />
                      <div className="prose-editorial space-y-3 text-base text-muted-foreground">
                        <p>
                          <strong>Sim.</strong> Terceiros (como redes de anúncios) podem instalar cookies no seu 
                          dispositivo ao visitar nosso site para:
                        </p>
                        <ul className="space-y-2 ml-4">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span>Exibir anúncios personalizados com base em seu histórico de navegação;</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span>Medir o desempenho de campanhas publicitárias;</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span>Evitar que o mesmo anúncio seja mostrado repetidamente.</span>
                          </li>
                        </ul>
                        <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                          <p className="text-sm">
                            As informações coletadas por essas tecnologias não nos permitem identificar diretamente 
                            seu nome, e-mail ou outros dados pessoais, a menos que você voluntariamente nos forneça 
                            essas informações (por exemplo, ao se inscrever em uma newsletter).
                          </p>
                        </div>
                        <p className="font-medium text-foreground mt-4">
                          Se desejar optar por não receber anúncios personalizados, você pode:
                        </p>
                        <ul className="space-y-2 ml-4">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span>Usar o Gerenciador de Consentimento no site;</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span>
                              Acessar:{" "}
                              <a 
                                href="http://optout.networkadvertising.org" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                              >
                                http://optout.networkadvertising.org
                              </a>
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span>Ou ativar o Controle Global de Privacidade (GPC) em seu navegador (suportado por The Art of Yoga).</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 8 - Atualizações */}
                <section id="atualizacoes" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">8</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">Atualizações desta Política</h2>
                  </div>

                  <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                    <div className="flex items-start gap-3 mb-4">
                      <RefreshCw className="w-5 h-5 text-primary flex-shrink-0" />
                      <div className="prose-editorial space-y-3 text-base text-muted-foreground">
                        <p>Podemos atualizar esta Política periodicamente para refletir:</p>
                        <ul className="space-y-2 ml-4">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span>Mudanças nos cookies ou tecnologias utilizadas;</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span>Novas funcionalidades do site;</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span>Exigências legais ou regulatórias.</span>
                          </li>
                        </ul>
                        <p>
                          A data da "Última atualização" no topo desta página indica quando a versão mais recente 
                          foi publicada. Recomendamos que você a consulte regularmente.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 9 - Contato */}
                <section id="contato" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">9</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">Onde obter mais informações?</h2>
                  </div>

                  <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                    <div className="flex items-start gap-3 mb-4">
                      <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                      <div className="prose-editorial space-y-4 text-base text-muted-foreground">
                        <p>
                          Se tiver dúvidas, preocupações ou desejar exercer seus direitos relacionados a cookies e 
                          tecnologias de rastreamento, entre em contato conosco:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="p-4 bg-muted/50 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <Mail className="w-4 h-4 text-primary" />
                              <span className="font-medium text-foreground">E-mail geral</span>
                            </div>
                            <a href="mailto:contato@theartofyoga.org" className="text-primary hover:underline text-sm">
                              contato@theartofyoga.org
                            </a>
                          </div>
                          <div className="p-4 bg-muted/50 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <Lock className="w-4 h-4 text-primary" />
                              <span className="font-medium text-foreground">E-mail de privacidade</span>
                            </div>
                            <a href="mailto:privacidade@theartofyoga.org" className="text-primary hover:underline text-sm">
                              privacidade@theartofyoga.org
                            </a>
                          </div>
                          <div className="p-4 bg-muted/50 rounded-lg md:col-span-2">
                            <div className="flex items-center gap-2 mb-2">
                              <MapPin className="w-4 h-4 text-primary" />
                              <span className="font-medium text-foreground">Endereço</span>
                            </div>
                            <p className="text-sm">
                              Av. Júlia Freire, 1200 - Expedicionários, João Pessoa - PB, 58041-000, Brasil
                            </p>
                          </div>
                        </div>
                        <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                          <p className="text-sm text-center font-medium text-foreground">
                            Estamos comprometidos com a transparência e o respeito à sua privacidade.
                          </p>
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

export default CookiesPolicy;