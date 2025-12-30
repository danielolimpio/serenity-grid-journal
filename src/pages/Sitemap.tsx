import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Sitemap = () => {
  const siteStructure = [
    {
      title: "Páginas Principais",
      links: [
        { name: "Início", url: "/" },
        { name: "Sobre", url: "/sobre" },
      ]
    },
    {
      title: "Categorias",
      links: [
        { name: "Prática", url: "/categoria/pratica" },
        { name: "Filosofia", url: "/categoria/filosofia" },
        { name: "Bem-estar", url: "/categoria/bem-estar" },
        { name: "Meditação", url: "/categoria/meditacao" },
      ]
    },
    {
      title: "Artigos em Destaque",
      links: [
        { name: "Despertar Através da Respiração Consciente", url: "/artigo/despertar-atraves-da-respiracao-consciente" },
        { name: "Os Oito Membros do Yoga", url: "/artigo/os-oito-membros-do-yoga" },
        { name: "Meditação para Iniciantes", url: "/artigo/meditacao-para-iniciantes" },
        { name: "Yoga e Alimentação Consciente", url: "/artigo/yoga-e-alimentacao-consciente" },
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Política de Privacidade", url: "/politica-privacidade" },
        { name: "Termos de Uso", url: "/termos" },
        { name: "Política de Cookies", url: "/cookies" },
        { name: "Sitemap", url: "/sitemap" },
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-32">
        {/* Hero */}
        <section className="section-spacing">
          <div className="container-editorial text-center space-y-6">
            <h1 className="font-display text-5xl md:text-7xl font-light">
              Sitemap
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Navegue por todas as páginas e seções do nosso site. Encontre facilmente o conteúdo que você procura.
            </p>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="section-spacing bg-muted/30">
          <div className="container-editorial">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {siteStructure.map((section, index) => (
                <div key={index} className="space-y-6">
                  <h2 className="font-display text-2xl md:text-3xl font-light border-b border-border/50 pb-4">
                    {section.title}
                  </h2>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link 
                          to={link.url}
                          className="text-lg text-muted-foreground hover:text-primary transition-editorial flex items-center gap-2 group"
                        >
                          <span className="w-1.5 h-1.5 bg-primary/40 rounded-full group-hover:bg-primary transition-editorial"></span>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* XML Sitemap Info */}
        <section className="section-spacing">
          <div className="container-editorial max-w-3xl text-center space-y-6">
            <h2 className="font-display text-3xl md:text-4xl font-light">
              Para Mecanismos de Busca
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Se você é um rastreador de mecanismo de busca, o sitemap XML está disponível em{" "}
              <a 
                href="/sitemap.xml" 
                className="text-primary hover:underline transition-editorial"
                target="_blank"
                rel="noopener noreferrer"
              >
                /sitemap.xml
              </a>
            </p>
          </div>
        </section>

        {/* Note */}
        <section className="section-spacing bg-card">
          <div className="container-editorial max-w-3xl text-center space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Esta página é atualizada regularmente para refletir o conteúdo mais recente do site. Última atualização: Dezembro 2024.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sitemap;
