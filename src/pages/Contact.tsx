import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send,
  Clock,
  MessageCircle,
  User,
  FileText,
  CheckCircle,
  Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Mensagem enviada!",
      description: "Agradecemos seu contato. Responderemos em breve.",
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "E-mail Geral",
      value: "contato@theartofyoga.org",
      href: "mailto:contato@theartofyoga.org",
      description: "Para dúvidas gerais e informações"
    },
    {
      icon: Mail,
      title: "Privacidade",
      value: "privacidade@theartofyoga.org",
      href: "mailto:privacidade@theartofyoga.org",
      description: "Para questões sobre dados pessoais"
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "(+55) 11 99736 1698",
      href: "tel:+5511997361698",
      description: "WhatsApp disponível"
    },
    {
      icon: MapPin,
      title: "Endereço",
      value: "Av. Júlia Freire, 1200 - Expedicionários",
      secondaryValue: "João Pessoa - PB, 58041-000, Brasil",
      description: "Correspondência e visitas"
    }
  ];

  return (
    <main className="pt-32">
      <Helmet>
        <title>Contato | A Arte do Yoga</title>
        <meta name="description" content="Entre em contato com A Arte do Yoga. Envie sua mensagem, dúvida ou sugestão. Respondemos em até 24-48 horas úteis." />
        <link rel="canonical" href="https://theartofyoga.org/contato" />
        <meta property="og:title" content="Contato | A Arte do Yoga" />
        <meta property="og:url" content="https://theartofyoga.org/contato" />
        <meta property="og:image" content="https://theartofyoga.org/assets/og-image.jpg" />
        <meta property="og:site_name" content="A Arte do Yoga" />
        <meta property="og:locale" content="pt_BR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://theartofyoga.org/assets/og-image.jpg" />
      </Helmet>
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-muted/50 to-background animate-fade-in">
        <div className="container-editorial text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-2">
            <MessageCircle className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light">
            Entre em Contato
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estamos aqui para ajudar. Envie sua mensagem e responderemos o mais breve possível.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Info Sidebar */}
            <aside className="lg:col-span-2 space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="bg-card rounded-lg p-6 shadow-soft border border-border/50">
                <h2 className="font-display text-2xl font-light mb-6">Informações de Contato</h2>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-4 animate-fade-in"
                      style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-medium mb-1">{info.title}</h3>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-primary hover:underline text-base"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <>
                            <p className="text-foreground text-base">{info.value}</p>
                            {info.secondaryValue && (
                              <p className="text-foreground text-base">{info.secondaryValue}</p>
                            )}
                          </>
                        )}
                        <p className="text-sm text-muted-foreground mt-1">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Time Card */}
              <div 
                className="bg-primary/5 rounded-lg p-6 border border-primary/20 animate-fade-in"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display text-lg font-medium mb-1">Tempo de Resposta</h3>
                    <p className="text-sm text-muted-foreground">
                      Normalmente respondemos em até <strong className="text-foreground">24-48 horas</strong> úteis.
                    </p>
                  </div>
                </div>
              </div>
            </aside>

            {/* Contact Form */}
            <div 
              className="lg:col-span-3 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-card rounded-lg p-6 md:p-8 shadow-soft border border-border/50">
                <h2 className="font-display text-2xl font-light mb-6">Envie sua Mensagem</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center gap-2">
                        <User className="w-4 h-4 text-muted-foreground" />
                        Nome Completo
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-background"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                        E-mail
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-muted-foreground" />
                      Assunto
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Qual o assunto da sua mensagem?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-muted-foreground" />
                      Mensagem
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Escreva sua mensagem aqui..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-background resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full md:w-auto px-8"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Additional Info */}
              <div 
                className="mt-6 p-4 bg-muted/50 rounded-lg border border-border/50 animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    Ao enviar este formulário, você concorda com nossa{" "}
                    <a href="/politica-privacidade" className="text-primary hover:underline">
                      Política de Privacidade
                    </a>. Seus dados serão tratados com segurança e confidencialidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
