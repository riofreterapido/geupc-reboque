import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import { Phone, MessageCircle, Zap, AlertCircle, Battery, Wrench, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeService, setActiveService] = useState(0);

  const whatsappNumber = "21996458786";
  const phoneNumber = "21996458786";

  const services = [
    {
      id: "moto",
      title: "Reboque de Moto",
      description: "Transporte seguro de motocicletas com profissionais treinados",
      icon: "🏍️",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029749426/AguzkXadHqoKU5FzcPnFuE/servico-moto-K9NwiNQShTgcukQnB65hQ4.webp",
    },
    {
      id: "carro",
      title: "Reboque de Carro",
      description: "Reboque rápido e seguro para carros de qualquer tamanho",
      icon: "🚗",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029749426/AguzkXadHqoKU5FzcPnFuE/servico-carro-Uvd5aHePAXv8ADgpkx4Yn6.webp",
    },
    {
      id: "bateria",
      title: "Carga de Bateria",
      description: "Carga de bateria no local, sem necessidade de reboque",
      icon: "🔋",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029749426/AguzkXadHqoKU5FzcPnFuE/servico-bateria-Z7Lt2V39STJGatLQ3DKyZe.webp",
    },
    {
      id: "pane",
      title: "Pane Seca",
      description: "Diagnóstico e reparo rápido de problemas mecânicos",
      icon: "🔧",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029749426/AguzkXadHqoKU5FzcPnFuE/servico-pane-347RQ7nXYtKucFk7BzLdfX.webp",
    },
  ];

  const neighborhoods = [
    "Penha", "Olaria", "Ramos", "Penha Circular", "Brás de Pina",
    "Cordovil", "Parada de Lucas", "Coelho Neto", "Rocha Miranda",
    "Bento Ribeiro", "Manguinhos", "Moneró", "Taquara", "Madureira",
    "Irajá", "Pavuna", "Acari", "Anchieta", "Guadalupe", "Caxias"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-primary/20 text-primary px-4 py-2 rounded font-mono text-sm font-bold">
                  24 HORAS • ZONA NORTE RJ
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Reboque Profissional <span className="text-primary">24H</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Atendimento rápido e confiável na Zona Norte do Rio de Janeiro. Reboque de moto, carro, carga de bateria e pane seca. Chegamos em minutos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Olá%20Geupc%20Reboque!%20Preciso%20de%20um%20reboque.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white gap-2 font-bold font-mono text-base">
                    <MessageCircle className="w-5 h-5" />
                    Chamar no WhatsApp
                  </Button>
                </a>

                <a href={`tel:${phoneNumber}`}>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 gap-2 font-bold font-mono text-base">
                    <Phone className="w-5 h-5" />
                    Ligar Agora
                  </Button>
                </a>
              </div>

              <div className="flex gap-8 pt-8 border-t border-border">
                <div>
                  <div className="text-3xl font-bold text-primary font-mono">24/7</div>
                  <div className="text-sm text-muted-foreground">Atendimento</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary font-mono">+500</div>
                  <div className="text-sm text-muted-foreground">Clientes</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary font-mono">&lt;5min</div>
                  <div className="text-sm text-muted-foreground">Tempo Médio</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg"></div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029749426/AguzkXadHqoKU5FzcPnFuE/hero-reboque-juotEM7SrWXmRhE4ma7bL7.webp"
                alt="Geupc Reboque em ação"
                className="w-full rounded-lg shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-card/50 border-y border-border">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-muted-foreground text-lg">Soluções completas para emergências automotivas</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card
                key={service.id}
                className="bg-background border-border hover:border-primary transition-all duration-300 cursor-pointer overflow-hidden group"
                onClick={() => setActiveService(idx)}
              >
                <div className="aspect-square overflow-hidden bg-muted relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                </div>

                <div className="p-6">
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Por que escolher a Geupc?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Resposta Rápida", desc: "Chegamos em minutos" },
              { icon: AlertCircle, title: "Profissionais", desc: "Equipe treinada e experiente" },
              { icon: Clock, title: "24 Horas", desc: "Atendimento dia e noite" },
              { icon: MapPin, title: "Zona Norte", desc: "Especialistas da região" },
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6 rounded-lg bg-card/50 border border-border hover:border-primary transition-colors">
                <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Area Section */}
      <section className="py-16 bg-card/50 border-y border-border">
        <div className="container">
          <h2 className="text-4xl font-bold mb-4 text-center">Cobertura na Zona Norte</h2>
          <p className="text-muted-foreground text-center mb-12">Atendemos os principais bairros da Zona Norte do Rio de Janeiro</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {neighborhoods.map((neighborhood, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-background border border-border text-center hover:border-primary transition-colors"
              >
                <p className="font-mono text-sm font-bold">{neighborhood}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary"></div>
        </div>

        <div className="container relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Precisa de Reboque Agora?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Não espere! Nos chame agora mesmo e resolva seu problema em minutos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${whatsappNumber}?text=Olá%20Geupc%20Reboque!%20Preciso%20de%20um%20reboque%20urgente.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white gap-2 font-bold font-mono text-base px-8">
                <MessageCircle className="w-5 h-5" />
                WhatsApp: {phoneNumber}
              </Button>
            </a>

            <a href={`tel:${phoneNumber}`}>
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground gap-2 font-bold font-mono text-base px-8">
                <Phone className="w-5 h-5" />
                Ligar: {phoneNumber}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                  <span className="text-primary-foreground font-bold font-mono">G</span>
                </div>
                <span className="font-bold text-primary font-mono">GEUPC REBOQUE</span>
              </div>
              <p className="text-muted-foreground text-sm">Reboque profissional 24h na Zona Norte do Rio de Janeiro</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  <a href={`tel:${phoneNumber}`} className="hover:text-primary transition-colors">
                    Telefone: {phoneNumber}
                  </a>
                </p>
                <p className="text-muted-foreground">
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    WhatsApp: {phoneNumber}
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Reboque de Moto</li>
                <li>• Reboque de Carro</li>
                <li>• Carga de Bateria</li>
                <li>• Pane Seca</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
            <p>&copy; 2026 Geupc Reboque. Todos os direitos reservados.</p>
            <p className="mt-2">Atendimento 24h • Zona Norte - Rio de Janeiro</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
