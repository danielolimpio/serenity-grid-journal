import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { 
  Shield, 
  FileText, 
  Users, 
  Lock, 
  Eye, 
  Database, 
  Globe, 
  Cookie, 
  UserCheck, 
  Clock, 
  Mail, 
  MapPin,
  AlertCircle,
  CheckCircle,
  ChevronRight,
  Scale,
  Baby,
  RefreshCw,
  MessageCircle,
  Trash2,
  Share2,
  Link as LinkIcon,
  Settings,
  ShieldCheck,
  FileSearch,
  Smartphone,
  List
} from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("");

  const tableOfContents = [
    { id: "info-coletamos", title: "Que informações coletamos?", number: 1 },
    { id: "processamento", title: "Como processamos suas informações?", number: 2 },
    { id: "bases-legais", title: "Em que bases legais nos apoiamos?", number: 3 },
    { id: "compartilhamento", title: "Quando e com quem compartilhamos?", number: 4 },
    { id: "sites-terceiros", title: "Nossa posição sobre sites de terceiros", number: 5 },
    { id: "cookies", title: "Cookies e tecnologias de rastreamento", number: 6 },
    { id: "logins-sociais", title: "Logins em redes sociais", number: 7 },
    { id: "retencao", title: "Por quanto tempo guardamos suas informações?", number: 8 },
    { id: "seguranca", title: "Como mantemos suas informações seguras?", number: 9 },
    { id: "menores", title: "Coletamos informações de menores?", number: 10 },
    { id: "direitos", title: "Quais são seus direitos de privacidade?", number: 11 },
    { id: "dnt", title: "Controles para recursos de não rastrear", number: 12 },
    { id: "eua", title: "Direitos específicos para residentes dos EUA", number: 13 },
    { id: "outras-regioes", title: "Outras regiões com direitos específicos", number: 14 },
    { id: "atualizacoes", title: "Atualizamos este aviso?", number: 15 },
    { id: "contato", title: "Como entrar em contato conosco?", number: 16 },
    { id: "revisar-dados", title: "Como revisar, atualizar ou excluir seus dados?", number: 17 },
  ];

  const keyPoints = [
    {
      icon: FileSearch,
      title: "Que informações processamos?",
      description: "Quando você visita, usa ou navega em nossos Serviços, podemos processar informações pessoais dependendo de como você interage conosco e com os Serviços, das escolhas que você faz e dos produtos e recursos que você usa."
    },
    {
      icon: ShieldCheck,
      title: "Processamos informações sensíveis?",
      description: "Algumas dessas informações podem ser consideradas \"especiais\" ou \"sensíveis\" em certas jurisdições, por exemplo, sua origem racial ou étnica, orientação sexual e crenças religiosas. Não processamos informações pessoais sensíveis."
    },
    {
      icon: Users,
      title: "Coletamos informações de terceiros?",
      description: "Podemos coletar informações de bancos de dados públicos, parceiros de marketing, plataformas de mídia social e outras fontes externas."
    },
    {
      icon: Settings,
      title: "Como processamos suas informações?",
      description: "Processamos suas informações para fornecer, aprimorar e administrar nossos Serviços, comunicar-nos com você, para fins de segurança e prevenção de fraudes e para cumprir a lei."
    },
    {
      icon: Share2,
      title: "Compartilhamos informações pessoais?",
      description: "Podemos compartilhar informações em situações específicas e com partes específicas/terceiros."
    },
    {
      icon: Lock,
      title: "Como protegemos suas informações?",
      description: "Temos medidas adequadas de segurança organizacional e processos e procedimentos técnicos implementados para proteger suas informações pessoais."
    },
    {
      icon: Scale,
      title: "Quais são seus direitos?",
      description: "Dependendo da sua localização geográfica, a legislação de privacidade aplicável pode lhe conferir certos direitos em relação às suas informações pessoais."
    },
    {
      icon: MessageCircle,
      title: "Como exercer seus direitos?",
      description: "A maneira mais fácil de exercer seus direitos é através de submeter uma solicitação de acesso ao titular dos dados ou entrando em contato conosco."
    }
  ];

  const dataCategories = [
    { category: "A. Identificadores", examples: "Dados de contato, como nome verdadeiro, pseudônimo, endereço postal, número de telefone fixo ou celular, identificador pessoal único, identificador online, endereço IP, endereço de e-mail e nome da conta.", collected: false },
    { category: "B. Informações pessoais (Lei CA)", examples: "Nome, informações de contato, formação acadêmica, emprego, histórico profissional e informações financeiras.", collected: false },
    { category: "C. Classificação protegida", examples: "Sexo, idade, data de nascimento, raça e etnia, nacionalidade, estado civil e outros dados demográficos.", collected: false },
    { category: "D. Informações comerciais", examples: "Informações sobre transações, histórico de compras, detalhes financeiros e informações de pagamento.", collected: false },
    { category: "E. Informações biométricas", examples: "Impressões digitais e impressões vocais.", collected: false },
    { category: "F. Atividade de Internet", examples: "Histórico de navegação, histórico de pesquisa, comportamentos de interesse online e interações com nossos sites, aplicativos, sistemas e anúncios.", collected: false },
    { category: "G. Dados de geolocalização", examples: "Localização do dispositivo.", collected: false },
    { category: "H. Informações de áudio/visual", examples: "Imagens e gravações de áudio, vídeo ou chamadas criadas em conexão com nossas atividades comerciais.", collected: false },
    { category: "I. Informações profissionais", examples: "Informações de contato comercial para que possamos lhe fornecer nossos serviços em nível empresarial, ou cargo, histórico profissional e qualificações.", collected: false },
    { category: "J. Informações sobre educação", examples: "Informações de cadastro e registros de alunos.", collected: false },
    { category: "K. Inferências", examples: "Inferências extraídas de qualquer uma das informações pessoais coletadas listadas acima para criar um perfil ou resumo sobre preferências e características.", collected: false },
    { category: "L. Informações sensíveis", examples: "—", collected: false },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = tableOfContents.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150;

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

  return (
    <main className="pt-32">
        <Helmet>
          <title>Política de Privacidade | A Arte do Yoga</title>
          <meta name="description" content="Política de Privacidade do A Arte do Yoga. Saiba como coletamos, usamos e protegemos suas informações pessoais em nossa plataforma." />
          <link rel="canonical" href="https://theartofyoga.org/politica-privacidade" />
          <meta property="og:title" content="Política de Privacidade | A Arte do Yoga" />
          <meta property="og:description" content="Política de Privacidade do A Arte do Yoga. Saiba como coletamos, usamos e protegemos suas informações pessoais em nossa plataforma." />
          <meta property="og:url" content="https://theartofyoga.org/politica-privacidade" />
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
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Política de Privacidade
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Este Aviso de Privacidade para <strong>The Art of Yoga</strong> ("nós", "nos" ou "nosso") descreve como e por que podemos acessar, coletar, armazenar, usar e/ou compartilhar ("processar") suas informações pessoais quando você usa nossos serviços.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Clock className="w-4 h-4" />
              <span>Última atualização: 13 de dezembro de 2025</span>
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
                  <h2 className="font-display text-xl font-light mb-3">Quando este Aviso se aplica?</h2>
                  <div className="space-y-3 text-muted-foreground leading-relaxed text-base">
                    <p>Este Aviso de Privacidade se aplica quando você:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                        <span>Visita nosso site em <a href="https://theartofyoga.org" className="text-primary hover:underline">https://theartofyoga.org</a> ou qualquer outro site que contenha um link para este Aviso de Privacidade.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                        <span>Interage conosco de outras maneiras relacionadas, incluindo ações de marketing ou eventos.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Tem dúvidas ou preocupações?</strong> A leitura deste Aviso de Privacidade ajudará você a entender seus direitos e opções em relação à privacidade. Somos responsáveis por tomar decisões sobre como suas informações pessoais são processadas. Se você não concordar com nossas políticas e práticas, por favor, não utilize nossos Serviços. Caso ainda tenha dúvidas ou preocupações, entre em contato conosco pelo endereço: <a href="mailto:privacidade@theartofyoga.org" className="text-primary hover:underline">privacidade@theartofyoga.org</a>.
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
                Este resumo apresenta os pontos principais do nosso Aviso de Privacidade. Você pode obter mais detalhes sobre qualquer um desses tópicos nas seções abaixo.
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

            <div className="mt-6 text-center">
              <p className="text-base text-muted-foreground">
                Quer saber mais sobre o que fazemos com as informações que coletamos? Leia o Aviso de Privacidade na íntegra abaixo.
              </p>
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
                {/* Section 1 */}
                <section id="info-coletamos" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">1</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">Que Informações Coletamos?</h2>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                      <div className="flex items-start gap-3 mb-4">
                        <Database className="w-5 h-5 text-primary flex-shrink-0" />
                        <div>
                          <h3 className="font-display text-xl font-light mb-1">Informações pessoais que você nos divulga</h3>
                          <p className="text-sm text-muted-foreground italic mb-3">Resumindo: Coletamos informações pessoais que você nos fornece.</p>
                        </div>
                      </div>
                      
                      <div className="prose-editorial space-y-3 text-base text-muted-foreground">
                        <p>
                          Coletamos informações pessoais que você nos fornece voluntariamente quando você participar de atividades nos Serviços ou ao entrar em contato conosco, você demonstra interesse em obter informações sobre nós, nossos produtos e serviços.
                        </p>
                        
                        <h4 className="font-display text-lg text-foreground mt-4 mb-2">Informações pessoais fornecidas por você</h4>
                        <p>
                          As informações pessoais que coletamos dependem do contexto de suas interações conosco e com os Serviços, das escolhas que você faz e dos produtos e recursos que você utiliza. As informações pessoais que coletamos podem incluir o seguinte:
                        </p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>nomes</li>
                          <li>endereços de e-mail</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                      <div className="flex items-start gap-3">
                        <ShieldCheck className="w-5 h-5 text-accent-foreground flex-shrink-0" />
                        <div>
                          <h4 className="font-display text-lg font-light mb-1">Informação sensível</h4>
                          <p className="text-base text-muted-foreground">
                            <strong>Não processamos informações sensíveis.</strong>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                      <div className="flex items-start gap-3">
                        <Smartphone className="w-5 h-5 text-primary flex-shrink-0" />
                        <div>
                          <h4 className="font-display text-lg font-light mb-1">Dados de login de redes sociais</h4>
                          <p className="text-base text-muted-foreground leading-relaxed">
                            Podemos oferecer a opção de você se cadastrar conosco usando os dados da sua conta de rede social, como Facebook, X ou outra. Se você optar por se cadastrar dessa forma, coletaremos algumas informações do seu perfil do provedor da rede social, conforme descrito na seção intitulada "Como lidamos com seus logins em redes sociais?" abaixo.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-accent-foreground flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">
                          Todas as informações pessoais que você nos fornecer devem ser verdadeiras, completas e precisas, e você deve nos notificar sobre quaisquer alterações nessas informações pessoais.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 2 */}
                <section id="processamento" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">2</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">Como Processamos Suas Informações?</h2>
                  </div>

                  <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                    <p className="text-sm text-muted-foreground italic mb-4">
                      Resumindo: Processamos suas informações para fornecer, aprimorar e administrar nossos Serviços, comunicar-nos com você, para fins de segurança e prevenção de fraudes, e para cumprir a lei. Processamos as informações pessoais para os seguintes fins listados abaixo. Também podemos processar suas informações para outros fins somente com sua prévia autorização explícita/consentimento.
                    </p>
                    
                    <div className="prose-editorial space-y-3 text-base text-muted-foreground">
                      <p>
                        Processamos suas informações pessoais por diversos motivos, dependendo de como você interage com nossos Serviços, incluindo:
                      </p>
                      
                      <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
                        <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm">
                          <strong className="text-foreground">Para salvaguardar ou proteger os interesses vitais de um indivíduo.</strong> Podemos processar suas informações quando necessário para salvaguardar ou proteger os interesses vitais de um indivíduo, como, por exemplo, para prevenir danos.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 3 */}
                <section id="bases-legais" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">3</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">Em Que Bases Legais Nos Apoiamos?</h2>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                      <p className="text-sm text-muted-foreground italic">
                        Resumindo: Só processamos as suas informações pessoais quando acreditamos ser necessário e temos uma razão legal válida (ou seja, uma justificativa legal), fundamento jurídico para fazê-lo de acordo com a legislação aplicável, como com o seu consentimento, para cumprir as leis, para prestar serviços ou para celebrar um contrato ou completar nossas obrigações contratuais, para proteger seus direitos, ou para complementarmos legítimos interesses comerciais.
                      </p>
                    </div>

                    {/* EU/UK Section */}
                    <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                      <div className="flex items-center gap-2 mb-4">
                        <Globe className="w-5 h-5 text-primary" />
                        <h3 className="font-display text-xl font-light">Se você estiver localizado na UE ou no Reino Unido</h3>
                      </div>
                      
                      <div className="prose-editorial space-y-3 text-base text-muted-foreground">
                        <p>
                          O Regulamento Geral de Proteção de Dados (RGPD) e o RGPD do Reino Unido exigem que expliquemos as bases legais válidas em que nos apoiamos para processar as suas informações pessoais. Assim, podemos nos basear nas seguintes bases legais para processar as suas informações pessoais:
                        </p>
                        
                        <div className="space-y-3 mt-4">
                          <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium text-foreground text-sm">Consentimento</p>
                              <p className="text-sm mt-1">Podemos processar suas informações se você nos tiver dado permissão (ou seja, Consentimento) para usar suas informações pessoais para uma finalidade específica. Você pode retirar seu consentimento a qualquer momento.</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
                            <Scale className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium text-foreground text-sm">Obrigações Legais</p>
                              <p className="text-sm mt-1">Podemos processar suas informações quando acreditamos ser necessário para cumprir nossas obrigações legais, como cooperar com um órgão de aplicação da lei ou agência reguladora, exercer ou defender nossos direitos legais ou divulgar suas informações como prova em litígios nos quais estejamos envolvidos.</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
                            <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium text-foreground text-sm">Interesses vitais</p>
                              <p className="text-sm mt-1">Podemos processar suas informações quando acreditarmos ser necessário para proteger seus interesses vitais ou os interesses vitais de terceiros, como em situações que envolvam ameaças potenciais à segurança de qualquer pessoa.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Canada Section */}
                    <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                      <div className="flex items-center gap-2 mb-4">
                        <MapPin className="w-5 h-5 text-primary" />
                        <h3 className="font-display text-xl font-light">Se você estiver localizado no Canadá</h3>
                      </div>
                      
                      <div className="prose-editorial space-y-3 text-base text-muted-foreground">
                        <p>
                          Podemos processar as suas informações se nos tiver dado permissão específica (ou seja, consentimento expresso) para usar suas informações pessoais para uma finalidade específica ou em situações em que sua permissão possa ser inferida (ou seja, "consentimento implícito"). Você pode retirar seu consentimento a qualquer momento.
                        </p>
                        
                        <p className="mt-3">
                          Em alguns casos excepcionais, podemos estar legalmente autorizados, de acordo com a legislação aplicável, a processar suas informações sem o seu consentimento, incluindo, por exemplo:
                        </p>
                        
                        <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                          <li>Se a coleta for claramente do interesse de um indivíduo e o consentimento não puder ser obtido em tempo hábil</li>
                          <li>Para investigações, detecção e prevenção de fraudes</li>
                          <li>Para transações comerciais, desde que determinadas condições sejam atendidas</li>
                          <li>Se estiver contido em uma declaração de testemunha e a coleta for necessária para avaliar, processar ou liquidar uma reclamação de seguro</li>
                          <li>Para identificar pessoas feridas, doentes ou falecidas e comunicar com os familiares</li>
                          <li>Se tivermos motivos razoáveis para acreditar que um indivíduo foi, é ou pode ser vítima de abuso financeiro</li>
                          <li>Se for razoável esperar que a coleta e o uso com consentimento comprometam a disponibilidade ou a precisão das informações, e se a coleta for razoável para fins relacionados à investigação de uma violação de um acordo ou de uma contravenção das leis do Canadá ou de uma província</li>
                          <li>Caso a divulgação seja necessária para cumprir uma infração, mandado, ordem judicial ou normas do tribunal relativas à produção de registros</li>
                          <li>Se foi produzido por um indivíduo no exercício de suas funções, negócios ou profissão, e a coleta é compatível com os propósitos para os quais a informação foi produzida</li>
                          <li>Se a coleção se destina exclusivamente a fins jornalísticos, artísticos ou literários</li>
                          <li>Se a informação for de domínio público e estiver especificada nos regulamentos</li>
                        </ul>
                        
                        <p className="mt-3">
                          Podemos divulgar informações anonimizadas para projetos de pesquisa ou estatística aprovados, sujeitos à supervisão ética e a compromissos de confidencialidade.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 4 */}
                <section id="compartilhamento" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">4</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">Quando e Com Quem Compartilhamos?</h2>
                  </div>

                  <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                    <p className="text-sm text-muted-foreground italic mb-4">
                      Resumindo: Podemos compartilhar informações em situações específicas descritas nesta seção e/ou com os seguintes terceiros.
                    </p>
                    
                    <div className="prose-editorial space-y-3 text-base text-muted-foreground">
                      <p>
                        Nós poderemos precisar compartilhar suas informações pessoais nas seguintes situações:
                      </p>
                      
                      <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg mt-3">
                        <Share2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-foreground text-sm">Transferências de Negócios</p>
                          <p className="text-sm mt-1">Podemos compartilhar ou transferir suas informações em conexão com, ou durante negociações de, qualquer fusão, venda de ativos da empresa, financiamento ou aquisição de toda ou parte de nossa empresa por outra empresa.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 5 */}
                <section id="sites-terceiros" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">5</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">Nossa Posição Sobre Sites de Terceiros</h2>
                  </div>

                  <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                    <p className="text-sm text-muted-foreground italic mb-4">
                      Resumindo: Não nos responsabilizamos pela segurança de quaisquer informações que você compartilhe com terceiros aos quais possamos fornecer links ou que anunciem em nossos Serviços, mas que não sejam afiliados a eles.
                    </p>
                    
                    <div className="prose-editorial space-y-3 text-base text-muted-foreground">
                      <p>
                        Os Serviços podem conter links para sites, serviços online ou aplicativos móveis de terceiros e/ou anúncios de terceiros que não são afiliados a nós, que podem direcionar para outros sites, serviços ou aplicativos. Portanto, não oferecemos nenhuma garantia em relação a esses terceiros e não nos responsabilizamos por quaisquer perdas ou danos causados pelo uso de tais sites, serviços ou aplicativos de terceiros.
                      </p>
                      
                      <p>
                        A inclusão de um link para um site, serviço ou aplicativo de terceiro não implica em endosso de nossa parte. Não podemos garantir a segurança e a privacidade dos dados que você fornece a sites de terceiros. Quaisquer dados coletados por terceiros não são cobertos por este Aviso de Privacidade.
                      </p>
                      
                      <p>
                        Não nos responsabilizamos pelo conteúdo ou políticas de privacidade e segurança ou pelas políticas de terceiros, incluindo outros sites, serviços ou aplicativos que possam estar vinculados aos Serviços. Você deve revisar as políticas desses terceiros e contatá-los diretamente para esclarecer suas dúvidas.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 6 */}
                <section id="cookies" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">6</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">Cookies e Tecnologias de Rastreamento</h2>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                      <div className="flex items-center gap-2 mb-3">
                        <Cookie className="w-5 h-5 text-primary" />
                        <p className="text-sm text-muted-foreground italic">
                          Resumindo: Podemos usar cookies e outras tecnologias de rastreamento para coletar e armazenar suas informações.
                        </p>
                      </div>
                      
                      <div className="prose-editorial space-y-3 text-base text-muted-foreground">
                        <p>
                          Podemos usar cookies e tecnologias de rastreamento semelhantes (como web beacons e pixels) para coletar informações quando você interage com nossos Serviços. Algumas tecnologias de rastreamento online nos ajudam a manter a segurança de nossos Serviços, previne falhas, corrige erros, salva suas preferências e auxilia nas funções básicas do site.
                        </p>
                        
                        <p>
                          Também permitimos que terceiros e prestadores de serviços usem tecnologias de rastreamento online em nossos Serviços para fins de análise e publicidade, incluindo para ajudar a gerenciar e exibir anúncios, personalizar anúncios de acordo com seus interesses ou enviar lembretes de carrinho de compras abandonado (dependendo de suas preferências de comunicação). Os terceiros e prestadores de serviços usam sua tecnologia para fornecer publicidade sobre produtos e serviços personalizados de acordo com seus interesses, que podem aparecer em nossos Serviços ou em outros sites.
                        </p>
                        
                        <p>
                          Na medida em que essas tecnologias de rastreamento online sejam consideradas uma "venda"/"compartilhamento" (o que inclui publicidade direcionada, conforme definido pelas leis aplicáveis) de acordo com as leis estaduais dos EUA aplicáveis, você pode optar por não participar dessas tecnologias de rastreamento online enviando uma solicitação conforme descrito abaixo na seção "Os residentes dos Estados Unidos têm direitos específicos de privacidade?"
                        </p>
                        
                        <p>
                          Informações específicas sobre como utilizamos essas tecnologias e como você pode recusar determinados cookies estão descritas em nosso Aviso de Cookies.
                        </p>
                      </div>
                    </div>

                    <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                      <div className="flex items-center gap-2 mb-3">
                        <Eye className="w-5 h-5 text-primary" />
                        <h3 className="font-display text-lg font-light">Google Analytics</h3>
                      </div>
                      
                      <div className="prose-editorial space-y-3 text-base text-muted-foreground">
                        <p>
                          Podemos compartilhar suas informações com o Google Analytics para rastrear e analisar a utilização dos Serviços. Os recursos de publicidade do Google Analytics que podemos usar incluem: Relatórios de dados demográficos e interesses do Google Analytics.
                        </p>
                        
                        <p>
                          Para desativar o rastreamento do Google Analytics em todos os Serviços, acesse <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout</a>. Você pode desativar os recursos de publicidade do Google Analytics nas Configurações de anúncios e nas Configurações de anúncios para aplicativos móveis.
                        </p>
                        
                        <p>
                          Outras opções de desativação incluem <a href="http://optout.networkadvertising.org/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">http://optout.networkadvertising.org/</a> e <a href="http://www.networkadvertising.org/mobile-choice" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">http://www.networkadvertising.org/mobile-choice</a>. Para obter mais informações sobre as práticas de privacidade do Google, visite a página Privacidade e Termos do Google.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 7 */}
                <section id="logins-sociais" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">7</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">Logins em Redes Sociais</h2>
                  </div>

                  <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                    <p className="text-sm text-muted-foreground italic mb-4">
                      Resumindo: Se você optar por se cadastrar ou fazer login em nossos Serviços usando uma conta de mídia social, poderemos ter acesso a certas informações sobre você.
                    </p>
                    
                    <div className="prose-editorial space-y-3 text-base text-muted-foreground">
                      <p>
                        Nossos Serviços oferecem a você a possibilidade de se cadastrar e fazer login usando os dados da sua conta de mídia social de terceiros (como seu login do Facebook ou X). Ao optar por essa opção, receberemos algumas informações do seu perfil do provedor da mídia social. As informações de perfil que recebemos podem variar dependendo do provedor da mídia social em questão, mas geralmente incluem seu nome, endereço de e-mail, lista de amigos e foto de perfil, bem como outras informações que você optar por tornar públicas nessa plataforma de mídia social.
                      </p>
                      
                      <p>
                        Usaremos as informações que recebermos apenas para os fins descritos neste Aviso de Privacidade ou que forem claramente informados a você nos Serviços relevantes. Observe que não controlamos, nem somos responsáveis, por outros usos de suas informações pessoais por seu provedor de mídia social terceirizado. Recomendamos que você revise o aviso de privacidade deles para entender como eles coletam, usam e compartilham suas informações pessoais e como você pode definir suas preferências de privacidade em seus sites e aplicativos.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 8 */}
                <section id="retencao" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">8</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">Por Quanto Tempo Guardamos Suas Informações?</h2>
                  </div>

                  <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                    <p className="text-sm text-muted-foreground italic mb-4">
                      Resumindo: Mantemos suas informações pelo tempo necessário para completar as finalidades descritas neste Aviso de Privacidade, a menos que exigido de outra forma por lei.
                    </p>
                    
                    <div className="prose-editorial space-y-3 text-base text-muted-foreground">
                      <p>
                        Conservaremos suas informações pessoais apenas pelo tempo necessário para os fins descritos neste Aviso de Privacidade, a menos que um período de retenção mais longo seja exigido ou permitido por lei (como para fins fiscais, contábeis ou outros requisitos legais).
                      </p>
                      
                      <p>
                        Quando não houver mais necessidade comercial legítima de processar suas informações pessoais, iremos excluí-las ou anonimizá-las, ou, caso isso não seja possível (por exemplo, porque suas informações pessoais foram armazenadas em backups), armazenaremos suas informações pessoais com segurança e as isolaremos de qualquer processamento adicional até que a exclusão seja possível.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 9 */}
                <section id="seguranca" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">9</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">Como Mantemos Suas Informações Seguras?</h2>
                  </div>

                  <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                    <p className="text-sm text-muted-foreground italic mb-4">
                      Resumindo: Nosso objetivo é proteger suas informações pessoais por meio de um sistema de medidas de segurança técnica e organizacional.
                    </p>
                    
                    <div className="prose-editorial space-y-3 text-base text-muted-foreground">
                      <p>
                        Implementamos medidas técnicas apropriadas e razoáveis, organizacionais e implementamos medidas de segurança para proteger a segurança de quaisquer informações pessoais que processamos. No entanto, apesar de nossas medidas de segurança e esforços para proteger suas informações, nenhuma transmissão eletrônica pela Internet ou tecnologia de armazenamento de informações pode ser garantida como 100% segura. Portanto, não podemos prometer ou garantir que hackers, cibercriminosos ou outros agentes maliciosos não consigam acessar ou acessar suas informações, não poderão burlar nossa segurança nem coletar, acessar, roubar ou modificar suas informações indevidamente.
                      </p>
                      
                      <p>
                        Embora façamos o possível para proteger suas informações pessoais, a transmissão de informações pessoais de e para nossos Serviços é de sua inteira responsabilidade. Você deve acessar os Serviços somente em um ambiente seguro.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 10 */}
                <section id="menores" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">10</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">Coletamos Informações de Menores?</h2>
                  </div>

                  <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                    <p className="text-sm text-muted-foreground italic mb-4">
                      Resumindo: Não coletamos dados de pessoas intencionalmente descritas nem realizamos marketing direcionado a elas. Crianças menores de 18 anos de idade ou a idade equivalente conforme especificado por lei em sua jurisdição não são nosso público-alvo.
                    </p>
                    
                    <div className="prose-editorial space-y-3 text-base text-muted-foreground">
                      <p>
                        Não coletamos, solicitamos dados ou direcionamos marketing a crianças menores de 18 anos de idade, de forma consciente ou a idade equivalente conforme especificado por lei em sua jurisdição. Nem vendemos intencionalmente essas informações pessoais. Ao usar os Serviços, você declara ter pelo menos 18 anos de idade ou a idade equivalente conforme especificado por lei em sua jurisdição, ou que você é o pai ou responsável legal de um menor de idade e consente com o uso dos Serviços por esse menor.
                      </p>
                      
                      <p>
                        Se tomarmos conhecimento de que informações pessoais de usuários menores de 18 anos foram obtidas, ou a idade equivalente conforme especificado por lei em sua jurisdição, caso tenhamos coletado esses dados, desativaremos a conta e tomaremos as medidas cabíveis para excluí-los prontamente de nossos registros.
                      </p>
                      
                      <p>
                        Se você tomar conhecimento de quaisquer dados que possamos ter coletado de crianças menores de 18 anos, entre em contato conosco imediatamente ou a idade equivalente conforme especificado por lei em sua jurisdição, entre em contato conosco em <a href="mailto:contato@theartofyoga.org" className="text-primary hover:underline">contato@theartofyoga.org</a>.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 11 */}
                <section id="direitos" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">11</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">Quais São Seus Direitos de Privacidade?</h2>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                      <p className="text-sm text-muted-foreground italic mb-4">
                        Resumindo: Dependendo do seu estado de residência nos EUA ou em algumas regiões, como Espaço Econômico Europeu (EEE), Reino Unido (RU), Suíça e Canadá, você possui direitos que lhe permitem maior acesso e controle sobre suas informações pessoais. Você pode revisar, alterar ou encerrar sua conta a qualquer momento, dependendo do seu país, província ou estado de residência.
                      </p>
                      
                      <div className="prose-editorial space-y-3 text-base text-muted-foreground">
                        <p>
                          Em algumas regiões (como EEE, Reino Unido, Suíça e Canadá) Você tem certos direitos de acordo com as leis de proteção de dados aplicáveis. Esses direitos podem incluir o direito de:
                        </p>
                        
                        <ul className="space-y-2 mt-3">
                          <li className="flex items-start gap-2">
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium text-primary">i</span>
                            <span className="text-sm">solicitar acesso e obter uma cópia de suas informações pessoais</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium text-primary">ii</span>
                            <span className="text-sm">solicitar a retificação ou o apagamento</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium text-primary">iii</span>
                            <span className="text-sm">restringir o processamento de suas informações pessoais</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium text-primary">iv</span>
                            <span className="text-sm">se aplicável, à portabilidade dos dados</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium text-primary">v</span>
                            <span className="text-sm">não ser submetido a decisões automatizadas</span>
                          </li>
                        </ul>
                        
                        <p className="mt-3">
                          Caso uma decisão que produza efeitos legais ou similares seja tomada exclusivamente por meios automatizados, iremos informá-lo, explicar os principais fatores e oferecer uma maneira simples de solicitar uma revisão humana. Em determinadas circunstâncias, você também poderá ter o direito de se opor ao processamento de suas informações pessoais.
                        </p>
                        
                        <p>
                          Você pode fazer essa solicitação entrando em contato conosco através dos dados de contato fornecidos na seção 16. Como você pode entrar em contato conosco sobre este aviso? abaixo.
                        </p>
                        
                        <p>
                          Analisaremos e atenderemos a qualquer solicitação de acordo com as leis de proteção de dados aplicáveis.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="bg-card rounded-lg p-4 shadow-soft border border-border/30">
                        <div className="flex items-center gap-2 mb-2">
                          <Globe className="w-5 h-5 text-primary" />
                          <h4 className="font-display text-base font-light">EEE ou Reino Unido</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Se você estiver localizado no Espaço Econômico Europeu (EEE) ou no Reino Unido e acreditar que estamos processando suas informações pessoais de forma ilegal, você também tem o direito de apresentar uma reclamação à autoridade de proteção de dados do seu Estado-Membro ou à autoridade de proteção de dados do Reino Unido.
                        </p>
                      </div>
                      
                      <div className="bg-card rounded-lg p-4 shadow-soft border border-border/30">
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="w-5 h-5 text-primary" />
                          <h4 className="font-display text-base font-light">Suíça</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Se você estiver localizado na Suíça, poderá entrar em contato com o Comissário Federal de Proteção de Dados e Informação.
                        </p>
                      </div>
                    </div>

                    <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                      <h4 className="font-display text-lg font-light mb-3 flex items-center gap-2">
                        <RefreshCw className="w-5 h-5 text-primary" />
                        Retirada do seu consentimento
                      </h4>
                      <div className="prose-editorial text-base text-muted-foreground space-y-2">
                        <p>
                          Se estivermos dependendo do seu consentimento para processar suas informações pessoais, que pode ser consentimento expresso e/ou implícito, dependendo da legislação aplicável, você tem o direito de retirar seu consentimento a qualquer momento. Você pode retirar seu consentimento a qualquer momento entrando em contato conosco através dos dados de contato fornecidos na seção 16.
                        </p>
                        <p>
                          No entanto, observe que isso não afetará a legalidade do processamento antes de sua retirada, nem quando a legislação aplicável o permitir.
                        </p>
                      </div>
                    </div>

                    <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                      <h4 className="font-display text-lg font-light mb-3 flex items-center gap-2">
                        <Mail className="w-5 h-5 text-primary" />
                        Cancelamento de comunicações de marketing
                      </h4>
                      <p className="text-base text-muted-foreground">
                        Você pode cancelar a assinatura de nossas comunicações de marketing e promocionais a qualquer momento clicando no link de cancelamento de inscrição nos e-mails que enviamos, ou entrando em contato conosco através dos dados fornecidos na seção 16. Você será então removido das listas de marketing. No entanto, ainda poderemos entrar em contato com você — por exemplo, para enviar mensagens relacionadas ao serviço que sejam necessárias para a administração e uso da sua conta, para responder a solicitações de serviço ou para outros fins não relacionados a marketing.
                      </p>
                    </div>

                    <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                      <h4 className="font-display text-lg font-light mb-3 flex items-center gap-2">
                        <Cookie className="w-5 h-5 text-primary" />
                        Cookies e tecnologias semelhantes
                      </h4>
                      <p className="text-base text-muted-foreground">
                        A maioria dos navegadores da Web está configurada para aceitar cookies por padrão. Se preferir, você geralmente pode configurar seu navegador para remover e rejeitar cookies. Caso opte por remover ou rejeitar cookies, isso poderá afetar determinadas funcionalidades ou serviços dos nossos Serviços. Você também pode optar por não receber anúncios com base em seus interesses exibidos por anunciantes em nossos Serviços.
                      </p>
                    </div>

                    <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                      <p className="text-sm text-muted-foreground">
                        Se você tiver dúvidas ou comentários sobre seus direitos de privacidade, pode nos enviar um e-mail para <a href="mailto:privacidade@theartofyoga.org" className="text-primary hover:underline">privacidade@theartofyoga.org</a>.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 12 */}
                <section id="dnt" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">12</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">Controles para Recursos de Não Rastrear</h2>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                      <div className="prose-editorial space-y-3 text-base text-muted-foreground">
                        <p>
                          A maioria dos navegadores da web e alguns sistemas operacionais móveis e aplicativos móveis incluem um recurso "Não rastrear" (Do-Not-Track, "DNT") recurso ou configuração que você pode ativar para sinalizar sua preferência de privacidade de não ter seus dados sobre suas atividades de navegação online monitorados e coletados.
                        </p>
                        
                        <p>
                          Nesta fase, não existe um padrão tecnológico uniforme para reconhecimento e implementação de sinais DNT. Sendo assim, atualmente não respondemos a sinais DNT (Do Not Track) do navegador ou a qualquer outro mecanismo que comunique automaticamente sua escolha de não ser rastreado online.
                        </p>
                        
                        <p>
                          Caso seja adotado um padrão para rastreamento online que devamos seguir no futuro, informaremos você sobre essa prática em uma versão revisada deste Aviso de Privacidade.
                        </p>
                        
                        <p>
                          A legislação da Califórnia exige que informemos aos respondentes aos sinais "Não Rastrear" (DNT) dos navegadores da web. Isso ocorre porque atualmente não existe um padrão legal ou da indústria para reconhecimento e implementação de sinais DNT neste momento.
                        </p>
                      </div>
                    </div>

                    <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                      <h4 className="font-display text-lg font-light mb-3 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-primary" />
                        Controle Global de Privacidade
                      </h4>
                      <div className="prose-editorial text-base text-muted-foreground space-y-2">
                        <p>
                          Reconhecemos e respeitamos os sinais do Controle Global de Privacidade (GPC). Se você usa um navegador ou extensão que oferece suporte ao GPC, trataremos isso como uma solicitação válida para optar por não permitir a venda ou o compartilhamento de suas informações pessoais para fins de publicidade direcionada, conforme as leis de privacidade estaduais dos EUA, incluindo a Lei de Privacidade do Consumidor da Califórnia (CCPA).
                        </p>
                        <p>
                          Quando detectarmos um sinal de GPC em seu navegador, aplicaremos automaticamente sua preferência de não participação, sem exigir que você tome qualquer ação adicional. Para obter mais informações sobre o GPC e como ativá-lo, visite <a href="https://globalprivacycontrol.org" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">globalprivacycontrol.org</a>.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 13 */}
                <section id="eua" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">13</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">Direitos Específicos para Residentes dos EUA</h2>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                      <p className="text-sm text-muted-foreground italic">
                        Resumindo: Se você reside em Califórnia, Colorado, Connecticut, Delaware, Flórida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, Nova Hampshire, Nova Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah ou Virgínia, você pode ter o direito de solicitar acesso e receber detalhes sobre as informações pessoais que mantemos a seu respeito e como as processamos, corrigir imprecisões, obter uma cópia ou excluir suas informações pessoais. Você também pode ter o direito de revogar seu consentimento para o processamento de suas informações pessoais. Esses direitos podem ser limitados em algumas circunstâncias pela legislação aplicável. Mais informações são fornecidas abaixo.
                      </p>
                    </div>

                    <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                      <h3 className="font-display text-xl font-light mb-4">Categorias de informações pessoais que coletamos</h3>
                      <p className="text-base text-muted-foreground mb-4">
                        A tabela abaixo mostra as categorias de informações pessoais que coletamos nos últimos doze (12) meses. A tabela inclui exemplos ilustrativos de cada categoria e não reflete as informações pessoais que coletamos de você. Para obter um inventário completo de todas as informações pessoais que processamos, consulte a seção "QUE INFORMAÇÕES COLETAMOS?"
                      </p>
                      
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-border">
                              <th className="text-left py-2 px-3 font-medium text-foreground">Categoria</th>
                              <th className="text-left py-2 px-3 font-medium text-foreground">Exemplos</th>
                              <th className="text-center py-2 px-3 font-medium text-foreground">Coletado</th>
                            </tr>
                          </thead>
                          <tbody>
                            {dataCategories.map((item, index) => (
                              <tr key={index} className="border-b border-border/50">
                                <td className="py-2 px-3 font-medium text-foreground align-top">{item.category}</td>
                                <td className="py-2 px-3 text-muted-foreground align-top">{item.examples}</td>
                                <td className="py-2 px-3 text-center align-top">
                                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs ${item.collected ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'}`}>
                                    {item.collected ? 'SIM' : 'NÃO'}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                      <p className="text-base text-muted-foreground mb-3">
                        Também podemos coletar outras informações pessoais fora dessas categorias por meio de interações suas conosco pessoalmente, online, por telefone ou por correio, no contexto de:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-base text-muted-foreground ml-4">
                        <li>Receber ajuda através dos nossos canais de apoio ao cliente</li>
                        <li>Participação em pesquisas ou concursos com clientes</li>
                        <li>Facilitar a prestação dos nossos serviços e responder às suas solicitações</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 14 */}
                <section id="outras-regioes" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">14</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">Outras Regiões com Direitos Específicos</h2>
                  </div>

                  <div className="space-y-4">
                    {/* Australia & New Zealand */}
                    <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                      <div className="flex items-center gap-2 mb-3">
                        <Globe className="w-5 h-5 text-primary" />
                        <h3 className="font-display text-lg font-light">Austrália e Nova Zelândia</h3>
                      </div>
                      <div className="prose-editorial space-y-3 text-base text-muted-foreground">
                        <p>
                          Coletamos e processamos suas informações pessoais de acordo com as obrigações e condições estabelecidas pela Lei de Privacidade da Austrália de 1988 e Lei de Privacidade da Nova Zelândia de 2020.
                        </p>
                        <p>
                          Este Aviso de Privacidade atende aos requisitos de notificação definidos em ambas as Leis de Privacidade, em particular: quais informações pessoais coletamos de você, de quais fontes, para quais finalidades e outros destinatários de suas informações pessoais.
                        </p>
                        <p>
                          Caso não deseje fornecer as informações pessoais necessárias para cumprir a finalidade aplicável, isso pode afetar nossa capacidade de fornecer nossos serviços, em particular:
                        </p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Oferecer os produtos ou serviços que você deseja</li>
                          <li>Responder ou ajudar com suas solicitações</li>
                        </ul>
                        <p>
                          A qualquer momento, você tem direito de solicitar acesso ou correção de suas informações pessoais. Você pode fazer essa solicitação entrando em contato conosco através dos dados de contato fornecidos na seção 17.
                        </p>
                        <p>
                          Se você acredita que estamos processando suas informações pessoais de forma ilegal, você tem o direito de apresentar uma reclamação sobre uma violação dos Princípios Australianos de Privacidade ao Gabinete do Comissário de Informação Australiano ou violação dos Princípios de Privacidade da Nova Zelândia ao Gabinete do Comissário de Privacidade da Nova Zelândia.
                        </p>
                      </div>
                    </div>

                    {/* South Africa */}
                    <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                      <div className="flex items-center gap-2 mb-3">
                        <MapPin className="w-5 h-5 text-primary" />
                        <h3 className="font-display text-xl font-light">República da África do Sul</h3>
                      </div>
                      <div className="prose-editorial space-y-3 text-base text-muted-foreground">
                        <p>
                          A qualquer momento, você tem o direito de solicitar acesso, correção e exclusão de suas informações pessoais. Você pode fazer essa solicitação entrando em contato conosco através dos dados de contato fornecidos na seção 17.
                        </p>
                        <p>
                          Caso esteja insatisfeito com a forma como tratamos qualquer reclamação relativa ao nosso processamento de informações pessoais, pode contactar a entidade reguladora:
                        </p>
                        <div className="p-3 bg-muted/50 rounded-lg mt-3">
                          <p className="font-medium text-foreground text-sm mb-2">Regulador de Informação (África do Sul)</p>
                          <ul className="text-sm space-y-1">
                            <li>Para informações gerais: enquires@inforegulator.org.za</li>
                            <li>Reclamações (preencher o formulário POP/PAIA): PAIACComplaints@inforegulator.org.za e POPIAComplaints@inforegulator.org.za</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 15 */}
                <section id="atualizacoes" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">15</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">Atualizamos Este Aviso?</h2>
                  </div>

                  <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                    <p className="text-sm text-muted-foreground italic mb-4">
                      Resumindo: Sim, atualizaremos este aviso conforme necessário para cumprir as leis aplicáveis.
                    </p>
                    
                    <div className="prose-editorial space-y-3 text-base text-muted-foreground">
                      <p>
                        Podemos atualizar este Aviso de Privacidade periodicamente. A versão atualizada será indicada por uma nova data de "Revisado" no topo deste Aviso de Privacidade. Caso façamos alterações substanciais a este Aviso de Privacidade, podemos notificá-lo por e-mail ou por meio de uma notificação em nosso site. Recomendamos que você revise este Aviso de Privacidade com frequência para se manter informado sobre como protegemos suas informações.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 16 */}
                <section id="contato" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">16</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">Como Entrar em Contato Conosco?</h2>
                  </div>

                  <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                    <p className="text-base text-muted-foreground mb-4">
                      Se você tiver dúvidas ou comentários sobre este aviso, pode entrar em contato conosco.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Mail className="w-5 h-5 text-primary" />
                          <h4 className="font-medium text-foreground text-base">E-mail</h4>
                        </div>
                        <a href="mailto:contato@theartofyoga.org" className="text-primary hover:underline text-base">
                          contato@theartofyoga.org
                        </a>
                      </div>
                      
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="w-5 h-5 text-primary" />
                          <h4 className="font-medium text-foreground text-base">Endereço</h4>
                        </div>
                        <address className="not-italic text-muted-foreground text-sm">
                          The Art of Yoga<br />
                          Av. Júlia Freire, 1200 - Expedicionários<br />
                          João Pessoa - PB, 58041-000<br />
                          Brasil
                        </address>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mt-4 italic">
                      (Observação: você pode substituir o endereço físico acima pelo endereço real da organização, se desejar.)
                    </p>
                  </div>
                </section>

                {/* Section 17 */}
                <section id="revisar-dados" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-display text-primary">17</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-light">Como Revisar, Atualizar ou Excluir Seus Dados?</h2>
                  </div>

                  <div className="bg-card rounded-lg p-5 shadow-soft border border-border/30">
                    <div className="prose-editorial space-y-3 text-base text-muted-foreground">
                      <p>
                        Você tem o direito de solicitar acesso às informações que coletamos sobre você, corrigir imprecisões, obter uma cópia ou excluir suas informações pessoais. Você também pode ter o direito de revogar seu consentimento para o processamento de suas informações pessoais. Esses direitos podem ser limitados em algumas circunstâncias pela legislação aplicável.
                      </p>
                      
                      <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 mt-4">
                        <div className="flex items-start gap-2">
                          <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium text-foreground text-base mb-1">Solicitar acesso aos seus dados</p>
                            <p className="text-sm">
                              Para solicitar acesso, atualização, exclusão ou limitação das suas informações pessoais, por favor, preencha e envie uma solicitação de acesso ao titular dos dados (disponível em nosso site ou mediante contato com <a href="mailto:privacidade@theartofyoga.org" className="text-primary hover:underline">privacidade@theartofyoga.org</a>).
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Back to Top */}
                <div className="text-center pt-6">
                  <button 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
                  >
                    <ChevronRight className="w-4 h-4 rotate-[-90deg]" />
                    Voltar ao topo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
};

export default PrivacyPolicy;
